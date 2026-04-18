import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import {
  Menu, X, ArrowRight, Layers, Palette,
  GraduationCap, Briefcase, Building2,
  Heart, Tag, ChevronDown, Rocket,
  Sparkles, Cpu, Monitor, TrendingUp, Users,
  CalendarDays, FolderKanban
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_SERVICES = [
  { label: "Websites", path: "/websites", icon: Monitor, desc: "High-end custom development" },
  { label: "Growth", path: "/growth", icon: TrendingUp, desc: "Marketing & sales systems" },
  { label: "AI Lab", path: "/ai-lab", icon: Cpu, desc: "Automation & Artificial Intelligence" },
];

const navItems = [
  { label: "Ecosystem", path: "/ecosystem", icon: Layers },
  {
    label: "Services",
    path: "/services",
    icon: Rocket,
    submenu: NAV_SERVICES
  },
  { label: "Studio", path: "/studio", icon: Palette, badge: "Soon" },
  { label: "Portfolio", path: "/portfolio", icon: Briefcase },
  { label: "Academy", path: "/academy", icon: GraduationCap },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isOverLight, setIsOverLight] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState<"daypass" | "project" | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Track scroll progress AND detect if header is over a light section
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? window.scrollY / totalHeight : 0;
      setScrollProgress(Math.min(progress, 1));

      // Check element under the header (at ~80px from top)
      const el = document.elementFromPoint(window.innerWidth / 2, 80);
      if (el) {
        const section = el.closest(".section-light");
        setIsOverLight(!!section);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Close on route change
  useEffect(() => {
    setMobileOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        background: isOverLight
          ? "rgba(255,255,255,0.90)"
          : "rgba(10,10,12,0.80)",
        borderBottom: isOverLight
          ? "1px solid rgba(0,0,0,0.08)"
          : "1px solid rgba(255,255,255,0.06)",
      }}
      role="banner"
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <Link
          to="/"
          className="flex items-center"
          aria-label="Hustle Labs, Αρχική"
        >
          <img
            src="/images/logohustle.svg"
            alt="Hustle Labs"
            className="h-8 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-7" aria-label="Κύρια πλοήγηση">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (item.path !== "/" && location.pathname.startsWith(item.path));

            if (item.submenu) {
              return (
                <div
                  key={item.path}
                  className="relative"
                  ref={dropdownRef}
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1 text-sm font-display font-bold transition-colors hover:text-accent focus-visible:outline-none rounded-sm px-1 py-0.5",
                      isActive ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    {item.label}
                    <ChevronDown size={14} className={cn("transition-transform duration-200", servicesDropdownOpen && "rotate-180")} />
                  </button>

                  <AnimatePresence>
                    {servicesDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-64"
                      >
                        <div className="bg-card/95 backdrop-blur-md border border-primary/20 rounded-2xl p-3 shadow-2xl shadow-primary/10 overflow-hidden">
                          <div className="flex flex-col gap-1">
                            {item.submenu.map((sub) => (
                              <Link
                                key={sub.path}
                                to={sub.path}
                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-primary/10 transition-colors group"
                              >
                                <div className="w-9 h-9 rounded-lg bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                  <sub.icon size={18} className="text-primary group-hover:scale-110 transition-transform" />
                                </div>
                                <div>
                                  <div className="text-sm font-display font-bold text-foreground">{sub.label}</div>
                                  <div className="text-[10px] text-muted-foreground leading-tight">{sub.desc}</div>
                                </div>
                              </Link>
                            ))}
                          </div>
                          <Link to="/services" className="block p-3 mt-1 text-center text-xs font-display font-bold text-primary hover:bg-primary/5 rounded-xl transition-colors border-t border-border/5">
                            See all Services
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={item.path}
                to={item.path}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "text-sm font-display font-bold transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm px-1 py-0.5 relative group/navitem flex items-center gap-1",
                  isActive
                    ? isOverLight ? "text-slate-900 border-b border-primary" : "text-foreground border-b border-accent"
                    : isOverLight ? "text-slate-500 hover:text-slate-900" : "text-muted-foreground"
                )}
              >
                {item.label}
                {item.badge && (
                  <span className="text-[8px] bg-primary/20 text-primary px-1 rounded-sm font-black uppercase leading-tight scale-90">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* ── Desktop dual CTAs ── */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Secondary: Start a Project */}
          <div className="relative">
            <Link
              to="/project-brief"
              onMouseEnter={() => setActiveTooltip("project")}
              onMouseLeave={() => setActiveTooltip(null)}
              className={cn(
                "flex items-center gap-2 h-9 px-4 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300",
                isOverLight
                  ? "text-slate-600 border border-slate-200 hover:border-slate-400 hover:text-slate-900 bg-transparent"
                  : "text-white/60 border border-white/10 hover:border-white/25 hover:text-white/90 bg-white/[0.03] hover:bg-white/[0.06]"
              )}
            >
              <FolderKanban size={13} className="shrink-0" />
              Start a Project
            </Link>
            <AnimatePresence>
              {activeTooltip === "project" && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.95 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 pointer-events-none"
                >
                  <div className="bg-card/95 backdrop-blur-md border border-white/10 rounded-xl px-4 py-2.5 shadow-xl text-center">
                    <p className="text-[11px] text-white/60 leading-snug">Let's build something that works</p>
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-card/95 border-l border-t border-white/10 rotate-45" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Primary: Get Your Day Pass */}
          <div className="relative">
            <Link
              to="/hustle-space"
              onMouseEnter={() => setActiveTooltip("daypass")}
              onMouseLeave={() => setActiveTooltip(null)}
              className="group relative flex items-center gap-2 h-9 px-5 rounded-full bg-primary text-primary-foreground text-xs font-black uppercase tracking-widest transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_20px_hsl(72_62%_58%_/_0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <CalendarDays size={13} className="shrink-0" />
              Get Your Day Pass
            </Link>
            <AnimatePresence>
              {activeTooltip === "daypass" && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.95 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 pointer-events-none"
                >
                  <div className="bg-card/95 backdrop-blur-md border border-primary/20 rounded-xl px-4 py-2.5 shadow-xl shadow-primary/10 text-center">
                    <p className="text-[11px] text-primary/80 leading-snug">Work from our space for a day</p>
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-card/95 border-l border-t border-primary/20 rotate-45" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <button
          className="lg:hidden text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md p-1 relative z-[60]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Κλείσιμο μενού" : "Άνοιγμα μενού"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          {mobileOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile menu rendered via portal to escape header's stacking context */}
      {createPortal(
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="mobile-nav"
              role="region"
              aria-label="Μενού πλοήγησης"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 99999,
                background: "linear-gradient(180deg, hsl(225 30% 8%) 0%, hsl(225 25% 6%) 100%)",
              }}
              className="lg:hidden flex flex-col"
            >
              {/* Header row */}
              <div className="flex items-center justify-between h-16 px-5 shrink-0">
                <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center">
                  <img
                    src="/images/logohustle.svg"
                    alt="Hustle Labs"
                    className="h-8 w-auto"
                  />
                </Link>
                <button
                  className="text-foreground p-1"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Κλείσιμο μενού"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="h-px w-full" style={{ background: "linear-gradient(to right, transparent, hsl(220 85% 55% / 0.3), transparent)" }} />

              <nav className="flex flex-col flex-1 px-6 pt-8 overflow-y-auto" aria-label="Κύρια πλοήγηση (mobile)">
                {navItems.map((item, i) => {
                  const isActive = location.pathname === item.path;

                  if (item.submenu) {
                    return (
                      <div key={item.path} className="border-b border-border/20">
                        <button
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          className={cn(
                            "flex items-center justify-between w-full py-4 font-display text-lg font-bold transition-colors",
                            location.pathname === item.path ? "text-foreground" : "text-muted-foreground"
                          )}
                        >
                          <span className="flex items-center gap-3">
                            <item.icon size={18} className="text-muted-foreground/50" />
                            {item.label}
                          </span>
                          <ChevronDown size={18} className={cn("transition-transform duration-200", mobileServicesOpen && "rotate-180")} />
                        </button>

                        <AnimatePresence>
                          {mobileServicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden bg-primary/5 rounded-xl mb-4"
                            >
                              {item.submenu.map((sub) => (
                                <Link
                                  key={sub.path}
                                  to={sub.path}
                                  onClick={() => setMobileOpen(false)}
                                  className="flex items-center gap-3 p-4 text-sm text-foreground/80 hover:text-primary transition-colors"
                                >
                                  <sub.icon size={16} className="text-primary/60" />
                                  {sub.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.04, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setMobileOpen(false)}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          "block py-4 border-b font-display text-lg font-bold transition-colors",
                          isActive
                            ? "text-foreground border-primary/30"
                            : "text-muted-foreground hover:text-foreground border-border/20"
                        )}
                      >
                        <span className="flex items-center justify-between">
                          <span className="flex items-center gap-3">
                            <item.icon size={18} className={isActive ? "text-accent" : "text-muted-foreground/50"} />
                            {item.label}
                            {item.badge && (
                              <span className="text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded-full font-black uppercase tracking-tighter">
                                {item.badge}
                              </span>
                            )}
                          </span>
                          {isActive && <span className="w-1.5 h-1.5 rounded-full bg-accent" />}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}

                {/* Mobile: Start a Project — inside menu */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.28, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to="/project-brief"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between w-full py-4 border-b font-display text-lg font-bold text-muted-foreground hover:text-foreground border-border/20 transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <FolderKanban size={18} className="text-muted-foreground/50" />
                      Start a Project
                    </span>
                    <ArrowRight size={16} className="text-muted-foreground/30" />
                  </Link>
                </motion.div>

                {/* Mobile: Primary CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.38, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-8"
                >
                  <Link
                    to="/hustle-space"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-3 w-full h-16 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-widest text-sm shadow-2xl shadow-primary/30 transition-all duration-300 active:scale-95"
                  >
                    <CalendarDays size={18} />
                    Get Your Day Pass
                  </Link>
                  <p className="text-[11px] text-muted-foreground/40 text-center mt-3">Work from our space for a day</p>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.45 }}
                  className="text-xs text-muted-foreground/40 text-center mt-auto py-8"
                >
                  Χανιά, Κρήτη
                </motion.p>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

      {/* Lime scroll progress bar */}
      <div
        className="absolute top-0 left-0 h-[2px] transition-all"
        style={{
          width: `${scrollProgress * 100}%`,
          background: "linear-gradient(90deg, hsl(72 62% 42%), hsl(72 62% 58%), hsl(80 65% 68%))",
          boxShadow: "0 0 8px hsl(72 62% 58% / 0.6), 0 0 20px hsl(72 62% 58% / 0.3)",
          transition: "width 0.1s linear",
        }}
      />
    </header>
  );
};

export default Header;
