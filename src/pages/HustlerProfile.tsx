import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    ArrowLeft, BadgeCheck, MapPin, Globe, Linkedin, Github, Instagram,
    Briefcase, GraduationCap, Star, ShieldCheck, Mail, MessageSquare, ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { hustlers } from "@/data/hustlers";
import PageHero from "@/components/PageHero";
import NotFound from "./NotFound";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as any },
});

const HustlerProfile = () => {
    const { slug } = useParams<{ slug: string }>();
    const hustler = hustlers.find((h) => h.slug === slug);

    if (!hustler) {
        return <NotFound />;
    }

    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="container mx-auto px-4 lg:px-8 pt-24 lg:pt-32">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-8"
                >
                    <Button variant="ghost" className="hover:bg-primary/5 -ml-2 text-muted-foreground hover:text-primary transition-colors" asChild>
                        <Link to="/roster">
                            <ArrowLeft size={18} className="mr-2" /> Back to Roster
                        </Link>
                    </Button>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                    {/* Left Column: Brief & Visual */}
                    <div className="lg:col-span-5">
                        <motion.div {...fadeUp()} className="sticky top-32">
                            <div className="relative rounded-[3rem] overflow-hidden aspect-square mb-8 glass-card p-1 shadow-2xl">
                                <div className="w-full h-full rounded-[2.8rem] bg-card/40 flex items-center justify-center relative overflow-hidden">
                                    {hustler.image ? (
                                        <img src={hustler.image} alt={hustler.name} className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="text-8xl font-display font-black text-primary/10 select-none">{hustler.initials}</div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                                </div>

                                {hustler.verified && (
                                    <div className="absolute top-8 right-8 bg-primary text-primary-foreground px-4 py-2 rounded-full flex items-center gap-2 text-xs font-black uppercase tracking-widest shadow-xl shadow-primary/20">
                                        <BadgeCheck size={14} /> VERIFIED
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-wrap gap-4 mb-8">
                                {hustler.socials.linkedin && (
                                    <Button variant="outline" className="rounded-2xl h-14 w-14 p-0 border-border/40 hover:bg-primary/5 hover:border-primary/20" asChild>
                                        <a href={hustler.socials.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
                                    </Button>
                                )}
                                {hustler.socials.instagram && (
                                    <Button variant="outline" className="rounded-2xl h-14 w-14 p-0 border-border/40 hover:bg-primary/5 hover:border-primary/20" asChild>
                                        <a href={hustler.socials.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
                                    </Button>
                                )}
                                {hustler.socials.github && (
                                    <Button variant="outline" className="rounded-2xl h-14 w-14 p-0 border-border/40 hover:bg-primary/5 hover:border-primary/20" asChild>
                                        <a href={hustler.socials.github} target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
                                    </Button>
                                )}
                                {hustler.socials.website && (
                                    <Button variant="outline" className="rounded-2xl h-14 w-14 p-0 border-border/40 hover:bg-primary/5 hover:border-primary/20" asChild>
                                        <a href={hustler.socials.website} target="_blank" rel="noopener noreferrer"><Globe size={20} /></a>
                                    </Button>
                                )}
                            </div>

                            <div className="p-8 rounded-[2.5rem] bg-card/30 border border-border/40">
                                <h4 className="font-display font-bold text-sm uppercase tracking-widest text-primary mb-6">Experience Highlights</h4>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary"><Star size={18} /></div>
                                        <div>
                                            <div className="text-xs font-black opacity-40 uppercase tracking-tighter">Experience</div>
                                            <div className="text-sm font-bold">{hustler.experience.years}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400"><Briefcase size={18} /></div>
                                        <div>
                                            <div className="text-xs font-black opacity-40 uppercase tracking-tighter">Projects</div>
                                            <div className="text-sm font-bold">{hustler.experience.projects}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent"><ShieldCheck size={18} /></div>
                                        <div>
                                            <div className="text-xs font-black opacity-40 uppercase tracking-tighter">Specialty</div>
                                            <div className="text-sm font-bold">{hustler.experience.specialty}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Details */}
                    <div className="lg:col-span-7">
                        <motion.div {...fadeUp(0.1)}>
                            <div className="mb-10">
                                <span className="text-primary font-black tracking-widest text-xs uppercase mb-4 block">Hustler Profile</span>
                                <h1 className="font-display text-5xl md:text-7xl font-black mb-4 leading-tight tracking-tighter">{hustler.name}</h1>
                                <p className="text-xl md:text-2xl text-muted-foreground font-light mb-6 border-l-2 border-primary/20 pl-6 italic">
                                    {hustler.role}
                                </p>
                                <div className="flex items-center gap-2 text-muted-foreground/60 mb-10">
                                    <MapPin size={16} />
                                    <span className="text-sm font-medium">{hustler.location}</span>
                                </div>
                            </div>

                            <div className="space-y-16">
                                {/* Bio */}
                                <section>
                                    <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-3 italic">
                                        <span className="text-primary">01.</span> Bio
                                    </h2>
                                    <div className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light space-y-6">
                                        {hustler.fullBio.split('\n').map((para, i) => (
                                            <p key={i}>{para}</p>
                                        ))}
                                    </div>
                                </section>

                                {/* Expertise */}
                                <section>
                                    <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-3 italic">
                                        <span className="text-primary">02.</span> Core Expertise
                                    </h2>
                                    <div className="flex flex-wrap gap-3">
                                        {hustler.skills.map((skill, i) => (
                                            <div key={i} className="px-6 py-3 rounded-2xl bg-card border border-border/40 text-sm font-bold group hover:border-primary/30 transition-colors flex items-center gap-3 shadow-sm">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                                                {skill}
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                {/* CTA */}
                                <section className="p-10 rounded-[3rem] bg-gradient-to-br from-card to-background border border-primary/10 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
                                    <h3 className="font-display text-3xl font-bold mb-4 relative z-10">Let's build something <span className="text-gradient font-black">remarkable</span>.</h3>
                                    <p className="text-muted-foreground mb-8 text-lg font-light relative z-10">
                                        Είσαι έτοιμος να δουλέψεις με τον/την {hustler.name.split(' ')[0]};
                                        Ξεκίνα ένα project σήμερα.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 relative z-10">
                                        <Button variant="hero" className="rounded-full px-10 h-14 text-base font-bold flex-1" asChild>
                                            <Link to="/contact">Book a Strategy Call <ArrowLeft className="rotate-180 ml-2" size={18} /></Link>
                                        </Button>
                                        <Button variant="outline" className="rounded-full px-10 h-14 border-border/40 hover:bg-card/40 flex-1" asChild>
                                            <Link to="/roster">Browse Roster</Link>
                                        </Button>
                                    </div>
                                </section>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HustlerProfile;
