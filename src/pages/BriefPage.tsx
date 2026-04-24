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
    Rocket,
    CloudLightning,
    Sparkles,
    Timer,
    Lock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import confetti from "canvas-confetti";
import { sendEmail, formatEmailHtml } from "@/lib/email";
import LabBackground from "@/components/LabBackground";

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
    const [isSubmitting, setIsSubmitting] = useState(false);
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

    // Handle scroll to top on step change
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [step]);

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            const html = formatEmailHtml("New Project Brief Received", formData);
            
            const { success, error } = await sendEmail({
                subject: `New Project Brief: ${formData.businessName || formData.name} - ${formData.category}`,
                html: html
            });

            if (success) {
                // Trigger Confetti
                const duration = 5 * 1000;
                const animationEnd = Date.now() + duration;
                const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

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
                setTimeout(() => navigate("/"), 4000);
            } else {
                throw error;
            }
        } catch (err) {
            console.error("Submission failed:", err);
            toast.error("Κάτι πήγε στραβά. Παρακαλώ δοκιμάστε ξανά.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const categories = [
        { id: "websites", label: "Websites", icon: Globe, desc: "Custom σχεδίαση & ανάπτυξη", color: "from-blue-500/20 to-primary/20" },
        { id: "branding", label: "Branding", icon: Palette, desc: "Ταυτότητα, λογότυπο, φωνή", color: "from-purple-500/20 to-primary/20" },
        { id: "academy", label: "Academy", icon: CloudLightning, desc: "Workshops & Εκπαίδευση", color: "from-amber-500/20 to-primary/20" },
        { id: "marketing", label: "Growth", icon: Rocket, desc: "Marketing & Strategy", color: "from-green-500/20 to-primary/20" },
    ];

    const budgets = ["€1.500 - €3.000", "€3.000 - €6.000", "€6.000 - €10.000", "€10.000+", "Δεν γνωρίζω"];
    const timelines = ["Άμεσα", "Σε 1-2 μήνες", "Σε 3-6 μήνες", "Δεν βιάζομαι"];
    const goalOptions = [
        "Αύξηση Πωλήσεων",
        "Νέο Project / Launch",
        "Ανανέωση Εικόνας (Rebranding)",
        "Σχεδιασμός Website / E-shop",
        "Εύρεση Νέων Πελατών (Leads)",
        "Διαφήμιση & Marketing",
        "Αυτοματοποίηση με AI",
        "Επέκταση (Scale Up)"
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
        <div className="min-h-screen bg-[#050505] text-white selection:bg-primary selection:text-black relative overflow-x-hidden flex flex-col font-sans">
            <LabBackground />
            
            {/* ── Standalone Navigation Header ── */}
            <header className="fixed top-0 left-0 right-0 z-[100] px-6 md:px-10 lg:px-16 py-6 md:py-8 flex justify-between items-center bg-[#050505]/40 backdrop-blur-xl border-b border-white/5">
                <Link to="/">
                    <img src="/images/logohustle.svg" alt="Hustle Labs" className="h-7 md:h-8 w-auto invert brightness-200" />
                </Link>
                
                <div className="flex items-center gap-4 md:gap-8">
                    <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                        <Timer size={13} className="text-primary" />
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/60 italic">Est. 2-3 mins</span>
                    </div>
                    
                    {/* Language Switcher Mockup (matches site style) */}
                    <div className="hidden md:flex items-center gap-1.5 border-l border-white/10 pl-6 h-6">
                        <span className="text-[10px] font-black tracking-widest text-primary italic">GR</span>
                        <span className="text-[10px] text-white/10">/</span>
                        <span className="text-[10px] font-black tracking-widest text-white/20 italic">EN</span>
                    </div>

                    <button 
                        onClick={() => navigate(-1)} 
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all text-white/60 hover:text-white group"
                        title="Close"
                    >
                        <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <div className="flex-1 flex flex-col items-center justify-center px-4 pt-32 pb-20 relative z-10">
                <div className="w-full max-w-3xl"> {/* Reduced from max-w-4xl for laptop ergonomics */}
                    
                    {/* Header Statement */}
                    <div className="text-center mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6"
                        >
                            <Zap size={12} className="text-primary" />
                            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-primary italic">Project Brief Protocol</span>
                        </motion.div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium tracking-tighter uppercase italic mb-4">
                            Let's Build <span className="text-primary">Something.</span>
                        </h1>
                    </div>

                    {/* Progress Glowing Bar */}
                    <div className="w-full max-w-md mx-auto mb-16 px-4">
                        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden relative">
                            <motion.div 
                                className="absolute top-0 left-0 h-full bg-primary shadow-[0_0_15px_rgba(208,255,0,0.5)]"
                                initial={{ width: "0%" }}
                                animate={{ width: `${(step / 5) * 100}%` }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            />
                        </div>
                        <div className="flex justify-between mt-4">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <span key={i} className={`text-[8px] font-black tracking-[0.2em] transition-colors ${i <= step ? "text-primary" : "text-white/10"}`}>STEP 0{i}</span>
                            ))}
                        </div>
                    </div>

                    {/* Form Container */}
                    <div className="relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={step}
                                initial={{ opacity: 0, scale: 0.98, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 1.02, y: -20 }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className="glass-card rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-12 lg:p-16 relative overflow-hidden"
                            >
                                {/* Decorative elements */}
                                <div className="absolute top-0 left-0 w-px h-24 bg-gradient-to-b from-primary/40 to-transparent" />
                                <div className="absolute bottom-0 right-0 w-px h-24 bg-gradient-to-t from-primary/40 to-transparent" />

                                <form onSubmit={handleSubmit} className="relative z-10">
                                    
                                    {/* STEP 1: CATEGORY */}
                                    {step === 1 && (
                                        <div className="space-y-12">
                                            <div className="text-center md:text-left">
                                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-medium tracking-tight italic uppercase mb-4 leading-none">
                                                    Τι <span className="text-primary">δημιουργουμε</span> σημερα;
                                                </h2>
                                                <p className="text-white/40 text-lg font-medium italic">Επιλέξτε την κατηγορία του project σας.</p>
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                                                {categories.map((cat) => (
                                                    <button
                                                        key={cat.id}
                                                        type="button"
                                                        onClick={() => {
                                                            updateForm({ category: cat.id });
                                                            setTimeout(() => setStep(2), 500);
                                                        }}
                                                        className={`flex items-start gap-5 p-7 rounded-3xl border text-left transition-all duration-500 relative overflow-hidden group ${
                                                            formData.category === cat.id
                                                                ? "border-primary bg-primary/10"
                                                                : "border-white/5 bg-white/[0.02] hover:border-primary/30 hover:bg-white/[0.05]"
                                                        }`}
                                                    >
                                                        <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                                                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 relative z-10 transition-all duration-500 ${
                                                            formData.category === cat.id ? "bg-primary text-black scale-110 shadow-glow" : "bg-white/5 text-primary group-hover:scale-110"
                                                        }`}>
                                                            <cat.icon size={20} />
                                                        </div>
                                                        <div className="relative z-10">
                                                            <h3 className="font-sans text-lg font-medium italic uppercase tracking-widest mb-1 group-hover:text-primary transition-colors">{cat.label}</h3>
                                                            <p className="text-[10px] text-white/40 font-medium italic leading-relaxed">{cat.desc}</p>
                                                        </div>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* STEP 2: IDENTIFICATION */}
                                    {step === 2 && (
                                        <div className="space-y-12">
                                            <div className="text-center md:text-left">
                                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-medium tracking-tight italic uppercase mb-4 leading-none">
                                                    Με ποιον <span className="text-primary">μιλαμε;</span>
                                                </h2>
                                                <p className="text-white/40 text-lg font-medium italic">Θέλουμε να γνωρίσουμε εσάς και το όραμά σας.</p>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                                                <div className="space-y-3">
                                                    <label className="text-[9px] font-black uppercase tracking-[0.4em] text-primary/60 ml-2 italic">Όνοματεπώνυμο</label>
                                                    <Input
                                                        placeholder="Πώς σας λένε;"
                                                        className="h-14 md:h-16 rounded-full border-white/10 bg-white/[0.03] focus:border-primary/50 px-8 text-base font-medium italic placeholder:text-white/10 transition-all"
                                                        value={formData.name}
                                                        onChange={(e) => updateForm({ name: e.target.value })}
                                                        required
                                                    />
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-[9px] font-black uppercase tracking-[0.4em] text-primary/60 ml-2 italic">Email</label>
                                                    <Input
                                                        type="email"
                                                        placeholder="Το email σας"
                                                        className="h-14 md:h-16 rounded-full border-white/10 bg-white/[0.03] focus:border-primary/50 px-8 text-base font-medium italic placeholder:text-white/10 transition-all"
                                                        value={formData.email}
                                                        onChange={(e) => updateForm({ email: e.target.value })}
                                                        required
                                                    />
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-[9px] font-black uppercase tracking-[0.4em] text-primary/60 ml-2 italic">Τηλέφωνο</label>
                                                    <Input
                                                        type="tel"
                                                        placeholder="Το τηλέφωνό σας"
                                                        className="h-14 md:h-16 rounded-full border-white/10 bg-white/[0.03] focus:border-primary/50 px-8 text-base font-medium italic placeholder:text-white/10 transition-all"
                                                        value={formData.phone}
                                                        onChange={(e) => updateForm({ phone: e.target.value })}
                                                        required
                                                    />
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-[9px] font-black uppercase tracking-[0.4em] text-primary/60 ml-2 italic">Business Name</label>
                                                    <Input
                                                        placeholder="Όνομα επιχείρησης"
                                                        className="h-14 md:h-16 rounded-full border-white/10 bg-white/[0.03] focus:border-primary/50 px-8 text-base font-medium italic placeholder:text-white/10 transition-all"
                                                        value={formData.businessName}
                                                        onChange={(e) => updateForm({ businessName: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* STEP 3: GOALS */}
                                    {step === 3 && (
                                        <div className="space-y-12">
                                            <div className="text-center md:text-left">
                                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-medium tracking-tight italic uppercase mb-4 leading-none">
                                                    Τι θελουμε να <span className="text-primary">χτισουμε;</span>
                                                </h2>
                                                <p className="text-white/40 text-lg font-medium italic">Επιλέξτε τους βασικούς στόχους του project.</p>
                                            </div>
                                            <div className="space-y-10">
                                                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                                                    {goalOptions.map((goal) => {
                                                        const isSelected = formData.goals.includes(goal);
                                                        return (
                                                            <button
                                                                key={goal}
                                                                type="button"
                                                                onClick={() => toggleGoal(goal)}
                                                                className={`px-6 md:px-8 py-3.5 md:py-4 rounded-full border text-[10px] md:text-xs font-black uppercase tracking-widest italic transition-all duration-500 ${
                                                                    isSelected
                                                                        ? "border-primary bg-primary text-black shadow-glow"
                                                                        : "border-white/10 bg-white/5 text-white/40 hover:border-primary/40 hover:text-white"
                                                                }`}
                                                            >
                                                                {goal}
                                                            </button>
                                                        );
                                                    })}
                                                </div>
                                                
                                                <div className="space-y-3 pt-6 border-t border-white/5">
                                                    <label className="text-[9px] font-black uppercase tracking-[0.4em] text-primary/60 ml-2 italic">Υπάρχον Website (προαιρετικό)</label>
                                                    <Input
                                                        placeholder="https://example.com"
                                                        className="h-14 md:h-16 rounded-full border-white/10 bg-white/[0.03] focus:border-primary/50 px-8 text-base font-medium italic placeholder:text-white/10 transition-all"
                                                        value={formData.currentWebsite}
                                                        onChange={(e) => updateForm({ currentWebsite: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* STEP 4: BUDGET & TIMELINE */}
                                    {step === 4 && (
                                        <div className="space-y-12">
                                            <div className="text-center md:text-left">
                                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-medium tracking-tight italic uppercase mb-4 leading-none">
                                                    <span className="text-primary">Επενδυση</span> & Χρονος.
                                                </h2>
                                                <p className="text-white/40 text-lg font-medium italic">Βοηθήστε μας να σχεδιάσουμε τη βέλτιστη λύση.</p>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                                                <div className="space-y-5">
                                                    <label className="text-[9px] font-black uppercase tracking-[0.4em] text-primary/60 ml-2 italic">Εκτιμώμενη Επένδυση</label>
                                                    <div className="grid grid-cols-1 gap-2.5">
                                                        {budgets.map((b) => (
                                                            <button
                                                                key={b}
                                                                type="button"
                                                                onClick={() => updateForm({ budget: b })}
                                                                className={`p-5 rounded-2xl border text-[11px] font-black uppercase tracking-widest italic transition-all duration-500 text-left ${
                                                                    formData.budget === b
                                                                        ? "border-primary bg-primary/10 text-primary shadow-glow-strong/10"
                                                                        : "border-white/5 bg-white/[0.02] text-white/20 hover:border-white/20"
                                                                }`}
                                                            >
                                                                {b}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="space-y-5">
                                                    <label className="text-[9px] font-black uppercase tracking-[0.4em] text-primary/60 ml-2 italic">Πότε θέλουμε το Launch;</label>
                                                    <div className="grid grid-cols-1 gap-2.5">
                                                        {timelines.map((t) => (
                                                            <button
                                                                key={t}
                                                                type="button"
                                                                onClick={() => updateForm({ timeline: t })}
                                                                className={`p-5 rounded-2xl border text-[11px] font-black uppercase tracking-widest italic transition-all duration-500 text-left ${
                                                                    formData.timeline === t
                                                                        ? "border-primary bg-primary/10 text-primary shadow-glow-strong/10"
                                                                        : "border-white/5 bg-white/[0.02] text-white/20 hover:border-white/20"
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

                                    {/* STEP 5: WRAP UP */}
                                    {step === 5 && (
                                        <div className="space-y-12">
                                            <div className="text-center md:text-left">
                                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-medium tracking-tight italic uppercase mb-4 leading-none">
                                                    Ειμαστε <span className="text-primary">ετοιμοι;</span>
                                                </h2>
                                                <p className="text-white/40 text-lg font-medium italic">Κάντε μια τελευταία ματιά στα στοιχεία σας.</p>
                                            </div>
                                            
                                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                                                <div className="space-y-8">
                                                    <div className="bg-white/[0.02] rounded-3xl p-8 border border-white/5 relative overflow-hidden group">
                                                        <div className="absolute top-0 left-0 w-1 h-full bg-primary/40" />
                                                        <ul className="space-y-4 relative z-10">
                                                            <li className="flex justify-between border-b border-white/5 pb-2">
                                                                <span className="text-[9px] font-black uppercase text-white/20 italic tracking-widest">Category</span>
                                                                <span className="text-[10px] font-black uppercase tracking-widest italic text-primary">{formData.category}</span>
                                                            </li>
                                                            <li className="flex justify-between border-b border-white/5 pb-2">
                                                                <span className="text-[9px] font-black uppercase text-white/20 italic tracking-widest">Client</span>
                                                                <span className="text-[10px] font-black uppercase tracking-widest italic">{formData.name}</span>
                                                            </li>
                                                            <li className="flex justify-between border-b border-white/5 pb-2">
                                                                <span className="text-[9px] font-black uppercase text-white/20 italic tracking-widest">Investment</span>
                                                                <span className="text-[10px] font-black uppercase tracking-widest italic">{formData.budget || "TBD"}</span>
                                                            </li>
                                                            <li className="flex justify-between">
                                                                <span className="text-[9px] font-black uppercase text-white/20 italic tracking-widest">Timeline</span>
                                                                <span className="text-[10px] font-black uppercase tracking-widest italic">{formData.timeline || "TBD"}</span>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="flex items-start gap-4 px-4">
                                                        <div className="pt-1">
                                                            <input
                                                                type="checkbox"
                                                                id="terms"
                                                                required
                                                                className="w-5 h-5 rounded-lg border-white/10 bg-white/5 text-primary focus:ring-primary/20 accent-primary"
                                                            />
                                                        </div>
                                                        <label htmlFor="terms" className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.1em] text-white/30 italic leading-relaxed">
                                                            Συμφωνώ με τους <Link to="/terms" className="text-primary hover:underline">Όρους Χρήσης</Link> και την <Link to="/privacy" className="text-primary hover:underline">Πολιτική Απορρήτου</Link> της Hustle Labs.
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="hidden lg:flex flex-col items-center justify-center p-10 rounded-[2.5rem] bg-primary/5 border border-primary/10 relative">
                                                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 ring-4 ring-primary/5 animate-glow-pulse">
                                                        <Lock size={28} className="text-primary" />
                                                    </div>
                                                    <h4 className="text-lg font-black italic uppercase tracking-tighter mb-2">Secure Submission</h4>
                                                    <p className="text-[9px] text-white/30 font-black uppercase tracking-[0.2em] text-center">Data encrypted and handled exclusively by our strategy team.</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* NAVIGATION BUTTONS */}
                                    <div className="flex flex-col sm:flex-row gap-5 mt-12 pt-10 border-t border-white/5">
                                        {step > 1 && (
                                            <button
                                                type="button"
                                                onClick={prevStep}
                                                className="h-14 md:h-16 rounded-full px-10 border border-white/10 text-white/40 hover:text-white hover:bg-white/5 transition-all font-black text-[10px] uppercase tracking-[0.3em] italic flex items-center justify-center gap-3 order-2 sm:order-1"
                                            >
                                                <ArrowLeft size={14} /> Πισω
                                            </button>
                                        )}

                                        {step < 5 ? (
                                            <Button
                                                type="button"
                                                size="xl"
                                                onClick={nextStep}
                                                className="flex-1 rounded-full h-14 md:h-16 bg-primary text-black hover:bg-white transition-all font-black text-[11px] md:text-xs uppercase tracking-[0.4em] italic shadow-glow order-1 sm:order-2"
                                            >
                                                Συνεχεια <ArrowRight size={16} className="ml-2" />
                                            </Button>
                                        ) : (
                                            <Button
                                                type="submit"
                                                size="xl"
                                                disabled={isSubmitting}
                                                className="flex-1 rounded-full h-14 md:h-16 bg-primary text-black hover:bg-white transition-all font-black text-[11px] md:text-xs uppercase tracking-[0.4em] italic shadow-glow-strong animate-glow-pulse order-1 sm:order-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                {isSubmitting ? "Αποστολη..." : "Αποστολη Brief"} <Send size={16} className="ml-2" />
                                            </Button>
                                        )}
                                    </div>
                                </form>
                            </motion.div>
                        </AnimatePresence>

                        {/* Background Floating Badges */}
                        <div className="hidden xl:block absolute -right-20 top-1/4 translate-x-1/2 -rotate-12 opacity-10 hover:opacity-100 transition-opacity duration-1000">
                             <div className="glass px-5 py-2.5 rounded-2xl border border-primary/30 flex items-center gap-3">
                                 <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                 <span className="text-[9px] font-black uppercase tracking-widest text-primary">Live Protocol</span>
                             </div>
                        </div>
                        <div className="hidden xl:block absolute -left-20 bottom-1/4 -translate-x-1/2 rotate-6 opacity-10 hover:opacity-100 transition-opacity duration-1000">
                             <div className="glass px-5 py-2.5 rounded-2xl border border-white/20 flex items-center gap-3">
                                 <span className="text-[9px] font-black uppercase tracking-widest text-white/40">Secure Node #731</span>
                             </div>
                        </div>
                    </div>

                    {/* Footer helper info */}
                    <div className="text-center mt-12 md:mt-16">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.5em] text-white/5 italic leading-relaxed max-w-sm mx-auto"
                        >
                            Χρειαζόμαστε 2-3 λεπτά. <br />
                            Όλες οι πληροφορίες είναι απόρρητες.
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* Visual background elements */}
            <div className="fixed -bottom-40 -right-40 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="fixed -top-40 -left-40 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
        </div>
    );
};

export default BriefPage;
