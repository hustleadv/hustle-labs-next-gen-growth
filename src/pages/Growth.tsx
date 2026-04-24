import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  TrendingUp, Megaphone, Target, Zap, BarChart3,
  MousePointer2, Mail, Users, ArrowRight, CheckCircle2,
  ShieldCheck, Settings, PieChart, ShoppingBag, Building,
  Briefcase, Hotel, Brain
} from "lucide-react";
import { Button } from "@/components/ui/button";
import FAQAccordion from "@/components/FAQAccordion";
import LabBackground from "@/components/LabBackground";
import Magnetic from "@/components/Magnetic";
import sigma22 from "@/assets/sigma22.jpg";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as any },
});

const growthPillars = [
  { icon: Megaphone, title: "Στοχευμενη Διαφημιση", desc: "Δημιουργούμε καμπάνιες σε Google, Meta & TikTok που φέρνουν μετρήσιμα αποτελέσματα και αυξάνουν τις πωλήσεις σας.", badge: "3.5x Avg. ROAS" },
  { icon: Target, title: "Εξυπνα Funnels", desc: "Σχεδιάζουμε σελίδες και διαδρομές που πείθουν τον επισκέπτη να αγοράσει, αυξάνοντας δραματικά το ποσοστό μετατροπής.", badge: "+40% Conv. Rate" },
  { icon: Mail, title: "Αφοσιωση Πελατων", desc: "Με έξυπνα emails και SMS, κρατάμε τους πελάτες σας ενεργούς και τους κάνουμε να αγοράζουν ξανά και ξανά.", badge: "30% Extra Rev." },
  { icon: PieChart, title: "Αναλυση Δεδομενων", desc: "Καταγράφουμε κάθε κίνηση για να ξέρετε ακριβώς ποια ενέργεια φέρνει το μεγαλύτερο κέρδος. Σταματήστε να μαντεύετε.", badge: "100% Tracking" },
];

const steps = [
  { num: "01", icon: ShieldCheck, title: "Audit & Architecture", desc: "Αναλύουμε το ιστορικό, ελέγχουμε τα funnels και χτίζουμε τη στρατηγική." },
  { num: "02", icon: Settings, title: "System Setup", desc: "Advanced tracking, creatives και αρχιτεκτονική καμπανιών." },
  { num: "03", icon: Zap, title: "Execution & Flow", desc: "Live ads. Βελτιστοποίηση καθημερινά βάσει real-time data." },
  { num: "04", icon: TrendingUp, title: "Scale & Dominate", desc: "Βρίσκουμε τους νικητές και αυξάνουμε επιθετικά το budget." },
];

const industries = [
  { icon: ShoppingBag, name: "Ηλεκτρονικο Εμποριο", text: "Κλιμακώνουμε τις πωλήσεις του e-shop σας με στρατηγικές διαφημίσεις που φέρνουν κέρδος." },
  { icon: Hotel, name: "Τουρισμος & Φιλοξενια", text: "Αυξάνουμε τις απευθείας κρατήσεις στο ξενοδοχείο ή τη βίλα σας (direct bookings)." },
  { icon: Building, name: "Real Estate", text: "Βρίσκουμε σοβαρούς αγοραστές ή ενοικιαστές για τα ακίνητά σας μέσω στοχευμένης αναζήτησης." },
  { icon: Briefcase, name: "Παροχη Υπηρεσιων", text: "Φέρνου�const Growth = () => {
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
    document.title = "Digital Marketing & Growth Strategy Χανιά | Hustle Labs";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', "Στρατηγική ανάπτυξη και Digital Marketing στα Χανιά από την Hustle Labs. Data-driven καμπάνιες, performance marketing και scaling συστήματα για επιχειρήσεις.");
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "serviceType": "Digital Marketing & Growth Strategy", "provider": { "@type": "LocalBusiness", "name": "Hustle Labs" } });
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
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
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/80 italic">Hustle GrowthLab</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
              className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-12 uppercase italic"
            >
              Data-Driven <br />
              <span className="text-primary block group-hover:scale-[1.02] transition-transform duration-700">Performance.</span>
            </motion.h1>

            <div className="space-y-12 mb-16">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as any }}
                className="font-display text-xl md:text-2xl lg:text-3xl font-medium text-white/50 tracking-tight italic max-w-4xl mx-auto px-4"
              >
                Δεν υποθέτουμε, δοκιμάζουμε. <br className="hidden md:block" />
                <span className="text-white/20">Στήνουμε digital συστήματα που μετατρέπουν την προσοχή σε κέρδος.</span>
              </motion.p>
              
              <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ duration: 1, delay: 0.3 }}
                 className="flex flex-wrap justify-center gap-x-12 gap-y-2 text-primary font-black uppercase tracking-[0.5em] text-xs md:text-sm italic"
              >
                <span className="flex items-center gap-2"><Target size={14} /> Audit</span>
                <span className="flex items-center gap-2"><Zap size={14} /> Execute</span>
                <span className="flex items-center gap-2"><TrendingUp size={14} /> Scale</span>
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
                   <Link to="/contact">Ξεκίνα το Scale</Link>
                </Button>
              </Magnetic>
              <Magnetic strength={0.3}>
                <Button variant="outline" size="xl" className="w-full sm:w-auto rounded-full px-12 h-20 text-lg font-black border-white/10 hover:bg-white hover:text-black transition-all italic" asChild>
                   <a href="#services">Δες τις Υπηρεσίες</a>
                </Button>
              </Magnetic>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <motion.div 
          animate={{ y: [0, -20, 0], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-primary/10 blur-[120px] pointer-events-none"
        />
      </section>}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as any }}
              className="text-lg md:text-2xl font-medium text-white/80 max-w-4xl mx-auto mb-16 italic leading-relaxed"
            >
              Δεν υποθέτουμε, δοκιμάζουμε. Στήνουμε digital συστήματα που μετατρέπουν την προσοχή σε κέρδος, με απόλυτη διαφάνεια και εστίαση στο scale.
            </motion.p>

            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
              <Button size="xl" className="rounded-full px-12 md:px-16 h-20 md:h-24 text-xl md:text-2xl font-black bg-primary text-black hover:bg-white transition-all border-none italic shadow-glow-strong" asChild>
                <Link to="/contact">Ξεκίνα το Scale</Link>
              </Button>
              <Button variant="outline" size="xl" className="rounded-full px-12 md:px-16 h-20 md:h-24 text-xl md:text-2xl font-black border-white/10 hover:bg-white hover:text-black transition-all italic" asChild>
                <a href="#services">Δες τις Υπηρεσίες</a>
              </Button>
            </div>

            <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-white/20 italic">
              For businesses that want results, not just traffic.
            </p>
          </div>
        </div>
      </section>

      {/* ── STATEMENT ── */}
      <section className="py-24 md:py-48 relative border-t border-white/5 bg-[#050505] overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.div {...fadeUp()} className="max-w-5xl mx-auto">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-12 block italic">The Growth Standard</span>
            <h2 className="font-display text-4xl md:text-7xl lg:text-9xl font-black tracking-tighter leading-[0.85] mb-12 italic uppercase text-white">
              Δεν τρέχουμε ads. <br className="hidden md:block" />
              <span className="text-white/10 italic">Χτίζουμε συστήματα.</span>
            </h2>
            <p className="text-xl md:text-3xl text-white/60 font-medium italic leading-relaxed max-w-3xl mx-auto px-4">
              Κάθε euro του budget σου είναι επένδυση. Η δουλειά μας είναι να σιγουρέψουμε ότι επιστρέφει πολλαπλάσιο.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── AI X MARKETING ── */}
      <section className="py-24 md:py-32 relative bg-[#050505] border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(208,255,0,0.03),_transparent_50%)] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center max-w-7xl mx-auto">
              <motion.div {...fadeUp()}>
                 <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary mb-10 block italic">The Evolution</span>
                 <h2 className="font-display text-4xl md:text-6xl font-black text-white mb-12 leading-[0.85] tracking-tighter italic uppercase">
                    Το Marketing <br /> <span className="text-white/10 italic">Αλλαξε Για Παντα.</span>
                 </h2>
                 <p className="text-xl md:text-2xl text-white/60 leading-relaxed max-w-xl italic mb-12">
                    Δεν βασιζόμαστε μόνο σε παραδοσιακές μεθόδους. Συνδυάζουμε τη στρατηγική σκέψη με <strong className="text-primary font-bold">τεχνητή νοημοσύνη αιχμής (AI)</strong>. Αυτό σημαίνει καλύτερη στόχευση, γρηγορότερα αποτελέσματα και μεγαλύτερο περιθώριο κέρδους για την επιχείρησή σας.
                 </p>
                 <div className="space-y-6">
                    {[
                      "AI-Powered Copywriting: Κείμενα που πείθουν και προσαρμόζονται στον πελάτη.",
                      "Predictive Analytics: Ξέρουμε τι δουλεύει πριν καν το τρέξουμε.",
                      "Automated Optimizations: Συνεχής βελτίωση με αλγόριθμους machine learning."
                    ].map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-5 group">
                        <div className="w-2 h-2 rounded-full bg-primary mt-3 shrink-0 group-hover:scale-150 transition-transform" />
                        <p className="text-lg text-white/70 font-medium italic group-hover:text-white transition-colors">{bullet}</p>
                      </div>
                    ))}
                 </div>
              </motion.div>

              <motion.div {...fadeUp(0.2)} className="relative p-12 lg:p-20 rounded-[4rem] bg-white/[0.01] border border-white/5 overflow-hidden group shadow-2xl flex flex-col items-center justify-center text-center">
                 <div className="absolute top-0 right-0 p-12 opacity-10">
                    <Brain className="text-primary w-64 h-64 -rotate-12 group-hover:rotate-0 transition-transform duration-[2000ms] ease-out shadow-glow" />
                 </div>
                 <div className="relative z-10">
                    <div className="w-24 h-24 rounded-[2rem] bg-primary/10 border border-primary/20 flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-500">
                        <Brain size={48} className="text-primary" />
                    </div>
                    <h3 className="text-3xl md:text-5xl font-black text-white italic uppercase mb-6 tracking-tighter">AI + Human <br /> <span className="text-primary">Intelligence</span></h3>
                    <p className="text-lg text-white/60 leading-relaxed italic px-4">
                       Η τεχνολογία από μόνη της δεν αρκεί. Η δύναμη κρύβεται στον συνδυασμό της ανθρώπινης στρατηγικής με την ταχύτητα του AI.
                    </p>
                 </div>
              </motion.div>
           </div>
        </div>
      </section>

      {/* ── GROWTH PILLARS ── */}
      <section id="services" className="py-24 md:py-48 relative border-t border-white/5 bg-[#050505] overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary mb-10 block italic">Growth Services</span>
            <h2 className="font-display text-4xl md:text-8xl font-black tracking-tighter leading-[0.85] italic uppercase text-white">
              Ολιστική <br />
              <span className="text-white/10 italic">Στρατηγική.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {growthPillars.map((p, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className="group relative bg-white/[0.01] rounded-[3rem] p-10 lg:p-16 border border-white/5 hover:bg-white/[0.03] transition-all duration-700 hover:border-primary/20 overflow-hidden text-left shadow-2xl flex flex-col"
              >
                <div className="relative z-10 flex-1">
                  <div className="flex items-center justify-between mb-12">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 group-hover:bg-primary group-hover:text-black transition-all duration-500">
                      <p.icon size={28} className="text-primary/60 group-hover:text-black" />
                    </div>
                    <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.05] text-[10px] font-black uppercase tracking-widest text-white/60 italic group-hover:text-primary transition-colors duration-500">
                      {p.badge}
                    </span>
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl font-extrabold mb-6 leading-none text-white tracking-tight italic uppercase group-hover:text-primary transition-colors duration-500">{p.title}</h3>
                  <p className="text-white/70 text-lg md:text-xl leading-relaxed italic pr-4">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-24 relative overflow-hidden border-y border-white/5 bg-[#080808]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(208,255,0,0.06),transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
            {[
              { value: "3.5x", label: "Average ROAS", suffix: "+" },
              { value: "40", label: "Conv. Rate Lift", suffix: "%" },
              { value: "100", label: "Tracking Accuracy", suffix: "%" },
              { value: "2M", label: "Ad Spend Managed", suffix: "€+" }
            ].map((stat, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)} className="text-center md:text-left flex-1 border-b md:border-b-0 md:border-r border-white/10 pb-8 md:pb-0 last:border-0 group cursor-default">
                <div className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-white mb-2 tracking-tighter flex items-center justify-center md:justify-start group-hover:scale-105 group-hover:-translate-y-1 transition-transform duration-500 origin-left">
                  {stat.value}<span className="text-primary text-3xl md:text-4xl ml-1 group-hover:animate-pulse">{stat.suffix}</span>
                </div>
                <div className="text-primary/70 uppercase tracking-[0.2em] text-xs font-black group-hover:text-primary transition-colors duration-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="py-24 md:py-48 relative overflow-hidden bg-[#050505]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-24">
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary mb-10 block italic">Expertise Per Sector</span>
            <h2 className="font-display text-4xl md:text-8xl font-black tracking-tighter leading-[0.85] italic uppercase text-white">
              High-Growth <br />
              <span className="text-white/10 italic">Κλάδοι.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className="p-10 md:p-12 rounded-[3rem] bg-white/[0.01] border border-white/5 hover:border-primary/30 hover:bg-white/[0.03] transition-all duration-700 group text-left"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-black transition-all duration-500">
                  <ind.icon size={24} className="text-primary/60 group-hover:text-black" />
                </div>
                <h3 className="font-display text-2xl font-extrabold text-white mb-4 italic uppercase tracking-tight group-hover:text-primary transition-colors">{ind.name}</h3>
                <p className="text-white/70 text-base leading-relaxed italic">{ind.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── METHODOLOGY ── */}
      <section className="py-24 md:py-56 relative overflow-hidden bg-[#050505] border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(208,255,0,0.02),_transparent_50%)] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fadeUp()} className="text-center mb-32 md:mb-48 max-w-5xl mx-auto">
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary mb-12 block italic">The Protocol</span>
            <h2 className="font-display text-4xl md:text-7xl lg:text-9xl font-black tracking-tighter italic uppercase leading-[0.85] text-white">
              This is how <br />
              <span className="text-white/10 italic">we scale.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {steps.map((s, i) => (
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
                  <s.icon size={32} strokeWidth={1} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/60 mb-3 block italic">Step {s.num}</span>
                <h3 className="font-display text-2xl md:text-3xl font-extrabold uppercase italic mb-6 tracking-tight text-white group-hover:text-primary transition-colors">{s.title}</h3>
                <p className="text-[11px] md:text-[13px] text-white/60 font-black uppercase tracking-[0.4em] leading-relaxed italic">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDY ── */}
      <section className="py-24 md:py-48 relative overflow-hidden border-t border-white/5 bg-[#080808]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-24">
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary mb-10 block italic">Proof of Work</span>
            <h2 className="font-display text-4xl md:text-8xl font-black tracking-tighter leading-[0.85] italic uppercase text-white">
              Real Results. <br />
              <span className="text-white/10 italic">Real Scale.</span>
            </h2>
          </div>

          <motion.div
            {...fadeUp()}
            className="max-w-6xl mx-auto rounded-[3rem] overflow-hidden bg-white/[0.01] border border-white/5 relative group hover:border-primary/30 transition-all duration-700"
          >
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="relative h-72 lg:h-full lg:col-span-2 overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10">
                <img
                  src={sigma22}
                  alt="Sigmalabs AI"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-[2s] opacity-60 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent lg:bg-none" />
              </div>

              <div className="p-10 lg:p-16 lg:col-span-3 flex flex-col justify-center">
                <div className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-6 italic">AI E-commerce Scale</div>
                <h2 className="font-display text-3xl lg:text-5xl font-black text-white mb-8 tracking-tighter leading-none italic uppercase">
                  The Sigmalabs <br />
                  <span className="text-primary">Story.</span>
                </h2>

                <div className="grid grid-cols-3 gap-4 mb-10">
                  {["+180% Revenue", "4.2x ROAS", "12k New Leads"].map((m, i) => (
                    <div key={i} className="text-center p-4 rounded-2xl bg-white/5 border border-white/5">
                      <div className="text-primary font-black text-lg md:text-xl mb-1">{m.split(' ')[0]}</div>
                      <div className="text-white/30 uppercase text-[8px] font-black tracking-widest">{m.split(' ').slice(1).join(' ')}</div>
                    </div>
                  ))}
                </div>

                <p className="text-white/70 text-lg font-light italic leading-relaxed mb-10">
                  "Πώς χρησιμοποιήσαμε ένα συνδυασμό Meta Ads και Retention Marketing για να εκτοξεύσουμε το Sigmalabs σε λιγότερο από 6 μήνες."
                </p>

                <Button size="xl" className="rounded-full px-10 h-16 text-lg font-black group bg-primary text-black hover:bg-white transition-all border-none italic shadow-glow w-full sm:w-auto" asChild>
                  <Link to="/portfolio/sigmalabs-ai" className="flex items-center gap-3">
                    Read Case Study <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 md:py-48 relative bg-[#050505] overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div {...fadeUp()} className="max-w-5xl mx-auto mb-20">
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary mb-12 block italic">Knowledge</span>
            <h2 className="font-display text-5xl md:text-8xl lg:text-9xl font-black text-white mb-16 italic uppercase tracking-tighter leading-[0.85]">
              Common <br className="md:hidden" />
              <span className="text-white/10 italic">Questions.</span>
            </h2>
          </motion.div>
          <div className="max-w-4xl mx-auto text-left">
            <FAQAccordion items={faqs} dark />
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 md:py-64 relative bg-[#050505] overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,_rgba(208,255,0,0.1),transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div {...fadeUp()}>
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary mb-12 block italic">Ready to Scale?</span>
            <h2 className="font-display text-5xl md:text-9xl font-black tracking-tighter italic uppercase leading-[0.85] mb-20 px-4 text-white">
              Ας μεγαλώσουμε <br />
              <span className="text-primary italic animate-glow">μαζί.</span>
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-24 max-w-4xl mx-auto">
              <Button size="xl" className="w-full sm:w-auto rounded-full px-16 md:px-24 h-24 md:h-32 text-2xl md:text-4xl font-black group bg-primary text-black hover:bg-white transition-all border-none italic shadow-glow-strong" asChild>
                <Link to="/contact">
                  Strategy Call <ArrowRight className="ml-3 group-hover:translate-x-3 transition-transform inline" size={28} />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="w-full sm:w-auto rounded-full px-16 md:px-24 h-24 md:h-32 text-2xl md:text-4xl font-black border-white/10 hover:bg-white hover:text-black transition-all italic text-white" asChild>
                <Link to="/portfolio">Δες τα Έργα μας</Link>
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

export default Growth;
