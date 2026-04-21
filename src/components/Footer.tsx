import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-[#050505] border-t border-white/5 py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-20 mb-20 md:mb-40">
          
          {/* Brand */}
          <div className="lg:col-span-2 space-y-16">
            <Link to="/" className="inline-block scale-125 origin-left">
              <img
                src="/images/logohustle.svg"
                alt="Hustle Labs"
                className="h-10 w-auto invert brightness-200"
                style={{ filter: "invert(1) brightness(2)" }}
              />
            </Link>
            <div className="space-y-8">
              <p className="font-display text-2xl md:text-4xl font-normal text-white/90 leading-tight tracking-tight max-w-sm">
                Architecting digital dominance for the next generation of builders.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-primary/30" />
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/60 italic">
                  Growth Intelligence · Strategic Implementation
                </p>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-12">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 mb-8 block">Navigation</h4>
            <nav className="flex flex-col gap-6">
              <Link to="/services" className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80 hover:text-primary transition-all duration-300">Services</Link>
              <Link to="/portfolio" className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80 hover:text-primary transition-all duration-300">Projects</Link>
              <Link to="/roster" className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80 hover:text-primary transition-all duration-300">The Roster</Link>
              <Link to="/contact" className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80 hover:text-primary transition-all duration-300">Contact</Link>
            </nav>
          </div>

          {/* Location */}
          <div className="space-y-12">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 mb-8 block">Studio</h4>
            <div className="space-y-6">
              <p className="text-xs font-semibold text-white/80 uppercase tracking-widest leading-relaxed">
                Ελευθ. Σκοπευτών 15<br />
                Γαλατάς, Χανιά 731 00
              </p>
              <a 
                href="https://www.google.com/maps/dir//HustleLabs,+%CE%95%CE%BB%CE%B5%CF%85%CE%B8.+%CE%A3%CE%BA%CE%BF%CF%80%CE%B5%CF%85%CF%84%CF%8E%CE%BD+15,+%CE%93%CE%B1%CE%BB%CE%B1%CF%84%CE%AC%CF%82+731+00" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary hover:text-white transition-colors"
              >
                View on Maps <ArrowRight size={12} />
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-12">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 mb-8 block">Connect</h4>
            <div className="flex gap-10">
              <motion.a whileHover={{ y: -4, color: "#D0FF00" }} href="https://www.instagram.com/hustlelabs.gr/" target="_blank" className="text-white/80 transition-colors">
                <Instagram size={28} />
              </motion.a>
              <motion.a whileHover={{ y: -4, color: "#D0FF00" }} href="https://web.facebook.com/profile.php?id=61586295570858" target="_blank" className="text-white/80 transition-colors">
                <Facebook size={28} />
              </motion.a>
              <motion.a whileHover={{ y: -4, color: "#D0FF00" }} href="https://www.tiktok.com/@hustlelabs.gr" target="_blank" className="text-white/80 transition-colors">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tiktok"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
              </motion.a>
              <motion.a whileHover={{ y: -4, color: "#D0FF00" }} href="mailto:info@hustlelabs.gr" className="text-white/80 transition-colors">
                <Mail size={28} />
              </motion.a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between gap-12 sm:gap-6 flex-wrap">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/50 italic order-2 md:order-1 tracking-widest">
            © {new Date().getFullYear()} Hustle Labs. Handcrafted for the bold.
          </p>
          <div className="flex gap-12 order-1 md:order-2 flex-wrap sm:flex-nowrap">
            <Link to="/privacy" className="text-[10px] font-black uppercase tracking-[0.5em] text-white/50 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-[10px] font-black uppercase tracking-[0.5em] text-white/50 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
