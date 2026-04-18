import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Zap, Monitor, Rocket, Layers, BarChart3, Bot, Search, Map, Code2, TrendingUp, GraduationCap, Building2, Mic, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import LabBackground from "@/components/LabBackground";

const Index = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    },
    viewport: { once: true }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-primary selection:text-black overflow-x-hidden">
      
      {/* ── SECTION 1: HERO ── */}
      <section className="relative min-h-[90vh] flex items-center justify-center py-32 overflow-hidden border-b border-white/5">
        <LabBackground />
        
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(208,255,0,0.03),transparent_70%)] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-5 py-1.5 rounded-full bg-primary/5 border border-primary/20 mb-8 md:mb-12"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/80 italic">Startup Studio . Digital Agency . Private Hub</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
              className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-8xl 2xl:text-9xl font-black tracking-tighter leading-[0.85] mb-8 md:mb-12 uppercase italic"
            >
              We don’t build websites. <br />
              <span className="text-primary tracking-normal">We build businesses.</span>
            </motion.h1>

            <div className="space-y-8 md:space-y-12 mb-12 md:mb-16">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as any }}
                className="font-display text-xl md:text-2xl lg:text-3xl font-medium text-white/70 tracking-tight italic"
              >
                <p>Some we build for clients.</p>
                <p>Some we build with.</p>
              </motion.div>
              
              <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ duration: 1, delay: 0.3 }}
                 className="flex flex-wrap justify-center gap-x-6 md:gap-x-8 gap-y-2 text-primary font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-xs md:text-sm lg:text-base italic"
              >
                <span>We build.</span>
                <span>We back.</span>
                <span>We grow.</span>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as any }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
            >
              <Button size="xl" className="w-full sm:w-auto rounded-full px-8 md:px-12 h-16 md:h-20 text-lg md:text-xl font-black group bg-primary text-black hover:bg-white transition-all border-none italic shadow-glow" asChild>
                <Link to="/project-brief">
                  Build my project
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="w-full sm:w-auto rounded-full px-8 md:px-12 h-16 md:h-20 text-lg md:text-xl font-black border-white/10 hover:bg-white hover:text-black transition-all italic" asChild>
                <Link to="/book-call">Pitch your idea</Link>
              </Button>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-[10px] uppercase font-black tracking-[0.5em] text-white/50"
            >
              Athens . London . Dubai
            </motion.p>
          </div>
        </div>

        {/* ── Decorative Elements ── */}
        <motion.div 
          animate={{ y: [0, -20, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-primary/10 blur-[120px] pointer-events-none"
        />
      </section>

      {/* ── SECTION 2: INTRO ── */}
      <section className="py-32 md:py-48 relative border-t border-white/5 overflow-hidden bg-[#0a0a0a]">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div initial={fadeInUp.initial} whileInView={fadeInUp.whileInView} viewport={fadeInUp.viewport} transition={fadeInUp.transition} className="max-w-5xl mx-auto text-center">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-12 block italic tracking-[0.6em]">The Lab Identity</span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black tracking-tighter leading-[0.85] mb-16 uppercase italic px-2">
              Not an agency. <br />
              Not a coworking. <br />
              <span className="text-white/20 italic">Not for everyone.</span>
            </h2>
            <div className="space-y-12 md:space-y-16 max-w-4xl mx-auto px-4">
              <p className="text-2xl md:text-4xl lg:text-5xl font-medium text-white/80 leading-[1.1] italic tracking-tight">
                HustleLabs is where ideas become real. <br className="hidden md:block" />
                And some of them become companies.
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl font-medium text-white/40 leading-relaxed italic">
                We combine strategy, technology and execution <br className="hidden md:block" />
                to turn concepts into something that actually works.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 3: BUILD FOR YOU / BUILD WITH YOU ── */}
      <section className="py-0 relative border-t border-white/5 bg-[#050505]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          {/* Build for you */}
          <div className="p-10 md:p-16 lg:p-20 xl:p-24 border-b lg:border-b-0 lg:border-r border-white/5 hover:bg-white/[0.02] transition-all duration-700 group relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
            <motion.div initial={fadeInUp.initial} whileInView={fadeInUp.whileInView} viewport={fadeInUp.viewport} transition={fadeInUp.transition} className="relative z-10">
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-white/20 mb-10 block group-hover:text-primary transition-colors italic">FOR BUSINESSES</span>
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-white/5 flex items-center justify-center text-primary mb-12 group-hover:scale-110 transition-all duration-500 border border-white/10 group-hover:border-transparent group-hover:shadow-glow/20">
                <Monitor size={32} strokeWidth={1} />
              </div>
              <h3 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter mb-6 italic uppercase group-hover:text-primary transition-colors">Build<br/>for you</h3>
              <p className="text-[11px] md:text-sm font-black uppercase tracking-[0.3em] text-primary mb-10 italic">You bring the business. We build the engine.</p>
              <p className="text-xl md:text-2xl text-white/60 mb-16 leading-relaxed max-w-md italic">
                We create high-performance websites, systems and marketing strategies for businesses that want to grow fast and properly.
              </p>
              <ul className="grid grid-cols-1 gap-y-5 mb-24 pr-4">
                {["Websites & Platforms", "Automation & AI Tools", "Marketing Systems", "Growth Strategy"].map((item) => (
                  <li key={item} className="flex items-center gap-4 text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-white/20 border-l border-white/10 pl-8 group-hover:border-primary/50 transition-all italic">
                    {item}
                  </li>
                ))}
              </ul>
              <Button size="xl" className="w-full sm:w-auto rounded-full h-20 md:h-24 px-12 md:px-16 text-xl md:text-2xl italic font-black bg-white text-black hover:bg-primary transition-all border-none shadow-xl hover:shadow-glow" asChild>
                <Link to="/project-brief">Start a project</Link>
              </Button>
            </motion.div>
          </div>

          {/* Build with you */}
          <div className="p-10 md:p-16 lg:p-20 xl:p-24 hover:bg-primary/[0.02] transition-all duration-700 group relative overflow-hidden">
            <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
            <motion.div initial={fadeInUp.initial} whileInView={fadeInUp.whileInView} viewport={fadeInUp.viewport} transition={fadeInUp.transition} className="relative z-10">
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-white/20 mb-10 block group-hover:text-primary transition-colors italic">FOR FOUNDERS</span>
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-white/5 flex items-center justify-center text-white/40 mb-12 group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all duration-500 border border-white/10 group-hover:border-transparent group-hover:shadow-glow">
                <Rocket size={32} strokeWidth={1} />
              </div>
              <h3 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter mb-6 italic uppercase group-hover:text-white transition-colors">Build<br/>with you</h3>
              <p className="text-[11px] md:text-sm font-black uppercase tracking-[0.3em] text-primary mb-10 italic">You bring the idea. We build it together.</p>
              <p className="text-xl md:text-2xl text-white/60 mb-10 leading-relaxed max-w-md italic pr-2">
                Some ideas need more than a service. <br />
                They need a partner.
              </p>
              <p className="text-[10px] md:text-[11px] text-white/20 italic mb-16 uppercase tracking-[0.4em] font-black leading-relaxed">In selected cases, we collaborate, build <br/> and grow projects together.</p>
              <ul className="grid grid-cols-1 gap-y-5 mb-24">
                {["Startup Development", "Strategic Partnership", "Product Building", "Growth Execution"].map((item) => (
                  <li key={item} className="flex items-center gap-4 text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-white/20 border-l border-white/10 pl-8 group-hover:border-primary/50 transition-all italic">
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="outline" size="xl" className="w-full sm:w-auto rounded-full h-20 md:h-24 px-12 md:px-16 text-xl md:text-2xl italic font-black border-white/10 hover:bg-white hover:text-black transition-all" asChild>
                <Link to="/book-call">Pitch your idea</Link>
              </Button>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ── SECTION 4: HUSTLE BACKED ── */}
      <section className="py-32 md:py-48 relative border-t border-white/5 bg-[#080808]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16 md:mb-24">
            <motion.div initial={fadeInUp.initial} whileInView={fadeInUp.whileInView} viewport={fadeInUp.viewport} transition={fadeInUp.transition} className="max-w-4xl mx-auto lg:mx-0">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-8 block italic">The Hustle Roster</span>
              <h2 className="font-display text-3xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] mb-12 italic uppercase">
                We don’t back everyone. <span className="text-white/20 text-2xl md:text-4xl lg:text-5xl tracking-normal md:whitespace-nowrap">But when we do we go all in.</span>
              </h2>
              
              <div className="space-y-4 md:space-y-6 mt-12 md:mt-16">
                <p className="text-primary font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-sm md:text-base italic animate-pulse">No clients. No templates. Just real builds.</p>
                <div className="h-px w-20 bg-white/10" />
                <p className="text-xl md:text-2xl text-white/50 max-w-2xl leading-relaxed italic">
                  These are not client projects. <br/>
                  These are businesses we chose to build.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group relative h-[350px] md:h-[450px] lg:h-[550px] xl:h-[650px] rounded-[2rem] overflow-hidden border border-white/5 bg-secondary/30"
            >
              <img src="/images/skiathostravellers.png" alt="Skiathos Travellers" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-10 md:p-12">
                <div className="mb-8 overflow-hidden">
                  <span className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black uppercase tracking-widest text-primary mb-4 italic">BUILT WITH HUSTLE</span>
                  <h3 className="text-4xl md:text-5xl font-black text-white italic uppercase tracking-tighter leading-none">Skiathos <br/> Travellers</h3>
                </div>
                <div className="flex items-center justify-between border-t border-white/10 pt-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <span className="text-xs font-black uppercase tracking-[0.4em] text-white/40 italic">Tourism Engine</span>
                  <Link to="/portfolio/skiathos-travellers" className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black hover:bg-primary transition-colors">
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative h-[350px] md:h-[450px] lg:h-[550px] xl:h-[650px] rounded-[2rem] overflow-hidden border border-white/5 bg-secondary/30"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                 <span className="text-white/5 font-black text-7xl md:text-9xl rotate-12 -tracking-widest uppercase italic">SOON</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-12">
                <span className="text-xs font-black uppercase tracking-[0.4em] text-white/20 italic">Next Project</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: GROWTH PACKAGES ── */}
      <section className="py-32 md:py-48 relative bg-[#050505] overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={fadeInUp.initial} whileInView={fadeInUp.whileInView} viewport={fadeInUp.viewport} transition={fadeInUp.transition} className="text-center mb-16 md:mb-24">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-8 block italic">Scale your vision</span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter italic uppercase mb-12">Growth <span className="text-white/20">Systems</span></h2>
            <p className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto italic">Transparent pricing for projects that want to disrupt the status quo.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { 
                name: "The Starter", 
                price: "from €1.8k", 
                desc: "High-end corporate presence for businesses that deserve a premium digital identity.",
                features: ["Custom Premium Design", "Operations Setup", "SEO & Speed Optimized", "Lead Generation Flow"]
              },
              { 
                name: "The Scale", 
                price: "Custom", 
                desc: "Full automated systems, custom dashboards and growth engines for high-scale operations.",
                features: ["Custom Admin Panels", "CRM & ERP Integration", "Multi-channel Automation", "Dedicated Growth Team"],
                popular: true
              },
              { 
                name: "The Fractional", 
                price: "Monthly", 
                desc: "Your own CTO and Creative Director as a service. Continuous development and strategy.",
                features: ["On-demand Development", "Strategic Consulting", "Weekly Experiments", "Priority Support"]
              }
            ].map((pkg, i) => (
              <motion.div 
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "relative p-8 md:p-12 rounded-[2.5rem] border transition-all duration-500 hover:-translate-y-2 flex flex-col",
                  pkg.popular ? "bg-[#080808] border-primary/20 shadow-glow" : "bg-card/30 border-white/5 hover:border-white/10"
                )}
              >
                {pkg.popular && <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-black text-[10px] font-black uppercase tracking-widest italic">Most Efficient</span>}
                <div className="mb-10">
                  <h3 className="text-2xl font-black text-white italic uppercase tracking-wider mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-black text-primary italic mb-6">{pkg.price}</div>
                  <p className="text-sm text-white/50 leading-relaxed italic">{pkg.desc}</p>
                </div>
                <ul className="space-y-4 mb-12 flex-1">
                  {pkg.features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-xs font-bold text-white/70 italic uppercase tracking-wide">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant={pkg.popular ? "default" : "outline"} className={cn("w-full h-16 rounded-full font-black uppercase tracking-widest italic transition-all", pkg.popular ? "bg-primary text-black hover:bg-white" : "border-white/10 hover:bg-white hover:text-black")} asChild>
                  <Link to="/project-brief">Request Access</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: THE HUB ── */}
      <section className="py-0 relative min-h-[80vh] flex items-center bg-[#080808] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(208,255,0,0.05),transparent_70%)]" />
        <div className="container mx-auto px-4 lg:px-8 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div initial={fadeInUp.initial} whileInView={fadeInUp.whileInView} viewport={fadeInUp.viewport} transition={fadeInUp.transition}>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-8 block italic">Physical HQ</span>
              <h2 className="font-display text-5xl md:text-8xl font-black tracking-tighter italic uppercase mb-10 leading-[0.9]">Hustle <br/> Space</h2>
              <p className="text-xl md:text-2xl text-white/60 mb-12 leading-relaxed italic max-w-xl">
                Our premium hybrid hub in Chania. Co-working, networking and experimentation for restless minds.
              </p>
              <div className="flex flex-wrap gap-4">
                 <Button size="xl" className="rounded-full h-20 px-12 bg-white text-black font-black uppercase tracking-widest italic hover:bg-primary transition-all shadow-2xl border-none" asChild>
                   <Link to="/hustle-space">Visit the Space</Link>
                 </Button>
              </div>
            </motion.div>
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="relative h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl"
            >
              <img src="/images/hustlespacenew.jpg" alt="Hustle Space Chania" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Index;
