import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Globe, Megaphone, Bot, Lightbulb, ArrowRight, CheckCircle2, Clock, Users, Layers, Settings, Zap, Target, Palette, Mic, Code2, Rocket, Sparkles, Star, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion from "@/components/FAQAccordion";
import PageHero from "@/components/PageHero";
import LabBackground from "@/components/LabBackground";
import { type LucideIcon } from "lucide-react";

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
}

const categories: ServiceCategory[] = [
  {
    icon: Globe,
    title: "Next-Gen Websites",
    outcome: "Websites που φέρνουν conversions, όχι απλά επισκέψεις.",
    intro: "Όχι templates, όχι page builders. Custom websites σχεδιασμένα από το μηδέν, γρήγορα, responsive και φτιαγμένα για να μετατρέπουν επισκέπτες σε πελάτες.",
    includes: [
      "Custom UI/UX design βασισμένο στους στόχους σου",
      "Mobile-first responsive ανάπτυξη",
      "SEO optimization & ταχύτητα (<2s load)",
      "CMS integration για εύκολη διαχείριση περιεχομένου",
      "Analytics setup & conversion tracking",
    ],
    bestFor: [
      "Επιχειρήσεις που θέλουν επαγγελματική online παρουσία",
      "Brands που ξεπέρασαν το template τους",
    ],
    timeline: "2-5 εβδομάδες",
    color: "text-primary",
    borderColor: "border-primary/20",
    bgIcon: "bg-primary/10",
    accentGradient: "from-primary/20 to-primary/5",
    ctaLink: "/websites",
    direction: "Ιδανικό αν δεν έχεις website που φέρνει αποτέλεσμα",
    ctaLabel: "Δες Περισσότερα",
    badge: "Most Popular",
  },
  {
    icon: Megaphone,
    title: "Ads & Growth Systems",
    outcome: "Marketing που βασίζεται σε data, όχι σε guesswork.",
    intro: "Καμπάνιες που φέρνουν αποτελέσματα, όχι απλά impressions. Στήνουμε ολοκληρωμένα συστήματα, από το πρώτο click μέχρι την πώληση.",
    includes: [
      "Google & Meta Ads setup και διαχείριση",
      "Landing pages & sales funnels",
      "Email marketing & αυτοματοποιημένα sequences",
      "Lead magnets & opt-in στρατηγικές",
      "Performance reporting & optimization",
    ],
    bestFor: [
      "Businesses που θέλουν σταθερή ροή leads & πελατών",
      "E-shops που θέλουν scalable πωλήσεις",
    ],
    timeline: "2-4 εβδομάδες για setup",
    color: "text-primary",
    borderColor: "border-primary/20",
    bgIcon: "bg-primary/10",
    accentGradient: "from-primary/20 to-accent/20",
    ctaLink: "/growth",
    direction: "Ιδανικό αν έχεις traffic αλλά όχι conversions",
    ctaLabel: "Δες Περισσότερα",
    badge: "ROI Focused",
  },
  {
    icon: Bot,
    title: "AI & Αυτοματισμοί",
    outcome: "AI που αφαιρεί δουλειά από τα χέρια σου.",
    intro: "Χρησιμοποίησε την τεχνητή νοημοσύνη για να κερδίσεις χρόνο. Από AI Agents μέχρι αυτοματοποιημένα workflows, σε βοηθάμε να δουλεύεις πιο έξυπνα.",
    includes: [
      "Custom AI Agents (Customer Support / Sales)",
      "Automated lead management workflows",
      "Ενσωμάτωση AI σε καθημερινές διαδικασίες",
      "CRM Automations & Email marketing flows",
    ],
    bestFor: [
      "Ομάδες που θέλουν να κάνουν scale χωρίς προσλήψεις",
      "Επιχειρήσεις με επαναλαμβανόμενες χειροκίνητες διαδικασίες",
    ],
    timeline: "1-3 εβδομάδες",
    color: "text-primary",
    borderColor: "border-primary/20",
    bgIcon: "bg-primary/10",
    accentGradient: "from-primary/30 to-accent/10",
    ctaLink: "/ai-lab",
    direction: "Ιδανικό αν έχεις δουλειά που θέλεις να αυτοματοποιήσεις",
    ctaLabel: "Δες Περισσότερα",
    badge: "Cutting Edge",
  },
  {
    icon: Lightbulb,
    title: "Strategy & Content",
    outcome: "Στρατηγική που δίνει κατεύθυνση, όχι απλά ιδέες.",
    intro: "Πριν χτίσεις, χρειάζεσαι σχέδιο. Βοηθάμε επιχειρήσεις να βρουν τη φωνή τους, να στοχεύσουν σωστά και να δημιουργήσουν περιεχομένου που αποδίδει.",
    includes: [
      "Brand positioning & messaging",
      "Content strategy & editorial calendar",
      "SEO keyword research & planning",
      "Social media content direction",
      "Competitor & market analysis",
    ],
    bestFor: [
      "Νέα brands που ξεκινούν και θέλουν σωστές βάσεις",
      "Επιχειρήσεις που θέλουν refresh στην επικοινωνία τους",
    ],
    timeline: "1-2 εβδομάδες",
    color: "text-primary",
    borderColor: "border-primary/20",
    bgIcon: "bg-primary/10",
    accentGradient: "from-primary/10 to-primary/30",
    ctaLink: "/project-brief",
    direction: "Ιδανικό αν δεν έχεις ξεκάθαρη κατεύθυνση",
    ctaLabel: "Δες Περισσότερα",
  },
];

const faqs = [
  { question: "Τι χρειάζομαι για να ξεκινήσω;", answer: "Το μόνο που χρειάζεσαι είναι να έχεις ξεκάθαρους επιχειρηματικούς στόχους. Εμείς αναλαμβάνουμε να σχεδιάσουμε τη στρατηγική και να υλοποιήσουμε όλο το τεχνικό κομμάτι." },
  { question: "Με ποια υπηρεσία πρέπει να ξεκινήσω;", answer: "Εξαρτάται από το στάδιο της επιχείρησής σου. Αν δεν έχεις σωστό website, ξεκινάμε από εκεί. Αν έχεις αλλά δεν φέρνει πωλήσεις, ξεκινάμε από Ads & Marketing." },
  { question: "Πόσο χρόνο παίρνει η υλοποίηση;", answer: "Ένα τυπικό σύστημα (Website + Marketing setup) χρειάζεται 4-6 εβδομάδες για να πάει live. Ωστόσο, μπορούμε να ξεκινήσουμε με επιμέρους phases για ταχύτερα αποτελέσματα." },
  { question: "Μπορώ να ξεκινήσω μόνο με ένα κομμάτι;", answer: "Φυσικά. Μπορείς να ξεκινήσεις από εκεί που έχεις τη μεγαλύτερη ανάγκη (π.χ. ένα νέο website ή AI αυτοματισμούς) και να χτίσουμε το υπόλοιπο σύστημα σταδιακά." },
  { question: "Πότε θα δω αποτέλεσμα;", answer: "Τα websites και οι αυτοματισμοί φέρνουν άμεση βελτίωση στην εμπειρία και το χρόνο σου. Το marketing (Ads) συνήθως χρειάζεται 2-4 εβδομάδες optimization για να πιάσει το μέγιστο ROI." },
  { question: "Υπάρχει support μετά την παράδοση;", answer: "Ναι. Παρέχουμε maintenance, updates και ongoing optimization. Η συνεργασία μας δεν τελειώνει στην παράδοση, αλλά εκεί ξεκινάει η ανάπτυξη." },
  { question: "Πώς ξεκινάω;", answer: "Πάτα 'Ξεκινήστε το Brief', συμπλήρωσε τη φόρμα ή κλείσε ένα Discovery Call για να αναλύσουμε τις ανάγκες σου." },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] as const },
});

const ServiceBlock = ({ service, index }: { service: ServiceCategory; index: number }) => {
  const Icon = service.icon;

  return (
    <motion.div
      {...fadeUp(index * 0.1)}
      className="group relative rounded-[3rem] md:rounded-[4rem] border border-white/5 overflow-hidden bg-white/[0.01] hover:bg-white/[0.02] shadow-2xl hover:-translate-y-2 transition-all duration-700 flex flex-col"
    >
      {/* Decorative accent background */}
      <div className={`absolute -right-20 -top-20 w-80 h-80 rounded-full bg-primary/5 blur-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none`} />

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 p-8 md:p-12 relative z-10 flex-1">
        <div className="flex-1 flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <div className={`w-16 h-16 rounded-2xl ${service.bgIcon} flex items-center justify-center shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-inner`}>
              <Icon size={28} className={service.color} />
            </div>
            <div className="flex flex-col items-end gap-2">
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-primary/40 italic">PART OF THE SYSTEM</span>
              {service.badge && (
                <span className="px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-[10px] font-black uppercase tracking-widest text-primary">
                  {service.badge}
                </span>
              )}
            </div>
          </div>

          <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-4 italic block">{service.outcome}</span>
          <h3 className="font-display text-4xl md:text-5xl font-black text-white mb-6 group-hover:text-primary transition-colors duration-500 tracking-tighter italic uppercase">{service.title}</h3>

          <p className="text-white font-black uppercase text-[11px] tracking-widest bg-primary/10 px-4 py-2 border-l-2 border-primary mb-10 italic inline-block">{service.direction}</p>
          <p className="text-white/40 text-lg leading-relaxed mb-10 max-w-xl font-medium italic pr-4">{service.intro}</p>

          <div className="mt-auto">
            <div className="flex flex-wrap gap-4 mb-10">
              <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/5">
                <Clock size={16} className="text-primary" />
                <span className="text-xs font-bold text-white/30 font-display uppercase tracking-wider italic">{service.timeline}</span>
              </div>
              <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/5">
                <Star size={16} className="text-primary" />
                <span className="text-xs font-bold text-white/30 font-display uppercase tracking-wider italic">Premium Service</span>
              </div>
            </div>

            <div className="space-y-4">
              <Button size="xl" className="w-full sm:w-auto rounded-full px-12 h-20 font-black uppercase tracking-widest bg-white text-black hover:bg-primary transition-all border-none italic shadow-xl hover:shadow-glow" asChild>
                <Link to={service.ctaLink}>
                  {service.ctaLabel || "Δες Περισσότερα"} <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
              </Button>
              <div className="flex items-center gap-3 ml-4">
                <span className="w-1 h-1 rounded-full bg-primary animate-pulse" />
                <p className="text-[10px] font-black text-primary/60 uppercase tracking-[0.4em] italic">Ξεκίνα από εδώ</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-10 pt-10 lg:pt-0 border-t lg:border-t-0 lg:border-l border-white/5 lg:pl-12 self-stretch">
          <div className="flex flex-col">
            <h4 className="font-display text-xs font-black text-primary uppercase tracking-[0.25em] mb-8 flex items-center gap-2 italic">
              <Layers size={14} className="opacity-50" /> Τι περιλαμβάνει
            </h4>
            <ul className="space-y-5">
              {service.includes.map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-sm text-white/30 leading-snug font-medium group/item hover:text-white transition-colors italic">
                  <CheckCircle2 size={18} className="text-primary/40 mt-0.5 shrink-0 group-hover/item:text-primary transition-colors" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="font-display text-xs font-black text-primary uppercase tracking-[0.25em] mb-8 flex items-center gap-2 italic">
              <Users size={14} className="opacity-50" /> Ιδανικό για
            </h4>
            <ul className="space-y-5">
              {service.bestFor.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/30 leading-snug font-medium group/item hover:text-white transition-colors italic">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/30 mt-1.5 shrink-0 group-hover/item:scale-150 group-hover/item:bg-primary transition-all" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-primary selection:text-black overflow-x-hidden">
      <section className="relative min-h-[90vh] flex items-center justify-center py-32 overflow-hidden border-b border-white/5">
        <LabBackground />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(208,255,0,0.03),transparent_70%)] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/20 mb-12"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/80 italic">Growth Intelligence</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
              className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-[0.85] mb-12 uppercase italic"
            >
              Digital Systems that <br />
              <span className="text-primary tracking-normal italic animate-glow">actually grow your business.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as any }}
              className="font-display text-xl md:text-3xl font-medium text-white/50 max-w-4xl mx-auto mb-16 italic"
            >
              Συνδυάζουμε website, marketing και AI σε ένα ενιαίο σύστημα που αφαιρεί manual δουλειά και φέρνει μετρήσιμα αποτελέσματα.
            </motion.p>

            <div className="flex flex-col sm:flex-row justify-center gap-8">
              <Button size="xl" className="rounded-full px-16 h-28 text-3xl font-black group bg-primary text-black hover:bg-white transition-all border-none italic shadow-glow-strong" asChild>
                <Link to="/project-brief">
                  Ξεκίνημα Τώρα
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="rounded-full px-16 h-28 text-3xl font-black border-white/10 hover:bg-white hover:text-black transition-all italic" asChild>
                <Link to="/book-call">Discovery Call</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DECISION HELPER */}
      <section className="py-24 relative border-t border-white/5 bg-[#080808]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeUp()} className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-black italic uppercase mb-12 tracking-tight text-white">Από πού ξεκινάς;</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { text: "Ξεκινάς από το website", service: "Next-Gen Websites", icon: Globe },
                { text: "Θες περισσότερους πελάτες", service: "Ads & Growth", icon: TrendingUp },
                { text: "Θες automation & scale", service: "AI & Automation", icon: Bot }
              ].map((path, i) => (
                <div key={i} className="group p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-primary/5 hover:border-primary/20 transition-all cursor-pointer">
                  <path.icon size={20} className="mb-4 text-primary/40 group-hover:text-primary transition-colors mx-auto" />
                  <p className="text-xs font-black uppercase tracking-widest text-white/40 mb-2 group-hover:text-white transition-colors">{path.text}</p>
                  <p className="text-sm font-black italic uppercase text-primary tracking-tighter">→ {path.service}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Πώς δουλεύει το Hustle */}
      <section className="py-32 md:py-48 relative border-t border-white/5 bg-[#050505]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div {...fadeUp()}>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-8 block italic">O S - Operating System</span>
              <h2 className="font-display text-4xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-12 italic uppercase">
                Πώς δουλεύει <br />
                <span className="text-gradient">το Hustle.</span>
              </h2>
              <p className="text-xl md:text-3xl text-white/40 font-medium italic leading-relaxed max-w-3xl mx-auto mb-20 px-4">
                Δεν βλέπουμε το website, το marketing και το AI σαν ξεχωριστά κομμάτια. <br className="hidden md:block" />
                Τα χτίζουμε σαν ένα ενιαίο σύστημα που δουλεύει μαζί.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service blocks */}
      <section className="py-32 md:py-48 relative overflow-hidden bg-[#050505]">
        {/* Subtle background flourishes */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,_rgba(208,255,0,0.02),_transparent_50%)] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 space-y-12 max-w-6xl relative z-10">
          <div className="space-y-16">
            {categories.map((cat, i) => (
              <ServiceBlock key={i} service={cat} index={i} />
            ))}
          </div>

          {/* Connection Section */}
          <motion.div
            {...fadeUp(0.3)}
            className="mt-32 pt-32 border-t border-white/5 text-center max-w-3xl mx-auto"
          >
            <h3 className="font-display text-4xl md:text-5xl font-black italic uppercase mb-12 tracking-tighter text-white">Ξεχωριστά είναι εργαλεία. <br /> <span className="text-primary italic animate-glow">Μαζί είναι σύστημα.</span></h3>
            <p className="text-xl font-black italic uppercase text-white/20 tracking-widest mb-20 italic">Αν λείπει ένα κομμάτι, το σύστημα δεν δουλεύει σωστά.</p>
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-16">
                <div className="text-center group">
                  <p className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-2 italic group-hover:text-primary transition-colors">Phase 01</p>
                  <p className="text-xl font-black italic text-white/50 uppercase tracking-tighter group-hover:text-white transition-colors">Website<br /><span className="text-[11px] lowercase opacity-40 group-hover:opacity-100 transition-opacity">brings traffic</span></p>
                </div>
                <div className="w-12 h-px bg-white/10 hidden md:block" />
                <div className="text-center group">
                  <p className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-2 italic group-hover:text-primary transition-colors">Phase 02</p>
                  <p className="text-xl font-black italic text-white/50 uppercase tracking-tighter group-hover:text-white transition-colors">Marketing<br /><span className="text-[11px] lowercase opacity-40 group-hover:opacity-100 transition-opacity">converts it</span></p>
                </div>
                <div className="w-12 h-px bg-white/10 hidden md:block" />
                <div className="text-center group">
                  <p className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-2 italic group-hover:text-primary transition-colors">Phase 03</p>
                  <p className="text-xl font-black italic text-white/50 uppercase tracking-tighter group-hover:text-white transition-colors">AI Systems<br /><span className="text-[11px] lowercase opacity-40 group-hover:opacity-100 transition-opacity">scales it</span></p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-48 bg-[#050505] relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(208,255,0,0.03),_transparent_40%)] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionHeading
            label="Common Questions"
            title="Συχνές Ερωτήσεις"
            description="Όλα όσα θέλετε να μάθετε για τη συνεργασία μας."
            variant="primary"
            dark={true}
          />
          <div className="max-w-3xl mx-auto mt-24">
            <FAQAccordion items={faqs} dark={true} />
          </div>
        </div>
      </section>

      {/* Final CTA - Cinematic / High Tech */}
      <section className="py-44 relative overflow-hidden bg-[#050506]">
        {/* Deep Tech visuals */}
        <div className="absolute inset-0 opacity-[0.1] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #c5da4e 0.5px, transparent 0.5px)", backgroundSize: "40px 40px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[140px] opacity-40 pointer-events-none animate-pulse" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            {...fadeUp()}
            className="max-w-5xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/5 mb-10 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60">Ready to Scale</span>
            </div>

            <h2 className="font-display text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9] italic uppercase">
              Αν θέλεις αποτέλεσμα, <br />
              <span className="text-primary italic animate-glow">πρέπει να χτίσεις σωστά.</span>
            </h2>

            <p className="text-primary font-black uppercase tracking-[0.4em] text-lg md:text-xl mb-16 italic">Και όχι, δεν γίνεται με random κινήσεις.</p>

            <div className="flex flex-col sm:flex-row justify-center gap-8">
              <Button variant="hero" size="lg" className="rounded-full px-16 h-20 text-xl font-bold group shadow-2xl shadow-primary/40" asChild>
                <Link to="/project-brief" className="flex items-center gap-4">
                  Start Your Brief <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Decorative bottom line */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </section>
    </div>
  );
};

export default Services;
