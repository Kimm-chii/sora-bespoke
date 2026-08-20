import { content } from "../data/content";

export function Footer() {
  return (
    <footer className="bg-white text-brand-text pt-24 pb-12 border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-serif font-light italic text-brand-text tracking-[0.4em] mb-2">
              {content.brandName}
            </h3>
            <span className="text-[9px] uppercase tracking-[0.3em] text-brand-meta mb-8 block">
              {content.tagline}
            </span>
            <p className="text-sm text-brand-muted font-light max-w-sm leading-relaxed">
              {content.footer.about}
            </p>
          </div>
          
          <div>
            <h4 className="text-[10px] font-medium tracking-[0.2em] uppercase text-brand-text mb-8">Explore</h4>
            <ul className="space-y-4">
              {content.footer.links.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm font-light text-brand-meta hover:text-brand-text transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-medium tracking-[0.2em] uppercase text-brand-text mb-8">Connect</h4>
            <ul className="space-y-4">
              {content.footer.social.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm font-light text-brand-meta hover:text-brand-text transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] text-brand-meta font-light tracking-[0.2em] uppercase">
            © {new Date().getFullYear()} {content.brandName}. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6 text-[9px] text-brand-meta font-light tracking-[0.2em] uppercase">
            <a href="#" className="hover:text-brand-text transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-text transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
