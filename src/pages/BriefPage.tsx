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
    Lock,
    Send
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import confetti from "canvas-confetti";
import { sendEmail, formatEmailHtml } from "@/lib/email";
import LabBackground from "@/components/LabBackground";
import { useLanguage } from "@/contexts/LanguageContext";

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
    const { t, language, setLanguage } = useLanguage();
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

    const categories = [
        { id: "websites", label: "Websites", icon: Globe, desc: language === 'gr' ? "Custom σχεδίαση & ανάπτυξη" : "Custom design & development", color: "from-blue-500/20 to-primary/20" },
        { id: "branding", label: "Branding", icon: Palette, desc: language === 'gr' ? "Ταυτότητα, λογότυπο, φωνή" : "Identity, logo, voice", color: "from-purple-500/20 to-primary/20" },
        { id: "academy", label: "Academy", icon: CloudLightning, desc: language === 'gr' ? "Workshops & Εκπαίδευση" : "Workshops & Training", color: "from-amber-500/20 to-primary/20" },
        { id: "marketing", label: "Growth", icon: Rocket, desc: language === 'gr' ? "Marketing & Strategy" : "Marketing & Strategy", color: "from-green-500/20 to-primary/20" },
    ];

    const budgets = language === 'gr' 
        ? ["€1.500 - €3.000", "€3.000 - €6.000", "€6.000 - €10.000", "€10.000+", "Δεν γνωρίζω"]
        : ["€1.500 - €3.000", "€3.000 - €6.000", "€6.000 - €10.000", "€10.000+", "I don't know"];

    const timelines = language === 'gr'
        ? ["Άμεσα", "Σε 1-2 μήνες", "Σε 3-6 μήνες", "Δεν βιάζομαι"]
        : ["Immediately", "In 1-2 months", "In 3-6 months", "No rush"];

    const goalOptions = language === 'gr'
        ? [
            "Αύξηση Πωλήσεων",
            "Νέο Project / Launch",
            "Ανανέωση Εικόνας (Rebranding)",
            "Σχεδιασμός Website / E-shop",
            "Εύρεση Νέων Πελατών (Leads)",
            "Διαφήμιση & Marketing",
            "Αυτοματοποίηση με AI",
            "Επέκταση (Scale Up)"
        ]
        : [
            "Increase Sales",
            "New Project / Launch",
            "Rebranding",
            "Website / E-shop Design",
            "Lead Generation",
            "Advertising & Marketing",
            "AI Automation",
            "Scale Up"
        ];

    // Handle scroll to top on step change
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [step]);

    const updateForm = (updates: Partial<FormData>) => {
        setFormData(prev => ({ ...prev, ...updates }));
    };

    const nextStep = () => {
        if (step === 1 && !formData.category) {
            toast.error(language === 'gr' ? "Παρακαλώ επιλέξτε μια κατηγορία" : "Please select a category");
            return;
        }
        if (step === 2 && (!formData.name || !formData.email || !formData.phone)) {
            toast.error(language === 'gr' ? "Το όνομα, το Email και το Τηλέφωνο είναι απαραίτητα" : "Name, Email and Phone are required");
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

                toast.success(t('brief.success.desc'));
                setTimeout(() => navigate("/"), 4000);
            } else {
                throw error;
            }
        } catch (err) {
            console.error("Submission failed:", err);
            toast.error(t('brief.error'));
        } finally {
            setIsSubmitting(false);
        }
    };

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
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/60 italic">{t('brief.est')}</span>
                    </div>
                    
                    {/* Language Switcher */}
                    <div className="hidden md:flex items-center gap-1.5 border-l border-white/10 pl-6 h-6">
                        <button 
                            onClick={() => setLanguage('gr')}
                            className={`text-[10px] font-black tracking-widest italic transition-colors ${language === 'gr' ? 'text-primary' : 'text-white/20 hover:text-white/40'}`}
                        >
                            GR
                        </button>
                        <span className="text-[10px] text-white/10">/</span>
                        <button 
                            onClick={() => setLanguage('en')}
                            className={`text-[10px] font-black tracking-widest italic transition-colors ${language === 'en' ? 'text-primary' : 'text-white/20 hover:text-white/40'}`}
                        >
                            EN
                        </button>
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
                            {t('brief.title1')} <span className="text-primary">{t('brief.title2')}</span>
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
                                <span key={i} className={`text-[8px] font-black tracking-[0.2em] transition-colors ${i <= step ? "text-primary" : "text-white/10"}`}>{t('brief.step')} 0{i}</span>
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
                                                    {t('brief.step1.title1')} <span className="text-primary">{t('brief.step1.title2')}</span> {t('brief.step1.title3')}
                                                </h2>
                                                <p className="text-white/40 text-lg font-medium italic">{t('brief.step1.subtitle')}</p>
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
                                                    {t('brief.step2.title1')} <span className="text-primary">{t('brief.step2.title2')}</span>{t('brief.step2.title3')}
                                                </h2>
                                                <p className="text-white/40 text-lg font-medium italic">{t('brief.step2.subtitle')}</p>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                                                <div className="space-y-3">
                                                    <label className="text-[9px] font-black uppercase tracking-[0.4em] text-primary/60 ml-2 italic">{t('brief.step2.name')}</label>
                                                    <Input
                                                        placeholder={t('brief.step2.name.placeholder')}
                                                        className="h-14 md:h-16 rounded-full border-white/10 bg-white/[0.03] focus:border-primary/50 px-8 text-base font-medium italic placeholder:text-white/10 transition-all"
                                                        value={formData.name}
                                                        onChange={(e) => updateForm({ name: e.target.value })}
                                                        required
                                                    />
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-[9px] font-black uppercase tracking-[0.4em] text-primary/60 ml-2 italic">{t('brief.step2.email')}</label>
                                                    <Input
                                                        type="email"
                                                        placeholder={t('brief.step2.email.placeholder')}
                                                        className="h-14 md:h-16 rounded-full border-white/10 bg-white/[0.03] focus:border-primary/50 px-8 text-base font-medium italic placeholder:text-white/10 transition-all"
                                                        value={formData.email}
                                                        onChange={(e) => updateForm({ email: e.target.value })}
                                                        required
                                                    />
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-[9px] font-black uppercase tracking-[0.4em] text-primary/60 ml-2 italic">{t('brief.step2.phone')}</label>
                                                    <Input
                                                        type="tel"
                                                        placeholder={t('brief.step2.phone.placeholder')}
                                                        className="h-14 md:h-16 rounded-full border-white/10 bg-white/[0.03] focus:border-primary/50 px-8 text-base font-medium italic placeholder:text-white/10 transition-all"
                                                        value={formData.phone}
                                                        onChange={(e) => updateForm({ phone: e.target.value })}
                                                        required
                                                    />
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-[9px] font-black uppercase tracking-[0.4em] text-primary/60 ml-2 italic">{t('brief.step2.business')}</label>
                                                    <Input
                                                        placeholder={t('brief.step2.business.placeholder')}
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
                                                    {t('brief.step3.title1')} <span className="text-primary">{t('brief.step3.title2')}</span>
                                                </h2>
                                                <p className="text-white/40 text-lg font-medium italic">{t('brief.step3.subtitle')}</p>
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
                                                    <label className="text-[9px] font-black uppercase tracking-[0.4em] text-primary/60 ml-2 italic">{t('brief.step3.website')}</label>
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
                                                    <span className="text-primary">{t('brief.step4.title1')}</span> {t('brief.step4.title2')}
                                                </h2>
                                                <p className="text-white/40 text-lg font-medium italic">{t('brief.step4.subtitle')}</p>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                                                <div className="space-y-5">
                                                    <label className="text-[9px] font-black uppercase tracking-[0.4em] text-primary/60 ml-2 italic">{t('brief.step4.budget')}</label>
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
                                                    <label className="text-[9px] font-black uppercase tracking-[0.4em] text-primary/60 ml-2 italic">{t('brief.step4.launch')}</label>
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
                                                    {t('brief.step5.title1')} <span className="text-primary">{t('brief.step5.title2')}</span>
                                                </h2>
                                                <p className="text-white/40 text-lg font-medium italic">{t('brief.step5.subtitle')}</p>
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
                                                            {language === 'gr' ? (
                                                                <>Συμφωνώ με τους <Link to="/terms" className="text-primary hover:underline">Όρους Χρήσης</Link> και την <Link to="/privacy" className="text-primary hover:underline">Πολιτική Απορρήτου</Link> της Hustle Labs.</>
                                                            ) : (
                                                                <>I agree with the <Link to="/terms" className="text-primary hover:underline">Terms of Use</Link> and <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link> of Hustle Labs.</>
                                                            )}
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="hidden lg:flex flex-col items-center justify-center p-10 rounded-[2.5rem] bg-primary/5 border border-primary/10 relative">
                                                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 ring-4 ring-primary/5 animate-glow-pulse">
                                                        <Lock size={28} className="text-primary" />
                                                    </div>
                                                    <h4 className="text-lg font-black italic uppercase tracking-tighter mb-2">{t('brief.step5.secure')}</h4>
                                                    <p className="text-[9px] text-white/30 font-black uppercase tracking-[0.2em] text-center">{t('brief.step5.secure.desc')}</p>
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
                                                <ArrowLeft size={14} /> {t('brief.back')}
                                            </button>
                                        )}

                                        {step < 5 ? (
                                            <Button
                                                type="button"
                                                size="xl"
                                                onClick={nextStep}
                                                className="flex-1 rounded-full h-14 md:h-16 bg-primary text-black hover:bg-white transition-all font-black text-[11px] md:text-xs uppercase tracking-[0.4em] italic shadow-glow order-1 sm:order-2"
                                            >
                                                {t('brief.next')} <ArrowRight size={16} className="ml-2" />
                                            </Button>
                                        ) : (
                                            <Button
                                                type="submit"
                                                size="xl"
                                                disabled={isSubmitting}
                                                className="flex-1 rounded-full h-14 md:h-16 bg-primary text-black hover:bg-white transition-all font-black text-[11px] md:text-xs uppercase tracking-[0.4em] italic shadow-glow-strong animate-glow-pulse order-1 sm:order-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                {isSubmitting ? t('brief.sending') : t('brief.send')} <Send size={16} className="ml-2" />
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
                    <div className="text-center mt-16 md:mt-24">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 1 }}
                            className="inline-flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 px-8 py-4 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Timer size={14} className="text-primary" />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] italic text-white/40">{t('brief.est')}</span>
                            </div>
                            <div className="hidden md:block w-px h-4 bg-white/10" />
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Lock size={14} className="text-primary" />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] italic text-white/40">{t('brief.confidential')}</span>
                            </div>
                        </motion.div>
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
