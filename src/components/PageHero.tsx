import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import { type ReactNode } from "react";

interface PageHeroProps {
  label: string;
  title: string | ReactNode;
  description: string;
  icon?: LucideIcon;
  children?: ReactNode;
  /** Optional word/phrase inside the title to apply lime gradient */
  highlight?: string;
  accentGlow?: string;
  floatingIcons?: LucideIcon[];
  bgGradient?: string;
  secondaryLabel?: string;
  size?: "default" | "large";
}

/* Predefined positions & animation configs for floating icons */
const floatConfigs = [
  { x: "6%", y: "20%", size: 26, delay: 0, duration: 7, rotate: 12 },
  { x: "88%", y: "18%", size: 20, delay: 1.2, duration: 8, rotate: -15 },
  { x: "12%", y: "70%", size: 18, delay: 0.6, duration: 6, rotate: 8 },
  { x: "80%", y: "65%", size: 24, delay: 1.8, duration: 9, rotate: -10 },
  { x: "44%", y: "10%", size: 16, delay: 0.3, duration: 7.5, rotate: 20 },
  { x: "94%", y: "50%", size: 22, delay: 2.0, duration: 6.5, rotate: -18 },
  { x: "3%", y: "46%", size: 20, delay: 1.5, duration: 8.5, rotate: 14 },
  { x: "58%", y: "82%", size: 18, delay: 0.9, duration: 7, rotate: -12 },
];

const PageHero = ({
  label,
  title,
  description,
  icon: Icon,
  children,
  highlight,
  floatingIcons = [],
  bgGradient,
  secondaryLabel,
  size = "default",
}: PageHeroProps) => {
  // Split title if highlight is provided
  const renderTitle = () => {
    if (!highlight || typeof title !== "string" || !title.includes(highlight)) {
      return <>{title}</>;
    }
    const [before, after] = title.split(highlight);
    return (
      <>
        {before}
        <span className="text-gradient">{highlight}</span>
        {after}
      </>
    );
  };

  return (
    <section
      className={`relative overflow-hidden ${
        size === "large" ? "pt-12 pb-32 md:pt-20 md:pb-48 lg:pt-24 lg:pb-56" : "pt-6 pb-20 md:pt-10 md:pb-32"
      }`}
      aria-labelledby="page-hero-title"
    >
      {/* ── Deep background ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: bgGradient ||
            "linear-gradient(160deg, hsl(220 18% 7%) 0%, hsl(220 15% 5%) 60%, hsl(220 18% 8%) 100%)",
        }}
      />

      {/* ── Lime radial halo — centered behind content ── */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div
          className="w-[900px] h-[500px] rounded-full blur-[160px]"
          style={{ background: "hsl(72 62% 58% / 0.07)" }}
        />
      </div>

      {/* ── Top-left corner orb ── */}
      <motion.div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "hsl(72 62% 58% / 0.06)", filter: "blur(100px)" }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── Bottom-right corner orb ── */}
      <motion.div
        className="absolute -bottom-24 -right-24 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "hsl(80 55% 60% / 0.05)", filter: "blur(90px)" }}
        animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />



      {/* ── Subtle dot-grid ── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      {/* ── Bottom fade-out ── */}
      <div
        className="absolute bottom-0 inset-x-0 h-48 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, hsl(var(--background)))",
        }}
      />

      {/* ── Floating themed icons ── */}
      {floatingIcons.length > 0 && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          {floatingIcons.map((FloatIcon, i) => {
            const config = floatConfigs[i % floatConfigs.length];
            return (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: config.x,
                  top: config.y,
                  color: "hsl(72 62% 58%)",
                  opacity: 0,
                }}
                initial={{ opacity: 0, y: 10, rotate: 0 }}
                animate={{
                  opacity: [0, 0.25, 0.15, 0.25, 0],
                  y: [10, -14, 10],
                  rotate: [0, config.rotate, 0],
                }}
                transition={{
                  duration: config.duration,
                  delay: config.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <FloatIcon size={config.size} strokeWidth={1.2} />
              </motion.div>
            );
          })}
        </div>
      )}

      {/* ── Content ── */}
      <div className="relative container mx-auto px-4 lg:px-8">
        <div className={size === "large" ? "max-w-5xl mx-auto text-center" : "max-w-3xl mx-auto text-center"}>

          {/* Decorative line above label */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mb-6 h-px w-16 origin-center"
            style={{
              background: "linear-gradient(90deg, transparent, hsl(72 62% 58% / 0.8), transparent)",
            }}
          />

          {/* Label pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="inline-flex items-center gap-2 mb-5"
          >
            {Icon && (
              <span
                className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{
                  background: "hsl(72 62% 58% / 0.12)",
                  border: "1px solid hsl(72 62% 58% / 0.2)",
                }}
              >
                <Icon size={14} style={{ color: "hsl(72 62% 62%)" }} />
              </span>
            )}
            <span
              className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em]"
              style={{ color: secondaryLabel ? "hsl(220 10% 40%)" : "hsl(72 62% 62%)" }}
            >
              {label}
            </span>
            {secondaryLabel && (
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-teal-400">
                & {secondaryLabel}
              </span>
            )}
          </motion.div>

          {/* Title */}
          <motion.h1
            id="page-hero-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className={`font-display font-normal text-foreground mb-8 leading-[1.1] tracking-normal ${
                size === "large" 
                    ? "text-5xl sm:text-6xl md:text-8xl lg:text-9xl" 
                    : "text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            }`}
          >
            {renderTitle()}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-lg md:text-xl lg:text-[22px] leading-[1.6] font-medium max-w-3xl mx-auto mb-12"
            style={{ color: "hsl(220 8% 58%)" }}
          >
            {description}
          </motion.p>

          {/* CTAs / extra content */}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
