import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, BadgeCheck, MapPin, Search, ExternalLink, Linkedin, Instagram, Globe, Rocket, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import LabBackground from "@/components/LabBackground";
import { useState } from "react";
import { hustlers } from "@/data/hustlers";
import { useLanguage } from "@/contexts/LanguageContext";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }
};

const Roster = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-primary selection:text-black overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-[70vh] flex items-center justify-center py-32 overflow-hidden border-b border-white/5">
        <LabBackground />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(208,255,0,0.03),transparent_70%)] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto text-center">

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-5 py-1.5 rounded-full bg-primary/5 border border-primary/20 mb-10"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/80 italic">{t('roster.hero.badge')} · {hustlers.length} {t('roster.hero.collaborators')}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
              className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-[0.85] mb-10 uppercase italic"
            >
              {t('roster.hero.title1')} <br />
              <span className="text-primary">{t('roster.hero.title2')}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as any }}
            >
              <p className="text-xl md:text-2xl text-white/70 tracking-tight mb-4 max-w-3xl mx-auto leading-relaxed">
                {t('roster.hero.desc')}
              </p>
              <p className="text-xs md:text-sm uppercase tracking-[0.2em] font-bold text-white/30 max-w-2xl mx-auto">
                {t('roster.hero.subtitle')}
              </p>
            </motion.div>

          </div>
        </div>

        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-primary/10 blur-[120px] pointer-events-none"
        />
      </section>

      {/* ── ROSTER GRID ── */}
      <section className="py-24 md:py-40 relative">
        <div className="container mx-auto px-4 lg:px-8">

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-12 max-w-6xl mx-auto">
            {hustlers.map((h, i) => (
              <motion.div
                key={h.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] as any }}
                className="group relative flex flex-col rounded-[3rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-primary/20 transition-all duration-700 overflow-hidden p-10 md:p-12"
              >
                {/* Top accent */}
                <div className="absolute top-0 left-12 w-px h-10 bg-gradient-to-b from-primary/40 to-transparent group-hover:h-20 transition-all duration-1000" />

                {/* Hover glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(208,255,0,0.03),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Header */}
                <div className="flex items-start gap-5 mb-8 relative z-10">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-[1.5rem] bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center shrink-0 group-hover:border-primary/20 transition-all">
                    {h.image ? (
                      <img src={h.image} alt={h.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                    ) : (
                      <span className="font-display font-black text-xl italic text-white/30 group-hover:text-primary transition-colors">{h.initials}</span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h3 className="font-display font-black text-lg italic uppercase tracking-tight group-hover:text-primary transition-colors">{h.name}</h3>
                      {h.verified && (
                        <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 shrink-0">
                          <BadgeCheck size={10} className="text-primary" />
                          <span className="text-[9px] font-black text-primary uppercase tracking-widest">{t('roster.card.verified')}</span>
                        </div>
                      )}
                    </div>
                    <p className="text-[11px] text-white/30 font-black uppercase tracking-[0.3em] italic leading-tight">{h.role}</p>
                    <div className="flex items-center gap-1.5 mt-2">
                      <MapPin size={10} className="text-primary/40" />
                      <span className="text-[10px] text-white/20 font-black uppercase tracking-widest italic">{h.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-white/40 italic leading-relaxed mb-8 flex-grow relative z-10">{h.description}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                  {h.skills.slice(0, 4).map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-black text-white/30 uppercase tracking-[0.3em] group-hover:border-primary/20 group-hover:text-white/50 transition-all italic">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Experience stats */}
                <div className="grid grid-cols-3 gap-3 mb-8 p-5 rounded-2xl bg-white/[0.02] border border-white/5 relative z-10">
                  <div className="text-center">
                    <p className="text-primary font-black text-sm italic mb-0.5">{h.experience.years}</p>
                    <p className="text-[9px] text-white/20 uppercase tracking-widest font-black italic">{t('roster.card.exp')}</p>
                  </div>
                  <div className="text-center border-x border-white/5">
                    <p className="text-primary font-black text-sm italic mb-0.5">{h.experience.projects}</p>
                    <p className="text-[9px] text-white/20 uppercase tracking-widest font-black italic">{t('roster.card.projects')}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-white/60 font-black text-[10px] italic mb-0.5 leading-tight">{h.experience.specialty}</p>
                    <p className="text-[9px] text-white/20 uppercase tracking-widest font-black italic">{t('roster.card.focus')}</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between relative z-10 pt-6 border-t border-white/5">
                  <Link
                    to={`/roster/${h.slug}`}
                    className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-primary group-hover:gap-5 transition-all italic"
                  >
                    {t('roster.card.view')} <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── JOIN CTA ── */}
      <section className="py-40 relative overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              
              <div>
                <motion.div {...fadeInUp} className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 mb-8">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/80 italic">{t('roster.join.badge')}</span>
                </motion.div>
                
                <motion.h2 {...fadeInUp} transition={{ delay: 0.1 }} className="font-display text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-8 uppercase italic">
                  {t('roster.join.title1')} <br />
                  <span className="text-primary">{t('roster.join.title2')}</span>
                </motion.h2>
                
                <motion.p {...fadeInUp} transition={{ delay: 0.2 }} className="text-xl text-white/50 mb-12 max-w-md leading-relaxed">
                  {t('roster.join.desc')}
                </motion.p>
                
                  <Button variant="hero" size="lg" className="rounded-full px-12 h-16 text-lg group" asChild>
                    <Link to="/join-hustler">{t('roster.join.cta')} <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" /></Link>
                  </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: Globe, label: t('roster.join.item1'), desc: t('roster.join.item1.desc') },
                  { icon: Rocket, label: t('roster.join.item2'), desc: t('roster.join.item2.desc') },
                  { icon: BadgeCheck, label: t('roster.join.item3'), desc: t('roster.join.item3.desc') },
                  { icon: Zap, label: t('roster.join.item4'), desc: t('roster.join.item4.desc') }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all group"
                  >
                    <item.icon size={24} className="text-primary/40 group-hover:text-primary transition-colors mb-6" />
                    <h3 className="text-lg font-bold mb-2">{item.label}</h3>
                    <p className="text-sm text-white/30 leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      </section>
    </div>
  );
};

export default Roster;
