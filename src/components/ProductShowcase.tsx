import { useState } from "react";
import { content } from "../data/content";
import { ProductCard } from "./ProductCard";
import { motion, AnimatePresence } from "motion/react";

export function ProductShowcase() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts = activeCategory === "all" 
    ? content.products 
    : content.products.filter(p => p.category === activeCategory);

  return (
    <section id="collections" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-serif font-light italic text-brand-text mb-6">Curated Collections</h2>
        <div className="w-8 h-px bg-brand-border mx-auto mb-10"></div>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {content.categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`text-[11px] uppercase tracking-[0.15em] pb-1 border-b transition-all duration-300 ${
                activeCategory === category.id 
                  ? "border-brand-text text-brand-text font-medium" 
                  : "border-transparent text-brand-meta hover:text-brand-text"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
