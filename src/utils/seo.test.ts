import test from 'node:test';
import assert from 'node:assert/strict';
import { getRouteMeta, generateBreadcrumbSchema, routeMetadataMap } from './seo';

test('getRouteMeta returns exact metadata for home and service routes', () => {
  const home = getRouteMeta('/');
  assert.ok(home.title.includes('HydroScan Engineering'));
  assert.ok(home.description.includes('Hyderabad'));

  const bathroom = getRouteMeta('/services/bathroom-leakage-detection');
  assert.ok(bathroom.title.includes('Bathroom Leakage Detection'));
  assert.ok(bathroom.canonical.includes('/services/bathroom-leakage-detection'));

  const trailingSlash = getRouteMeta('/services/bathroom-leakage-detection/');
  assert.equal(trailingSlash.title, bathroom.title);

  const unknown = getRouteMeta('/some-random-broken-path');
  assert.ok(unknown.title.includes('404'));
});

test('generateBreadcrumbSchema builds valid Schema.org structure', () => {
  const schema = generateBreadcrumbSchema('/services/pipeline-leakage-detection') as any;
  assert.equal(schema['@type'], 'BreadcrumbList');
  assert.equal(schema.itemListElement.length, 3);
  assert.equal(schema.itemListElement[0].name, 'Home');
  assert.equal(schema.itemListElement[1].name, 'Services');
  assert.equal(schema.itemListElement[2].name, 'Pipeline Leakage Detection');
});
