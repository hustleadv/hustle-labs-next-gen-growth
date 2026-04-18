import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    TrendingUp, Megaphone, Target, Zap,
    BarChart3, MousePointer2, Mail, Users,
    ArrowRight, CheckCircle2, Globe, Rocket,
    Settings, MessageSquare, PieChart, ShieldCheck, Sparkles,
    ShoppingBag, Building2, Briefcase, Hotel, Play
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion from "@/components/FAQAccordion";
import PageHero from "@/components/PageHero";
import sigma22 from "@/assets/sigma22.jpg";

/* ─── Animation helpers ─── */
const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] as const },
});

/* ─── Growth Pillars ─── */
const growthPillars = [
    {
        icon: Megaphone,
        title: "Paid Media Mastery",
        desc: "Στρατηγική διαφήμιση με απόλυτη εστίαση στην κερδοφορία. Διαχειριζόμαστε το budget σας σε Meta, Google, TikTok και YouTube, στοχεύοντας στο Scale και όχι απλώς στην προβολή.",
        gradient: "from-blue-500/10 to-primary/10",
        stats: "3.5x Avg. ROAS"
    },
    {
        icon: Target,
        title: "Conversion Funnels",
        desc: "Βελτιστοποιούμε κάθε βήμα της αγοραστικής εμπειρίας. Δημιουργούμε landing pages και funnels που καθοδηγούν την ψυχολογία του πελάτη και μετατρέπουν το ενδιαφέρον σε πωλήσεις.",
        gradient: "from-primary/10 to-accent/10",
        stats: "+40% Conv. Rate"
    },
    {
        icon: Mail,
        title: "Retention & CRM",
        desc: "Μεγιστοποιούμε την αξία κάθε πελάτη (LTV). Στήνουμε αυτοματοποιημένα flows που χτίζουν ουσιαστική σχέση με το κοινό σας και μετατρέπουν τους αγοραστές σε πιστούς fans.",
        gradient: "from-violet-500/10 to-accent/10",
        stats: "30% Extra Rev."
    },
    {
        icon: PieChart,
        title: "Data & Tracking",
        desc: "Απόλυτη διαφάνεια μέσω advanced analytics (Server-side tracking). Ξέρετε ακριβώς ποιο κανάλι φέρνει το μεγαλύτερο κέρδος, ώστε να επενδύετε με ασφάλεια εκεί που υπάρχει αποτέλεσμα.",
        gradient: "from-amber-500/10 to-primary/10",
        stats: "100% Tracking"
    },
];

/* ─── Industries ─── */
const industries = [
    { icon: ShoppingBag, name: "E-commerce & D2C", text: "Scaling brands με ROAS-driven Facebook & Google Ads." },
    { icon: Hotel, name: "Hospitality & Tourism", text: "Αύξηση απευθείας κρατήσεων και premium visibility." },
    { icon: Building2, name: "Real Estate", text: "Lead generation συστήματα για ποιοτικούς αγοραστές." },
    { icon: Briefcase, name: "B2B & SaaS", text: "Demand generation και στρατηγική acquisition." },
];

/* ─── Case Study ─── */
const featuredCaseStudy = {
    title: "Sigmalabs AI",
    category: "AI E-commerce Scale",
    metrics: ["+180% Revenue", "4.2x ROAS", "12k New Leads"],
    text: "Πώς χρησιμοποιήσαμε ένα συνδυασμό Meta Ads και Retention Marketing για να εκτοξεύσουμε το Sigmalabs σε λιγότερο από 6 μήνες.",
    link: "/portfolio/sigmalabs-ai",
    image: sigma22
};

/* ─── Methodology ─── */
const steps = [
    { num: "01", icon: ShieldCheck, title: "Audit & Architecture", desc: "Αναλύουμε το ιστορικό, ελέγχουμε τα funnels και εντοπίζουμε τα leaks. Χτίζουμε τη στρατηγική." },
    { num: "02", icon: Settings, title: "System Setup", desc: "Εγκαθιστούμε advanced tracking, δημιουργούμε τα creatives και στήνουμε την αρχιτεκτονική των καμπανιών." },
    { num: "03", icon: Zap, title: "Execution & Flow", desc: "Τα ads βγαίνουν live. Βελτιστοποιούμε καθημερινά βάσει real-time data για μέγιστη απόδοση." },
    { num: "04", icon: TrendingUp, title: "Scale & Dominate", desc: "Βρίσκουμε τους νικητές και αυξάνουμε επιθετικά το budget για να κυριαρχήσεις στην αγορά." },
];

/* ─── FAQ ─── */
const faqs = [
    { question: "Πόσο budget χρειάζομαι για διαφήμιση;", answer: "Εξαρτάται από τον κλάδο και τους στόχους σου. Ξεκινάμε με ένα budget που επιτρέπει να συλλέξουμε δεδομένα και το αυξάνουμε όταν δούμε αποτελέσματα." },
    { question: "Πόσο γρήγορα θα δω αποτελέσματα;", answer: "Οι διαφημίσεις (Paid Ads) φέρνουν κίνηση αμέσως. Η βελτιστοποίηση για μέγιστο ROI συνήθως παίρνει 2, 4 εβδομάδες data collection." },
    { question: "Αναλαμβάνετε και το περιεχόμενο (δημιουργικά);", answer: "Ναι. Μέσω του Studio μας αναλαμβάνουμε από το copy μέχρι το visual content και το video production για τις διαφημίσεις σου." },
    { question: "Πώς με ενημερώνετε για την πορεία;", answer: "Έχεις πρόσβαση σε ένα real-time custom dashboard και κάνουμε μηνιαία ή εβδομαδιαία calls αναφοράς και στρατηγικής." },
];

const Growth = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <PageHero
                label="Hustle GrowthLab"
                size="large"
                floatingIcons={[TrendingUp, Megaphone, Target, BarChart3, MousePointer2, Mail, Users, Rocket, Zap]}
                title="Data-Driven"
                highlight="Performance."
                description="Δεν υποθέτουμε, δοκιμάζουμε. Στήνουμε digital συστήματα που μετατρέπουν την προσοχή σε κέρδος, με απόλυτη διαφάνεια και εστίαση στο scale."
            >
                <div className="flex flex-wrap justify-center gap-6 mt-12">
                    <Button variant="hero" size="lg" className="rounded-full px-12 h-16 text-lg font-bold shadow-2xl shadow-primary/20 group" asChild>
                        <Link to="/contact">
                            Ξεκίνα το Scale <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
                        </Link>
                    </Button>
                    <Button variant="hero-outline" size="lg" className="rounded-full px-12 h-16 text-lg font-bold border-white/10 hover:bg-white/5 transition-all text-foreground" asChild>
                        <a href="#services">Δες τις Υπηρεσίες</a>
                    </Button>
                </div>
            </PageHero>

            {/* ── TRANSITION TO LIGHT ── */}
            <div className="h-32 md:h-64 section-mask-dark-to-light relative z-20" />

            {/* ─── Growth Pillars ─── */}
            <section id="services" className="py-32 relative overflow-hidden section-light">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_hsl(var(--primary)/0.04),_transparent_50%)] pointer-events-none" />
                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <SectionHeading
                        label="Growth Services"
                        title="Ολιστική Στρατηγική Ανάπτυξης"
                        highlight="Ανάπτυξης"
                        description="Σχεδιάζουμε την πλήρη διαδρομή του πελάτη σας: Από την πρώτη επαφή μέχρι την επαναλαμβανόμενη αγορά, χτίζουμε το σύστημα που μετατρέπει το budget σε κερδοφόρα ανάπτυξη."
                        dark={false}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-6xl mx-auto">
                        {growthPillars.map((p, i) => (
                            <motion.div
                                key={i}
                                {...fadeUp(i * 0.1)}
                                className="group relative flex flex-col bg-white border border-slate-200 hover:border-primary/30 rounded-[3rem] overflow-hidden p-10 lg:p-12 hover:-translate-y-4 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] transition-all duration-700"
                            >
                                {/* Glow Accent */}
                                <div className={`absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br ${p.gradient} blur-[60px] opacity-0 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none`} />

                                <div className="flex items-start justify-between mb-8 relative z-10">
                                    <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                                        <p.icon size={28} className="text-primary opacity-80 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <div className="px-4 py-1.5 rounded-full border border-slate-100 bg-slate-50 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-primary group-hover:border-primary/20 group-hover:bg-primary/5 transition-all duration-500">
                                        {p.stats}
                                    </div>
                                </div>

                                <div className="relative z-10 flex-1">
                                    <h3 className="font-display text-3xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-primary transition-colors duration-500">{p.title}</h3>
                                    <div className="h-[2px] w-12 bg-primary/40 mb-6 group-hover:w-24 group-hover:bg-primary transition-all duration-500" />
                                    <p className="text-slate-500 leading-relaxed text-lg font-medium opacity-80">{p.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Philosophy Section ─── */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div {...fadeUp()}>
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
                                Η φιλοσοφία μας: <br />
                                <span className="text-gradient">Performance First.</span>
                            </h2>
                            <div className="space-y-6">
                                <p className="text-lg text-muted-foreground leading-relaxed italic">
                                    Αγνοούμε τα vanity metrics. Εστιάζουμε στα νούμερα που πραγματικά επηρεάζουν το bottom line της επιχείρησής σας.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Απόλυτη Διαφάνεια: Πλήρης έλεγχος και αναφορά για κάθε ευρώ της επένδυσής σας.",
                                        "Agile Execution: Ταχεία δοκιμή στρατηγικών και άμεσο scale των νικηφόρων καμπανιών.",
                                        "Data-Driven Creative: Η αισθητική συναντά τα δεδομένα για μέγιστη απόδοση.",
                                        "Business Alignment: Λειτουργούμε ως στρατηγικό extension της δικής σας ομάδας."
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-foreground/80 font-light">
                                            <CheckCircle2 size={20} className="text-primary mt-1 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                        <motion.div {...fadeUp(0.2)} className="relative aspect-square lg:aspect-video rounded-3xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center group hover:border-primary/30 transition-all duration-700">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(var(--primary)/0.15),_transparent_60%)] opacity-50 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" />

                            {/* Decorative background lines */}
                            <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none" style={{ backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

                            <div className="text-center p-12 relative z-10">
                                <div className="relative w-32 h-32 mx-auto mb-8">
                                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/40 group-hover:blur-3xl transition-all duration-700" />
                                    <div className="w-full h-full rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center relative z-10 group-hover:scale-110 group-hover:-translate-y-2 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-700 shadow-2xl">
                                        <BarChart3 size={64} className="text-primary/50 group-hover:text-primary transition-colors duration-700" />
                                    </div>
                                    <div className="absolute -top-4 -right-4 bg-primary/10 border border-primary/30 text-primary text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg animate-float">
                                        LIVE DATA
                                    </div>
                                </div>
                                <div className="text-4xl lg:text-5xl font-display font-black text-white mb-2 tracking-tight group-hover:text-primary transition-colors duration-700">Live Optimization</div>
                                <div className="text-primary/60 uppercase tracking-[0.3em] text-xs font-black">Scaling Systems in Place</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── Real Results Strategy Strip ─── */}
            <section className="py-24 relative overflow-hidden bg-gradient-to-br from-primary/10 to-background border-y border-primary/10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_hsl(var(--primary)/0.15),_transparent_70%)] pointer-events-none" />
                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
                        {[
                            { value: "3.5x", label: "Average ROAS", suffix: "+" },
                            { value: "40", label: "Conv. Rate Lift", suffix: "%" },
                            { value: "100", label: "Tracking Accuracy", suffix: "%" },
                            { value: "2M", label: "Ad Spend Managed", suffix: "€+" }
                        ].map((stat, i) => (
                            <motion.div key={i} {...fadeUp(i * 0.1)} className="text-center md:text-left flex-1 border-b md:border-b-0 md:border-r border-primary/20 pb-8 md:pb-0 last:border-0 group cursor-default">
                                <div className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-white mb-2 tracking-tighter flex items-center justify-center md:justify-start group-hover:scale-105 group-hover:-translate-y-1 transition-transform duration-500 origin-left">
                                    {stat.value}<span className="text-primary text-3xl md:text-4xl ml-1 group-hover:animate-pulse">{stat.suffix}</span>
                                </div>
                                <div className="text-primary/70 uppercase tracking-[0.2em] text-xs font-black group-hover:text-primary transition-colors duration-500">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Target Industries ─── */}
            <section className="py-32 relative overflow-hidden">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center mb-20">
                        <div className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-4">Expertise Per Sector</div>
                        <h2 className="font-display text-4xl md:text-5xl font-black text-white tracking-tight">Εξειδίκευση σε <span className="text-gradient">High-Growth</span> Κλάδους</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {industries.map((ind, i) => (
                            <motion.div
                                key={i}
                                {...fadeUp(i * 0.1)}
                                className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-primary/30 hover:bg-white/[0.07] transition-all duration-500 group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                                    <ind.icon size={24} className="text-primary" />
                                </div>
                                <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{ind.name}</h3>
                                <p className="text-white/50 text-sm leading-relaxed">{ind.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Methodology ─── */}
            <section className="py-32 relative overflow-hidden section-light">
                <div className="container mx-auto px-4 lg:px-8">
                    <SectionHeading
                        label="Methodology"
                        title="Το Σύστημα Ανάπτυξης"
                        highlight="Σύστημα"
                        description="Μια δοκιμασμένη διαδικασία 4 σταδίων για ελεγχόμενη και Scalable ανάπτυξη."
                        dark={false}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16 max-w-6xl mx-auto relative">
                        {/* Connecting Line */}
                        <div className="absolute top-[48px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden md:block" />

                        {steps.map((s, i) => (
                            <motion.div key={i} {...fadeUp(i * 0.1)} className="group relative flex flex-col items-center text-center">
                                <div className="w-24 h-24 rounded-[2rem] bg-white border border-slate-200 shadow-xl flex items-center justify-center mb-10 relative z-10 group-hover:-translate-y-2 group-hover:border-primary/50 group-hover:shadow-primary/20 transition-all duration-500">
                                    <s.icon size={36} className="text-slate-400 group-hover:text-primary transition-colors duration-500" />
                                    <span className="absolute -bottom-4 bg-slate-900 border border-slate-700 px-3 py-1 rounded-full text-[10px] font-black text-white shadow-lg uppercase tracking-widest">
                                        Step {s.num}
                                    </span>
                                </div>
                                <h3 className="font-display text-xl font-black text-slate-900 mb-4 tracking-tight">{s.title}</h3>
                                <p className="text-base text-slate-500 font-medium leading-relaxed px-2">{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Featured Case Study ─── */}
            <section className="py-24 relative overflow-hidden bg-[#0a0a0b]">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        {...fadeUp()}
                        className="max-w-6xl mx-auto rounded-[3rem] overflow-hidden bg-white/5 border border-white/10 relative group hover:border-primary/30 transition-all duration-700"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-5">
                            <div className="relative h-72 lg:h-full lg:col-span-2 overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10">
                                <img
                                    src={featuredCaseStudy.image}
                                    alt={featuredCaseStudy.title}
                                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-[2s] opacity-70 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent lg:bg-none" />
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="w-16 h-16 rounded-full bg-primary/20 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary transition-all duration-500">
                                        <Play size={24} className="text-white fill-white ml-1" />
                                    </div>
                                </div>
                            </div>

                            <div className="p-10 lg:p-16 lg:col-span-3 flex flex-col justify-center">
                                <div className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-6">{featuredCaseStudy.category}</div>
                                <h2 className="font-display text-3xl lg:text-5xl font-black text-white mb-8 tracking-tighter leading-none">
                                    The <span className="text-gradient">{featuredCaseStudy.title}</span> <br /> Story.
                                </h2>

                                <div className="grid grid-cols-3 gap-4 mb-10">
                                    {featuredCaseStudy.metrics.map((m, i) => (
                                        <div key={i} className="text-center p-4 rounded-2xl bg-white/5 border border-white/5">
                                            <div className="text-primary font-black text-lg md:text-xl mb-1">{m.split(' ')[0]}</div>
                                            <div className="text-white/30 uppercase text-[8px] font-black tracking-widest">{m.split(' ').slice(1).join(' ')}</div>
                                        </div>
                                    ))}
                                </div>

                                <p className="text-white/50 text-lg font-light italic leading-relaxed mb-10">
                                    "{featuredCaseStudy.text}"
                                </p>

                                <Button variant="hero" size="lg" className="rounded-full px-10 h-16 text-lg font-bold group w-full sm:w-auto" asChild>
                                    <Link to={featuredCaseStudy.link}>
                                        Read Case Study <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ─── FAQ ─── */}
            <section className="py-32 bg-background">
                <div className="container mx-auto px-4 lg:px-8">
                    <SectionHeading label="FAQ" title="Συχνές ερωτήσεις" highlight="ερωτήσεις" />
                    <div className="max-w-3xl mx-auto mt-16">
                        <FAQAccordion items={faqs} />
                    </div>
                </div>
            </section>

            {/* ── Final CTA (Deep Dark Cinematic) ── */}
            <section className="py-24 relative overflow-hidden bg-[#050506]">
                {/* Technical Grid & Glows */}
                <div className="absolute inset-0 opacity-[0.1] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #8bc34a 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] opacity-50 pointer-events-none animate-pulse" />

                <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
                            <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60">Ready to Scale?</span>
                        </div>

                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tighter leading-tight">
                            Ας μεγαλώσουμε <br />
                            <span className="text-gradient">μαζί.</span>
                        </h2>

                        <p className="text-lg md:text-xl text-white/50 mb-12 max-w-3xl mx-auto leading-relaxed font-light italic">
                            "Δεν δεσμεύεστε σε τίποτα. Πείτε μας για τους στόχους σας <br className="hidden md:block" />
                            και θα σας προτείνουμε τη στρατηγική που χρειάζεστε."
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <Button variant="hero" size="lg" className="rounded-full px-12 h-16 text-lg font-bold group shadow-2xl shadow-primary/40" asChild>
                                <Link to="/contact" className="flex items-center gap-4">
                                    Strategy Call <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom decorative line */}
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </section>
        </div>
    );
};

export default Growth;
