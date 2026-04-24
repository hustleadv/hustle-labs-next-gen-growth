import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("hustle-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("hustle-cookie-consent", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 left-6 right-6 z-[200] md:left-auto md:max-w-md"
        >
          <div className="glass-card p-6 rounded-[2rem] border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Cookie size={20} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold uppercase tracking-widest">Cookie Settings</h4>
                  <p className="text-xs text-white/50 leading-relaxed">
                    Χρησιμοποιούμε cookies για να βελτιώσουμε την εμπειρία σας και να αναλύσουμε την επισκεψιμότητά μας.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <Button 
                  onClick={handleAccept}
                  className="w-full sm:w-auto rounded-full px-8 bg-white text-black hover:bg-primary transition-all font-black text-[10px] uppercase tracking-widest h-12"
                >
                  Accept All
                </Button>
                <Button 
                  variant="ghost" 
                  asChild
                  className="w-full sm:w-auto rounded-full px-6 text-[10px] uppercase tracking-widest h-12 font-bold text-white/40 hover:text-white"
                >
                  <Link to="/cookies">Περισσότερα <ArrowRight size={12} className="ml-2" /></Link>
                </Button>
              </div>
            </div>
            
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-white/20 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
