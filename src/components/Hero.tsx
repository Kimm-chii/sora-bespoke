import { content } from "../data/content";
import { CustomImage } from "./CustomImage";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-brand-bg border-b border-brand-border">
      <div className="absolute inset-0 z-0">
        <CustomImage 
          src={content.hero.image} 
          alt="Hero background" 
          className="object-cover w-full h-full opacity-90" 
          aspectRatio="aspect-auto h-full"
        />
        <div className="absolute inset-0 bg-brand-text/10"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex justify-center md:justify-end">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="bg-brand-bg/95 border border-brand-border backdrop-blur-md p-10 md:p-14 text-center max-w-lg shadow-sm"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-light italic text-brand-text mb-6 leading-tight">
            {content.hero.headline}
          </h1>
          <p className="text-brand-muted text-sm md:text-base mb-10 leading-relaxed font-light">
            {content.hero.subheadline}
          </p>
          <a 
            href="#collections"
            className="inline-block bg-brand-text text-white px-8 py-4 text-[11px] font-medium uppercase tracking-[0.2em] hover:bg-brand-hover transition-colors duration-300"
          >
            {content.hero.cta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
