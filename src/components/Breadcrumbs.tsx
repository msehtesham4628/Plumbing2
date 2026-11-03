import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  items: {
    label: string;
    path?: string;
  }[];
  onNavigate: (path: string) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center flex-wrap gap-2 text-xs text-slate-400">
        <li>
          <button
            onClick={() => onNavigate('/')}
            className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
              <li>
                {isLast || !item.path ? (
                  <span className="text-slate-200 font-semibold truncate max-w-xs block">
                    {item.label}
                  </span>
                ) : (
                  <button
                    onClick={() => onNavigate(item.path!)}
                    className="hover:text-amber-400 transition-colors truncate max-w-xs block"
                  >
                    {item.label}
                  </button>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};
