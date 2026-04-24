import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Target, Users, Heart, Fingerprint, Handshake, Star, Coffee, Code2, Rocket, Paintbrush } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import LabBackground from "@/components/LabBackground";

const values = [
  { icon: Target, title: "Pure Clarity", desc: "Ξεκάθαρη στρατηγική, επικοινωνία και αποτελέσματα. Αφήνουμε τα buzzwords στους άλλους." },
  { icon: Zap, title: "Velocity Matters", desc: "Δεν περιμένουμε μήνες. Κινούμαστε γρήγορα, δοκιμάζουμε, βελτιώνουμε, παραδίδουμε με ταχύτητα." },
  { icon: Heart, title: "Skin in the Game", desc: "Κάθε project είναι δικό μας project. Δεν παραδίδουμε ποτέ κάτι που δεν θα χρησιμοποιούσαμε εμείς." },
  { icon: Users, title: "True Partners", desc: "Δεν είμαστε απλά vendors. Γινόμαστε προέκταση της ομάδας σου, μοιραζόμαστε τον ίδιο στόχο." },
];

const team = [
  { name: "Founder / Strategy", role: "Vision & Architecture", icon: Target },
  { name: "Creative Lead", role: "UI/UX & Identity", icon: Paintbrush },
  { name: "Lead Engineer", role: "Code & Performance", icon: Code2 },
  { name: "Growth Head", role: "Scaling & Analytics", icon: Rocket },
];

const fade = {
  initial: { opacity: 0, y: 30 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-100px" } as const,
};

const About = () => {
  return (
    <div className="min-h-screen pt-24 bg-[#050505] text-white selection:bg-primary selection:text-black">
      <LabBackground />
      
      {/* Hero Section */}
      <div className="relative z-10">
        <PageHero
          label="The Lab Identity"
          icon={Fingerprint}
          floatingIcons={[Heart, Users, Handshake, Star, Target, Coffee, Zap, Fingerprint]}
          title="We don't build websites."
          highlight="We build businesses."
          description="Το Hustle Labs δεν είναι ένα απρόσωπο agency. Είμαστε ένα Boutique Studio στα Χανιά που δημιουργεί ψηφιακά συστήματα ανάπτυξης για φιλόδοξα brands."
        >
          <div className="flex flex-wrap gap-4 justify-center mt-10">
            <Button variant="hero" size="lg" className="rounded-full px-10 h-14 font-black uppercase tracking-[0.2em] group shadow-glow" asChild>
              <Link to="/project-brief" className="flex items-center gap-2">
                Start a Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="lg" className="rounded-full px-10 h-14 font-black uppercase tracking-[0.2em]" asChild>
              <Link to="/portfolio">View Portfolio</Link>
            </Button>
          </div>
        </PageHero>
      </div>

      {/* Mission */}
      <section className="py-24 relative z-10 border-t border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fade} className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-primary/50" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary italic">Our Mission</span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-12 leading-[1.1] tracking-tighter uppercase italic">
              Digital Presence of <br className="hidden md:block" />
              <span className="text-primary">World-Class Standard.</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 text-left">
              <p className="text-white/60 leading-relaxed text-lg font-medium border-l border-primary/30 pl-8">
                Η αποστολή μας είναι απλή: δημιουργούμε εργαλεία ανάπτυξης, όχι απλά «όμορφες ιστοσελίδες». Κάθε pixel, κάθε funnel, κάθε automation έχει έναν ξεκάθαρο σκοπό.
              </p>
              <p className="text-white/60 leading-relaxed text-lg font-medium">
                Να φέρει πελάτες, να εξοικονομήσει χρόνο, να κάνει scale. Αν δεν αποδίδει, δεν μας ενδιαφέρει πόσο ωραίο φαίνεται. Στη Hustle Labs συνδυάζουμε την υψηλή αισθητική με το αμείλικτο focus στα αποτελέσματα.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 relative z-10 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fade} className="text-center max-w-3xl mx-auto mb-20">
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/60 italic mb-6 block">Digital Roots</span>
             <h2 className="font-display text-4xl md:text-5xl font-bold uppercase italic tracking-tighter mb-6">
                The Lab <span className="text-primary">Philosophy.</span>
             </h2>
             <p className="text-white/40 text-lg font-medium">Οι αξίες που οδηγούν κάθε project μας, από το πρώτο meeting μέχρι το τελικό launch.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={i}
                {...fade}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col sm:flex-row gap-6 p-8 lg:p-10 rounded-[2.5rem] glass-card border border-white/5 hover:border-primary/30 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-black transition-all duration-500 text-primary relative z-10 shadow-lg">
                  <v.icon size={28} />
                </div>
                <div className="relative z-10 pt-2">
                  <h3 className="font-display text-xl font-bold uppercase italic tracking-widest text-white mb-3 group-hover:text-primary transition-colors">{v.title}</h3>
                  <p className="text-white/40 leading-relaxed font-medium text-sm">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Custom (Lab Style) */}
      <section className="py-32 relative z-10 border-y border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div {...fade} className="relative aspect-square md:aspect-[4/3] lg:aspect-square rounded-[3rem] overflow-hidden glass-card p-2 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent opacity-50" />
              <div className="w-full h-full rounded-[2.5rem] bg-[#080808] border border-white/5 flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(var(--primary)/0.05),_transparent_60%)] group-hover:scale-110 transition-transform duration-1000" />
                <Fingerprint size={100} className="text-primary/20 group-hover:text-primary/40 transition-colors duration-500 mb-8 relative z-10" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 relative z-10">No Templates</span>
              </div>
            </motion.div>
            
            <motion.div {...fade} transition={{ delay: 0.1 }} className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-primary italic">Custom Architecture</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase italic tracking-tighter leading-[1.1]">
                Templates weren't built <span className="text-primary">for you.</span>
              </h2>
              <div className="space-y-6 text-white/50 leading-relaxed text-lg font-medium border-l border-white/10 pl-6">
                <p>Ένα template λύνει ένα γενικό πρόβλημα. Η δική σου επιχείρηση όμως δεν είναι γενική. Έχει το δικό της κοινό, τους δικούς της στόχους και τη δική της μοναδική ταυτότητα.</p>
                <p>Ένα custom σύστημα δεν είναι απλά «πιο ακριβό». Είναι στρατηγικά σχεδιασμένο ώστε κάθε section, κάθε CTA και κάθε pixel να δουλεύει ασταμάτητα <span className="text-white font-bold">για τον δικό σου στόχο</span>.</p>
                <p>Στη Hustle Labs δεν κάνουμε drag-and-drop. Χτίζουμε από το μηδέν, γράφουμε καθαρό κώδικα και εφαρμόζουμε growth strategies που φέρνουν πραγματικά αποτελέσματα.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Impact */}
      <section className="py-32 relative z-10 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <motion.div {...fade}>
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 italic">Community First</span>
                  <div className="flex-1 h-px bg-white/10" />
                </div>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase italic tracking-tighter leading-[1.1] mb-8">
                  Growth with <br />
                  <span className="text-primary">Social Impact.</span>
                </h2>
                <div className="space-y-6 text-white/50 leading-relaxed text-lg font-medium">
                  <p>
                    Η επιτυχία δεν μετριέται μόνο σε κώδικα και conversion rates, αλλά και στην αξία που επιστρέφουμε στην κοινότητα που μας φιλοξενεί.
                  </p>
                  <p>
                    Πιστεύουμε ακράδαντα στη δύναμη της ανταποδοτικότητας. Γι' αυτό στηρίζουμε ενεργά τοπικούς φορείς, αθλητικές ομάδες και δράσεις μέσα από χορηγίες που ενισχύουν την ανάπτυξη του τόπου μας.
                  </p>
                  <p>
                    Στόχος μας είναι να προσφέρουμε εργαλεία και πόρους που επιτρέπουν σε κάθε δημιουργική προσπάθεια στα Χανιά (και όχι μόνο) να ακουστεί και να ξεχωρίσει παγκόσμια.
                  </p>
                </div>
              </motion.div>

              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {[
                  { label: "Local Support", value: "Active", sub: "Sponsorships" },
                  { label: "Education", value: "200+", sub: "Mentoring Hours" },
                  { label: "Digital Growth", value: "100%", sub: "Local Focus" },
                  { label: "Community", value: "Non-Profit", sub: "Partnerships" }
                ].map((stat, i) => (stat.label && (
                  <motion.div
                    key={i}
                    {...fade}
                    transition={{ delay: 0.1 * i }}
                    className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-primary/20 hover:bg-white/[0.04] transition-all group flex flex-col justify-center"
                  >
                    <div className="text-3xl md:text-4xl font-black text-primary mb-3 italic tracking-tighter drop-shadow-[0_0_15px_rgba(208,255,0,0.3)]">{stat.value}</div>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white mb-1">{stat.label}</div>
                    <div className="text-[9px] text-white/40 uppercase tracking-widest font-bold">{stat.sub}</div>
                  </motion.div>
                )))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Specs */}
      <section className="py-32 bg-primary/5 border-y border-primary/10 relative z-10 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
           <motion.div {...fade} className="text-center max-w-3xl mx-auto mb-20">
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/60 italic mb-6 block">The Collective</span>
             <h2 className="font-display text-4xl md:text-5xl font-bold uppercase italic tracking-tighter mb-6">
                Boutique Size. <span className="text-primary">Massive Impact.</span>
             </h2>
             <p className="text-white/60 text-lg font-medium">Κάθε μέλος της ομάδας φέρνει βαθιά εξειδίκευση. Μαζί, καλύπτουμε όλο το φάσμα της ψηφιακής ανάπτυξης χωρίς περιττό θόρυβο.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={i}
                {...fade}
                transition={{ delay: i * 0.1 }}
                className="group p-8 glass-card border border-primary/10 hover:border-primary/30 rounded-[2rem] text-center transition-all duration-500 bg-black/40 hover:bg-black/60"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-primary transition-all duration-500 text-primary group-hover:text-black">
                  <member.icon size={24} />
                </div>
                <h3 className="font-display text-lg font-bold uppercase italic tracking-widest text-white mb-2">{member.name}</h3>
                <p className="text-[10px] font-black text-primary/60 uppercase tracking-[0.2em]">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hustle Roster CTA */}
      <section className="py-32 relative z-10 border-t border-white/5 bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div {...fade} className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary italic">Elite Network</span>
                <div className="flex-1 h-px bg-primary/20" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase italic tracking-tighter leading-[1.1] mb-8">
                The Hustle <br />
                <span className="text-white">Roster.</span>
              </h2>
              <p className="text-white/50 text-lg font-medium leading-relaxed mb-10">
                Δεν περιοριζόμαστε στην in-house ομάδα μας. Έχουμε δημιουργήσει ένα αυστηρά επιλεγμένο δίκτυο από κορυφαίους freelancers, creators και developers. Ό,τι απαιτήσεις κι αν έχει το project σου, έχουμε τον κατάλληλο expert έτοιμο να αναλάβει δράση.
              </p>
              <Button variant="hero-outline" size="lg" className="rounded-full px-10 h-14 font-black uppercase tracking-[0.2em] group border-white/20 hover:border-primary hover:text-primary transition-all" asChild>
                <Link to="/roster" className="flex items-center gap-2">
                  Meet the Roster <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div {...fade} transition={{ delay: 0.1 }} className="order-1 lg:order-2 relative aspect-[4/3] rounded-[3rem] overflow-hidden glass-card p-2 group">
               <div className="absolute inset-0 bg-gradient-to-bl from-primary/20 via-transparent to-transparent opacity-50" />
               <div className="w-full h-full rounded-[2.5rem] bg-[#080808] border border-white/5 flex flex-col items-center justify-center relative overflow-hidden">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(var(--primary)/0.05),_transparent_60%)] group-hover:scale-110 transition-transform duration-1000" />
                 <Users size={80} className="text-primary/20 group-hover:text-primary/50 transition-colors duration-500 mb-6 relative z-10" />
                 <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/30 relative z-10 group-hover:text-primary transition-colors">Curated Talent</span>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Redesigned */}
      <section className="py-32 relative z-10 border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div {...fade} className="max-w-4xl mx-auto relative z-10">
            <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/5 border border-white/10 mb-10">
              <Zap size={14} className="text-primary mr-2 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60 italic">Next Steps</span>
            </div>
            
            <h2 className="font-sans text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight">
              Ready to <span className="font-medium text-primary italic">Scale?</span>
            </h2>
            <p className="text-white/40 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
              Σταμάτα να ψάχνεις για απλά websites. Έλα να χτίσουμε το σύστημα που θα απογειώσει τις πωλήσεις σου.
            </p>
            <div className="flex flex-wrap gap-5 justify-center">
              <Button variant="hero" size="lg" className="rounded-full px-12 h-16 text-sm group font-black uppercase tracking-[0.2em] shadow-glow" asChild>
                <Link to="/project-brief" className="flex items-center gap-3">
                  Start a Project <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" className="rounded-full px-12 h-16 text-sm group font-black uppercase tracking-[0.2em] bg-white/5 hover:bg-white/10 border-white/10" asChild>
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Subtle background glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      </section>

    </div>
  );
};

export default About;
