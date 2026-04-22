import { useState, useEffect } from "react";
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
import CommunityTrustStrip from "@/components/CommunityTrustStrip";
import WP_MEETUP_1 from "@/assets/chaniawordpressmeetup.JPG";

const Ecosystem = () => {
  const { t } = useLanguage();

  useEffect(() => {
    // SEO: Page Title
    document.title = "The Hustle Ecosystem | Digital Hub Χανιά - Hustle Labs";
    
    // SEO: Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', "Ανακαλύψτε το οικοσύστημα της Hustle Labs στα Χανιά. Ένα δίκτυο από Agency, Venture Studio και Academy που χτίζει το ψηφιακό μέλλον της Κρήτης.");

    // SEO: Structured Data (JSON-LD)
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Hustle Labs Ecosystem",
      "url": "https://hustlelabs.gr/ecosystem",
      "description": "A collaborative ecosystem of digital agencies, venture studios, and learning hubs based in Chania, Crete.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Χανιά",
        "addressRegion": "Κρήτη",
        "addressCountry": "GR"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

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
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">{t('ecosystem.hero.badge')}</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
              className="font-sans text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.85] mb-12 italic uppercase"
            >
              {t('ecosystem.hero.title1')} <br />
              <span className="text-primary tracking-normal">{t('ecosystem.hero.title2')}</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as any }}
              className="font-sans text-xl md:text-2xl lg:text-3xl font-medium text-white/50 max-w-4xl mx-auto mb-16 leading-tight italic"
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
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-8 block">{t('ecosystem.structure.badge')}</span>
              <h2 className="font-sans text-4xl md:text-7xl font-bold tracking-tight leading-[0.9] mb-12">
                {t('ecosystem.structure.title1')} <br />
                {t('ecosystem.structure.title2')} <br />
                <span className="text-white/20">{t('ecosystem.structure.title3')}</span>
              </h2>
              <p className="text-xl text-white/60 font-medium mb-16 md:mb-24 leading-relaxed max-w-3xl mx-auto">
                {t('ecosystem.structure.text')}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                <div className="flex gap-6 border-l border-primary/30 pl-8 transition-all hover:border-primary">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                    <Monitor size={24} />
                  </div>
                  <div>
                    <h4 className="font-sans text-lg font-bold mb-2 tracking-tight">{t('ecosystem.structure.agency.title')}</h4>
                    <p className="text-white/40 text-sm leading-relaxed">{t('ecosystem.structure.agency.desc')}</p>
                  </div>
                </div>
                <div className="flex gap-6 border-l border-white/10 pl-8 transition-all hover:border-primary">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 text-white/40">
                    <Rocket size={24} />
                  </div>
                  <div>
                    <h4 className="font-sans text-lg font-bold mb-2 tracking-tight">{t('ecosystem.structure.studio.title')}</h4>
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
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-10 block tracking-[0.6em]">{t('ecosystem.universe.badge')}</span>
              <h2 className="font-sans text-5xl md:text-8xl font-bold tracking-tight leading-none px-4">
                {t('ecosystem.universe.title')}
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
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
                className="group p-10 md:p-16 rounded-[2.5rem] md:rounded-[4rem] glass-card relative overflow-hidden"
              >
                <div className="absolute top-0 left-12 w-px h-12 bg-gradient-to-b from-primary/30 to-transparent group-hover:h-24 transition-all duration-1000" />
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 mb-12">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-white/20 group-hover:bg-primary group-hover:text-black transition-all border border-white/10 group-hover:border-transparent lg:shadow-glow">
                    <s.icon size={32} strokeWidth={1} />
                  </div>
                  {s.soon && (
                    <span className="px-5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold uppercase text-primary tracking-widest self-start sm:self-center italic">
                       {t('ecosystem.universe.soon')}
                    </span>
                  )}
                </div>

                <h3 className="font-display text-3xl md:text-5xl font-black mb-6 tracking-tight italic uppercase leading-none">{s.title}</h3>
                <p className="text-lg text-white/30 font-medium leading-relaxed mb-12 max-w-sm italic">{s.desc}</p>
                
                <Link to={s.link} className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-primary group-hover:gap-6 transition-all italic">
                   {t('ecosystem.universe.explore')} {s.label} <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3.5: COMMUNITY HUB BANNER ── */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center overflow-hidden border-y border-white/5 bg-black">
        {/* Background Image with sophisticated overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={WP_MEETUP_1} 
            alt="Chania WordPress Meetup" 
            className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 hover:opacity-70 transition-all duration-1000 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          <div className="max-w-4xl">
            <motion.div {...fadeInUp}>
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <span className="px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black uppercase text-primary tracking-[0.3em] italic">
                   Τοπικός Κόμβος
                </span>
                <span className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase text-white/50 tracking-[0.3em] italic">
                   Στηρίζουμε έμπρακτα
                </span>
              </div>
              
              <h2 className="font-display text-4xl md:text-7xl font-black text-white italic uppercase mb-6 tracking-tighter leading-none">
                Η Δύναμη της <br /> <span className="text-primary italic">Κοινοτητας.</span>
              </h2>
              
              <p className="text-xl md:text-3xl font-black text-white/80 uppercase tracking-widest italic mb-10 decoration-primary/30 decoration-2 underline-offset-8 underline">
                Chania WordPress Meetup
              </p>
              
              <p className="text-lg md:text-xl text-white/40 font-medium leading-relaxed max-w-2xl italic">
                Είμαστε περήφανοι διοργανωτές και ο επίσημος χώρος φιλοξενίας της κοινότητας WordPress στα Χανιά. Αναπτύσσουμε το τοπικό οικοσύστημα μαζί.
              </p>

              <div className="mt-12">
                <Button variant="outline" className="rounded-full px-10 h-16 border-white/10 hover:bg-white hover:text-black transition-all italic uppercase font-black tracking-widest text-xs" asChild>
                   <Link to="/meetups">Μάθε περισσότερα</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: THE ROSTER ── */}
      <section className="py-32 md:py-48 relative border-t border-white/5 bg-[#080808]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mb-24">
            <motion.div {...fadeInUp}>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-8 block">{t('ecosystem.network.badge')}</span>
              <h2 className="font-sans text-4xl md:text-7xl font-bold tracking-tight leading-[0.9] mb-12">
                {t('ecosystem.network.title')} <br />
                <span className="text-white/20">{t('ecosystem.network.title_span')}</span>
              </h2>
              <p className="text-xl text-white/40 font-medium max-w-2xl leading-relaxed">
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
            <Button variant="outline" size="xl" className="rounded-full px-16 h-20 text-lg font-bold border-white/10 hover:bg-white hover:text-black transition-all" asChild>
               <Link to="/clients">{t('ecosystem.network.cta')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: MANIFESTO STATEMENT ── */}
      <section className="py-24 md:py-48 relative overflow-hidden bg-[#0a0a0a] border-y border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(208,255,0,0.06),transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as any }}
          >
            <h2 className="font-display text-4xl md:text-7xl lg:text-9xl font-black tracking-tight leading-[0.9] mb-16 px-4 italic uppercase">
              {t('ecosystem.manifesto.title')} <br />
              <span className="text-white/20 italic">{t('ecosystem.manifesto.title_span')}</span>
            </h2>
            <div className="w-20 h-px bg-primary mx-auto mb-16 shadow-glow" />
            <p className="font-display text-2xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white/40 px-4 max-w-6xl mx-auto leading-tight italic">
               {t('ecosystem.manifesto.text')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 6: FINAL CTA ── */}
      <section className="py-24 md:py-64 relative bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(208,255,0,0.06),transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-12 block">{t('ecosystem.final.badge')}</span>
            <h2 className="font-display text-5xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-[0.85] mb-20 px-4 italic uppercase">
              {t('ecosystem.final.title1')} <br />
              <span className="text-white/10 italic">{t('ecosystem.final.title2')}</span>
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-24">
              <Button size="xl" className="w-full sm:w-auto rounded-full px-12 md:px-24 h-24 md:h-32 text-2xl md:text-4xl font-black group bg-primary text-black hover:bg-white transition-all border-none italic shadow-glow-strong" asChild>
                <Link to="/contact">
                  {t('ecosystem.final.cta1')}
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="w-full sm:w-auto rounded-full px-12 md:px-24 h-24 md:h-32 text-2xl md:text-4xl font-black border-white/10 hover:bg-white hover:text-black transition-all italic" asChild>
                <Link to="/book-call">{t('ecosystem.final.cta2')}</Link>
              </Button>
            </div>
            
            <p className="text-xl md:text-2xl font-display font-black text-white/10 tracking-[0.4em] uppercase italic">
               {t('ecosystem.final.quote')}
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Ecosystem;
