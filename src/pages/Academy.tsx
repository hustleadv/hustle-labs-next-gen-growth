import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, ArrowDown, Megaphone, Globe, Cpu, Rocket,
  GraduationCap, BookOpen, Brain, Zap, Target, Award, Trophy,
  UserCheck, Clock, CheckCircle2, Users, Star,
  ChevronDown, Sparkles, X, CreditCard,
  ShieldCheck, Lock, BarChart3, TrendingUp, MousePointerClick,
  BadgeCheck, CircleDollarSign, Timer, FlameKindling, Activity, Wrench
} from "lucide-react";
import { Button } from "@/components/ui/button";
import LabBackground from "@/components/LabBackground";
import { useToast } from "@/hooks/use-toast";

/* ══════════════════════════════════════════════════════
   DATA
══════════════════════════════════════════════════════ */

const workshops = [
  {
    icon: Megaphone,
    badge: "Digital Marketing",
    title: "Mastering Ads",
    desc: "Πώς στήνεται μια κερδοφόρα διαφημιστική καμπάνια από το μηδέν. Facebook, Instagram, Google.",
    duration: "2 ώρες · Live",
    price: "€25",
    stripeUrl: "https://buy.stripe.com/YOUR_ADS_WORKSHOP_LINK",
    outcomes: [
      "Λανσάρεις την πρώτη σου καμπάνια",
      "Καταλαβαίνεις τι δουλεύει με real data",
      "Ξέρεις πού πηγαίνουν τα χρήματά σου",
    ],
  },
  {
    icon: Globe,
    badge: "Websites",
    title: "Build Your First Site",
    desc: "Από zero σε ένα γρήγορο, επαγγελματικό site χωρίς να γράψεις κώδικα.",
    duration: "2 ώρες · Πρακτικό",
    price: "€25",
    outcomes: [
      "Έχεις έτοιμο live site στο τέλος",
      "Ξέρεις πώς να κάνεις updates μόνος σου",
      "Speed & SEO από την αρχή",
    ],
  },
  {
    icon: Cpu,
    badge: "AI & Automation",
    title: "AI for Business",
    desc: "Βάλε το AI να δουλεύει για σένα. Automation workflows, content creation, εξοικονόμηση ωρών κάθε εβδομάδα.",
    duration: "2 ώρες · Εντατικό",
    price: "€30",
    outcomes: [
      "Φτιάχνεις το πρώτο σου automation",
      "Παράγεις περιεχόμενο 10× πιο γρήγορα",
      "Εξοικονομείς 5+ ώρες την εβδομάδα",
    ],
  },
  {
    icon: BarChart3,
    badge: "Growth Strategy",
    title: "Growth Strategy",
    desc: "Ένα ολοκληρωμένο πλάνο ανάπτυξης για το επόμενο τρίμηνο. Real frameworks, όχι θεωρία.",
    duration: "4 ώρες · Bootcamp",
    price: "€80",
    outcomes: [
      "Φεύγεις με έτοιμο 90-day plan",
      "Ξέρεις τα KPIs που μετρούν",
      "Εντοπίζεις τα quick wins σου",
    ],
  },
  {
    icon: TrendingUp,
    badge: "Content & Social",
    title: "Content Creation Lab",
    desc: "Περιεχόμενο που χτίζει κοινό, αυξάνει εμπιστοσύνη και φέρνει πελάτες.",
    duration: "2 ώρες · Workshop",
    price: "€35",
    outcomes: [
      "Φτιάχνεις 30-day content calendar",
      "Ξέρεις τι format δουλεύει ανά platform",
      "Αρχίζεις να δημοσιεύεις με σιγουριά",
    ],
  },
  {
    icon: MousePointerClick,
    badge: "Email Marketing",
    title: "Email Flows που Πουλάνε",
    desc: "Email sequences που λειτουργούν αυτόματα και φέρνουν revenue ενώ κοιμάσαι.",
    duration: "2 ώρες · Hands-on",
    price: "€30",
    outcomes: [
      "Welcome sequence έτοιμο να πάει live",
      "Abandoned cart flow που ανακτά πωλήσεις",
      "Open rates πάνω από τον μέσο όρο",
    ],
  },
];

const valuePillars = [
  {
    icon: Cpu,
    label: "AI & Automation",
    title: "Δούλευε Έξυπνα",
    learn: "AI tools, automation workflows και no-code stacks.",
    achieve: "Εξοικονομείς ώρες κάθε εβδομάδα. Παράγεις περισσότερο με λιγότερο χρόνο.",
  },
  {
    icon: Megaphone,
    label: "Digital Marketing",
    title: "Απόκτησε Πελάτες",
    learn: "Ads, SEO, email marketing, content strategy. Χωρίς να σπαταλάς budget.",
    achieve: "Ξέρεις πού να ρίχνεις τα χρήματά σου και γιατί. Μετράς αποτελέσματα.",
  },
  {
    icon: Rocket,
    label: "Real Project Building",
    title: "Χτίσε & Λανσάρεις",
    learn: "Φτιάχνεις πραγματικά projects: sites, campaigns, pipelines. Εντός workshop.",
    achieve: "Φεύγεις από κάθε session με κάτι έτοιμο. Όχι θεωρία. Execution.",
  },
];

const priveMentoring = {
  price: "€120 / session",
  benefits: [
    "90' αποκλειστικής εστίασης στο δικό σου project",
    "Personalized strategy βασισμένη σε real data",
    "Video recording & post-session action plan",
    "Chat support μεταξύ sessions",
    "Ειλικρινής feedback, όχι γενικές συμβουλές",
  ],
};

const testimonials = [
  {
    name: "Μαρία Κ.",
    role: "Ιδιοκτήτρια e-shop",
    quote: "Έστησα το πρώτο μου project και επιτέλους κατάλαβα τι κάνω. Έτρεξα καμπάνια την επόμενη μέρα και έφερε πωλήσεις.",
    result: "Πρώτη πώληση μέσα σε 24h",
  },
  {
    name: "Γιώργος Π.",
    role: "Freelancer",
    quote: "Δεν ήξερα τίποτα για automation. Τώρα έχω workflows που τρέχουν μόνα τους και κερδίζω 6 ώρες την εβδομάδα.",
    result: "+6 ώρες ελεύθερες / εβδομάδα",
  },
  {
    name: "Νίκος Τ.",
    role: "Founder",
    quote: "Το Private Mentoring άλλαξε τον τρόπο που σκέφτομαι το business μου. Συγκεκριμένα βήματα, όχι ασαφείς συμβουλές.",
    result: "Strategy σε 90 λεπτά",
  },
];

const faqs = [
  {
    question: "Χρειάζομαι εμπειρία για να συμμετέχω;",
    answer: "Όχι. Τα workshops είναι σχεδιασμένα για αρχάριους και intermediate. Αν ξέρεις τι θέλεις να χτίσεις, είσαι έτοιμος.",
  },
  {
    question: "Πόσο χρόνο θα χρειαστώ;",
    answer: "Τα Group Workshops είναι 2 ώρες. Τα Bootcamps 4 ώρες. Μπορείς να δεις αποτελέσματα από την πρώτη μέρα, χωρίς μήνες θεωρίας.",
  },
  {
    question: "Τι θα φτιάξω συγκεκριμένα;",
    answer: "Κάτι πραγματικό: site, καμπάνια, automation pipeline, content plan ή email flow. Κάθε workshop έχει παραδοτέο αποτέλεσμα.",
  },
  {
    question: "Πόσες θέσεις υπάρχουν;",
    answer: "Κρατάμε μέγιστο 12 άτομα σε κάθε group για να είναι πρακτικό και όχι θεωρητικό. Κλείνονται γρήγορα.",
  },
  {
    question: "Γίνονται και online;",
    answer: "Επιλεγμένα workshops γίνονται hybrid. Τα περισσότερα είναι δια ζώσης στο Hustle Space στα Χανιά.",
  },
];

/* ══════════════════════════════════════════════════════
   ANIMATIONS
══════════════════════════════════════════════════════ */

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

const fadeUpDelay = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
});

/* ══════════════════════════════════════════════════════
   COMPONENT
══════════════════════════════════════════════════════ */

const Academy = () => {
  const { toast } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const openModal = (item?: any) => {
    setSelectedItem(item || null);
    setIsModalOpen(true);
    setCurrentStep(1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      toast({ title: "Συμπλήρωσε τα απαραίτητα πεδία", variant: "destructive" });
      return;
    }
    // Redirect to Stripe Checkout
    const stripeUrl = selectedItem?.stripeUrl || "https://buy.stripe.com/YOUR_DEFAULT_LINK";
    window.open(stripeUrl, '_blank');
    setCurrentStep(2);
  };

  const handlePayment = () => {
    setCurrentStep(3);
    toast({ title: "Επιτυχημένη κράτηση!", description: "Η θέση σου κατοχυρώθηκε." });
  };

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-primary selection:text-black overflow-x-hidden">

      {/* ════════════════════════════════════════
          1. HERO
      ════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src="/images/hustle-academy.jpg" alt="" className="w-full h-full object-cover object-center opacity-55" style={{filter: "grayscale(30%)"}} />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-[#050505]/50 to-[#050505]" />
        </div>

        <LabBackground />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(208,255,0,0.04),transparent_70%)] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto text-center">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/20 mb-10"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/80 italic">Hustle Academy · Χανιά</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-normal tracking-normal leading-[1.1] mb-10 uppercase italic"
            >
              Δεν χρειάζεσαι <br />
              <span className="text-primary">άλλα courses.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-xl md:text-2xl lg:text-3xl font-medium text-white/50 tracking-tight italic mb-10 max-w-3xl mx-auto"
            >
              <p>Χρειάζεσαι κάτι που δουλεύει.</p>
              <p className="text-white/25 mt-2 text-lg md:text-xl">Πρακτική εκπαίδευση, real execution.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
            >
              <Button
                size="xl"
                className="w-full sm:w-auto rounded-full px-10 md:px-14 h-16 md:h-20 text-lg md:text-xl font-black group bg-primary text-black hover:bg-white transition-all border-none italic shadow-glow"
                onClick={() => scrollTo("workshops")}
              >
                Δες τα Workshops
                <ArrowDown size={20} className="ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="w-full sm:w-auto rounded-full px-10 md:px-14 h-16 md:h-20 text-lg md:text-xl font-black border-white/10 hover:bg-white hover:text-black transition-all italic"
                onClick={() => openModal({ name: "Γενική Εγγραφή" })}
              >
                Μίλα μαζί μας
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-x-10 md:gap-x-16 gap-y-3 text-primary font-black uppercase tracking-[0.4em] text-xs md:text-sm italic"
            >
              <span>4 εβδ. για το Πρώτο project</span>
              <span>90% hands-on</span>
              <span>€25 ξεκινάει από</span>
            </motion.div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.08, 0.18, 0.08] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-primary/10 blur-[120px] pointer-events-none"
        />
      </section>

      {/* ════════════════════════════════════════
          2. INTRO STATEMENT
      ════════════════════════════════════════ */}
      <section className="py-32 md:py-48 relative border-t border-white/5 overflow-hidden bg-[#0a0a0a]">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fadeUp} className="max-w-5xl mx-auto text-center">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-10 block italic">Τι κερδίζεις</span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-8xl font-normal tracking-normal leading-[1.1] mb-14 uppercase italic px-2">
              Όχι videos. <br />
              Όχι notes. <br />
              <span className="text-white/20">Αποτελέσματα.</span>
            </h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              <p className="text-xl md:text-3xl font-medium text-white/70 leading-tight italic tracking-tight">
                Φτιάχνεις πραγματικά πράγματα, μαθαίνεις από execution
                και φεύγεις με αποτέλεσμα στα χέρια.
              </p>
              <p className="text-lg md:text-xl font-medium text-white/30 leading-relaxed italic">
                Κάθε workshop έχει παραδοτέο αποτέλεσμα.
                Φεύγεις με κάτι έτοιμο, όχι notes.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          3. VALUE PILLARS (3-column grid)
      ════════════════════════════════════════ */}
      <section className="py-0 relative border-y border-white/5 bg-[#050505]">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {valuePillars.map((pillar, i) => (
            <div
              key={i}
              className={`p-12 md:p-20 lg:p-24 hover:bg-white/[0.02] transition-all duration-700 group ${i < 2 ? "border-b lg:border-b-0 lg:border-r border-white/5" : ""}`}
            >
              <motion.div {...fadeUpDelay(i * 0.1)}>
                <span className="text-[9px] font-black uppercase tracking-[0.5em] text-white/20 mb-8 block group-hover:text-primary transition-colors italic">
                  {pillar.label}
                </span>
                <div className="w-14 h-14 md:w-20 md:h-20 rounded-3xl bg-white/5 flex items-center justify-center text-white/20 mb-12 group-hover:bg-primary group-hover:text-black group-hover:scale-110 transition-all duration-500 border border-white/10 group-hover:border-transparent">
                  <pillar.icon size={32} strokeWidth={1} />
                </div>
                <h3 className="font-display text-4xl md:text-6xl font-normal tracking-normal mb-6 italic uppercase group-hover:text-primary transition-colors leading-[1.1]">{pillar.title}</h3>
                <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-primary mb-10 italic">{pillar.learn}</p>
                <p className="text-lg md:text-xl text-white/40 leading-relaxed italic pr-4">{pillar.achieve}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════
          4. WORKSHOPS
      ════════════════════════════════════════ */}
      <section id="workshops" className="py-32 md:py-48 relative border-t border-white/5 bg-[#080808] scroll-mt-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeUp} className="max-w-4xl mx-auto lg:mx-0 mb-20 md:mb-32">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-8 block italic">Ομαδική Μάθηση</span>
            <h2 className="font-display text-3xl md:text-6xl lg:text-7xl font-normal tracking-normal leading-[1.1] mb-8 italic uppercase">
              Ένα workshop. <span className="text-white/20 text-xl md:text-4xl lg:text-5xl tracking-normal">Ένα πραγματικό αποτέλεσμα.</span>
            </h2>
            <p className="text-primary font-black uppercase tracking-[0.4em] text-sm italic animate-pulse">
              Κάθε workshop είναι product, όχι μάθημα.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {workshops.map((w, i) => (
              <motion.div
                key={i}
                {...fadeUpDelay(i * 0.07)}
                className="group relative p-10 md:p-14 rounded-[3rem] md:rounded-[4rem] glass-card text-center overflow-hidden flex flex-col hover:shadow-glow-strong/10"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-10 bg-gradient-to-b from-primary/40 to-transparent group-hover:h-20 transition-all duration-1000" />

                {/* Duration badge */}
                  <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/20 italic">{w.duration}</span>

                {/* Icon */}
                <div className="w-20 h-20 rounded-[2rem] bg-white/5 flex items-center justify-center text-white/10 mb-12 mx-auto group-hover:bg-primary group-hover:text-black transition-all duration-700 border border-white/10 group-hover:border-transparent group-hover:shadow-[0_0_40px_rgba(208,255,0,0.2)]">
                  <w.icon size={32} strokeWidth={1} />
                </div>

                <div className="flex-1">
                  <span className="text-[9px] font-black uppercase tracking-[0.5em] text-primary/60 italic block mb-4">{w.badge}</span>
                  <h3 className="font-display text-2xl md:text-4xl font-black uppercase italic mb-6 tracking-tighter leading-none group-hover:text-primary transition-colors">{w.title}</h3>
                  <p className="text-[11px] md:text-[12px] text-white/30 font-black uppercase tracking-[0.4em] leading-relaxed italic mb-12 px-4">{w.desc}</p>

                  {/* Outcomes */}
                  <ul className="grid grid-cols-1 gap-y-4 mb-14 text-left border-t border-white/5 pt-10">
                    {w.outcomes.map((o, j) => (
                      <li key={j} className="flex items-start gap-4 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-white/20 border-l border-white/10 pl-6 group-hover:border-primary/40 transition-all italic">
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price + CTA */}
                <div className="flex flex-col gap-6 pt-4 mt-auto">
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-[10px] font-black text-white/20 uppercase tracking-widest italic">ENERGY EXCHANGE</span>
                    <span className="text-4xl font-black text-primary italic tracking-tight leading-none">{w.price}</span>
                  </div>
                  <Button
                    size="xl"
                    onClick={() => openModal(w)}
                    className="w-full rounded-full h-18 bg-white text-black hover:bg-primary transition-all border-none font-black text-xs uppercase tracking-widest italic shadow-xl group-hover:shadow-glow"
                  >
                    Κράτηση θέσης
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* All-access pass */}
          <motion.div {...fadeUpDelay(0.3)} className="mt-16 md:mt-24 max-w-4xl mx-auto">
            <div className="p-10 md:p-16 rounded-[2.5rem] md:rounded-[4rem] border border-primary/20 bg-white/[0.015] flex flex-col md:flex-row items-center gap-10 overflow-hidden relative">
              <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
              <div className="relative z-10 flex-1 text-center md:text-left">
                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-primary block mb-3 italic">All Access Pass</span>
                <h3 className="font-display text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-3">Όλα τα workshops του μήνα</h3>
                <p className="text-white/30 text-sm font-black uppercase tracking-widest italic">Απεριόριστη συμμετοχή. Ένα πρόγραμμα, μέγιστη εξέλιξη.</p>
              </div>
              <div className="relative z-10 shrink-0 text-center">
                <p className="text-5xl font-black text-primary italic mb-1">€180</p>
                <p className="text-white/30 text-xs font-black uppercase tracking-widest italic mb-6">/ μήνα</p>
                <button
                  onClick={() => openModal({ name: "All Access Pass" })}
                  className="rounded-full px-10 h-14 bg-primary text-black font-black text-xs uppercase tracking-widest italic hover:bg-white transition-all shadow-glow"
                >
                  Αγορά Πακέτου
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          5. PRIVATE MENTORING
      ════════════════════════════════════════ */}
      <section className="py-32 md:py-48 relative border-t border-white/5 bg-[#050505]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(208,255,0,0.04),transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">

          <motion.div {...fadeUp} className="text-center mb-20 md:mb-32 max-w-5xl mx-auto">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-10 block italic">1-on-1 Sessions</span>
            <h2 className="font-display text-4xl md:text-7xl lg:text-9xl font-normal tracking-normal italic uppercase leading-[1.1] mb-8">
              Private <br /><span className="text-white/20">Mentoring.</span>
            </h2>
            <p className="text-primary font-black uppercase tracking-[0.4em] text-lg md:text-2xl italic animate-pulse">
              Απόλυτη εστίαση στο δικό σου project.
            </p>
          </motion.div>

          {/* Two-col layout like homepage */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-white/5 rounded-[3rem] md:rounded-[4rem] overflow-hidden max-w-6xl mx-auto">
            {/* Left — description */}
            <div className="p-10 md:p-16 lg:p-20 hover:bg-white/[0.015] transition-colors group border-b lg:border-b-0 lg:border-r border-white/5">
              <motion.div {...fadeUpDelay(0.1)}>
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/5 flex items-center justify-center text-primary mb-10 group-hover:scale-110 transition-transform border border-white/10">
                  <UserCheck size={28} />
                </div>
                <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-primary mb-6 italic">Δουλεύουμε αποκλειστικά πάνω στο δικό σου project.</p>
                <p className="text-xl md:text-2xl text-white/60 leading-relaxed italic mb-10">
                  Δεν σου δίνω γενικές συμβουλές. Σου δείχνω ακριβώς τι να κάνεις και πώς.
                </p>
                <ul className="grid grid-cols-1 gap-y-5">
                  {priveMentoring.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-4 text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-white/20 border-l border-white/10 pl-6 group-hover:border-primary/40 transition-colors italic">
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Right — price + CTA */}
            <div className="p-10 md:p-16 lg:p-20 hover:bg-primary/[0.015] transition-colors group flex flex-col justify-center">
              <motion.div {...fadeUpDelay(0.2)}>
                <span className="text-[9px] font-black uppercase tracking-[0.5em] text-white/20 mb-6 block group-hover:text-primary transition-colors italic">1-on-1 · 90 λεπτά</span>
                <p className="font-display text-7xl md:text-9xl font-normal text-primary italic tracking-normal leading-none mb-2">€120</p>
                <p className="text-white/20 text-xs font-black uppercase tracking-widest italic mb-16">/ session</p>
                <p className="text-[9px] md:text-[10px] text-white/20 italic mb-10 uppercase tracking-[0.3em] font-black leading-relaxed">
                  Video recording & post-session action plan.<br/>Chat support μεταξύ sessions.
                </p>
                <Button
                  size="xl"
                  className="w-full rounded-full px-10 h-14 md:h-18 bg-white text-black hover:bg-primary transition-all font-black text-xs uppercase tracking-widest italic"
                  onClick={() => openModal({ name: "Private Mentoring", price: "€120" })}
                >
                  Κλείσε Session
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          6. TESTIMONIALS
      ════════════════════════════════════════ */}
      <section className="py-32 md:py-48 relative border-t border-white/5 bg-[#080808]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeUp} className="mb-20 md:mb-32 max-w-4xl mx-auto lg:mx-0">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-8 block italic">Success Stories</span>
            <h2 className="font-display text-3xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] mb-8 italic uppercase">
              We don't back everyone.{" "}
              <span className="text-white/20 text-xl md:text-4xl tracking-normal">But when we do, results follow.</span>
            </h2>
            <p className="text-primary font-black uppercase tracking-[0.4em] text-sm italic animate-pulse">
              Πραγματικές εμπειρίες. Πραγματικά αποτελέσματα.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                {...fadeUpDelay(i * 0.1)}
                className="group relative aspect-auto p-10 md:p-14 rounded-[2.5rem] md:rounded-[3.5rem] glass-card overflow-hidden"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-10 bg-gradient-to-b from-primary/40 to-transparent group-hover:h-20 transition-all duration-700" />

                {/* Stars */}
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} size={14} className="text-primary fill-primary" />
                  ))}
                </div>

                <p className="text-white/50 text-base leading-relaxed italic mb-10 font-medium">
                  "{t.quote}"
                </p>

                {/* Result tag */}
                <p className="text-[9px] font-black text-primary uppercase tracking-[0.4em] italic mb-8 border-l border-primary/30 pl-5">
                  {t.result}
                </p>

                <div className="flex items-center gap-4 pt-8 border-t border-white/5">
                  <div className="w-10 h-10 rounded-2xl bg-primary text-black flex items-center justify-center font-black text-sm italic shadow-glow">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-black italic uppercase tracking-tight">{t.name}</p>
                    <p className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em] italic mt-0.5">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          7. FAQ
      ════════════════════════════════════════ */}
      <section className="py-32 md:py-48 relative overflow-hidden border-t border-white/5 bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(208,255,0,0.04),transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fadeUp} className="text-center mb-20 md:mb-32 max-w-4xl mx-auto">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-10 block italic">Έχεις Απορίες;</span>
            <h2 className="font-display text-4xl md:text-7xl lg:text-9xl font-normal tracking-normal italic uppercase leading-[1.1]">
              Απαντάμε <br />
              <span className="text-white/20">ουσιαστικά.</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto divide-y divide-white/5">
            {faqs.map((faq, i) => (
              <motion.div key={i} {...fadeUpDelay(i * 0.07)}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  onMouseEnter={() => setOpenFaq(i)}
                  className="w-full flex items-center justify-between py-8 md:py-10 text-left group"
                >
                  <span className="font-display text-lg md:text-2xl font-black uppercase italic tracking-tight group-hover:text-primary transition-colors pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-white/20 group-hover:text-primary transition-all shrink-0 ${openFaq === i ? "rotate-180 text-primary" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 text-white/40 text-base md:text-lg italic font-medium leading-relaxed pl-0 border-l border-primary/20 pl-6">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          8. FINAL CTA
      ════════════════════════════════════════ */}
      <section className="py-32 md:py-48 lg:py-64 relative bg-[#050505]">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeUp}>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-12 block italic">Ξεκίνα τώρα</span>
            <h2 className="font-display text-4xl md:text-7xl lg:text-9xl font-normal tracking-normal italic uppercase leading-[1.1] mb-8 px-2">
              Ξεκίνα τώρα. <br />
              <span className="text-white/20">Ή μείνε στο ίδιο σημείο.</span>
            </h2>
            <p className="text-primary font-black uppercase tracking-[0.4em] text-lg md:text-2xl mb-16 md:mb-24 italic">
              Κάθε εβδομάδα χωρίς action είναι εβδομάδα που χάνεις.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 mb-16 md:mb-24">
              <Button
                size="xl"
                className="w-full sm:w-auto rounded-full px-12 md:px-20 h-20 md:h-28 text-xl md:text-3xl font-black group bg-primary text-black hover:bg-white transition-all border-none italic shadow-glow-strong"
                onClick={() => scrollTo("workshops")}
              >
                Ξεκίνα σήμερα
                <ArrowRight size={24} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="w-full sm:w-auto rounded-full px-12 md:px-20 h-20 md:h-28 text-xl md:text-3xl font-black border-white/10 hover:bg-white hover:text-black transition-all italic"
                asChild
              >
                <Link to="/book-call">Κλείσε Mentoring</Link>
              </Button>
            </div>

            <p className="text-lg md:text-2xl font-display font-medium text-white/20 italic tracking-tight uppercase">
              Και φέρε κάτι να χτίσουμε μαζί.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          REGISTRATION MODAL
      ════════════════════════════════════════ */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/98 backdrop-blur-xl overflow-y-auto p-4"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(208,255,0,0.06),transparent)] pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="relative w-full max-w-xl flex flex-col items-center justify-center py-12 text-white"
            >
              {/* Close */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-0 right-0 p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              >
                <X size={20} className="text-white" />
              </button>

              {/* Step indicators */}
              <div className="flex items-center gap-3 mb-12">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm italic transition-all ${currentStep >= step ? "bg-primary text-black scale-110 shadow-glow" : "bg-white/5 text-white/20"}`}>
                      {currentStep > step ? <CheckCircle2 size={18} /> : step}
                    </div>
                    {step < 3 && <div className={`w-10 md:w-16 h-px ${currentStep > step ? "bg-primary" : "bg-white/10"}`} />}
                  </div>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {/* Step 1 — Details */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                    className="w-full bg-white/[0.03] border border-white/10 p-8 md:p-12 rounded-[3rem]"
                  >
                    <div className="text-center mb-10">
                      <h2 className="font-display text-3xl font-black italic uppercase tracking-tighter mb-2">Στοιχεία Εγγραφής</h2>
                      {selectedItem?.name && (
                        <span className="text-xs text-primary/80 font-black uppercase tracking-widest italic">{selectedItem.name}</span>
                      )}
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 ml-1 mb-2 block italic">Ονοματεπώνυμο</label>
                        <input
                          type="text" required autoComplete="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/5 focus:bg-white/10 focus:border-primary/20 transition-all placeholder:text-white/10 text-white outline-none italic"
                          placeholder="Το όνομά σου"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 ml-1 mb-2 block italic">Email</label>
                        <input
                          type="email" required autoComplete="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/5 focus:bg-white/10 focus:border-primary/20 transition-all placeholder:text-white/10 text-white outline-none italic"
                          placeholder="email@example.com"
                        />
                      </div>
                      <button type="submit" className="w-full rounded-full h-16 bg-primary text-black font-black text-sm uppercase tracking-widest italic hover:bg-white transition-all shadow-glow">
                        Συνέχεια στην Πληρωμή →
                      </button>
                    </form>
                  </motion.div>
                )}

                {/* Step 2 — Payment */}
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                    className="w-full bg-white/[0.03] border border-white/10 p-8 md:p-12 rounded-[3rem]"
                  >
                    <div className="flex items-center justify-between mb-10 pb-8 border-b border-white/5">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-black">
                          <CreditCard size={22} />
                        </div>
                        <div>
                          <p className="font-black text-lg italic uppercase tracking-tight">Ασφαλής Πληρωμή</p>
                          <p className="text-[10px] font-black text-white/30 uppercase tracking-widest flex items-center gap-1.5 italic">
                            <ShieldCheck size={10} className="text-primary" /> Verified by Stripe
                          </p>
                        </div>
                      </div>
                      <p className="text-3xl font-black text-primary italic">{selectedItem?.price || "€25"}</p>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] ml-1 mb-2 block italic">Στοιχεία Κάρτας</label>
                        <div className="space-y-px">
                          <input type="text" className="w-full px-6 py-5 rounded-t-2xl bg-white/5 border border-white/5 outline-none placeholder:text-white/10 text-white italic" placeholder="4242 4242 4242 4242" />
                          <div className="flex">
                            <input type="text" className="w-1/2 px-6 py-5 rounded-bl-2xl bg-white/5 border border-white/5 border-r-0 outline-none placeholder:text-white/10 text-white italic" placeholder="MM / YY" />
                            <input type="text" className="w-1/2 px-6 py-5 rounded-br-2xl bg-white/5 border border-white/5 outline-none placeholder:text-white/10 text-white italic" placeholder="CVC" />
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={handlePayment}
                        className="w-full rounded-full h-16 bg-primary text-black font-black text-sm uppercase tracking-widest italic hover:bg-white transition-all shadow-glow flex items-center justify-center gap-3"
                      >
                        <Lock size={16} />
                        Επιβεβαίωση & Πληρωμή
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 3 — Success */}
                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                    className="w-full bg-white/[0.03] border border-white/10 p-12 md:p-16 rounded-[3rem] text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }} animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                      className="w-20 h-20 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-8 shadow-glow"
                    >
                      <CheckCircle2 size={38} className="text-primary" />
                    </motion.div>
                    <h2 className="font-display text-3xl font-black italic uppercase tracking-tighter mb-3">Η θέση σου κατοχυρώθηκε!</h2>
                    <p className="text-white/40 italic mb-10 leading-relaxed">Θα λάβεις email επιβεβαίωσης σύντομα. Τα λεπτομέρειες σε 24h πριν το workshop.</p>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="rounded-full px-12 h-14 border border-white/10 hover:border-primary/40 font-black uppercase tracking-widest text-sm italic hover:bg-white hover:text-black transition-all"
                    >
                      Κλείσιμο
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Academy;
