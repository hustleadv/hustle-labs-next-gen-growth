import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Globe, Megaphone, Bot, Lightbulb, ArrowRight, CheckCircle2, Clock, Users, Layers, Settings, Zap, Target, Palette, Mic, Code2, Rocket, Sparkles, Star, TrendingUp, Monitor, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion from "@/components/FAQAccordion";
import LabBackground from "@/components/LabBackground";
import { type LucideIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface ServiceCategory {
  icon: LucideIcon;
  title: string;
  intro: string;
  outcome: string;
  includes: string[];
  bestFor: string[];
  timeline: string;
  color: string;
  borderColor: string;
  bgIcon: string;
  accentGradient: string;
  ctaLink: string;
  direction: string;
  ctaLabel?: string;
  badge?: string;
  testimonial?: {
    text: string;
    author: string;
    role: string;
  };
  image: string;
  localFAQ?: {
    q: string;
    a: string;
  };
}


const getCategories = (t: any): ServiceCategory[] => [
    {
      icon: Globe,
      title: t('nav.websites'),
      outcome: t('services.websites.outcome'),
      intro: t('services.websites.intro'),
      includes: [
        t('services.websites.includes.1'),
        t('services.websites.includes.2'),
        t('services.websites.includes.3'),
        t('services.websites.includes.4'),
        t('services.websites.includes.5'),
      ],
      bestFor: [
        t('services.websites.bestFor.1'),
        t('services.websites.bestFor.2'),
      ],
      timeline: t('services.websites.timeline'),
      color: "text-primary",
      borderColor: "border-primary/20",
      bgIcon: "bg-primary/10",
      accentGradient: "from-primary/20 to-primary/5",
      ctaLink: "/websites",
      direction: t('services.websites.direction'),
      ctaLabel: t('portfolio.categories.all'),
      badge: "The Standard",
      testimonial: {
        text: t('services.websites.testimonial'),
        author: t('services.websites.author'),
        role: t('services.websites.role')
      },
      image: "/images/services/websites.png",
      localFAQ: {
        q: t('services.websites.faq.q'),
        a: t('services.websites.faq.a')
      }
    },
    {
      icon: TrendingUp,
      title: t('nav.growth'),
      outcome: t('services.growth.outcome'),
      intro: t('services.growth.intro'),
      includes: [
        t('services.growth.includes.1'),
        t('services.growth.includes.2'),
        t('services.growth.includes.3'),
        t('services.growth.includes.4'),
        t('services.growth.includes.5'),
      ],
      bestFor: [
        t('services.growth.bestFor.1'),
        t('services.growth.bestFor.2'),
      ],
      timeline: t('services.growth.timeline'),
      color: "text-primary",
      borderColor: "border-primary/20",
      bgIcon: "bg-primary/10",
      accentGradient: "from-primary/20 to-accent/20",
      ctaLink: "/growth",
      direction: t('services.growth.direction'),
      ctaLabel: t('portfolio.categories.all'),
      badge: "ROI Focused",
      testimonial: {
        text: t('services.growth.testimonial'),
        author: t('services.growth.author'),
        role: t('services.growth.role')
      },
      image: "/images/services/growth.png",
      localFAQ: {
        q: t('services.growth.faq.q'),
        a: t('services.growth.faq.a')
      }
    },
    {
      icon: Bot,
      title: t('nav.ai_lab'),
      outcome: t('services.ai.outcome'),
      intro: t('services.ai.intro'),
      includes: [
        t('services.ai.includes.1'),
        t('services.ai.includes.2'),
        t('services.ai.includes.3'),
        t('services.ai.includes.4'),
        t('services.ai.includes.5'),
      ],
      bestFor: [
        t('services.ai.bestFor.1'),
        t('services.ai.bestFor.2'),
      ],
      timeline: t('services.ai.timeline'),
      color: "text-primary",
      borderColor: "border-primary/20",
      bgIcon: "bg-primary/10",
      accentGradient: "from-primary/30 to-accent/10",
      ctaLink: "/ai-lab",
      direction: t('services.ai.direction'),
      ctaLabel: t('portfolio.categories.all'),
      badge: "Future Proof",
      testimonial: {
        text: t('services.ai.testimonial'),
        author: t('services.ai.author'),
        role: t('services.ai.role')
      },
      image: "/images/services/ai.png",
      localFAQ: {
        q: t('services.ai.faq.q'),
        a: t('services.ai.faq.a')
      }
    },
    {
      icon: Lightbulb,
      title: t('nav.strategy'),
      outcome: t('services.strategy.outcome'),
      intro: t('services.strategy.intro'),
      includes: [
        t('services.strategy.includes.1'),
        t('services.strategy.includes.2'),
        t('services.strategy.includes.3'),
        t('services.strategy.includes.4'),
        t('services.strategy.includes.5'),
      ],
      bestFor: [
        t('services.strategy.bestFor.1'),
        t('services.strategy.bestFor.2'),
      ],
      timeline: t('services.strategy.timeline'),
      color: "text-primary",
      borderColor: "border-primary/20",
      bgIcon: "bg-primary/10",
      accentGradient: "from-primary/10 to-primary/30",
      ctaLink: "/project-brief",
      direction: t('services.strategy.direction'),
      ctaLabel: t('portfolio.categories.all'),
      badge: "Strategic Core",
      testimonial: {
        text: t('services.strategy.testimonial'),
        author: t('services.strategy.author'),
        role: t('services.strategy.role')
      },
      image: "/images/services/strategy.png",
      localFAQ: {
        q: t('services.strategy.faq.q'),
        a: t('services.strategy.faq.a')
      }
    }
  ];

const getFaqs = (t: any) => [
    { question: t('services.faq.q1'), answer: t('services.faq.a1') },
    { question: t('services.faq.q2'), answer: t('services.faq.a2') },
    { question: t('services.faq.q3'), answer: t('services.faq.a3') },
    { question: t('services.faq.q4'), answer: t('services.faq.a4') },
    { question: t('services.faq.q5'), answer: t('services.faq.a5') },
    { question: t('services.faq.q6'), answer: t('services.faq.a6') },
    { question: t('services.faq.q7'), answer: t('services.faq.a7') },
  ];


const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] as const },
});

const ServiceBlock = ({ service, index }: { service: ServiceCategory; index: number }) => {
  const { t } = useLanguage();
  const Icon = service.icon;

  return (
    <motion.div
      {...fadeUp(index * 0.1)}
      className="group relative rounded-[2rem] md:rounded-[4rem] border border-white/5 overflow-hidden bg-white/[0.01] hover:bg-white/[0.02] shadow-2xl transition-all duration-700 flex flex-col"
    >
      {/* Decorative accent background */}
      <div className={`absolute -right-20 -top-20 w-80 h-80 rounded-full bg-primary/5 blur-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none`} />

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 p-8 md:p-16 relative z-10 flex-1">
        <div className="flex-1 flex flex-col">
          <div className="flex items-center justify-between mb-12">
            <div className={`w-16 h-16 rounded-2xl ${service.bgIcon} flex items-center justify-center shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-inner border border-white/5`}>
              <Icon size={28} className={service.color} />
            </div>
            <div className="flex flex-col items-end gap-2">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/40 italic">Deployment Ready</span>
              {service.badge && (
                <span className="px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-[10px] font-black uppercase tracking-widest text-primary italic">
                  {service.badge}
                </span>
              )}
            </div>
          </div>

          <span className="text-primary font-black uppercase tracking-[0.5em] text-[10px] mb-6 italic block">{service.outcome}</span>
          <h3 className="font-display text-4xl md:text-6xl font-black text-white mb-8 group-hover:text-primary transition-colors duration-500 tracking-tighter italic uppercase leading-none">{service.title}</h3>

          <div className="inline-flex items-center gap-3 bg-white/5 px-5 py-2 rounded-full border border-white/5 mb-10 self-start">
             <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
             <p className="text-[10px] font-black text-white/50 uppercase tracking-[0.3em] italic">{service.direction}</p>
          </div>
          
          <p className="text-white/40 text-lg md:text-xl leading-relaxed mb-12 max-w-xl font-medium italic pr-4">{service.intro}</p>

          <div className="mt-auto pt-8 border-t border-white/5">
            <div className="flex flex-wrap gap-4 mb-12">
              <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/5">
                <Clock size={16} className="text-primary/60" />
                <span className="text-[10px] font-black text-white/40 font-display uppercase tracking-widest italic">{service.timeline}</span>
              </div>
              <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/5">
                <Star size={16} className="text-primary/60" />
                <span className="text-[10px] font-black text-white/40 font-display uppercase tracking-widest italic font-bold">Standard of Excellence</span>
              </div>
            </div>

            <Button size="xl" className="w-full sm:w-auto rounded-full px-12 h-20 md:h-24 text-xl font-black uppercase tracking-widest bg-white text-black hover:bg-primary transition-all border-none italic shadow-xl hover:shadow-glow" asChild>
              <Link to={service.ctaLink}>
                {service.ctaLabel || t('services.cta.explore')} <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={20} />
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-12 pt-12 lg:pt-0 lg:border-l border-white/5 lg:pl-16 self-stretch">
          {/* Service Image Preview */}
          <div className="col-span-full mb-4 relative group/img rounded-2xl overflow-hidden border border-white/10 aspect-[21/9]">
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-0 border-2 border-primary/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
          </div>

          <div className="flex flex-col">
            <h4 className="font-display text-[11px] font-black text-primary uppercase tracking-[0.5em] mb-10 flex items-center gap-3 italic">
              <Layers size={16} className="opacity-40" /> {t('services.includes.title')}
            </h4>
            <ul className="space-y-6">
              {service.includes.map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-sm md:text-base text-white/30 leading-snug font-medium group/item hover:text-white transition-colors italic">
                  <CheckCircle2 size={18} className="text-primary/30 mt-0.5 shrink-0 group-hover/item:text-primary transition-colors" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="font-display text-[11px] font-black text-primary uppercase tracking-[0.5em] mb-10 flex items-center gap-3 italic">
              <Users size={16} className="opacity-40" /> {t('services.bestFor.title')}
            </h4>
            <ul className="space-y-6">
              {service.bestFor.map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-sm md:text-base text-white/30 leading-snug font-medium group/item hover:text-white transition-colors italic">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/20 mt-2 shrink-0 group-hover/item:scale-150 group-hover/item:bg-primary transition-all" />
                  {item}
                </li>
              ))}
            </ul>
             
            {/* SEO Service-specific FAQ */}
            {service.localFAQ && (
              <div className="mt-12 pt-8 border-t border-white/5">
                <h5 className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em] mb-4 italic">{t('services.faq.quick_insight')}</h5>
                <p className="text-sm font-black text-white italic mb-2 group-hover:text-primary transition-colors">{service.localFAQ.q}</p>
                <p className="text-xs text-white/20 italic leading-relaxed">{service.localFAQ.a}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Service Testimonial - Social Proof for SEO */}
      {service.testimonial && (
        <div className="px-8 md:px-16 pb-12">
           <div className="p-8 rounded-[2rem] bg-primary/5 border border-primary/10 flex flex-col md:flex-row items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                 <Star size={20} className="text-primary" />
              </div>
              <div className="flex-1">
                 <p className="text-white/60 italic text-sm md:text-base leading-relaxed mb-4">"{service.testimonial.text}"</p>
                 <p className="text-[10px] font-black text-primary uppercase tracking-widest italic">{service.testimonial.author} — <span className="text-white/30">{service.testimonial.role}</span></p>
              </div>
           </div>
        </div>
      )}
    </motion.div>
  );
};

const Services = () => {
  const { t } = useLanguage();
  const categories = getCategories(t);
  const faqs = getFaqs(t);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = t('services.seo.title');
    
    // SEO Meta Tags
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', t('services.seo.desc'));
    }

    // SEO: Structured Data (JSON-LD)
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Digital Agency Services",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Hustle Labs",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Γαλατάς, Χανιά",
          "addressLocality": "Χανιά",
          "addressRegion": "Κρήτη",
          "postalCode": "73100",
          "addressCountry": "GR"
        }
      },
      "areaServed": {
        "@type": "State",
        "name": "Κρήτη"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Digital Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Web Design & Development"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI & Automation"
            }
          }
        ]
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

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-primary selection:text-black overflow-x-hidden">
      {/* ── SECTION 1: HERO ── */}
      <section className="relative min-h-[90vh] flex items-center justify-center py-24 md:py-32 overflow-hidden border-b border-white/5 bg-black">
        <LabBackground />
        <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-black to-transparent z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,_rgba(208,255,0,0.05),transparent_70%)] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          <div className="max-w-6xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 mb-12 shadow-inner"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary italic">{t('services.hero.badge')}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
              className="font-display text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] mb-12 uppercase italic"
            >
              {t('services.hero.title_part1')} <br />
              <span className="text-primary italic animate-glow md:tracking-normal">{t('services.hero.title_part2')}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as any }}
              className="text-lg md:text-2xl font-medium text-white/50 max-w-3xl mx-auto mb-16 italic leading-relaxed"
            >
              {t('services.hero.subtitle')}
            </motion.p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button size="xl" className="rounded-full px-12 md:px-16 h-20 md:h-24 text-xl md:text-2xl font-black bg-primary text-black hover:bg-white transition-all border-none italic shadow-glow-strong" asChild>
                <Link to="/project-brief">
                  {t('services.hero.cta1')}
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="rounded-full px-12 md:px-16 h-20 md:h-24 text-xl md:text-2xl font-black border-white/10 hover:bg-white hover:text-black transition-all italic" asChild>
                <Link to="/book-call">{t('services.hero.cta2')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: DECISION HELPER ── */}
      <section className="py-24 md:py-32 relative border-t border-white/5 bg-[#080808]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeUp()} className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-black italic uppercase mb-16 tracking-tight text-white leading-none">Από πού ξεκινάς;</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { text: "Ξεκινάς από το website", service: "Next-Gen Websites", icon: Globe },
                { text: "Θες περισσότερους πελάτες", service: "Ads & Growth", icon: TrendingUp },
                { text: "Θες automation & scale", service: "AI & Automation", icon: Bot }
              ].map((path, i) => (
                <div key={i} className="group p-10 rounded-[2.5rem] border border-white/5 bg-white/[0.02] hover:bg-primary/5 hover:border-primary/20 transition-all cursor-pointer shadow-lg hover:shadow-glow/10">
                  <path.icon size={24} className="mb-6 text-primary/30 group-hover:text-primary transition-colors mx-auto" />
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-4 group-hover:text-white transition-colors italic leading-relaxed">{path.text}</p>
                  <p className="text-sm font-black italic uppercase text-primary tracking-widest leading-relaxed">→ {path.service}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 3: THE OPERATING SYSTEM ── */}
      <section className="py-24 md:py-48 relative border-t border-white/5 bg-[#050505] overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto text-center relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" 
            />
            
            <motion.div {...fadeUp()} className="relative z-10">
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary mb-10 block italic animate-pulse">The Hustle O S</span>
              <h2 className="font-display text-4xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-12 italic uppercase">
                Πώς δουλεύει <br />
                <span className="text-white/10 italic">το Σύστημα.</span>
              </h2>
              <p className="text-xl md:text-3xl text-white/40 font-medium italic leading-relaxed max-w-4xl mx-auto mb-20 px-4">
                Δεν βλέπουμε το website, το marketing και το AI σαν ξεχωριστά κομμάτια. <br className="hidden md:block" />
                Τα χτίζουμε σαν ένα ενιαίο σύστημα που δουλεύει μαζί για το απόλυτο αποτέλεσμα.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: SERVICE BLOCKS ── */}
      <section className="py-24 md:py-48 relative overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,_rgba(208,255,0,0.02),_transparent_50%)] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 space-y-16 max-w-6xl relative z-10">
          <div className="space-y-16 md:space-y-32">
            {categories.map((cat, i) => (
              <ServiceBlock key={i} service={cat} index={i} />
            ))}
          </div>

          <motion.div
            {...fadeUp(0.3)}
            className="mt-32 pt-32 border-t border-white/5 text-center max-w-4xl mx-auto"
          >
            <h3 className="font-display text-4xl md:text-7xl font-black italic uppercase mb-12 tracking-tighter text-white leading-none">Ξεχωριστά είναι εργαλεία. <br /> <span className="text-primary italic animate-glow">Μαζί είναι Σύστημα.</span></h3>
            <p className="text-lg md:text-xl font-black italic uppercase text-white/20 tracking-[0.5em] mb-20">Aggressive Scaling via Integration.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {[
                { label: "Phase 01", title: "Web Architecture", desc: "Build the Core" },
                { label: "Phase 02", title: "Growth Engine", desc: "Drive the Traffic" },
                { label: "Phase 03", title: "AI Deployment", desc: "Scale the Value" }
              ].map((phase, i) => (
                <div key={i} className="flex flex-col items-center">
                   <span className="text-[10px] font-black text-primary uppercase tracking-widest mb-4 italic">{phase.label}</span>
                   <h4 className="text-2xl font-black italic uppercase text-white mb-2 tracking-tight">{phase.title}</h4>
                   <p className="text-xs font-medium text-white/30 uppercase tracking-[0.3em] font-sans italic">{phase.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 5: FAQ ── */}
      <section className="py-24 md:py-48 bg-[#050505] relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(208,255,0,0.03),_transparent_40%)] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto mb-24 md:mb-32">
            <motion.div {...fadeUp()}>
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary mb-10 block italic">Common Questions</span>
              <h2 className="font-display text-4xl md:text-8xl font-black tracking-tighter leading-[0.85] italic uppercase text-white">
                Συχνές <br />
                <span className="text-white/10 italic">Ερωτήσεις.</span>
              </h2>
            </motion.div>
          </div>
          <div className="max-w-4xl mx-auto">
            <FAQAccordion items={faqs} dark={true} />
          </div>
        </div>
      </section>

      {/* ── SECTION 6: FINAL CTA ── */}
      <section className="py-32 md:py-64 relative overflow-hidden bg-black border-t border-white/5">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #d0ff00 0.5px, transparent 0.5px)", backgroundSize: "40px 40px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[140px] opacity-40 pointer-events-none animate-pulse" />

        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          <motion.div
            {...fadeUp()}
            className="max-w-5xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/5 bg-white/[0.02] mb-12 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/50 italic">Ready for Integration</span>
            </div>

            <h2 className="font-display text-5xl md:text-9xl font-black text-white mb-12 tracking-tighter leading-[0.85] italic uppercase">
              Αν θέλεις αποτέλεσμα, <br />
              <span className="text-primary italic animate-glow">χτίσε σωστά.</span>
            </h2>

            <p className="text-primary font-black uppercase tracking-[0.4em] text-lg md:text-2xl mb-16 italic">Και όχι, δεν γίνεται με τυχαίες κινήσεις.</p>

            <div className="flex flex-col sm:flex-row justify-center gap-8">
              <Button size="xl" className="rounded-full px-16 h-24 md:h-28 text-2xl md:text-3xl font-black group bg-white text-black hover:bg-primary transition-all border-none italic shadow-2xl hover:shadow-glow-strong" asChild>
                <Link to="/project-brief" className="flex items-center gap-4">
                  Start Your Brief <ArrowRight className="group-hover:translate-x-3 transition-transform" size={28} />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
