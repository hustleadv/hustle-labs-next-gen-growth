import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Target, Users, Heart, Fingerprint, Info, Handshake, Star, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";

const values = [
  { icon: Target, title: "Πρώτα η Καθαρότητα", desc: "Ξεκάθαρη στρατηγική, ξεκάθαρη επικοινωνία, ξεκάθαρα αποτελέσματα. Χωρίς buzzwords." },
  { icon: Zap, title: "Η Ταχύτητα Μετράει", desc: "Δεν περιμένουμε μήνες. Κινούμαστε γρήγορα, δοκιμάζουμε, βελτιώνουμε, παραδίδουμε." },
  { icon: Heart, title: "Μας Νοιάζει Πραγματικά", desc: "Κάθε project είναι δικό μας project. Δεν παραδίδουμε κάτι που δεν θα χρησιμοποιούσαμε εμείς." },
  { icon: Users, title: "Πραγματικοί Συνεργάτες", desc: "Δεν είμαστε vendors. Δουλεύουμε μαζί σου, καταλαβαίνουμε την επιχείρησή σου, μοιραζόμαστε τον στόχο." },
];

const team = [
  { name: "Founder / Strategist", role: "Vision, στρατηγική, client relationships" },
  { name: "Designer", role: "UI/UX, branding, visual identity" },
  { name: "Developer", role: "Custom code, performance, integrations" },
  { name: "Growth Specialist", role: "Ads, funnels, analytics, CRO" },
];

const fade = {
  initial: { opacity: 0, y: 24 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
};

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageHero
        label="Who We Are"
        floatingIcons={[Heart, Users, Handshake, Star, Target, Coffee, Zap, Fingerprint]}
        title="One Space. One Team. One Mission."
        highlight="Mission"
        description="Το Hustle Labs δεν είναι ένα remote agency πίσω από ένα logo. Είναι ένας φυσικός χώρος (Studio Σύντομα) στα Χανιά και μια μικρή ομάδα ανθρώπων που χτίζουν ψηφιακά συστήματα ανάπτυξης."
      >
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <Button variant="hero" size="lg" className="rounded-full px-10 group" asChild>
            <Link to="/project-brief" className="flex items-center gap-2">
              Ξεκινήστε το Brief <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button variant="hero-outline" size="lg" className="rounded-full px-10" asChild>
            <Link to="/work">Δες Δουλειές</Link>
          </Button>
        </div>
      </PageHero>

      {/* Mission */}
      <section className="py-24 border-t border-border/40 relative overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fade} className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-black tracking-[0.3em] text-[10px] uppercase mb-8 block">Our Mission</span>
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-10 leading-tight tracking-tight">
              Πιστεύουμε πως κάθε επιχείρηση αξίζει <br className="hidden md:block" />
              <span className="text-gradient">digital παρουσία</span> παγκόσμιας κλάσης.
            </h2>
            <div className="grid md:grid-cols-2 gap-10 text-left">
              <p className="text-muted-foreground leading-relaxed text-lg font-light italic border-l-2 border-primary/20 pl-8">
                Η αποστολή μας είναι απλή: φτιάχνουμε εργαλεία ανάπτυξης, όχι απλά «ωραία websites».
                Κάθε σελίδα, κάθε funnel, κάθε automation έχει ένα σκοπό.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Να φέρει πελάτες, να εξοικονομήσει χρόνο, να κάνει scale.
                Αν δεν αποδίδει, δεν μας ενδιαφέρει πόσο ωραίο φαίνεται. Στη Hustle Labs συνδυάζουμε
                την υψηλή αισθητική με το αμείλικτο focus στα αποτελέσματα.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 relative overflow-hidden bg-card/5">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            label="Digital Roots"
            title="Πώς σκεφτόμαστε"
            highlight="σκεφτόμαστε"
            description="Οι αξίες που οδηγούν κάθε project μας, από το πρώτο meeting μέχρι το final delivery."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={i}
                {...fade}
                transition={{ delay: i * 0.08 }}
                className="group flex gap-8 p-10 rounded-[2rem] glass-card transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <v.icon size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">{v.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-light">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Custom (Lab Style) */}
      <section className="py-28 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fade} className="relative aspect-square rounded-[3rem] overflow-hidden glass-card p-1">
              <div className="w-full h-full rounded-[2.8rem] bg-primary/5 flex items-center justify-center">
                <Fingerprint size={120} className="text-primary/10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(var(--primary)/0.1),_transparent_70%)]" />
              </div>
            </motion.div>
            <motion.div {...fade} transition={{ delay: 0.1 }}>
              <span className="text-primary font-black tracking-[0.2em] text-[10px] uppercase mb-4 block">The Lab Philosophy</span>
              <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-8 leading-tight tracking-tighter">
                Τα templates δεν χτίστηκαν για σένα.
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg font-light">
                <p>Ένα template λύνει ένα γενικό πρόβλημα. Η δική σου επιχείρηση δεν είναι γενική. Έχει δικό της κοινό, δικούς στόχους, δική ταυτότητα.</p>
                <p>Ένα custom website δεν είναι «πιο ακριβό», είναι σχεδιασμένο ώστε κάθε section, κάθε CTA, κάθε pixel να δουλεύει <span className="text-foreground font-bold">για τον δικό σου στόχο</span>.</p>
                <p>Δεν κάνουμε drag-and-drop. Χτίζουμε από το μηδέν, με κώδικα, σχεδιασμό και στρατηγική, γιατί αυτό φέρνει αποτελέσματα.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-28 bg-card/10 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading label="The Lab" title="Μικρή ομάδα. Μεγάλος αντίκτυπος." highlight="αντίκτυπος" description="Κάθε μέλος φέρνει εξειδίκευση. Μαζί, καλύπτουμε τα πάντα." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 max-w-6xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={i}
                {...fade}
                transition={{ delay: i * 0.08 }}
                className="group text-center p-10 glass-card rounded-3xl"
              >
                <div className="w-20 h-20 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Users size={32} className="text-primary/40 group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-display font-black text-foreground mb-1 uppercase tracking-tight">{member.name}</h3>
                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            {...fade}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-display text-4xl md:text-6xl font-black text-foreground mb-8 tracking-tighter leading-tight">
              Θέλεις να <br />
              <span className="text-gradient">μιλήσουμε;</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Κλείσε ένα Strategy Call και δες πώς η Hustle Labs μπορεί να γίνει ο στρατηγικός συνεργάτης για την ανάπτυξή σου.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="hero" size="lg" className="rounded-full px-14 h-18 text-xl group font-black shadow-2xl shadow-primary/20" asChild>
                <Link to="/contact" className="flex items-center gap-3">
                  Start Your Journey <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
