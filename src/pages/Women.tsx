import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Heart, Globe, Megaphone, Cpu, ArrowRight, CheckCircle2,
  ExternalLink, Sparkles, Target, TrendingUp, Rocket, Zap,
  Star, ShieldCheck, Smile, Award, GraduationCap, Users,
  Gem, UserCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] as const },
});

const painPromise = [
  {
    pain: "Αν νιώθεις ότι οι ρόλοι σου σε καταπίνουν",
    promise: "μεταμορφώνουμε το χάος σε ροή.",
    icon: Users,
    desc: "Από την κούραση της πολυδιάσπασης, στην ηρεμία μιας επιχείρησης που σου επιτρέπει να αναπνέεις ξανά."
  },
  {
    pain: "Αν η αξία σου παραμένει 'κρυμμένη' online",
    promise: "αναδεικνύουμε το φως σου.",
    icon: Gem,
    desc: "Χτίζουμε μια παρουσία που μιλάει στην καρδιά του κοινού σου και αντανακλά την αληθινή ποιότητα της δουλειάς σου."
  },
  {
    pain: "Αν η αβεβαιότητα σου στερεί τον ύπνο",
    promise: "χτίζουμε σταθερότητα.",
    icon: TrendingUp,
    desc: "Δημιουργούμε τη σιγουριά μιας επιχείρησης που ανθίζει σταθερά, δίνοντάς σου την ελευθερία που πάντα ονειρευόσουν."
  },
];

const Women = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ─── 1. Hero Section ─── */}
      <PageHero
        label="Women in Business"
        secondaryLabel="Mothers in Career"
        icon={Heart}
        floatingIcons={[Heart, Sparkles, Gem, UserCheck, Award, GraduationCap, Star, ShieldCheck, Smile, Rocket, Zap]}
        bgGradient="radial-gradient(circle at 20% 20%, hsl(72 62% 58% / 0.03), transparent 40%), radial-gradient(circle at 80% 80%, hsl(330 80% 60% / 0.05), transparent 40%), linear-gradient(180deg, hsl(220 18% 7%) 0%, hsl(220 15% 5%) 80%, hsl(var(--background)) 100%)"
        title={
          <>
            Φτιάξε μια επιχείρηση που <br />
            <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">υπηρετεί τη ζωή σου.</span>
          </>
        }
        description="Σχεδιάζουμε μαζί το επόμενο κεφάλαιο της επιχείρησής σου. Εκεί που η τεχνολογία συναντά τη θηλυκότητα και η ανάπτυξη δεν θυσιάζει ποτέ την προσωπική σου ηρεμία."
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
          <Button variant="hero" size="lg" className="rounded-full px-12 h-16 text-lg font-black bg-gradient-to-r from-primary to-pink-600 hover:scale-105 transition-all shadow-2xl shadow-primary/10 group border-none text-slate-950" asChild>
            <Link to="/contact?subject=women">
              Ξεκίνα Εδώ <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
          </Button>
          <Button variant="hero-outline" size="lg" className="rounded-full px-12 h-16 text-lg font-bold border-white/10 hover:bg-white/5 transition-all text-white/60" asChild>
            <Link to="/about">Η Φιλοσοφία μας</Link>
          </Button>
        </div>
      </PageHero>

      {/* ─── Cinematic Transition Bridge ─── */}
      <div className="relative z-20 -mt-48 pointer-events-none h-96">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />

        {/* Glows with more room to breathe */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl mx-auto">
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[120px]"
          />
        </div>

        {/* Ambient Line */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* ─── 2. Pain & Promise (Glass Grid) ─── */}
      <section className="py-32 relative overflow-hidden -mt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_hsl(72_62%_58%/0.05),_hsl(330_80%_60%/0.05),_transparent_60%)] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            dark={true}
            label="Transforming your perspective"
            title="Από το χθες, στο σήμερα"
            highlight="σήμερα"
            variant="hustle-blend"
            description="Αναγνωρίζουμε τις προκλήσεις και σχεδιάζουμε τις λύσεις που σου αξίζουν."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-16">
            {painPromise.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className="group relative glass-card rounded-[2.5rem] p-10 border-white/5 hover:border-pink-500/30 transition-all duration-700 overflow-hidden flex flex-col items-center text-center"
              >
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-700">
                  <item.icon size={120} className="text-pink-500" />
                </div>

                <div className="w-14 h-14 rounded-2xl bg-pink-500/10 flex items-center justify-center mb-8 shrink-0 border border-pink-500/20 group-hover:scale-110 transition-transform duration-500">
                  <item.icon size={28} className="text-pink-600" />
                </div>

                <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-3">{item.pain}</p>
                <h3 className="font-display text-2xl font-black text-white mb-4 group-hover:text-primary transition-colors duration-500 uppercase tracking-tight">
                  <span className="group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-pink-500 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    {item.promise}
                  </span>
                </h3>
                <p className="text-white/50 text-sm leading-relaxed font-light">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. Mothers in Career (High Contrast Impact) ─── */}
      <section className="py-32 relative overflow-hidden section-light">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_50%,_hsl(330_80%_60%/0.04),_transparent_50%)] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-24 max-w-7xl mx-auto">
            <motion.div {...fadeUp()} className="flex-1 relative order-2 lg:order-1">
              <div className="relative aspect-square md:aspect-video lg:aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl group border-[12px] border-white ring-1 ring-slate-100 bg-slate-50">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-primary/10 mix-blend-overlay z-10 transition-opacity duration-700 group-hover:opacity-60" />
                <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-1000 flex flex-col items-center justify-center p-12 text-center bg-white">
                  <Heart size={80} className="text-pink-500/20 mb-8" />
                  <p className="text-slate-400 italic font-medium leading-[1.6]">
                    "Balance is not something you find, it's something you create."
                  </p>
                </div>
                <div className="absolute bottom-10 left-10 z-20">
                  <div className="bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white max-w-[280px]">
                    <p className="text-[10px] font-black text-pink-500 uppercase tracking-widest mb-1">Empowering the new cycle</p>
                    <p className="text-slate-900 font-bold leading-tight">Σχεδιάζουμε συστήματα που προσαρμόζονται σε εσένα.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.1)} className="flex-1 order-1 lg:order-2">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-10">
                <Zap size={14} className="text-pink-600" />
                <span className="text-[10px] font-black text-pink-600 uppercase tracking-[0.3em]">Specialized Focus</span>
              </div>

              <h2 className="font-display text-4xl md:text-6xl font-black text-slate-900 mb-10 leading-[1.05] tracking-tighter italic">
                Ενδυνάμωση <br />
                <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent opacity-90">Μητέρων.</span>
              </h2>

              <p className="text-slate-600 text-lg md:text-xl font-medium mb-12 leading-relaxed">
                Καταλαβαίνουμε το βάρος της ευθύνης και την ομορφιά της δημιουργίας. Η μητρότητα δεν είναι εμπόδιο, είναι η κινητήριος δύναμή σου. Είμαστε εδώ για να φτιάξουμε τα συστήματα που θα στηρίξουν εσένα, ώστε εσύ να στηρίξεις αυτούς που αγαπάς.
              </p>

              <div className="space-y-6 mb-16">
                {[
                  "Συστήματα που σέβονται τον χρόνο σου με την οικογένεια",
                  "Ομαλή και δυναμική επάνοδος στην αγορά με αυτοπεποίθηση",
                  "Απελευθέρωση χρόνου μέσω AI, για να είσαι παρούσα εκεί που μετράει",
                  "Mentoring από γυναίκες που ξέρουν τι σημαίνει να τα θέλεις 'όλα'"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 text-slate-700 font-bold group">
                    <div className="w-6 h-6 rounded-full bg-pink-500/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                      <CheckCircle2 size={14} />
                    </div>
                    {item}
                  </div>
                ))}
              </div>

              <Button variant="hero" size="lg" className="rounded-full px-12 h-20 text-lg font-bold bg-slate-900 text-white hover:bg-slate-800 shadow-2xl shadow-slate-900/10" asChild>
                <Link to="/contact?subject=mothers">Μάθε Περισσότερα</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── 4. The 3 Levels (Pillars) ─── */}
      <section className="py-32 relative overflow-hidden bg-[#050506]">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent shadow-[0_0_20px_white/5]" />

        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            dark={true}
            label="Support Levels"
            title="Τα 3 Επίπεδα Υποστήριξης"
            highlight="Υποστήριξης"
            variant="hustle-blend"
            description="Καλύπτουμε όλο το φάσμα της ψηφιακής σου παρουσίας, από την ιδέα στην υλοποίηση."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto mt-16">
            {[
              {
                icon: Globe,
                title: "Online Presence",
                text: "Website, branding, social media setup, ό,τι χρειάζεται για να σε βρίσκουν και να σε εμπιστεύονται.",
                accent: "primary"
              },
              {
                icon: Megaphone,
                title: "Marketing Strategy",
                text: "Funnels, ads, και content strategy για να φτάσεις στο σωστό κοινό, χωρίς να ξοδεύεις άσκοπα χρόνο.",
                accent: "pink"
              },
              {
                icon: Cpu,
                title: "AI & Automations",
                text: "Εφαρμογή AI εργαλείων που σε απελευθερώνουν από το manual work, δίνοντάς σου χρόνο για τη δημιουργία.",
                accent: "accent"
              }
            ].map((p, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className="group relative p-12 rounded-[3.5rem] bg-white/[0.03] border border-white/5 flex flex-col h-full hover:bg-white/[0.06] hover:border-pink-500/20 transition-all duration-700"
              >
                <div className={`w-16 h-16 rounded-2xl ${p.accent === 'pink' ? 'bg-pink-500/10 text-pink-500' : 'bg-primary/10 text-primary'} flex items-center justify-center mb-10 ring-1 ring-white/5 group-hover:scale-110 transition-transform duration-500`}>
                  <p.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl font-black mb-6 uppercase tracking-tight group-hover:text-pink-500 transition-colors duration-500">{p.title}</h3>
                <p className="text-white/40 leading-relaxed font-light text-lg mb-8 flex-1">{p.text}</p>
                <div className="h-px w-12 bg-white/10 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-pink-500/30 transition-all duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. Partnerships (Rise Club & Women Do Business) ─── */}
      <section className="py-32 section-light relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_hsl(330_80%_60%/0.03),_transparent_50%)] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            dark={false}
            label="Community & Synergy"
            title="Υποστηρίζουμε & Συνεργαζόμαστε"
            highlight="Συνεργαζόμαστε"
            variant="hustle-blend"
            description="Είμαστε μέρος ενός οικοσυστήματος που πιστεύει στη γυναικεία δύναμη και την επιχειρηματικότητα."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 max-w-5xl mx-auto">
            {[
              {
                title: "Rise Club",
                desc: "Συμμετέχουμε ενεργά στην ενδυνάμωση των μητέρων και την επάνοδο των γυναικών στην εργασία μέσω του Rise Club.",
                link: "https://rise-club.org",
                logo: "https://rise-club.org/apple-touch-icon.png"
              },
              {
                title: "Women Do Business",
                desc: "Στηρίζουμε την ισότητα και την ανάπτυξη της γυναικείας επιχειρηματικότητας μαζί με το Women Do Business.",
                link: "https://womandobusiness.eu",
                logo: "https://womandobusiness.eu/wp-content/uploads/2023/11/Women-Do-Business-LOGO-01-e1700494498399.png"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className="group relative bg-white border border-slate-200 rounded-[3rem] p-12 hover:border-pink-500/30 hover:shadow-[0_45px_100px_-25px_rgba(0,0,0,0.08)] transition-all duration-700 overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700">
                  <Users size={120} className="text-pink-500" />
                </div>

                <div className="w-24 h-24 rounded-3xl bg-slate-50 border border-slate-100 p-4 mb-10 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center overflow-hidden">
                  <img src={item.logo} alt={item.title} className="w-full h-full object-contain" />
                </div>

                <h3 className="font-display text-3xl font-black text-slate-900 mb-6 tracking-tight italic">{item.title}</h3>
                <p className="text-slate-500 text-lg leading-relaxed font-medium mb-10">{item.desc}</p>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary hover:text-pink-500 transition-colors group/link"
                >
                  Visit Website <ExternalLink size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. Cinematic CTA ─── */}
      <section className="py-32 relative overflow-hidden bg-background">
        {/* Blended Background Glows */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none animate-pulse" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <motion.div {...fadeUp()} className="max-w-5xl mx-auto glass p-12 md:py-24 md:px-20 rounded-[3.5rem] border border-white/5 relative overflow-hidden">
            {/* Inner Blend Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_hsl(72_62%_58%/0.08),_hsl(330_80%_60%/0.08),_transparent_70%)] pointer-events-none" />

            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
              <div className="flex -space-x-1">
                <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]" />
                <div className="w-2 h-2 rounded-full bg-pink-500 shadow-[0_0_8px_#ec4899]" />
              </div>
              <span className="text-[10px] font-black text-white/60 uppercase tracking-[0.25em] ml-1">Elevate your business</span>
            </div>

            <h2 className="font-display text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-[1] text-white uppercase italic">
              Είσαι έτοιμη να <br />
              <span className="bg-gradient-to-r from-primary via-white to-pink-500 bg-clip-text text-transparent opacity-90">ξεκινήσεις;</span>
            </h2>

            <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed font-light">
              Ας κάνουμε την πρώτη μας κουβέντα. Μια κλήση αρκεί για να δούμε πώς το όραμά σου μπορεί να γίνει η νέα σου πραγματικότητα, με τη στήριξη που σου αξίζει.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <Button variant="hero" size="lg" className="rounded-full px-12 h-20 text-lg font-black bg-gradient-to-r from-primary to-pink-600 hover:scale-105 transition-all shadow-xl shadow-primary/10 group border-none text-slate-950" asChild>
                <Link to="/contact?subject=women" className="flex items-center gap-2">
                  Discovery Session <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" className="rounded-full px-12 h-20 text-lg font-bold border-white/10 hover:bg-white/5 transition-all text-white/80" asChild>
                <Link to="/services">Δες τις Υπηρεσίες</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Women;
