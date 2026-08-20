import { motion } from "motion/react";
import { CustomImage } from "./CustomImage";

export function Features() {
  return (
    <section id="bespoke" className="bg-white border-y border-brand-border py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1 relative"
          >
             <CustomImage 
               src="/images/bespoke-process.webp" 
               alt="Bespoke jewelry crafting process" 
               className="w-full max-w-md mx-auto lg:max-w-none shadow-sm"
               aspectRatio="aspect-[4/5]"
             />
             <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-brand-image-bg -z-10 hidden md:block"></div>
             <div className="absolute -top-8 -left-8 w-32 h-32 border border-brand-border -z-10 hidden md:block"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2 space-y-10"
          >
            <div>
              <span className="text-[10px] text-brand-meta uppercase tracking-[0.3em] mb-4 block font-bold">
                The Sora Experience
              </span>
              <h2 className="text-4xl lg:text-5xl font-serif font-light italic text-brand-text mb-6 leading-tight">
                Crafting Your <br/> Unique Story
              </h2>
              <p className="text-brand-muted font-light leading-relaxed text-sm">
                Our bespoke process is a collaborative journey. From the initial sketch to the final polish, we work closely with you to design a piece that perfectly captures your love story. Every ring is meticulously handcrafted by our master artisans using ethically sourced diamonds and fine metals.
              </p>
            </div>
            
            <div className="space-y-8 pt-8 border-t border-brand-border">
              {[
                { title: "01. Consultation", desc: "Share your vision and preferences with our expert designers to begin the journey." },
                { title: "02. Design & Refine", desc: "Review 3D renders, select your perfect stones, and finalize every detail." },
                { title: "03. The Reveal", desc: "Receive a masterfully crafted ring, ready to be worn for a lifetime." }
              ].map((step) => (
                <div key={step.title} className="flex flex-col">
                  <h4 className="text-[13px] font-medium tracking-[0.1em] text-brand-text uppercase mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-brand-muted font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a href="#" className="inline-block bg-brand-text text-white text-[11px] uppercase tracking-[0.2em] py-4 px-8 hover:bg-brand-hover transition-colors w-fit">
                Book a Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
