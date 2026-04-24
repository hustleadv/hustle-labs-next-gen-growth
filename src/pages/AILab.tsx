import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowRight, Bot, Zap, Workflow, Search, 
  Settings, CheckCircle2, Play, GraduationCap, Users,
  Brain, Terminal, Cpu, Sparkles, BarChart3, MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import LabBackground from "@/components/LabBackground";
import FAQAccordion from "@/components/FAQAccordion";
import SectionHeading from "@/components/SectionHeading";
import sigma22 from "@/assets/sigma22.jpg";

const AILab = () => {
  useEffect(() => {
    // SEO: Page Title
    document.title = "AI Agency & Ξ‘Ο…Ο„ΞΏΞΌΞ±Ο„ΞΉΟƒΞΌΞΏΞ―: ΞΟΞ®Ο„Ξ·, ΞΟ…ΞΊΞ»Ξ¬Ξ΄ΞµΟ‚, ΞΞ·ΟƒΞΉΞ¬ | Hustle Labs";
    
    // SEO: Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', "Hustle Labs: Ξ¤ΞΏ ΞΊΞΏΟΟ…Ο†Ξ±Ξ―ΞΏ AI Agency Ξ³ΞΉΞ± ΞΎΞµΞ½ΞΏΞ΄ΞΏΟ‡ΞµΞ―Ξ±, Ο„ΞΏΟ…ΟΞΉΟƒΞΌΟ & ΞµΟ€ΞΉΟ‡ΞµΞΉΟΞ®ΟƒΞµΞΉΟ‚ ΟƒΞµ ΞΟΞ®Ο„Ξ·, ΞΟ…ΞΊΞ»Ξ¬Ξ΄ΞµΟ‚ & Ξ•Ξ»Ξ»Ξ·Ξ½ΞΉΞΊΞ¬ ΞΞ·ΟƒΞΉΞ¬. AI Ξ‘Ο…Ο„ΞΏΞΌΞ±Ο„ΞΉΟƒΞΌΞΏΞ―, Agents & Custom AI Ξ»ΟΟƒΞµΞΉΟ‚.");

    // SEO: Structured Data (JSON-LD)
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Hustle Labs AI & Automations",
      "description": "ΞΞΏΟΟ…Ο†Ξ±Ξ―ΞµΟ‚ Ξ»ΟΟƒΞµΞΉΟ‚ Ξ¤ΞµΟ‡Ξ½Ξ·Ο„Ξ®Ο‚ ΞΞΏΞ·ΞΌΞΏΟƒΟΞ½Ξ·Ο‚ ΞΊΞ±ΞΉ Ξ±Ο…Ο„ΞΏΞΌΞ±Ο„ΞΉΟƒΞΌΟΞ½ ΟƒΟ„Ξ·Ξ½ ΞΟΞ®Ο„Ξ·.",
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "ΞΟΞ®Ο„Ξ·" },
        { "@type": "AdministrativeArea", "name": "ΞΟ…ΞΊΞ»Ξ¬Ξ΄ΞµΟ‚" },
        { "@type": "AdministrativeArea", "name": "Ξ”Ο‰Ξ΄ΞµΞΊΞ¬Ξ½Ξ·ΟƒΞ±" },
        { "@type": "AdministrativeArea", "name": "Ξ™ΟΞ½ΞΉΞ± ΞΞ·ΟƒΞΉΞ¬" },
        { "@type": "City", "name": "ΞΟΞΊΞΏΞ½ΞΏΟ‚" },
        { "@type": "City", "name": "Ξ£Ξ±Ξ½Ο„ΞΏΟΞ―Ξ½Ξ·" },
        { "@type": "City", "name": "Ξ΅ΟΞ΄ΞΏΟ‚" },
        { "@type": "City", "name": "Ξ§Ξ±Ξ½ΞΉΞ¬" },
        { "@type": "City", "name": "Ξ—ΟΞ¬ΞΊΞ»ΞµΞΉΞΏ" }
      ],
      "provider": {
        "@type": "LocalBusiness",
        "name": "Hustle Labs",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Ξ§Ξ±Ξ½ΞΉΞ¬",
          "addressRegion": "ΞΟΞ®Ο„Ξ·"
        }
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

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

  const services = [
    {
      title: "Autonomous Agents",
      desc: "AI Ο€ΞΏΟ… ΞµΞΊΟ„ΞµΞ»ΞµΞ― tasks Ο‡Ο‰ΟΞ―Ο‚ ΟƒΟ…Ξ½ΞµΟ‡Ξ® Ο€Ξ±ΟΞ­ΞΌΞ²Ξ±ΟƒΞ·. Ξ‘Ο€Ο Ξ΄ΞΉΞ±Ο‡ΞµΞ―ΟΞΉΟƒΞ· leads ΞΌΞ­Ο‡ΟΞΉ Ξ±Ο…Ο„ΟΞΌΞ±Ο„Ξ· ΞµΞΎΟ…Ο€Ξ·ΟΞ­Ο„Ξ·ΟƒΞ·.",
      icon: Bot
    },
    {
      title: "Workflow Automation",
      desc: "Ξ‘Ο…Ο„ΞΏΞΌΞ±Ο„ΞΏΟ€ΞΏΞΉΞ·ΞΌΞ­Ξ½ΞµΟ‚ Ξ΄ΞΉΞ±Ξ΄ΞΉΞΊΞ±ΟƒΞ―ΞµΟ‚ Ξ³ΞΉΞ± ΞΊΞ±ΞΈΞ·ΞΌΞµΟΞΉΞ½Ξ­Ο‚ ΞµΟΞ³Ξ±ΟƒΞ―ΞµΟ‚ Ο€ΞΏΟ… 'Ο„ΟΟΞ½Ξµ' Ο„ΞΏΞ½ Ο‡ΟΟΞ½ΞΏ Ο„Ξ·Ο‚ ΞΏΞΌΞ¬Ξ΄Ξ±Ο‚ ΟƒΞ±Ο‚.",
      icon: Workflow
    },
    {
      title: "AI Sales & Marketing Systems",
      desc: "Ξ£Ο…ΟƒΟ„Ξ®ΞΌΞ±Ο„Ξ± Ο€ΞΏΟ… Ξ΄Ξ·ΞΌΞΉΞΏΟ…ΟΞ³ΞΏΟΞ½, Ξ±Ξ½Ξ±Ξ»ΟΞΏΟ…Ξ½ ΞΊΞ±ΞΉ Ξ²ΞµΞ»Ο„ΞΉΟƒΟ„ΞΏΟ€ΞΏΞΉΞΏΟΞ½ ΞΊΞ±ΞΌΟ€Ξ¬Ξ½ΞΉΞµΟ‚ ΞΌΞµ Ξ²Ξ¬ΟƒΞ· Ο€ΟΞ±Ξ³ΞΌΞ±Ο„ΞΉΞΊΞ¬ Ξ΄ΞµΞ΄ΞΏΞΌΞ­Ξ½Ξ±.",
      icon: BarChart3
    },
    {
      title: "Custom AI Solutions",
      desc: "Ξ›ΟΟƒΞµΞΉΟ‚ Ο€ΟΞΏΟƒΞ±ΟΞΌΞΏΟƒΞΌΞ­Ξ½ΞµΟ‚ Ξ±ΞΊΟΞΉΞ²ΟΟ‚ Ο€Ξ¬Ξ½Ο‰ ΟƒΟ„ΞΉΟ‚ Ξ±Ξ½Ξ¬Ξ³ΞΊΞµΟ‚ ΞΊΞ±ΞΉ Ο„ΞΏ tech stack Ο„Ξ·Ο‚ ΞµΟ€ΞΉΟ‡ΞµΞ―ΟΞ·ΟƒΞ®Ο‚ ΟƒΞ±Ο‚.",
      icon: Settings
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-primary selection:text-black overflow-x-hidden">
      
      {/* β”€β”€ SECTION 1: HERO (Mirroring Index.tsx) β”€β”€ */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <LabBackground />
        
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(208,255,0,0.03),transparent_70%)] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <div className="max-w-6xl mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 mb-8 md:mb-12"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/80 italic">AI IMPLEMENTATION PARTNER . AGENTIC SYSTEMS</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight leading-[0.9] mb-8 md:mb-12 uppercase italic"
            >
              AI Ο€ΞΏΟ… Ξ΄ΞΏΟ…Ξ»ΞµΟΞµΞΉ Ξ³ΞΉΞ± ΟƒΞ­Ξ½Ξ±. <br />
              <span className="text-primary tracking-normal">ΞΟ‡ΞΉ Ο„ΞΏ Ξ±Ξ½Ο„Ξ―ΟƒΟ„ΟΞΏΟ†ΞΏ.</span>
            </motion.h1>

            <div className="space-y-8 md:space-y-12 mb-12 md:mb-16">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as any }}
                className="text-lg md:text-2xl font-medium text-white/80 leading-relaxed max-w-3xl mx-auto"
              >
                Ξ£Ο‡ΞµΞ΄ΞΉΞ¬Ξ¶ΞΏΟ…ΞΌΞµ ΞΊΞ±ΞΉ Ο…Ξ»ΞΏΟ€ΞΏΞΉΞΏΟΞΌΞµ AI systems Ο€ΞΏΟ… Ξ±Ο†Ξ±ΞΉΟΞΏΟΞ½ manual Ξ΄ΞΏΟ…Ξ»ΞµΞΉΞ¬, Ξ±Ο…Ο„ΞΏΞΌΞ±Ο„ΞΏΟ€ΞΏΞΉΞΏΟΞ½ Ξ΄ΞΉΞ±Ξ΄ΞΉΞΊΞ±ΟƒΞ―ΞµΟ‚ ΞΊΞ±ΞΉ Ξ²ΞΏΞ·ΞΈΞΏΟΞ½ Ο„ΞΉΟ‚ ΞµΟ€ΞΉΟ‡ΞµΞΉΟΞ®ΟƒΞµΞΉΟ‚ Ξ½Ξ± ΞΊΞ»ΞΉΞΌΞ±ΞΊΟΟƒΞΏΟ…Ξ½.
              </motion.p>
              
              <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ duration: 1, delay: 0.3 }}
                 className="flex flex-wrap justify-center gap-x-6 md:gap-x-8 gap-y-2 text-primary font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-xs md:text-sm lg:text-base italic"
              >
                <span>Less work.</span>
                <span>More output.</span>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as any }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button size="xl" className="w-full sm:w-auto rounded-full px-8 md:px-12 h-16 md:h-20 text-lg md:text-xl font-black group bg-primary text-black hover:bg-white transition-all border-none italic shadow-glow" asChild>
                <Link to="/contact">
                  Build your AI system
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="w-full sm:w-auto rounded-full px-8 md:px-12 h-16 md:h-20 text-lg md:text-xl font-black border-white/10 hover:bg-white hover:text-black transition-all italic" asChild>
                <Link to="/book-call">Book a call</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* β”€β”€ SECTION 2: PROBLEM (Mirroring Index.tsx Intro Style) β”€β”€ */}
      <section className="py-32 md:py-48 relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div initial={fadeInUp.initial} whileInView={fadeInUp.whileInView} viewport={fadeInUp.viewport} transition={fadeInUp.transition} className="max-w-5xl mx-auto text-center">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-8 md:mb-12 block italic">The Hustle AI Audit</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1] mb-12 md:mb-16 uppercase italic px-2">
              Ξ¤ΞΏ Ο€ΟΟΞ²Ξ»Ξ·ΞΌΞ± Ξ΄ΞµΞ½ ΞµΞ―Ξ½Ξ±ΞΉ Ο„ΞΏ AI. <br className="md:hidden" />
              <span className="text-white/40">Ξ•Ξ―Ξ½Ξ±ΞΉ ΟΟ„ΞΉ Ξ΄ΞµΞ½ Ο„ΞΏ Ο‡ΟΞ·ΟƒΞΉΞΌΞΏΟ€ΞΏΞΉΞµΞ―Ο‚ ΟƒΟ‰ΟƒΟ„Ξ¬.</span>
            </h2>
            <div className="space-y-8 md:space-y-12 max-w-3xl mx-auto px-4">
              <p className="text-xl md:text-2xl lg:text-3xl font-medium text-white/80 leading-relaxed italic max-w-4xl mx-auto px-4">
                ΞΞΉ Ο€ΞµΟΞΉΟƒΟƒΟΟ„ΞµΟΞµΟ‚ ΞµΟ€ΞΉΟ‡ΞµΞΉΟΞ®ΟƒΞµΞΉΟ‚ Ξ΄ΞΏΞΊΞΉΞΌΞ¬Ξ¶ΞΏΟ…Ξ½ AI ΞµΟΞ³Ξ±Ξ»ΞµΞ―Ξ± Ο‡Ο‰ΟΞ―Ο‚ ΟƒΟ„ΟΞ±Ο„Ξ·Ξ³ΞΉΞΊΞ®. Ξ¤ΞΏ Ξ±Ο€ΞΏΟ„Ξ­Ξ»ΞµΟƒΞΌΞ±; Ξ§Ξ¬ΟƒΞΉΞΌΞΏ Ο‡ΟΟΞ½ΞΏΟ…, ΞΊΞ±ΞΌΞ―Ξ± Ξ±Ο…Ο„ΞΏΞΌΞ±Ο„ΞΏΟ€ΞΏΞ―Ξ·ΟƒΞ·.
              </p>
              <p className="text-primary font-black uppercase tracking-[0.4em] text-lg md:text-2xl italic animate-float">We fix that.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* β”€β”€ SECTION 3: WHAT WE BUILD (Dark Cards Grid like Index.tsx Protocol) β”€β”€ */}
      <section className="py-32 md:py-48 relative border-t border-white/5 bg-[#080808]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={fadeInUp.initial} whileInView={fadeInUp.whileInView} viewport={fadeInUp.viewport} transition={fadeInUp.transition} className="text-center mb-24 md:mb-40 max-w-5xl mx-auto">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-8 md:mb-12 block italic">AI CAPABILITIES</span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight italic uppercase leading-[0.9]">
              Ξ¤ΞΉ Ο‡Ο„Ξ―Ξ¶ΞΏΟ…ΞΌΞµ <br />
              <span className="text-white/20 text-3xl md:text-4xl lg:text-5xl">ΞΌΞµ Ο„ΞµΟ‡Ξ½Ξ·Ο„Ξ® Ξ½ΞΏΞ·ΞΌΞΏΟƒΟΞ½Ξ·.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12 max-w-7xl mx-auto px-4">
            {services.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="p-8 md:p-12 lg:p-8 xl:p-12 rounded-[2.5rem] md:rounded-[3.5rem] glass-card text-center group relative overflow-hidden"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-10 md:h-12 bg-gradient-to-b from-primary/40 to-transparent group-hover:h-20 md:group-hover:h-24 transition-all duration-1000" />
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-[1.5rem] md:rounded-[2rem] bg-white/5 flex items-center justify-center text-white/10 mb-8 md:mb-10 mx-auto group-hover:bg-primary group-hover:text-black transition-all border border-white/10 group-hover:border-transparent group-hover:shadow-[0_0_30px_rgba(208,255,0,0.2)]">
                  <item.icon size={28} className="md:size-9" strokeWidth={1} />
                </div>
                <h3 className="font-display text-lg sm:text-xl xl:text-2xl font-extrabold uppercase italic mb-6 md:mb-8 tracking-tight leading-tight text-white">{item.title}</h3>
                <p className="text-xs md:text-sm text-white/70 font-medium leading-relaxed italic px-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* β”€β”€ SECTION 4: RESULTS (Filter Statement Style like Index.tsx Section 4) β”€β”€ */}
      <section className="py-32 md:py-48 relative border-t border-white/5 bg-[#050505]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16 md:mb-24">
            <motion.div initial={fadeInUp.initial} whileInView={fadeInUp.whileInView} viewport={fadeInUp.viewport} transition={fadeInUp.transition} className="max-w-4xl mx-auto lg:mx-0">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-8 block italic">Operational Freedom</span>
              <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[0.9] mb-12 italic uppercase text-left">
                Ξ¤ΞΉ Ξ±Ξ»Ξ»Ξ¬Ξ¶ΞµΞΉ ΟΟ„Ξ±Ξ½ <br />
                <span className="text-white/20 text-2xl md:text-3xl lg:text-4xl tracking-normal">Ξ΄ΞΏΟ…Ξ»ΞµΟΞµΞΉ ΟƒΟ‰ΟƒΟ„Ξ¬.</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12 md:mt-16">
                 {[
                  "Ξ¤Ξ­Ξ»ΞΏΟ‚ ΟƒΟ„ΞΉΟ‚ Ο‡ΞµΞΉΟΞΏΞΊΞ―Ξ½Ξ·Ο„ΞµΟ‚, ΞµΟ€Ξ±Ξ½Ξ±Ξ»Ξ±ΞΌΞ²Ξ±Ξ½ΟΞΌΞµΞ½ΞµΟ‚ ΞµΟΞ³Ξ±ΟƒΞ―ΞµΟ‚",
                  "ΞΞ±Ο„Ξ±ΞΊΟΟΟ…Ο†Ξ· Ξ±ΟΞΎΞ·ΟƒΞ· Ο„Ξ·Ο‚ Ο€Ξ±ΟΞ±Ξ³Ο‰Ξ³ΞΉΞΊΟΟ„Ξ·Ο„Ξ±Ο‚",
                  "Ξ’ΞµΞ»Ο„Ξ―Ο‰ΟƒΞ· Ξ±Ο€ΟΞ΄ΞΏΟƒΞ·Ο‚ ΟƒΟ„ΞΏ marketing",
                  "Ξ‘Ξ½Ξ¬Ο€Ο„Ο…ΞΎΞ· Ο‡Ο‰ΟΞ―Ο‚ Ο„Ξ·Ξ½ Ξ±Ξ½Ξ¬Ξ³ΞΊΞ· Ξ³ΞΉΞ± Ξ½Ξ­ΞµΟ‚ Ο€ΟΞΏΟƒΞ»Ξ®ΟΞµΞΉΟ‚"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 p-10 rounded-[2.5rem] glass-card group">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shrink-0">
                      <CheckCircle2 size={24} />
                    </div>
                    <span className="text-lg md:text-xl font-semibold text-white/70 group-hover:text-primary transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* β”€β”€ SECTION 5: PROCESS (Vertical Line Design like Index.tsx Process) β”€β”€ */}
      <section className="py-32 md:py-48 relative border-t border-white/5 bg-[#080808]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={fadeInUp.initial} whileInView={fadeInUp.whileInView} viewport={fadeInUp.viewport} transition={fadeInUp.transition} className="text-center mb-24 md:mb-40 max-w-5xl mx-auto">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-8 md:mb-12 block italic">The AI Implementation Protocol</span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight italic uppercase leading-[0.9]">Ξ ΟΟ‚ Ο„ΞΏ <br/> Ο…Ξ»ΞΏΟ€ΞΏΞΉΞΏΟΞΌΞµ.</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12 max-w-7xl mx-auto px-4 text-center">
            {[
              { icon: Search, title: "Analysis", num: "01", desc: "Ξ‘Ξ½Ξ±Ξ»ΟΞΏΟ…ΞΌΞµ Ο€ΟΟ‚ Ξ΄ΞΏΟ…Ξ»ΞµΟΞµΟ„Ξµ ΟƒΞ®ΞΌΞµΟΞ± ΞΊΞ±ΞΉ Ξ²ΟΞ―ΟƒΞΊΞΏΟ…ΞΌΞµ Ο„ΞΉΟ‚ Ξ΄ΞΉΞ±Ξ΄ΞΉΞΊΞ±ΟƒΞ―ΞµΟ‚ Ο€ΞΏΟ… ΟƒΞ±Ο‚ ΞΊΞΏΟƒΟ„Ξ―Ξ¶ΞΏΟ…Ξ½ Ο€ΞΏΞ»ΟΟ„ΞΉΞΌΞΏ Ο‡ΟΟΞ½ΞΏ." },
              { icon: Brain, title: "Strategy", num: "02", desc: "Ξ£Ο‡ΞµΞ΄ΞΉΞ¬Ξ¶ΞΏΟ…ΞΌΞµ Ο„ΞΏ ΞΉΞ΄Ξ±Ξ½ΞΉΞΊΟ AI ΟƒΟΟƒΟ„Ξ·ΞΌΞ±, ΞµΟ€ΞΉΞ»Ξ­Ξ³ΞΏΞ½Ο„Ξ±Ο‚ Ο„Ξ± ΞΊΞ±Ο„Ξ¬Ξ»Ξ»Ξ·Ξ»Ξ± ΞµΟΞ³Ξ±Ξ»ΞµΞ―Ξ± ΞΊΞ±ΞΉ Ο„Ξ· ΟƒΟ‰ΟƒΟ„Ξ® Ξ±ΟΟ‡ΞΉΟ„ΞµΞΊΟ„ΞΏΞ½ΞΉΞΊΞ®." },
              { icon: Terminal, title: "Build", num: "03", desc: "Ξ‘Ξ½Ξ±Ο€Ο„ΟΟƒΟƒΞΏΟ…ΞΌΞµ ΞΊΞ±ΞΉ Ξ΄ΞΏΞΊΞΉΞΌΞ¬Ξ¶ΞΏΟ…ΞΌΞµ Ο„ΞΏΟ…Ο‚ Ξ±Ο…Ο„ΞΏΞΌΞ±Ο„ΞΉΟƒΞΌΞΏΟΟ‚, ΟƒΟ…Ξ½Ξ΄Ξ­ΞΏΞ½Ο„Ξ±Ο‚ Ο„Ξ± ΟƒΟ…ΟƒΟ„Ξ®ΞΌΞ±Ο„Ξ¬ ΟƒΞ±Ο‚ ΞΌΞµ Ξ±Ο€ΟΞ»Ο…Ο„Ξ· Ξ±ΟƒΟ†Ξ¬Ξ»ΞµΞΉΞ±." },
              { icon: Zap, title: "Optimization", num: "04", desc: "Ξ¤ΞΏ ΟƒΟΟƒΟ„Ξ·ΞΌΞ± ΞΌΟ€Ξ±Ξ―Ξ½ΞµΞΉ ΟƒΞµ Ξ»ΞµΞΉΟ„ΞΏΟ…ΟΞ³Ξ―Ξ±. Ξ Ξ±ΟΞ±ΞΊΞΏΞ»ΞΏΟ…ΞΈΞΏΟΞΌΞµ Ο„Ξ± Ξ΄ΞµΞ΄ΞΏΞΌΞ­Ξ½Ξ± ΞΊΞ±ΞΉ Ο„ΞΏ Ξ²ΞµΞ»Ο„ΞΉΟΞ½ΞΏΟ…ΞΌΞµ ΟƒΟ…Ξ½ΞµΟ‡ΟΟ‚." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="relative flex flex-col items-center group px-4"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-10 md:h-12 bg-gradient-to-b from-primary/40 to-transparent group-hover:h-20 transition-all duration-1000" />
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-[1.5rem] bg-white/5 flex items-center justify-center text-white/10 mb-8 md:mb-12 mx-auto group-hover:bg-primary group-hover:text-black transition-all border border-white/10 group-hover:border-transparent group-hover:shadow-[0_0_30px_rgba(208,255,0,0.2)] relative">
                  <step.icon size={28} className="md:size-9" strokeWidth={1} />
                  <span className="absolute -top-3 -right-3 text-[8px] font-black text-primary uppercase tracking-widest">{step.num}</span>
                </div>
                <h3 className="font-display text-xl md:text-2xl font-extrabold uppercase italic mb-4 tracking-tight">{step.title}</h3>
                <p className="text-sm md:text-base text-white/50 leading-relaxed max-w-xs">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* β”€β”€ SECTION 6: CASE STUDY (Mirroring Index.tsx Project Card style) β”€β”€ */}
      <section className="py-32 md:py-48 relative border-t border-white/5 bg-[#050505]">
        <div className="container mx-auto px-4 lg:px-8">
           <div className="max-w-6xl mx-auto">
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-8 block italic text-center">Featured Intelligence</span>
             <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight italic uppercase leading-[0.9] text-center mb-16 md:mb-24">Real <br /> <span className="text-white/20">Results.</span></h2>
             
             <motion.div initial={fadeInUp.initial} whileInView={fadeInUp.whileInView} viewport={fadeInUp.viewport} transition={fadeInUp.transition}>
                <Link to="/portfolio/sigmalabs-ai" className="group cursor-pointer block">
                  <div className="relative aspect-[16/8] overflow-hidden rounded-[2.5rem] md:rounded-[4rem] border border-white/5 mb-8 md:mb-10 group-hover:border-primary/30 transition-all duration-1000 shadow-2xl">
                    <img src={sigma22} alt="Sigmalabs AI" className="w-full h-full object-cover object-top opacity-100 group-hover:scale-105 transition-all duration-2000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
                    <div className="absolute top-6 left-6 md:top-10 md:left-10">
                      <span className="px-5 py-2 md:px-8 md:py-2.5 rounded-full bg-primary text-black text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] italic shadow-glow-strong animate-float">Hustle AI Built</span>
                    </div>
                  </div>
                  <div className="px-4 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                    <div>
                      <h3 className="font-display text-2xl md:text-4xl font-extrabold text-white italic uppercase mb-2 md:mb-3 tracking-tight leading-none">Sigmalabs AI</h3>
                      <p className="text-primary text-[10px] font-black uppercase tracking-[0.4em] italic">The first Vibe Commerce tool. Efficiency Overload.</p>
                    </div>
                    <div className="flex gap-8 border-l border-white/10 pl-8">
                      <div>
                        <p className="text-2xl font-black text-white">+120%</p>
                        <p className="text-[8px] font-black text-white/30 uppercase tracking-widest italic">efficiency</p>
                      </div>
                      <div>
                        <p className="text-2xl font-black text-white">-60%</p>
                        <p className="text-[8px] font-black text-white/30 uppercase tracking-widest italic">manual work</p>
                      </div>
                    </div>
                  </div>
                </Link>
             </motion.div>
           </div>
        </div>
      </section>

      {/* β”€β”€ SECTION: AI & LOCAL INNOVATION β”€β”€ */}
      <section className="py-32 md:py-48 relative border-t border-white/5 bg-[#0a0a0b]">
        <div className="container mx-auto px-4 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div {...fadeInUp}>
                 <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/60 mb-8 block font-mono">Innovation Β· Chania Hub</span>
                 <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-10 leading-tight italic uppercase">
                    Ξ¤ΞΏ ΞΞ­Ξ»Ξ»ΞΏΞ½ Ο„Ξ·Ο‚ ΞΟΞ®Ο„Ξ·Ο‚ <br /> ΞµΞ―Ξ½Ξ±ΞΉ <span className="text-primary italic animate-pulse">Intelligent.</span>
                 </h2>
                 <p className="text-lg text-white/40 leading-relaxed max-w-xl italic mb-8">
                    ΞΞµ ΞΊΞ­Ξ½Ο„ΟΞΏ Ο„ΞΏ AI Lab ΞΌΞ±Ο‚ ΟƒΟ„Ξ± Ξ§Ξ±Ξ½ΞΉΞ¬, Ξ±Ξ½Ξ±Ο€Ο„ΟΟƒΟƒΞΏΟ…ΞΌΞµ Ξ»ΟΟƒΞµΞΉΟ‚ Ξ³ΞΉΞ± hospitality brands, ΞΎΞµΞ½ΞΏΞ΄ΞΏΟ‡ΞµΞ―Ξ± ΞΊΞ±ΞΉ premium ΞµΟ€ΞΉΟ‡ΞµΞΉΟΞ®ΟƒΞµΞΉΟ‚ ΟƒΞµ ΞΟΞ®Ο„Ξ·, ΞΟ…ΞΊΞ»Ξ¬Ξ΄ΞµΟ‚ ΞΊΞ±ΞΉ ΟΞ»Ξ± Ο„Ξ± ΞµΞ»Ξ»Ξ·Ξ½ΞΉΞΊΞ¬ Ξ½Ξ·ΟƒΞΉΞ¬. ΞΞµΟ„Ξ±Ο„ΟΞ­Ο€ΞΏΟ…ΞΌΞµ Ο„ΞΏ AI ΟƒΟ„ΞΏ ΞΉΟƒΟ‡Ο…ΟΟΟ„ΞµΟΞΏ ΞµΟΞ³Ξ±Ξ»ΞµΞ―ΞΏ ΞΊΞµΟΞ΄ΞΏΟ†ΞΏΟΞ―Ξ±Ο‚ ΟƒΞ±Ο‚.
                 </p>
                 <div className="space-y-6">
                    {[
                      { t: "Hospitality & Tourism AI", d: "Ξ‘Ο…Ο„ΟΞΌΞ±Ο„Ξ· Ξ΄ΞΉΞ±Ο‡ΞµΞ―ΟΞΉΟƒΞ· ΞΊΟΞ±Ο„Ξ®ΟƒΞµΟ‰Ξ½, 24/7 concierge ΞΊΞ±ΞΉ AI ΞµΞΎΟ…Ο€Ξ·ΟΞ­Ο„Ξ·ΟƒΞ· Ο€ΞµΞ»Ξ±Ο„ΟΞ½ Ξ³ΞΉΞ± ΞΎΞµΞ½ΞΏΞ΄ΞΏΟ‡ΞµΞ―Ξ± & Ξ²Ξ―Ξ»ΞµΟ‚." },
                      { t: "Business Logic & Scale", d: "Ξ‘Ο…Ο„ΞΏΞΌΞ±Ο„ΞΏΟ€ΞΏΞ―Ξ·ΟƒΞ· ΞµΟƒΟ‰Ο„ΞµΟΞΉΞΊΟΞ½ Ξ΄ΞΉΞ±Ξ΄ΞΉΞΊΞ±ΟƒΞΉΟΞ½, HR ΞΊΞ±ΞΉ logistics Ξ³ΞΉΞ± Ο„ΞµΟΞ¬ΟƒΟ„ΞΉΞ± ΞΌΞµΞ―Ο‰ΟƒΞ· Ξ»ΞµΞΉΟ„ΞΏΟ…ΟΞ³ΞΉΞΊΞΏΟ ΞΊΟΟƒΟ„ΞΏΟ…Ο‚." }
                    ].map((item, idx) => (
                      <div key={idx} className="group p-6 rounded-[2rem] bg-white/5 border border-white/5 hover:border-primary/20 transition-all">
                        <h4 className="text-sm font-bold text-white mb-2 uppercase tracking-widest group-hover:text-primary transition-colors">{item.t}</h4>
                        <p className="text-xs text-white/30 italic">{item.d}</p>
                      </div>
                    ))}
                 </div>
              </motion.div>

              <motion.div {...fadeInUp} className="relative p-12 rounded-[3.5rem] glass-card overflow-hidden group border-primary/10">
                 <div className="absolute -bottom-10 -right-10 opacity-10">
                    <Brain className="text-primary w-48 h-48 group-hover:scale-110 transition-transform duration-1000" />
                 </div>
                 <div className="relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary mb-8 shadow-glow">
                       <MapPin size={24} />
                    </div>
                    <h3 className="text-2xl font-black text-white italic uppercase mb-6">Ξ£Ο„ΟΞ±Ο„Ξ·Ξ³ΞΉΞΊΞ® Ξ£Ο…Ξ½ΞµΟΞ³Ξ±ΟƒΞ―Ξ±</h3>
                    <p className="text-white/40 leading-relaxed mb-8 italic">
                       Ξ”ΞµΞ½ ΞµΞ―ΞΌΞ±ΟƒΟ„Ξµ Ξ±Ο€Ξ»ΟΟ‚ Ο€ΟΞΏΞΌΞ·ΞΈΞµΟ…Ο„Ξ­Ο‚ Ξ»ΞΏΞ³ΞΉΟƒΞΌΞΉΞΊΞΏΟ. Ξ•Ξ―ΞΌΞ±ΟƒΟ„Ξµ ΞΏ ΟƒΟ„ΟΞ±Ο„Ξ·Ξ³ΞΉΞΊΟΟ‚ ΟƒΞ±Ο‚ ΟƒΟ…Ξ½ΞµΟΞ³Ξ¬Ο„Ξ·Ο‚ Ξ³ΞΉΞ± Ο„Ξ·Ξ½ ΟΞ·Ο†ΞΉΞ±ΞΊΞ® ΞΌΞµΟ„Ξ¬Ξ²Ξ±ΟƒΞ·. Ξ•ΞΎΞµΞΉΞ΄ΞΉΞΊΞµΟ…ΟΞΌΞ±ΟƒΟ„Ξµ ΟƒΟ„ΞΏΞ½ Ο„ΞΏΟ…ΟΞΉΟƒΟ„ΞΉΞΊΟ Ο„ΞΏΞΌΞ­Ξ± ΞΊΞ±ΞΉ Ο„ΞΉΟ‚ ΞµΟ€ΞΉΟ‡ΞµΞΉΟΞ®ΟƒΞµΞΉΟ‚ Ο„Ο‰Ξ½ Ξ½Ξ·ΟƒΞΉΟΞ½, ΞΊΞ±ΞΈΞΏΞ΄Ξ·Ξ³ΟΞ½Ο„Ξ±Ο‚ ΟƒΞ±Ο‚ ΞΌΞµ Ξ±ΟƒΟ†Ξ¬Ξ»ΞµΞΉΞ± ΟƒΟ„Ξ·Ξ½ ΞµΟ€ΞΏΟ‡Ξ® Ο„ΞΏΟ… AI.
                    </p>
                    <div className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Based in Crete Β· Serving the Greek Islands</div>
                 </div>
              </motion.div>
           </div>
        </div>
      </section>

      {/* β”€β”€ SECTION 7: WORKSHOPS (Mirroring Index.tsx Split Grid) β”€β”€ */}
      <section className="py-0 relative border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Academy Bridge */}
          <div className="p-8 md:p-16 lg:p-24 xl:px-40 xl:py-48 border-b lg:border-b-0 lg:border-r border-white/5 hover:bg-white/[0.015] transition-colors group">
            <motion.div initial={fadeInUp.initial} whileInView={fadeInUp.whileInView} viewport={fadeInUp.viewport} transition={fadeInUp.transition}>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 mb-12 block group-hover:text-primary transition-colors italic">EDUCATION</span>
              <h3 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight mb-8 italic uppercase leading-none">ΞΞµΟ‚ Ξ½Ξ± ΞΌΞ¬ΞΈΞµΞΉΟ‚ <br/> <span className="text-primary italic animate-pulse">AI;</span></h3>
              <p className="text-lg md:text-xl text-white/40 mb-12 leading-relaxed italic pr-4">
                ΞΟ€ΞΏΟΞµΞ―Ο‚ Ξ½Ξ± ΞΎΞµΞΊΞΉΞ½Ξ®ΟƒΞµΞΉΟ‚ Ξ±Ο€Ο Ο„Ξ± workshops ΞΌΞ±Ο‚ ΞΊΞ±ΞΉ Ξ½Ξ± Ξ΄ΞµΞΉΟ‚ Ο€ΟΟ‚ Ξ»ΞµΞΉΟ„ΞΏΟ…ΟΞ³ΞµΞ― ΟƒΟ„Ξ·Ξ½ Ο€ΟΞ¬ΞΎΞ·. Ξ¤ΞΏ ΞΌΞ­Ξ»Ξ»ΞΏΞ½ Ξ΄ΞµΞ½ Ο‡Ο„Ξ―Ξ¶ΞµΟ„Ξ±ΞΉ ΞΌΟΞ½ΞΏ ΞΌΞµ ΞΊΟΞ΄ΞΉΞΊΞ±, Ξ±Ξ»Ξ»Ξ¬ ΞΊΞ±ΞΉ ΞΌΞµ ΟƒΟ‰ΟƒΟ„Ξ® ΞµΞΊΟ€Ξ±Ξ―Ξ΄ΞµΟ…ΟƒΞ·.
              </p>
              <Button size="xl" className="w-full sm:w-auto rounded-full px-12 h-20 bg-white text-black hover:bg-primary transition-all font-black text-xs uppercase tracking-widest italic" asChild>
                <Link to="/academy">View Workshops</Link>
              </Button>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <div className="p-8 md:p-16 lg:p-24 xl:px-40 xl:py-48 transition-colors group hover:bg-white/[0.015]">
            <motion.div initial={fadeInUp.initial} whileInView={fadeInUp.whileInView} viewport={fadeInUp.viewport} transition={fadeInUp.transition}>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 mb-12 block group-hover:text-primary transition-colors italic">PROTOCOLS FAQ</span>
              <h3 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight mb-12 italic uppercase leading-none text-white">Ξ£Ο…Ο‡Ξ½Ξ­Ο‚ <br/> <span className="text-white/20">Ξ•ΟΟ‰Ο„Ξ®ΟƒΞµΞΉΟ‚.</span></h3>
              <div className="max-w-xl">
                 <FAQAccordion 
                    items={[
                      { question: "Ξ§ΟΞµΞΉΞ¬Ξ¶ΞµΟ„Ξ±ΞΉ Ξ½Ξ± Ξ­Ο‡Ο‰ Ο„ΞµΟ‡Ξ½ΞΉΞΊΞ­Ο‚ Ξ³Ξ½ΟΟƒΞµΞΉΟ‚;", answer: "ΞΞ±ΞΈΟΞ»ΞΏΟ…. Ξ•ΞΌΞµΞ―Ο‚ Ξ±Ξ½Ξ±Ξ»Ξ±ΞΌΞ²Ξ¬Ξ½ΞΏΟ…ΞΌΞµ ΟΞ»ΞΏ Ο„ΞΏ Ο„ΞµΟ‡Ξ½ΞΉΞΊΟ ΞΊΞΏΞΌΞΌΞ¬Ο„ΞΉ, Ο„Ξ·Ξ½ Ο…Ξ»ΞΏΟ€ΞΏΞ―Ξ·ΟƒΞ· ΞΊΞ±ΞΉ Ο„ΞΏ setup. Ξ•ΟƒΞµΞ―Ο‚ Ξ±Ο€Ξ»ΟΟ‚ Ο‡ΟΞ·ΟƒΞΉΞΌΞΏΟ€ΞΏΞΉΞµΞ―Ο„Ξµ Ο„ΞΏ ΟƒΟΟƒΟ„Ξ·ΞΌΞ±." },
                      { question: "Ξ ΟΟƒΞΏ Ο‡ΟΟΞ½ΞΏ Ο€Ξ±Ξ―ΟΞ½ΞµΞΉ Ξ· Ο…Ξ»ΞΏΟ€ΞΏΞ―Ξ·ΟƒΞ·;", answer: "Ξ‘Ξ½Ξ¬Ξ»ΞΏΞ³Ξ± ΞΌΞµ Ο„Ξ·Ξ½ Ο€ΞΏΞ»Ο…Ο€Ξ»ΞΏΞΊΟΟ„Ξ·Ο„Ξ±, Ξ­Ξ½Ξ± Ο„Ο…Ο€ΞΉΞΊΟ AI automation project ΞΌΟ€ΞΏΟΞµΞ― Ξ½Ξ± ΞµΞ―Ξ½Ξ±ΞΉ live ΟƒΞµ 2-4 ΞµΞ²Ξ΄ΞΏΞΌΞ¬Ξ΄ΞµΟ‚." },
                      { question: "Ξ•Ξ―Ξ½Ξ±ΞΉ Ο„ΞΏ AI ΞΊΞ±Ο„Ξ¬Ξ»Ξ»Ξ·Ξ»ΞΏ Ξ³ΞΉΞ± Ο„Ξ· Ξ΄ΞΉΞΊΞ® ΞΌΞΏΟ… ΞµΟ€ΞΉΟ‡ΞµΞ―ΟΞ·ΟƒΞ·;", answer: "Ξ‘Ξ½ Ξ­Ο‡ΞµΟ„Ξµ ΞµΟ€Ξ±Ξ½Ξ±Ξ»Ξ±ΞΌΞ²Ξ±Ξ½ΟΞΌΞµΞ½ΞµΟ‚ Ξ΄ΞΉΞ±Ξ΄ΞΉΞΊΞ±ΟƒΞ―ΞµΟ‚, manual data entry Ξ® Ο‡ΟΞµΞΉΞ¬Ξ¶ΞµΟƒΟ„Ξµ ΞΊΞ±Ξ»ΟΟ„ΞµΟΞ· Ξ±Ξ½Ξ¬Ξ»Ο…ΟƒΞ· Ξ΄ΞµΞ΄ΞΏΞΌΞ­Ξ½Ο‰Ξ½, Ο„ΟΟ„Ξµ Ξ· Ξ±Ο€Ξ¬Ξ½Ο„Ξ·ΟƒΞ· ΞµΞ―Ξ½Ξ±ΞΉ ΟƒΟ‡ΞµΞ΄ΟΞ½ ΟƒΞ―Ξ³ΞΏΟ…ΟΞ± Ξ½Ξ±ΞΉ." }
                    ]} 
                    dark={true} 
                  />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* β”€β”€ SECTION 9: FINAL CTA (Index.tsx Style) β”€β”€ */}
      <section className="py-32 md:py-48 lg:py-64 relative bg-[#050505] border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(208,255,0,0.06),transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div initial={fadeInUp.initial} whileInView={fadeInUp.whileInView} viewport={fadeInUp.viewport} transition={fadeInUp.transition}>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-12 block italic tracking-[0.6em]">ACTIVATE THE LAB</span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight italic uppercase leading-[0.9] mb-8">
              ΞΞ­Ξ»ΞµΞΉΟ‚ Ο„ΞΏ AI <br />
              Ξ½Ξ± Ξ΄ΞΏΟ…Ξ»ΞµΟΞµΞΉ <br />
              <span className="text-white/20">Ξ³ΞΉΞ± ΟƒΞ­Ξ½Ξ±;</span>
            </h2>
            <p className="text-primary font-black uppercase tracking-[0.4em] text-lg md:text-2xl mb-16 md:mb-24 italic">Good. Letβ€™s build it right.</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 mb-24">
              <Button size="xl" className="w-full sm:w-auto rounded-full px-12 md:px-20 h-24 md:h-28 text-xl md:text-3xl font-black group bg-primary text-black hover:bg-white transition-all border-none italic shadow-glow-strong" asChild>
                <Link to="/contact">Build your system</Link>
              </Button>
              <Button variant="outline" size="xl" className="w-full sm:w-auto rounded-full px-12 md:px-20 h-24 md:h-28 text-xl md:text-3xl font-black border-white/10 hover:bg-white hover:text-black transition-all italic" asChild>
                <Link to="/book-call">Book a call</Link>
              </Button>
            </div>
            
            <p className="text-lg md:text-2xl font-display font-medium text-white/20 italic tracking-tight uppercase tracking-[0.4em] font-black">
              TRANSFORM YOUR OPERATION TODAY.
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default AILab;
