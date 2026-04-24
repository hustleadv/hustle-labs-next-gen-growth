import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface PortfolioCardProps {
  title: string;
  category: string;
  image?: string;
  link?: string;
  isSoon?: boolean;
  className?: string;
  index: number;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ 
  title, 
  category, 
  image, 
  link, 
  isSoon, 
  className,
  index 
}) => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);

  if (isSoon) {
    return (
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        viewport={{ once: true }}
        className={cn(
          "group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-[#0d0d0d] aspect-[4/5] flex flex-col justify-end p-10",
          className
        )}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(208,255,0,0.03),transparent_70%)] group-hover:opacity-100 opacity-50 transition-opacity duration-1000" />
        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <motion.span 
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.03, 0.06, 0.03]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="text-[15vw] lg:text-[10vw] font-display font-normal uppercase italic tracking-tighter text-white"
          >
            SOON
          </motion.span>
        </div>

        <div className="relative z-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 mb-4 block">Next Deployment</span>
          <h3 className="text-3xl font-bold font-display text-white/40 tracking-tight leading-tight">Something <br/> BIG.</h3>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className={cn(
        "group relative overflow-hidden rounded-[2rem] border border-white/5 bg-[#080808] aspect-[4/5] md:aspect-[3/4] flex flex-col justify-end hover:border-primary/30 transition-all duration-700 shadow-2xl hover:shadow-primary/5",
        className
      )}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {image ? (
          <>
            <img 
              src={image} 
              alt={title} 
              loading="lazy"
              className="w-full h-full object-cover object-top transition-transform duration-1500 group-hover:scale-105" 
            />
            {/* Subtle overlay that lightens up compared to previous version */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
          </>
        ) : (
          <div className="w-full h-full bg-white/5 flex items-center justify-center">
             <span className="text-[10px] font-black text-white/10 uppercase tracking-widest italic">No Preview</span>
          </div>
        )}
      </div>

      <Link to={link || "#"} className="relative z-10 p-0 flex flex-col w-full h-full justify-end cursor-pointer">
        {/* Floating Category Badge */}
        <div className="absolute top-6 left-6">
          <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-primary text-[8px] font-black uppercase tracking-[0.2em] italic">
            {category}
          </span>
        </div>

        {/* Info Area with Glassmorphism */}
        <div className="p-8 md:p-10 w-full bg-gradient-to-t from-black/80 to-transparent backdrop-blur-[2px] transform translate-y-2 group-hover:translate-y-0 transition-transform duration-700">
          <div className="flex flex-col gap-1 mb-6">
            <h3 className="text-2xl md:text-3xl font-display font-black text-white tracking-tighter leading-none italic uppercase group-hover:text-primary transition-colors">
              {title}
            </h3>
            <div className="w-0 group-hover:w-12 h-0.5 bg-primary transition-all duration-700 delay-100" />
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 italic">Explore Build</span>
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-black transition-all">
              <ArrowRight size={14} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default PortfolioCard;
