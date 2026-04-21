import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowRight, Zap, Monitor, Rocket, Layers, 
  BarChart3, Bot, Search, Map, Code2, 
  TrendingUp, Globe, MousePointerClick, 
  Lightbulb, Cpu, GraduationCap, Building2,
  Mic, Palette, Heart, Target
} from "lucide-react";
import { Button } from "@/components/ui/button";
import LabBackground from "@/components/LabBackground";
import { useLanguage } from "@/contexts/LanguageContext";

const Ecosystem = () => {
  const { t } = useLanguage();

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-primary selection:text-black overflow-x-hidden">
      
      {/* ── SECTION 1: HERO ── */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-32 overflow-hidden border-b border-white/5">
        <LabBackground />
        
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(208,255,0,0.04),transparent_70%)] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 mb-10"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">{t('ecosystem.hero.badge')}</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
              className="font-display text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.85] mb-12"
            >
              {t('ecosystem.hero.title1')} <br />
              <span className="text-primary tracking-normal">{t('ecosystem.hero.title2')}</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as any }}
              className="font-display text-xl md:text-3xl font-medium text-white/50 max-w-4xl mx-auto mb-16 leading-tight"
            >
              {t('ecosystem.hero.subtitle')}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as any }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Button size="xl" className="rounded-full px-12 h-20 text-xl font-bold group bg-primary text-black hover:bg-white transition-all border-none shadow-glow" asChild>
                <Link to="/contact">
                  {t('ecosystem.hero.cta1')}
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="rounded-full px-12 h-20 text-xl font-bold border-white/10 hover:bg-white hover:text-black transition-all" asChild>
                <Link to="/project-brief">{t('ecosystem.hero.cta2')}</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: THE CORE STRUCTURE ── */}
      <section className="py-32 md:py-48 relative border-b border-white/5 bg-[#080808]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeInUp} className="text-center">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-8 block italic">{t('ecosystem.structure.badge')}</span>
              <h2 className="font-display text-4xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-12">
                {t('ecosystem.structure.title1')} <br />
                {t('ecosystem.structure.title2')} <br />
                <span className="text-white/20">{t('ecosystem.structure.title3')}</span>
              </h2>
              <p className="text-xl text-white/60 font-medium italic mb-16 md:mb-24 leading-relaxed max-w-3xl mx-auto">
                {t('ecosystem.structure.text')}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                <div className="flex gap-6 border-l border-primary/30 pl-8 transition-all hover:border-primary">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                    <Monitor size={24} />
                  </div>
                  <div>
                    <h4 className="font-display text-xl font-bold mb-2 tracking-normal">{t('ecosystem.structure.agency.title')}</h4>
                    <p className="text-white/40 text-sm leading-relaxed">{t('ecosystem.structure.agency.desc')}</p>
                  </div>
                </div>
                <div className="flex gap-6 border-l border-white/10 pl-8 transition-all hover:border-primary">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 text-white/40">
                    <Rocket size={24} />
                  </div>
                  <div>
                    <h4 className="font-display text-xl font-bold mb-2 tracking-normal">{t('ecosystem.structure.studio.title')}</h4>
                    <p className="text-white/40 text-sm leading-relaxed">{t('ecosystem.structure.studio.desc')}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: THE ECOSYSTEM CARD GRID ── */}
      <section className="py-32 md:py-48 relative bg-[#050505]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-32 max-w-4xl mx-auto">
            <motion.div {...fadeInUp}>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-10 block italic tracking-[0.6em]">{t('ecosystem.universe.badge')}</span>
              <h2 className="font-display text-5xl md:text-8xl font-bold tracking-tighter leading-none px-4">
                {t('ecosystem.universe.title')}
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
            {[
              { icon: GraduationCap, title: t('ecosystem.universe.academy.title'), desc: t('ecosystem.universe.academy.desc'), link: "/academy", label: "Academy" },
              { icon: Building2, title: t('ecosystem.universe.space.title'), desc: t('ecosystem.universe.space.desc'), link: "/hustle-space", label: "Space" },
              { icon: Mic, title: t('ecosystem.universe.studio.title'), desc: t('ecosystem.universe.studio.desc'), link: "/studio", label: "Studio", soon: true },
              { icon: Heart, title: t('ecosystem.universe.network.title'), desc: t('ecosystem.universe.network.desc'), link: "/contact", label: "Community" }
            ].map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="group p-12 md:p-16 rounded-[3.5rem] glass-card relative overflow-hidden"
              >
                <div className="absolute top-0 left-12 w-px h-12 bg-gradient-to-b from-primary/30 to-transparent group-hover:h-24 transition-all duration-1000" />
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-white/20 group-hover:bg-primary group-hover:text-black transition-all border border-white/10 group-hover:border-transparent">
                    <s.icon size={32} strokeWidth={1} />
                  </div>
                  {s.soon && (
                    <span className="px-5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black uppercase text-primary italic tracking-widest">
                       {t('ecosystem.universe.soon')}
                    </span>
                  )}
                </div>

                <h3 className="font-display text-3xl md:text-4xl font-bold mb-6 tracking-tight">{s.title}</h3>
                <p className="text-lg text-white/30 font-medium leading-relaxed mb-12 max-w-sm">{s.desc}</p>
                
                <Link to={s.link} className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-[0.4em] text-primary group-hover:gap-6 transition-all">
                   {t('ecosystem.universe.explore')} {s.label} <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: THE ROSTER ── */}
      <section className="py-32 md:py-48 relative border-t border-white/5 bg-[#080808]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mb-24">
            <motion.div {...fadeInUp}>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-8 block italic">{t('ecosystem.network.badge')}</span>
              <h2 className="font-display text-4xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-12">
                {t('ecosystem.network.title')} <br />
                <span className="text-white/20">{t('ecosystem.network.title_span')}</span>
              </h2>
              <p className="text-xl text-white/40 font-medium italic max-w-2xl">
                 {t('ecosystem.network.text')}
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Hotelyzer", logo: "/images/clients/hotelyzer.png" },
              { name: "Liv Tours", logo: "/images/clients/logo-liv.webp" },
              { name: "Top Travel", logo: "/images/clients/toptravellogo.svg" },
              { name: "Harmony", logo: "/images/clients/harmony-logo.png" },
              { name: "Gesthimani", logo: "/images/clients/gesth-logo.jpg" },
              { name: "NKA Advisory", logo: "/images/clients/nka-logo.svg", dark: true },
              { name: "Aegis", logo: "/images/clients/logo-aegis.png", dark: true },
              { name: "Balos Paradise", logo: "/images/clients/balos-paradise-logo.png", dark: true },
              { name: "Crucero", logo: "/images/clients/cruceroalparaiso-logo.png", dark: true },
              { name: "Falasarna", logo: "/images/clients/falasarna-logo.png", lightBg: true },
              { name: "Specialized Therapies", logo: "/images/clients/kentroeid-chania.png", lightBg: true },
              { name: "Klados", icon: Target }
            ].map((client, i) => (
              <motion.div 
                 key={i}
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.05 }}
                 className="aspect-[4/3] rounded-[2.5rem] glass-card flex items-center justify-center p-8 grayscale opacity-20 hover:grayscale-0 hover:opacity-100 transition-all duration-700 group"
              >
                {client.logo ? (
                   <img src={client.logo} alt={client.name} className={`max-h-12 w-auto object-contain ${client.dark ? 'invert' : ''}`} />
                ) : (
                   <client.icon size={32} className="text-white/20 group-hover:text-primary transition-colors" />
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <Button variant="outline" size="xl" className="rounded-full px-16 h-20 text-lg font-black border-white/10 hover:bg-white hover:text-black transition-all italic" asChild>
               <Link to="/clients">{t('ecosystem.network.cta')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: MANIFESTO STATMENT ── */}
      <section className="py-64 relative overflow-hidden bg-[#0a0a0a] border-y border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(208,255,0,0.06),transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as any }}
          >
            <h2 className="font-display text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95] mb-20 px-4">
              {t('ecosystem.manifesto.title')} <br />
              <span className="text-primary">{t('ecosystem.manifesto.title_span')}</span>
            </h2>
            <div className="w-20 h-px bg-primary mx-auto mb-20 shadow-glow" />
            <p className="font-display text-3xl md:text-5xl font-medium tracking-tight text-white/40 px-4 max-w-6xl mx-auto leading-tight">
               {t('ecosystem.manifesto.text')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 6: FINAL CTA ── */}
      <section className="py-32 md:py-48 relative bg-[#050505]">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-12 block italic">{t('ecosystem.final.badge')}</span>
            <h2 className="font-display text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.85] mb-20 px-4">
              {t('ecosystem.final.title1')} <br />
              <span className="text-primary animate-glow">{t('ecosystem.final.title2')}</span>
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-20">
              <Button size="xl" className="rounded-full px-16 h-28 text-3xl font-bold group bg-primary text-black hover:bg-white transition-all border-none shadow-glow-strong" asChild>
                <Link to="/contact">
                  {t('ecosystem.final.cta1')}
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="rounded-full px-16 h-28 text-3xl font-bold border-white/10 hover:bg-white hover:text-black transition-all" asChild>
                <Link to="/book-call">{t('ecosystem.final.cta2')}</Link>
              </Button>
            </div>
            
            <p className="text-xl md:text-2xl font-display font-medium text-white/30 italic tracking-tight tracking-[0.4em] font-black">
               {t('ecosystem.final.quote')}
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Ecosystem;
