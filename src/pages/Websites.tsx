import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Code, Globe, Monitor, ArrowRight, Palette, Zap, TrendingUp, Rocket,
  Paintbrush, Smartphone, Search, BarChart3, PenTool, CheckSquare,
  Layers, Target, Wrench, HelpCircle, CheckCircle2, ShieldCheck,
  Cpu, Layout, Sparkles, MousePointer2, ExternalLink, Server, Database,
  Terminal, Component, Box, Cpu as CpuIcon, Container, MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion from "@/components/FAQAccordion";
import LabBackground from "@/components/LabBackground";
import Magnetic from "@/components/Magnetic";

/* ─── Animation helpers ─── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as any },
});

/* ─── Next-Gen Architecture (Common Features) ─── */
const nextGen = [
  {
    icon: Layout,
    title: "100% Custom Design",
    desc: "Κανένα template, κανένα page builder. Σχεδιασμένο από το μηδέν πάνω στο brand, το κοινό και τους στόχους σου.",
    badge: "Unique UI",
    color: "hsl(72 62% 58%)"
  },
  {
    icon: Zap,
    title: "Αστραπιαία Ταχύτητα",
    desc: "Optimized performance, κάτω από 2'' load time. Γιατί κάθε δευτερόλεπτο κοστίζει πελάτες.",
    badge: "99+ PageSpeed",
    color: "hsl(200 80% 60%)"
  },
  {
    icon: MousePointer2,
    title: "Conversion-First UX",
    desc: "Κάθε section, κάθε CTA, κάθε pixel σχεδιασμένο για να μετατρέπει επισκέπτες σε πελάτες.",
    badge: "ROI Focused",
    color: "hsl(280 70% 65%)"
  },
  {
    icon: ShieldCheck,
    title: "Technical Excellence",
    desc: "Clean code, SEO-ready αρχιτεκτονική και ασφάλεια τραπεζικού επιπέδου σε κάθε γραμμή κώδικα.",
    badge: "Safe & Secure",
    color: "hsl(150 60% 50%)"
  },
];

/* ─── Deliverables ─── */
const deliverables = [
  { icon: Paintbrush, title: "Custom Design", desc: "UI/UX σχεδιασμένο αποκλειστικά για εσένα. Mood, colors, typography, layout, όλα from scratch." },
  { icon: Smartphone, title: "Responsive Flow", desc: "Κάθε σελίδα τέλεια σε mobile, tablet και desktop. Απρόσκοπτη εμπειρία σε κάθε οθόνη." },
  { icon: Search, title: "SEO Foundation", desc: "Σωστή δομή, meta tags, schema markup και sitemap, έτοιμο για Google από την πρώτη μέρα." },
  { icon: BarChart3, title: "Data & Tracking", desc: "Google Analytics 4, conversion tracking και event setup. Ξέρεις τι δουλεύει και τι όχι." },
  { icon: PenTool, title: "Copy Guidance", desc: "Στρατηγική κατεύθυνση για τα κείμενα: τι να γράψεις, πού και γιατί για μέγιστο impact." },
  { icon: Cpu, title: "Next-Gen Stack", desc: "Χρησιμοποιούμε React & Next.js για την ταχύτερη και πιο σταθερή ψηφιακή εμπειρία στον κόσμο." },
];

/* ─── Packages ─── */
const packages = [
  {
    name: "Starter Site",
    price: "From €1.200",
    label: "For small businesses",
    tagline: "Για επιχειρήσεις που θέλουν ένα σωστό ξεκίνημα.",
    bullets: ["1-5 σελίδες Custom Design", "Mobile-first & SEO-ready", "Contact Form & Map Setup", "Google Analytics Integration", "Παράδοση σε 15 ημέρες"],
    icon: Monitor
  },
  {
    name: "Growth Engine",
    price: "From €2.500",
    label: "Most popular. Built for growth",
    tagline: "Για επιχειρήσεις που θέλουν πωλήσεις, όχι μόνο παρουσία.",
    bullets: ["5-12 σελίδες + Landing Pages", "Conversion-Optimized UX", "Blog / CMS Integration", "Advanced Funnel Tracking", "Copy Strategy Guidance"],
    featured: true,
    icon: TrendingUp
  },
  {
    name: "Scale System",
    price: "Custom Quote",
    label: "For serious scale",
    tagline: "Για brands που θέλουν ολοκληρωμένο οικοσύστημα.",
    bullets: ["Custom Web Application", "E-commerce ή Client Portal", "API Integrations & Automations", "High-Performance Scaling", "Ολοκληρωμένο UX Research"],
    icon: Rocket
  },
];

/* ─── FAQ ─── */
const faqs = [
  { question: "Πόσο κοστίζει ένα custom website;", answer: "Το κόστος εξαρτάται από τις ανάγκες και το scope του project. Τα Starter sites ξεκινούν από €1.200, ενώ πιο σύνθετα συστήματα ग्रोथ τιμολογούνται ανάλογα με τα integrations και το μέγεθος. Μετά το brief σου στέλνουμε μια πλήρη και ξεκάθαρη προσφορά." },
  { question: "Χρησιμοποιείτε WordPress ή Templates;", answer: "Όχι. Στη Hustle Labs χτίζουμε το μέλλον. Χρησιμοποιούμε custom code (React, Next.js, Tailwind) για να διασφαλίσουμε ότι το site σου είναι πιο γρήγορο, πιο ασφαλές και πιο όμορφο από τον ανταγωνισμό." },
  { question: "Πόσο χρόνο παίρνει η υλοποίηση;", answer: "Ένα Starter site απαιτεί περίπου 2 εβδομάδες, ενώ ένα σύνθετο Growth Engine ή Scale System μπορεί να χρειαστεί από 4 έως 8 εβδομάδες." },
  { question: "Τι γίνεται μετά το Launch;", answer: "Δεν σε αφήνουμε μόνο. Παρέχουμε συνεχή υποστήριξη, speed optimization και τεχνική παρακολούθηση για να διασφαλίσουμε ότι η επένδυσή σου αποδίδει συνεχώς." },
];

/* ─── Process Protocol (Align with homepage) ─── */
const processSteps = [
  {
    step: "01",
    title: "Deep Dive",
    desc: "Καταλαβαίνουμε τι πραγματικά χρειάζεσαι.",
    icon: Search
  },
  {
    step: "02",
    title: "Strategy",
    desc: "Ορίζουμε τι έχει σημασία.",
    icon: Target
  },
  {
    step: "03",
    title: "Build",
    desc: "Χτίζουμε το σωστό σύστημα.",
    icon: Code
  },
  {
    step: "04",
    title: "Growth",
    desc: "Βελτιώνουμε και εξελίσσουμε.",
    icon: TrendingUp
  }
];

const Websites = () => {
  const [hasSite, setHasSite] = useState<boolean | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Κατασκευή Ιστοσελίδων Chania | High-Performance Web Design - Hustle Labs";
    
    // SEO Meta Tags
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Premium κατασκευή ιστοσελίδων στα Χανιά. Χρησιμοποιούμε Next.js & React για αστραπιαία ταχύτητα, SEO και κορυφαία αισθητική. Δημιουργούμε ψηφιακά εργαλεία που φέρνουν αποτελέσματα.");
    }

    // SEO: Structured Data
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Web Design & Development",
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
        "@type": "City",
        "name": "Chania"
      },
      "description": "Custom high-performance web design and development services using modern tech stacks like Next.js and React."
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

      {/* ─── Custom Interactive Hero ─── */}
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

        {/* Static subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(208,255,0,0.03),transparent_70%)] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-5 py-1.5 rounded-full bg-primary/5 border border-primary/20 mb-10"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse mr-2" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/80 italic">Web Architecture</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
              className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-12 uppercase italic"
            >
              Growth Engines <br />
              <span className="text-primary block group-hover:scale-[1.02] transition-transform duration-700">disguised as websites.</span>
            </motion.h1>

            <div className="space-y-12 mb-16">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as any }}
                className="font-display text-xl md:text-2xl lg:text-3xl font-medium text-white/50 tracking-tight italic max-w-4xl mx-auto px-4"
              >
                Στη Hustle Labs σχεδιάζουμε ψηφιακά οικοσυστήματα που λειτουργούν ως μηχανές ανάπτυξης. <br className="hidden md:block" />
                <span className="text-white/20">Performance-First Architecture. Built to Scale.</span>
              </motion.p>
              
              <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ duration: 1, delay: 0.3 }}
                 className="flex flex-wrap justify-center gap-x-12 gap-y-2 text-primary font-black uppercase tracking-[0.5em] text-xs md:text-sm italic"
              >
                <span className="flex items-center gap-2"><Layout size={14} /> Custom UI</span>
                <span className="flex items-center gap-2"><Zap size={14} /> Next-Gen Speed</span>
                <span className="flex items-center gap-2"><TrendingUp size={14} /> Conversion Focus</span>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as any }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Magnetic strength={0.2}>
                <Button size="xl" className="w-full sm:w-auto rounded-full px-12 h-20 text-lg font-black group bg-primary text-black hover:bg-white transition-all border-none italic shadow-glow-strong" asChild>
                   <Link to="/project-brief?subject=websites">Build my website</Link>
                </Button>
              </Magnetic>
              <Magnetic strength={0.3}>
                <Button variant="outline" size="xl" className="w-full sm:w-auto rounded-full px-12 h-20 text-lg font-black border-white/10 hover:bg-white hover:text-black transition-all italic" asChild>
                   <Link to="/book-call">Book a call</Link>
                </Button>
              </Magnetic>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <motion.div 
          animate={{ y: [0, -20, 0], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-primary/10 blur-[120px] pointer-events-none"
        />
      </section>

      {/* ── SECTION 2: TRANSITION (Dark) ── */}
      <section className="py-24 md:py-48 relative border-t border-white/5 bg-[#050505] overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.div {...fadeUp()} className="max-w-5xl mx-auto">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-12 block italic">The Hustle Standard</span>
            <h2 className="font-display text-4xl md:text-7xl lg:text-9xl font-black tracking-tighter leading-[0.85] mb-12 italic uppercase text-white">
              Δεν φτιάχνουμε sites <br className="hidden md:block" /> για να υπάρχουν. <br />
              <span className="text-white/10 italic">Τα φτιάχνουμε για να αποδίδουν.</span>
            </h2>
            <p className="text-xl md:text-3xl text-white/40 font-medium italic leading-relaxed max-w-3xl mx-auto px-4">
              Κάθε επιλογή, από το UI design μέχρι την αρχιτεκτονική του κώδικα, γίνεται με έναν μόνο σκοπό: το τελικό αποτέλεσμα.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 3: NEXT-GEN ARCHITECTURE (Darkified) ── */}
      <section className="py-24 md:py-48 relative border-t border-white/5 bg-[#050505] overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary mb-10 block italic">Engine Specs</span>
            <h2 className="font-display text-4xl md:text-8xl font-black tracking-tighter leading-[0.85] italic uppercase text-white">
              Next-Gen <br /> <span className="text-white/10 italic">Architecture.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {nextGen.map((n, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className="group relative bg-white/[0.01] rounded-[3rem] p-10 lg:p-16 border border-white/5 hover:bg-white/[0.03] transition-all duration-700 hover:border-primary/20 overflow-hidden text-left shadow-2xl flex flex-col"
              >
                <div
                  className="absolute -right-20 -top-20 w-64 h-64 rounded-full opacity-0 group-hover:opacity-[0.03] blur-[100px] transition-all duration-1000 pointer-events-none"
                  style={{ background: n.color }}
                />
                <div className="relative z-10 flex-1">
                   <div className="flex items-center justify-between mb-12">
                      <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                         <n.icon size={28} className="text-primary/60 group-hover:text-primary" />
                      </div>
                      <span className="px-4 py-1.5 rounded-full border border-white/5 bg-white/[0.02] text-[10px] font-black uppercase tracking-widest text-white/30 italic group-hover:text-primary/60 transition-colors duration-500">
                        {n.badge}
                      </span>
                   </div>
                   <h3 className="font-display text-3xl md:text-5xl font-black mb-6 leading-none text-white tracking-tighter italic uppercase group-hover:text-primary transition-colors duration-500">{n.title}</h3>
                   <p className="text-white/40 text-lg md:text-xl leading-relaxed italic pr-4">{n.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: HUSTLE GROWTH ── */}
      <section className="py-24 md:py-48 relative border-t border-white/5 bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,_rgba(208,255,0,0.02),_transparent_50%)] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
           <motion.div {...fadeUp()}>
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary mb-12 block italic">Conversion Stack</span>
              <h2 className="font-display text-4xl md:text-8xl lg:text-[10rem] font-black text-white italic uppercase mb-12 leading-none tracking-tighter">
                Hustle <br className="md:hidden" /> <span className="text-white/10">Growth Engine.</span>
              </h2>
              <p className="text-xl md:text-3xl text-white/40 font-medium italic underline decoration-primary/20 decoration-4 underline-offset-8">Designed to convert. Not just impress.</p>
           </motion.div>
        </div>
      </section>

      {/* ── SECTION 5: CHOICE (Dark Comparison) ── */}
      <section className="py-24 md:py-48 relative bg-[#050505] border-y border-white/5">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="mb-24">
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary mb-10 block italic">The Difference</span>
            <h2 className="font-display text-4xl md:text-8xl font-black tracking-tighter leading-[0.85] italic uppercase text-white">
              Γιατί τα περισσότερα <br /> <span className="text-white/10 italic">δεν αποδίδουν.</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto mt-24 overflow-hidden rounded-[3rem] border border-white/5 bg-white/[0.01] shadow-3xl text-left backdrop-blur-sm">
              <div className="grid grid-cols-3 bg-white/[0.02] border-b border-white/5 p-8 md:p-12">
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 italic">Core Factor</div>
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 text-center italic">Generic Site</div>
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-primary text-center italic">Hustle Built</div>
              </div>
              {[
                { feature: "Load Speed", generic: "3-8 seconds", hustle: "< 2 seconds" },
                { feature: "PageScore", generic: "30-60 Score", hustle: "95+ Score" },
                { feature: "UI Design", generic: "Template", hustle: "100% Custom" },
                { feature: "SEO Ready", generic: "Basic", hustle: "Advanced" },
                { feature: "Sales Focus", generic: "Visual Only", hustle: "Data Driven" }
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-3 p-8 md:p-12 border-b border-white/[0.02] last:border-0 hover:bg-white/[0.02] transition-all duration-300 group/row">
                  <div className="text-base font-black text-white italic uppercase tracking-tighter group-hover/row:text-primary transition-colors">{row.feature}</div>
                  <div className="text-white/20 text-sm font-medium italic text-center group-hover/row:text-white/40 transition-colors">{row.generic}</div>
                  <div className="flex justify-center items-center gap-3 text-primary font-black text-sm italic uppercase tracking-widest leading-none">
                    <CheckCircle2 size={18} className="group-hover/row:scale-125 transition-transform duration-500" /> {row.hustle}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: EXISTING WEBSITE (AUDIT) ── */}
      <section className="py-24 md:py-48 relative bg-[#050505] border-b border-white/5 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white italic uppercase leading-[0.85] mb-12">
              Έχεις ήδη <br /> <span className="text-primary italic animate-glow">website;</span>
            </h2>
            <p className="text-xl md:text-3xl text-white/40 font-medium italic max-w-2xl mx-auto mb-24 px-4 leading-relaxed">
              Κάθε pixel πρέπει να δουλεύει για εσένα. <br />
              Μπορούμε να σου δείξουμε τι δεν λειτουργεί <br className="hidden md:block" /> και πώς διορθώνεται.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 mb-32 justify-center max-w-4xl mx-auto px-4">
              <button
                onClick={() => setHasSite(true)}
                className={`flex-1 h-40 rounded-[2.5rem] text-xl font-black italic uppercase tracking-widest transition-all border-2 flex flex-col items-center justify-center gap-4
                   ${hasSite === true ? 'bg-primary border-primary text-black shadow-glow-strong scale-105' : 'bg-white/[0.02] border-white/5 hover:border-primary/40 text-white/20'}
                 `}
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary transition-all">
                  <Wrench size={24} className={hasSite === true ? 'text-black' : 'text-primary/40'} /> 
                </div>
                <span className="text-sm font-black tracking-[0.3em]">Audit my website</span>
              </button>
              <button
                onClick={() => setHasSite(false)}
                className={`flex-1 h-40 rounded-[2.5rem] text-xl font-black italic uppercase tracking-widest transition-all border-2 flex flex-col items-center justify-center gap-4
                   ${hasSite === false ? 'bg-primary border-primary text-black shadow-glow-strong scale-105' : 'bg-white/[0.02] border-white/5 hover:border-primary/40 text-white/20'}
                 `}
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary transition-all">
                  <Rocket size={24} className={hasSite === false ? 'text-black' : 'text-primary/40'} /> 
                </div>
                <span className="text-sm font-black tracking-[0.3em]">Start fresh</span>
              </button>
            </div>

            <AnimatePresence mode="wait">
              {hasSite !== null && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  className="p-12 md:p-24 rounded-[3.5rem] bg-white/[0.01] border border-white/5 backdrop-blur-xl shadow-glow text-center max-w-4xl mx-auto"
                >
                  <p className="text-xl md:text-4xl font-black mb-16 italic text-white uppercase tracking-tighter leading-tight">
                    {hasSite
                      ? "Θα κάνουμε ένα πλήρες SEO & Performance Audit για να δούμε ακριβώς τι χρειάζεται βελτίωση."
                      : "Θα σχεδιάσουμε από το μηδέν τη δομή που θα φέρει τα βέλτιστα αποτελέσματα για το brand σου."}
                  </p>
                  <Button size="xl" className="rounded-full px-16 h-24 md:h-28 text-2xl font-black group bg-primary text-black shadow-glow-strong italic border-none" asChild>
                    <Link to={hasSite ? "/book-call" : "/project-brief?subject=websites"}>
                      {hasSite ? "Κλείστε Δωρεάν Audit" : "Ξεκινήστε το Brief"}
                      <ArrowRight className="ml-3 group-hover:translate-x-3 transition-transform" size={24} />
                    </Link>
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: PROCESS ── */}
      <section className="py-24 md:py-56 relative bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(208,255,0,0.02),_transparent_50%)] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
           <motion.div {...fadeUp()} className="text-center mb-32 md:mb-48 max-w-5xl mx-auto">
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary mb-12 block italic">The Protocol</span>
            <h2 className="font-display text-4xl md:text-7xl lg:text-9xl font-black tracking-tighter italic uppercase leading-[0.85] text-white">
              This is how <br /> <span className="text-white/10 italic">we build.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {processSteps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="p-12 md:p-14 rounded-[3.5rem] bg-white/[0.01] border border-white/5 hover:border-primary/40 transition-all duration-700 text-center group relative overflow-hidden"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-primary/30 to-transparent group-hover:h-24 transition-all duration-1000" />
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-[2rem] bg-white/5 flex items-center justify-center text-white/10 mb-10 mx-auto group-hover:bg-primary group-hover:text-black transition-all duration-500 border border-white/10 group-hover:border-transparent">
                  <step.icon size={32} strokeWidth={1} />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-black uppercase italic mb-6 tracking-tight text-white group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-[11px] md:text-[13px] text-white/30 font-black uppercase tracking-[0.4em] leading-relaxed italic">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 9: WHY US (STRONGER) ── */}
      <section className="py-24 md:py-48 relative border-t border-white/5 bg-[#050505]">
        <div className="container mx-auto px-4 lg:px-8 text-center">
           <motion.div {...fadeUp()} className="max-w-5xl mx-auto">
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary mb-12 block italic">Deep Insight</span>
              <h2 className="font-display text-4xl md:text-7xl lg:text-9xl font-black text-white italic uppercase mb-24 leading-[0.85] tracking-tighter">
                Γιατί τα <br /> <span className="text-white/10">περισσότερα αποτυγχάνουν.</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left max-w-4xl mx-auto">
                 <div className="space-y-8 p-10 rounded-[3rem] bg-white/[0.01] border border-white/5 hover:bg-white/[0.02] transition-all">
                    <h4 className="font-display text-2xl md:text-3xl font-black uppercase italic text-primary tracking-tight">Templates & Over-complication</h4>
                    <p className="text-white/40 italic leading-relaxed text-lg">Τα περισσότερα sites βασίζονται σε έτοιμα συστήματα που τα κάνουν αργά, δυσκίνητα και ίδια με των ανταγωνιστών. Το scaling γίνεται εφιάλτης.</p>
                 </div>
                 <div className="space-y-8 p-10 rounded-[3rem] bg-white/[0.01] border border-white/5 hover:bg-white/[0.02] transition-all">
                    <h4 className="font-display text-2xl md:text-3xl font-black uppercase italic text-primary tracking-tight">Lack of Growth Strategy</h4>
                    <p className="text-white/40 italic leading-relaxed text-lg">Ένα ωραίο design χωρίς στρατηγική conversion είναι απλά μια ψηφιακή αφίσα. Αν δεν υπάρχει σκοπός, δεν υπάρχει ROI.</p>
                 </div>
              </div>
           </motion.div>
        </div>
      </section>

      {/* ── SECTION 10: PRICING ── */}
      <section id="packages" className="py-24 md:py-56 relative bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="mb-32">
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary mb-10 block italic">Investment</span>
            <h2 className="font-display text-4xl md:text-8xl font-black tracking-tighter leading-[0.85] italic uppercase text-white">
              Choose your <br /> <span className="text-white/10 italic">Architecture.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
            {packages.map((pkg, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className={`group relative rounded-[4rem] p-12 lg:p-16 flex flex-col transition-all duration-700 hover:-translate-y-4 shadow-3xl border text-left
                  ${pkg.featured ? 'bg-primary/5 border-primary/40' : 'bg-white/[0.01] border-white/5'}
                `}
              >
                {pkg.featured && (
                   <span className="absolute -top-5 left-12 px-6 py-2 rounded-full bg-primary text-black text-[10px] font-black uppercase tracking-[0.4em] italic shadow-glow">High Efficiency</span>
                )}
                <div className="mb-12">
                   <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center text-white/20 mb-10 group-hover:bg-primary group-hover:text-black transition-all">
                      <pkg.icon size={32} />
                   </div>
                   <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4 block italic">{pkg.label}</span>
                   <h3 className="font-display text-4xl font-black mb-4 italic uppercase tracking-tighter text-white">{pkg.name}</h3>
                   <div className="text-5xl font-black text-white italic tracking-tighter mb-10">{pkg.price}</div>
                </div>
                <ul className="space-y-6 mb-20 flex-1">
                  {pkg.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-white/40 text-base font-medium italic group-hover:text-white/60 transition-colors">
                      <CheckCircle2 size={20} className="text-primary mt-0.5 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <Button size="xl" className={`w-full rounded-2xl h-24 text-xl font-black italic uppercase group shadow-2xl border-none ${pkg.featured ? 'bg-primary text-black hover:bg-white' : 'bg-white text-black hover:bg-primary'} transition-all`} asChild>
                   <Link to="/project-brief?subject=websites">Deploy {pkg.name.split(' ')[0]}</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 11: SPEED ── */}
      <section className="py-24 md:py-56 relative bg-[#050505] border-y border-white/5 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center max-w-7xl mx-auto">
              <motion.div {...fadeUp()}>
                 <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary mb-12 block italic">Elite Performance</span>
                 <h2 className="font-display text-5xl md:text-8xl lg:text-[10rem] font-black text-white italic uppercase mb-12 leading-[0.85] tracking-tighter">
                   Speed is <br /> <span className="text-white/10 italic">a feature.</span>
                 </h2>
                 <p className="text-xl md:text-3xl text-white font-black mb-12 italic uppercase leading-tight italic">
                    Οι χρήστες δεν περιμένουν. <br />
                    Αν το site σου αργεί, φεύγουν. <br />
                    <span className="text-white/20">Και μαζί τους φεύγουν και τα conversions.</span>
                 </p>
                 <div className="flex items-center gap-4 bg-primary/10 border border-primary/20 px-8 py-3 rounded-full inline-flex">
                    <Zap size={20} className="text-primary animate-pulse" />
                    <span className="text-xs font-black uppercase tracking-[0.4em] text-primary italic">100/100 PageSpeed Foundation</span>
                 </div>
              </motion.div>
              <div className="relative aspect-square rounded-[5rem] bg-white/[0.01] border border-white/5 flex flex-col items-center justify-center text-center p-12 overflow-hidden shadow-glow-strong group">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(208,255,0,0.05),transparent_70%)] group-hover:scale-150 transition-all duration-1000" />
                 <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-8xl md:text-[12rem] lg:text-[15rem] font-black text-white italic tracking-tighter relative"
                  >
                    99.
                    <span className="text-primary text-5xl md:text-7xl absolute top-0 -right-8 md:-right-12">9</span>
                 </motion.div>
                 <p className="text-primary font-black uppercase tracking-[0.6em] text-xs md:text-sm mt-12 italic">Verified Performance</p>
              </div>
           </div>
        </div>
      </section>

      {/* ── SECTION 12: PROJECTS ── */}
      <section className="py-24 md:py-64 relative bg-[#050505]">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
           <div className="text-center mb-32 max-w-5xl mx-auto">
             <motion.div {...fadeUp()}>
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary mb-12 block italic">Deployment Gallery</span>
              <h2 className="font-display text-4xl md:text-8xl lg:text-9xl font-black tracking-tighter italic uppercase leading-none mb-10 text-white">
                Built to <br /> <span className="text-white/10 italic">Perform.</span>
              </h2>
              <p className="text-xl md:text-3xl font-black text-white/20 italic uppercase tracking-tighter">Real businesses. Exponential results.</p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 max-w-7xl mx-auto">
            {[
              { title: "Harmony Apartments", category: "Hospitality Tech", image: "/images/harmony-apartments.jpg", slug: "harmony-apartments" },
              { title: "Sigmalabs AI", category: "Agentic AI & Commerce", image: "/images/sigmalabs.jpg", slug: "sigmalabs-ai" },
              { title: "Liv Tours & Transfers", category: "Tourism & Transfers", image: "/images/liv-tours-main.png", slug: "liv-tours-transfers" }
            ].map((cs, i) => (
              <motion.div
                key={cs.slug}
                {...fadeUp(i * 0.15)}
                className={i === 1 ? "md:pt-32" : i === 2 ? "md:pt-64" : ""}
              >
                 <Link to={`/portfolio/${cs.slug}`} className="group cursor-pointer block">
                    <div className="relative aspect-[16/11] overflow-hidden rounded-[3rem] md:rounded-[4rem] border border-white/5 mb-10 group-hover:border-primary/40 transition-all duration-1000 shadow-3xl bg-white/5">
                       <img src={cs.image} alt={cs.title} className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                    </div>
                    <h4 className="font-display text-2xl md:text-4xl font-black text-white italic uppercase mb-3 tracking-tighter group-hover:text-primary transition-colors">{cs.title}</h4>
                    <p className="text-primary text-[10px] md:text-xs font-black uppercase tracking-[0.5em] italic leading-tight">{cs.category}</p>
                 </Link>
              </motion.div>
            ))}
          </div>
          <div className="mt-48 text-center">
            <Button variant="outline" size="xl" className="rounded-full px-16 h-24 text-xl font-black border-white/10 hover:bg-white hover:text-black transition-all italic uppercase tracking-widest shadow-xl" asChild>
               <Link to="/portfolio">Explore all projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── SECTION 13: DELIVERABLES ── */}
      <section className="py-24 md:py-56 relative border-t border-white/5 bg-[#050505] overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-32">
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary mb-12 block italic">Inclusions</span>
            <h2 className="font-display text-4xl md:text-8xl font-black tracking-tighter leading-[0.85] italic uppercase text-white">
              Τι <br className="md:hidden" /> <span className="text-white/10 italic">περιλαμβάνεται.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {deliverables.map((d, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.08)}
                className="p-12 rounded-[3.5rem] bg-white/[0.01] border border-white/5 group hover:border-primary/40 hover:bg-white/[0.03] transition-all duration-700 text-left shadow-2xl"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-black transition-all duration-500">
                  <d.icon size={28} strokeWidth={1} />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-black text-white mb-6 italic uppercase tracking-tight group-hover:text-primary transition-colors">{d.title}</h3>
                <p className="text-lg text-white/30 leading-relaxed font-medium italic group-hover:text-white/50 transition-colors">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 14: FAQ (Dark) ── */}
      <section className="py-24 md:py-48 relative bg-[#050505] overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div {...fadeUp()} className="max-w-5xl mx-auto mb-20">
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary mb-12 block italic">Knowledge</span>
            <h2 className="font-display text-5xl md:text-8xl lg:text-9xl font-black text-white mb-16 italic uppercase tracking-tighter leading-[0.85]">
              Common <br className="md:hidden" /> <span className="text-white/10 italic">Questions.</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto text-left">
            <FAQAccordion items={faqs} dark />
          </div>
        </div>
      </section>

      {/* ── SECTION: CHANIA HUB & LOCAL IMPACT ── */}
      <section className="py-24 md:py-48 relative border-t border-white/5 bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(208,255,0,0.03),_transparent_50%)] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center max-w-7xl mx-auto">
              <motion.div {...fadeUp()}>
                 <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary mb-10 block italic">Regional Hub · Crete</span>
                 <h2 className="font-display text-5xl md:text-8xl font-black text-white mb-12 leading-[0.85] tracking-tighter italic uppercase">
                    Χτίζουμε το <br /> <span className="text-white/10 italic">Ψηφιακό Μέλλον.</span>
                 </h2>
                 <p className="text-xl md:text-2xl text-white/40 leading-relaxed max-w-xl italic mb-12">
                    Η Hustle Labs εδρεύει στα Χανιά και κατανοεί τις ιδιαιτερότητες της τοπικής αγοράς. Δημιουργούμε ψηφιακά εργαλεία που βοηθούν τις επιχειρήσεις της Κρήτης να ανταγωνιστούν σε παγκόσμιο επίπεδο.
                 </p>
                 <div className="space-y-6">
                    {[
                      "Tourism & Hospitality: Εξειδικευμένα Booking Engines για Villas στα Χανιά.",
                      "Real Estate: Luxury Platforms για το premium market της Κρήτης.",
                      "Local Commerce: E-shops που συνδέουν τα Χανιά με την παγκόσμια αγορά."
                    ].map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-5 group">
                        <div className="w-2 h-2 rounded-full bg-primary mt-3 shrink-0 group-hover:scale-150 transition-transform" />
                        <p className="text-lg text-white/60 font-medium italic group-hover:text-white transition-colors">{bullet}</p>
                      </div>
                    ))}
                 </div>
              </motion.div>

              <motion.div {...fadeUp(0.2)} className="relative p-12 lg:p-20 rounded-[4rem] bg-white/[0.01] border border-white/5 overflow-hidden group shadow-2xl">
                 <div className="absolute top-0 right-0 p-12">
                    <MapPin className="text-primary/10 w-48 h-48 -rotate-12 group-hover:rotate-0 transition-transform duration-[2000ms] ease-out shadow-glow" />
                 </div>
                 <div className="relative z-10">
                    <h3 className="text-3xl md:text-5xl font-black text-white italic uppercase mb-10 tracking-tighter">Τοπική <br /> Υποστήριξη</h3>
                    <p className="text-xl text-white/40 leading-relaxed mb-12 italic pr-8">
                       Είμαστε δίπλα σας, από την πρώτη συνάντηση στο γραφείο μας στα Χανιά μέχρι το Go-Live και το συνεχή optimization. Η επιτυχία σας είναι και δική μας επιτυχία.
                    </p>
                    <div className="inline-flex flex-col gap-2">
                       <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] italic mb-2">Primary Location</span>
                       <span className="text-lg font-black text-white italic uppercase tracking-widest">Γαλατάς, Χανιά, Κρήτη</span>
                    </div>
                 </div>
              </motion.div>
           </div>
        </div>
      </section>

      {/* ── SECTION 15: FINAL CTA ── */}
      <section className="py-24 md:py-64 relative bg-[#050505] overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,_rgba(208,255,0,0.1),transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div {...fadeUp()}>
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary mb-12 block italic">Ready for Launch</span>
            <h2 className="font-display text-5xl md:text-9xl font-black tracking-tighter italic uppercase leading-[0.85] mb-20 px-4 text-white">
              Έτοιμος για <br /> <span className="text-primary italic animate-glow">απογείωση;</span>
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-24 max-w-4xl mx-auto">
              <Button size="xl" className="w-full sm:w-auto rounded-full px-16 md:px-24 h-24 md:h-32 text-2xl md:text-4xl font-black group bg-primary text-black hover:bg-white transition-all border-none italic shadow-glow-strong" asChild>
                <Link to="/project-brief?subject=websites">
                  Build my website
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="rounded-full px-16 md:px-24 h-24 md:h-32 text-2xl md:text-4xl font-black border-white/10 hover:bg-white hover:text-black transition-all italic text-white" asChild>
                <Link to="/book-call">Book a call</Link>
              </Button>
            </div>
            
            <p className="text-xl md:text-2xl font-black text-white/20 italic tracking-[0.5em] uppercase">
               No pressure. Just high-performance.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Websites;
