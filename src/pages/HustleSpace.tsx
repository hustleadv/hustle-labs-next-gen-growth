import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight, MapPin, Coffee, Wifi, Armchair, Lightbulb, Users, Video,
  GraduationCap, Mic, PenLine, Tv, CheckCircle2, BookOpen, Baby, Printer, Paperclip,
  Camera, X, UserCheck, Pencil, Droplets, Utensils, Zap, Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import FAQAccordion from "@/components/FAQAccordion";
import LabBackground from "@/components/LabBackground";
import Magnetic from "@/components/Magnetic";
import { useLanguage } from "@/contexts/LanguageContext";
import hustleSpaceImg from "@/assets/hustlespacenew.jpg";
import spaceWorkshop from "@/assets/space-workshop.jpg";
import spaceEvents from "@/assets/space-events.jpg";

const HustleSpace = () => {
  const { t } = useLanguage();

  const passes = [
    {
      title: t('space.passes.day.title'),
      price: "25€",
      period: "day",
      desc: t('space.passes.day.desc'),
      bullets: [
        t('space.passes.day.bullet1'),
        t('space.passes.day.bullet2'),
        t('space.passes.day.bullet3'),
        t('space.passes.day.bullet4'),
      ],
    },
    {
      title: t('space.passes.week.title'),
      price: "85€",
      period: "week",
      desc: t('space.passes.week.desc'),
      bullets: [
        t('space.passes.week.bullet1'),
        t('space.passes.week.bullet2'),
        t('space.passes.week.bullet3'),
        t('space.passes.week.bullet4'),
      ],
    },
    {
      title: t('space.passes.month.title'),
      price: "150€",
      period: "month",
      desc: t('space.passes.month.desc'),
      bullets: [
        t('space.passes.month.bullet1'),
        t('space.passes.month.bullet2'),
        t('space.passes.month.bullet3'),
        t('space.passes.month.bullet4'),
      ],
    },
    {
      title: t('space.passes.elite.title'),
      price: "180€",
      period: "month",
      desc: t('space.passes.elite.desc'),
      bullets: [
        t('space.passes.elite.bullet1'),
        t('space.passes.elite.bullet2'),
        t('space.passes.elite.bullet3'),
        t('space.passes.elite.bullet4'),
      ],
    },
  ];

  const amenities = [
    { icon: Wifi, label: "Ultra-Fiber internet" },
    { icon: Tv, label: "55\" AI Smart TV" },
    { icon: Utensils, label: t('space.amenities.kitchen') },
    { icon: Coffee, label: t('space.amenities.coffee') },
    { icon: Droplets, label: t('space.amenities.water') },
    { icon: Pencil, label: "Stationery & Supplies" },
    { icon: Mic, label: "Audio infrastructure" },
    { icon: Camera, label: "Visual content gear" },
    { icon: Armchair, label: "Performance seating" },
    { icon: Lightbulb, label: "Cinema lighting" },
    { icon: PenLine, label: "Ideation surfaces" },
    { icon: Printer, label: "Analog outputs" },
    { icon: Paperclip, label: "Building tools" },
    { icon: BookOpen, label: "Knowledge library" },
    { icon: Baby, label: "Junior Hustlers corner" },
  ];

  const faqs = [
    { question: t('space.faq.1.q'), answer: t('space.faq.1.a') },
    { question: t('space.faq.2.q'), answer: t('space.faq.2.a') },
    { question: t('space.faq.3.q'), answer: t('space.faq.3.a') },
    { question: t('space.faq.4.q'), answer: t('space.faq.4.a') },
    { question: t('space.faq.5.q'), answer: t('space.faq.5.a') },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPass, setSelectedPass] = useState<any>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", startDate: "", endDate: "" });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  const getDynamicPrice = () => {
    if (!selectedPass) return "0€";
    
    if (selectedPass.period === "day" && formData.startDate && formData.endDate) {
      const start = new Date(formData.startDate);
      const end = new Date(formData.endDate);
      if (end >= start) {
        const diffTime = Math.abs(end.getTime() - start.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
        const basePrice = parseInt(selectedPass.price);
        return `${basePrice * diffDays}€`;
      }
    }
    
    return selectedPass.price;
  };

  const fade = {
    initial: { opacity: 1, y: 0 } as const,
    whileInView: { opacity: 1, y: 0 } as const,
    viewport: { once: true } as const,
    transition: { duration: 0 }
  };

  const openModal = (pass: any) => {
    setSelectedPass(pass);
    setIsModalOpen(true);
    setCurrentStep(1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate booking save
    setCurrentStep(2);
  };

  const scrollToPasses = () => {
    document.getElementById("passes")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-primary selection:text-black overflow-x-hidden">
      
      {/* ─── Custom Interactive Hero ─── */}
      <section 
        onMouseMove={handleMouseMove}
        className="relative min-h-[90vh] flex items-center justify-center py-32 overflow-hidden border-b border-white/5 group/hero"
      >
        <LabBackground />
        
        {/* Interactive Mouse Spotlight */}
        <motion.div 
          className="absolute inset-0 pointer-events-none z-0 opacity-0 group-hover/hero:opacity-100 transition-opacity duration-500"
          style={{
            background: useTransform(
              [springX, springY],
              ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(208,255,0,0.06), transparent 80%)`
            )
          }}
        />

        {/* Static subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(208,255,0,0.03),transparent_70%)] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-5 py-1.5 rounded-full bg-primary/5 border border-primary/20 mb-10"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/80 italic">{t('space.hero.label')}</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
              className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-12"
            >
              <span className="block cursor-default">{t('space.hero.title')}</span>
              <span className="text-primary block italic group-hover:scale-[1.02] transition-transform duration-700">{t('space.hero.highlight')}</span>
            </motion.h1>

            <div className="space-y-12 mb-16">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as any }}
                className="font-display text-xl md:text-2xl lg:text-3xl font-medium text-white/50 tracking-tight italic max-w-3xl mx-auto"
              >
                {t('space.hero.desc')}
              </motion.p>
              
              <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ duration: 1, delay: 0.3 }}
                 className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-primary font-black uppercase tracking-[0.5em] text-xs md:text-sm italic"
              >
                <span className="flex items-center gap-2"><Zap size={14} /> Ultra-Fiber</span>
                <span className="flex items-center gap-2"><Coffee size={14} /> Unlimited fuel</span>
                <span className="flex items-center gap-2"><Shield size={14} /> Total Focus</span>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as any }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Magnetic strength={0.2}>
                <Button size="xl" className="w-full sm:w-auto rounded-full px-12 h-20 text-lg font-black group bg-primary text-black hover:bg-white transition-all border-none italic shadow-glow-strong" onClick={scrollToPasses}>
                  {t('space.hero.cta')}
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Magnetic>
              <Magnetic strength={0.3}>
                <Button variant="outline" size="xl" className="w-full sm:w-auto rounded-full px-12 h-20 text-lg font-black border-white/10 hover:bg-white hover:text-black transition-all italic" asChild>
                  <Link to="/contact">Host an Event</Link>
                </Button>
              </Magnetic>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <motion.div 
          animate={{ y: [0, -20, 0], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 -left-20 w-96 h-96 rounded-full bg-primary/5 blur-[120px] pointer-events-none"
        />
      </section>

      {/* ─── Bento Grid (The Environment) ─── */}
      <section className="py-24 relative z-10 border-t border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fade} className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60 italic">{t('space.bento.label')}</span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6 uppercase italic">
              {t('space.bento.title')} <span className="text-primary">{t('space.bento.highlight')}</span>
            </h2>
            <p className="text-white/40 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              {t('space.bento.desc')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-6xl mx-auto auto-rows-[340px]">
            {/* 1. Coworking & Passes (Large/Tall) */}
            <motion.div
              {...fade}
              className="group relative lg:col-span-8 lg:row-span-2 rounded-[2.5rem] overflow-hidden glass-card p-10 flex flex-col justify-end shadow-2xl"
            >
              <img src={hustleSpaceImg} alt="Coworking" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 group-hover:opacity-40 transition-all duration-1000 grayscale" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 text-primary">
                  <Coffee size={24} />
                </div>
                <h3 className="font-sans text-3xl font-semibold text-white mb-3 tracking-tight">{t('space.coworking.title')}</h3>
                <p className="text-white/50 text-base mb-6 leading-relaxed max-w-md font-medium">{t('space.coworking.desc')}</p>
                <button onClick={scrollToPasses} className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-[0.2em] hover:text-white transition-colors">
                  {t('space.coworking.cta')} <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>

            {/* 2. Meeting & Events (Wide) */}
            <motion.div
              {...fade} transition={{ delay: 0.1 }}
              className="group relative lg:col-span-4 lg:row-span-1 rounded-[2.5rem] overflow-hidden glass-card p-8 shadow-xl flex flex-col justify-end"
            >
              <img src={spaceEvents} alt="Meetings" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 group-hover:opacity-30 transition-all duration-1000 grayscale" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
              <div className="relative z-10">
                <span className="px-3 py-1 rounded-full bg-white/10 text-[9px] font-black uppercase tracking-[0.3em] text-white/80 mb-3 inline-block">STRATEGY HUB</span>
                <h3 className="font-sans text-2xl font-semibold text-white mb-2 tracking-tight">{t('space.zones.meeting.title')}</h3>
                <p className="text-white/40 text-sm font-medium">{t('space.zones.meeting.desc')}</p>
              </div>
            </motion.div>

            {/* 3. Workshops */}
            <motion.div
              {...fade} transition={{ delay: 0.2 }}
              className="group relative lg:col-span-4 lg:row-span-1 rounded-[2.5rem] overflow-hidden glass-card p-8 shadow-lg flex flex-col justify-end"
            >
              <img src={spaceWorkshop} alt="Training" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 group-hover:opacity-50 transition-all duration-1000 grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/60 to-transparent" />
              <div className="relative z-10">
                <h3 className="font-sans text-2xl font-semibold text-white mb-1 tracking-tight">{t('space.workshops.title')}</h3>
                <p className="text-primary text-xs uppercase tracking-widest font-bold">{t('space.workshops.available')}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Passes (Booking) ─── */}
      <section id="passes" className="py-32 relative z-10 border-y border-white/5 bg-[#080808]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-6 block italic">CHOOSE YOUR ACCESS</span>
            <h2 className="font-sans text-4xl md:text-5xl font-light tracking-tight mb-6">
              {t('space.booking.title')} <span className="font-medium text-primary italic">{t('space.booking.highlight')}</span>
            </h2>
            <p className="text-white/40 font-medium text-lg">{t('space.booking.desc')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {passes.map((pass, i) => (
              <motion.div
                key={i}
                {...fade}
                transition={{ delay: i * 0.1 }}
                className="group relative p-8 rounded-[2.5rem] glass-card flex flex-col border border-white/5 hover:border-primary/30 transition-all duration-500"
              >
                <h3 className="font-sans text-2xl font-semibold text-white mb-2">{pass.title}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-white">{pass.price}</span>
                  <span className="text-white/40 text-sm">/ {pass.period}</span>
                </div>
                
                <p className="text-white/50 text-sm font-medium mb-8 flex-1">{pass.desc}</p>
                
                <ul className="space-y-4 mb-8">
                  {pass.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-white/70 font-medium">
                      <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>

                <Button 
                  onClick={() => openModal(pass)}
                  className="w-full rounded-full h-14 font-bold uppercase tracking-widest text-xs bg-white/5 border border-white/10 hover:bg-primary hover:text-black hover:border-primary transition-all"
                >
                  {t('space.booking.cta')}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Amenities ─── */}
      <section className="py-32 relative z-10 bg-[#050505]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-6 block">INFRASTRUCTURE</span>
            <h2 className="font-sans text-4xl md:text-5xl font-light tracking-tight text-white mb-8">
              The <span className="font-semibold italic">Specs.</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {amenities.map((a, i) => (
              <motion.div
                key={i}
                {...fade}
                transition={{ delay: i * 0.05 }}
                className="group flex flex-col items-center text-center gap-4 p-6 rounded-[2rem] glass-card border border-white/5 hover:border-white/20 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/30 group-hover:text-primary group-hover:scale-110 transition-all">
                  <a.icon size={24} strokeWidth={1.5} />
                </div>
                <span className="text-xs font-bold text-white/50 group-hover:text-white transition-colors">{a.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-32 relative z-10 border-t border-white/5 bg-[#080808]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-sans text-4xl md:text-5xl font-light tracking-tight text-white">
              Lab <span className="font-medium text-primary italic">Protocols.</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqs} dark />
          </div>
        </div>
      </section>

      {/* ─── Booking Modal ─── */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto z-[101]"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 transition-all z-20"
                aria-label="Κλείσιμο παραθύρου"
              >
                <X size={20} aria-hidden="true" />
              </button>

              <div className="bg-[#0a0a0a] border border-white/10 rounded-[3rem] p-8 md:p-12 overflow-hidden relative shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-20" />
                
                <AnimatePresence mode="wait">
                  {currentStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <div className="mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-[10px] font-black uppercase tracking-widest text-primary mb-6">
                          <UserCheck size={12} /> PROTOCOL ACTIVATION
                        </div>
                        <h2 className="font-sans text-3xl md:text-4xl font-semibold text-white mb-2">{t('space.modal.title')}</h2>
                        <p className="text-white/40 text-sm font-medium">{t('space.modal.subtitle')} {selectedPass?.title}.</p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                          <div className="space-y-1.5">
                            <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">{t('space.modal.name')} *</label>
                            <input
                              type="text"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              required
                              className="w-full h-14 px-5 rounded-2xl bg-white/5 border border-white/10 focus:bg-white/10 focus:border-primary/50 transition-all text-white outline-none"
                              placeholder="Γιάννης Παπαδόπουλος"
                            />
                          </div>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                              <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Email *</label>
                              <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                                className="w-full h-14 px-5 rounded-2xl bg-white/5 border border-white/10 focus:bg-white/10 focus:border-primary/50 transition-all text-white outline-none"
                                placeholder="john@example.com"
                              />
                            </div>
                            <div className="space-y-1.5">
                              <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">{t('space.modal.phone')} *</label>
                              <input
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                required
                                className="w-full h-14 px-5 rounded-2xl bg-white/5 border border-white/10 focus:bg-white/10 focus:border-primary/50 transition-all text-white outline-none"
                                placeholder="69XXXXXXXX"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                              <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">{t('space.modal.from')} *</label>
                              <input
                                type="date"
                                value={formData.startDate}
                                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                                required
                                className="w-full h-14 px-5 rounded-2xl bg-white/5 border border-white/10 focus:bg-white/10 focus:border-primary/50 transition-all text-white outline-none [color-scheme:dark]"
                              />
                            </div>
                            <div className="space-y-1.5">
                              <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">{t('space.modal.to')} *</label>
                              <input
                                type="date"
                                value={formData.endDate}
                                onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                                required
                                className="w-full h-14 px-5 rounded-2xl bg-white/5 border border-white/10 focus:bg-white/10 focus:border-primary/50 transition-all text-white outline-none [color-scheme:dark]"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Order Summary */}
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 flex items-center justify-between mt-8">
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">{t('space.modal.summary')}</p>
                            <p className="text-lg font-semibold text-white">{selectedPass?.title}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">{t('space.modal.total')}</p>
                            <p className="text-2xl font-bold text-primary">{getDynamicPrice()}</p>
                          </div>
                        </div>

                        <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 flex gap-3 text-sm text-primary/80 font-medium">
                          <CheckCircle2 size={18} className="shrink-0 mt-0.5" />
                          <p>{t('space.modal.note')}</p>
                        </div>

                        <Button type="submit" variant="hero" size="lg" className="w-full rounded-2xl h-16 text-base font-black uppercase tracking-widest shadow-glow mt-8">
                          {t('space.modal.confirm')}
                        </Button>
                      </form>
                    </motion.div>
                  )}

                  {currentStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-10"
                    >
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8 border border-primary/20">
                        <CheckCircle2 size={40} className="text-primary" />
                      </div>
                      <h2 className="font-sans text-3xl md:text-4xl font-semibold text-white mb-4">{t('space.modal.success.title')}</h2>
                      <div className="space-y-4 text-white/60 text-base mb-10 max-w-sm mx-auto font-medium">
                        <p>
                          {t('space.modal.success.text1')} <strong className="text-white">{selectedPass?.title}</strong> {t('space.modal.success.text2')}
                        </p>
                        <p>
                          {t('space.modal.success.text3')}
                        </p>
                      </div>
                      <Button onClick={() => setIsModalOpen(false)} variant="hero-outline" size="lg" className="rounded-full px-10 h-14 text-sm font-bold uppercase tracking-widest border-white/20 hover:bg-white hover:text-black">
                        {t('space.modal.back')}
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HustleSpace;
