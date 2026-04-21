import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Users, Heart, Globe, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const WordPressIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={`w-10 h-10 ${className}`} aria-hidden="true">
    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM3.443 12c0-1.36.325-2.645.9-3.782l4.955 13.58A8.563 8.563 0 013.443 12zm8.557 8.557a8.519 8.519 0 01-3.024-.55l3.212-9.332 3.293 9.02a.807.807 0 00.061.12 8.52 8.52 0 01-3.542.742zm1.476-12.564c.645-.034 1.226-.1 1.226-.1.577-.068.51-.916-.068-.884 0 0-1.735.136-2.855.136-1.052 0-2.82-.136-2.82-.136-.578-.032-.645.85-.068.884 0 0 .546.066 1.122.1l1.667 4.566-2.342 7.023L6.382 12.1c.645-.034 1.226-.1 1.226-.1.577-.068.51-.916-.068-.884 0 0-1.735.136-2.855.136-.2 0-.437-.006-.687-.015A8.535 8.535 0 0112 3.443c2.242 0 4.286.862 5.813 2.27-.037-.002-.072-.008-.11-.008-1.052 0-1.798.916-1.798 1.9 0 .884.51 1.632 1.052 2.516.408.714.884 1.632.884 2.956 0 .918-.352 1.983-.816 3.468l-1.071 3.576-3.878-11.528zM17.07 19.32l3.26-9.424a8.088 8.088 0 00.645-3.18c0-.327-.02-.647-.06-.96A8.545 8.545 0 0120.557 12a8.556 8.556 0 01-3.487 7.32z" />
  </svg>
);

const CommunityTrustStrip = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="py-12"
    >
      <div className="relative group max-w-5xl mx-auto px-4 md:px-8">
        {/* The Card - Dark Mode / Quiet Luxury */}
        <div className="relative bg-[#0a0a0a] border border-white/5 p-8 md:p-12 rounded-[3rem] md:rounded-[4rem] overflow-hidden flex flex-col lg:flex-row items-center gap-10 lg:gap-14 text-center lg:text-left shadow-2xl transition-all duration-700 hover:border-primary/20">

          {/* Minimal ambient gradient */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none -z-10 translate-x-1/4 -translate-y-1/4 blur-[100px] opacity-30" style={{ background: "radial-gradient(circle, hsl(var(--primary)/0.1) 0%, transparent 70%)" }} />

          {/* Graphical Side */}
          <div className="relative shrink-0">
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-[2rem] bg-white/[0.02] border border-white/5 flex items-center justify-center text-white/20 group-hover:text-primary transition-all duration-700 shadow-inner backdrop-blur-sm group-hover:border-primary/20">
              <WordPressIcon className="w-12 h-12 md:w-16 md:h-16" />
            </div>

            <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-2xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-primary shadow-2xl transform group-hover:-translate-y-2 transition-all duration-500">
              <Users size={20} />
            </div>
          </div>

          {/* Content Side */}
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
              Η Δυναμη της Κοινοτητας
            </div>

            <h3 className="font-sans text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Chania <span className="text-white/20">WordPress Meetup</span>
            </h3>

            <p className="text-white/40 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
              Είμαστε περήφανοι διοργανωτές και ο επίσημος χώρος φιλοξενίας της κοινότητας WordPress στα Χανιά. Αναπτύσσουμε το τοπικό οικοσύστημα μαζί.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-6 border-t border-white/5">
              <div className="flex items-center gap-2.5 text-[10px] font-bold text-white/20 uppercase tracking-widest">
                <MapPin size={16} className="text-primary/40" /> <span>Τοπικος Κομβος</span>
              </div>
              <div className="flex items-center gap-2.5 text-[10px] font-bold text-white/20 uppercase tracking-widest">
                <Heart size={16} className="text-primary/40" /> <span>Στηριζουμε εμπρακτα</span>
              </div>
            </div>
          </div>

          {/* CTA Side */}
          <div className="shrink-0 w-full lg:w-auto flex flex-col items-center lg:items-end gap-5">
            <Button size="xl" className="rounded-full px-10 h-16 text-lg font-bold shadow-xl shadow-primary/5 group overflow-hidden bg-primary text-black hover:bg-white transition-all border-none" asChild>
              <Link to="/hustle-meetups" className="flex items-center gap-3">
                Δες τα Meetups <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <span className="text-[10px] font-bold text-white/10 uppercase tracking-[0.4em]">
              ελα στο επομενο event
            </span>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default CommunityTrustStrip;
