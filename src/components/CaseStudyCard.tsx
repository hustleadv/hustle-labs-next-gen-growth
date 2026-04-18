import { useState, useRef, type MouseEvent } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase } from "lucide-react";

interface CaseStudyCardProps {
  title: string;
  category: string;
  description: string;
  image?: string;
  index?: number;
  slug?: string;
  metric?: string;
  outcome?: string;
}

const CaseStudyCard = ({ 
  title, 
  category, 
  description, 
  image, 
  index = 0, 
  slug,
  metric,
  outcome 
}: CaseStudyCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [imgError, setImgError] = useState(false);

  const handleMouseMove = (e: MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -5, y: x * 5 }); // Reduced tilt for premium feel
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  const CardContent = (
    <>
      <div className="aspect-[16/10] overflow-hidden bg-black relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60" />
        
        {!imgError && image ? (
          <img
            src={image}
            alt={title}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-top grayscale-[0.4] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
          />
        ) : (
          <div
            className="w-full h-full flex flex-col items-center justify-center opacity-10 bg-gradient-to-br from-primary/20 via-black to-black"
          >
            <Briefcase size={40} className="text-primary" />
          </div>
        )}
        
        {/* Metric Badge Overlay */}
        <div className="absolute top-6 right-6 z-20">
            <div className="px-4 py-2 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 group-hover:border-primary/30 transition-colors shadow-2xl">
                <span className="text-base md:text-lg font-display font-black text-primary italic uppercase tracking-wider">
                  {metric || "Live"} {outcome && ` / ${outcome}`}
                </span>
            </div>
        </div>

        {/* Category Badge */}
        <div className="absolute bottom-6 left-6 z-20">
          <div className="px-3 py-1 rounded-full bg-primary/10 backdrop-blur-md border border-primary/20 text-[9px] font-black uppercase tracking-[0.3em] text-primary italic">
            {category}
          </div>
        </div>
      </div>

      <div className="p-8 md:p-10 relative bg-[#080808] border-t border-white/5 group-hover:bg-white/[0.02] transition-colors">
        <div className="flex items-start justify-between mb-4">
          <h3 className="font-display text-2xl lg:text-3xl font-black text-white tracking-tighter leading-tight uppercase italic">
            {title}
          </h3>
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/20 group-hover:bg-primary group-hover:border-primary group-hover:text-black transition-all duration-500 shrink-0">
            <ArrowUpRight size={20} />
          </div>
        </div>
        <p className="text-white/40 leading-relaxed font-black uppercase tracking-widest text-[10px] italic line-clamp-2">
          {description}
        </p>
        
        <div className="mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-primary italic">View Case Study</span>
            <div className="h-px flex-1 bg-primary/20" />
        </div>
      </div>
    </>
  );

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.4s ease-out",
      }}
      className="group relative rounded-[2.5rem] md:rounded-[3.5rem] border border-white/5 overflow-hidden hover:border-primary/30 transition-all duration-500 bg-[#080808]"
    >
      {slug ? (
        <Link to={`/portfolio/${slug}`} className="block h-full cursor-pointer focus-visible:outline-none">
          {CardContent}
        </Link>
      ) : (
        <div className="block h-full">
            {CardContent}
        </div>
      )}
    </motion.div>
  );
};

export default CaseStudyCard;
