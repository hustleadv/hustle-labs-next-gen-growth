import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  TrendingUp, Megaphone, Target, Zap, BarChart3,
  MousePointer2, Mail, Users, ArrowRight, CheckCircle2,
  ShieldCheck, Settings, PieChart, ShoppingBag, Building,
  Briefcase, Hotel, Brain
} from "lucide-react";
import { Button } from "@/components/ui/button";
import FAQAccordion from "@/components/FAQAccordion";
import LabBackground from "@/components/LabBackground";
import Magnetic from "@/components/Magnetic";
import sigma22 from "@/assets/sigma22.jpg";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as any },
});

const growthPillars = [
  { icon: Megaphone, title: "Ξ£Ο„ΞΏΟ‡ΞµΟ…ΞΌΞµΞ½Ξ· Ξ”ΞΉΞ±Ο†Ξ·ΞΌΞΉΟƒΞ·", desc: "Ξ”Ξ·ΞΌΞΉΞΏΟ…ΟΞ³ΞΏΟΞΌΞµ ΞΊΞ±ΞΌΟ€Ξ¬Ξ½ΞΉΞµΟ‚ ΟƒΞµ Google, Meta & TikTok Ο€ΞΏΟ… Ο†Ξ­ΟΞ½ΞΏΟ…Ξ½ ΞΌΞµΟ„ΟΞ®ΟƒΞΉΞΌΞ± Ξ±Ο€ΞΏΟ„ΞµΞ»Ξ­ΟƒΞΌΞ±Ο„Ξ± ΞΊΞ±ΞΉ Ξ±Ο…ΞΎΞ¬Ξ½ΞΏΟ…Ξ½ Ο„ΞΉΟ‚ Ο€Ο‰Ξ»Ξ®ΟƒΞµΞΉΟ‚ ΟƒΞ±Ο‚.", badge: "3.5x Avg. ROAS" },
  { icon: Target, title: "Ξ•ΞΎΟ…Ο€Ξ½Ξ± Funnels", desc: "Ξ£Ο‡ΞµΞ΄ΞΉΞ¬Ξ¶ΞΏΟ…ΞΌΞµ ΟƒΞµΞ»Ξ―Ξ΄ΞµΟ‚ ΞΊΞ±ΞΉ Ξ΄ΞΉΞ±Ξ΄ΟΞΏΞΌΞ­Ο‚ Ο€ΞΏΟ… Ο€ΞµΞ―ΞΈΞΏΟ…Ξ½ Ο„ΞΏΞ½ ΞµΟ€ΞΉΟƒΞΊΞ­Ο€Ο„Ξ· Ξ½Ξ± Ξ±Ξ³ΞΏΟΞ¬ΟƒΞµΞΉ, Ξ±Ο…ΞΎΞ¬Ξ½ΞΏΞ½Ο„Ξ±Ο‚ Ξ΄ΟΞ±ΞΌΞ±Ο„ΞΉΞΊΞ¬ Ο„ΞΏ Ο€ΞΏΟƒΞΏΟƒΟ„Ο ΞΌΞµΟ„Ξ±Ο„ΟΞΏΟ€Ξ®Ο‚.", badge: "+40% Conv. Rate" },
  { icon: Mail, title: "Ξ‘Ο†ΞΏΟƒΞΉΟ‰ΟƒΞ· Ξ ΞµΞ»Ξ±Ο„Ο‰Ξ½", desc: "ΞΞµ Ξ­ΞΎΟ…Ο€Ξ½Ξ± emails ΞΊΞ±ΞΉ SMS, ΞΊΟΞ±Ο„Ξ¬ΞΌΞµ Ο„ΞΏΟ…Ο‚ Ο€ΞµΞ»Ξ¬Ο„ΞµΟ‚ ΟƒΞ±Ο‚ ΞµΞ½ΞµΟΞ³ΞΏΟΟ‚ ΞΊΞ±ΞΉ Ο„ΞΏΟ…Ο‚ ΞΊΞ¬Ξ½ΞΏΟ…ΞΌΞµ Ξ½Ξ± Ξ±Ξ³ΞΏΟΞ¬Ξ¶ΞΏΟ…Ξ½ ΞΎΞ±Ξ½Ξ¬ ΞΊΞ±ΞΉ ΞΎΞ±Ξ½Ξ¬.", badge: "30% Extra Rev." },
  { icon: PieChart, title: "Ξ‘Ξ½Ξ±Ξ»Ο…ΟƒΞ· Ξ”ΞµΞ΄ΞΏΞΌΞµΞ½Ο‰Ξ½", desc: "ΞΞ±Ο„Ξ±Ξ³ΟΞ¬Ο†ΞΏΟ…ΞΌΞµ ΞΊΞ¬ΞΈΞµ ΞΊΞ―Ξ½Ξ·ΟƒΞ· Ξ³ΞΉΞ± Ξ½Ξ± ΞΎΞ­ΟΞµΟ„Ξµ Ξ±ΞΊΟΞΉΞ²ΟΟ‚ Ο€ΞΏΞΉΞ± ΞµΞ½Ξ­ΟΞ³ΞµΞΉΞ± Ο†Ξ­ΟΞ½ΞµΞΉ Ο„ΞΏ ΞΌΞµΞ³Ξ±Ξ»ΟΟ„ΞµΟΞΏ ΞΊΞ­ΟΞ΄ΞΏΟ‚. Ξ£Ο„Ξ±ΞΌΞ±Ο„Ξ®ΟƒΟ„Ξµ Ξ½Ξ± ΞΌΞ±Ξ½Ο„ΞµΟΞµΟ„Ξµ.", badge: "100% Tracking" },
];

const steps = [
  { num: "01", icon: ShieldCheck, title: "Audit & Architecture", desc: "Ξ‘Ξ½Ξ±Ξ»ΟΞΏΟ…ΞΌΞµ Ο„ΞΏ ΞΉΟƒΟ„ΞΏΟΞΉΞΊΟ, ΞµΞ»Ξ­Ξ³Ο‡ΞΏΟ…ΞΌΞµ Ο„Ξ± funnels ΞΊΞ±ΞΉ Ο‡Ο„Ξ―Ξ¶ΞΏΟ…ΞΌΞµ Ο„Ξ· ΟƒΟ„ΟΞ±Ο„Ξ·Ξ³ΞΉΞΊΞ®." },
  { num: "02", icon: Settings, title: "System Setup", desc: "Advanced tracking, creatives ΞΊΞ±ΞΉ Ξ±ΟΟ‡ΞΉΟ„ΞµΞΊΟ„ΞΏΞ½ΞΉΞΊΞ® ΞΊΞ±ΞΌΟ€Ξ±Ξ½ΞΉΟΞ½." },
  { num: "03", icon: Zap, title: "Execution & Flow", desc: "Live ads. Ξ’ΞµΞ»Ο„ΞΉΟƒΟ„ΞΏΟ€ΞΏΞ―Ξ·ΟƒΞ· ΞΊΞ±ΞΈΞ·ΞΌΞµΟΞΉΞ½Ξ¬ Ξ²Ξ¬ΟƒΞµΞΉ real-time data." },
  { num: "04", icon: TrendingUp, title: "Scale & Dominate", desc: "Ξ’ΟΞ―ΟƒΞΊΞΏΟ…ΞΌΞµ Ο„ΞΏΟ…Ο‚ Ξ½ΞΉΞΊΞ·Ο„Ξ­Ο‚ ΞΊΞ±ΞΉ Ξ±Ο…ΞΎΞ¬Ξ½ΞΏΟ…ΞΌΞµ ΞµΟ€ΞΉΞΈΞµΟ„ΞΉΞΊΞ¬ Ο„ΞΏ budget." },
];

const industries = [
  { icon: ShoppingBag, name: "Ξ—Ξ»ΞµΞΊΟ„ΟΞΏΞ½ΞΉΞΊΞΏ Ξ•ΞΌΟ€ΞΏΟΞΉΞΏ", text: "ΞΞ»ΞΉΞΌΞ±ΞΊΟΞ½ΞΏΟ…ΞΌΞµ Ο„ΞΉΟ‚ Ο€Ο‰Ξ»Ξ®ΟƒΞµΞΉΟ‚ Ο„ΞΏΟ… e-shop ΟƒΞ±Ο‚ ΞΌΞµ ΟƒΟ„ΟΞ±Ο„Ξ·Ξ³ΞΉΞΊΞ­Ο‚ Ξ΄ΞΉΞ±Ο†Ξ·ΞΌΞ―ΟƒΞµΞΉΟ‚ Ο€ΞΏΟ… Ο†Ξ­ΟΞ½ΞΏΟ…Ξ½ ΞΊΞ­ΟΞ΄ΞΏΟ‚." },
  { icon: Hotel, name: "Ξ¤ΞΏΟ…ΟΞΉΟƒΞΌΞΏΟ‚ & Ξ¦ΞΉΞ»ΞΏΞΎΞµΞ½ΞΉΞ±", text: "Ξ‘Ο…ΞΎΞ¬Ξ½ΞΏΟ…ΞΌΞµ Ο„ΞΉΟ‚ Ξ±Ο€ΞµΟ…ΞΈΞµΞ―Ξ±Ο‚ ΞΊΟΞ±Ο„Ξ®ΟƒΞµΞΉΟ‚ ΟƒΟ„ΞΏ ΞΎΞµΞ½ΞΏΞ΄ΞΏΟ‡ΞµΞ―ΞΏ Ξ® Ο„Ξ· Ξ²Ξ―Ξ»Ξ± ΟƒΞ±Ο‚ (direct bookings)." },
  { icon: Building, name: "Real Estate", text: "Ξ’ΟΞ―ΟƒΞΊΞΏΟ…ΞΌΞµ ΟƒΞΏΞ²Ξ±ΟΞΏΟΟ‚ Ξ±Ξ³ΞΏΟΞ±ΟƒΟ„Ξ­Ο‚ Ξ® ΞµΞ½ΞΏΞΉΞΊΞΉΞ±ΟƒΟ„Ξ­Ο‚ Ξ³ΞΉΞ± Ο„Ξ± Ξ±ΞΊΞ―Ξ½Ξ·Ο„Ξ¬ ΟƒΞ±Ο‚ ΞΌΞ­ΟƒΟ‰ ΟƒΟ„ΞΏΟ‡ΞµΟ…ΞΌΞ­Ξ½Ξ·Ο‚ Ξ±Ξ½Ξ±Ξ¶Ξ®Ο„Ξ·ΟƒΞ·Ο‚." },
  { icon: Briefcase, name: "Ξ Ξ±ΟΞΏΟ‡Ξ· Ξ¥Ο€Ξ·ΟΞµΟƒΞΉΟ‰Ξ½", text: "Ξ¦Ξ­ΟΞ½ΞΏΟ…ΞΌΞµ qualified leads Ξ³ΞΉΞ± ΞΊΞ»ΞΉΞ½ΞΉΞΊΞ­Ο‚, Ξ΄ΞΉΞΊΞ·Ξ³ΟΟΞΏΟ…Ο‚, Ξ»ΞΏΞ³ΞΉΟƒΟ„Ξ­Ο‚ ΞΊΞ±ΞΉ Ξ¬Ξ»Ξ»ΞµΟ‚ ΞµΟ€Ξ±Ξ³Ξ³ΞµΞ»ΞΌΞ±Ο„ΞΉΞΊΞ­Ο‚ Ο…Ο€Ξ·ΟΞµΟƒΞ―ΞµΟ‚." },
];

const Growth = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  useEffect(() => {
    document.title = "Digital Marketing & Growth Strategy Ξ§Ξ±Ξ½ΞΉΞ¬ | Hustle Labs";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', "Ξ£Ο„ΟΞ±Ο„Ξ·Ξ³ΞΉΞΊΞ® Ξ±Ξ½Ξ¬Ο€Ο„Ο…ΞΎΞ· ΞΊΞ±ΞΉ Digital Marketing ΟƒΟ„Ξ± Ξ§Ξ±Ξ½ΞΉΞ¬ Ξ±Ο€Ο Ο„Ξ·Ξ½ Hustle Labs. Data-driven ΞΊΞ±ΞΌΟ€Ξ¬Ξ½ΞΉΞµΟ‚, performance marketing ΞΊΞ±ΞΉ scaling ΟƒΟ…ΟƒΟ„Ξ®ΞΌΞ±Ο„Ξ± Ξ³ΞΉΞ± ΞµΟ€ΞΉΟ‡ΞµΞΉΟΞ®ΟƒΞµΞΉΟ‚.");
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "serviceType": "Digital Marketing & Growth Strategy", "provider": { "@type": "LocalBusiness", "name": "Hustle Labs" } });
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-primary selection:text-black overflow-x-hidden">

      {/* β”€β”€β”€ Custom Interactive Hero β”€β”€β”€ */}
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
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse mr-2" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/80 italic">Hustle GrowthLab</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
              className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-12 uppercase italic"
            >
              Data-Driven <br />
              <span className="text-primary block group-hover:scale-[1.02] transition-transform duration-700">Performance.</span>
            </motion.h1>

            <div className="space-y-12 mb-16">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as any }}
                className="font-display text-xl md:text-2xl lg:text-3xl font-medium text-white/50 tracking-tight italic max-w-4xl mx-auto px-4"
              >
                Ξ”ΞµΞ½ Ο…Ο€ΞΏΞΈΞ­Ο„ΞΏΟ…ΞΌΞµ, Ξ΄ΞΏΞΊΞΉΞΌΞ¬Ξ¶ΞΏΟ…ΞΌΞµ. <br className="hidden md:block" />
                <span className="text-white/20">Ξ£Ο„Ξ®Ξ½ΞΏΟ…ΞΌΞµ digital ΟƒΟ…ΟƒΟ„Ξ®ΞΌΞ±Ο„Ξ± Ο€ΞΏΟ… ΞΌΞµΟ„Ξ±Ο„ΟΞ­Ο€ΞΏΟ…Ξ½ Ο„Ξ·Ξ½ Ο€ΟΞΏΟƒΞΏΟ‡Ξ® ΟƒΞµ ΞΊΞ­ΟΞ΄ΞΏΟ‚.</span>
              </motion.p>
              
              <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ duration: 1, delay: 0.3 }}
                 className="flex flex-wrap justify-center gap-x-12 gap-y-2 text-primary font-black uppercase tracking-[0.5em] text-xs md:text-sm italic"
              >
                <span className="flex items-center gap-2"><Target size={14} /> Audit</span>
                <span className="flex items-center gap-2"><Zap size={14} /> Execute</span>
                <span className="flex items-center gap-2"><TrendingUp size={14} /> Scale</span>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as any }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Magnetic strength={0.2}>
                <Button size="xl" className="w-full sm:w-auto rounded-full px-12 h-20 text-lg font-black group bg-primary text-black hover:bg-white transition-all border-none italic shadow-glow-strong" asChild>
                   <Link to="/contact">ΞΞµΞΊΞ―Ξ½Ξ± Ο„ΞΏ Scale</Link>
                </Button>
              </Magnetic>
              <Magnetic strength={0.3}>
                <Button variant="outline" size="xl" className="w-full sm:w-auto rounded-full px-12 h-20 text-lg font-black border-white/10 hover:bg-white hover:text-black transition-all italic" asChild>
                   <a href="#services">Ξ”ΞµΟ‚ Ο„ΞΉΟ‚ Ξ¥Ο€Ξ·ΟΞµΟƒΞ―ΞµΟ‚</a>
                </Button>
              </Magnetic>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <motion.div 
          animate={{ y: [0, -20, 0], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-primary/10 blur-[120px] pointer-events-none"
        />
      </section>

      {/* Services Overview Section */}
      <section id="services" className="py-24 md:py-32 relative border-t border-white/5 bg-[#050505] overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.div {...fadeUp()} className="max-w-5xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as any }}
              className="text-lg md:text-2xl font-medium text-white/80 max-w-4xl mx-auto mb-16 italic leading-relaxed"
            >
              Ξ”ΞµΞ½ Ο…Ο€ΞΏΞΈΞ­Ο„ΞΏΟ…ΞΌΞµ, Ξ΄ΞΏΞΊΞΉΞΌΞ¬Ξ¶ΞΏΟ…ΞΌΞµ. Ξ£Ο„Ξ®Ξ½ΞΏΟ…ΞΌΞµ digital ΟƒΟ…ΟƒΟ„Ξ®ΞΌΞ±Ο„Ξ± Ο€ΞΏΟ… ΞΌΞµΟ„Ξ±Ο„ΟΞ­Ο€ΞΏΟ…Ξ½ Ο„Ξ·Ξ½ Ο€ΟΞΏΟƒΞΏΟ‡Ξ® ΟƒΞµ ΞΊΞ­ΟΞ΄ΞΏΟ‚, ΞΌΞµ Ξ±Ο€ΟΞ»Ο…Ο„Ξ· Ξ΄ΞΉΞ±Ο†Ξ¬Ξ½ΞµΞΉΞ± ΞΊΞ±ΞΉ ΞµΟƒΟ„Ξ―Ξ±ΟƒΞ· ΟƒΟ„ΞΏ scale.
            </motion.p>

            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
              <Button size="xl" className="rounded-full px-12 md:px-16 h-20 md:h-24 text-xl md:text-2xl font-black bg-primary text-black hover:bg-white transition-all border-none italic shadow-glow-strong" asChild>
                <Link to="/contact">ΞΞµΞΊΞ―Ξ½Ξ± Ο„ΞΏ Scale</Link>
              </Button>
              <Button variant="outline" size="xl" className="rounded-full px-12 md:px-16 h-20 md:h-24 text-xl md:text-2xl font-black border-white/10 hover:bg-white hover:text-black transition-all italic" asChild>
                <a href="#services">Ξ”ΞµΟ‚ Ο„ΞΉΟ‚ Ξ¥Ο€Ξ·ΟΞµΟƒΞ―ΞµΟ‚</a>
              </Button>
            </div>

            <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-white/20 italic">
              For businesses that want results, not just traffic.
            </p>
           </motion.div>
         </div>
       </section>

      {/* β”€β”€ STATEMENT β”€β”€ */}
      <section className="py-24 md:py-48 relative border-t border-white/5 bg-[#050505] overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.div {...fadeUp()} className="max-w-5xl mx-auto">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-12 block italic">The Growth Standard</span>
            <h2 className="font-display text-4xl md:text-7xl lg:text-9xl font-black tracking-tighter leading-[0.85] mb-12 italic uppercase text-white">
              Ξ”ΞµΞ½ Ο„ΟΞ­Ο‡ΞΏΟ…ΞΌΞµ ads. <br className="hidden md:block" />
              <span className="text-white/10 italic">Ξ§Ο„Ξ―Ξ¶ΞΏΟ…ΞΌΞµ ΟƒΟ…ΟƒΟ„Ξ®ΞΌΞ±Ο„Ξ±.</span>
            </h2>
            <p className="text-xl md:text-3xl text-white/60 font-medium italic leading-relaxed max-w-3xl mx-auto px-4">
              ΞΞ¬ΞΈΞµ euro Ο„ΞΏΟ… budget ΟƒΞΏΟ… ΞµΞ―Ξ½Ξ±ΞΉ ΞµΟ€Ξ­Ξ½Ξ΄Ο…ΟƒΞ·. Ξ— Ξ΄ΞΏΟ…Ξ»ΞµΞΉΞ¬ ΞΌΞ±Ο‚ ΞµΞ―Ξ½Ξ±ΞΉ Ξ½Ξ± ΟƒΞΉΞ³ΞΏΟ…ΟΞ­ΟΞΏΟ…ΞΌΞµ ΟΟ„ΞΉ ΞµΟ€ΞΉΟƒΟ„ΟΞ­Ο†ΞµΞΉ Ο€ΞΏΞ»Ξ»Ξ±Ο€Ξ»Ξ¬ΟƒΞΉΞΏ.
            </p>
          </motion.div>
        </div>
      </section>

      {/* β”€β”€ AI X MARKETING β”€β”€ */}
      <section className="py-24 md:py-32 relative bg-[#050505] border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(208,255,0,0.03),_transparent_50%)] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center max-w-7xl mx-auto">
              <motion.div {...fadeUp()}>
                 <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary mb-10 block italic">The Evolution</span>
                 <h2 className="font-display text-4xl md:text-6xl font-black text-white mb-12 leading-[0.85] tracking-tighter italic uppercase">
                    Ξ¤ΞΏ Marketing <br /> <span className="text-white/10 italic">Ξ‘Ξ»Ξ»Ξ±ΞΎΞµ Ξ“ΞΉΞ± Ξ Ξ±Ξ½Ο„Ξ±.</span>
                 </h2>
                 <p className="text-xl md:text-2xl text-white/60 leading-relaxed max-w-xl italic mb-12">
                    Ξ”ΞµΞ½ Ξ²Ξ±ΟƒΞΉΞ¶ΟΞΌΞ±ΟƒΟ„Ξµ ΞΌΟΞ½ΞΏ ΟƒΞµ Ο€Ξ±ΟΞ±Ξ΄ΞΏΟƒΞΉΞ±ΞΊΞ­Ο‚ ΞΌΞµΞΈΟΞ΄ΞΏΟ…Ο‚. Ξ£Ο…Ξ½Ξ΄Ο…Ξ¬Ξ¶ΞΏΟ…ΞΌΞµ Ο„Ξ· ΟƒΟ„ΟΞ±Ο„Ξ·Ξ³ΞΉΞΊΞ® ΟƒΞΊΞ­ΟΞ· ΞΌΞµ <strong className="text-primary font-bold">Ο„ΞµΟ‡Ξ½Ξ·Ο„Ξ® Ξ½ΞΏΞ·ΞΌΞΏΟƒΟΞ½Ξ· Ξ±ΞΉΟ‡ΞΌΞ®Ο‚ (AI)</strong>. Ξ‘Ο…Ο„Ο ΟƒΞ·ΞΌΞ±Ξ―Ξ½ΞµΞΉ ΞΊΞ±Ξ»ΟΟ„ΞµΟΞ· ΟƒΟ„ΟΟ‡ΞµΟ…ΟƒΞ·, Ξ³ΟΞ·Ξ³ΞΏΟΟΟ„ΞµΟΞ± Ξ±Ο€ΞΏΟ„ΞµΞ»Ξ­ΟƒΞΌΞ±Ο„Ξ± ΞΊΞ±ΞΉ ΞΌΞµΞ³Ξ±Ξ»ΟΟ„ΞµΟΞΏ Ο€ΞµΟΞΉΞΈΟΟΞΉΞΏ ΞΊΞ­ΟΞ΄ΞΏΟ…Ο‚ Ξ³ΞΉΞ± Ο„Ξ·Ξ½ ΞµΟ€ΞΉΟ‡ΞµΞ―ΟΞ·ΟƒΞ® ΟƒΞ±Ο‚.
                 </p>
                 <div className="space-y-6">
                    {[
                      "AI-Powered Copywriting: ΞΞµΞ―ΞΌΞµΞ½Ξ± Ο€ΞΏΟ… Ο€ΞµΞ―ΞΈΞΏΟ…Ξ½ ΞΊΞ±ΞΉ Ο€ΟΞΏΟƒΞ±ΟΞΌΟΞ¶ΞΏΞ½Ο„Ξ±ΞΉ ΟƒΟ„ΞΏΞ½ Ο€ΞµΞ»Ξ¬Ο„Ξ·.",
                      "Predictive Analytics: ΞΞ­ΟΞΏΟ…ΞΌΞµ Ο„ΞΉ Ξ΄ΞΏΟ…Ξ»ΞµΟΞµΞΉ Ο€ΟΞΉΞ½ ΞΊΞ±Ξ½ Ο„ΞΏ Ο„ΟΞ­ΞΎΞΏΟ…ΞΌΞµ.",
                      "Automated Optimizations: Ξ£Ο…Ξ½ΞµΟ‡Ξ®Ο‚ Ξ²ΞµΞ»Ο„Ξ―Ο‰ΟƒΞ· ΞΌΞµ Ξ±Ξ»Ξ³ΟΟΞΉΞΈΞΌΞΏΟ…Ο‚ machine learning."
                    ].map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-5 group">
                        <div className="w-2 h-2 rounded-full bg-primary mt-3 shrink-0 group-hover:scale-150 transition-transform" />
                        <p className="text-lg text-white/70 font-medium italic group-hover:text-white transition-colors">{bullet}</p>
                      </div>
                    ))}
                 </div>
              </motion.div>

              <motion.div {...fadeUp(0.2)} className="relative p-12 lg:p-20 rounded-[4rem] bg-white/[0.01] border border-white/5 overflow-hidden group shadow-2xl flex flex-col items-center justify-center text-center">
                 <div className="absolute top-0 right-0 p-12 opacity-10">
                    <Brain className="text-primary w-64 h-64 -rotate-12 group-hover:rotate-0 transition-transform duration-2000 ease-out shadow-glow" />
                 </div>
                 <div className="relative z-10">
                    <div className="w-24 h-24 rounded-[2rem] bg-primary/10 border border-primary/20 flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-500">
                        <Brain size={48} className="text-primary" />
                    </div>
                    <h3 className="text-3xl md:text-5xl font-black text-white italic uppercase mb-6 tracking-tighter">AI + Human <br /> <span className="text-primary">Intelligence</span></h3>
                    <p className="text-lg text-white/60 leading-relaxed italic px-4">
                       Ξ— Ο„ΞµΟ‡Ξ½ΞΏΞ»ΞΏΞ³Ξ―Ξ± Ξ±Ο€Ο ΞΌΟΞ½Ξ· Ο„Ξ·Ο‚ Ξ΄ΞµΞ½ Ξ±ΟΞΊΞµΞ―. Ξ— Ξ΄ΟΞ½Ξ±ΞΌΞ· ΞΊΟΟΞ²ΞµΟ„Ξ±ΞΉ ΟƒΟ„ΞΏΞ½ ΟƒΟ…Ξ½Ξ΄Ο…Ξ±ΟƒΞΌΟ Ο„Ξ·Ο‚ Ξ±Ξ½ΞΈΟΟΟ€ΞΉΞ½Ξ·Ο‚ ΟƒΟ„ΟΞ±Ο„Ξ·Ξ³ΞΉΞΊΞ®Ο‚ ΞΌΞµ Ο„Ξ·Ξ½ Ο„Ξ±Ο‡ΟΟ„Ξ·Ο„Ξ± Ο„ΞΏΟ… AI.
                    </p>
                 </div>
              </motion.div>
           </div>
        </div>
      </section>

      {/* β”€β”€ GROWTH PILLARS β”€β”€ */}
      <section id="services" className="py-24 md:py-48 relative border-t border-white/5 bg-[#050505] overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary mb-10 block italic">Growth Services</span>
            <h2 className="font-display text-4xl md:text-8xl font-black tracking-tighter leading-[0.85] italic uppercase text-white">
              ΞΞ»ΞΉΟƒΟ„ΞΉΞΊΞ® <br />
              <span className="text-white/10 italic">Ξ£Ο„ΟΞ±Ο„Ξ·Ξ³ΞΉΞΊΞ®.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {growthPillars.map((p, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className="group relative bg-white/[0.01] rounded-[3rem] p-10 lg:p-16 border border-white/5 hover:bg-white/[0.03] transition-all duration-700 hover:border-primary/20 overflow-hidden text-left shadow-2xl flex flex-col"
              >
                <div className="relative z-10 flex-1">
                  <div className="flex items-center justify-between mb-12">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 group-hover:bg-primary group-hover:text-black transition-all duration-500">
                      <p.icon size={28} className="text-primary/60 group-hover:text-black" />
                    </div>
                    <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.05] text-[10px] font-black uppercase tracking-widest text-white/60 italic group-hover:text-primary transition-colors duration-500">
                      {p.badge}
                    </span>
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl font-extrabold mb-6 leading-none text-white tracking-tight italic uppercase group-hover:text-primary transition-colors duration-500">{p.title}</h3>
                  <p className="text-white/70 text-lg md:text-xl leading-relaxed italic pr-4">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* β”€β”€ STATS β”€β”€ */}
      <section className="py-24 relative overflow-hidden border-y border-white/5 bg-[#080808]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(208,255,0,0.06),transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
            {[
              { value: "3.5x", label: "Average ROAS", suffix: "+" },
              { value: "40", label: "Conv. Rate Lift", suffix: "%" },
              { value: "100", label: "Tracking Accuracy", suffix: "%" },
              { value: "2M", label: "Ad Spend Managed", suffix: "β‚¬+" }
            ].map((stat, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)} className="text-center md:text-left flex-1 border-b md:border-b-0 md:border-r border-white/10 pb-8 md:pb-0 last:border-0 group cursor-default">
                <div className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-white mb-2 tracking-tighter flex items-center justify-center md:justify-start group-hover:scale-105 group-hover:-translate-y-1 transition-transform duration-500 origin-left">
                  {stat.value}<span className="text-primary text-3xl md:text-4xl ml-1 group-hover:animate-pulse">{stat.suffix}</span>
                </div>
                <div className="text-primary/70 uppercase tracking-[0.2em] text-xs font-black group-hover:text-primary transition-colors duration-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* β”€β”€ INDUSTRIES β”€β”€ */}
      <section className="py-24 md:py-48 relative overflow-hidden bg-[#050505]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-24">
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary mb-10 block italic">Expertise Per Sector</span>
            <h2 className="font-display text-4xl md:text-8xl font-black tracking-tighter leading-[0.85] italic uppercase text-white">
              High-Growth <br />
              <span className="text-white/10 italic">ΞΞ»Ξ¬Ξ΄ΞΏΞΉ.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className="p-10 md:p-12 rounded-[3rem] bg-white/[0.01] border border-white/5 hover:border-primary/30 hover:bg-white/[0.03] transition-all duration-700 group text-left"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-black transition-all duration-500">
                  <ind.icon size={24} className="text-primary/60 group-hover:text-black" />
                </div>
                <h3 className="font-display text-2xl font-extrabold text-white mb-4 italic uppercase tracking-tight group-hover:text-primary transition-colors">{ind.name}</h3>
                <p className="text-white/70 text-base leading-relaxed italic">{ind.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* β”€β”€ METHODOLOGY β”€β”€ */}
      <section className="py-24 md:py-56 relative overflow-hidden bg-[#050505] border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(208,255,0,0.02),_transparent_50%)] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fadeUp()} className="text-center mb-32 md:mb-48 max-w-5xl mx-auto">
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary mb-12 block italic">The Protocol</span>
            <h2 className="font-display text-4xl md:text-7xl lg:text-9xl font-black tracking-tighter italic uppercase leading-[0.85] text-white">
              This is how <br />
              <span className="text-white/10 italic">we scale.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="p-12 md:p-14 rounded-[3.5rem] bg-white/[0.01] border border-white/5 hover:border-primary/40 transition-all duration-700 text-center group relative overflow-hidden"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-primary/30 to-transparent group-hover:h-24 transition-all duration-1000" />
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-[2rem] bg-white/5 flex items-center justify-center text-white/10 mb-10 mx-auto group-hover:bg-primary group-hover:text-black transition-all duration-500 border border-white/10 group-hover:border-transparent">
                  <s.icon size={32} strokeWidth={1} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/60 mb-3 block italic">Step {s.num}</span>
                <h3 className="font-display text-2xl md:text-3xl font-extrabold uppercase italic mb-6 tracking-tight text-white group-hover:text-primary transition-colors">{s.title}</h3>
                <p className="text-[11px] md:text-[13px] text-white/60 font-black uppercase tracking-[0.4em] leading-relaxed italic">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* β”€β”€ CASE STUDY β”€β”€ */}
      <section className="py-24 md:py-48 relative overflow-hidden border-t border-white/5 bg-[#080808]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-24">
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary mb-10 block italic">Proof of Work</span>
            <h2 className="font-display text-4xl md:text-8xl font-black tracking-tighter leading-[0.85] italic uppercase text-white">
              Real Results. <br />
              <span className="text-white/10 italic">Real Scale.</span>
            </h2>
          </div>

          <motion.div
            {...fadeUp()}
            className="max-w-6xl mx-auto rounded-[3rem] overflow-hidden bg-white/[0.01] border border-white/5 relative group hover:border-primary/30 transition-all duration-700"
          >
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="relative h-72 lg:h-full lg:col-span-2 overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10">
                <img
                  src={sigma22}
                  alt="Sigmalabs AI"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-2000 opacity-60 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent lg:bg-none" />
              </div>

              <div className="p-10 lg:p-16 lg:col-span-3 flex flex-col justify-center">
                <div className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-6 italic">AI E-commerce Scale</div>
                <h2 className="font-display text-3xl lg:text-5xl font-black text-white mb-8 tracking-tighter leading-none italic uppercase">
                  The Sigmalabs <br />
                  <span className="text-primary">Story.</span>
                </h2>

                <div className="grid grid-cols-3 gap-4 mb-10">
                  {["+180% Revenue", "4.2x ROAS", "12k New Leads"].map((m, i) => (
                    <div key={i} className="text-center p-4 rounded-2xl bg-white/5 border border-white/5">
                      <div className="text-primary font-black text-lg md:text-xl mb-1">{m.split(' ')[0]}</div>
                      <div className="text-white/30 uppercase text-[8px] font-black tracking-widest">{m.split(' ').slice(1).join(' ')}</div>
                    </div>
                  ))}
                </div>

                <p className="text-white/70 text-lg font-light italic leading-relaxed mb-10">
                  "Ξ ΟΟ‚ Ο‡ΟΞ·ΟƒΞΉΞΌΞΏΟ€ΞΏΞΉΞ®ΟƒΞ±ΞΌΞµ Ξ­Ξ½Ξ± ΟƒΟ…Ξ½Ξ΄Ο…Ξ±ΟƒΞΌΟ Meta Ads ΞΊΞ±ΞΉ Retention Marketing Ξ³ΞΉΞ± Ξ½Ξ± ΞµΞΊΟ„ΞΏΞΎΞµΟΟƒΞΏΟ…ΞΌΞµ Ο„ΞΏ Sigmalabs ΟƒΞµ Ξ»ΞΉΞ³ΟΟ„ΞµΟΞΏ Ξ±Ο€Ο 6 ΞΌΞ®Ξ½ΞµΟ‚."
                </p>

                <Button size="xl" className="rounded-full px-10 h-16 text-lg font-black group bg-primary text-black hover:bg-white transition-all border-none italic shadow-glow w-full sm:w-auto" asChild>
                  <Link to="/portfolio/sigmalabs-ai" className="flex items-center gap-3">
                    Read Case Study <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* β”€β”€ FAQ β”€β”€ */}
      <section className="py-24 md:py-48 relative bg-[#050505] overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div {...fadeUp()} className="max-w-5xl mx-auto mb-20">
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary mb-12 block italic">Knowledge</span>
            <h2 className="font-display text-5xl md:text-8xl lg:text-9xl font-black text-white mb-16 italic uppercase tracking-tighter leading-[0.85]">
              Common <br className="md:hidden" />
              <span className="text-white/10 italic">Questions.</span>
            </h2>
          </motion.div>
          <div className="max-w-4xl mx-auto text-left">
            <FAQAccordion items={faqs} dark />
          </div>
        </div>
      </section>

      {/* β”€β”€ FINAL CTA β”€β”€ */}
      <section className="py-24 md:py-64 relative bg-[#050505] overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,_rgba(208,255,0,0.1),transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div {...fadeUp()}>
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary mb-12 block italic">Ready to Scale?</span>
            <h2 className="font-display text-5xl md:text-9xl font-black tracking-tighter italic uppercase leading-[0.85] mb-20 px-4 text-white">
              Ξ‘Ο‚ ΞΌΞµΞ³Ξ±Ξ»ΟΟƒΞΏΟ…ΞΌΞµ <br />
              <span className="text-primary italic animate-glow">ΞΌΞ±Ξ¶Ξ―.</span>
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-24 max-w-4xl mx-auto">
              <Button size="xl" className="w-full sm:w-auto rounded-full px-16 md:px-24 h-24 md:h-32 text-2xl md:text-4xl font-black group bg-primary text-black hover:bg-white transition-all border-none italic shadow-glow-strong" asChild>
                <Link to="/contact">
                  Strategy Call <ArrowRight className="ml-3 group-hover:translate-x-3 transition-transform inline" size={28} />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="w-full sm:w-auto rounded-full px-16 md:px-24 h-24 md:h-32 text-2xl md:text-4xl font-black border-white/10 hover:bg-white hover:text-black transition-all italic text-white" asChild>
                <Link to="/portfolio">Ξ”ΞµΟ‚ Ο„Ξ± ΞΟΞ³Ξ± ΞΌΞ±Ο‚</Link>
              </Button>
            </div>

            <p className="text-xl md:text-2xl font-black text-white/20 italic tracking-[0.5em] uppercase">
              No pressure. Just high-performance.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Growth;
