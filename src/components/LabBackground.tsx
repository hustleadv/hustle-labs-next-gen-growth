import { motion } from "framer-motion";

/*
  Unified lab background, a single fixed-position layer of evenly-spaced,
  repeating science-lab elements that scroll with the page.
  Renders once, covers the entire page height.
*/

const float = (dur: number, delay = 0) => ({
  animate: { y: [0, -8, 4, 0] as number[] },
  transition: { duration: dur, repeat: Infinity, ease: "easeInOut" as const, delay },
});

const spin = (dur: number, delay = 0) => ({
  animate: { rotate: [0, 360] as number[] },
  transition: { duration: dur, repeat: Infinity, ease: "linear" as const, delay },
});

/* ── Individual element types ── */

const Ring = ({ x, y, size = 48 }: { x: string; y: string; size?: number }) => (
  <motion.div
    className="absolute hidden md:block"
    style={{ left: x, top: y, width: size, height: size }}
    {...float(18, 1)}
  >
    <div
      className="w-full h-full rounded-full"
      style={{ border: "1.2px solid hsl(220 85% 55% / 0.1)" }}
    />
  </motion.div>
);

const Diamond = ({ x, y, size = 16 }: { x: string; y: string; size?: number }) => (
  <motion.div
    className="absolute hidden md:block"
    style={{ left: x, top: y, width: size, height: size }}
    {...float(14, 3)}
  >
    <div
      className="w-full h-full rotate-45"
      style={{ border: "1px solid hsl(175 85% 55% / 0.1)" }}
    />
  </motion.div>
);

const DotCluster = ({ x, y }: { x: string; y: string }) => (
  <motion.svg
    width="36" height="36" viewBox="0 0 36 36" fill="none"
    className="absolute hidden md:block"
    style={{ left: x, top: y }}
    {...float(12, 0.5)}
  >
    <circle cx="6" cy="6" r="2" fill="hsl(220 85% 55%)" fillOpacity="0.12" />
    <circle cx="18" cy="10" r="1.5" fill="hsl(220 80% 65%)" fillOpacity="0.08" />
    <circle cx="30" cy="6" r="1.2" fill="hsl(175 85% 55%)" fillOpacity="0.1" />
    <circle cx="10" cy="22" r="1.5" fill="hsl(220 85% 55%)" fillOpacity="0.08" />
    <circle cx="26" cy="26" r="2" fill="hsl(260 70% 50%)" fillOpacity="0.06" />
    <circle cx="16" cy="32" r="1" fill="hsl(220 85% 55%)" fillOpacity="0.1" />
  </motion.svg>
);

const Cross = ({ x, y }: { x: string; y: string }) => (
  <motion.svg
    width="20" height="20" viewBox="0 0 20 20" fill="none"
    className="absolute hidden md:block"
    style={{ left: x, top: y }}
    animate={{ rotate: [0, 90, 0], opacity: [0.1, 0.18, 0.1] }}
    transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
  >
    <line x1="10" y1="2" x2="10" y2="18" stroke="hsl(220 85% 55%)" strokeWidth="1" strokeOpacity="0.12" />
    <line x1="2" y1="10" x2="18" y2="10" stroke="hsl(220 85% 55%)" strokeWidth="1" strokeOpacity="0.12" />
  </motion.svg>
);

const MoleculeSmall = ({ x, y }: { x: string; y: string }) => (
  <motion.svg
    width="44" height="36" viewBox="0 0 44 36" fill="none"
    className="absolute hidden md:block"
    style={{ left: x, top: y }}
    {...float(16, 2)}
  >
    <line x1="8" y1="18" x2="22" y2="8" stroke="hsl(220 85% 55%)" strokeOpacity="0.08" strokeWidth="0.8" />
    <line x1="22" y1="8" x2="36" y2="18" stroke="hsl(220 85% 55%)" strokeOpacity="0.08" strokeWidth="0.8" />
    <line x1="22" y1="8" x2="22" y2="28" stroke="hsl(220 80% 60%)" strokeOpacity="0.06" strokeWidth="0.8" />
    <circle cx="8" cy="18" r="3" fill="hsl(220 85% 50%)" fillOpacity="0.06" stroke="hsl(220 85% 60%)" strokeOpacity="0.1" strokeWidth="0.6" />
    <circle cx="22" cy="8" r="3.5" fill="hsl(220 85% 45%)" fillOpacity="0.08" stroke="hsl(220 85% 60%)" strokeOpacity="0.12" strokeWidth="0.6" />
    <circle cx="36" cy="18" r="2.5" fill="hsl(175 85% 55%)" fillOpacity="0.05" stroke="hsl(175 85% 55%)" strokeOpacity="0.1" strokeWidth="0.6" />
    <circle cx="22" cy="28" r="2.5" fill="hsl(260 70% 55%)" fillOpacity="0.04" stroke="hsl(260 70% 55%)" strokeOpacity="0.08" strokeWidth="0.6" />
  </motion.svg>
);

const HexDot = ({ x, y }: { x: string; y: string }) => (
  <motion.svg
    width="28" height="32" viewBox="0 0 28 32" fill="none"
    className="absolute hidden md:block"
    style={{ left: x, top: y }}
    {...spin(40, 0)}
  >
    <path
      d="M14 2L26 9V23L14 30L2 23V9L14 2Z"
      stroke="hsl(220 85% 55%)" strokeOpacity="0.08" strokeWidth="0.8"
      fill="none"
    />
  </motion.svg>
);

const DashLine = ({ x, y, vertical = false }: { x: string; y: string; vertical?: boolean }) => (
  <motion.div
    className="absolute hidden md:block"
    style={{ left: x, top: y }}
    animate={{ opacity: [0.05, 0.12, 0.05] }}
    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
  >
    <div
      style={{
        width: vertical ? 1 : 60,
        height: vertical ? 60 : 1,
        backgroundImage: vertical
          ? "linear-gradient(to bottom, hsl(220 85% 55% / 0.15) 4px, transparent 4px)"
          : "linear-gradient(to right, hsl(220 85% 55% / 0.15) 4px, transparent 4px)",
        backgroundSize: vertical ? "1px 8px" : "8px 1px",
      }}
    />
  </motion.div>
);

/*
  The unified background layer.
  Elements are positioned at % values to create a repeating,
  evenly-distributed pattern across the full page height.
  The pattern tiles roughly every ~800px visually.
*/
const LabBackground = () => (
  <div
    className="absolute inset-0 pointer-events-none select-none overflow-hidden"
    style={{ zIndex: 0 }}
    aria-hidden="true"
  >
    {/* ── Column left (3-8%) ── */}
    <Ring x="4%" y="5%" size={44} />
    <Cross x="6%" y="18%" />
    <DotCluster x="3%" y="32%" />
    <HexDot x="5%" y="48%" />
    <DashLine x="4%" y="62%" vertical />
    <MoleculeSmall x="3%" y="76%" />
    <Diamond x="6%" y="90%" size={14} />

    {/* ── Column right (88-96%) ── */}
    <MoleculeSmall x="90%" y="8%" />
    <DashLine x="92%" y="22%" />
    <Ring x="91%" y="36%" size={36} />
    <Cross x="93%" y="52%" />
    <DotCluster x="89%" y="66%" />
    <Diamond x="92%" y="78%" size={18} />
    <HexDot x="90%" y="92%" />

    {/* ── Scattered mid-left (14-22%) ── */}
    <Diamond x="16%" y="12%" size={12} />
    <DashLine x="18%" y="42%" />
    <Cross x="15%" y="72%" />

    {/* ── Scattered mid-right (78-86%) ── */}
    <Cross x="82%" y="15%" />
    <DashLine x="80%" y="45%" vertical />
    <Diamond x="84%" y="75%" size={16} />

    {/* ── Mobile, just a few subtle elements ── */}
    <motion.div
      className="absolute md:hidden"
      style={{ top: "8%", right: "4%", width: 28, height: 28 }}
      {...float(16)}
    >
      <div className="w-full h-full rounded-full" style={{ border: "1px solid hsl(220 85% 55% / 0.06)" }} />
    </motion.div>
    <motion.div
      className="absolute md:hidden"
      style={{ top: "35%", left: "3%", width: 14, height: 14 }}
      {...float(12, 2)}
    >
      <div className="w-full h-full rotate-45" style={{ border: "1px solid hsl(175 85% 55% / 0.06)" }} />
    </motion.div>
    <motion.div
      className="absolute md:hidden"
      style={{ top: "65%", right: "5%", width: 20, height: 20 }}
      {...float(14, 1)}
    >
      <div className="w-full h-full rounded-full" style={{ border: "1px solid hsl(220 85% 55% / 0.05)" }} />
    </motion.div>
    <motion.div
      className="absolute md:hidden"
      style={{ top: "88%", left: "6%", width: 12, height: 12 }}
      {...float(10, 3)}
    >
      <div className="w-full h-full rotate-45" style={{ border: "1px solid hsl(220 85% 55% / 0.05)" }} />
    </motion.div>
  </div>
);

export default LabBackground;
