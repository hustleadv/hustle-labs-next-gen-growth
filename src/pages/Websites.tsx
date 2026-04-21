import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code, Globe, Monitor, ArrowRight, Palette, Zap, TrendingUp, Rocket,
  Paintbrush, Smartphone, Search, BarChart3, PenTool, CheckSquare,
  Layers, Target, Wrench, HelpCircle, CheckCircle2, ShieldCheck,
  Cpu, Layout, Sparkles, MousePointer2, ExternalLink, Server, Database,
  Terminal, Component, Box, Cpu as CpuIcon, Container
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion from "@/components/FAQAccordion";
import PageHero from "@/components/PageHero";
import CaseStudyCard from "@/components/CaseStudyCard";

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

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-primary selection:text-black overflow-x-hidden">

      {/* ── SECTION 1: HERO ── */}
      <PageHero
        label="Hustle Websites"
        size="large"
        floatingIcons={[Palette, Code, Zap, Smartphone, Globe, Layers, Rocket, Target, Monitor]}
        title="Μηχανές ανάπτυξης μεταμφιεσμένες σε"
        highlight="websites."
        description="Στη Hustle Labs σχεδιάζουμε ψηφιακά οικοσυστήματα που λειτουργούν ως μηχανές ανάπτυξης. Performance-First Architecture. Built to Scale."
      >
        <div className="max-w-4xl mx-auto text-center mt-12">
          <div className="space-y-10 md:space-y-12 mb-12 md:mb-16">
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1, delay: 0.3 }}
               className="flex flex-wrap justify-center gap-x-6 md:gap-x-8 gap-y-2 text-primary font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-xs md:text-sm lg:text-base italic"
            >
              <span>We build.</span>
              <span>We optimize.</span>
              <span>We scale.</span>
            </motion.div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <Button size="xl" className="w-full sm:w-auto rounded-full px-12 h-20 text-xl font-black group bg-primary text-black hover:bg-white transition-all border-none italic shadow-glow" asChild>
              <Link to="/project-brief?subject=websites" className="flex items-center gap-3">
                Build my website <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
              </Link>
            </Button>
            <Button variant="outline" size="xl" className="w-full sm:w-auto rounded-full px-12 h-20 text-xl font-black border-white/10 hover:bg-white hover:text-black transition-all italic" asChild>
              <Link to="/book-call-call">Book a call</Link>
            </Button>
          </div>

          <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-white/20 italic">
             For businesses that want results . not just presence.
          </p>
        </div>
      </PageHero>

      {/* ── SECTION 2: TRANSITION (Dark) ── */}
      <section className="py-24 md:py-48 relative border-t border-white/5 bg-[#050505] overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.div {...fadeUp()} className="max-w-4xl mx-auto">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-10 block italic">The Hustle Standard</span>
            <h2 className="font-display text-4xl md:text-7xl lg:text-8xl font-normal tracking-normal leading-[1.1] mb-12 italic uppercase">
              Δεν φτιάχνουμε sites <br className="hidden md:block" /> για να υπάρχουν. <br />
              <span className="text-white/20">Τα φτιάχνουμε για να αποδίδουν.</span>
            </h2>
            <p className="text-xl md:text-3xl font-medium text-white/50 leading-tight italic tracking-tight max-w-2xl mx-auto">
              Κάθε επιλογή, από design μέχρι τεχνολογία, γίνεται με στόχο το αποτέλεσμα.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 3: NEXT-GEN ARCHITECTURE (Darkified) ── */}
      <section className="py-24 md:py-48 relative border-t border-white/5 bg-[#080808] overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <SectionHeading
            label="Architecture"
            title="Next-Gen Architecture"
            highlight="Architecture"
            description="Όχι templates. Όχι plugins που σπάνε. Χτίζουμε από την αρχή. Για ταχύτητα, έλεγχο και δυνατότητα εξέλιξης."
          />
          <p className="text-primary/40 font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mt-8 italic">
             Performance is the foundation. Not an extra feature.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24 max-w-6xl mx-auto">
            {nextGen.map((n, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className="group relative bg-white/[0.02] rounded-[3.5rem] p-12 lg:p-16 border border-white/5 transition-all duration-700 hover:-translate-y-4 hover:border-primary/20 overflow-hidden text-left shadow-2xl"
              >
                <div
                  className="absolute -right-20 -top-20 w-64 h-64 rounded-full opacity-0 group-hover:opacity-[0.05] blur-[80px] transition-all duration-700 scale-50 group-hover:scale-150 pointer-events-none"
                  style={{ background: n.color }}
                />
                <div className="relative z-10">
                   <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-black transition-all">
                      <n.icon size={28} strokeWidth={1} />
                   </div>
                   <h3 className="font-display text-3xl md:text-4xl font-black mb-6 leading-tight text-white tracking-tight italic uppercase">{n.title}</h3>
                   <p className="text-white/40 text-lg md:text-xl leading-relaxed font-medium italic group-hover:text-white/60 transition-colors">{n.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: HUSTLE GROWTH ── */}
      <section className="py-24 md:py-48 relative border-t border-white/5 bg-[#050505]">
        <div className="container mx-auto px-4 lg:px-8 text-center text-center">
           <motion.div {...fadeUp()}>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-8 block italic">Conversion</span>
              <h2 className="font-display text-4xl md:text-7xl lg:text-9xl font-black text-white italic uppercase mb-8 leading-none">Hustle Growth Engine</h2>
              <p className="text-primary font-black uppercase tracking-[0.3em] text-sm md:text-base italic mb-12 animate-pulse">Designed to convert. Not just impress.</p>
           </motion.div>
        </div>
      </section>

      {/* ── SECTION 5: CHOICE (Dark Comparison) ── */}
      <section className="py-24 md:py-48 relative bg-[#080808] border-y border-white/5">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <SectionHeading
            label="The Comparison"
            title="Γιατί τα περισσότερα websites δεν αποδίδουν"
            highlight="δεν αποδίδουν"
            description="Τα περισσότερα sites είναι φτιαγμένα για να υπάρχουν. Όχι για να αποδίδουν."
          />
          <div className="max-w-4xl mx-auto mt-24 overflow-hidden rounded-[3.5rem] border border-white/5 bg-[#050505] shadow-3xl text-left">
              <div className="grid grid-cols-3 bg-white/[0.02] border-b border-white/5 p-10 md:p-12">
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 italic">Core Factor</div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 text-center italic">Generic Site</div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-primary text-center italic">Hustle Built</div>
              </div>
              {[
                { feature: "Load Speed", generic: "3-8 seconds", hustle: "< 2 seconds" },
                { feature: "PageScore", generic: "30-60 Score", hustle: "95+ Score" },
                { feature: "UI Design", generic: "Template", hustle: "100% Custom" },
                { feature: "SEO Ready", generic: "Basic", hustle: "Advanced" },
                { feature: "Sales Focus", generic: "Visual Only", hustle: "Data Driven" }
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-3 p-10 md:p-12 border-b border-white/[0.02] last:border-0 hover:bg-white/[0.01] transition-colors">
                  <div className="text-base font-black text-white italic uppercase tracking-tighter">{row.feature}</div>
                  <div className="text-white/20 text-sm font-medium italic text-center">{row.generic}</div>
                  <div className="flex justify-center items-center gap-3 text-primary font-black text-sm italic uppercase tracking-widest leading-none">
                    <CheckCircle2 size={18} /> {row.hustle}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: EXISTING WEBSITE (AUDIT) ── */}
      <section className="py-24 md:py-48 relative bg-[#050505] border-b border-white/5 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-5xl md:text-8xl font-normal tracking-normal text-white italic uppercase leading-[1.1]">
              Έχεις ήδη <br /> <span className="text-primary italic">website;</span>
            </h2>
            <p className="text-white text-xl md:text-3xl font-black mb-6 italic uppercase tracking-tight">Κάθε pixel πρέπει να δουλεύει για εσένα.</p>
            <p className="text-white/40 text-lg md:text-xl mb-20 font-medium italic">
              Μπορούμε να σου δείξουμε τι δεν λειτουργεί <br className="hidden md:block" /> και πώς διορθώνεται.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 mb-24 justify-center px-4">
              <button
                onClick={() => setHasSite(true)}
                className={`flex-1 h-32 rounded-[3rem] text-xl font-black italic uppercase tracking-widest transition-all border-2 flex flex-col items-center justify-center gap-3
                   ${hasSite === true ? 'bg-primary border-primary text-black shadow-glow-strong scale-105' : 'bg-white/5 border-white/10 hover:border-primary/40 text-white/30'}
                 `}
              >
                <Wrench size={24} /> 
                <span className="text-sm">Audit my website</span>
              </button>
              <button
                onClick={() => setHasSite(false)}
                className={`flex-1 h-32 rounded-[3rem] text-xl font-black italic uppercase tracking-widest transition-all border-2 flex flex-col items-center justify-center gap-3
                   ${hasSite === false ? 'bg-primary border-primary text-black shadow-glow-strong scale-105' : 'bg-white/5 border-white/10 hover:border-primary/40 text-white/30'}
                 `}
              >
                <Rocket size={24} /> 
                <span className="text-sm">Start fresh</span>
              </button>
            </div>

            <AnimatePresence mode="wait">
              {hasSite !== null && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="p-12 md:p-20 rounded-[4rem] bg-white/[0.02] border border-white/10 backdrop-blur-xl shadow-3xl text-center"
                >
                  <p className="text-xl md:text-4xl font-black mb-16 italic text-white uppercase tracking-tighter leading-tight">
                    {hasSite
                      ? "Θα κάνουμε ένα πλήρες SEO & Performance Audit για να δούμε ακριβώς τι χρειάζεται βελτίωση."
                      : "Θα σχεδιάσουμε από το μηδέν τη δομή που θα φέρει τα βέλτιστα αποτελέσματα για το brand σου."}
                  </p>
                  <Button variant="hero" size="xl" className="rounded-full px-16 h-24 text-2xl font-black group bg-primary text-black shadow-glow-strong" asChild>
                    <Link to={hasSite ? "/book-call" : "/project-brief?subject=websites"}>
                      {hasSite ? "Κλείστε Δωρεάν Audit" : "Ξεκινήστε το Brief"}
                      <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: PROCESS ── */}
      <section className="py-24 md:py-56 relative bg-[#050505]">
        <div className="container mx-auto px-4 lg:px-8">
           <motion.div {...fadeUp()} className="text-center mb-32 md:mb-48 max-w-5xl mx-auto">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-12 block italic">The Protocol</span>
            <h2 className="font-display text-4xl md:text-7xl lg:text-9xl font-normal tracking-normal italic uppercase leading-[1.1]">This is how we <br /> build websites <br/> that actually work.</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {processSteps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="p-12 md:p-14 rounded-[3.5rem] bg-white/[0.02] border border-white/5 hover:border-primary/30 transition-all text-center group relative overflow-hidden"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-primary/30 to-transparent group-hover:h-24 transition-all duration-1000" />
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-[2rem] bg-white/5 flex items-center justify-center text-white/10 mb-10 mx-auto group-hover:bg-primary group-hover:text-black transition-all border border-white/10 group-hover:border-transparent">
                  <step.icon size={32} strokeWidth={1} />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-black uppercase italic mb-6 tracking-tight italic">{step.title}</h3>
                <p className="text-[11px] md:text-[13px] text-white/30 font-black uppercase tracking-[0.4em] leading-relaxed italic">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 8: THE TEAM (Minimal) ── */}
      <section className="py-24 md:py-32 relative border-t border-white/5 bg-[#080808]">
        <div className="container mx-auto px-4 lg:px-8 text-center text-center">
           <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-12 block italic text-white/10 uppercase">Team behind the work</span>
           <h3 className="text-white/20 font-black italic uppercase tracking-tighter text-2xl md:text-4xl">Strategy. Design. Tech. Growth.</h3>
        </div>
      </section>

      {/* ── SECTION 9: WHY US (STRONGER) ── */}
      <section className="py-24 md:py-48 relative border-t border-white/5 bg-[#050505]">
        <div className="container mx-auto px-4 lg:px-8 text-center">
           <motion.div {...fadeUp()} className="max-w-5xl mx-auto">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-12 block italic">Insight</span>
              <h2 className="font-display text-4xl md:text-7xl lg:text-8xl font-black text-white italic uppercase mb-20 leading-[0.9]">Γιατί τα περισσότερα <br /> websites αποτυγχάνουν</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left max-w-4xl mx-auto">
                 <div className="space-y-6">
                    <h4 className="font-display text-2xl font-black uppercase italic text-primary underline decoration-primary/20 decoration-4 underline-offset-8">Templates & Over-complication</h4>
                    <p className="text-white/40 italic leading-relaxed">Τα περισσότερα sites βασίζονται σε έτοιμα συστήματα που τα κάνουν αργά, δυσκίνητα και ίδια με των ανταγωνιστών.</p>
                 </div>
                 <div className="space-y-6">
                    <h4 className="font-display text-2xl font-black uppercase italic text-primary underline decoration-primary/20 decoration-4 underline-offset-8">Lack of Strategy</h4>
                    <p className="text-white/40 italic leading-relaxed">Ένα ωραίο design χωρίς στρατηγική conversion είναι απλά μια ψηφιακή αφίσα. Αν δεν υπάρχει σκοπός, δεν υπάρχει αποτέλεσμα.</p>
                 </div>
              </div>
           </motion.div>
        </div>
      </section>

      {/* ── SECTION 10: PRICING ── */}
      <section id="packages" className="py-24 md:py-56 relative bg-[#080808] border-t border-white/5">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <SectionHeading
            label="Investment"
            title="Choose your setup"
            highlight="setup"
            description="Not all websites are built the same."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-32 max-w-7xl mx-auto">
            {packages.map((pkg, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className={`group relative rounded-[4rem] p-12 lg:p-16 flex flex-col transition-all duration-500 hover:-translate-y-4 shadow-3xl border text-left
                  ${pkg.featured ? 'bg-primary/5 border-primary/40' : 'bg-white/[0.02] border-white/5'}
                `}
              >
                {pkg.featured && (
                   <span className="absolute -top-5 left-12 px-6 py-2 rounded-full bg-primary text-black text-[10px] font-black uppercase tracking-[0.4em] italic shadow-glow">Growth Engine</span>
                )}
                <div className="mb-12">
                   <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-white/20 mb-10 group-hover:text-primary transition-colors">
                      <pkg.icon size={32} />
                   </div>
                   <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4 block italic">{pkg.label}</span>
                   <h3 className="font-display text-4xl font-black mb-4 italic uppercase tracking-tighter">{pkg.name}</h3>
                   <div className="text-5xl font-black text-white italic tracking-tighter mb-10">{pkg.price}</div>
                </div>
                <ul className="space-y-6 mb-16 flex-1">
                  {pkg.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-white/40 text-sm font-medium italic">
                      <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <Button variant={pkg.featured ? "hero" : "outline"} size="xl" className="w-full rounded-2xl h-20 text-xl font-black italic uppercase group" asChild>
                   <Link to="/project-brief?subject=websites">Choose {pkg.name.split(' ')[0]}</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 11: SPEED ── */}
      <section className="py-24 md:py-56 relative bg-[#050505] border-y border-white/5 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <motion.div {...fadeUp()}>
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-12 block italic">Elite Performance</span>
                 <h2 className="font-display text-5xl md:text-8xl font-black text-white italic uppercase mb-12 leading-[0.9]">Speed is <br /> a feature</h2>
                 <p className="text-xl md:text-3xl text-white font-black mb-10 italic uppercase leading-tight italic">
                    Οι χρήστες δεν περιμένουν. <br />
                    Αν το site σου αργεί, φεύγουν. <br />
                    <span className="text-white/20">Και μαζί τους φεύγουν και τα conversions.</span>
                 </p>
                 <div className="flex items-center gap-4 bg-primary/10 border border-primary/20 px-6 py-2 rounded-full inline-flex">
                    <Zap size={16} className="text-primary animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary italic">100/100 PageSpeed Foundation</span>
                 </div>
              </motion.div>
              <div className="relative aspect-square rounded-[4rem] bg-white/[0.01] border border-white/10 flex flex-col items-center justify-center text-center p-12 overflow-hidden shadow-glow-strong">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(208,255,0,0.05),transparent_70%)]" />
                 <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-8xl md:text-[10rem] font-black text-white italic tracking-tighter relative"
                  >
                    99+
                 </motion.div>
                 <p className="text-primary font-black uppercase tracking-[0.5em] text-[10px] md:text-xs mt-8 italic">Verified Performance</p>
              </div>
           </div>
        </div>
      </section>

      {/* ── SECTION 12: PROJECTS ── */}
      <section className="py-24 md:py-56 relative bg-[#080808]">
        <div className="container mx-auto px-4 lg:px-8">
           <div className="text-center mb-32 max-w-4xl mx-auto">
             <motion.div {...fadeUp()}>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-10 block italic">Portfolio</span>
              <h2 className="font-display text-4xl md:text-8xl font-black tracking-tighter italic uppercase leading-none mb-10 px-4">Built to perform</h2>
              <p className="text-xl md:text-3xl font-black text-white/20 italic uppercase tracking-tighter">Real businesses. Real results.</p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {[
              { title: "Harmony Apartments", category: "Hospitality Tech", image: "/images/harmony-apartments.jpg", slug: "harmony-apartments" },
              { title: "Sigmalabs AI", category: "Agentic AI & Commerce", image: "/images/sigmalabs.jpg", slug: "sigmalabs-ai" },
              { title: "Liv Tours & Transfers", category: "Tourism & Transfers", image: "/images/liv-tours-main.png", slug: "liv-tours-transfers" }
            ].map((cs, i) => (
              <motion.div
                key={cs.slug}
                {...fadeUp(i * 0.15)}
                className={i === 1 ? "md:pt-24" : i === 2 ? "md:pt-48" : ""}
              >
                 <div className="group cursor-pointer">
                    <div className="relative aspect-[16/11] overflow-hidden rounded-[4rem] border border-white/5 mb-10 group-hover:border-primary/20 transition-all duration-1000 shadow-3xl">
                       <img src={cs.image} alt={cs.title} className="w-full h-full object-cover grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
                    </div>
                    <h4 className="font-display text-2xl md:text-4xl font-black text-white italic uppercase mb-2 tracking-tighter">{cs.title}</h4>
                    <p className="text-primary text-[10px] font-black uppercase tracking-[0.4em] italic leading-tight">{cs.category}</p>
                 </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-32 text-center">
            <Button variant="outline" size="xl" className="rounded-full px-16 h-20 text-lg font-black border-white/10 hover:bg-white hover:text-black transition-all italic uppercase" asChild>
               <Link to="/portfolio">See all projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── SECTION 13: DELIVERABLES (Darkify) ── */}
      <section className="py-24 md:py-48 relative border-t border-white/5 bg-[#050505] overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <SectionHeading
            label="Inclusions"
            title="Τι περιλαμβάνεται"
            highlight="περιλαμβάνεται"
            description="Όλα όσα χρειάζεσαι για ένα σωστό launch, όχι απλά για να «ανέβεις online»."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24 max-w-6xl mx-auto">
            {deliverables.map((d, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.08)}
                className="p-12 rounded-[3.5rem] bg-white/[0.02] border border-white/5 group hover:border-primary/30 hover:shadow-3xl hover:shadow-primary/10 transition-all duration-700 text-left"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-black transition-all">
                  <d.icon size={28} strokeWidth={1} />
                </div>
                <h3 className="font-display text-2xl font-black text-white mb-4 italic uppercase tracking-tight">{d.title}</h3>
                <p className="text-lg text-white/30 leading-relaxed font-medium italic group-hover:text-white/50 transition-colors">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 14: FAQ (Dark) ── */}
      <section className="py-24 md:py-48 relative bg-[#080808] overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div {...fadeUp()} className="max-w-5xl mx-auto mb-20">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-12 block italic">Knowledge</span>
            <h2 className="font-display text-5xl md:text-8xl font-normal text-white mb-12 italic uppercase tracking-normal leading-[1.1]">
              Common <br className="md:hidden" /> <span className="text-primary italic animate-glow">Questions.</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto text-left">
            <FAQAccordion items={faqs} dark />
          </div>
        </div>
      </section>

      {/* ── SECTION 15: FINAL CTA ── */}
      <section className="py-24 md:py-64 relative bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,_rgba(208,255,0,0.1),transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div {...fadeUp()}>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-12 block italic">Start Now</span>
            <h2 className="font-display text-4xl md:text-7xl lg:text-9xl font-normal tracking-normal italic uppercase leading-[1.1] mb-12 px-4">
              Θέλεις website <br /> που πραγματικά <br /> <span className="text-primary italic animate-glow">δουλεύει;</span>
            </h2>
            <p className="text-2xl md:text-4xl text-white font-black mb-24 italic uppercase tracking-tighter">
               Let’s build it right.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-24">
              <Button size="xl" className="w-full sm:w-auto rounded-full px-16 md:px-24 h-24 md:h-32 text-2xl md:text-4xl font-black group bg-primary text-black hover:bg-white transition-all border-none italic shadow-glow-strong" asChild>
                <Link to="/project-brief?subject=websites">
                  Build my website
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="w-full sm:w-auto rounded-full px-16 md:px-24 h-24 md:h-32 text-2xl md:text-4xl font-black border-white/10 hover:bg-white hover:text-black transition-all italic" asChild>
                <Link to="/book-call-call">Book a call</Link>
              </Button>
            </div>
            
            <p className="text-xl md:text-2xl font-display font-medium text-white/30 italic tracking-tight uppercase tracking-[0.4em] font-black">
               No pressure. Just clarity.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Websites;
