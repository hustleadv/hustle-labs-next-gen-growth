import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
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
          <span className="text-[10px] font-black uppercase tracking-[0.6em] text-white/20 mb-4 block italic">Next Project</span>
          <h3 className="text-3xl font-normal font-display text-white/40 italic uppercase tracking-normal">Something <br/> BIG.</h3>
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
        "group relative overflow-hidden rounded-[3rem] border border-white/5 bg-[#080808] flex flex-col hover:border-primary/20 transition-all duration-500",
        className
      )}
    >
      <Link to={link || "#"} className="flex flex-col h-full cursor-pointer">
        {/* Image Section */}
        <div className="relative w-full flex-1 overflow-hidden p-6 pb-2">
          <div className="w-full h-full rounded-[2rem] overflow-hidden bg-white/5 relative flex items-center justify-center">
            <img 
              src={image} 
              alt={title} 
              className="w-[90%] h-[90%] object-contain transition-transform duration-1000 group-hover:scale-[1.05]" 
            />
            
            <div className="absolute top-6 left-6">
              <span className="px-4 py-1.5 rounded-full bg-primary text-black text-[9px] font-black uppercase tracking-widest italic flex items-center gap-2 shadow-2xl">
                <Sparkles size={10} />
                Built with Hustle
              </span>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="p-8 md:p-10 pt-4 flex flex-col">
          <div className="mb-8">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/30 mb-3 block italic group-hover:text-primary transition-colors">{category}</span>
            <h3 className="text-4xl md:text-5xl font-normal font-display text-white italic uppercase tracking-normal leading-[0.9] group-hover:translate-x-2 transition-transform duration-700">
              {title}
            </h3>
          </div>

          <div className="flex items-center justify-between border-t border-white/5 pt-8 opacity-40 group-hover:opacity-100 transition-all duration-700 translate-y-2 group-hover:translate-y-0">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/50 italic">View Case Study</span>
            <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-primary transition-colors hover:scale-105">
              <ArrowRight size={20} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default PortfolioCard;
