import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
    User, Mail, Phone, MapPin, Briefcase, Star,
    Linkedin, Globe, MessageSquare, ArrowRight, ArrowLeft,
    CheckCircle2, Sparkles, Heart, Zap, Rocket
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

import confetti from "canvas-confetti";

const steps = [
    { id: 1, title: "Τα Βασικά", icon: User },
    { id: 2, title: "Προφίλ", icon: Briefcase },
    { id: 3, title: "Links", icon: Globe },
    { id: 4, title: "Στόχοι", icon: Sparkles },
];

const HustlerJoin = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { toast } = useToast();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        location: "",
        role: "",
        experience: "",
        mainSkill: "",
        linkedin: "",
        portfolio: "",
        bio: "",
        motivation: ""
    });

    const handleNext = () => {
        if (currentStep < steps.length) {
            setCurrentStep(currentStep + 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);

        // Trigger confetti
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
            // since particles fall down, start a bit higher than random
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);

        toast({
            title: "Success! 🚀",
            description: "Η αίτησή σου στάλθηκε στο Lab. Θα επικοινωνήσουμε σύντομα.",
        });
    };

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 50 : -50,
            opacity: 0,
        }),
    };

    return (
        <div className="min-h-screen bg-background pt-24 pb-20 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-4 max-w-3xl">

                {!isSubmitted ? (
                    <div>
                        {/* Header */}
                        <div className="text-center mb-12">
                            <span className="text-primary font-black tracking-[0.3em] text-[10px] uppercase mb-4 block">Hustlers Registration</span>
                            <h1 className="font-display text-4xl md:text-5xl font-black mb-6 tracking-tighter">Γίνε και εσύ <br /><span className="text-gradient">Hustler.</span></h1>
                            <p className="text-muted-foreground text-lg font-light max-w-xl mx-auto">
                                Συμπλήρωσε την αίτηση σε 4 απλά βήματα και γίνε μέλος της πιο δυναμικής ομάδας δημιουργών.
                            </p>
                        </div>

                        {/* Stepper Visualization */}
                        <div className="flex justify-between mb-12 relative px-4">
                            <div className="absolute top-1/2 left-0 right-0 h-px bg-border/40 -translate-y-1/2 z-0" />
                            {steps.map((step) => {
                                const Icon = step.icon;
                                const isActive = currentStep === step.id;
                                const isCompleted = currentStep > step.id;

                                return (
                                    <div key={step.id} className="relative z-10 flex flex-col items-center">
                                        <div className={`
                      w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 border
                      ${isActive ? 'bg-primary border-primary shadow-lg shadow-primary/20 scale-110 text-primary-foreground' :
                                                isCompleted ? 'bg-primary/20 border-primary/20 text-primary' : 'bg-card border-border/40 text-muted-foreground'}
                    `}>
                                            {isCompleted ? <CheckCircle2 size={18} /> : <Icon size={18} />}
                                        </div>
                                        <span className={`text-[10px] font-black uppercase tracking-tighter mt-3 transition-colors duration-500
                      ${isActive ? 'text-foreground' : 'text-muted-foreground'}
                    `}>
                                            {step.title}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Form Container */}
                        <div className="glass-card rounded-[3rem] p-8 md:p-12 border border-border/20 shadow-2xl">
                            <form onSubmit={handleSubmit}>
                                <AnimatePresence mode="wait" custom={currentStep}>
                                    <motion.div
                                        key={currentStep}
                                        custom={currentStep}
                                        variants={slideVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        {currentStep === 1 && (
                                            <div className="space-y-6">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div className="space-y-2">
                                                        <label className="text-xs font-black uppercase tracking-widest ml-1">Ονοματεπώνυμο</label>
                                                        <div className="relative">
                                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                                                            <Input
                                                                required
                                                                name="name"
                                                                autoComplete="name"
                                                                placeholder="π.χ. Γιάννης Παπαδόπουλος"
                                                                className="pl-12 h-14 bg-background/50 border-border/40 rounded-2xl"
                                                                value={formData.name}
                                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-xs font-black uppercase tracking-widest ml-1">Email</label>
                                                        <div className="relative">
                                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                                                            <Input
                                                                required
                                                                name="email"
                                                                autoComplete="email"
                                                                type="email"
                                                                placeholder="test@example.com"
                                                                className="pl-12 h-14 bg-background/50 border-border/40 rounded-2xl"
                                                                value={formData.email}
                                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div className="space-y-2">
                                                        <label className="text-xs font-black uppercase tracking-widest ml-1">Τηλέφωνο</label>
                                                        <div className="relative">
                                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                                                            <Input
                                                                required
                                                                name="tel"
                                                                autoComplete="tel"
                                                                placeholder="+30 69..."
                                                                className="pl-12 h-14 bg-background/50 border-border/40 rounded-2xl"
                                                                value={formData.phone}
                                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-xs font-black uppercase tracking-widest ml-1">Τοποθεσία</label>
                                                        <div className="relative">
                                                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                                                            <Input
                                                                required
                                                                name="location"
                                                                autoComplete="address-level2"
                                                                placeholder="π.χ. Χανιά / Remote"
                                                                className="pl-12 h-14 bg-background/50 border-border/40 rounded-2xl"
                                                                value={formData.location}
                                                                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {currentStep === 2 && (
                                            <div className="space-y-6">
                                                <div className="space-y-2">
                                                    <label className="text-xs font-black uppercase tracking-widest ml-1">Ποιός είναι ο ρόλος σου;</label>
                                                    <Input
                                                        required
                                                        placeholder="π.χ. Designer, Full-Stack Dev, Growth Marketer"
                                                        className="h-14 bg-background/50 border-border/40 rounded-2xl focus:border-primary/50 transition-colors"
                                                        value={formData.role}
                                                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                                    />
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div className="space-y-2">
                                                        <label className="text-xs font-black uppercase tracking-widest ml-1">Έτη Εμπειρίας</label>
                                                        <Input
                                                            placeholder="π.χ. 5+ έτη"
                                                            className="h-14 bg-background/50 border-border/40 rounded-2xl"
                                                            value={formData.experience}
                                                            onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-xs font-black uppercase tracking-widest ml-1">Κύριο Skill</label>
                                                        <div className="relative">
                                                            <Zap className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/50" size={16} />
                                                            <Input
                                                                required
                                                                placeholder="π.χ. React, SEO, UI Design"
                                                                className="pl-12 h-14 bg-background/50 border-border/40 rounded-2xl"
                                                                value={formData.mainSkill}
                                                                onChange={(e) => setFormData({ ...formData, mainSkill: e.target.value })}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {currentStep === 3 && (
                                            <div className="space-y-6">
                                                <div className="space-y-2">
                                                    <label className="text-xs font-black uppercase tracking-widest ml-1">LinkedIn Profile</label>
                                                    <div className="relative">
                                                        <Linkedin className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0077b5]" size={16} />
                                                        <Input
                                                            placeholder="https://linkedin.com/in/..."
                                                            className="pl-12 h-14 bg-background/50 border-border/40 rounded-2xl"
                                                            value={formData.linkedin}
                                                            onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-xs font-black uppercase tracking-widest ml-1">Portfolio / Website / GitHub</label>
                                                    <div className="relative">
                                                        <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                                                        <Input
                                                            placeholder="https://yourwork.com"
                                                            className="pl-12 h-14 bg-background/50 border-border/40 rounded-2xl"
                                                            value={formData.portfolio}
                                                            onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {currentStep === 4 && (
                                            <div className="space-y-6">
                                                <div className="space-y-2">
                                                    <label className="text-xs font-black uppercase tracking-widest ml-1">Πες μας λίγα λόγια για σένα</label>
                                                    <Textarea
                                                        placeholder="Τις επιτυχίες σου, τι σε παθιάζει..."
                                                        className="min-h-[120px] bg-background/50 border-border/40 rounded-2xl p-4 resize-none focus:border-primary/50 transition-colors"
                                                        value={formData.bio}
                                                        onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-xs font-black uppercase tracking-widest ml-1">Γιατί θέλεις να γίνεις Hustler;</label>
                                                    <Textarea
                                                        placeholder="Ποιοι είναι οι στόχοι σου;"
                                                        className="min-h-[100px] bg-background/50 border-border/40 rounded-2xl p-4 resize-none focus:border-primary/50 transition-colors"
                                                        value={formData.motivation}
                                                        onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                                                    />
                                                </div>
                                                <div className="flex items-center gap-3 pt-4">
                                                    <input
                                                        type="checkbox"
                                                        id="terms"
                                                        required
                                                        className="w-5 h-5 rounded border-border/40 bg-background/50 text-primary focus:ring-primary/20 focus:ring-offset-0"
                                                    />
                                                    <label htmlFor="terms" className="text-xs text-muted-foreground">
                                                        Συμφωνώ με τους <a href="/terms" className="text-foreground hover:underline hover:text-primary transition-colors" target="_blank">Όρους Χρήσης</a> και την <a href="/privacy" className="text-foreground hover:underline hover:text-primary transition-colors" target="_blank">Πολιτική Απορρήτου</a>.
                                                    </label>
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                </AnimatePresence>

                                {/* Footer Controls */}
                                <div className="mt-12 pt-8 border-t border-border/10 flex items-center justify-between">
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        onClick={handleBack}
                                        disabled={currentStep === 1}
                                        className="rounded-xl px-6 h-12 flex items-center gap-2 text-muted-foreground hover:text-foreground disabled:opacity-30"
                                    >
                                        <ArrowLeft size={16} /> Πίσω
                                    </Button>

                                    {currentStep < steps.length ? (
                                        <Button
                                            type="button"
                                            variant="hero"
                                            onClick={handleNext}
                                            className="rounded-xl px-8 h-12 group shadow-lg shadow-primary/10"
                                        >
                                            Επόμενο <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    ) : (
                                        <Button
                                            type="submit"
                                            variant="hero"
                                            className="rounded-xl px-12 h-12 group bg-gradient-to-r from-primary to-accent border-none shadow-xl shadow-primary/20"
                                        >
                                            Υποβολή Αίτησης <Rocket className="ml-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" size={18} />
                                        </Button>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                ) : (
                    /* Success State */
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-20 px-8 glass-card rounded-[4rem] border border-primary/20 shadow-3xl"
                    >
                        <div className="w-24 h-24 rounded-[2rem] bg-primary/10 flex items-center justify-center mx-auto mb-10 shadow-inner">
                            <Rocket size={48} className="text-primary animate-pulse" />
                        </div>
                        <h2 className="font-display text-4xl md:text-5xl font-black mb-6 tracking-tighter">Έτοιμος για <br /><span className="text-gradient">Lift Off!</span></h2>
                        <p className="text-muted-foreground text-lg mb-12 max-w-sm mx-auto leading-relaxed">
                            Ευχαριστούμε για το ενδιαφέρον! Η ομάδα μας θα εξετάσει το προφίλ σου και θα επικοινωνήσουμε σύντομα.
                        </p>
                        <Button variant="hero" size="lg" className="rounded-full px-12 h-16 group" asChild>
                            <Link to="/roster">Επιστροφή στο Roster <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" /></Link>
                        </Button>
                    </motion.div>
                )}

            </div>
        </div>
    );
};

export default HustlerJoin;
