import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, Globe, Cpu, Heart,
  CheckCircle2, Clock, Sparkles, Tag, Zap, Package, Send, TrendingUp,
  Award, Rocket, Gem, ShieldCheck, Target, Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] as const },
});

/* ── Offers Data ── */
const categories = [
  { key: "all", label: "Όλα", icon: Package },
  { key: "websites", label: "Ιστοσελίδες", icon: Globe },
  { key: "marketing", label: "Growth", icon: TrendingUp },
  { key: "ai", label: "AI & Automations", icon: Cpu },
  { key: "women", label: "Women", icon: Heart },
];

const offers = [
  {
    id: "nextgen-starter",
    category: "websites",
    title: "Eco-System Starter",
    desc: "Η βάση για την ψηφιακή σου κυριαρχία. Ταχύτητα, design και SEO σε ένα πακέτο.",
    price: "€1.200",
    badge: "Bestseller",
    features: ["Custom UI/UX Σχεδιασμός", "Mobile-First Optimization", "Google Analytics Setup"],
    icon: Globe
  },
  {
    id: "conversion-ads",
    category: "marketing",
    title: "ROI Growth Bundle",
    desc: "Δεν πουλάμε κλικ, πουλάμε αποτελέσματα. Καμπάνιες εστιασμένες στο κέρδος.",
    price: "€450/mo",
    badge: "Popular",
    features: ["Στρατηγική Google Ads", "Copywriting που πείθει", "Monthly Performance Audit"],
    icon: Rocket
  },
  {
    id: "ai-agent",
    category: "ai",
    title: "AI Efficiency Lab",
    desc: "Απελευθέρωσε τον χρόνο σου. Αυτοματοποιούμε τις επαναλαμβανόμενες εργασίες σου.",
    price: "€550",
    badge: "New",
    features: ["Custom AI Chatbot", "Workflow Automation", "1-on-1 Training"],
    icon: Cpu
  },
  {
    id: "women-mentoring",
    category: "women",
    title: "Soulful Strategy",
    desc: "Γιατί η επιχείρησή σου είναι η προέκταση της ψυχής σου. Καθοδήγηση με ενσυναίσθηση.",
    price: "€150",
    badge: "Limited",
    features: ["1-on-1 Mentoring Session", "Action Plan 30 Ημερών", "Community Access"],
    icon: Heart
  }
];

const Offers = () => {
  const { toast } = useToast();
  const [activeCategory, setActiveCategory] = useState("all");
  const [submitted, setSubmitted] = useState(false);
  const [selectedOfferId, setSelectedOfferId] = useState("");
  const formRef = useRef<HTMLDivElement>(null);

  const filteredOffers = activeCategory === "all"
    ? offers
    : offers.filter(o => o.category === activeCategory);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({ title: "Το αίτημα εστάλη!", description: "Θα μιλήσουμε πολύ σύντομα." });
  };

  const handleSelectOffer = (id: string = "") => {
    setSelectedOfferId(id);
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ─── 1. Hero Section ─── */}
      <PageHero
        label="Hustle Drops & Offers"
        secondaryLabel="Limited Opportunities"
        icon={Tag}
        floatingIcons={[Tag, Zap, Star, ShieldCheck, Sparkles, Gem, Target, Award, Rocket, Package]}
        bgGradient="radial-gradient(circle at 20% 20%, hsl(72 62% 58% / 0.04), transparent 40%), radial-gradient(circle at 80% 80%, hsl(175 85% 55% / 0.04), transparent 40%), linear-gradient(180deg, hsl(220 18% 7%) 0%, hsl(220 15% 5%) 80% ,hsl(var(--background)) 100%)"
        title={
          <>
            Λύσεις που δίνουν <br />
            <span className="bg-gradient-to-r from-primary to-teal-400 bg-clip-text text-transparent">ώθηση στο όραμά σου.</span>
          </>
        }
        description="Συγκεντρώσαμε τις πιο αποτελεσματικές λύσεις του Lab σε έτοιμα πακέτα. Ξκάθαρη αξία, χωρίς κρυφά κόστη, μόνο αποτελέσματα."
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
          <Button variant="hero" size="lg" className="rounded-full px-12 h-16 text-lg font-black bg-gradient-to-r from-primary to-teal-400 hover:scale-105 transition-all shadow-2xl shadow-primary/10 group border-none text-slate-950" onClick={() => document.getElementById('offers')?.scrollIntoView({ behavior: 'smooth' })}>
            Δες τα Πακέτα <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
          </Button>
          <Button variant="hero-outline" size="lg" className="rounded-full px-12 h-16 text-lg font-bold border-white/10 hover:bg-white/5 transition-all text-white/60" asChild>
            <Link to="/contact">Custom Λύση</Link>
          </Button>
        </div>
      </PageHero>

      {/* ─── 2. Filter & Grid ─── */}
      <section id="offers" className="py-48 relative overflow-hidden section-light">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_hsl(72_62%_58%/0.04),_hsl(175_85%_55%/0.04),_transparent_60%)] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            dark={false}
            variant="primary"
            label="Investment Options"
            title="Διάλεξε το δικό σου πακέτο"
            highlight="πακέτο"
            description="Κάθε προσφορά είναι σχεδιασμένη για να λύνει ένα συγκεκριμένο πρόβλημα και να σου φέρνει πίσω τον χρόνο και την ηρεμία σου."
          />

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-24 max-w-4xl mx-auto">
            {categories.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center gap-2.5 px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] transition-all duration-300 border
                  ${activeCategory === key
                    ? "bg-slate-900 border-slate-900 text-white shadow-sm"
                    : "bg-transparent border-slate-200 text-slate-500 hover:bg-slate-100 hover:text-slate-900"}`}
              >
                <Icon size={14} />
                {label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {filteredOffers.map((offer, i) => {
              const Icon = offer.icon;
              return (
                <motion.div
                  key={offer.id}
                  {...fadeUp(i * 0.1)}
                  className="group relative bg-white rounded-[3rem] p-12 border border-slate-100 shadow-xl shadow-slate-200/50 hover:border-primary/20 hover:shadow-2xl transition-all duration-700 flex flex-col h-full"
                >
                  <div className="flex justify-between items-start mb-10">
                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 group-hover:scale-110 group-hover:border-primary/30 transition-all duration-500">
                      <Icon size={28} className="text-slate-400 group-hover:text-primary transition-colors" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                      {offer.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-3xl font-black text-slate-900 mb-6 tracking-tight uppercase italic">{offer.title}</h3>
                  <p className="text-slate-500 text-lg leading-relaxed font-medium mb-10 flex-1">{offer.desc}</p>

                  <div className="space-y-4 mb-12">
                    {offer.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-3 text-slate-600 font-medium text-sm">
                        <CheckCircle2 size={16} className="text-primary/50 group-hover:text-primary transition-colors" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-10 border-t border-slate-100">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Επένδυση</span>
                      <span className="text-3xl font-display font-black text-slate-900">{offer.price}</span>
                    </div>
                    <Button variant="hero" size="lg" className="rounded-full px-10 h-16 bg-slate-50 hover:bg-slate-900 text-slate-900 hover:text-white border border-slate-200 transition-all text-base font-black" onClick={() => handleSelectOffer(offer.id)}>
                      Επιλογή <ArrowRight size={18} className="ml-2" />
                    </Button>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── 3. Limited Drops (Impact) ─── */}
      <section className="py-48 relative overflow-hidden section-light">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,_hsl(0_84%_60%/0.08),_transparent_50%)] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-24 max-w-7xl mx-auto">
            <motion.div {...fadeUp()} className="flex-1 order-2 lg:order-1">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-10 transition-all hover:scale-105">
                <Clock size={14} className="text-primary animate-pulse" />
                <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Hustle Drop: Limited Time</span>
              </div>

              <h2 className="font-display text-5xl md:text-8xl font-black text-slate-900 mb-10 leading-[0.9] tracking-tighter italic uppercase">
                The Growth <br />
                <span className="text-primary">Bundle.</span>
              </h2>

              <p className="text-slate-600 text-lg md:text-xl font-medium mb-12 leading-relaxed max-w-xl">
                Starter Ιστοσελίδα + 1 Μήνας Google Ads Strategy. Η απόλυτη λύση για να μπεις στην αγορά με το δεξί και να δεις άμεσα αποτελέσματα.
              </p>

              <div className="flex items-baseline gap-4 mb-16">
                <span className="text-2xl text-slate-300 line-through font-bold">€2.200</span>
                <span className="text-6xl font-display font-black text-slate-900">€1.690</span>
              </div>

              <Button variant="hero" size="lg" className="rounded-full px-12 h-20 text-xl font-black bg-slate-900 text-white hover:bg-slate-800 shadow-2xl shadow-slate-900/20 group border-none" onClick={() => handleSelectOffer('bundle')}>
                Πρόλαβέ το <ArrowRight size={22} className="ml-2 group-hover:translate-x-3 transition-transform" />
              </Button>
            </motion.div>

            <motion.div {...fadeUp(0.1)} className="flex-1 order-1 lg:order-2">
              <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-[4rem] overflow-hidden shadow-2xl bg-white border-[12px] border-slate-100 p-8 flex flex-col justify-center items-center text-center">
                <div className="absolute top-0 right-0 p-12 opacity-[0.05]">
                  <Zap size={200} className="text-slate-900" />
                </div>
                <Rocket size={100} className="text-primary mb-10 animate-bounce" />
                <p className="text-4xl font-display font-black text-slate-900 leading-tight">
                  Launch <br />
                  Faster. <br />
                  <span className="text-primary">Scale.</span>
                </p>
                <div className="absolute bottom-10 inset-x-0">
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Limited to 3 slots / month</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── 4. Lead Form (Cinematic) ─── */}
      <section ref={formRef} className="py-48 relative overflow-hidden bg-[#050506]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionHeading
            dark={true}
            variant="primary"
            label="Inquiry Form"
            title="Κάνε το επόμενο βήμα"
            highlight="βήμα"
            description="Συμπλήρωσε τα στοιχεία σου και ας ξεκινήσουμε την υλοποίηση του δικού σου project."
          />

          <div className="max-w-4xl mx-auto mt-24">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass p-20 rounded-[4rem] text-center border border-white/10"
              >
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-10">
                  <CheckCircle2 size={48} className="text-primary" />
                </div>
                <h3 className="text-4xl font-display font-black text-white mb-6 uppercase italic">Πάμε για Hustle!</h3>
                <p className="text-white/50 text-xl font-light">Λάβαμε το αίτημά σου. Θα επικοινωνήσουμε εντός 24 ωρών για τα επόμενα βήματα.</p>
              </motion.div>
            ) : (
              <motion.form
                {...fadeUp()}
                onSubmit={handleSubmit}
                className="glass p-12 md:p-20 rounded-[4rem] border border-white/5 space-y-10 relative overflow-hidden shadow-2xl shadow-primary/5"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,_hsl(72_62%_58%/0.05),_transparent_40%)] pointer-events-none" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-2">Ονοματεπώνυμο</label>
                    <input
                      required
                      type="text"
                      name="name"
                      autoComplete="name"
                      placeholder="π.χ. Αλέξανδρος Παπαδόπουλος"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 text-white placeholder:text-white/10 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-2">Email Επικοινωνίας</label>
                    <input
                      required
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="π.χ. alex@company.com"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 text-white placeholder:text-white/10 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-2">Πακέτο που σε ενδιαφέρει</label>
                  <select
                    name="offer"
                    value={selectedOfferId}
                    onChange={(e) => setSelectedOfferId(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer"
                  >
                    <option className="bg-slate-900" value="">Επίλεξε πακέτο...</option>
                    <option className="bg-slate-900" value="nextgen-starter">Eco-System Starter</option>
                    <option className="bg-slate-900" value="conversion-ads">ROI Growth Bundle</option>
                    <option className="bg-slate-900" value="ai-agent">AI Efficiency Lab</option>
                    <option className="bg-slate-900" value="women-mentoring">Soulful Strategy Mentoring</option>
                    <option className="bg-slate-900" value="bundle">The Growth Bundle (Offer)</option>
                  </select>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-2">Σημειώσεις / Ερωτήσεις</label>
                  <textarea
                    rows={4}
                    placeholder="Πες μας λίγα λόγια για το project σου..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 text-white placeholder:text-white/10 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  />
                </div>

                <div className="flex items-center gap-3 pt-2 pl-2">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    className="w-5 h-5 rounded border-white/10 bg-white/5 text-primary focus:ring-primary/20 focus:ring-offset-0"
                  />
                  <label htmlFor="terms" className="text-xs text-white/60">
                    Συμφωνώ με τους <a href="/terms" className="text-primary hover:underline" target="_blank">Όρους Χρήσης</a> και την <a href="/privacy" className="text-primary hover:underline" target="_blank">Πολιτική Απορρήτου</a>.
                  </label>
                </div>

                <Button variant="hero" size="lg" className="w-full rounded-full h-24 text-xl font-black bg-gradient-to-r from-primary to-teal-400 border-none group transition-all hover:scale-[1.02] shadow-2xl shadow-primary/10 text-slate-950">
                  Στείλε το Αίτημα <Send className="ml-3 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                </Button>
              </motion.form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offers;
