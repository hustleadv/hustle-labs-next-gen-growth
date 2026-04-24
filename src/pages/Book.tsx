import { useState, useEffect } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  X,
  Search,
  BarChart3,
  Cpu,
  Target,
  Clock,
  Send,
  Calendar,
  Timer,
  Video,
  Rocket
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import confetti from "canvas-confetti";
import { sendEmail, formatEmailHtml } from "@/lib/email";

/* ─── Types ─── */
type Step = 1 | 2 | 3 | 4 | 5;

interface BookingData {
  sessionType: string;
  name: string;
  email: string;
  phone: string;
  businessName: string;
  website: string;
  challenges: string;
  timeframe: string;
  notes: string;
}

const Book = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialSession = searchParams.get("session") || "";

  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState<BookingData>({
    sessionType: initialSession,
    name: "",
    email: "",
    phone: "",
    businessName: "",
    website: "",
    challenges: "",
    timeframe: "",
    notes: "",
  });

  const updateForm = (updates: Partial<BookingData>) => {
    setFormData(prev => ({ ...prev, ...updates }));
  };

  const nextStep = () => {
    if (step === 1 && !formData.sessionType) {
      toast.error("Παρακαλώ επιλέξτε έναν τύπο session");
      return;
    }
    if (step === 2 && (!formData.name || !formData.email || !formData.phone)) {
      toast.error("Το όνομα, το Email και το Τηλέφωνο είναι απαραίτητα");
      return;
    }
    if (step < 5) setStep((s) => (s + 1) as Step);
  };

  const prevStep = () => {
    if (step > 1) setStep((s) => (s - 1) as Step);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const html = formatEmailHtml("New Discovery Call Request", formData);
    
    const { success, error } = await sendEmail({
      subject: `New Call Request: ${formData.name} - ${formData.sessionType}`,
      html: html
    });

    if (success) {
      // Trigger Confetti
      const duration = 5 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

      const interval: any = setInterval(function () {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);

        const particleCount = 50 * (timeLeft / duration);
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
      }, 250);

      toast.success("Το αίτημα στάλθηκε! Θα επικοινωνήσουμε για το κλείσιμο του ραντεβού.");
      setTimeout(() => navigate("/"), 4000);
    } else {
      console.error("Submission failed:", error);
      toast.error("Κάτι πήγε στραβά. Παρακαλώ δοκιμάστε ξανά.");
    }
  };

  const sessionTypes = [
    { id: "website-audit", label: "Έλεγχος Ιστοσελίδας", icon: Search, duration: "30'", desc: "Γιατί δεν φέρνει πελάτες το site μου και πώς θα γίνει πιο γρήγορο." },
    { id: "ads-audit", label: "Έλεγχος Διαφημίσεων", icon: BarChart3, duration: "30'", desc: "Πού πάνε τα χρήματα των διαφημίσεων και πώς θα φέρουν πωλήσεις." },
    { id: "ai-consult", label: "Συμβουλευτική AI", icon: Cpu, duration: "30'", desc: "Πώς το AI μπορεί να σας γλιτώσει χρόνο από τις καθημερινές δουλειές." },
    { id: "strategy", label: "Στρατηγική Ανάπτυξης", icon: Target, duration: "45'", desc: "Ένα πλάνο για να μεγαλώσετε την επιχείρησή σας τους επόμενους 3 μήνες." },
  ];

  const timeframes = ["Άμεσα (Εντός εβδομάδας)", "Τις επόμενες 2 εβδομάδες", "Σε ένα μήνα", "Απλώς ενημερώνομαι"];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 relative overflow-hidden flex flex-col">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(var(--primary)/0.03),_transparent_70%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[50vh] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

      {/* Header Overlay */}
      <div className="relative z-50 flex items-center justify-end px-6 lg:px-12 py-8">
        <Link to={-1 as any} className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm font-medium transition-colors">
          <X size={20} />
          <span className="hidden sm:inline">Ακύρωση</span>
        </Link>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-2xl relative">

          {/* Progress Indicator */}
          <div className="absolute -top-16 left-0 right-0 flex justify-between px-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={`h-1.5 flex-1 mx-1 rounded-full transition-all duration-500 ${i <= step ? "bg-primary shadow-[0_0_10px_hsl(var(--primary)/0.4)]" : "bg-border/40"
                  }`}
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="glass border border-border/60 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative bg-card/60 backdrop-blur-2xl"
            >
              <form onSubmit={handleSubmit}>

                {/* Step 1: Session Selection */}
                {step === 1 && (
                  <div className="space-y-8">
                    <div className="text-center">
                      <h2 className="font-display text-4xl font-black mb-3 text-white">Τι <span className="text-gradient">Session</span> θα κάνουμε;</h2>
                      <p className="text-white/60">Επιλέξτε το θέμα που σας απασχολεί περισσότερο αυτή τη στιγμή.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {sessionTypes.map((type) => (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => updateForm({ sessionType: type.id })}
                          className={`flex items-start gap-4 p-5 rounded-2xl border transition-all duration-300 text-left ${formData.sessionType === type.id
                            ? "border-primary bg-primary/10 shadow-lg shadow-primary/10"
                            : "border-border/60 bg-background/40 hover:border-primary/40 hover:bg-background/80"
                            }`}
                        >
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${formData.sessionType === type.id ? "bg-primary text-primary-foreground" : "bg-card border border-border/60 text-primary"
                            }`}>
                            <type.icon size={20} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between gap-1 mb-1">
                              <h3 className="font-bold text-base leading-tight">{type.label}</h3>
                              <span className="text-[10px] font-bold bg-white/5 px-2 py-0.5 rounded-full text-muted-foreground">{type.duration}</span>
                            </div>
                            <p className="text-[11px] text-muted-foreground leading-tight">{type.desc}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: User Contacts */}
                {step === 2 && (
                  <div className="space-y-8">
                    <div className="text-center">
                      <h2 className="font-display text-4xl font-black mb-3 text-white">Με ποιον <span className="text-gradient">θα μιλήσουμε;</span></h2>
                      <p className="text-white/60">Συμπληρώστε τα στοιχεία επικοινωνίας σας.</p>
                    </div>
                    <div className="space-y-5">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-primary/80 ml-1">Όνοματεπώνυμο</label>
                        <Input
                          placeholder="Το όνομά σας"
                          name="name"
                          autoComplete="name"
                          className="h-14 rounded-xl border-border/60 bg-background/50 focus:border-primary px-6 text-base"
                          value={formData.name}
                          onChange={(e) => updateForm({ name: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-primary/80 ml-1">Email</label>
                        <Input
                          type="email"
                          name="email"
                          autoComplete="email"
                          placeholder="email@example.com"
                          className="h-14 rounded-xl border-border/60 bg-background/50 focus:border-primary px-6 text-base"
                          value={formData.email}
                          onChange={(e) => updateForm({ email: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-primary/80 ml-1">Τηλέφωνο *</label>
                        <Input
                          type="tel"
                          name="tel"
                          autoComplete="tel"
                          placeholder="69XXXXXXXX"
                          className="h-14 rounded-xl border-border/60 bg-background/50 focus:border-primary px-6 text-base"
                          value={formData.phone}
                          onChange={(e) => updateForm({ phone: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Business & Context */}
                {step === 3 && (
                  <div className="space-y-8">
                    <div className="text-center">
                      <h2 className="font-display text-4xl font-black mb-3 text-white">Πείτε μας για <span className="text-gradient">εσάς</span></h2>
                      <p className="text-white/60">Λίγες πληροφορίες για την επιχείρησή σας.</p>
                    </div>
                    <div className="space-y-5">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-primary/80 ml-1">Όνομα Επιχείρησης</label>
                        <Input
                          placeholder="Business Name"
                          className="h-14 rounded-xl border-border/60 bg-background/50 focus:border-primary px-6 text-base"
                          value={formData.businessName}
                          onChange={(e) => updateForm({ businessName: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-primary/80 ml-1">Website ή Social Media</label>
                        <Input
                          placeholder="https://..."
                          className="h-14 rounded-xl border-border/60 bg-background/50 focus:border-primary px-6 text-base"
                          value={formData.website}
                          onChange={(e) => updateForm({ website: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Challenges & Time */}
                {step === 4 && (
                  <div className="space-y-8">
                    <div className="text-center">
                      <h2 className="font-display text-4xl font-black mb-3 text-white">Ποια είναι η <span className="text-gradient">πρόκληση;</span></h2>
                      <p className="text-white/60">Τι θα θέλατε να λύσουμε σε αυτό το session;</p>
                    </div>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-primary/80 ml-1">Κύριο εμπόδιο</label>
                        <Textarea
                          placeholder="Περιγράψτε τι σας δυσκολεύει..."
                          className="min-h-[120px] rounded-xl border-border/60 bg-background/50 focus:border-primary p-6 text-base leading-relaxed"
                          value={formData.challenges}
                          onChange={(e) => updateForm({ challenges: e.target.value })}
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-sm font-bold text-primary/80 ml-1">Πότε θέλετε να μιλήσουμε;</label>
                        <div className="grid grid-cols-2 gap-2">
                          {timeframes.map((tf) => (
                            <button
                              key={tf}
                              type="button"
                              onClick={() => updateForm({ timeframe: tf })}
                              className={`p-3 rounded-xl border text-xs font-medium transition-all ${formData.timeframe === tf
                                ? "border-primary bg-primary/10 text-primary"
                                : "border-border/60 bg-background/40 text-muted-foreground hover:border-primary/30"
                                }`}
                            >
                              {tf}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 5: Final Review */}
                {step === 5 && (
                  <div className="space-y-8 text-center">
                    <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 ring-4 ring-primary/5">
                      <Rocket size={40} className="text-primary" />
                    </div>
                    <h2 className="font-display text-4xl font-black mb-3 text-white">Όλα <span className="text-gradient">έτοιμα;</span></h2>
                    <p className="text-white/60 max-w-sm mx-auto mb-8">
                      Επιβεβαιώστε το αίτημα κράτησης. Θα λάβετε απάντηση για τον προγραμματισμό της ώρας.
                    </p>
                    <div className="bg-primary/5 rounded-3xl p-6 border border-primary/10 text-left mb-8 space-y-2">
                      <p className="text-sm text-muted-foreground"><strong className="text-white">Session:</strong> {formData.sessionType.toUpperCase()}</p>
                      <p className="text-sm text-muted-foreground"><strong className="text-white">Όνομα:</strong> {formData.name}</p>
                      <p className="text-sm text-muted-foreground"><strong className="text-white">Τηλέφωνο:</strong> {formData.phone}</p>
                      <p className="text-sm text-muted-foreground"><strong className="text-white">Προτεραιότητα:</strong> {formData.timeframe || "Δεν ορίστηκε"}</p>
                    </div>
                    <div className="flex items-center justify-center gap-3 mt-4">
                      <input
                        type="checkbox"
                        id="terms"
                        required
                        className="w-5 h-5 rounded border-border/60 bg-background/50 text-primary focus:ring-primary/20 focus:ring-offset-0"
                      />
                      <label htmlFor="terms" className="text-xs text-muted-foreground">
                        Συμφωνώ με τους <a href="/terms" className="text-primary hover:underline" target="_blank">Όρους Χρήσης</a> και την <a href="/privacy" className="text-primary hover:underline" target="_blank">Πολιτική Απορρήτου</a>.
                      </label>
                    </div>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex gap-4 mt-12 pt-8 border-t border-border/40">
                  {step > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      onClick={prevStep}
                      className="rounded-full px-8 h-14 border-border/60 hover:bg-white/5 font-bold"
                    >
                      <ArrowLeft size={18} className="mr-2" /> Πίσω
                    </Button>
                  )}

                  {step < 5 ? (
                    <Button
                      type="button"
                      variant="hero"
                      size="lg"
                      onClick={nextStep}
                      className="flex-1 rounded-full h-14 font-bold tracking-wide shadow-xl shadow-primary/10 group"
                    >
                      Συνέχεια <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      className="flex-1 rounded-full h-14 font-bold tracking-wide shadow-xl shadow-primary/10 shadow-glow"
                    >
                      Αποστολή Αιτήματος <Send size={18} className="ml-2" />
                    </Button>
                  )}
                </div>
              </form>
            </motion.div>
          </AnimatePresence>

          <p className="text-center mt-8 text-[11px] text-white/30 max-w-xs mx-auto">
            Η κράτηση αφορά ένα δωρεάν discovery call ή διαγνωστικό session. <br />
            Σας ευχαριστούμε για την εμπιστοσύνη.
          </p>
        </div>
      </div>

      {/* Visual artifacts */}
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
    </div>
  );
};

export default Book;
