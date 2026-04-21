import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail } from "lucide-react";
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
            <div className="space-y-6">
              <p className="font-display text-3xl md:text-4xl font-black text-white italic uppercase tracking-tighter max-w-sm mb-4 leading-[0.9]">
                Building the next generation of businesses.
              </p>
              <p className="text-[11px] font-black uppercase tracking-[0.5em] text-primary italic leading-none">
                HustleLabs backs the next generation of builders.
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-12">
            <h4 className="text-[10px] font-black uppercase tracking-[0.6em] text-white/50">Navigation</h4>
            <nav className="flex flex-col gap-8">
              <Link to="/services" className="text-xs font-black uppercase tracking-widest text-white/80 hover:text-primary transition-colors italic">Services</Link>
              <Link to="/portfolio" className="text-xs font-black uppercase tracking-widest text-white/80 hover:text-primary transition-colors italic">Projects</Link>
              <Link to="/roster" className="text-xs font-black uppercase tracking-widest text-white/80 hover:text-primary transition-colors italic">The Roster</Link>
              <Link to="/contact" className="text-xs font-black uppercase tracking-widest text-white/80 hover:text-primary transition-colors italic">Contact</Link>
              <Link to="/book-call" className="text-xs font-black uppercase tracking-widest text-white/80 hover:text-primary transition-colors italic">Book a call</Link>
            </nav>
          </div>

          {/* Social */}
          <div className="space-y-12">
            <h4 className="text-[10px] font-black uppercase tracking-[0.6em] text-white/50">Connect</h4>
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
