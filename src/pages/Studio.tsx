import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Video, Mic, Camera, Monitor,
  Play, Star, MapPin, ArrowRight,
  CheckCircle2, Layers, Users, Zap,
  Headphones, Music, Film, Radio,
  Sparkles, Cpu, Activity, Glasses,
  Lightbulb, Volume2, CameraIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion from "@/components/FAQAccordion";
import PageHero from "@/components/PageHero";

/* ─── Animation helpers ─── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] as const },
});

/* ─── Studio Services ─── */
const studioServices = [
  {
    icon: Mic,
    title: "Podcast Production",
    desc: "Κρυστάλλινος ήχος για έως 4 άτομα. Shure SM7B μικρόφωνα και επαγγελματική ηχομόνωση για podcasts που ακούγονται τέλεια.",
    gradient: "from-primary/20 to-accent/20",
    badge: "Most Popular",
  },
  {
    icon: Video,
    title: "Vidcast & YouTube",
    desc: "Πολυκάμερο 4K setup με φωτισμό studio. Μετάτρεψε το podcast σου σε visual εμπειρία έτοιμη για YouTube και Social Media.",
    gradient: "from-primary/30 to-primary/10",
    badge: "Trending",
  },
  {
    icon: Film,
    title: "Reels & TikToks",
    desc: "Short-form content creation. Δημιουργούμε δεκάδες clips από ένα session, έτοιμα για να κατακτήσουν τους αλγόριθμους.",
    gradient: "from-accent/20 to-primary/20",
    badge: "Viral Ready",
  },
  {
    icon: Zap,
    title: "Live Streaming",
    desc: "Επαγγελματικό live streaming με multiple angles, τίτλους και γραφικά. Σύνδεση με όλες τις πλατφόρμες ταυτόχρονα.",
    gradient: "from-primary/20 to-accent/20",
    badge: "Live Ready",
  },
];

/* ─── Equipment ─── */
const equipmentList = [
  {
    category: "Visuals & Lighting",
    icon: CameraIcon,
    items: ["Sony FX3 Cinema Cameras", "Sigma Art 24-70mm Lenses", "Nanlite Forza Studio Lights", "Aputure Softboxes"]
  },
  {
    category: "Audio Engineering",
    icon: Volume2,
    items: ["Shure SM7B Microphones", "RODECaster Pro II Console", "Cloudlifter Preamps", "Beyerdynamic Headphones"]
  },
  {
    category: "Studio Vibe",
    icon: Lightbulb,
    items: ["Professional Acoustic Treatment", "Smart RGB Lighting Control", "Interview-ready Sofa Setup", "High-speed Fiber Internet"]
  },
];

/* ─── FAQ ─── */
const faqs = [
  { question: "Χρειάζεται να φέρω δικό μου εξοπλισμό;", answer: "Όχι, το Studio είναι πλήρως εξοπλισμένο (Plug & Play). Μπορείς να φέρεις μόνο τον υπολογιστή σου ή έναν σκληρό δίσκο για το υλικό σου αν το επιθυμείς." },
  { question: "Παρέχετε και υπηρεσίες editing;", answer: "Ναι. Μπορούμε να αναλάβουμε από το raw recording μέχρι το τελικό μοντάζ, color grading, social media cuts και sound design." },
  { question: "Πόσα άτομα χωράει το Studio;", answer: "Το main setup είναι για 4 άτομα άνετα, αλλά ο χώρος μπορεί να φιλοξενήσει έως και 6-8 άτομα για μεγαλύτερες παραγωγές ή πάνελ." },
  { question: "Πώς κλείνω session;", answer: "Πάτα το κουμπί 'Κλείσε Session', διάλεξε ημερομηνία και ώρα, και θα λάβεις επιβεβαίωση άμεσα. Τόσο απλά." },
];

const Studio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* ─── Coming Soon Overlay ─── */}
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 overflow-y-auto">
        <div className="absolute inset-0 bg-[#020403]/90 backdrop-blur-3xl" />
        
        {/* Animated Background Accents */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[160px] animate-pulse pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[140px] animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 text-center max-w-4xl"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6 shadow-2xl">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Studio Status: Project in Progress</span>
          </div>
          
          <h1 className="font-display text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tighter leading-[0.9]">
            Loading <br />
            <span className="text-gradient">Premium Experience.</span>
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl text-white/50 mb-8 font-medium leading-relaxed max-w-2xl mx-auto">
            Το φυσικό μας Studio στην καρδιά των Χανίων βρίσκεται σε φάση υλοποίησης: ετοιμάζουμε έναν κορυφαίο χώρο που θα επαναπροσδιορίσει το Content Creation στην Κρήτη.
          </p>

          {/* Simple Progress Indicator */}
          <div className="max-w-xs mx-auto mb-10 px-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Construction Progress</span>
              <span className="text-[10px] font-black text-primary uppercase">85%</span>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '85%' }}
                transition={{ duration: 2, delay: 0.5, ease: "circOut" }}
                className="h-full bg-gradient-to-r from-primary/60 to-primary" 
              />
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="hero-outline" size="lg" className="rounded-full px-10 h-14 text-base font-bold border-white/10 hover:bg-white/5 group" asChild>
              <Link to="/">
                Επιστροφή στην Αρχική
              </Link>
            </Button>
            <Button variant="hero" size="lg" className="rounded-full px-10 h-14 text-base font-bold shadow-2xl shadow-primary/20 group hover:scale-105 transition-transform" asChild>
              <Link to="/contact" className="flex items-center gap-3">
                Ενημερώσου Πρώτος <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="opacity-50 blur-[2px] pointer-events-none select-none">
        <PageHero
        label="Hustle Content Lab"
        floatingIcons={[Video, Mic, Camera, Headphones, Play, Film, Radio, Music, Star, Zap, Activity, Cpu]}
        title={
          <>
            Create Content that <br />
            <span className="text-gradient">Actually Hooks.</span>
          </>
        }
        description="Ο κορυφαίος χώρος για content creators στα Χανιά. Από podcasts και vidcasts μέχρι premium video production, σου παρέχουμε τα εργαλεία για να ακουστεί η φωνή σου παγκόσμια."
      >
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          <Button variant="hero" size="lg" className="rounded-full px-12 h-16 text-lg font-bold shadow-2xl shadow-primary/20 group" asChild>
            <Link to="/book-call?service=studio" className="flex items-center gap-3">
              Κλείσε Session <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
            </Link>
          </Button>
          <Button variant="hero-outline" size="lg" className="rounded-full px-12 h-16 text-lg font-bold border-white/10 hover:bg-white/5 transition-all" asChild>
            <Link to="/contact">Custom Production</Link>
          </Button>
        </div>
      </PageHero>

      {/* ─── Services ─── */}
      <section id="services" className="py-32 section-light relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_hsl(var(--primary)/0.03),_transparent_50%)] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionHeading
            label="What we Offer"
            title="Premium Content Creation"
            description="Ό,τι χρειάζεσαι για να παράγεις περιεχόμενο παγκόσμιας κλάσης, χωρίς να ανησυχείς για τις τεχνικές λεπτομέρειες."
            variant="primary"
            dark={false}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mt-24 max-w-6xl mx-auto">
            {studioServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={i}
                  {...fadeUp(i * 0.1)}
                  className="group relative flex flex-col bg-white border border-slate-200 hover:border-primary/30 rounded-[3rem] overflow-hidden p-8 lg:p-12 hover:-translate-y-4 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] transition-all duration-700"
                >
                  {/* Glow Accent */}
                  <div className={`absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br ${service.gradient} blur-[60px] opacity-0 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none`} />

                  <div className="flex items-start justify-between mb-8 relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                      <Icon size={28} className="text-primary opacity-80 group-hover:opacity-100 transition-opacity" />
                    </div>
                    {service.badge && (
                      <div className="px-4 py-1.5 rounded-full border border-slate-100 bg-slate-50 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 group-hover:text-primary group-hover:border-primary/20 group-hover:bg-primary/5 transition-all duration-500">
                        {service.badge}
                      </div>
                    )}
                  </div>

                  <div className="relative z-10 flex-1">
                    <h3 className="font-display text-2xl lg:text-3xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-primary transition-colors duration-500">{service.title}</h3>
                    <div className="h-[2px] w-12 bg-primary/40 mb-6 group-hover:w-24 group-hover:bg-primary transition-all duration-500" />
                    <p className="text-slate-500 leading-relaxed text-base lg:text-lg font-medium opacity-80">{service.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Featured Corner (Interview Corner) ─── */}
      <section className="py-32 relative overflow-hidden bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeUp()} className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest mb-8">
                The Highlight
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-10 leading-[1.1] tracking-tighter">
                The Interview <br />
                <span className="text-gradient">Corner.</span>
              </h2>
              <div className="space-y-8">
                <p className="text-xl text-muted-foreground leading-relaxed italic border-l-2 border-primary/30 pl-6">
                  "Δεν είναι απλώς ένα studio. Είναι ένας χώρος που εμπνέει τη συζήτηση. Η ειδικά διαμορφωμένη γωνιά μας προσφέρει ένα 'late-night show' feeling."
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    "3-Camera Angle Setup Cinema Grade",
                    "Customizable RGB Vibe Lighting",
                    "Acoustic Perfection",
                    "Social Media-Ready Clips"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-foreground/80 font-medium">
                      <CheckCircle2 size={18} className="text-primary shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.2)} className="order-1 lg:order-2 relative group">
              <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-video rounded-[3rem] overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-700 group-hover:border-primary/30">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(var(--primary)/0.15),_transparent_70%)] opacity-30 group-hover:opacity-60 transition-opacity duration-700" />

                <div className="text-center p-12 relative z-10">
                  <div className="relative w-24 h-24 mx-auto mb-8">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse" />
                    <div className="w-full h-full rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-700">
                      <Play size={40} className="text-primary fill-primary ml-1" />
                    </div>
                  </div>
                  <div className="text-2xl font-display font-black text-white mb-2 tracking-tight group-hover:text-primary transition-colors duration-700 uppercase">Live Session Ready</div>
                  <div className="text-primary/60 uppercase tracking-[0.3em] text-[10px] font-black">Professional Content Hub</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Equipment Specs ─── */}
      <section className="py-32 section-light relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            label="The Hardware"
            title="State-of-the-Art Gear"
            description="Μόνο τα καλύτερα εργαλεία της αγοράς, έτοιμα για εσένα."
            variant="primary"
            dark={false}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mt-16 max-w-6xl mx-auto">
            {equipmentList.map((eq, i) => {
              const Icon = eq.icon;
              return (
                <motion.div
                  key={i}
                  {...fadeUp(i * 0.1)}
                  className="group flex flex-col bg-white p-8 lg:p-10 rounded-[3rem] border border-slate-200 hover:border-primary/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-500 shadow-xl">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-slate-900 mb-8 tracking-tight">
                    {eq.category}
                  </h3>
                  <ul className="space-y-4 flex-1">
                    {eq.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4 text-sm text-slate-500 font-medium group/item hover:text-slate-900 transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/30 mt-1.5 shrink-0 group-hover/item:scale-150 group-hover/item:bg-primary transition-all" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-32 relative bg-background overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_hsl(var(--primary)/0.05),_transparent_40%)] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionHeading label="FAQ" title="Συχνές ερωτήσεις" variant="primary" />
          <div className="max-w-3xl mx-auto mt-16">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* Final Cinematic CTA */}
      <section className="py-32 relative overflow-hidden bg-[#050506]">
        {/* Deep Field visuals */}
        <div className="absolute inset-0 opacity-[0.1] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #c5da4e 0.5px, transparent 0.5px)", backgroundSize: "60px 60px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] opacity-40 pointer-events-none animate-pulse" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            {...fadeUp()}
            className="max-w-5xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/5 mb-10 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60">Ready to Broadcast</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tighter leading-[1.0]">
              Φέρε την ιδέα σου <br />
              <span className="text-gradient">στο Studio.</span>
            </h2>

            <p className="text-xl md:text-2xl text-white/50 mb-16 max-w-3xl mx-auto leading-relaxed font-light italic">
              "Τα εργαλεία είναι εδώ. Η τεχνολογία είναι έτοιμη. <br className="hidden md:block" />
              Το μόνο που λείπει είναι η δική σου φωνή."
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-8">
              <Button variant="hero" size="lg" className="rounded-full px-16 h-20 text-xl font-bold group shadow-2xl shadow-primary/40" asChild>
                <Link to="/book-call?service=studio" className="flex items-center gap-4">
                  Book your Session <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Decorative bottom line */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </section>
      </div>
    </div>
  );
};

export default Studio;
