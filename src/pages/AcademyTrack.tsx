import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowLeft, Megaphone, Globe, Cpu, Calendar, Users,
    MapPin, Clock, ArrowRight, CheckCircle2, Sparkles,
    ChevronRight, Star, GraduationCap, Zap, Rocket, Target, Award, Trophy
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const trackData: Record<string, any> = {
    advertising: {
        title: "Διαφήμιση & Προώθηση",
        label: "Ads & Conversion",
        icon: Megaphone,
        description: "Μάθε πώς να δημιουργείς καμπάνιες που φέρνουν αποτελέσματα, από το μηδέν. Εστίαση σε Meta (Facebook/Instagram), Google & TikTok Ads.",
        workshops: [
            { id: "ads-1", title: "Facebook & Instagram Ads Masterclass", type: "Workshop", spots: 8, date: "15 Μαρ", price: "€49", duration: "4 ώρες" },
            { id: "ads-2", title: "Google Ads & Search Strategy", type: "Workshop", spots: 12, date: "22 Μαρ", price: "€49", duration: "4 ώρες" },
            { id: "ads-3", title: "TikTok Ads for Ecommerce", type: "Workshop", spots: 10, date: "5 Απρ", price: "€59", duration: "3 ώρες" },
        ]
    },
    websites: {
        title: "Ιστοσελίδες & Ταχύτητα",
        label: "Performance & UX",
        icon: Globe,
        description: "Τεχνική και σχεδιαστική υπεροχή για ένα site που πουλάει 24/7. Speed optimization, SEO και Conversion Rate Optimization.",
        workshops: [
            { id: "web-1", title: "Speed Optimization: Lighthouse 100", type: "Workshop", spots: 12, date: "5 Απρ", price: "€49", duration: "3 ώρες" },
            { id: "web-2", title: "SEO & Content Architecture", type: "Workshop", spots: 10, date: "12 Απρ", price: "€49", duration: "4 ώρες" },
            { id: "web-3", title: "WordPress Security & Maintenance", type: "Workshop", spots: 15, date: "20 Απρ", price: "€39", duration: "2 ώρες" },
        ]
    },
    ai: {
        title: "AI για Επιχειρήσεις",
        label: "AI & Automation",
        icon: Cpu,
        description: "Από τα prompts στους αυτοματισμούς. Κέρδισε χρόνο με τη δύναμη του AI. n8n, Zapier, Make και GPT agents.",
        workshops: [
            { id: "ai-1", title: "Prompt Engineering & Automation", type: "Workshop", spots: 12, date: "29 Μαρ", price: "€59", duration: "4 ώρες" },
            { id: "ai-2", title: "AI Content Creation for Social", type: "Workshop", spots: 12, date: "19 Απρ", price: "€49", duration: "3 ώρες" },
            { id: "ai-3", title: "Building Custom AI Agents", type: "Workshop", spots: 6, date: "25 Απρ", price: "€89", duration: "5 ώρες" },
        ]
    }
};

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] as const },
});

const AcademyTrack = () => {
    const { slug } = useParams<{ slug: string }>();
    const track = slug ? trackData[slug] : null;
    const { toast } = useToast();

    if (!track) {
        return (
            <div className="min-h-screen flex items-center justify-center section-light bg-white">
                <div className="text-center">
                    <h1 className="text-4xl font-black mb-4">Το θέμα δεν βρέθηκε</h1>
                    <Link to="/academy">
                        <Button variant="hero">Επιστροφή στην Ακαδημία</Button>
                    </Link>
                </div>
            </div>
        );
    }

    const Icon = track.icon;

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Hero */}
            <PageHero
                label={track.label}
                floatingIcons={[Icon, GraduationCap, Zap, Rocket, Target, Award, Trophy, Sparkles, Star]}
                title={
                    <>
                        Workshops:<br />
                        <span className="text-gradient">{track.title}</span>
                    </>
                }
                description={track.description}
            >
                <div className="flex justify-center mt-12">
                    <Link to="/academy">
                        <Button variant="hero-outline" size="sm" className="rounded-full px-8 h-12 text-sm font-bold border-white/10 hover:bg-white/5 transition-all text-white/60">
                            <ArrowLeft size={16} className="mr-2" /> Πίσω στην Ακαδημία
                        </Button>
                    </Link>
                </div>
            </PageHero>

            {/* Workshops Grid */}
            <section className="py-32 relative overflow-hidden section-light">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_hsl(var(--primary)/0.03),_transparent_60%)] pointer-events-none" />

                <div className="container mx-auto px-4 lg:px-8">
                    <SectionHeading
                        dark={false}
                        label="Διαθέσιμα Workshops"
                        title="Επίλεξε το Workshop σου"
                        highlight="Workshop"
                        description="Μικρές ομάδες, πρακτική εφαρμογή και άμεσα αποτελέσματα."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto mt-24">
                        {track.workshops.map((w: any, i: number) => (
                            <motion.div
                                key={i}
                                {...fadeUp(i * 0.1)}
                                className="group relative bg-white border border-slate-200 rounded-[2.5rem] p-10 hover:border-primary/30 hover:shadow-[0_45px_100px_-25px_rgba(0,0,0,0.08)] transition-all duration-700 overflow-hidden flex flex-col"
                            >
                                <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700">
                                    <Icon size={120} />
                                </div>

                                <div className="flex items-center gap-3 mb-8">
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] bg-primary/10 text-primary px-4 py-1.5 rounded-full">
                                        {w.type}
                                    </span>
                                    <div className="flex items-center gap-1.5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                                        <Clock size={12} className="text-primary/40" /> {w.duration}
                                    </div>
                                </div>

                                <h3 className="font-display text-2xl font-black text-slate-900 mb-8 leading-tight group-hover:text-primary transition-colors duration-500">
                                    {w.title}
                                </h3>

                                <div className="space-y-5 mb-12 flex-1">
                                    <div className="flex items-center gap-4 text-sm text-slate-600 font-bold">
                                        <div className="w-9 h-9 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-primary/5 transition-colors">
                                            <Calendar size={16} className="text-primary" />
                                        </div>
                                        {w.date}
                                    </div>
                                    <div className="flex items-center gap-4 text-sm text-slate-600 font-bold">
                                        <div className="w-9 h-9 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-primary/5 transition-colors">
                                            <Users size={16} className="text-primary" />
                                        </div>
                                        {w.spots} διαθέσιμες θέσεις
                                    </div>
                                    <div className="flex items-center gap-4 text-sm text-slate-600 font-bold">
                                        <div className="w-9 h-9 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-primary/5 transition-colors">
                                            <MapPin size={16} className="text-primary" />
                                        </div>
                                        Hustle Space, Χανιά
                                    </div>
                                </div>

                                <div className="pt-8 border-t border-slate-100 flex items-center justify-between">
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Κόστος</p>
                                        <p className="text-3xl font-black text-slate-900">{w.price}</p>
                                    </div>
                                    <Button variant="hero" className="rounded-full px-8 h-14 group/btn shadow-lg shadow-primary/20 font-black tracking-widest uppercase text-[10px]">
                                        Κράτηση <ArrowRight size={18} className="ml-2 group-hover/btn:translate-x-2 transition-transform" />
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Corporate CTA */}
                    <motion.div
                        {...fadeUp(0.4)}
                        className="mt-32 p-12 md:p-16 rounded-[4rem] bg-[#050506] border border-white/5 flex flex-col md:flex-row items-center gap-12 text-center md:text-left overflow-hidden relative group"
                    >
                        <div className="absolute top-0 right-0 -mr-24 -mt-24 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-1000">
                            <Sparkles size={300} className="text-primary" />
                        </div>
                        <div className="relative z-10">
                            <h3 className="font-display text-3xl md:text-4xl font-black text-white mb-6 italic tracking-tight">Προσαρμοσμένο για την ομάδα σας;</h3>
                            <p className="text-white/50 max-w-xl text-lg leading-relaxed font-light">
                                Μπορούμε να πραγματοποιήσουμε οποιοδήποτε εργαστήριο αποκλειστικά για την εταιρεία σας, προσαρμόζοντας το περιεχόμενο στις δικές σας προκλήσεις.
                            </p>
                        </div>
                        <Button variant="hero" size="lg" className="rounded-full px-12 h-20 text-lg font-bold group shadow-2xl shadow-primary/30 relative z-10 shrink-0">
                            Φτιάξτε τη Διαδρομή σας <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Founder Quote */}
            <section className="py-48 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_hsl(var(--primary)/0.02),_transparent_50%)] pointer-events-none" />
                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex justify-center gap-1.5 mb-12">
                            {[...Array(5)].map((_, i) => <Star key={i} size={24} className="text-primary fill-primary shadow-xl shadow-primary/20" />)}
                        </div>
                        <h2 className="font-display text-3xl md:text-5xl font-black text-slate-900 mb-16 italic leading-[1.3] tracking-tight">
                            "Η γνώση είναι δύναμη, αλλά η εφαρμογή της είναι το αποτέλεσμα. Στο Hustle Academy εστιάζουμε 100% στην πράξη."
                        </h2>
                        <div className="flex items-center justify-center gap-6">
                            <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-primary to-primary-foreground shadow-2xl shadow-primary/30" />
                            <div className="text-left">
                                <p className="font-black text-slate-900 uppercase tracking-[0.2em] text-sm leading-tight mb-1">Vasiliki Giakoumaki</p>
                                <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Founder, Hustle Labs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AcademyTrack;
