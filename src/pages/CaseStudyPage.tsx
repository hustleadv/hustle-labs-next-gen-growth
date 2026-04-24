import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, ZoomIn, X, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/pages/Work";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
});

const AdminImage = ({ src, alt, onClick }: { src: string; alt: string; onClick?: () => void }) => (
  <div
    className="w-full rounded-3xl overflow-hidden border border-border/50 shadow-2xl cursor-zoom-in group relative"
    onClick={onClick}
  >
    <img src={src} alt={alt} className="w-full block group-hover:scale-[1.01] transition-transform duration-500" />
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm">
      <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-slate-900 text-sm font-bold shadow-xl">
        <ZoomIn size={16} /> ΞΞµΞ³Ξ­ΞΈΟ…Ξ½ΟƒΞ·
      </div>
    </div>
  </div>
);

const CaseStudyPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const study = caseStudies.find((cs) => cs.slug === slug);
  const tc = study?.themeColor || "hsl(var(--primary))";
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [adminLightboxSrc, setAdminLightboxSrc] = useState<string | null>(null);
  const [heroImgError, setHeroImgError] = useState(false);

  const currentIndex = caseStudies.findIndex((cs) => cs.slug === slug);
  const nextStudy = currentIndex >= 0 && currentIndex < caseStudies.length - 1
    ? caseStudies[currentIndex + 1]
    : null;

  if (!study) return <Navigate to="/portfolio" replace />;

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* β”€β”€ ADMIN IMAGE LIGHTBOX β”€β”€ */}
      <AnimatePresence>
        {adminLightboxSrc && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-sm overflow-y-auto"
            onClick={() => setAdminLightboxSrc(null)}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-black/60 backdrop-blur-md border-b border-white/10">
              <span className="text-white/60 text-sm font-medium">{study.adminPanel?.title}: Ξ ΟΞΏΞµΟ€ΞΉΟƒΞΊΟΟ€Ξ·ΟƒΞ· Dashboard</span>
              <button onClick={() => setAdminLightboxSrc(null)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors">
                <X size={18} />
              </button>
            </div>
            <div className="flex justify-center px-4 py-8" onClick={(e) => e.stopPropagation()}>
              <motion.img src={adminLightboxSrc} alt="Admin Dashboard"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-6xl rounded-2xl shadow-2xl" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* β”€β”€ LIGHTBOX β”€β”€ */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-sm overflow-y-auto"
            onClick={() => setLightboxOpen(false)}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-black/60 backdrop-blur-md border-b border-white/10">
              <span className="text-white/60 text-sm font-medium">{study.business}: Full Preview</span>
              <div className="flex items-center gap-3">
                {study.projectUrl && (
                  <a href={study.projectUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2 rounded-full bg-white text-slate-900 text-sm font-bold hover:scale-105 transition-transform"
                    onClick={(e) => e.stopPropagation()}>
                    Ξ†Ξ½ΞΏΞΉΞ³ΞΌΞ± Live Site <ArrowUpRight size={15} />
                  </a>
                )}
                <button onClick={() => setLightboxOpen(false)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors">
                  <X size={18} />
                </button>
              </div>
            </div>
            <div className="flex justify-center px-4 py-8" onClick={(e) => e.stopPropagation()}>
              <motion.img src={study.image} alt={study.business}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-5xl rounded-2xl shadow-2xl" style={{ objectFit: "contain" }} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* β”€β”€ HERO β”€β”€ */}
      <section className="relative pt-28 pb-0 overflow-hidden">
        {/* Background decoration matching home page LabBackground style */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_hsl(var(--primary)/0.08),_transparent_50%)] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[900px] h-[600px] rounded-full opacity-[0.12] blur-[200px] pointer-events-none"
          style={{ backgroundColor: "hsl(var(--primary))" }} />
        <div className="absolute top-40 left-0 w-[400px] h-[400px] rounded-full opacity-[0.08] blur-[150px] pointer-events-none"
          style={{ backgroundColor: "hsl(var(--accent))" }} />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Link to="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-16 group font-medium">
            <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
            Ξ Ξ―ΟƒΟ‰ ΟƒΟ„ΞΏ Portfolio
          </Link>

          {/* Top row: badge + title + desc + cta */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-16">
            <motion.div {...fadeUp()}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 bg-primary/10 border border-primary/30 text-primary">
                {study.type}
              </div>
              <h1 className="font-display text-5xl md:text-7xl font-black text-foreground mb-6 leading-[1.02] tracking-tight">
                {study.business}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg font-light">
                {study.whatWeBuilt}
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.15)} className="flex flex-col items-start lg:items-end gap-6">
              {study.projectUrl && (
                <Button className="rounded-full px-10 h-14 font-bold text-primary-foreground border-none shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all bg-primary" asChild>
                  <a href={study.projectUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    Ξ•Ο€Ξ―ΟƒΞΊΞµΟΞ· ΟƒΟ„ΞΏ Website <ArrowUpRight size={18} />
                  </a>
                </Button>
              )}
            </motion.div>
          </div>

          {/* Full-width project image */}
          <motion.div {...fadeUp(0.25)}
            className="relative w-full rounded-t-[2.5rem] overflow-hidden cursor-zoom-in group shadow-2xl border-x border-t border-border/50"
            style={{ boxShadow: `0 -8px 60px hsl(var(--primary) / 0.12)` }}
            onClick={() => !heroImgError && setLightboxOpen(true)}>
            {!heroImgError ? (
              <img src={study.image} alt={study.business}
                onError={() => setHeroImgError(true)}
                className="w-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                style={{ maxHeight: "520px", objectPosition: "top" }} />
            ) : (
              <div
                className="w-full flex flex-col items-center justify-center"
                style={{
                  minHeight: "420px",
                  background: `linear-gradient(135deg, ${tc}22 0%, ${tc}08 50%, hsl(var(--background)) 100%)`,
                  borderBottom: `1px solid ${tc}30`,
                }}
              >
                <div className="w-24 h-24 rounded-3xl border border-border/30 flex items-center justify-center text-5xl mb-6"
                  style={{ background: `${tc}15` }}>
                  βοΈ
                </div>
                <span className="font-display text-3xl font-black text-foreground/30 tracking-tighter">{study.business}</span>
                <span className="text-xs text-muted-foreground/50 mt-2 uppercase tracking-widest">Screenshot coming soon</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            {!heroImgError && (
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
                <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-bold shadow-2xl">
                  <ZoomIn size={18} /> Ξ ΟΞΏΞ²ΞΏΞ»Ξ® Full Screenshot
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* β”€β”€ METRICS STRIP β”€β”€ */}
      <section className="relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeUp(0.1)}
            className="rounded-3xl mx-auto max-w-4xl -mt-1 glass-card overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border/30">
              {study.results.map((r, i) => (
                <div key={i} className="px-10 py-10 text-center group hover:bg-white/[0.03] transition-colors">
                  <span className="font-display text-5xl md:text-6xl font-black block mb-2 group-hover:scale-105 transition-transform duration-300"
                    style={{ color: tc }}>{r.value}</span>
                  <span className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.25em]">{r.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* β”€β”€ CHALLENGE & SOLUTION β”€β”€ */}
      <section className="py-28 section-light relative">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Challenge */}
            <motion.div {...fadeUp()}
              className="relative p-10 md:p-14 rounded-[2.5rem] border border-border/10 bg-card shadow-sm overflow-hidden group hover:shadow-md transition-all duration-500">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-primary" />
              <span className="text-[10px] font-black uppercase tracking-[0.35em] mb-5 block text-primary">
                The Problem
              </span>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6 leading-snug">Ξ— Ξ ΟΟΞΊΞ»Ξ·ΟƒΞ·</h2>
              <p className="text-muted-foreground leading-relaxed text-lg font-light text-left">{study.challenge}</p>
            </motion.div>


            {/* Solution */}
            <motion.div {...fadeUp(0.15)}
              className="relative p-10 md:p-14 rounded-[2.5rem] border border-border/10 bg-card shadow-sm overflow-hidden group hover:shadow-md transition-all duration-500">
              <div className="absolute top-0 right-0 w-1.5 h-full bg-accent" />
              <span className="text-[10px] font-black uppercase tracking-[0.35em] mb-5 block text-primary">
                The Solution
              </span>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6 leading-snug">Ξ— Ξ›ΟΟƒΞ·</h2>
              <p className="text-muted-foreground leading-relaxed text-lg font-light text-left">{study.solution}</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* β”€β”€ ADMIN PANEL β”€β”€ */}
      {study.adminPanel && (
        <section className="py-28 relative overflow-hidden section-light border-y border-border/10">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <motion.div {...fadeUp()} className="mb-16">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.35em] mb-4 block text-primary">
                      {study.adminPanel.systemLabel || "Custom Built System"}
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-black text-foreground">
                      {study.adminPanel.title}
                    </h2>
                  </div>
                  <p className="text-lg text-muted-foreground max-w-md font-light leading-relaxed text-left">
                    {study.adminPanel.description}
                  </p>
                </div>
              </motion.div>

              {/* Feature cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {study.adminPanel.features.map((f, i) => (
                  <motion.div key={i} {...fadeUp(i * 0.07)}
                    className="p-8 rounded-3xl border border-border/10 bg-card shadow-sm hover:shadow-md transition-all duration-400 group">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-inner bg-primary/10">
                      {f.icon}
                    </div>
                    <h4 className="font-black text-foreground mb-3 text-base uppercase tracking-tighter">{f.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* Screenshot */}
              <motion.div {...fadeUp(0.1)} className="space-y-6">
                {study.adminPanel.images.map((img, i) => (
                  <AdminImage
                    key={i}
                    src={img}
                    alt={`${study.adminPanel!.title} screenshot ${i + 1}`}
                    onClick={() => setAdminLightboxSrc(img)}
                  />
                ))}
              </motion.div>

              {/* Mobile Experience Showcase */}
              {study.adminPanel.mobileImages && study.adminPanel.mobileImages.length > 0 && (
                <div className="mt-32">
                  <motion.div {...fadeUp()} className="text-center mb-16">
                    <span className="text-[10px] font-black uppercase tracking-[0.35em] mb-4 block text-primary">
                      Mobile First
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl font-black text-foreground">
                      Ξ”ΞΉΞ±Ο‡ΞµΞ―ΟΞΉΟƒΞ· Ξ‘Ο€Ο Ξ¤ΞΏ ΞΞΉΞ½Ξ·Ο„Ο
                    </h2>
                  </motion.div>

                  <div className="flex flex-wrap justify-center gap-12">
                    {study.adminPanel.mobileImages.map((img, i) => (
                      <motion.div key={i} {...fadeUp(0.1 * i)} className="relative group">
                        {/* Glow Behind */}
                        <div className="absolute inset-0 rounded-[3rem] opacity-30 blur-2xl transition-opacity duration-700 group-hover:opacity-50 bg-primary" />

                        {/* iPhone Mockup Frame */}
                        <div className="relative w-[300px] h-[620px] rounded-[3rem] border-[10px] bg-card overflow-hidden shadow-2xl z-10"
                          style={{ borderColor: 'var(--border)' }}>
                          {/* Top Dynamic Bar / Notch */}
                          <div className="absolute top-0 inset-x-0 h-7 w-36 mx-auto rounded-b-3xl z-20"
                            style={{ backgroundColor: 'var(--border)' }}>
                            <div className="absolute top-2 right-6 w-3 h-3 rounded-full bg-background/20" />
                          </div>

                          {/* Inner Screen */}
                          {img.endsWith('.mp4') ? (
                            <video
                              src={img}
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="w-full h-full object-cover object-top"
                            />
                          ) : (
                            <img
                              src={img}
                              alt={`Mobile UI ${i + 1}`}
                              className="w-full h-full object-cover object-top transition-transform duration-1500 ease-out group-hover:scale-105"
                            />
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* β”€β”€ AI AGENT β”€β”€ */}
      {study.aiAgent && (
        <section className="py-28 relative overflow-hidden border-y border-border/10"
          style={{ background: `linear-gradient(135deg, ${tc}15 0%, #030806 50%, #020504 100%)` }}>
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full opacity-10 blur-[200px] pointer-events-none"
            style={{ background: tc }} />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-[0.05] blur-[150px] pointer-events-none"
            style={{ background: tc }} />

          {/* Subtle grid */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{ backgroundImage: "radial-gradient(circle, #fff 0.5px, transparent 0.5px)", backgroundSize: "40px 40px" }} />

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">

              {/* Header */}
              <motion.div {...fadeUp()} className="mb-16 text-center">
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
                  <span className="w-2 h-2 rounded-full animate-ping"
                    style={{ background: study.themeColor || "hsl(var(--primary))" }} />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60">
                    {study.aiAgent.tagline}
                  </span>
                </div>

                <motion.h2
                  className="font-display text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tighter"
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  style={{
                    background: `linear-gradient(90deg, #fff 0%, ${study.themeColor || "#1a9b7a"} 40%, #a8f0d8 70%, #fff 100%)`,
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {study.aiAgent.name}
                </motion.h2>

                <p className="text-white/60 text-lg max-w-2xl mx-auto font-light leading-relaxed text-center">
                  {study.aiAgent.description}
                </p>
              </motion.div>
              
              {/* AI Agent Character Image */}
              {study.aiAgent.image && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="mb-16 relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#030806] z-10 rounded-3xl" />
                  <div className="max-w-2xl mx-auto rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl relative">
                    <img 
                      src={study.aiAgent.image} 
                      alt={study.aiAgent.name}
                      className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                    />
                    {/* Inner glow */}
                    <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/20 rounded-3xl" />
                  </div>
                  
                  {/* Decorative elements around image */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-[80px] -z-10 animate-pulse" 
                       style={{ background: `${study.themeColor}33` }} />
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-[80px] -z-10 animate-pulse" 
                       style={{ background: `${study.themeColor}33` }} />
                </motion.div>
              )}

              {/* Mythology origin */}
              {study.aiAgent.mythOrigin && (
                <motion.div {...fadeUp(0.1)} className="mb-16">
                  <div className="relative max-w-2xl mx-auto px-8 py-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
                        style={{ background: `${study.themeColor}22`, border: `1px solid ${study.themeColor}40` }}>
                        β΅
                      </div>
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.25em] mb-2 block"
                          style={{ color: study.themeColor || "hsl(var(--primary))" }}>
                          Ξ“ΞΉΞ±Ο„Ξ― Β«{study.aiAgent.name.split(' ')[0]}Β»;
                        </span>
                        <p className="text-white/70 text-sm leading-relaxed italic">{study.aiAgent.mythOrigin}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Feature Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {study.aiAgent.features.map((f, i) => (
                  <motion.div key={i} {...fadeUp(i * 0.08)}
                    className="relative p-7 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm group overflow-hidden hover:bg-white/[0.08] transition-all duration-400">
                    {/* Corner glow on hover */}
                    <div className="absolute top-0 right-0 w-20 h-20 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"
                      style={{ background: study.themeColor || "hsl(var(--primary))" }} />
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 border border-white/10"
                      style={{ background: `${study.themeColor}18` }}>
                      {f.icon}
                    </div>
                    <h4 className="font-black text-white text-sm uppercase tracking-tight mb-3">{f.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
                    {/* Bottom accent */}
                    <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                      style={{ background: study.themeColor || "hsl(var(--primary))" }} />
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </section>
      )}

      {/* β”€β”€ DELIVERABLES β”€β”€ */}
      <section className="py-28 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <span className="text-[10px] font-black uppercase tracking-[0.35em] mb-4 block text-primary">
              Scope of Work
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-foreground tracking-tight">
              Deliverables & Features
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {study.features.map((f, i) => (
              <motion.div key={i} {...fadeUp(i * 0.06)}
                className="relative flex items-center gap-4 p-6 rounded-2xl bg-card border border-border/10 shadow-sm group overflow-hidden hover:shadow-md transition-all duration-300">
                <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full bg-primary" />
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-primary/10">
                  <CheckCircle2 size={20} className="text-primary" />
                </div>
                <span className="font-bold text-foreground/90 leading-tight uppercase tracking-tighter text-sm">{f}</span>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack */}
          {study.techStack && (
            <motion.div {...fadeUp(0.3)} className="mt-16 text-center">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] mb-4 block text-muted-foreground">Technology Stack</span>
              <div className="flex flex-wrap justify-center gap-2">
                {study.techStack.map((tech, i) => (
                  <span key={i} className="px-4 py-2 rounded-full text-xs font-bold border border-border/30 bg-card text-foreground shadow-sm inline-flex items-center transition-all hover:shadow-md">
                    <div className="w-1.5 h-1.5 rounded-full mr-2 bg-primary" />
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

        </div>
      </section>

      {/* β”€β”€ TIMELINE β”€β”€ */}
      {study.timeline && (
        <section className="py-28 relative overflow-hidden section-light border-y border-border/10">
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div {...fadeUp()} className="text-center mb-16">
              <span className="text-[10px] font-black uppercase tracking-[0.35em] mb-4 block text-primary">
                Process & Methodology
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-black text-foreground tracking-tight">
                Ξ ΟΟ‚ Ο„ΞΏ Ξ§Ο„Ξ―ΟƒΞ±ΞΌΞµ
              </h2>
              <div className="mt-6">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold shadow-sm bg-primary/10 border border-primary/30 text-primary">
                  β± {study.timeline.duration}
                </span>
              </div>
            </motion.div>

            <div className="max-w-5xl mx-auto relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-3 left-[12.5%] right-[12.5%] w-[75%] h-[2px] bg-border" />

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative">
                {study.timeline.steps.map((step, i) => (
                  <motion.div key={i} {...fadeUp(i * 0.1)} className="relative flex flex-col items-center text-center">
                    <div className="w-6 h-6 rounded-full border-[4px] border-background flex-shrink-0 mb-6 relative z-10 mx-auto bg-primary" />
                    <h4 className="font-black text-foreground text-lg mb-2">{step.name}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed px-2">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* β”€β”€ KEY INSIGHT β”€β”€ */}
      {study.keyInsight && (
        <section className="py-28 relative overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div {...fadeUp()} className="max-w-5xl mx-auto">
              <div
                className="relative flex flex-col md:flex-row gap-8 md:gap-12 p-10 md:p-14 rounded-[2.5rem] overflow-hidden group bg-primary/5 border-2 border-dashed border-primary/20"
              >
                {/* Playful Glow inside the box */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 rounded-full opacity-20 blur-[80px] group-hover:opacity-40 transition-opacity duration-700 pointer-events-none bg-primary" />

                {/* Floating playful icon */}
                <div className="shrink-0 flex items-start justify-center">
                  <motion.div
                    animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="w-24 h-24 md:w-28 md:h-28 rounded-[2rem] flex items-center justify-center text-4xl md:text-5xl shadow-xl bg-card border border-border/50 relative z-10"
                    style={{ boxShadow: `0 20px 40px -10px hsl(var(--primary) / 0.25)` }}
                  >
                    π’΅
                  </motion.div>
                </div>

                <div className="relative z-10 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 bg-card border border-primary/30 text-primary">
                    Ξ£Ξ¤Ξ΅Ξ‘Ξ¤Ξ—Ξ“Ξ™ΞΞ— ΞΞ‘Ξ¤Ξ™Ξ‘
                  </div>
                  <h3 className="font-display text-2xl md:text-4xl font-black text-foreground mb-6 leading-tight tracking-tight">
                    {study.keyInsight.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg md:text-xl font-light text-left">
                    {study.keyInsight.body}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )
      }

      {/* β”€β”€ TESTIMONIAL β”€β”€ */}
      {
        study.testimonial && (
          <section className="py-28 relative overflow-hidden section-light">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <motion.div {...fadeUp()} className="max-w-4xl mx-auto text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-8 bg-card shadow-sm border border-border/10 text-primary">
                  <span className="text-4xl leading-none font-display font-black -mt-2">"</span>
                </div>
                <h3 className="font-display text-4xl md:text-5xl font-black text-foreground mb-12 leading-tight tracking-tighter">
                  {study.testimonial.quote}
                </h3>
                <div>
                  <div className="font-bold text-lg text-foreground mb-1 uppercase tracking-tight">{study.testimonial.name}</div>
                  <div className="text-sm font-light text-muted-foreground uppercase tracking-widest">{study.testimonial.role}</div>
                </div>
              </motion.div>
            </div>
          </section>
        )
      }

      {/* β”€β”€ ONGOING SUPPORT GUARANTEE β”€β”€ */}
      <section className="py-12 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fadeUp()} className="max-w-2xl mx-auto text-center border-t border-border/10 pt-12">
            <ShieldCheck size={20} className="mx-auto mb-4 opacity-70 text-primary" />
            <p className="text-muted-foreground text-sm leading-relaxed font-light italic mb-6">
              "ΞΞµΟ„Ξ¬ Ο„Ξ·Ξ½ ΞΏΞ»ΞΏΞΊΞ»Ξ®ΟΟ‰ΟƒΞ· ΞΊΞ¬ΞΈΞµ Ξ­ΟΞ³ΞΏΟ…, <strong>ΟƒΟ…Ξ½ΞµΟ‡Ξ―Ξ¶ΞΏΟ…ΞΌΞµ ΞΊΞ±ΞΉ Ο„Ξ± Ο„ΞµΟƒΟ„Ξ¬ΟΞΏΟ…ΞΌΞµ ΞµΞΎΞΏΞ½Ο…Ο‡ΞΉΟƒΟ„ΞΉΞΊΞ¬</strong> ΞΌΞ­Ο‡ΟΞΉ Ξ½Ξ± ΞµΞ―Ξ½Ξ±ΞΉ ΟΞ»Ξ± Ο„Ξ­Ξ»ΞµΞΉΞ± ΞΊΞ±ΞΉ Ξ±Ο€ΟΞ»Ο…Ο„Ξ± Ξ»ΞµΞΉΟ„ΞΏΟ…ΟΞ³ΞΉΞΊΞ¬. Ξ•Ο€ΞΏΟ€Ο„ΞµΟΞΏΟ…ΞΌΞµ ΞΊΞ±ΞΉ Ο€ΟΞ±Ξ³ΞΌΞ±Ο„ΞΏΟ€ΞΏΞΉΞΏΟΞΌΞµ Ξ±Ξ½Ξ¬ Ο„Ξ±ΞΊΟ„Ξ¬ Ο‡ΟΞΏΞ½ΞΉΞΊΞ¬ Ξ΄ΞΉΞ±ΟƒΟ„Ξ®ΞΌΞ±Ο„Ξ± ΞµΞ»Ξ­Ξ³Ο‡ΞΏΟ…Ο‚ Ξ³ΞΉΞ± Ξ½Ξ± Ξ΄ΞΉΞ±ΟƒΟ†Ξ±Ξ»Ξ―ΟƒΞΏΟ…ΞΌΞµ ΟΟ„ΞΉ Ο„ΞΏ ΟƒΟΟƒΟ„Ξ·ΞΌΞ± ΟƒΟ…Ξ½ΞµΟ‡Ξ―Ξ¶ΞµΞΉ Ξ½Ξ± Ξ΄ΞΏΟ…Ξ»ΞµΟΞµΞΉ Ξ¬ΟΞΏΞ³Ξ± ΞΊΞ±ΞΉ Ξ½Ξ± Ξ±Ο€ΞΏΞ΄Ξ―Ξ΄ΞµΞΉ Ο„Ξ± ΞΌΞ­Ξ³ΞΉΟƒΟ„Ξ±."
            </p>
            <div className="inline-flex flex-col items-center">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-foreground">
                Hustle Labs Team
              </span>
              <div className="w-6 h-[2px] mt-3 rounded-full opacity-50 bg-primary" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* β”€β”€ NEXT PROJECT β”€β”€ */}
      {
        nextStudy && (
          <section className="py-16 md:py-24 border-t border-border/10 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl opacity-10 blur-[100px] rounded-full pointer-events-none" style={{ backgroundColor: nextStudy.themeColor || 'var(--primary)' }} />
            <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
              <motion.div {...fadeUp()}>
                <span className="text-muted-foreground font-black tracking-[0.3em] text-[10px] uppercase mb-4 block">Ξ•Ο€ΟΞΌΞµΞ½ΞΏ ΞΟΞ³ΞΏ</span>
                <Link to={`/portfolio/${nextStudy.slug}`} className="group inline-block">
                  <h2 className="font-display text-4xl md:text-7xl font-black text-foreground mb-6 leading-tight tracking-tighter group-hover:opacity-80 transition-opacity">
                    {nextStudy.business}
                  </h2>
                  <div className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-card border border-border/50 text-foreground text-sm font-bold shadow-lg group-hover:scale-105 transition-transform">
                    Ξ ΟΞΏΞ²ΞΏΞ»Ξ® Case Study <ArrowRight size={16} />
                  </div>
                </Link>
              </motion.div>
            </div>
          </section>
        )
      }

      {/* β”€β”€ FINAL CTA β”€β”€ */}
      <section className="py-28 relative overflow-hidden bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            {...fadeUp()}
            className="relative rounded-[3.5rem] overflow-hidden p-[1px] shadow-2xl"
            style={{ background: `linear-gradient(to bottom right, hsl(var(--primary) / 0.3), hsl(var(--background)))` }}
          >
            <div className="glass p-12 md:p-20 text-center relative overflow-hidden rounded-[3.45rem]">
              <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(circle at 50% 0%, hsl(var(--primary) / 0.15), transparent 50%)` }} />
              <div className="relative z-10">
                <span className="font-black tracking-[0.3em] text-[10px] uppercase mb-8 block text-primary">
                  Ξ•Ο€ΟΞΌΞµΞ½ΞΏ Ξ’Ξ®ΞΌΞ±
                </span>

                <h2 className="font-display text-5xl md:text-8xl font-black text-foreground mb-8 leading-tight tracking-tighter">
                  ΞΞ­Ξ»ΞµΞΉΟ‚ ΞΊΞ¬Ο„ΞΉ <br className="hidden md:block" />
                  <span className="text-gradient">
                    Ο€Ξ±ΟΟΞΌΞΏΞΉΞΏ
                  </span>{" "}
                  Ξ³ΞΉΞ± ΞµΟƒΞ­Ξ½Ξ±;
                </h2>

                <p className="text-muted-foreground text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                  Ξ‘Ο€Ο custom Ξ΄ΞΉΞ±Ο‡ΞµΞΉΟΞΉΟƒΟ„ΞΉΞΊΞ¬ ΞΊΞ±ΞΉ ΞΉΟƒΟ„ΞΏΟƒΞµΞ»Ξ―Ξ΄ΞµΟ‚ ΞΌΞ­Ο‡ΟΞΉ ΞΏΞ»ΞΏΞΊΞ»Ξ·ΟΟ‰ΞΌΞ­Ξ½Ξ± digital ecosystems.
                  Ξ ΞµΟ‚ ΞΌΞ±Ο‚ Ο„ΞΉ ΞΈΞ­Ξ»ΞµΞΉΟ‚ Ξ½Ξ± Ο‡Ο„Ξ―ΟƒΞµΞΉΟ‚ ΞΊΞ±ΞΉ Ο„ΞΏ ΞΊΞ¬Ξ½ΞΏΟ…ΞΌΞµ Ο€ΟΞ±Ξ³ΞΌΞ±Ο„ΞΉΞΊΟΟ„Ξ·Ο„Ξ±.
                </p>

                <div className="flex justify-center gap-4 flex-wrap mb-10">
                  <Button variant="hero" size="lg" className="rounded-full px-12 h-16 text-lg group shadow-xl font-bold border-0 bg-primary text-white hover:bg-primary/90" asChild>
                    <Link to="/project-brief" className="flex items-center gap-3">
                      ΞΞµΞΊΞΉΞ½Ξ®ΟƒΟ„Ξµ Ο„ΞΏ Project <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                    </Link>
                  </Button>
                  <Button variant="hero-outline" size="lg" className="rounded-full px-12 h-16 text-lg font-bold" asChild>
                    <Link to="/contact">
                      ΞΞΉΞ»Ξ®ΟƒΟ„Ξµ ΞΌΞ±Ξ¶Ξ― ΞΌΞ±Ο‚
                    </Link>
                  </Button>
                </div>

                {/* Trust strip */}
                <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-muted-foreground text-sm font-medium">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-primary" /> Ξ§Ο‰ΟΞ―Ο‚ Ξ΄ΞµΟƒΞΌΞµΟΟƒΞµΞΉΟ‚
                  </span>
                  <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-border" />
                  <span className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-primary" /> Ξ‘Ο€Ξ¬Ξ½Ο„Ξ·ΟƒΞ· ΞµΞ½Ο„ΟΟ‚ 24h
                  </span>
                  <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-border" />
                  <span className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-primary" /> Custom Ξ»ΟΟƒΞµΞΉΟ‚
                  </span>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* β”€β”€ STICKY BACK NAV β”€β”€ */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <Link to="/portfolio"
          className="group flex items-center gap-3 px-7 py-3.5 rounded-full bg-card/90 text-foreground text-xs font-black shadow-2xl hover:scale-105 active:scale-95 transition-all uppercase tracking-widest backdrop-blur-md border border-border/50 hover:border-border hover:bg-card">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> ΞΞ»Ξ± Ο„Ξ± ΞΟΞ³Ξ±
        </Link>
      </div>
    </div >
  );
};

export default CaseStudyPage;
