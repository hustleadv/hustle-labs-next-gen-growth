import { useState, useEffect } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowRight,
    ArrowLeft,
    Check,
    X,
    Globe,
    Palette,
    Zap,
    Target,
    Send,
    Users,
    Briefcase,
    Rocket,
    Calendar,
    CloudLightning
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import confetti from "canvas-confetti";

/* ─── Types ─── */
type Step = 1 | 2 | 3 | 4 | 5;

interface FormData {
    category: string;
    name: string;
    email: string;
    businessName: string;
    currentWebsite: string;
    goals: string;
    budget: string;
    timeline: string;
    message: string;
    phone: string;
}

const BriefPage = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const initialCategory = searchParams.get("subject") || "";

    const [step, setStep] = useState<Step>(1);
    const [formData, setFormData] = useState<FormData>({
        category: initialCategory,
        name: "",
        email: "",
        businessName: "",
        currentWebsite: "",
        goals: "",
        budget: "",
        timeline: "",
        message: "",
        phone: "",
    });

    const updateForm = (updates: Partial<FormData>) => {
        setFormData(prev => ({ ...prev, ...updates }));
    };

    const nextStep = () => {
        if (step === 1 && !formData.category) {
            toast.error("Παρακαλώ επιλέξτε μια κατηγορία");
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);

        // Trigger Confetti
        const duration = 5 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

        const interval: any = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);

        toast.success("Το Brief στάλθηκε! Θα επικοινωνήσουμε σύντομα.");
        setTimeout(() => navigate("/"), 4000); // Increased timeout to let confetti show
    };

    const categories = [
        { id: "websites", label: "Websites", icon: Globe, desc: "Custom σχεδίαση & ανάπτυξη" },
        { id: "branding", label: "Branding", icon: Palette, desc: "Ταυτότητα, λογότυπο, φωνή" },
        { id: "academy", label: "Academy", icon: CloudLightning, desc: "Workshops & Εκπαίδευση" },
        { id: "marketing", label: "Growth", icon: Rocket, desc: "Marketing & Strategy" },
    ];

    const budgets = ["€1.500 - €3.000", "€3.000 - €6.000", "€6.000 - €10.000", "€10.000+", "Δεν γνωρίζω"];
    const timelines = ["Άμεσα", "Σε 1-2 μήνες", "Σε 3-6 μήνες", "Δεν βιάζομαι"];
    const goalOptions = [
        "Αύξηση Πωλήσεων",
        "Rebranding / Νέα Ταυτότητα",
        "Launching νέου project",
        "Αυτοματοποίηση & AI",
        "Marketing & Growth",
        "Lead Generation",
        "Βελτίωση UX/UI",
        "Κλιμάκωση (Scaling)"
    ];

    const toggleGoal = (goal: string) => {
        const currentGoals = formData.goals ? formData.goals.split(", ") : [];
        if (currentGoals.includes(goal)) {
            updateForm({ goals: currentGoals.filter(g => g !== goal).join(", ") });
        } else {
            updateForm({ goals: [...currentGoals, goal].join(", ") });
        }
    };

    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 relative overflow-hidden flex flex-col pt-0 lg:pt-0">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(var(--primary)/0.03),_transparent_70%)] pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[50vh] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

            {/* Header Overlay */}
            <div className="relative z-50 flex items-center justify-between px-6 lg:px-12 py-8">
                <Link to="/" className="group flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-black text-xl shadow-lg shadow-primary/20 transition-transform group-hover:scale-110">
                        H
                    </div>
                    <span className="font-display font-black tracking-tighter text-2xl group-hover:text-primary transition-colors uppercase">
                        Hustle <span className="opacity-40">Labs</span>
                    </span>
                </Link>

                <Link to={-1 as any} className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm font-medium transition-colors">
                    <X size={20} />
                    <span className="hidden sm:inline">Κλείσιμο</span>
                </Link>
            </div>

            {/* Main Form Area */}
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

                                {/* Step 1: Category */}
                                {step === 1 && (
                                    <div className="space-y-8">
                                        <div className="text-center">
                                            <h2 className="font-display text-4xl font-black mb-3 text-white">Τι <span className="text-gradient">δημιουργούμε</span> σήμερα;</h2>
                                            <p className="text-white/60">Επιλέξτε την κατηγορία του project σας για να ξεκινήσουμε τη μελέτη.</p>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {categories.map((cat) => (
                                                <button
                                                    key={cat.id}
                                                    type="button"
                                                    onClick={() => {
                                                        updateForm({ category: cat.id });
                                                        setTimeout(() => setStep(2), 400);
                                                    }}
                                                    className={`flex items-start gap-4 p-6 rounded-2xl border transition-all duration-300 text-left ${formData.category === cat.id
                                                        ? "border-primary bg-primary/10 shadow-lg shadow-primary/10"
                                                        : "border-border/60 bg-background/40 hover:border-primary/40 hover:bg-background/80"
                                                        }`}
                                                >
                                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${formData.category === cat.id ? "bg-primary text-primary-foreground" : "bg-card border border-border/60 text-primary"
                                                        }`}>
                                                        <cat.icon size={24} />
                                                    </div>
                                                    <div>
                                                        <h3 className="font-bold text-lg leading-tight mb-1">{cat.label}</h3>
                                                        <p className="text-xs text-muted-foreground leading-tight">{cat.desc}</p>
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Step 2: Identification */}
                                {step === 2 && (
                                    <div className="space-y-8">
                                        <div className="text-center">
                                            <h2 className="font-display text-4xl font-black mb-3 text-white">Με ποιον <span className="text-gradient">μιλάμε;</span></h2>
                                            <p className="text-white/60">Θέλουμε να γνωρίσουμε εσάς και το όραμά σας.</p>
                                        </div>
                                        <div className="space-y-5">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-primary/80 ml-1">Όνοματεπώνυμο</label>
                                                <Input
                                                    placeholder="Πώς σας λένε;"
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
                                                    placeholder="Το email σας"
                                                    className="h-14 rounded-xl border-border/60 bg-background/50 focus:border-primary px-6 text-base"
                                                    value={formData.email}
                                                    onChange={(e) => updateForm({ email: e.target.value })}
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-primary/80 ml-1">Τηλέφωνο</label>
                                                <Input
                                                    type="tel"
                                                    placeholder="Το τηλέφωνό σας"
                                                    name="phone"
                                                    autoComplete="tel"
                                                    className="h-14 rounded-xl border-border/60 bg-background/50 focus:border-primary px-6 text-base"
                                                    value={formData.phone}
                                                    onChange={(e) => updateForm({ phone: e.target.value })}
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-primary/80 ml-1">Business Name (Προαιρετικό)</label>
                                                <Input
                                                    placeholder="Όνομα επιχείρησης"
                                                    className="h-14 rounded-xl border-border/60 bg-background/50 focus:border-primary px-6 text-base"
                                                    value={formData.businessName}
                                                    onChange={(e) => updateForm({ businessName: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Step 3: Goals */}
                                {step === 3 && (
                                    <div className="space-y-8">
                                        <div className="text-center">
                                            <h2 className="font-display text-4xl font-black mb-3 text-white">Τι θέλουμε να <span className="text-gradient">χτίσουμε;</span></h2>
                                            <p className="text-white/60">Επιλέξτε τους βασικούς στόχους (μπορείτε να διαλέξετε πάνω από έναν).</p>
                                        </div>
                                        <div className="space-y-6">
                                            <div className="grid grid-cols-2 gap-3">
                                                {goalOptions.map((goal) => {
                                                    const isSelected = formData.goals.includes(goal);
                                                    return (
                                                        <button
                                                            key={goal}
                                                            type="button"
                                                            onClick={() => toggleGoal(goal)}
                                                            className={`p-4 rounded-xl border text-sm font-bold transition-all text-center ${isSelected
                                                                ? "border-primary bg-primary/10 text-primary shadow-lg shadow-primary/5"
                                                                : "border-border/40 bg-background/40 text-muted-foreground hover:border-primary/30"
                                                                }`}
                                                        >
                                                            {goal}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                            
                                            <div className="space-y-2 pt-4">
                                                <label className="text-sm font-bold text-primary/80 ml-1">Υπάρχον Website (αν υπάρχει)</label>
                                                <Input
                                                    placeholder="https://example.com"
                                                    className="h-14 rounded-xl border-border/60 bg-background/50 focus:border-primary px-6 text-base"
                                                    value={formData.currentWebsite}
                                                    onChange={(e) => updateForm({ currentWebsite: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Step 4: Budget & Timeline */}
                                {step === 4 && (
                                    <div className="space-y-8">
                                        <div className="text-center">
                                            <h2 className="font-display text-4xl font-black mb-3 text-white"><span className="text-gradient">Επένδυση</span> & Χρόνος</h2>
                                            <p className="text-white/60">Βοηθήστε μας να σχεδιάσουμε τη βέλτιστη λύση για εσάς.</p>
                                        </div>
                                        <div className="space-y-7">
                                            <div className="space-y-3">
                                                <label className="text-sm font-bold text-primary/80 ml-1">Εκτιμώμενη Επένδυση (Project Scope)</label>
                                                <div className="grid grid-cols-2 gap-3">
                                                    {budgets.map((b) => (
                                                        <button
                                                            key={b}
                                                            type="button"
                                                            onClick={() => updateForm({ budget: b })}
                                                            className={`p-3 rounded-xl border text-sm font-medium transition-all ${formData.budget === b
                                                                ? "border-primary bg-primary/10 text-primary"
                                                                : "border-border/60 bg-background/40 text-muted-foreground hover:border-primary/30"
                                                                }`}
                                                        >
                                                            {b}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-sm font-bold text-primary/80 ml-1">Πότε θέλουμε το Launch;</label>
                                                <div className="grid grid-cols-2 gap-3">
                                                    {timelines.map((t) => (
                                                        <button
                                                            key={t}
                                                            type="button"
                                                            onClick={() => updateForm({ timeline: t })}
                                                            className={`p-3 rounded-xl border text-sm font-medium transition-all ${formData.timeline === t
                                                                ? "border-primary bg-primary/10 text-primary"
                                                                : "border-border/40 bg-background/40 text-muted-foreground hover:border-primary/30"
                                                                }`}
                                                        >
                                                            {t}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Step 5: Wrap up */}
                                {step === 5 && (
                                    <div className="space-y-8 text-center">
                                        <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 ring-4 ring-primary/5 animate-pulse">
                                            <Check size={40} className="text-primary" />
                                        </div>
                                        <h2 className="font-display text-4xl font-black mb-3">Είμαστε <span className="text-gradient">έτοιμοι;</span></h2>
                                        <p className="text-muted-foreground max-w-sm mx-auto mb-8">
                                            Κάντε μια τελευταία ματιά στα στοιχεία σας. Είμαστε ένα κλικ μακριά από το να ξεκινήσουμε το επόμενο μεγάλο σας project.
                                        </p>
                                        <div className="bg-primary/5 rounded-3xl p-6 border border-primary/10 text-left mb-8 max-h-[200px] overflow-y-auto scrollbar-hide">
                                            <p className="text-sm leading-relaxed text-muted-foreground">
                                                <strong className="text-foreground">Project:</strong> {formData.category.toUpperCase()}<br />
                                                <strong className="text-foreground">Όνομα:</strong> {formData.name}<br />
                                                <strong className="text-foreground">Τηλέφωνο:</strong> {formData.phone}<br />
                                                <strong className="text-foreground">Budget:</strong> {formData.budget || "Δεν ορίστηκε"}<br />
                                                <strong className="text-foreground">Στόχοι:</strong> {formData.goals.slice(0, 100)}...
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-center gap-3 pt-2">
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

                                {/* Navigation Buttons */}
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
                                            className="flex-1 rounded-full h-14 font-bold tracking-wide shadow-xl shadow-primary/10 shadow-glow animate-glow-pulse"
                                        >
                                            Αποστολή Brief <Send size={18} className="ml-2" />
                                        </Button>
                                    )}
                                </div>
                            </form>
                        </motion.div>
                    </AnimatePresence>

                    {/* Bottom helper info */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="text-center mt-8 text-xs text-muted-foreground/60 max-w-xs mx-auto"
                    >
                        Χρειαζόμαστε 2-3 λεπτά. <br />
                        Όλες οι πληροφορίες είναι απόρρητες και χρησιμοποιούνται μόνο για την αξιολόγηση του project σας.
                    </motion.p>
                </div>
            </div>

            {/* Visual background badge */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        </div>
    );
};

export default BriefPage;
