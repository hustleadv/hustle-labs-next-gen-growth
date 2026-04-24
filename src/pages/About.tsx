import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Target, Users, Heart, Fingerprint, Handshake, Star, Coffee, Code2, Rocket, Paintbrush, Monitor, Megaphone, Cpu, Palette, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import LabBackground from "@/components/LabBackground";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const fade = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const values = [
    { icon: Target, title: t('about.values.1.title'), desc: t('about.values.1.desc') },
    { icon: Zap, title: t('about.values.2.title'), desc: t('about.values.2.desc') },
    { icon: Heart, title: t('about.values.3.title'), desc: t('about.values.3.desc') },
    { icon: Users, title: t('about.values.4.title'), desc: t('about.values.4.desc') },
  ];

  const team = [
    { name: "Vasiliki Giakoumaki", role: "Strategy & Growth", icon: Target },
    { name: "Spiros Tsavos", role: "Tech Lead", icon: Code2 },
    { name: "Gogo Kamitsi", role: "Content & Visuals", icon: Paintbrush },
    { name: "Christoforos P.", role: "Digital Design", icon: Palette },
  ];

  const stats = [
    { label: t('about.impact.stat1'), value: "Active", sub: t('about.impact.stat1.sub') },
    { label: t('about.impact.stat2'), value: "200+", sub: t('about.impact.stat2.sub') },
    { label: t('about.impact.stat3'), value: "100%", sub: t('about.impact.stat3.sub') },
    { label: t('about.impact.stat4'), value: "Non-Profit", sub: t('about.impact.stat4.sub') }
  ];

  return (
    <div className="min-h-screen pt-24 bg-[#050505] text-white selection:bg-primary selection:text-black">
      <LabBackground />
      
      {/* Hero Section */}
      <div className="relative z-10">
        <PageHero
          label={t('about.hero.badge')}
          icon={Fingerprint}
          floatingIcons={[Heart, Users, Handshake, Star, Target, Coffee, Zap, Fingerprint]}
          title={t('about.hero.title')}
          highlight={t('about.hero.highlight')}
          description={t('about.hero.desc')}
        >
          <div className="flex flex-wrap gap-4 justify-center mt-10">
            <Button variant="hero" size="lg" className="rounded-full px-10 h-14 font-black uppercase tracking-[0.2em] group shadow-glow" asChild>
              <Link to="/project-brief" className="flex items-center gap-2">
                {t('about.hero.cta1')} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="lg" className="rounded-full px-10 h-14 font-black uppercase tracking-[0.2em]" asChild>
              <Link to="/portfolio">{t('about.hero.cta2')}</Link>
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
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary italic">{t('about.mission.badge')}</span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-12 leading-[1.1] tracking-tighter uppercase italic">
              {t('about.mission.title1')} <br className="hidden md:block" />
              <span className="text-primary">{t('about.mission.title2')}</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 text-left">
              <p className="text-white/60 leading-relaxed text-lg font-medium border-l border-primary/30 pl-8">
                {t('about.mission.text1')}
              </p>
              <p className="text-white/60 leading-relaxed text-lg font-medium">
                {t('about.mission.text2')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 relative z-10 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fade} className="text-center max-w-3xl mx-auto mb-20">
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/60 italic mb-6 block">{t('about.values.badge')}</span>
             <h2 className="font-display text-4xl md:text-5xl font-bold uppercase italic tracking-tighter mb-6">
                {t('about.values.title').split(' ')[0]} <span className="text-primary">{t('about.values.title').split(' ').slice(1).join(' ')}</span>
             </h2>
             <p className="text-white/40 text-lg font-medium">{t('about.values.desc')}</p>
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
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-primary italic">{t('about.custom.badge')}</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase italic tracking-tighter leading-[1.1]">
                {t('about.custom.title1')} <span className="text-primary">{t('about.custom.title2')}</span>
              </h2>
              <div className="space-y-6 text-white/50 leading-relaxed text-lg font-medium border-l border-white/10 pl-6">
                <p>{t('about.custom.text1')}</p>
                <p>{t('about.custom.text2')}</p>
                <p>{t('about.custom.text3')}</p>
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
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 italic">{t('about.impact.badge')}</span>
                  <div className="flex-1 h-px bg-white/10" />
                </div>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase italic tracking-tighter leading-[1.1] mb-8">
                  {t('about.impact.title1')} <br />
                  <span className="text-primary">{t('about.impact.title2')}</span>
                </h2>
                <div className="space-y-6 text-white/50 leading-relaxed text-lg font-medium">
                  <p>{t('about.impact.text1')}</p>
                  <p>{t('about.impact.text2')}</p>
                  <p>{t('about.impact.text3')}</p>
                </div>
              </motion.div>

              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {stats.map((stat, i) => (
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
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Specs */}
      <section className="py-32 bg-primary/5 border-y border-primary/10 relative z-10 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
           <motion.div {...fade} className="text-center max-w-3xl mx-auto mb-20">
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/60 italic mb-6 block">{t('about.team.badge')}</span>
             <h2 className="font-display text-4xl md:text-5xl font-bold uppercase italic tracking-tighter mb-6">
                {t('about.team.title1')} <span className="text-primary">{t('about.team.title2')}</span>
             </h2>
             <p className="text-white/60 text-lg font-medium">{t('about.team.desc')}</p>
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
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary italic">{t('about.roster.badge')}</span>
                <div className="flex-1 h-px bg-primary/20" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase italic tracking-tighter leading-[1.1] mb-8">
                {t('about.roster.title1')} <br />
                <span className="text-white">{t('about.roster.title2')}</span>
              </h2>
              <p className="text-white/50 text-lg font-medium leading-relaxed mb-10">
                {t('about.roster.desc')}
              </p>
              <Button variant="hero-outline" size="lg" className="rounded-full px-10 h-14 font-black uppercase tracking-[0.2em] group border-white/20 hover:border-primary hover:text-primary transition-all" asChild>
                <Link to="/roster" className="flex items-center gap-2">
                  {t('about.roster.cta')} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div {...fade} transition={{ delay: 0.1 }} className="order-1 lg:order-2 relative aspect-[4/3] rounded-[3rem] overflow-hidden glass-card p-2 group">
               <div className="absolute inset-0 bg-gradient-to-bl from-primary/20 via-transparent to-transparent opacity-50" />
               <div className="w-full h-full rounded-[2.5rem] bg-[#080808] border border-white/5 flex flex-col items-center justify-center relative overflow-hidden">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(var(--primary)/0.05),_transparent_60%)] group-hover:scale-110 transition-transform duration-1000" />
                 <Users size={80} className="text-primary/20 group-hover:text-primary/50 transition-colors duration-500 mb-6 relative z-10" />
                 <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/30 relative z-10 group-hover:text-primary transition-colors">{t('about.roster.talent')}</span>
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
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60 italic">{t('about.cta.badge')}</span>
            </div>
            
            <h2 className="font-sans text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight">
              {t('about.cta.title').split(' ')[0]} {t('about.cta.title').split(' ')[1]} <span className="font-medium text-primary italic">{t('about.cta.title').split(' ').slice(2).join(' ')}</span>
            </h2>
            <p className="text-white/40 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
              {t('about.cta.desc')}
            </p>
            <div className="flex flex-wrap gap-5 justify-center">
              <Button variant="hero" size="lg" className="rounded-full px-12 h-16 text-sm group font-black uppercase tracking-[0.2em] shadow-glow" asChild>
                <Link to="/project-brief" className="flex items-center gap-3">
                  {t('about.cta.start')} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" className="rounded-full px-12 h-16 text-sm group font-black uppercase tracking-[0.2em] bg-white/5 hover:bg-white/10 border-white/10" asChild>
                <Link to="/contact">
                  {t('about.cta.contact')}
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
