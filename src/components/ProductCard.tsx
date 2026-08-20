import { Product } from "../types";
import { CustomImage } from "./CustomImage";
import { motion } from "motion/react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="group cursor-pointer flex flex-col"
    >
      <div className="relative overflow-hidden bg-brand-image-bg border border-brand-border mb-4 aspect-[4/5]">
        <CustomImage 
          src={product.image} 
          alt={product.name}
          className="transition-transform duration-[1.5s] ease-out group-hover:scale-105 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-brand-text/0 group-hover:bg-brand-text/5 transition-colors duration-500"></div>
      </div>
      <div className="flex justify-between items-end mt-1 flex-grow">
        <div className="flex flex-col">
          <h3 className="text-sm font-medium tracking-wide text-brand-text group-hover:opacity-70 transition-opacity duration-300">
            {product.name}
          </h3>
          <p className="text-[11px] text-brand-meta italic font-serif mt-0.5 line-clamp-1">
            {product.description}
          </p>
        </div>
        <span className="text-xs font-medium text-brand-text shrink-0 ml-4">
          {product.price}
        </span>
      </div>
    </motion.div>
  );
}
