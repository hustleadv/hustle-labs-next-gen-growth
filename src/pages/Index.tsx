import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, Zap, Monitor, Rocket, Layers, BarChart3, Bot, Search, Map, Code2, TrendingUp, GraduationCap, Building, Mic, Heart, MousePointer2, Coffee, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import LabBackground from "@/components/LabBackground";
import Magnetic from "@/components/Magnetic";
import { useLanguage } from "@/contexts/LanguageContext";
import PortfolioCard from "@/components/PortfolioCard";
import CommunityTrustStrip from "@/components/CommunityTrustStrip";

const Index = () => {
  const { language, t } = useLanguage();

  useEffect(() => {
    // SEO: Page Title
    document.title = language === "en" 
      ? "Hustle Labs | Digital Agency & AI: Crete, Cyclades, Islands"
      : "Hustle Labs | Digital Agency & AI: Κρήτη, Κυκλάδες, Νησιά";
    
    // SEO: Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    const content = language === "en"
      ? "Hustle Labs: Digital Agency & AI Hub in Crete, Cyclades and Greek Islands. We specialize in Tourism Automations, Web Design and Growth Strategy for hotels and premium businesses."
      : "Hustle Labs: Digital Agency & AI Hub σε Κρήτη, Κυκλάδες και Ελληνικά Νησιά. Εξειδικευόμαστε σε Tourism Automations, Web Design και Growth Strategy για ξενοδοχεία και premium επιχειρήσεις.";
    metaDesc.setAttribute('content', content);

    // SEO: Structured Data (JSON-LD) - LocalBusiness
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Hustle Labs",
      "image": "https://hustlelabs.gr/logo.png", // Assume logo path
      "url": "https://hustlelabs.gr",
      "telephone": "+302821000000",
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "Κρήτη" },
        { "@type": "AdministrativeArea", "name": "Κυκλάδες" },
        { "@type": "AdministrativeArea", "name": "Ιόνια Νησιά" },
        { "@type": "City", "name": "Μύκονος" },
        { "@type": "City", "name": "Σαντορίνη" },
        { "@type": "City", "name": "Ρόδος" }
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ελευθερίου Σκοπευτού 15",
        "addressLocality": "Χανιά",
        "addressRegion": "Κρήτη",
        "postalCode": "73132",
        "addressCountry": "GR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 35.5138,
        "longitude": 24.0175
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "21:00"
      },
      "sameAs": [
        "https://www.instagram.com/hustlelabs.gr",
        "https://www.linkedin.com/company/hustle-labs"
      ]
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
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }
  };


  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-primary selection:text-black overflow-x-hidden">
      
      {/* ── SECTION 1: HERO ── */}
      <section 
        onMouseMove={handleMouseMove}
        className="relative min-h-[90vh] flex items-center justify-center py-32 overflow-hidden border-b border-white/5 group/hero"
      >
        <LabBackground />
        
        {/* Interactive Mouse Spotlight */}
        <motion.div 
          className="absolute inset-0 pointer-events-none z-0 opacity-0 group-hover/hero:opacity-100 transition-opacity duration-500"
          style={{
            background: useTransform(
              [springX, springY],
              ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(208,255,0,0.06), transparent 80%)`
            )
          }}
        />

        {/* Static subtle radial glow (fallback) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(208,255,0,0.03),transparent_70%)] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-5 py-1.5 rounded-full bg-primary/5 border border-primary/20 mb-8 md:mb-12"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/80 italic">{t('hero.badge')}</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
              className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-8xl 2xl:text-9xl font-bold tracking-tight leading-[1.1] mb-8 md:mb-12"
            >
              <span className="block cursor-default">{t('hero.title1')}</span>
              <span className="text-primary block group-hover:scale-[1.02] transition-transform duration-700">{t('hero.title2')}</span>
            </motion.h1>

            <div className="space-y-8 md:space-y-12 mb-12 md:mb-16">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as any }}
                className="font-display text-xl md:text-2xl lg:text-3xl font-medium text-white/70 tracking-tight italic"
              >
                <p>{t('hero.subtitle1')}</p>
                <p>{t('hero.subtitle2')}</p>
              </motion.div>
              
              <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ duration: 1, delay: 0.3 }}
                 className="flex flex-wrap justify-center gap-x-6 md:gap-x-8 gap-y-2 text-primary font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-xs md:text-sm lg:text-base italic"
              >
                <span>{t('hero.motto1')}</span>
                <span>{t('hero.motto2')}</span>
                <span>{t('hero.motto3')}</span>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as any }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8"
            >
              <Magnetic strength={0.2}>
                <Button size="xl" className="w-full sm:w-auto rounded-full px-8 md:px-12 h-16 md:h-20 text-lg md:text-xl font-black group bg-primary text-black hover:bg-white transition-all border-none italic shadow-glow" asChild>
                  <Link to="/project-brief">
                    {t('hero.cta1')}
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </Magnetic>
              <Magnetic strength={0.3}>
                <Button variant="outline" size="xl" className="w-full sm:w-auto rounded-full px-8 md:px-12 h-16 md:h-20 text-lg md:text-xl font-black border-white/10 hover:bg-white hover:text-black transition-all italic" asChild>
                  <Link to="/book-call">{t('hero.cta2')}</Link>
                </Button>
              </Magnetic>
            </motion.div>


          </div>
        </div>

        {/* ── Decorative Elements ── */}
        <motion.div 
          animate={{ y: [0, -20, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-primary/10 blur-[120px] pointer-events-none"
        />
      </section>

      {/* ── SECTION 2: INTRO ── */}
      <section className="py-32 md:py-48 relative border-t border-white/5 overflow-hidden bg-[#0a0a0a]">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div initial={fadeInUp.initial} whileInView={fadeInUp.whileInView} viewport={fadeInUp.viewport} transition={fadeInUp.transition} className="max-w-5xl mx-auto text-center">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-10 block italic">{t('intro.badge')}</span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-normal tracking-normal leading-[1.1] mb-14 px-2 flex flex-col items-center gap-2 uppercase italic">
              <span className="text-white">{t('intro.title1')}</span>
              <span className="text-white">{t('intro.title2')}</span>
              <span className="text-white/20">{t('intro.title3')}</span>
            </h2>
            <div className="space-y-6 max-w-3xl mx-auto px-4">
              <p className="text-xl md:text-3xl font-medium text-white/90 leading-tight tracking-tight">
                {t('intro.text1')}
              </p>
              <p className="text-lg md:text-xl font-normal text-white/50 leading-relaxed">
                {t('intro.text2')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>


      {/* ── SECTION 3: BUILD FOR YOU / BUILD WITH YOU ── */}
      <section className="py-0 relative border-t border-white/5 bg-[#050505]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          {/* Build for you */}
          <div className="p-10 md:p-16 lg:p-20 xl:p-24 border-b lg:border-b-0 lg:border-r border-white/5 hover:bg-white/[0.02] transition-all duration-700 group relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
            <motion.div initial={fadeInUp.initial} whileInView={fadeInUp.whileInView} viewport={fadeInUp.viewport} transition={fadeInUp.transition} className="relative z-10">
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-white/20 mb-10 block group-hover:text-primary transition-colors italic">{t('forBusinesses.badge')}</span>
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-white/5 flex items-center justify-center text-primary mb-12 group-hover:scale-110 transition-all duration-500 border border-white/10 group-hover:border-transparent group-hover:shadow-glow/20">
                <Monitor size={32} strokeWidth={1} />
              </div>
              <h3 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 min-h-[1.2em] whitespace-pre-wrap">{t('forBusinesses.title')}</h3>
              <p className="text-[11px] md:text-sm font-black uppercase tracking-[0.3em] text-primary mb-10 italic">{t('forBusinesses.subtitle')}</p>
              <p className="text-xl md:text-2xl text-white/60 mb-16 leading-relaxed max-w-md italic">
                {t('forBusinesses.text')}
              </p>
              <ul className="grid grid-cols-1 gap-y-5 mb-24 pr-4">
                {[t('forBusinesses.item1'), t('forBusinesses.item2'), t('forBusinesses.item3'), t('forBusinesses.item4')].map((item) => (
                  <li key={item} className="flex items-center gap-4 text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-white/20 border-l border-white/10 pl-8 group-hover:border-primary/50 transition-all italic">
                    {item}
                  </li>
                ))}
              </ul>
              <Button size="xl" className="w-full sm:w-auto rounded-full h-20 md:h-24 px-12 md:px-16 text-xl md:text-2xl italic font-black bg-white text-black hover:bg-primary transition-all border-none shadow-xl hover:shadow-glow" asChild>
                <Link to="/project-brief">{t('forBusinesses.cta')}</Link>
              </Button>
            </motion.div>
          </div>

          {/* Build with you */}
          <div className="p-10 md:p-16 lg:p-20 xl:p-24 hover:bg-primary/[0.02] transition-all duration-700 group relative overflow-hidden">
            <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
            <motion.div initial={fadeInUp.initial} whileInView={fadeInUp.whileInView} viewport={fadeInUp.viewport} transition={fadeInUp.transition} className="relative z-10">
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-white/20 mb-10 block group-hover:text-primary transition-colors italic">{t('forFounders.badge')}</span>
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-white/5 flex items-center justify-center text-white/40 mb-12 group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all duration-500 border border-white/10 group-hover:border-transparent group-hover:shadow-glow">
                <Rocket size={32} strokeWidth={1} />
              </div>
              <h3 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 min-h-[1.2em] whitespace-pre-wrap">{t('forFounders.title')}</h3>
              <p className="text-[11px] md:text-sm font-black uppercase tracking-[0.3em] text-primary mb-10 italic">{t('forFounders.subtitle')}</p>
              <p className="text-xl md:text-2xl text-white/60 mb-10 leading-relaxed max-w-md italic pr-2">
                {t('forFounders.text1')}
              </p>
              <p className="text-[10px] md:text-[11px] text-white/20 italic mb-16 uppercase tracking-[0.4em] font-black leading-relaxed">{t('forFounders.text2')}</p>
              <ul className="grid grid-cols-1 gap-y-5 mb-24">
                {[t('forFounders.item1'), t('forFounders.item2'), t('forFounders.item3'), t('forFounders.item4')].map((item) => (
                  <li key={item} className="flex items-center gap-4 text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-white/20 border-l border-white/10 pl-8 group-hover:border-primary/50 transition-all italic">
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="outline" size="xl" className="w-full sm:w-auto rounded-full h-20 md:h-24 px-12 md:px-16 text-xl md:text-2xl italic font-black border-white/10 hover:bg-white hover:text-black transition-all" asChild>
                <Link to="/book-call">{t('forFounders.cta')}</Link>
              </Button>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ── SECTION 3.5: TECH STACK MARQUEE ── */}
      <section className="py-24 bg-[#080808] border-b border-white/5">
        <div className="container mx-auto px-4 mb-16 text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/20">{t('tech.badge')}</span>
        </div>
        <div className="flex overflow-hidden group">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="flex gap-28 items-center whitespace-nowrap px-14"
          >
            {[
              "React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "OpenAI", "Anthropic", "LangChain", "Supabase", "PostgreSQL",
              "Stripe", "WordPress", "Vercel", "Cloudflare", "Docker", "AWS", "Figma", "Shadcn UI", "Resend", "Sentry", "Pinecone",
              "React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "OpenAI", "Anthropic", "LangChain", "Supabase", "PostgreSQL",
              "Stripe", "WordPress", "Vercel", "Cloudflare", "Docker", "AWS", "Figma", "Shadcn UI", "Resend", "Sentry", "Pinecone"
            ].map((tech, i) => (
              <span key={i} className="text-3xl md:text-5xl font-bold font-sans text-white/10 group-hover:text-primary transition-colors duration-500 py-4">
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 4: THE PROCESS ── */}
      <section className="py-32 md:py-48 relative border-t border-white/5 bg-[#050505]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={fadeInUp.initial} whileInView={fadeInUp.whileInView} viewport={fadeInUp.viewport} transition={fadeInUp.transition} className="max-w-4xl mx-auto text-center mb-20 md:mb-32">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-10 block italic">{t('process.badge')}</span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 uppercase italic leading-[1.1]">
              {t('process.title1')} <br />
              <span className="text-white/20">{t('process.title2')}</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 max-w-7xl mx-auto">
            {[
              { num: "01", title: t('process.step1.title'), desc: t('process.step1.desc') },
              { num: "02", title: t('process.step2.title'), desc: t('process.step2.desc') },
              { num: "03", title: t('process.step3.title'), desc: t('process.step3.desc') },
              { num: "04", title: t('process.step4.title'), desc: t('process.step4.desc') }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-8 md:p-10 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] rounded-3xl transition-all group overflow-hidden"
              >
                <span className="text-5xl md:text-7xl font-display font-black text-white/5 group-hover:text-primary/10 transition-colors absolute top-6 right-6 italic">{step.num}</span>
                <div className="relative z-10 pt-10">
                  <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">{step.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed italic">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: ROSTER ── */}
      <section className="py-32 md:py-48 relative border-t border-white/5 bg-[#080808]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16 md:mb-24">
            <motion.div initial={fadeInUp.initial} whileInView={fadeInUp.whileInView} viewport={fadeInUp.viewport} transition={fadeInUp.transition} className="max-w-4xl mx-auto lg:mx-0">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-8 block">{t('roster.badge')}</span>
              <h2 className="font-display text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-12">
                {t('roster.title1')} <span className="text-white/20 text-3xl md:text-5xl lg:text-7xl tracking-normal md:whitespace-nowrap">{t('roster.title2')}</span>
              </h2>
              
              <div className="space-y-4 md:space-y-6 mt-12 md:mt-16">
                <p className="text-primary font-bold uppercase tracking-[0.4em] md:tracking-[0.5em] text-sm md:text-base animate-pulse">{t('roster.subtitle1')}</p>
                <div className="h-px w-20 bg-white/10" />
                <p className="text-xl md:text-2xl text-white/50 max-w-2xl leading-relaxed">
                  {t('roster.subtitle2')}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pb-24">
                <div className="md:col-span-1">
                  <PortfolioCard 
                    index={0}
                    title="Sigmalabs AI"
                    category="Agentic AI"
                    image="/images/sigmalabs.jpg"
                    link="/portfolio/sigmalabs-ai"
                    className="aspect-[4/5] lg:aspect-[3/4]"
                  />
                </div>
                <div className="md:col-span-1 md:mt-12">
                  <PortfolioCard 
                    index={1}
                    title="Skiathos Travellers"
                    category="Tourism Engine"
                    image="/images/skiathostravellers.png"
                    link="/portfolio/skiathos-travellers"
                    className="aspect-[4/5] lg:aspect-[3/4]"
                  />
                </div>
                <div className="md:col-span-1 md:mt-24">
                  <PortfolioCard 
                    index={2}
                    title="Liv Tours"
                    category="Automation Hub"
                    image="/images/liv-tours-main.png"
                    link="/portfolio/liv-tours-transfers"
                    className="aspect-[4/5] lg:aspect-[3/4]"
                  />
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex justify-center"
              >
                <Button variant="outline" size="xl" className="rounded-full px-12 h-20 text-lg font-bold border-white/10 hover:bg-white hover:text-black transition-all" asChild>
                  <Link to="/portfolio" className="flex items-center gap-3">
                    {t('portfolio.hero.explore')} <ArrowRight size={20} />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: CLIENT STORIES ── */}
      <section className="py-32 md:py-48 relative border-t border-white/5 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(208,255,0,0.02),transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div initial={fadeInUp.initial} whileInView={fadeInUp.whileInView} viewport={fadeInUp.viewport} transition={fadeInUp.transition} className="max-w-4xl mx-auto lg:mx-0 mb-20 md:mb-32">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-8 block italic">{t('testimonials.badge')}</span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.9] mb-12 uppercase italic">
              {t('testimonials.title1')} <br />
              <span className="text-white/20 text-3xl md:text-5xl lg:text-7xl tracking-normal md:whitespace-nowrap">{t('testimonials.title2')}</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
            {[
              {
                quote: t('testimonials.1.quote'),
                name: "Liv Tours",
                role: "Luxury Transfers & Tours",
                result: "40+ Hours / Month Savings"
              },
              {
                quote: t('testimonials.2.quote'),
                name: "Skiathos Travellers",
                role: "Tourism Engine",
                result: "+140% Direct Bookings"
              },
              {
                quote: t('testimonials.3.quote'),
                name: "TopTravel Greece",
                role: "Travel & Tours Agency",
                result: "Custom Booking Automations"
              }
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-10 md:p-14 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all duration-700"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-10 bg-gradient-to-b from-primary/40 to-transparent group-hover:h-20 transition-all duration-700" />
                
                <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 font-medium italic">
                  "{t.quote}"
                </p>

                <p className="text-[9px] font-black text-primary uppercase tracking-[0.4em] italic mb-8 border-l border-primary/30 pl-5">
                  {t.result}
                </p>

                <div className="flex items-center gap-4 pt-8 border-t border-white/5">
                  <div>
                    <p className="text-sm font-black italic uppercase tracking-tight text-white">{t.name}</p>
                    <p className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em] italic mt-0.5">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: GROWTH PACKAGES ── */}
      <section className="py-32 md:py-48 relative bg-[#050505] overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={fadeInUp.initial} whileInView={fadeInUp.whileInView} viewport={fadeInUp.viewport} transition={fadeInUp.transition} className="text-center mb-16 md:mb-24">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-8 block italic">{t('growth.badge')}</span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-12">{t('growth.title1')} <span className="text-white/20">{t('growth.title2')}</span></h2>
            <p className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto italic">{t('growth.subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { 
                name: "The Starter", 
                price: "from €1.8k", 
                desc: t('growth.starter.desc'),
                features: [t('growth.starter.f1'), t('growth.starter.f2'), t('growth.starter.f3'), t('growth.starter.f4')]
              },
              { 
                name: "The Scale", 
                price: "Custom", 
                desc: t('growth.scale.desc'),
                features: [t('growth.scale.f1'), t('growth.scale.f2'), t('growth.scale.f3'), t('growth.scale.f4')],
                popular: true
              },
              { 
                name: "The Fractional", 
                price: "Monthly", 
                desc: t('growth.fractional.desc'),
                features: [t('growth.fractional.f1'), t('growth.fractional.f2'), t('growth.fractional.f3'), t('growth.fractional.f4')]
              }
            ].map((pkg, i) => (
              <motion.div 
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "relative p-8 md:p-12 rounded-[2.5rem] border transition-all duration-500 hover:-translate-y-2 flex flex-col",
                  pkg.popular ? "bg-[#080808] border-primary/20 shadow-glow" : "bg-card/30 border-white/5 hover:border-white/10"
                )}
              >
                {pkg.popular && <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-black text-[10px] font-black uppercase tracking-widest italic">{t('growth.badge_most_efficient')}</span>}
                <div className="mb-10">
                  <h3 className="text-2xl font-bold text-white tracking-tight mb-2">{t(`growth.${pkg.name.split(' ').pop()?.toLowerCase()}.name`)}</h3>
                  <div className="text-3xl font-black text-primary italic mb-6">{t(`growth.${pkg.name.split(' ').pop()?.toLowerCase()}.price`)}</div>
                  <p className="text-sm text-white/50 leading-relaxed italic">{t(`growth.${pkg.name.split(' ').pop()?.toLowerCase()}.desc`)}</p>
                </div>
                <ul className="space-y-4 mb-12 flex-1">
                  {pkg.features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-xs font-bold text-white/70 italic uppercase tracking-wide">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant={pkg.popular ? "default" : "outline"} className={cn("w-full h-16 rounded-full font-black uppercase tracking-widest italic transition-all", pkg.popular ? "bg-primary text-black hover:bg-white" : "border-white/10 hover:bg-white hover:text-black")} asChild>
                  <Link to="/project-brief">{t('growth.cta')}</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: THE HUB (HUSTLE SPACE) ── */}
      <section className="py-32 md:py-48 relative min-h-screen flex items-center bg-[#050505] overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[140px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/[0.02] blur-[100px] rounded-full translate-y-1/4 -translate-x-1/4 pointer-events-none" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary mb-10 block">{t('space.badge')}</span>
              <h2 className="font-sans text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-12 leading-[0.9]">
                Hustle <br />
                <span className="text-white/20">Space.</span>
              </h2>
              <p className="text-xl md:text-2xl text-white/40 mb-16 leading-relaxed max-w-xl font-medium">
                {t('space.text')}
              </p>

              {/* Amenities Grid */}
              <div className="grid grid-cols-2 gap-8 mb-20">
                 {[
                   { icon: Zap, label: t('space.amenity1'), desc: t('space.amenity1.desc') },
                   { icon: Layers, label: t('space.amenity2'), desc: t('space.amenity2.desc') },
                   { icon: Coffee, label: t('space.amenity3'), desc: t('space.amenity3.desc') },
                   { icon: MapPin, label: t('space.amenity4'), desc: t('space.amenity4.desc') }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                         <item.icon size={18} className="text-primary/70" />
                      </div>
                      <div>
                         <h4 className="text-sm font-bold text-white mb-1">{item.label}</h4>
                         <p className="text-[10px] text-white/30 uppercase tracking-widest">{item.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>

              <div className="flex flex-wrap gap-6">
                 <Button size="xl" className="rounded-full h-20 px-16 bg-primary text-black font-bold group hover:bg-white transition-all border-none shadow-glow-strong" asChild>
                   <Link to="/hustle-space">
                      {t('space.cta')} <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
                   </Link>
                 </Button>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="relative"
            >
               {/* Decorative frame */}
               <div className="absolute inset-0 border border-white/10 rounded-[3.5rem] translate-x-6 translate-y-6 -z-10" />
               
               <div className="relative h-[500px] md:h-[700px] rounded-[3rem] overflow-hidden group">
                  <img 
                    src="/images/hustlespacenew.jpg" 
                    alt="Hustle Space Chania" 
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  
                  {/* Floating info card */}
                  <div className="absolute bottom-10 left-10 right-10 p-10 glass-card rounded-3xl border-white/10 flex items-center justify-between">
                     <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2 block">Location</span>
                        <h4 className="text-lg font-bold text-white">Chania, Greece</h4>
                     </div>
                     <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                        <MapPin size={20} />
                     </div>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Index;
