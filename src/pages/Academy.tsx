import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
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
import Magnetic from "@/components/Magnetic";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

/* ══════════════════════════════════════════════════════
   DATA
══════════════════════════════════════════════════════ */

const workshops = [
  // 1. FOUNDATION (AI & Strategy)
  {
    icon: Cpu,
    badge: "Βήμα 1: The Idea",
    title: "1. Idea & AI Blueprint",
    desc: "Η αρχή των πάντων. Πώς να χρησιμοποιήσεις το AI για να στήσεις, να ορίσεις και να επικυρώσεις την ιδέα σου πριν γράψεις γραμμή κώδικα.",
    duration: "Τρίτη 26 Μαΐου | 19:30 - 21:00",
    price: "€49",
    stripeUrl: "https://buy.stripe.com/fZu7sE3bMbYE4i58060co01",
    outcomes: ["Ορισμός του Business Model με AI", "Ανάλυση ανταγωνισμού σε δευτερόλεπτα"],
  },
  {
    icon: Sparkles,
    badge: "Βήμα 2: AI Copywriting",
    title: "2. Master The Prompt",
    desc: "Μάθε πώς να 'μιλάς' στο AI για να γράψει το ιδανικό κείμενο (copy) για την ιστοσελίδα και το project σου.",
    duration: "Πέμπτη 28 Μαΐου | 19:30 - 21:00",
    price: "€49",
    stripeUrl: "https://buy.stripe.com/fZu7sE3bMbYE4i58060co01",
    outcomes: ["Δημιουργία Sales Copy με AI", "Τα δικά σου custom prompts"],
  },
  {
    icon: CircleDollarSign,
    badge: "Βήμα 3: The Offer",
    title: "3. The Irresistible Offer",
    desc: "Τι ακριβώς θα πουλήσεις μέσα από το site σου; Στήσε πακέτα και υπηρεσίες που οι πελάτες νιώθουν 'χαζοί' να αρνηθούν.",
    duration: "Σάββατο 30 Μαΐου | 19:30 - 21:00",
    price: "€49",
    stripeUrl: "https://buy.stripe.com/fZu7sE3bMbYE4i58060co01",
    outcomes: ["Στρατηγική Premium Pricing", "Επανασχεδιασμός του Offer σου"],
  },
  {
    icon: ShieldCheck,
    badge: "Βήμα 4: Branding",
    title: "4. Brand Identity & Vibe",
    desc: "Η αισθητική δικαιολογεί την τιμή σου. Πώς θα φαίνεται το brand σου πριν καν ξεκινήσουμε να χτίζουμε την ιστοσελίδα.",
    duration: "Τρίτη 2 Ιουνίου | 19:30 - 21:00",
    price: "€49",
    stripeUrl: "https://buy.stripe.com/fZu7sE3bMbYE4i58060co01",
    outcomes: ["Το Visual Moodboard του brand σου", "Οδηγός αισθητικής (Quiet Luxury)"],
  },

  // 2. BUILDING THE WEBSITE
  {
    icon: Globe,
    badge: "Βήμα 5: Web Strategy",
    title: "5. Website Architecture",
    desc: "Το site σου δεν είναι ψηφιακό φυλλάδιο, είναι ο 24/7 πωλητής σου. Πώς να δομήσεις τις σελίδες σου στρατηγικά.",
    duration: "Πέμπτη 4 Ιουνίου | 19:30 - 21:00",
    price: "€49",
    stripeUrl: "https://buy.stripe.com/fZu7sE3bMbYE4i58060co01",
    outcomes: ["Wireframe του site στο χαρτί", "User Journey Mapping"],
  },
  {
    icon: MousePointerClick,
    badge: "Βήμα 6: Landing Page",
    title: "6. High-Converting Pages",
    desc: "Η ανατομία μιας σελίδας που μετατρέπει τους επισκέπτες σε πελάτες. Hooks, Social Proof και CTAs.",
    duration: "Σάββατο 6 Ιουνίου | 19:30 - 21:00",
    price: "€49",
    stripeUrl: "https://buy.stripe.com/fZu7sE3bMbYE4i58060co01",
    outcomes: ["Σχεδιασμός της κεντρικής σελίδας", "Ψυχολογία πωλήσεων στο web"],
  },
  {
    icon: Wrench,
    badge: "Βήμα 7: Build It",
    title: "7. The No-Code Build",
    desc: "Ήρθε η ώρα της υλοποίησης. Στήσε την ιστοσελίδα σου πρακτικά στην οθόνη, χρησιμοποιώντας σύγχρονα No-Code εργαλεία.",
    duration: "Τρίτη 9 Ιουνίου | 19:30 - 21:00",
    price: "€49",
    stripeUrl: "https://buy.stripe.com/fZu7sE3bMbYE4i58060co01",
    outcomes: ["Μεταφορά του wireframe στην οθόνη", "Hands-on Website Building"],
  },
  {
    icon: Target,
    badge: "Βήμα 8: Go Live",
    title: "8. The Launch Protocol",
    desc: "Συνδέουμε domains, ελέγχουμε την ταχύτητα και την εμπειρία (UX) και πατάμε Publish. Το site σου είναι Live.",
    duration: "Πέμπτη 11 Ιουνίου | 19:30 - 21:00",
    price: "€49",
    stripeUrl: "https://buy.stripe.com/fZu7sE3bMbYE4i58060co01",
    outcomes: ["Το πρώτο σου λειτουργικό Live Site", "Τελικός έλεγχος (QA & SEO basics)"],
  },

  // 3. AUTOMATION & SYSTEMS
  {
    icon: Activity,
    badge: "Βήμα 9: Funnels",
    title: "9. The 1st Funnel",
    desc: "Τώρα που το site είναι live, τι γίνεται; Πώς να στήσεις το πρώτο σου Customer Journey για να 'πιάσεις' τα leads.",
    duration: "Σάββατο 13 Ιουνίου | 19:30 - 21:00",
    price: "€49",
    stripeUrl: "https://buy.stripe.com/fZu7sE3bMbYE4i58060co01",
    outcomes: ["Το Funnel Map σου", "Ορισμός των Conversion Points"],
  },
  {
    icon: Zap,
    badge: "Βήμα 10: Automations",
    title: "10. Backend Automations",
    desc: "Όταν κάποιος συμπληρώνει μια φόρμα στο νέο σου site, τι συμβαίνει στο παρασκήνιο; Μάθε πώς να αυτοματοποιείς τα πάντα.",
    duration: "Τρίτη 16 Ιουνίου | 19:30 - 21:00",
    price: "€49",
    stripeUrl: "https://buy.stripe.com/fZu7sE3bMbYE4i58060co01",
    outcomes: ["1 ενεργός αυτοματισμός με Zapier/Make", "Auto-reply emails"],
  },
  {
    icon: Users,
    badge: "Βήμα 11: Psychology",
    title: "11. Buyer's Brain",
    desc: "Πώς θα φέρεις κόσμο στο site που πραγματικά θέλει να αγοράσει. Τι πυροδοτεί την απόφαση αγοράς.",
    duration: "Πέμπτη 18 Ιουνίου | 19:30 - 21:00",
    price: "€49",
    stripeUrl: "https://buy.stripe.com/fZu7sE3bMbYE4i58060co01",
    outcomes: ["Εφαρμογή Psychological Triggers", "Κατανόηση των αγοραστικών εμποδίων"],
  },
  {
    icon: TrendingUp,
    badge: "Βήμα 12: Traffic Strategy",
    title: "12. Revenue Marketing",
    desc: "Πώς θα φέρεις επισκέπτες στο νέο σου website. Μια καθαρή Go-To-Market στρατηγική που φέρνει μετρήσιμο κέρδος.",
    duration: "Σάββατο 20 Ιουνίου | 19:30 - 21:00",
    price: "€49",
    stripeUrl: "https://buy.stripe.com/fZu7sE3bMbYE4i58060co01",
    outcomes: ["Mini Growth Strategy", "Ξεκάθαρο Positioning"],
  },

  // 4. CONTENT & SCALE
  {
    icon: BookOpen,
    badge: "Βήμα 13: Content Strategy",
    title: "13. Strategic Content",
    desc: "Σταμάτα να ποστάρεις στην τύχη. Πώς να δημιουργήσεις content που στέλνει στοχευμένο traffic στο site σου.",
    duration: "Τρίτη 23 Ιουνίου | 19:30 - 21:00",
    price: "€49",
    stripeUrl: "https://buy.stripe.com/fZu7sE3bMbYE4i58060co01",
    outcomes: ["Τα δικά σου Content Pillars", "Στρατηγική περιεχομένου 30 ημερών"],
  },
  {
    icon: Brain,
    badge: "Βήμα 14: Content Machine",
    title: "14. AI Content Machine",
    desc: "Πώς να παράγεις τα posts ενός ολόκληρου μήνα σε 1 απόγευμα με τη βοήθεια της τεχνητής νοημοσύνης.",
    duration: "Πέμπτη 25 Ιουνίου | 19:30 - 21:00",
    price: "€49",
    stripeUrl: "https://buy.stripe.com/fZu7sE3bMbYE4i58060co01",
    outcomes: ["1 έτοιμο Content Set (Visual + Copy)", "Το προσωπικό σου AI Pipeline"],
  },
  {
    icon: Megaphone,
    badge: "Βήμα 15: Ads & Copy",
    title: "15. Persuasive Copywriting",
    desc: "Λέξεις που πουλάνε. Πώς να γράφεις διαφημίσεις και social posts που μαγνητίζουν την προσοχή του πελάτη.",
    duration: "Σάββατο 27 Ιουνίου | 19:30 - 21:00",
    price: "€49",
    stripeUrl: "https://buy.stripe.com/fZu7sE3bMbYE4i58060co01",
    outcomes: ["3 έτοιμα High-Converting κείμενα", "Εξοικείωση με τα copywriting frameworks"],
  },
  {
    icon: Award,
    badge: "Βήμα 16: The Empire",
    title: "16. Brand Authority",
    desc: "Από ένα απλό site, στο απόλυτο Authority. Πώς να χτίσεις τυφλή εμπιστοσύνη και να κλιμακώσεις (scale) το project σου.",
    duration: "Τρίτη 30 Ιουνίου | 19:30 - 21:00",
    price: "€49",
    stripeUrl: "https://buy.stripe.com/fZu7sE3bMbYE4i58060co01",
    outcomes: ["Το Core Brand Story σου", "Scale Plan για τους επόμενους μήνες"],
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
    "Στρατηγική βασισμένη σε αληθινά νούμερα, όχι υποθέσεις",
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
    question: "Χρειάζομαι τεχνικές γνώσεις ή εμπειρία για να συμμετέχω;",
    answer: "Όχι. Η 'Αλυσίδα' είναι σχεδιασμένη ώστε να σε πάει από το απόλυτο μηδέν μέχρι την πλήρη κυκλοφορία του project σου. Χρησιμοποιούμε No-Code εργαλεία και AI για να παρακάμψουμε την πολυπλοκότητα.",
  },
  {
    question: "Ποια είναι η διάρκεια και το πρόγραμμα των μαθημάτων;",
    answer: "Κάθε μάθημα διαρκεί ακριβώς 1,5 ώρα (19:30 - 21:00). Τα μαθήματα γίνονται 3 φορές την εβδομάδα (Τρίτη, Πέμπτη, Σάββατο) ξεκινώντας από τις 26 Μαΐου.",
  },
  {
    question: "Πόσες θέσεις υπάρχουν;",
    answer: "Υπάρχει αυστηρό όριο 6 ατόμων ανά τμήμα. Αυτό διασφαλίζει ότι υπάρχει χρόνος για να δουλέψουμε πάνω στο δικό σου, προσωπικό project χωρίς εκπτώσεις στην ποιότητα.",
  },
  {
    question: "Γίνονται τα μαθήματα online;",
    answer: "Όχι. Τα συγκεκριμένα classes διεξάγονται αποκλειστικά δια ζώσης στο Hustle Space (Χανιά). Πιστεύουμε στην αξία της φυσικής συνεργασίας (in-person execution) για να χτιστούν άμεσα και πραγματικά αποτελέσματα.",
  },
  {
    question: "Τι θα έχω καταφέρει στο τέλος;",
    answer: "Δεν θα φύγεις απλώς με σημειώσεις. Θα έχεις μια ολοκληρωμένη ψηφιακή παρουσία: με καθαρό brand, έτοιμο website, αυτοματοποιημένα funnels, και ξεκάθαρη στρατηγική περιεχομένου και marketing.",
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
  const { t } = useLanguage();
  
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
    // SEO: Page Title
    document.title = "Σεμινάρια Marketing, AI & Web Κρήτη (Χανιά, Ηράκλειο) | Hustle Academy";
    
    // SEO: Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', "Τα κορυφαία πρακτικά σεμινάρια Digital Marketing, Τεχνητής Νοημοσύνης (AI) και Αυτοματισμών σε όλη την Κρήτη (Χανιά, Ηράκλειο, Ρέθυμνο, Λασίθι).");

    // SEO: Structured Data (JSON-LD)
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Hustle Labs Academy",
      "description": "Πρακτικά workshops Digital Marketing, Websites & AI σε όλη την Κρήτη.",
      "provider": {
        "@type": "Organization",
        "name": "Hustle Labs",
        "sameAs": "https://hustlelabs.gr"
      },
      "areaServed": [
        { "@type": "City", "name": "Χανιά" },
        { "@type": "City", "name": "Ηράκλειο" },
        { "@type": "City", "name": "Ρέθυμνο" },
        { "@type": "City", "name": "Άγιος Νικόλαος" },
        { "@type": "AdministrativeArea", "name": "Κρήτη" }
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
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const openModal = (item?: any) => {
    if (item?.stripeUrl) {
      window.location.href = item.stripeUrl;
    } else {
      window.location.href = `mailto:hello@hustlelabs.gr?subject=${encodeURIComponent("Application: " + (item?.name || 'Academy'))}`;
    }
  };

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

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
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/80 italic">Hustle Academy · Χανιά</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
              className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-12 uppercase italic"
            >
              Ξεκίνα να χτίζεις <br />
              <span className="text-primary block group-hover:scale-[1.02] transition-transform duration-700">αυτό που φαντάζεσαι.</span>
            </motion.h1>

            <div className="space-y-12 mb-16">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as any }}
                className="font-display text-xl md:text-2xl lg:text-3xl font-medium text-white/50 tracking-tight italic max-w-3xl mx-auto"
              >
                Think Wild. Build Smart. <br className="hidden md:block" />
                <span className="text-white/20">Μετάτρεψε τη θεωρία σε πραγματικό execution.</span>
              </motion.p>
              
              <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ duration: 1, delay: 0.3 }}
                 className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-primary font-black uppercase tracking-[0.5em] text-xs md:text-sm italic"
              >
                <span>AI First.</span>
                <span>Real Projects.</span>
                <span>Zero Theory.</span>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as any }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Magnetic strength={0.2}>
                <Button size="xl" className="w-full sm:w-auto rounded-full px-12 h-20 text-lg font-black group bg-primary text-black hover:bg-white transition-all border-none italic shadow-glow-strong" onClick={() => scrollTo("workshops")}>
                  Δες τα Workshops
                  <ArrowDown size={20} className="ml-2 group-hover:translate-y-1 transition-transform" />
                </Button>
              </Magnetic>
              <Magnetic strength={0.3}>
                <Button variant="outline" size="xl" className="w-full sm:w-auto rounded-full px-12 h-20 text-lg font-black border-white/10 hover:bg-white hover:text-black transition-all italic" asChild>
                  <Link to="/contact">Αίτηση Συμμετοχής</Link>
                </Button>
              </Magnetic>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <motion.div 
          animate={{ y: [0, -20, 0], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-primary/10 blur-[120px] pointer-events-none"
        />
      </section>

      {/* ════════════════════════════════════════
          2. INTRO STATEMENT
      ════════════════════════════════════════ */}
      <section className="py-32 md:py-48 relative border-t border-white/5 overflow-hidden bg-[#0a0a0a]">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fadeUp} className="max-w-5xl mx-auto text-center">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-10 block italic">Το Μανιφέστο μας</span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-8xl font-normal tracking-normal leading-[1.1] mb-14 uppercase italic px-2">
              Ξέχνα τα videos. <br />
              Κάψε τις σημειώσεις. <br />
              <span className="text-white/20">Γίνε ο δημιουργός.</span>
            </h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              <p className="text-xl md:text-3xl font-medium text-white/90 leading-tight tracking-tight">
                Η γνώση χωρίς πράξη είναι απλώς θόρυβος. Εδώ, η γνώση αποκτά μορφή, κίνηση και αξία.
              </p>
              <p className="text-lg md:text-xl font-normal text-white/50 leading-relaxed">
                Δεν φεύγεις με μια λίστα από "θα". Φεύγεις με το δικό σου project έτοιμο να κατακτήσει την αγορά. 
                Εδώ δεν μαθαίνουμε. Εδώ εκτελούμε.
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
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-primary/80 mb-10 italic">Μετάτρεψε τη θεωρία σε δύναμη.</p>
                <p className="text-lg md:text-xl text-white/60 leading-relaxed pr-4">
                  {i === 0 && "Το AI δεν θα σε αντικαταστήσει. Θα σε κάνει ανίκητο. Μάθε να το ελέγχεις πριν γίνει ο κανόνας."}
                  {i === 1 && "Μην ψάχνεις για πελάτες. Φτιάξε ένα σύστημα που τους κάνει να σε ψάχνουν αυτοί."}
                  {i === 2 && "Η ιδέα σου δεν αξίζει τίποτα χωρίς το execution. Εδώ, η ιδέα σου γίνεται πραγματικότητα σε λίγες ώρες."}
                </p>
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
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-8 block italic">16 Δια Ζωσης Classes · Μονο 6 Διαθεσιμες Θεσεις</span>
            <h2 className="font-display text-3xl md:text-6xl lg:text-7xl font-normal tracking-normal leading-[1.1] mb-8 italic uppercase">
              Η απόλυτη <span className="text-white/20 tracking-normal">Αλυσίδα.</span>
            </h2>
            <p className="text-xl text-white/60 font-medium mb-8 max-w-2xl italic">
              16 δια ζώσης μαθήματα στο Lab, δομημένα σαν αλυσίδα: <span className="text-primary font-black">Από τη σύλληψη της ιδέας, στο χτίσιμο και λανσάρισμα του Website, μέχρι το Marketing και τις Πωλήσεις.</span> Κάθε μάθημα διαρκεί 1,5 ώρα. Κάθε μάθημα ένα χειροπιαστό αποτέλεσμα. Ξεκινάμε από <span className="text-white font-bold">26 Μαΐου</span>.
            </p>
            <div className="flex flex-wrap gap-4">
               <span className="px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-widest italic">Τριτη, Πεμπτη, Σαββατο</span>
               <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/50 text-[10px] font-black uppercase tracking-widest italic">19:30 - 21:00</span>
            </div>
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
                  <h3 className="font-display text-2xl md:text-4xl font-bold uppercase italic mb-6 tracking-tight leading-none group-hover:text-primary transition-colors">{w.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed mb-12 px-4">{w.desc}</p>

                  {/* Outcomes */}
                  <ul className="grid grid-cols-1 gap-y-4 mb-14 text-left border-t border-white/5 pt-10">
                    {w.outcomes.map((o, j) => (
                      <li key={j} className="flex items-start gap-4 text-xs font-medium text-white/70 border-l border-primary/20 pl-6 transition-all">
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
          <motion.div {...fadeUpDelay(0.3)} className="mt-16 md:mt-24 max-w-5xl mx-auto">
            <div className="group relative p-10 md:p-16 rounded-[3rem] md:rounded-[4rem] glass-card flex flex-col md:flex-row items-center gap-10 overflow-hidden hover:shadow-glow-strong/10 transition-all duration-700">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-10 bg-gradient-to-b from-primary/40 to-transparent group-hover:h-32 transition-all duration-1000" />
              <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
              
              <div className="relative z-10 flex-1 text-center md:text-left">
                <span className="text-[9px] font-black uppercase tracking-[0.5em] text-primary/60 block mb-4 italic">The Master Pass</span>
                <h3 className="font-display text-3xl md:text-5xl font-bold uppercase italic tracking-tight mb-4 group-hover:text-primary transition-colors leading-[1.1]">Ξεκλείδωσε όλη την Αλυσίδα.</h3>
                <p className="text-white/60 text-base md:text-lg leading-relaxed">
                  Απεριόριστη συμμετοχή και στα 16 μαθήματα (AI, Websites, Marketing, Content). <strong className="text-white font-bold">Εξοικονόμηση €294</strong> σε σχέση με την αγορά τους ένα-ένα.
                </p>
              </div>
              
              <div className="relative z-10 shrink-0 text-center flex flex-col items-center md:items-end border-t md:border-t-0 md:border-l border-white/5 pt-8 md:pt-0 md:pl-10 mt-4 md:mt-0 w-full md:w-auto">
                <div className="flex flex-col items-center gap-2 mb-8">
                  <span className="text-[10px] font-black text-white/20 uppercase tracking-widest italic line-through decoration-primary/30">ΑΝΤΙ ΓΙΑ €784</span>
                  <span className="text-5xl md:text-6xl font-black text-primary italic tracking-tight leading-none">€490</span>
                </div>
                <Button
                  size="xl"
                  onClick={() => openModal({ name: "The Master Pass", stripeUrl: "https://buy.stripe.com/28E14g3bM0fW01Pcgm0co00" })}
                  className="w-full md:w-auto rounded-full px-10 h-16 bg-white text-black hover:bg-primary transition-all border-none font-black text-xs uppercase tracking-widest italic shadow-xl group-hover:shadow-glow"
                >
                  Αγορά Master Pass
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          5. 8-WEEK PROGRAM
      ════════════════════════════════════════ */}
      <section className="py-32 md:py-48 relative border-t border-white/5 bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(208,255,0,0.05),transparent_60%)] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">

          {/* Header */}
          <motion.div {...fadeUp} className="max-w-5xl mx-auto mb-20 md:mb-32">
            <div className="flex items-center gap-4 mb-8">
               <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary italic">Flagship Program</span>
               <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
            </div>
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 lg:items-center">
              <div className="flex-1">
                <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-normal tracking-normal leading-[1.1] mb-8 uppercase italic">
                  Build From <br /><span className="text-primary drop-shadow-[0_0_30px_rgba(208,255,0,0.2)]">Zero.</span>
                </h2>
                <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-xl mb-6 italic">
                  8 εβδομάδες. Ένα project από μηδέν μέχρι launch.<br />
                  Δεν θα φύγεις με γνώσεις. <strong className="text-white">Θα φύγεις με κάτι που υπάρχει.</strong>
                </p>
                <p className="text-xs font-black uppercase tracking-[0.3em] text-primary/60 mb-12 italic leading-relaxed">
                  2 φορές / εβδομάδα (3 ώρες ανά session) <br />
                  Δευτέρα, Τετάρτη & Παρασκευή | 18:00 - 21:00
                </p>
                <div className="flex flex-wrap items-center gap-4">
                   <div className="px-6 py-4 rounded-full border border-primary/30 bg-primary/10 flex items-center gap-3 shadow-glow-strong/20">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <span className="text-xs font-black uppercase tracking-[0.2em] text-primary italic">Εναρξη: 25 Μαιου 2026</span>
                   </div>
                   <Button 
                     size="xl" 
                     onClick={() => openModal({ name: "Build From Zero — 8 Week Program", price: "€1.400", stripeUrl: "https://buy.stripe.com/00wdR2bIi9Qwg0NgwC0co02" })}
                     className="rounded-full px-10 h-14 bg-white text-black hover:bg-primary transition-all border-none font-black text-xs uppercase tracking-widest italic shadow-xl"
                   >
                     Κλεισε Θεση
                   </Button>
                </div>
              </div>
              <div className="shrink-0 text-center flex flex-col items-center justify-center p-10 md:p-14 rounded-[3rem] border border-primary/20 bg-gradient-to-b from-primary/10 to-transparent relative overflow-hidden group">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/80 mb-4 italic">Strictly</p>
                <p className="font-display text-8xl md:text-9xl font-black text-primary italic leading-none drop-shadow-[0_0_40px_rgba(208,255,0,0.3)] group-hover:scale-105 transition-transform duration-700">6</p>
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 italic mt-6">Θεσεις ανα κυκλο</p>
              </div>
            </div>
          </motion.div>

          {/* Curriculum Timeline */}
          <div className="max-w-5xl mx-auto mb-20 md:mb-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { week: "01", title: "Idea Breakdown", desc: "Validation, target audience, competitor analysis & positioning. Ξεκάθαρη ιδέα + κοινό." },
                { week: "02", title: "Branding & Offer", desc: "Brand identity, value proposition & irresistible offer. Το πρώτο 'wow'." },
                { week: "03", title: "Product Build", desc: "Δομή υπηρεσίας, pricing strategy & funnels. Έτοιμο προϊόν." },
                { week: "04", title: "Website / Landing", desc: "Η Hustle Labs κατασκευάζει μαζί σου την ιστοσελίδα σου. Landing page που πουλάει, με UX psychology. Φεύγεις με live site." },
                { week: "05", title: "Content Machine", desc: "Δημιουργούμε μαζί το περιεχόμενο για το site σου. Content pillars, video strategy & AI παραγωγή. 10–20 έτοιμα pieces." },
                { week: "06", title: "Marketing System", desc: "Funnels, email basics & audience building. Σύστημα, όχι τυχαία posts." },
                { week: "07", title: "Sales & Launch", desc: "Closing techniques, soft selling & πρώτο launch. Πρώτες πωλήσεις." },
                { week: "08", title: "Scale & Next Move", desc: "Optimization, scaling ideas & automation. Plan για growth." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  {...fadeUpDelay(i * 0.05)}
                  className="group flex gap-6 p-7 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-primary/20 transition-all duration-500"
                >
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:border-transparent transition-all duration-500">
                    <span className="text-xs font-black text-primary group-hover:text-black transition-colors">{item.week}</span>
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.4em] text-primary/60 mb-2 italic">Week {i + 1}</p>
                    <h3 className="text-base font-bold uppercase tracking-wider mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Pricing Card */}
          <motion.div {...fadeUpDelay(0.2)} className="max-w-5xl mx-auto">
            <div className="relative rounded-[3rem] md:rounded-[4rem] overflow-hidden glass-card group hover:shadow-glow-strong/10 transition-all duration-700">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-10 bg-gradient-to-b from-primary/40 to-transparent group-hover:h-32 transition-all duration-1000" />
              <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2">
                {/* Left — Copy */}
                <div className="p-10 md:p-16 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-center">
                  <span className="text-[9px] font-black uppercase tracking-[0.5em] text-primary/60 block mb-4 italic">8 Weeks · Max 6 Ατομα</span>
                  <h3 className="font-display text-4xl md:text-6xl font-bold uppercase mb-6 leading-[1.1] tracking-tight italic group-hover:text-primary transition-colors">
                    Build From Zero
                  </h3>
                  <p className="text-white/60 text-base md:text-lg leading-relaxed mb-10 italic">
                    8 εβδομάδες. Ένα project από μηδέν μέχρι launch.<br />
                    Δεν θα φύγεις με γνώσεις. <strong className="text-white font-bold italic underline decoration-primary/30 underline-offset-8">Θα φύγεις με κάτι που υπάρχει.</strong>
                  </p>
                  <ul className="space-y-4 border-t border-white/5 pt-8">
                    {[
                      "8 εβδομάδες εντατικής υλοποίησης",
                      "2 φορές / εβδομάδα (3 ώρες ανά session)",
                      "Δευτέρα, Τετάρτη & Παρασκευή | 18:00 - 21:00",
                      "Live sessions + recordings",
                      "1-on-1 feedback σε κάθε εβδομάδα",
                      "Private community & support",
                      "Μέγιστο 6 συμμετέχοντες ανά κύκλο"
                    ].map((b, i) => (
                      <li key={i} className="flex items-center gap-4 text-xs font-medium text-white/70 border-l border-primary/20 pl-6 transition-all">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right — Pricing */}
                <div className="p-10 md:p-16 flex flex-col justify-center">
                  <div className="space-y-4 mb-10">
                    {/* Early Bird */}
                    <div className="p-8 rounded-[2rem] border border-primary/30 bg-primary/5 relative overflow-hidden group/price hover:bg-primary/10 transition-all duration-500">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(208,255,0,0.1),transparent_70%)] pointer-events-none" />
                      <div className="flex items-center justify-between mb-4 relative z-10">
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary italic">Εκπτωση εγκαιρης εγγραφης</p>
                        <span className="text-[9px] font-black uppercase tracking-widest text-black bg-primary px-3 py-1 rounded-full shrink-0 ml-2 shadow-glow">EARLY BIRD</span>
                      </div>
                      <p className="text-6xl font-black text-primary leading-none tracking-tight italic drop-shadow-[0_0_20px_rgba(208,255,0,0.3)]">€1.400</p>
                    </div>
                    {/* Regular */}
                    <div className="p-6 rounded-[2rem] border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all">
                      <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 italic mb-2">Κανονικη τιμη</p>
                      <p className="text-4xl font-black text-white/50 leading-none tracking-tight italic">€1.800</p>
                    </div>
                    {/* Payment Plan */}
                    <div className="p-6 rounded-[2rem] border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all">
                      <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 italic mb-2">Δοσεις</p>
                      <p className="text-3xl font-black text-white/40 leading-none tracking-tight italic">3 × €600</p>
                    </div>
                  </div>

                  <Button
                    size="xl"
                    onClick={() => openModal({ name: "Build From Zero — 8 Week Program", price: "€1.400", stripeUrl: "https://buy.stripe.com/00wdR2bIi9Qwg0NgwC0co02" })}
                    className="w-full rounded-full h-18 bg-white text-black font-black text-xs uppercase tracking-widest italic hover:bg-primary transition-all border-none shadow-xl group-hover:shadow-glow"
                  >
                    Κλεισε Θεση
                  </Button>
                  <p className="text-center text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mt-6 italic">Μονο 6 θεσεις. Κλεινουν γρηγορα.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ════════════════════════════════════════
          6. PRIVATE MENTORING
      ════════════════════════════════════════ */}
      <section className="py-32 md:py-48 relative border-t border-white/5 bg-[#050505]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(208,255,0,0.04),transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">

          <motion.div {...fadeUp} className="text-center mb-20 md:mb-32 max-w-5xl mx-auto">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-10 block italic">Η Απόλυτη Εστίαση</span>
            <h2 className="font-display text-4xl md:text-7xl lg:text-9xl font-normal tracking-normal italic uppercase leading-[1.1] mb-8">
              Private <br /><span className="text-white/20">Alchemy.</span>
            </h2>
            <p className="text-primary font-black uppercase tracking-[0.4em] text-lg md:text-2xl italic animate-pulse">
              90 λεπτά που θα αλλάξουν την τροχιά του business σου.
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
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-primary/80 mb-6 italic">Δουλεύουμε αποκλειστικά πάνω στο δικό σου project.</p>
                <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-10">
                  Δεν δίνουμε γενικές συμβουλές. Σου δείχνουμε ακριβώς τι να κάνεις και πώς.
                </p>
                <ul className="grid grid-cols-1 gap-y-5">
                  {priveMentoring.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-4 text-sm font-medium text-white/70 border-l border-primary/20 pl-6 transition-colors">
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
                  onClick={() => openModal({ name: "Private Mentoring", price: "€120", stripeUrl: "https://buy.stripe.com/28EfZabIi1k0aGtgwC0co03" })}
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

                <p className="text-white/80 text-lg leading-relaxed mb-10 font-medium">
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
                      <p className="pb-8 text-white/70 text-base md:text-lg font-normal leading-relaxed pl-0 border-l border-primary/40 pl-6">
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
          8. NEWSLETTER / LEAD MAGNET
      ════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden bg-[#050505]">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div 
            {...fadeUp}
            className="max-w-5xl mx-auto p-10 md:p-20 rounded-[3rem] md:rounded-[4rem] glass-card border border-white/10 relative group overflow-hidden"
          >
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary/10 blur-[100px] pointer-events-none" />
            
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 text-center lg:text-left">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-6 block italic">{t('academy.newsletter.badge')}</span>
                <h2 className="font-display text-3xl md:text-5xl font-black italic uppercase tracking-tighter mb-6 leading-tight">
                  {t('academy.newsletter.title1')} <br />
                  <span className="text-white/20">{t('academy.newsletter.title2')}</span>
                </h2>
                <p className="text-white/50 text-base md:text-lg leading-relaxed italic">
                  {t('academy.newsletter.text')}
                </p>
              </div>

              <div className="w-full lg:w-auto min-w-[320px] md:min-w-[400px]">
                <form 
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const email = (e.target as any).email.value;
                    try {
                      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
                      const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
                      
                      const response = await fetch(`${supabaseUrl}/functions/v1/newsletter-signup`, {
                        method: "POST",
                        headers: { 
                          'Content-Type': 'application/json',
                          'Authorization': `Bearer ${supabaseAnonKey}`
                        },
                        body: JSON.stringify({ email }),
                      });
                      if (response.ok) {
                        toast({ title: "Welcome to the Circle!", description: "Τσέκαρε το email σου για το πρώτο δώρο." });
                        (e.target as any).reset();
                      } else {
                        toast({ title: "Error", description: "Κάτι πήγε στραβά. Δοκίμασε ξανά.", variant: "destructive" });
                      }
                    } catch (err) {
                      toast({ title: "Error", description: "Κάτι πήγε στραβά. Δοκίμασε ξανά.", variant: "destructive" });
                    }
                  }}
                  className="relative space-y-4"
                >
                  <div className="relative">
                    <input 
                      type="email" 
                      name="email"
                      required
                      placeholder={t('academy.newsletter.placeholder')}
                      className="w-full px-8 py-6 rounded-full bg-white/5 border border-white/10 focus:border-primary/40 focus:bg-white/10 transition-all outline-none italic text-white placeholder:text-white/20"
                    />
                    <Button 
                      type="submit"
                      className="absolute right-2 top-2 bottom-2 rounded-full px-8 bg-white text-black hover:bg-primary font-black uppercase text-[10px] tracking-widest italic shadow-xl"
                    >
                      {t('academy.newsletter.button')}
                    </Button>
                  </div>
                  <p className="text-[9px] text-white/20 uppercase tracking-widest text-center italic font-bold">
                    {t('academy.newsletter.social')}
                  </p>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          9. FINAL CTA
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

            <p className="text-2xl md:text-4xl font-display font-black text-primary italic tracking-[0.2em] uppercase">
              Think Wild. Build Smart.
            </p>
          </motion.div>
        </div>
      </section>


    </div>
  );
};

export default Academy;
