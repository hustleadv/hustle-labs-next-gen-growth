import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  ArrowRight, Sparkles, Target, Zap, Rocket, 
  Search, Code, Layout, Share2, Mail, 
  Instagram, Linkedin, Globe, MessageSquare, 
  CheckCircle2, Play, Users, Calendar, 
  BarChart3, Settings, Brain, Bot, 
  Smartphone, Database, Cpu, Layers,
  Terminal, Monitor, Mail as MailIcon, 
  Smartphone as PhoneIcon, ChevronRight, X, UserCheck, 
  Clock, MapPin, BadgeCheck, ExternalLink,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import LabBackground from "@/components/LabBackground";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Magnetic from "@/components/Magnetic";
import { useLanguage } from "@/contexts/LanguageContext";

const Academy = () => {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedWorkshop, setSelectedWorkshop] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingStep, setBookingStep] = useState(1);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", workshop: "" });

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  const categories = [
    { id: "all", label: language === 'gr' ? "Όλα" : "All" },
    { id: "ai", label: "AI & Automation" },
    { id: "marketing", label: "Digital Marketing" },
    { id: "building", label: "Project Building" },
  ];

  const workshops = [
    {
      id: 1,
      category: "ai",
      title: t('academy.workshop.1.title'),
      desc: t('academy.workshop.1.desc'),
      price: "150€",
      duration: "4 Ώρες",
      date: "12 Μαΐου",
      level: "Intermediate",
      icon: Bot,
      color: "#D0FF00",
      featured: true,
      whatYouLearn: [
        t('academy.workshop.1.learn.1'),
        t('academy.workshop.1.learn.2'),
        t('academy.workshop.1.learn.3'),
        t('academy.workshop.1.learn.4')
      ]
    },
    {
      id: 2,
      category: "marketing",
      title: t('academy.workshop.2.title'),
      desc: t('academy.workshop.2.desc'),
      price: "120€",
      duration: "3.5 Ώρες",
      date: "15 Μαΐου",
      level: "Beginner",
      icon: BarChart3,
      color: "#00F0FF",
      featured: true,
      whatYouLearn: [
        t('academy.workshop.2.learn.1'),
        t('academy.workshop.2.learn.2'),
        t('academy.workshop.2.learn.3'),
        t('academy.workshop.2.learn.4')
      ]
    },
    {
      id: 3,
      category: "building",
      title: t('academy.workshop.3.title'),
      desc: t('academy.workshop.3.desc'),
      price: "180€",
      duration: "5 Ώρες",
      date: "20 Μαΐου",
      level: "Advanced",
      icon: Layers,
      color: "#FF007A",
      featured: true,
      whatYouLearn: [
        t('academy.workshop.3.learn.1'),
        t('academy.workshop.3.learn.2'),
        t('academy.workshop.3.learn.3'),
        t('academy.workshop.3.learn.4')
      ]
    },
    {
      id: 4,
      category: "ai",
      title: t('academy.workshop.4.title'),
      desc: t('academy.workshop.4.desc'),
      price: "110€",
      duration: "3 Ώρες",
      date: "25 Μαΐου",
      level: "Intermediate",
      icon: Terminal,
      color: "#D0FF00",
      whatYouLearn: [
        t('academy.workshop.4.learn.1'),
        t('academy.workshop.4.learn.2'),
        t('academy.workshop.4.learn.3'),
        t('academy.workshop.4.learn.4')
      ]
    },
    {
      id: 5,
      category: "marketing",
      title: t('academy.workshop.5.title'),
      desc: t('academy.workshop.5.desc'),
      price: "130€",
      duration: "4 Ώρες",
      date: "28 Μαΐου",
      level: "Advanced",
      icon: Search,
      color: "#00F0FF",
      whatYouLearn: [
        t('academy.workshop.5.learn.1'),
        t('academy.workshop.5.learn.2'),
        t('academy.workshop.5.learn.3'),
        t('academy.workshop.5.learn.4')
      ]
    },
    {
      id: 6,
      category: "building",
      title: t('academy.workshop.6.title'),
      desc: t('academy.workshop.6.desc'),
      price: "190€",
      duration: "6 Ώρες",
      date: "31 Μαΐου",
      level: "Advanced",
      icon: Layout,
      color: "#FF007A",
      whatYouLearn: [
        t('academy.workshop.6.learn.1'),
        t('academy.workshop.6.learn.2'),
        t('academy.workshop.6.learn.3'),
        t('academy.workshop.6.learn.4')
      ]
    },
    {
      id: 7,
      category: "marketing",
      title: t('academy.workshop.7.title'),
      desc: t('academy.workshop.7.desc'),
      price: "90€",
      duration: "3 Ώρες",
      date: "2 Ιουνίου",
      level: "Beginner",
      icon: Share2,
      color: "#00F0FF",
      whatYouLearn: [
        t('academy.workshop.7.learn.1'),
        t('academy.workshop.7.learn.2'),
        t('academy.workshop.7.learn.3'),
        t('academy.workshop.7.learn.4')
      ]
    },
    {
      id: 8,
      category: "ai",
      title: t('academy.workshop.8.title'),
      desc: t('academy.workshop.8.desc'),
      price: "140€",
      duration: "4 Ώρες",
      date: "5 Ιουνίου",
      level: "Intermediate",
      icon: Mail,
      color: "#D0FF00",
      whatYouLearn: [
        t('academy.workshop.8.learn.1'),
        t('academy.workshop.8.learn.2'),
        t('academy.workshop.8.learn.3'),
        t('academy.workshop.8.learn.4')
      ]
    },
    {
      id: 9,
      category: "marketing",
      title: t('academy.workshop.9.title'),
      desc: t('academy.workshop.9.desc'),
      price: "95€",
      duration: "2.5 Ώρες",
      date: "8 Ιουνίου",
      level: "Beginner",
      icon: MapPin,
      color: "#00F0FF",
      whatYouLearn: [
        t('academy.workshop.9.learn.1'),
        t('academy.workshop.9.learn.2'),
        t('academy.workshop.9.learn.3'),
        t('academy.workshop.9.learn.4')
      ]
    },
    {
      id: 10,
      category: "marketing",
      title: t('academy.workshop.10.title'),
      desc: t('academy.workshop.10.desc'),
      price: "160€",
      duration: "3 Ώρες",
      date: "11 Ιουνίου",
      level: "Intermediate",
      icon: Instagram,
      color: "#00F0FF",
      whatYouLearn: [
        t('academy.workshop.10.learn.1'),
        t('academy.workshop.10.learn.2'),
        t('academy.workshop.10.learn.3'),
        t('academy.workshop.10.learn.4')
      ]
    },
    {
      id: 11,
      category: "marketing",
      title: t('academy.workshop.11.title'),
      desc: t('academy.workshop.11.desc'),
      price: "170€",
      duration: "5 Ώρες",
      date: "14 Ιουνίου",
      level: "Intermediate",
      icon: UserCheck,
      color: "#00F0FF",
      whatYouLearn: [
        t('academy.workshop.11.learn.1'),
        t('academy.workshop.11.learn.2'),
        t('academy.workshop.11.learn.3'),
        t('academy.workshop.11.learn.4')
      ]
    },
    {
      id: 12,
      category: "ai",
      title: t('academy.workshop.12.title'),
      desc: t('academy.workshop.12.desc'),
      price: "130€",
      duration: "4 Ώρες",
      date: "17 Ιουνίου",
      level: "Intermediate",
      icon: Sparkles,
      color: "#D0FF00",
      whatYouLearn: [
        t('academy.workshop.12.learn.1'),
        t('academy.workshop.12.learn.2'),
        t('academy.workshop.12.learn.3'),
        t('academy.workshop.12.learn.4')
      ]
    },
    {
      id: 13,
      category: "marketing",
      title: t('academy.workshop.13.title'),
      desc: t('academy.workshop.13.desc'),
      price: "100€",
      duration: "3 Ώρες",
      date: "20 Ιουνίου",
      level: "Beginner",
      icon: BarChart3,
      color: "#00F0FF",
      whatYouLearn: [
        t('academy.workshop.13.learn.1'),
        t('academy.workshop.13.learn.2'),
        t('academy.workshop.13.learn.3'),
        t('academy.workshop.13.learn.4')
      ]
    },
    {
      id: 14,
      category: "building",
      title: t('academy.workshop.14.title'),
      desc: t('academy.workshop.14.desc'),
      price: "110€",
      duration: "3 Ώρες",
      date: "23 Ιουνίου",
      level: "Intermediate",
      icon: Settings,
      color: "#FF007A",
      whatYouLearn: [
        t('academy.workshop.14.learn.1'),
        t('academy.workshop.14.learn.2'),
        t('academy.workshop.14.learn.3'),
        t('academy.workshop.14.learn.4')
      ]
    },
    {
      id: 15,
      category: "marketing",
      title: t('academy.workshop.15.title'),
      desc: t('academy.workshop.15.desc'),
      price: "150€",
      duration: "4 Ώρες",
      date: "26 Ιουνίου",
      level: "Advanced",
      icon: Rocket,
      color: "#00F0FF",
      whatYouLearn: [
        t('academy.workshop.15.learn.1'),
        t('academy.workshop.15.learn.2'),
        t('academy.workshop.15.learn.3'),
        t('academy.workshop.15.learn.4')
      ]
    },
    {
      id: 16,
      category: "ai",
      title: t('academy.workshop.16.title'),
      desc: t('academy.workshop.16.desc'),
      price: "200€",
      duration: "6 Ώρες",
      date: "29 Ιουνίου",
      level: "Advanced",
      icon: Cpu,
      color: "#D0FF00",
      whatYouLearn: [
        t('academy.workshop.16.learn.1'),
        t('academy.workshop.16.learn.2'),
        t('academy.workshop.16.learn.3'),
        t('academy.workshop.16.learn.4')
      ]
    }
  ];

  const filteredWorkshops = workshops.filter(workshop => {
    const matchesCategory = activeCategory === "all" || workshop.category === activeCategory;
    const matchesSearch = workshop.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         workshop.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredWorkshops = workshops.filter(w => w.featured);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const handleBooking = (workshop: any) => {
    setSelectedWorkshop(workshop);
    setFormData(prev => ({ ...prev, workshop: workshop.title }));
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-primary selection:text-black font-sans" ref={containerRef}>
      <LabBackground />

      {/* ── HERO SECTION ── */}
      <section className="relative min-h-[90vh] flex flex-col justify-center pt-20 overflow-hidden">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 mb-12 backdrop-blur-sm"
            >
              <Sparkles size={14} className="text-primary animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary italic">
                {t('academy.hero.badge')}
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-display text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.85] mb-12 uppercase italic"
            >
              {t('academy.hero.title1')} <br />
              <span className="text-primary">{t('academy.hero.title2')}</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-white/40 text-lg md:text-2xl lg:text-3xl max-w-3xl mx-auto font-medium italic leading-relaxed mb-16"
            >
              {t('academy.hero.subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Magnetic>
                <Button 
                  size="xl" 
                  className="rounded-full px-12 h-20 text-lg font-black uppercase tracking-widest italic bg-primary text-black hover:bg-white transition-all shadow-glow"
                  onClick={() => {
                    const el = document.getElementById('workshops-grid');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {t('academy.hero.cta')} <ChevronDown size={20} className="ml-3 animate-bounce" />
                </Button>
              </Magnetic>
            </motion.div>
          </div>
        </motion.div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none opacity-50" />
        <div className="absolute bottom-0 right-0 translate-x-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none opacity-30" />
      </section>

      {/* ── MANIFESTO SECTION ── */}
      <section className="py-32 md:py-56 border-t border-white/5 relative overflow-hidden bg-white/[0.01]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-32 items-center">
            <motion.div {...fadeInUp} className="space-y-12">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary italic block">
                {t('academy.manifesto.label')}
              </span>
              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none uppercase italic">
                {t('academy.manifesto.title1')} <br />
                <span className="text-white/20">{t('academy.manifesto.title2')}</span>
              </h2>
              <div className="space-y-8 text-white/50 text-lg md:text-xl font-medium leading-relaxed italic max-w-xl">
                <p>{t('academy.manifesto.p1')}</p>
                <p className="text-white/80">{t('academy.manifesto.p2')}</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 gap-6">
              {[
                { 
                  label: t('academy.pillars.1.label'), 
                  title: t('academy.pillars.1.title'), 
                  learn: t('academy.pillars.1.learn'), 
                  achieve: t('academy.pillars.1.achieve'), 
                  desc: t('academy.pillars.1.desc'), 
                  icon: Target 
                },
                { 
                  label: t('academy.pillars.2.label'), 
                  title: t('academy.pillars.2.title'), 
                  learn: t('academy.pillars.2.learn'), 
                  achieve: t('academy.pillars.2.achieve'), 
                  desc: t('academy.pillars.2.desc'), 
                  icon: Rocket 
                },
                { 
                  label: t('academy.pillars.3.label'), 
                  title: t('academy.pillars.3.title'), 
                  learn: t('academy.pillars.3.learn'), 
                  achieve: t('academy.pillars.3.achieve'), 
                  desc: t('academy.pillars.3.desc'), 
                  icon: Zap 
                },
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                  className="glass-card p-10 rounded-[2.5rem] border border-white/5 group hover:border-primary/30 transition-all duration-700"
                >
                  <div className="flex items-start gap-8">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors duration-500">
                      <item.icon size={28} className="text-primary" />
                    </div>
                    <div className="space-y-4">
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/60 italic">{item.label}</span>
                      <h3 className="text-2xl font-bold uppercase italic tracking-tight">{item.title}</h3>
                      <p className="text-white/40 text-sm italic leading-relaxed">{item.desc}</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/5 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                        <div className="space-y-1">
                          <span className="text-[8px] font-black uppercase text-primary tracking-widest italic">Learn</span>
                          <p className="text-[10px] font-medium text-white/60">{item.learn}</p>
                        </div>
                        <div className="space-y-1">
                          <span className="text-[8px] font-black uppercase text-primary tracking-widest italic">Achieve</span>
                          <p className="text-[10px] font-medium text-white/60">{item.achieve}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WORKSHOPS FILTER & GRID ── */}
      <section id="workshops-grid" className="py-32 md:py-48 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          
          {/* Header & Filter */}
          <div className="max-w-4xl mx-auto text-center mb-24 md:mb-32">
            <motion.h2 {...fadeInUp} className="font-display text-4xl md:text-6xl lg:text-7xl font-bold uppercase italic tracking-tighter mb-12">
              Available <span className="text-primary">Workshops.</span>
            </motion.h2>

            <motion.div {...fadeInUp} className="flex flex-col md:flex-row items-center justify-center gap-8">
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-3 bg-white/5 p-2 rounded-full border border-white/10 backdrop-blur-xl">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest italic transition-all duration-500 ${
                      activeCategory === cat.id ? "bg-primary text-black shadow-glow" : "text-white/40 hover:text-white"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative group w-full md:w-auto">
                <Search size={16} className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary transition-colors" />
                <input 
                  type="text" 
                  placeholder={language === 'gr' ? "Αναζήτηση..." : "Search workshops..."}
                  className="w-full md:w-80 h-14 bg-white/5 border border-white/10 rounded-full pl-14 pr-8 text-sm italic focus:outline-none focus:border-primary/50 transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </motion.div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 max-w-8xl mx-auto">
            <AnimatePresence mode="popLayout">
              {filteredWorkshops.map((workshop, idx) => (
                <motion.div
                  key={workshop.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  className="glass-card rounded-[2.5rem] border border-white/5 hover:border-primary/30 transition-all duration-700 group flex flex-col h-full relative overflow-hidden"
                >
                  {/* Card Content */}
                  <div className="p-8 md:p-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-500 relative">
                        <workshop.icon size={24} className="text-primary" />
                        <div className="absolute inset-0 bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className="text-[10px] font-black uppercase text-white/20 italic tracking-widest">{workshop.date}</span>
                        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[8px] font-black uppercase tracking-widest text-primary/60">{workshop.level}</span>
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold uppercase italic tracking-tight mb-4 group-hover:text-primary transition-colors leading-tight">
                        {workshop.title}
                      </h3>
                      <p className="text-white/40 text-sm font-medium italic leading-relaxed mb-8 line-clamp-3">
                        {workshop.desc}
                      </p>

                      <div className="space-y-4 mb-8">
                        <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-white/20">
                          <Clock size={12} className="text-primary/40" />
                          <span>{workshop.duration}</span>
                        </div>
                        <ul className="space-y-2">
                          {workshop.whatYouLearn.map((point: string, i: number) => (
                            <li key={i} className="flex items-center gap-3 text-[10px] font-medium text-white/50 italic">
                              <div className="w-1 h-1 rounded-full bg-primary/30" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-8 border-t border-white/5 flex items-center justify-between mt-auto">
                      <div className="flex flex-col">
                        <span className="text-[8px] font-black uppercase text-white/20 tracking-widest mb-1 italic">Investment</span>
                        <span className="text-2xl font-display font-bold text-white">{workshop.price}</span>
                      </div>
                      <button 
                        onClick={() => handleBooking(workshop)}
                        className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all duration-500"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredWorkshops.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-32 text-center"
            >
              <p className="text-white/20 text-xl italic uppercase tracking-widest">No workshops found matching your search.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* ── NEWSLETTER SECTION ── */}

      {/* ── BOOKING MODAL ── */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-xl glass-card rounded-[3rem] border border-white/10 p-10 md:p-14 overflow-hidden"
            >
              {/* Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[80px] -translate-y-1/2 translate-x-1/2 rounded-full" />
              
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-8 right-8 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/20 hover:text-white hover:bg-white/10 transition-all"
              >
                <X size={20} />
              </button>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-8">
                  <BadgeCheck size={12} className="text-primary" />
                  <span className="text-[8px] font-black uppercase tracking-widest text-primary italic">Workshop Reservation</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold uppercase italic tracking-tighter mb-4 leading-tight">
                  Join the <span className="text-primary">{selectedWorkshop?.title}</span>
                </h3>
                <p className="text-white/40 text-sm italic mb-12">Συμπληρώστε τα στοιχεία σας για να δεσμεύσετε τη θέση σας. Θα επικοινωνήσουμε μαζί σας άμεσα για την επιβεβαίωση και τις λεπτομέρειες.</p>

                <form className="space-y-6" onSubmit={(e) => {
                  e.preventDefault();
                  // Simulate booking success
                  toast.success("H κράτησή σας καταχωρήθηκε! Θα λάβετε σύντομα email επιβεβαίωσης.");
                  setIsModalOpen(false);
                }}>
                  <div className="space-y-2">
                    <label className="text-[9px] font-black uppercase tracking-widest text-primary/60 ml-4 italic">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Your name"
                      className="w-full h-16 bg-white/5 border border-white/10 rounded-full px-8 text-sm italic focus:outline-none focus:border-primary/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-black uppercase tracking-widest text-primary/60 ml-4 italic">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="your@email.com"
                      className="w-full h-16 bg-white/5 border border-white/10 rounded-full px-8 text-sm italic focus:outline-none focus:border-primary/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-black uppercase tracking-widest text-primary/60 ml-4 italic">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="+30 690 000 0000"
                      className="w-full h-16 bg-white/5 border border-white/10 rounded-full px-8 text-sm italic focus:outline-none focus:border-primary/50 transition-all"
                    />
                  </div>

                  <Button size="xl" className="w-full rounded-full h-20 bg-primary text-black font-black uppercase tracking-widest italic text-sm mt-8 shadow-glow hover:bg-white transition-all">
                    Confirm Registration <ArrowRight size={18} className="ml-3" />
                  </Button>
                </form>

                <div className="mt-8 flex items-center justify-center gap-8">
                  <div className="flex items-center gap-2 opacity-30">
                    <Lock size={12} />
                    <span className="text-[8px] font-black uppercase tracking-widest">Secure Node</span>
                  </div>
                  <div className="flex items-center gap-2 opacity-30">
                    <ExternalLink size={12} />
                    <span className="text-[8px] font-black uppercase tracking-widest">Instant Auth</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <footer className="py-20 border-t border-white/5 text-center relative z-10">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 italic">
          © {new Date().getFullYear()} Hustle Labs Academy. Built for the builders.
        </p>
      </footer>
    </div>
  );
};

export default Academy;
