import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowRight, Bot, Zap, Workflow, Search, 
  Settings, CheckCircle2, Play, GraduationCap, Users,
  Brain, Terminal, Cpu, Sparkles, BarChart3, MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import LabBackground from "@/components/LabBackground";
import FAQAccordion from "@/components/FAQAccordion";
import SectionHeading from "@/components/SectionHeading";
import sigma22 from "@/assets/sigma22.jpg";

const AILab = () => {
  useEffect(() => {
    // SEO: Page Title
    document.title = "AI Agency & Automations Χανιά | Hustle Labs";
    
    // SEO: Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', "Κορυφαίο AI Agency στα Χανιά. Αναπτύσσουμε AI Agents, αυτοματισμούς workflows και custom AI λύσεις για να εκτοξεύσουμε την παραγωγικότητα της επιχείρησής σας.");

    // SEO: Structured Data (JSON-LD)
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "AI & Automations Agency",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Hustle Labs",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Χανιά",
          "addressRegion": "Κρήτη"
        }
      },
      "description": "Specialized AI implementation and automation services based in Chania."
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

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    },
    viewport: { once: true }
  };

  const services = [
    {
      title: "Autonomous Agents",
      desc: "AI που εκτελεί tasks χωρίς συνεχή παρέμβαση. Από διαχείριση leads μέχρι αυτόματη εξυπηρέτηση.",
      icon: Bot
    },
    {
      title: "Workflow Automation",
      desc: "Αυτοματοποιημένες διαδικασίες για καθημερινές εργασίες που 'τρώνε' τον χρόνο της ομάδας σας.",
      icon: Workflow
    },
    {
      title: "AI Sales & Marketing Systems",
      desc: "Συστήματα που δημιουργούν, αναλύουν και βελτιστοποιούν καμπάνιες με βάση πραγματικά δεδομένα.",
      icon: BarChart3
    },
    {
      title: "Custom AI Solutions",
      desc: "Λύσεις προσαρμοσμένες ακριβώς πάνω στις ανάγκες και το tech stack της επιχείρησής σας.",
      icon: Settings
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-primary selection:text-black overflow-x-hidden">
      
      {/* ── SECTION 1: HERO (Mirroring Index.tsx) ── */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <LabBackground />
        
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(208,255,0,0.03),transparent_70%)] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <div className="max-w-6xl mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 mb-8 md:mb-12"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/80 italic">AI IMPLEMENTATION PARTNER . AGENTIC SYSTEMS</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
              className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-[0.85] mb-8 md:mb-12 uppercase italic"
            >
              AI που δουλεύει για σένα. <br />
              <span className="text-primary tracking-normal">Όχι το αντίστροφο.</span>
            </motion.h1>

            <div className="space-y-8 md:space-y-12 mb-12 md:mb-16">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as any }}
                className="font-display text-xl md:text-2xl lg:text-3xl font-medium text-white/70 tracking-tight italic max-w-4xl mx-auto"
              >
                <p>Σχεδιάζουμε και υλοποιούμε AI systems που αφαιρούν manual δουλειά,</p>
                <p>αυτοματοποιούν διαδικασίες και βοηθούν τις επιχειρήσεις να κλιμακώσουν.</p>
              </motion.div>
              
              <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ duration: 1, delay: 0.3 }}
                 className="flex flex-wrap justify-center gap-x-6 md:gap-x-8 gap-y-2 text-primary font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-xs md:text-sm lg:text-base italic"
              >
                <span>Less work.</span>
                <span>More output.</span>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as any }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button size="xl" className="w-full sm:w-auto rounded-full px-8 md:px-12 h-16 md:h-20 text-lg md:text-xl font-black group bg-primary text-black hover:bg-white transition-all border-none italic shadow-glow" asChild>
                <Link to="/contact">
                  Build your AI system
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="w-full sm:w-auto rounded-full px-8 md:px-12 h-16 md:h-20 text-lg md:text-xl font-black border-white/10 hover:bg-white hover:text-black transition-all italic" asChild>
                <Link to="/book-call">Book a call</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: PROBLEM (Mirroring Index.tsx Intro Style) ── */}
      <section className="py-32 md:py-48 relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div initial={fadeInUp.initial} whileInView={fadeInUp.whileInView} viewport={fadeInUp.viewport} transition={fadeInUp.transition} className="max-w-4xl mx-auto text-center">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-8 md:mb-12 block italic">The Hustle AI Audit</span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.9] mb-12 md:mb-16 uppercase italic px-2">
              Το πρόβλημα <br />
              δεν είναι το AI. <br />
              <span className="text-white/40">Είναι ότι δεν το χρησιμοποιείς σωστά.</span>
            </h2>
            <div className="space-y-8 md:space-y-12 max-w-3xl mx-auto px-4">
              <p className="text-xl md:text-3xl lg:text-4xl font-medium text-white/80 leading-tight italic tracking-tight">
                Οι περισσότερες επιχειρήσεις δοκιμάζουν AI εργαλεία χωρίς στρατηγική. <br className="hidden md:block" />
                Το αποτέλεσμα; Χάσιμο χρόνου, καμία αυτοματοποίηση.
              </p>
              <p className="text-primary font-black uppercase tracking-[0.4em] text-lg md:text-2xl italic animate-float">We fix that.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 3: WHAT WE BUILD (Dark Cards Grid like Index.tsx Protocol) ── */}
      <section className="py-32 md:py-48 relative border-t border-white/5 bg-[#080808]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={fadeInUp.initial} whileInView={fadeInUp.whileInView} viewport={fadeInUp.viewport} transition={fadeInUp.transition} className="text-center mb-24 md:mb-40 max-w-5xl mx-auto">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-8 md:mb-12 block italic">AI CAPABILITIES</span>
            <h2 className="font-display text-4xl md:text-7xl lg:text-9xl font-black tracking-tighter italic uppercase leading-[0.85]">
              Τι χτίζουμε <br />
              <span className="text-white/20 text-3xl md:text-5xl lg:text-6xl">με τεχνητή νοημοσύνη.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12 max-w-7xl mx-auto px-4">
            {services.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="p-8 md:p-12 lg:p-8 xl:p-12 rounded-[2.5rem] md:rounded-[3.5rem] glass-card text-center group relative overflow-hidden"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-10 md:h-12 bg-gradient-to-b from-primary/40 to-transparent group-hover:h-20 md:group-hover:h-24 transition-all duration-1000" />
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-[1.5rem] md:rounded-[2rem] bg-white/5 flex items-center justify-center text-white/10 mb-8 md:mb-10 mx-auto group-hover:bg-primary group-hover:text-black transition-all border border-white/10 group-hover:border-transparent group-hover:shadow-[0_0_30px_rgba(208,255,0,0.2)]">
                  <item.icon size={28} className="md:size-9" strokeWidth={1} />
                </div>
                <h3 className="font-display text-lg sm:text-xl xl:text-2xl font-black uppercase italic mb-6 md:mb-8 tracking-tighter leading-tight italic">{item.title}</h3>
                <p className="text-[10px] md:text-[12px] text-white/30 font-black uppercase tracking-[0.4em] leading-relaxed italic px-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: RESULTS (Filter Statement Style like Index.tsx Section 4) ── */}
      <section className="py-32 md:py-48 relative border-t border-white/5 bg-[#050505]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16 md:mb-24">
            <motion.div initial={fadeInUp.initial} whileInView={fadeInUp.whileInView} viewport={fadeInUp.viewport} transition={fadeInUp.transition} className="max-w-4xl mx-auto lg:mx-0">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-8 block italic">Operational Freedom</span>
              <h2 className="font-display text-3xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] mb-12 italic uppercase text-left">
                Τι αλλάζει όταν <br />
                <span className="text-white/20 text-2xl md:text-4xl lg:text-5xl tracking-normal">δουλεύει σωστά.</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12 md:mt-16">
                 {[
                  "Λιγότερος χρόνος σε repetitive tasks",
                  "Αυξημένη παραγωγικότητα",
                  "Καλύτερη απόδοση marketing",
                  "Scalability χωρίς περισσότερα άτομα"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 p-10 rounded-[2.5rem] glass-card group">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shrink-0">
                      <CheckCircle2 size={24} />
                    </div>
                    <span className="text-xl md:text-2xl font-black uppercase italic text-white/60 tracking-tight group-hover:text-primary transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: PROCESS (Vertical Line Design like Index.tsx Process) ── */}
      <section className="py-32 md:py-48 relative border-t border-white/5 bg-[#080808]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={fadeInUp.initial} whileInView={fadeInUp.whileInView} viewport={fadeInUp.viewport} transition={fadeInUp.transition} className="text-center mb-24 md:mb-40 max-w-5xl mx-auto">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-8 md:mb-12 block italic">The AI Implementation Protocol</span>
            <h2 className="font-display text-4xl md:text-7xl lg:text-9xl font-black tracking-tighter italic uppercase leading-[0.85]">Πώς το <br/> υλοποιούμε.</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12 max-w-7xl mx-auto px-4 text-center">
            {[
              { icon: Search, title: "Analysis", num: "01" },
              { icon: Brain, title: "Strategy", num: "02" },
              { icon: Terminal, title: "Build", num: "03" },
              { icon: Zap, title: "Optimization", num: "04" }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="relative flex flex-col items-center group"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-10 md:h-12 bg-gradient-to-b from-primary/40 to-transparent group-hover:h-20 transition-all duration-1000" />
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-[1.5rem] bg-white/5 flex items-center justify-center text-white/10 mb-8 md:mb-12 mx-auto group-hover:bg-primary group-hover:text-black transition-all border border-white/10 group-hover:border-transparent group-hover:shadow-[0_0_30px_rgba(208,255,0,0.2)] relative">
                  <step.icon size={28} className="md:size-9" strokeWidth={1} />
                  <span className="absolute -top-3 -right-3 text-[8px] font-black text-primary uppercase tracking-widest">{step.num}</span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-black uppercase italic mb-4 tracking-tight">{step.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: CASE STUDY (Mirroring Index.tsx Project Card style) ── */}
      <section className="py-32 md:py-48 relative border-t border-white/5 bg-[#050505]">
        <div className="container mx-auto px-4 lg:px-8">
           <div className="max-w-6xl mx-auto">
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-8 block italic text-center">Featured Intelligence</span>
             <h2 className="font-display text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter italic uppercase leading-[0.85] text-center mb-16 md:mb-24">Real <br /> <span className="text-white/20">Results.</span></h2>
             
             <motion.div initial={fadeInUp.initial} whileInView={fadeInUp.whileInView} viewport={fadeInUp.viewport} transition={fadeInUp.transition}>
                <Link to="/portfolio/sigmalabs-ai" className="group cursor-pointer block">
                  <div className="relative aspect-[16/8] overflow-hidden rounded-[2.5rem] md:rounded-[4rem] border border-white/5 mb-8 md:mb-10 group-hover:border-primary/30 transition-all duration-1000 shadow-2xl">
                    <img src={sigma22} alt="Sigmalabs AI" className="w-full h-full object-cover object-top opacity-100 group-hover:scale-105 transition-all duration-[2s]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
                    <div className="absolute top-6 left-6 md:top-10 md:left-10">
                      <span className="px-5 py-2 md:px-8 md:py-2.5 rounded-full bg-primary text-black text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] italic shadow-glow-strong animate-float">Hustle AI Built</span>
                    </div>
                  </div>
                  <div className="px-4 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                    <div>
                      <h3 className="font-display text-3xl md:text-5xl font-black text-white italic uppercase mb-2 md:mb-3 tracking-tighter leading-none">Sigmalabs AI</h3>
                      <p className="text-primary text-[10px] font-black uppercase tracking-[0.4em] italic">The first Vibe Commerce tool. Efficiency Overload.</p>
                    </div>
                    <div className="flex gap-8 border-l border-white/10 pl-8">
                      <div>
                        <p className="text-2xl font-black text-white">+120%</p>
                        <p className="text-[8px] font-black text-white/30 uppercase tracking-widest italic">efficiency</p>
                      </div>
                      <div>
                        <p className="text-2xl font-black text-white">-60%</p>
                        <p className="text-[8px] font-black text-white/30 uppercase tracking-widest italic">manual work</p>
                      </div>
                    </div>
                  </div>
                </Link>
             </motion.div>
           </div>
        </div>
      </section>

      {/* ── SECTION: AI & LOCAL INNOVATION ── */}
      <section className="py-24 md:py-32 relative border-t border-white/5 bg-[#0a0a0b]">
        <div className="container mx-auto px-4 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div {...fadeInUp}>
                 <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/60 mb-8 block font-mono">Innovation · Chania Hub</span>
                 <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-10 leading-tight italic uppercase">
                    Το Μέλλον των Χανίων <br /> είναι <span className="text-primary italic animate-pulse">Intelligent.</span>
                 </h2>
                 <p className="text-lg text-white/40 leading-relaxed max-w-xl italic mb-8">
                    Στο AI Lab μας στα Χανιά, αναπτύσσουμε λύσεις που πριν λίγα χρόνια φάνταζαν επιστημονική φαντασία. Βοηθάμε τις τοπικές επιχειρήσεις να υιοθετήσουν το AI όχι ως trend, αλλά ως ένα πανίσχυρο εργαλείο κερδοφορίας.
                 </p>
                 <div className="space-y-6">
                    {[
                      { t: "Tourism AI", d: "Αυτόματη οργάνωση κρατήσεων και εξυπηρέτηση πελατών 24/7." },
                      { t: "Business Logic", d: "Αυτοματοποίηση εσωτερικών διαδικασιών για μείωση κόστους." }
                    ].map((item, idx) => (
                      <div key={idx} className="group p-6 rounded-[2rem] bg-white/5 border border-white/5 hover:border-primary/20 transition-all">
                        <h4 className="text-sm font-bold text-white mb-2 uppercase tracking-widest group-hover:text-primary transition-colors">{item.t}</h4>
                        <p className="text-xs text-white/30 italic">{item.d}</p>
                      </div>
                    ))}
                 </div>
              </motion.div>

              <motion.div {...fadeInUp} className="relative p-12 rounded-[3.5rem] glass-card overflow-hidden group border-primary/10">
                 <div className="absolute -bottom-10 -right-10 opacity-10">
                    <Brain className="text-primary w-48 h-48 group-hover:scale-110 transition-transform duration-1000" />
                 </div>
                 <div className="relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary mb-8 shadow-glow">
                       <MapPin size={24} />
                    </div>
                    <h3 className="text-2xl font-black text-white italic uppercase mb-6">Στρατηγική Συνεργασία</h3>
                    <p className="text-white/40 leading-relaxed mb-8 italic">
                       Δεν είμαστε απλώς ένας προμηθευτής λογισμικού. Είμαστε ο συνεργάτης σας στα Χανιά που θα σας καθοδηγήσει στον περίπλοκο κόσμο του AI, διασφαλίζοντας ότι η επένδυσή σας θα φέρει πραγματικά αποτελέσματα.
                    </p>
                    <div className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Based in Chania · Serving the World</div>
                 </div>
              </motion.div>
           </div>
        </div>
      </section>

      {/* ── SECTION 7: WORKSHOPS (Mirroring Index.tsx Split Grid) ── */}
      <section className="py-0 relative border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Academy Bridge */}
          <div className="p-8 md:p-16 lg:p-24 xl:px-40 xl:py-48 border-b lg:border-b-0 lg:border-r border-white/5 hover:bg-white/[0.015] transition-colors group">
            <motion.div initial={fadeInUp.initial} whileInView={fadeInUp.whileInView} viewport={fadeInUp.viewport} transition={fadeInUp.transition}>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 mb-12 block group-hover:text-primary transition-colors italic">EDUCATION</span>
              <h3 className="font-display text-4xl md:text-7xl font-black tracking-tighter mb-8 italic uppercase leading-none">Θες να μάθεις <br/> <span className="text-primary italic animate-pulse">AI;</span></h3>
              <p className="text-lg md:text-xl text-white/40 mb-12 leading-relaxed italic pr-4">
                Μπορείς να ξεκινήσεις από τα workshops μας και να δεις πώς λειτουργεί στην πράξη. Το μέλλον δεν χτίζεται μόνο με κώδικα, αλλά και με σωστή εκπαίδευση.
              </p>
              <Button size="xl" className="w-full sm:w-auto rounded-full px-12 h-20 bg-white text-black hover:bg-primary transition-all font-black text-xs uppercase tracking-widest italic" asChild>
                <Link to="/academy">View Workshops</Link>
              </Button>
            </motion.div>
          </div>

          {/* FAQ (Light mode transition mirroring Index.tsx or just consistent) */}
          <div className="p-8 md:p-16 lg:p-24 xl:px-40 xl:py-48 bg-white text-black transition-colors group">
            <motion.div initial={fadeInUp.initial} whileInView={fadeInUp.whileInView} viewport={fadeInUp.viewport} transition={fadeInUp.transition}>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400 mb-12 block italic">PROTOCOLS FAQ</span>
              <h3 className="font-display text-4xl md:text-7xl font-black tracking-tighter mb-12 italic uppercase leading-none">Συχνές <br/> <span className="text-black/40">Ερωτήσεις.</span></h3>
              <div className="max-w-xl">
                 <FAQAccordion 
                    items={[
                      { question: "Χρειάζεται να έχω τεχνικές γνώσεις;", answer: "Καθόλου. Εμείς αναλαμβάνουμε όλο το τεχνικό κομμάτι, την υλοποίηση και το setup. Εσείς απλώς χρησιμοποιείτε το σύστημα." },
                      { question: "Πόσο χρόνο παίρνει η υλοποίηση;", answer: "Ανάλογα με την πολυπλοκότητα, ένα τυπικό AI automation project μπορεί να είναι live σε 2-4 εβδομάδες." },
                      { question: "Είναι το AI κατάλληλο για τη δική μου επιχείρηση;", answer: "Αν έχετε επαναλαμβανόμενες διαδικασίες, manual data entry ή χρειάζεστε καλύτερη ανάλυση δεδομένων, τότε η απάντηση είναι σχεδόν σίγουρα ναι." }
                    ]} 
                    dark={false} 
                  />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: FINAL CTA (Index.tsx Style) ── */}
      <section className="py-32 md:py-48 lg:py-64 relative bg-[#050505] border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(208,255,0,0.06),transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div initial={fadeInUp.initial} whileInView={fadeInUp.whileInView} viewport={fadeInUp.viewport} transition={fadeInUp.transition}>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-12 block italic tracking-[0.6em]">ACTIVATE THE LAB</span>
            <h2 className="font-display text-4xl md:text-7xl lg:text-9xl font-black tracking-tighter italic uppercase leading-[0.85] mb-8">
              Θέλεις το AI <br />
              να δουλεύει <br />
              <span className="text-white/20">για σένα;</span>
            </h2>
            <p className="text-primary font-black uppercase tracking-[0.4em] text-lg md:text-2xl mb-16 md:mb-24 italic">Good. Let’s build it right.</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 mb-24">
              <Button size="xl" className="w-full sm:w-auto rounded-full px-12 md:px-20 h-24 md:h-28 text-xl md:text-3xl font-black group bg-primary text-black hover:bg-white transition-all border-none italic shadow-glow-strong" asChild>
                <Link to="/contact">Build your system</Link>
              </Button>
              <Button variant="outline" size="xl" className="w-full sm:w-auto rounded-full px-12 md:px-20 h-24 md:h-28 text-xl md:text-3xl font-black border-white/10 hover:bg-white hover:text-black transition-all italic" asChild>
                <Link to="/book-call">Book a call</Link>
              </Button>
            </div>
            
            <p className="text-lg md:text-2xl font-display font-medium text-white/20 italic tracking-tight uppercase tracking-[0.4em] font-black">
              TRANSFORM YOUR OPERATION TODAY.
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default AILab;
