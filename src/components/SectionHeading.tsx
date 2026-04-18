import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string | React.ReactNode;
  /** Optional word/phrase inside the title to apply gradient */
  highlight?: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
  variant?: "primary" | "violet" | "hustle-blend" | "offers-blend";
  dark?: boolean;
}

const SectionHeading = ({ label, title, highlight, description, align = "center", className, variant = "primary", dark = true }: SectionHeadingProps) => {
  const isViolet = variant === "violet";
  const isBlend = variant === "hustle-blend";
  const isOffers = variant === "offers-blend";
  const labelColor = isViolet ? "text-violet-500" : (isBlend ? "text-pink-500" : (isOffers ? "text-red-500" : "text-primary"));
  const highlightClass = isViolet ? "text-gradient-violet" : (isBlend ? "text-gradient-hustle-blend" : (isOffers ? "text-gradient-hustle-offers" : "text-gradient"));
  const textColor = dark ? "text-white" : "text-slate-900";
  const descColor = dark ? "text-white/50" : "text-slate-500";

  // Split title around the highlight if provided
  const renderTitle = () => {
    if (typeof title !== "string" || !highlight || !title.includes(highlight)) {
      return <>{title}</>;
    }
    const [before, after] = title.split(highlight);
    return (
      <>
        {before}
        <span className={highlightClass}>{highlight}</span>
        {after}
      </>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={className || (align === "center" ? "text-center max-w-4xl mx-auto mb-16 px-4" : "max-w-2xl mb-12 px-4")}
    >
      {label && (
        <span className={`text-[10px] sm:text-xs font-black ${labelColor} uppercase tracking-[0.3em] mb-5 block`}>
          {label}
        </span>
      )}
      <h2 className={`font-display text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black ${textColor} mb-6 leading-[1] tracking-tighter`}>
        {renderTitle()}
      </h2>
      {description && (
        <p className={`${descColor} font-display text-base sm:text-lg md:text-xl leading-[1.7] font-medium max-w-2xl ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
