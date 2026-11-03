import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

interface ThreeThermalScannerProps {
  initialMode?: 'thermal' | 'xray' | 'visual';
  compact?: boolean;
}

export const ThreeThermalScanner: React.FC<ThreeThermalScannerProps> = ({
  initialMode = 'thermal',
  compact = false,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeMode, setActiveMode] = useState<'thermal' | 'xray' | 'visual'>(initialMode);
  const [palette, setPalette] = useState<'ironbow' | 'rainbow' | 'arctic' | 'whitehot'>('whitehot');
  const [explodeFactor, setExplodeFactor] = useState<number>(0.2); // 0 to 1
  const [isDockCollapsed, setIsDockCollapsed] = useState<boolean>(false);
  const [inspectDepth, setInspectDepth] = useState<number>(42); // mm
  const [detectedDeltaT] = useState<string>('-4.2°C');

  // Mutable refs for Three.js render loop without React re-renders tearing down canvas
  const stateRef = useRef({
    mode: initialMode,
    palette: 'whitehot' as 'ironbow' | 'rainbow' | 'arctic' | 'whitehot',
    targetExplode: 0.2,
    currentExplode: 0.2,
    cameraAngle: 0.35,
    cameraElevation: 0.25,
    isInteracting: false,
    lastPointerX: 0,
    lastPointerY: 0,
    tileMeshes: [] as THREE.Mesh[],
    tileMaterial: null as THREE.MeshStandardMaterial | null,
    thermalMaterial: null as THREE.MeshBasicMaterial | null,
    laserLine: null as THREE.Line | null,
    pipeGroup: null as THREE.Group | null,
    cameraGroup: null as THREE.Group | null,
    dropletMesh: null as THREE.Mesh | null,
    dropletY: 0,
    thermalTexture: null as THREE.CanvasTexture | null,
  });

  // Keep stateRef synced
  useEffect(() => {
    stateRef.current.mode = activeMode;
    stateRef.current.palette = palette;
    stateRef.current.targetExplode = explodeFactor;
    updateThermalTexture(palette);
  }, [activeMode, palette, explodeFactor]);

  // Procedural thermal texture generator (creates authentic FLIR Ironbow / Rainbow / Arctic / White & Black palettes)
  const updateThermalTexture = useCallback((pal: 'ironbow' | 'rainbow' | 'arctic' | 'whitehot') => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Fill background with baseline wall temp
    ctx.fillStyle = pal === 'arctic' ? '#111827' : pal === 'whitehot' ? '#000000' : '#030712';
    ctx.fillRect(0, 0, 512, 512);

    // Create radial thermal moisture anomaly plume centered around concealed leak coordinate
    const centerX = 240;
    const centerY = 280;
    const radius = 190;
    const grad = ctx.createRadialGradient(centerX, centerY, 15, centerX, centerY, radius);

    if (pal === 'ironbow') {
      // Classic FLIR Ironbow: White/Yellow core -> Orange -> Magenta -> Purple -> Dark Blue/Black
      grad.addColorStop(0.0, '#ffffff'); // Hottest / cold anomaly center peak
      grad.addColorStop(0.15, '#fde047');
      grad.addColorStop(0.35, '#f97316');
      grad.addColorStop(0.60, '#c026d3');
      grad.addColorStop(0.85, '#3b0764');
      grad.addColorStop(1.0, '#030712');
    } else if (pal === 'rainbow') {
      // High-contrast rainbow
      grad.addColorStop(0.0, '#ef4444');
      grad.addColorStop(0.25, '#eab308');
      grad.addColorStop(0.50, '#22c55e');
      grad.addColorStop(0.75, '#06b6d4');
      grad.addColorStop(1.0, '#0f172a');
    } else if (pal === 'whitehot') {
      // White & Black (FLIR White Hot Monochrome)
      grad.addColorStop(0.0, '#ffffff');
      grad.addColorStop(0.25, '#e2e8f0');
      grad.addColorStop(0.55, '#64748b');
      grad.addColorStop(0.80, '#1e293b');
      grad.addColorStop(1.0, '#020617');
    } else {
      // Arctic Cold Spot (Moisture cooling signature)
      grad.addColorStop(0.0, '#38bdf8');
      grad.addColorStop(0.30, '#0284c7');
      grad.addColorStop(0.65, '#1e3a8a');
      grad.addColorStop(0.90, '#0f172a');
      grad.addColorStop(1.0, '#030712');
    }

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fill();

    // Add subtle moisture migration fringes
    ctx.globalAlpha = 0.45;
    ctx.fillStyle = pal === 'ironbow' ? '#9333ea' : '#0284c7';
    ctx.beginPath();
    ctx.ellipse(centerX - 30, centerY + 50, 90, 140, Math.PI / 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1.0;

    // Technical crosshair and temperature annotation on the texture
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(centerX - 15, centerY);
    ctx.lineTo(centerX + 15, centerY);
    ctx.moveTo(centerX, centerY - 15);
    ctx.lineTo(centerX, centerY + 15);
    ctx.stroke();

    ctx.fillStyle = '#f8fafc';
    ctx.font = 'bold 16px monospace';
    ctx.fillText('Sp1: 22.4°C', centerX + 20, centerY - 10);
    ctx.fillStyle = '#38bdf8';
    ctx.fillText('ΔT: -4.2°C', centerX + 20, centerY + 14);

    if (stateRef.current.thermalTexture) {
      stateRef.current.thermalTexture.image = canvas;
      stateRef.current.thermalTexture.needsUpdate = true;
    }
  }, []);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Detect Software WebGL
    const isSoftwareGl = (() => {
      const gl = document.createElement('canvas').getContext('webgl2');
      if (!gl) return true;
      const ext = gl.getExtension('WEBGL_debug_renderer_info');
      const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
      const gpu = String(gl.getParameter(param));
      gl.getExtension('WEBGL_lose_context')?.loseContext();
      return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
    })();

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 500;

    // 2. Setup Scene & Camera
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf8fafc);
    scene.fog = new THREE.FogExp2(0xf8fafc, 0.05);

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(2.8, 1.6, 3.8);

    // 3. Renderer with ACESFilmicToneMapping & sRGB
    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      powerPreference: 'high-performance',
      alpha: false,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = !isSoftwareGl;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // 4. Studio Environment Lighting (RoomEnvironment)
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    pmremGenerator.dispose();

    // 3-Point Studio Rig
    const keyLight = new THREE.DirectionalLight(0xfff5ea, 2.2);
    keyLight.position.set(4, 5, 3);
    keyLight.castShadow = !isSoftwareGl;
    if (keyLight.shadow) {
      keyLight.shadow.mapSize.width = 1024;
      keyLight.shadow.mapSize.height = 1024;
      keyLight.shadow.bias = -0.0005;
      keyLight.shadow.normalBias = 0.02;
    }
    scene.add(keyLight);

    const fillLight = new THREE.HemisphereLight(0x38bdf8, 0x0f172a, 1.2);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0x38bdf8, 1.0);
    rimLight.position.set(-3, 3, -2);
    scene.add(rimLight);

    // Ground Contact Shadow Plane
    const groundGeo = new THREE.PlaneGeometry(10, 10);
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0xf1f5f9,
      roughness: 0.85,
      metalness: 0.1,
    });
    const groundMesh = new THREE.Mesh(groundGeo, groundMat);
    groundMesh.rotation.x = -Math.PI / 2;
    groundMesh.position.y = -1.2;
    groundMesh.receiveShadow = !isSoftwareGl;
    scene.add(groundMesh);

    // ==========================================
    // PROCEDURAL 3D COMPOSITE BUILDING MODEL
    // Assembled as a THREE.Group of 8 distinct parts
    // ==========================================
    const buildingGroup = new THREE.Group();
    scene.add(buildingGroup);

    // Part 1: Structural Concrete Plinth Base
    const plinthGeo = new THREE.BoxGeometry(2.4, 0.25, 1.6);
    const plinthMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.9,
      metalness: 0.1,
    });
    const plinth = new THREE.Mesh(plinthGeo, plinthMat);
    plinth.position.set(0, -1.05, 0);
    plinth.castShadow = !isSoftwareGl;
    plinth.receiveShadow = !isSoftwareGl;
    buildingGroup.add(plinth);

    // Part 2: Masonry Brick / RCC Backing Wall
    const wallGeo = new THREE.BoxGeometry(2.2, 1.8, 0.25);
    const wallMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      roughness: 0.8,
      metalness: 0.15,
    });
    const backWall = new THREE.Mesh(wallGeo, wallMat);
    backWall.position.set(0, 0, -0.15);
    backWall.castShadow = !isSoftwareGl;
    backWall.receiveShadow = !isSoftwareGl;
    buildingGroup.add(backWall);

    // Part 3: Internal RCC Rebar Steel Cage (4 vertical + 3 horizontal bars)
    const rebarGroup = new THREE.Group();
    const rebarMat = new THREE.MeshStandardMaterial({
      color: 0x64748b,
      roughness: 0.4,
      metalness: 0.85,
    });
    for (let i = 0; i < 4; i++) {
      const vBar = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 1.7, 8), rebarMat);
      vBar.position.set(-0.8 + i * 0.53, 0, -0.1);
      rebarGroup.add(vBar);
    }
    for (let j = 0; j < 3; j++) {
      const hBar = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 2.0, 8), rebarMat);
      hBar.rotation.z = Math.PI / 2;
      hBar.position.set(0, -0.6 + j * 0.6, -0.09);
      rebarGroup.add(hBar);
    }
    buildingGroup.add(rebarGroup);

    // Part 4 & 5: Concealed Pipeline Assembly (Cold CPVC + Hot PPR lines with brass fittings)
    const pipeGroup = new THREE.Group();
    stateRef.current.pipeGroup = pipeGroup;

    // Cold water pipe (Blue CPVC)
    const coldPipeMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      roughness: 0.35,
      metalness: 0.3,
    });
    const coldPipe = new THREE.Mesh(new THREE.CylinderGeometry(0.024, 0.024, 1.8, 16), coldPipeMat);
    coldPipe.position.set(-0.25, 0, 0.04);
    pipeGroup.add(coldPipe);

    // Hot water pipe (Red PPR)
    const hotPipeMat = new THREE.MeshStandardMaterial({
      color: 0xdc2626,
      roughness: 0.35,
      metalness: 0.3,
    });
    const hotPipe = new THREE.Mesh(new THREE.CylinderGeometry(0.024, 0.024, 1.8, 16), hotPipeMat);
    hotPipe.position.set(0.25, 0, 0.04);
    pipeGroup.add(hotPipe);

    // Brass T-Junction Valve & Fittings at leak site
    const brassMat = new THREE.MeshStandardMaterial({
      color: 0xd97706,
      roughness: 0.2,
      metalness: 0.95,
    });
    const teeJunction = new THREE.Mesh(new THREE.CylinderGeometry(0.038, 0.038, 0.12, 16), brassMat);
    teeJunction.position.set(-0.25, 0.1, 0.04);
    pipeGroup.add(teeJunction);

    const teeCross = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.028, 0.16, 16), brassMat);
    teeCross.rotation.z = Math.PI / 2;
    teeCross.position.set(-0.20, 0.1, 0.04);
    pipeGroup.add(teeCross);

    // Stainless pipe clamps
    const clampMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      roughness: 0.15,
      metalness: 0.9,
    });
    [-0.5, 0.6].forEach((yPos) => {
      const clamp = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.04, 0.04), clampMat);
      clamp.position.set(-0.25, yPos, 0.04);
      pipeGroup.add(clamp);
    });

    buildingGroup.add(pipeGroup);

    // Water droplet leak simulation mesh
    const dropletGeo = new THREE.SphereGeometry(0.015, 12, 12);
    const dropletMat = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      transmission: isSoftwareGl ? 0 : 0.85,
      opacity: 0.75,
      transparent: true,
      roughness: 0.1,
      ior: 1.33,
    });
    const droplet = new THREE.Mesh(dropletGeo, dropletMat);
    droplet.position.set(-0.16, 0.08, 0.04);
    pipeGroup.add(droplet);
    stateRef.current.dropletMesh = droplet;

    // Part 6: Thermal Anomaly Plume (CanvasTexture on a quad aligned with the wall)
    const thermalTexCanvas = document.createElement('canvas');
    thermalTexCanvas.width = 512;
    thermalTexCanvas.height = 512;
    const thermalTex = new THREE.CanvasTexture(thermalTexCanvas);
    thermalTex.colorSpace = THREE.SRGBColorSpace;
    stateRef.current.thermalTexture = thermalTex;

    const thermalMat = new THREE.MeshBasicMaterial({
      map: thermalTex,
      transparent: true,
      opacity: 0.92,
      depthWrite: false,
    });
    stateRef.current.thermalMaterial = thermalMat;

    const thermalPlane = new THREE.Mesh(new THREE.PlaneGeometry(2.1, 1.7), thermalMat);
    thermalPlane.position.set(0, 0, 0.09);
    buildingGroup.add(thermalPlane);

    // Part 7: Outer Large-Format Ceramic Tiles with Grout Lines
    const tileGroup = new THREE.Group();
    buildingGroup.add(tileGroup);

    const tileMaterial = new THREE.MeshStandardMaterial({
      color: 0xf1f5f9,
      roughness: 0.25,
      metalness: 0.1,
      polygonOffset: true,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1,
    });
    stateRef.current.tileMaterial = tileMaterial;

    const tiles: THREE.Mesh[] = [];
    const tileW = 0.65;
    const tileH = 0.52;
    const gap = 0.015;

    for (let row = -1; row <= 1; row++) {
      for (let col = -1; col <= 1; col++) {
        const tileGeo = new THREE.BoxGeometry(tileW - gap, tileH - gap, 0.025);
        const tile = new THREE.Mesh(tileGeo, tileMaterial);
        tile.position.set(col * tileW, row * tileH, 0.12);
        tile.castShadow = !isSoftwareGl;
        tile.receiveShadow = !isSoftwareGl;
        tileGroup.add(tile);
        tiles.push(tile);
      }
    }
    stateRef.current.tileMeshes = tiles;

    // Part 8: Handheld FLIR Diagnostic Thermal Camera Model (`THREE.Group` with 6 distinct parts)
    const cameraGroup = new THREE.Group();
    stateRef.current.cameraGroup = cameraGroup;

    // 1. Camera Body Grip
    const camGripGeo = new THREE.BoxGeometry(0.12, 0.32, 0.14);
    const camBodyMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.45,
      metalness: 0.2,
    });
    const camGrip = new THREE.Mesh(camGripGeo, camBodyMat);
    camGrip.position.set(0, -0.1, 0);
    cameraGroup.add(camGrip);

    // 2. Camera Head & Bezel (FLIR signature yellow/orange rubberized accent)
    const camHeadGeo = new THREE.BoxGeometry(0.24, 0.22, 0.22);
    const camAccentMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      roughness: 0.35,
      metalness: 0.15,
    });
    const camHead = new THREE.Mesh(camHeadGeo, camAccentMat);
    camHead.position.set(0, 0.12, 0);
    cameraGroup.add(camHead);

    // 3. Germanium IR Lens Cylinder with anti-reflective coating
    const lensGeo = new THREE.CylinderGeometry(0.065, 0.075, 0.12, 24);
    const lensMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.1,
      metalness: 0.9,
    });
    const lens = new THREE.Mesh(lensGeo, lensMat);
    lens.rotation.x = Math.PI / 2;
    lens.position.set(0, 0.12, -0.14);
    cameraGroup.add(lens);

    // 4. Optical glass front element
    const glassGeo = new THREE.CircleGeometry(0.06, 24);
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      roughness: 0.05,
      metalness: 0.1,
      transmission: isSoftwareGl ? 0 : 0.8,
      transparent: true,
      opacity: 0.85,
    });
    const glass = new THREE.Mesh(glassGeo, glassMat);
    glass.rotation.y = Math.PI;
    glass.position.set(0, 0.12, -0.201);
    cameraGroup.add(glass);

    // 5. Live Viewfinder LCD on the back of the camera
    const screenGeo = new THREE.PlaneGeometry(0.18, 0.15);
    const screenMat = new THREE.MeshBasicMaterial({
      map: thermalTex, // Feeds live thermogram to the camera viewfinder screen!
    });
    const screen = new THREE.Mesh(screenGeo, screenMat);
    screen.position.set(0, 0.12, 0.111);
    cameraGroup.add(screen);

    // 6. Targeting Laser Ray Emitter
    const laserMat = new THREE.LineBasicMaterial({
      color: 0xef4444,
      linewidth: 2,
    });
    const laserPoints = [new THREE.Vector3(0, 0.12, -0.2), new THREE.Vector3(-0.16, 0.1, -1.2)];
    const laserGeo = new THREE.BufferGeometry().setFromPoints(laserPoints);
    const laserLine = new THREE.Line(laserGeo, laserMat);
    cameraGroup.add(laserLine);
    stateRef.current.laserLine = laserLine;

    // Position camera observing the wall
    cameraGroup.position.set(0.6, 0.05, 1.4);
    cameraGroup.rotation.y = Math.PI + 0.35;
    scene.add(cameraGroup);

    // Generate initial thermal texture
    updateThermalTexture(palette);

    // ==========================================
    // INTERACTION: Pointer Orbit / Rotate
    // ==========================================
    const onPointerDown = (e: PointerEvent) => {
      stateRef.current.isInteracting = true;
      stateRef.current.lastPointerX = e.clientX;
      stateRef.current.lastPointerY = e.clientY;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!stateRef.current.isInteracting) return;
      const deltaX = e.clientX - stateRef.current.lastPointerX;
      const deltaY = e.clientY - stateRef.current.lastPointerY;
      stateRef.current.lastPointerX = e.clientX;
      stateRef.current.lastPointerY = e.clientY;

      stateRef.current.cameraAngle -= deltaX * 0.006;
      stateRef.current.cameraElevation = Math.max(
        -0.2,
        Math.min(0.8, stateRef.current.cameraElevation + deltaY * 0.005)
      );
    };

    const onPointerUp = () => {
      stateRef.current.isInteracting = false;
    };

    container.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    // ==========================================
    // ANIMATION LOOP & SOFTWARE-WEBGL GUARD
    // ==========================================
    let frameId = 0;
    const clock = new THREE.Clock();

    function afterDraw(cb: () => void) {
      const glCtx = renderer.getContext() as WebGL2RenderingContext;
      const sync = glCtx.fenceSync(glCtx.SYNC_GPU_COMMANDS_COMPLETE, 0);
      glCtx.flush();
      const poll = () => {
        const state = sync && glCtx.getSyncParameter(sync, glCtx.SYNC_STATUS);
        if (state === glCtx.UNSIGNALED) {
          frameId = window.setTimeout(poll, 5);
        } else {
          glCtx.deleteSync(sync);
          frameId = window.setTimeout(cb, 80);
        }
      };
      frameId = window.setTimeout(poll, 5);
    }

    const tick = () => {
      const delta = clock.getDelta();
      const st = stateRef.current;

      // 1. Exponential damping for exploded view layer separation
      st.currentExplode = THREE.MathUtils.damp(st.currentExplode, st.targetExplode, 5.0, delta);

      // Apply exploded displacement to tiles
      st.tileMeshes.forEach((tile) => {
        tile.position.z = 0.12 + st.currentExplode * 0.65;
      });

      // 2. Adjust material appearance based on active mode
      if (st.tileMaterial && st.thermalMaterial) {
        if (st.mode === 'thermal') {
          st.tileMaterial.opacity = THREE.MathUtils.damp(st.tileMaterial.opacity, 0.25, 6, delta);
          st.tileMaterial.transparent = true;
          st.thermalMaterial.opacity = THREE.MathUtils.damp(st.thermalMaterial.opacity, 0.95, 6, delta);
          st.thermalMaterial.visible = true;
        } else if (st.mode === 'xray') {
          st.tileMaterial.opacity = THREE.MathUtils.damp(st.tileMaterial.opacity, 0.08, 6, delta);
          st.tileMaterial.transparent = true;
          st.thermalMaterial.opacity = THREE.MathUtils.damp(st.thermalMaterial.opacity, 0.2, 6, delta);
          st.thermalMaterial.visible = false;
        } else {
          // Standard Visual mode (dry clean tile appearance)
          st.tileMaterial.opacity = THREE.MathUtils.damp(st.tileMaterial.opacity, 1.0, 6, delta);
          st.tileMaterial.transparent = false;
          st.thermalMaterial.opacity = THREE.MathUtils.damp(st.thermalMaterial.opacity, 0.0, 6, delta);
          st.thermalMaterial.visible = false;
        }
      }

      // 3. Water droplet animation dripping from valve
      if (st.dropletMesh) {
        st.dropletY -= delta * 0.4;
        if (st.dropletY < -0.8) {
          st.dropletY = 0.08;
        }
        st.dropletMesh.position.y = st.dropletY;
      }

      // 4. Subtle camera floating damping
      const targetRadius = 4.2;
      const targetCamX = Math.sin(st.cameraAngle) * targetRadius;
      const targetCamZ = Math.cos(st.cameraAngle) * targetRadius;
      const targetCamY = 1.2 + st.cameraElevation * 2.0;

      camera.position.x = THREE.MathUtils.damp(camera.position.x, targetCamX, 4.0, delta);
      camera.position.z = THREE.MathUtils.damp(camera.position.z, targetCamZ, 4.0, delta);
      camera.position.y = THREE.MathUtils.damp(camera.position.y, targetCamY, 4.0, delta);
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);

      if (isSoftwareGl) {
        afterDraw(tick);
      } else {
        frameId = requestAnimationFrame(tick);
      }
    };

    tick();

    // Resize handling
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(frameId);
      window.removeEventListener('resize', onResize);
      container.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [palette, updateThermalTexture]);

  return (
    <div
      className={`relative w-full rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-50 shadow-xl select-none ${
        compact ? 'h-[440px]' : 'h-[580px] lg:h-[660px]'
      }`}
      data-testid="three-thermal-scanner"
    >
      {/* 3D WebGL Canvas Container */}
      <div ref={mountRef} className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Top Left Diagnostics HUD Pill */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5 p-3 rounded-xl bg-white/95 border border-neutral-200 backdrop-blur-md text-xs pointer-events-none shadow-md">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-black animate-pulse" />
          <span className="font-semibold uppercase tracking-wider text-black">
            FLIR 3D Diagnostic Simulator
          </span>
        </div>
        <div className="flex items-center gap-3 text-neutral-600 font-mono text-[11px]">
          <span>Concealed Pipe: CPVC 25mm</span>
          <span>·</span>
          <span>Depth: {inspectDepth}mm</span>
          <span>·</span>
          <span className="text-black font-bold">Cold Anomaly: {detectedDeltaT}</span>
        </div>
      </div>

      {/* Top Right Guidance */}
      <div className="absolute top-4 right-4 z-10 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/90 border border-neutral-200 text-[11px] text-neutral-600 shadow-sm">
        <span>Click & Drag to Rotate 3D Scene</span>
      </div>

      {/* Viewport-First Collapsible Bottom Control Dock */}
      <div
        className={`absolute bottom-3 left-1/2 -translate-x-1/2 z-20 w-[94%] max-w-2xl transition-all duration-300 ease-out ${
          isDockCollapsed ? 'translate-y-[calc(100%-36px)]' : 'translate-y-0'
        }`}
      >
        {/* Dock Header & Collapse Toggle */}
        <div className="flex justify-center -mb-px">
          <button
            onClick={() => setIsDockCollapsed(!isDockCollapsed)}
            className="flex items-center gap-1.5 px-3.5 py-1 text-xs font-medium rounded-t-lg bg-white border-t border-x border-neutral-200 text-neutral-700 hover:text-black transition-colors cursor-pointer shadow-sm"
            aria-label={isDockCollapsed ? 'Expand 3D Controls Dock' : 'Collapse 3D Controls Dock'}
          >
            <span>{isDockCollapsed ? '▴ Show Diagnostics Dock' : '▾ Hide Controls'}</span>
          </button>
        </div>

        {/* Unified Bottom Control Panel */}
        <div className="p-3.5 rounded-2xl bg-white/95 border border-neutral-200 shadow-xl backdrop-blur-md text-neutral-900">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
            {/* Control 1: Inspection View Modes */}
            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-medium text-neutral-500 uppercase tracking-wider">
                Inspection Mode
              </span>
              <div className="grid grid-cols-3 gap-1 p-0.5 rounded-lg bg-neutral-100 border border-neutral-200 text-xs font-medium">
                <button
                  onClick={() => setActiveMode('thermal')}
                  className={`py-1 px-2 rounded-md transition-colors cursor-pointer ${
                    activeMode === 'thermal'
                      ? 'bg-black text-white font-semibold shadow-sm'
                      : 'text-neutral-600 hover:text-black'
                  }`}
                >
                  Thermal
                </button>
                <button
                  onClick={() => setActiveMode('xray')}
                  className={`py-1 px-2 rounded-md transition-colors cursor-pointer ${
                    activeMode === 'xray'
                      ? 'bg-black text-white font-semibold shadow-sm'
                      : 'text-neutral-600 hover:text-black'
                  }`}
                >
                  X-Ray
                </button>
                <button
                  onClick={() => setActiveMode('visual')}
                  className={`py-1 px-2 rounded-md transition-colors cursor-pointer ${
                    activeMode === 'visual'
                      ? 'bg-black text-white font-semibold shadow-sm'
                      : 'text-neutral-600 hover:text-black'
                  }`}
                >
                  Visual
                </button>
              </div>
            </div>

            {/* Control 2: Exploded Wall Layer Slider */}
            <div className="flex flex-col gap-1">
              <div className="flex justify-between text-[11px] text-neutral-600 font-medium">
                <span className="uppercase tracking-wider">Exploded Tiles</span>
                <span className="text-black font-mono font-bold">{Math.round(explodeFactor * 100)}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={explodeFactor}
                onChange={(e) => setExplodeFactor(parseFloat(e.target.value))}
                className="w-full accent-black h-1.5 bg-neutral-200 rounded-lg cursor-pointer"
                aria-label="Explode Wall Layers Slider"
              />
            </div>

            {/* Control 3: Thermographic Palette Switcher */}
            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-medium text-neutral-500 uppercase tracking-wider">
                Thermal Palette
              </span>
              <div className="grid grid-cols-4 gap-1 p-0.5 rounded-lg bg-neutral-100 border border-neutral-200 text-[11px] font-medium">
                <button
                  onClick={() => setPalette('ironbow')}
                  className={`py-1 px-1 rounded-md transition-colors truncate cursor-pointer ${
                    palette === 'ironbow'
                      ? 'bg-neutral-800 text-white font-bold shadow-sm'
                      : 'text-neutral-600 hover:text-black'
                  }`}
                  title="FLIR Ironbow Palette"
                >
                  Ironbow
                </button>
                <button
                  onClick={() => setPalette('whitehot')}
                  className={`py-1 px-1 rounded-md transition-colors truncate cursor-pointer ${
                    palette === 'whitehot'
                      ? 'bg-black text-white font-bold shadow-sm'
                      : 'text-neutral-600 hover:text-black'
                  }`}
                  title="White & Black (FLIR White Hot)"
                >
                  W & B
                </button>
                <button
                  onClick={() => setPalette('arctic')}
                  className={`py-1 px-1 rounded-md transition-colors truncate cursor-pointer ${
                    palette === 'arctic'
                      ? 'bg-neutral-700 text-white font-bold'
                      : 'text-neutral-600 hover:text-black'
                  }`}
                  title="Arctic Cold-Spot Palette"
                >
                  Arctic
                </button>
                <button
                  onClick={() => setPalette('rainbow')}
                  className={`py-1 px-1 rounded-md transition-colors truncate cursor-pointer ${
                    palette === 'rainbow'
                      ? 'bg-neutral-900 text-white font-bold'
                      : 'text-neutral-600 hover:text-black'
                  }`}
                  title="High-Contrast Rainbow Palette"
                >
                  Rainbow
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
