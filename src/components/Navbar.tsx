import { content } from "../data/content";
import { Menu, Search, ShoppingBag } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-brand-bg/90 backdrop-blur-md border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-6 lg:hidden">
            <button aria-label="Menu" className="p-2 -ml-2 text-brand-text hover:opacity-50 transition-opacity">
              <Menu className="w-5 h-5" />
            </button>
          </div>
          
          <nav className="hidden lg:flex gap-8 flex-1">
            {content.navigation.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-[11px] font-medium tracking-[0.2em] text-brand-text hover:opacity-50 uppercase transition-opacity"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex flex-col items-center justify-center flex-1">
            <a href="#" className="text-3xl font-serif font-light italic tracking-[0.4em] text-brand-text uppercase flex flex-col items-center">
              {content.brandName}
            </a>
            <span className="text-[9px] uppercase tracking-[0.3em] text-brand-meta mt-1 hidden sm:block">
              {content.tagline}
            </span>
          </div>

          <div className="flex items-center justify-end gap-4 flex-1">
            <button aria-label="Search" className="p-2 text-brand-text hover:opacity-50 transition-opacity hidden sm:block">
              <Search className="w-4 h-4" />
            </button>
            <button aria-label="Cart" className="p-2 -mr-2 text-brand-text hover:opacity-50 transition-opacity relative">
              <ShoppingBag className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-brand-text rounded-full"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
