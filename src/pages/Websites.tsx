import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Code, Globe, Monitor, ArrowRight, Palette, Zap, TrendingUp, Rocket,
  Paintbrush, Smartphone, Search, BarChart3, PenTool, CheckSquare,
  Layers, Target, Wrench, HelpCircle, CheckCircle2, ShieldCheck,
  Cpu, Layout, Sparkles, MousePointer2, ExternalLink, Server, Database,
  Terminal, Component, Box, Cpu as CpuIcon, Container, MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion from "@/components/FAQAccordion";
import LabBackground from "@/components/LabBackground";
import Magnetic from "@/components/Magnetic";

/* β”€β”€β”€ Animation helpers β”€β”€β”€ */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as any },
});

/* β”€β”€β”€ Next-Gen Architecture (Common Features) β”€β”€β”€ */
const nextGen = [
  {
    icon: Layout,
    title: "100% Custom Design",
    desc: "ΞΞ±Ξ½Ξ­Ξ½Ξ± template, ΞΊΞ±Ξ½Ξ­Ξ½Ξ± page builder. Ξ£Ο‡ΞµΞ΄ΞΉΞ±ΟƒΞΌΞ­Ξ½ΞΏ Ξ±Ο€Ο Ο„ΞΏ ΞΌΞ·Ξ΄Ξ­Ξ½ Ο€Ξ¬Ξ½Ο‰ ΟƒΟ„ΞΏ brand, Ο„ΞΏ ΞΊΞΏΞΉΞ½Ο ΞΊΞ±ΞΉ Ο„ΞΏΟ…Ο‚ ΟƒΟ„ΟΟ‡ΞΏΟ…Ο‚ ΟƒΞΏΟ….",
    badge: "Unique UI",
    color: "hsl(72 62% 58%)"
  },
  {
    icon: Zap,
    title: "Ξ‘ΟƒΟ„ΟΞ±Ο€ΞΉΞ±Ξ―Ξ± Ξ¤Ξ±Ο‡ΟΟ„Ξ·Ο„Ξ±",
    desc: "Optimized performance, ΞΊΞ¬Ο„Ο‰ Ξ±Ο€Ο 2'' load time. Ξ“ΞΉΞ±Ο„Ξ― ΞΊΞ¬ΞΈΞµ Ξ΄ΞµΟ…Ο„ΞµΟΟΞ»ΞµΟ€Ο„ΞΏ ΞΊΞΏΟƒΟ„Ξ―Ξ¶ΞµΞΉ Ο€ΞµΞ»Ξ¬Ο„ΞµΟ‚.",
    badge: "99+ PageSpeed",
    color: "hsl(200 80% 60%)"
  },
  {
    icon: MousePointer2,
    title: "Conversion-First UX",
    desc: "ΞΞ¬ΞΈΞµ section, ΞΊΞ¬ΞΈΞµ CTA, ΞΊΞ¬ΞΈΞµ pixel ΟƒΟ‡ΞµΞ΄ΞΉΞ±ΟƒΞΌΞ­Ξ½ΞΏ Ξ³ΞΉΞ± Ξ½Ξ± ΞΌΞµΟ„Ξ±Ο„ΟΞ­Ο€ΞµΞΉ ΞµΟ€ΞΉΟƒΞΊΞ­Ο€Ο„ΞµΟ‚ ΟƒΞµ Ο€ΞµΞ»Ξ¬Ο„ΞµΟ‚.",
    badge: "ROI Focused",
    color: "hsl(280 70% 65%)"
  },
  {
    icon: ShieldCheck,
    title: "Technical Excellence",
    desc: "Clean code, SEO-ready Ξ±ΟΟ‡ΞΉΟ„ΞµΞΊΟ„ΞΏΞ½ΞΉΞΊΞ® ΞΊΞ±ΞΉ Ξ±ΟƒΟ†Ξ¬Ξ»ΞµΞΉΞ± Ο„ΟΞ±Ο€ΞµΞ¶ΞΉΞΊΞΏΟ ΞµΟ€ΞΉΟ€Ξ­Ξ΄ΞΏΟ… ΟƒΞµ ΞΊΞ¬ΞΈΞµ Ξ³ΟΞ±ΞΌΞΌΞ® ΞΊΟΞ΄ΞΉΞΊΞ±.",
    badge: "Safe & Secure",
    color: "hsl(150 60% 50%)"
  },
];

/* β”€β”€β”€ Deliverables β”€β”€β”€ */
const deliverables = [
  { icon: Paintbrush, title: "Custom Design", desc: "UI/UX ΟƒΟ‡ΞµΞ΄ΞΉΞ±ΟƒΞΌΞ­Ξ½ΞΏ Ξ±Ο€ΞΏΞΊΞ»ΞµΞΉΟƒΟ„ΞΉΞΊΞ¬ Ξ³ΞΉΞ± ΞµΟƒΞ­Ξ½Ξ±. Mood, colors, typography, layout, ΟΞ»Ξ± from scratch." },
  { icon: Smartphone, title: "Responsive Flow", desc: "ΞΞ¬ΞΈΞµ ΟƒΞµΞ»Ξ―Ξ΄Ξ± Ο„Ξ­Ξ»ΞµΞΉΞ± ΟƒΞµ mobile, tablet ΞΊΞ±ΞΉ desktop. Ξ‘Ο€ΟΟΟƒΞΊΞΏΟ€Ο„Ξ· ΞµΞΌΟ€ΞµΞΉΟΞ―Ξ± ΟƒΞµ ΞΊΞ¬ΞΈΞµ ΞΏΞΈΟΞ½Ξ·." },
  { icon: Search, title: "SEO Foundation", desc: "Ξ£Ο‰ΟƒΟ„Ξ® Ξ΄ΞΏΞΌΞ®, meta tags, schema markup ΞΊΞ±ΞΉ sitemap, Ξ­Ο„ΞΏΞΉΞΌΞΏ Ξ³ΞΉΞ± Google Ξ±Ο€Ο Ο„Ξ·Ξ½ Ο€ΟΟΟ„Ξ· ΞΌΞ­ΟΞ±." },
  { icon: BarChart3, title: "Data & Tracking", desc: "Google Analytics 4, conversion tracking ΞΊΞ±ΞΉ event setup. ΞΞ­ΟΞµΞΉΟ‚ Ο„ΞΉ Ξ΄ΞΏΟ…Ξ»ΞµΟΞµΞΉ ΞΊΞ±ΞΉ Ο„ΞΉ ΟΟ‡ΞΉ." },
  { icon: PenTool, title: "Copy Guidance", desc: "Ξ£Ο„ΟΞ±Ο„Ξ·Ξ³ΞΉΞΊΞ® ΞΊΞ±Ο„ΞµΟΞΈΟ…Ξ½ΟƒΞ· Ξ³ΞΉΞ± Ο„Ξ± ΞΊΞµΞ―ΞΌΞµΞ½Ξ±: Ο„ΞΉ Ξ½Ξ± Ξ³ΟΞ¬ΟΞµΞΉΟ‚, Ο€ΞΏΟ ΞΊΞ±ΞΉ Ξ³ΞΉΞ±Ο„Ξ― Ξ³ΞΉΞ± ΞΌΞ­Ξ³ΞΉΟƒΟ„ΞΏ impact." },
  { icon: Cpu, title: "Next-Gen Stack", desc: "Ξ§ΟΞ·ΟƒΞΉΞΌΞΏΟ€ΞΏΞΉΞΏΟΞΌΞµ React & Next.js Ξ³ΞΉΞ± Ο„Ξ·Ξ½ Ο„Ξ±Ο‡ΟΟ„ΞµΟΞ· ΞΊΞ±ΞΉ Ο€ΞΉΞΏ ΟƒΟ„Ξ±ΞΈΞµΟΞ® ΟΞ·Ο†ΞΉΞ±ΞΊΞ® ΞµΞΌΟ€ΞµΞΉΟΞ―Ξ± ΟƒΟ„ΞΏΞ½ ΞΊΟΟƒΞΌΞΏ." },
];

/* β”€β”€β”€ Packages β”€β”€β”€ */
const packages = [
  {
    name: "Starter Site",
    price: "From β‚¬1.200",
    label: "For small businesses",
    tagline: "Ξ“ΞΉΞ± ΞµΟ€ΞΉΟ‡ΞµΞΉΟΞ®ΟƒΞµΞΉΟ‚ Ο€ΞΏΟ… ΞΈΞ­Ξ»ΞΏΟ…Ξ½ Ξ­Ξ½Ξ± ΟƒΟ‰ΟƒΟ„Ο ΞΎΞµΞΊΞ―Ξ½Ξ·ΞΌΞ±.",
    bullets: ["1-5 ΟƒΞµΞ»Ξ―Ξ΄ΞµΟ‚ Custom Design", "Mobile-first & SEO-ready", "Contact Form & Map Setup", "Google Analytics Integration", "Ξ Ξ±ΟΞ¬Ξ΄ΞΏΟƒΞ· ΟƒΞµ 15 Ξ·ΞΌΞ­ΟΞµΟ‚"],
    icon: Monitor
  },
  {
    name: "Growth Engine",
    price: "From β‚¬2.500",
    label: "Most popular. Built for growth",
    tagline: "Ξ“ΞΉΞ± ΞµΟ€ΞΉΟ‡ΞµΞΉΟΞ®ΟƒΞµΞΉΟ‚ Ο€ΞΏΟ… ΞΈΞ­Ξ»ΞΏΟ…Ξ½ Ο€Ο‰Ξ»Ξ®ΟƒΞµΞΉΟ‚, ΟΟ‡ΞΉ ΞΌΟΞ½ΞΏ Ο€Ξ±ΟΞΏΟ…ΟƒΞ―Ξ±.",
    bullets: ["5-12 ΟƒΞµΞ»Ξ―Ξ΄ΞµΟ‚ + Landing Pages", "Conversion-Optimized UX", "Blog / CMS Integration", "Advanced Funnel Tracking", "Copy Strategy Guidance"],
    featured: true,
    icon: TrendingUp
  },
  {
    name: "Scale System",
    price: "Custom Quote",
    label: "For serious scale",
    tagline: "Ξ“ΞΉΞ± brands Ο€ΞΏΟ… ΞΈΞ­Ξ»ΞΏΟ…Ξ½ ΞΏΞ»ΞΏΞΊΞ»Ξ·ΟΟ‰ΞΌΞ­Ξ½ΞΏ ΞΏΞΉΞΊΞΏΟƒΟΟƒΟ„Ξ·ΞΌΞ±.",
    bullets: ["Custom Web Application", "E-commerce Ξ® Client Portal", "API Integrations & Automations", "High-Performance Scaling", "ΞΞ»ΞΏΞΊΞ»Ξ·ΟΟ‰ΞΌΞ­Ξ½ΞΏ UX Research"],
    icon: Rocket
  },
];

/* β”€β”€β”€ FAQ β”€β”€β”€ */
const faqs = [
  { question: "Ξ ΟΟƒΞΏ ΞΊΞΏΟƒΟ„Ξ―Ξ¶ΞµΞΉ Ξ­Ξ½Ξ± custom website;", answer: "Ξ¤ΞΏ ΞΊΟΟƒΟ„ΞΏΟ‚ ΞµΞΎΞ±ΟΟ„Ξ¬Ο„Ξ±ΞΉ Ξ±Ο€Ο Ο„ΞΉΟ‚ Ξ±Ξ½Ξ¬Ξ³ΞΊΞµΟ‚ ΞΊΞ±ΞΉ Ο„ΞΏ scope Ο„ΞΏΟ… project. Ξ¤Ξ± Starter sites ΞΎΞµΞΊΞΉΞ½ΞΏΟΞ½ Ξ±Ο€Ο β‚¬1.200, ΞµΞ½Ο Ο€ΞΉΞΏ ΟƒΟΞ½ΞΈΞµΟ„Ξ± ΟƒΟ…ΟƒΟ„Ξ®ΞΌΞ±Ο„Ξ± ΰ¤—ΰ¥ΰ¤°ΰ¥‹ΰ¤¥ Ο„ΞΉΞΌΞΏΞ»ΞΏΞ³ΞΏΟΞ½Ο„Ξ±ΞΉ Ξ±Ξ½Ξ¬Ξ»ΞΏΞ³Ξ± ΞΌΞµ Ο„Ξ± integrations ΞΊΞ±ΞΉ Ο„ΞΏ ΞΌΞ­Ξ³ΞµΞΈΞΏΟ‚. ΞΞµΟ„Ξ¬ Ο„ΞΏ brief ΟƒΞΏΟ… ΟƒΟ„Ξ­Ξ»Ξ½ΞΏΟ…ΞΌΞµ ΞΌΞΉΞ± Ο€Ξ»Ξ®ΟΞ· ΞΊΞ±ΞΉ ΞΎΞµΞΊΞ¬ΞΈΞ±ΟΞ· Ο€ΟΞΏΟƒΟ†ΞΏΟΞ¬." },
  { question: "Ξ§ΟΞ·ΟƒΞΉΞΌΞΏΟ€ΞΏΞΉΞµΞ―Ο„Ξµ WordPress Ξ® Templates;", answer: "ΞΟ‡ΞΉ. Ξ£Ο„Ξ· Hustle Labs Ο‡Ο„Ξ―Ξ¶ΞΏΟ…ΞΌΞµ Ο„ΞΏ ΞΌΞ­Ξ»Ξ»ΞΏΞ½. Ξ§ΟΞ·ΟƒΞΉΞΌΞΏΟ€ΞΏΞΉΞΏΟΞΌΞµ custom code (React, Next.js, Tailwind) Ξ³ΞΉΞ± Ξ½Ξ± Ξ΄ΞΉΞ±ΟƒΟ†Ξ±Ξ»Ξ―ΟƒΞΏΟ…ΞΌΞµ ΟΟ„ΞΉ Ο„ΞΏ site ΟƒΞΏΟ… ΞµΞ―Ξ½Ξ±ΞΉ Ο€ΞΉΞΏ Ξ³ΟΞ®Ξ³ΞΏΟΞΏ, Ο€ΞΉΞΏ Ξ±ΟƒΟ†Ξ±Ξ»Ξ­Ο‚ ΞΊΞ±ΞΉ Ο€ΞΉΞΏ ΟΞΌΞΏΟΟ†ΞΏ Ξ±Ο€Ο Ο„ΞΏΞ½ Ξ±Ξ½Ο„Ξ±Ξ³Ο‰Ξ½ΞΉΟƒΞΌΟ." },
  { question: "Ξ ΟΟƒΞΏ Ο‡ΟΟΞ½ΞΏ Ο€Ξ±Ξ―ΟΞ½ΞµΞΉ Ξ· Ο…Ξ»ΞΏΟ€ΞΏΞ―Ξ·ΟƒΞ·;", answer: "ΞΞ½Ξ± Starter site Ξ±Ο€Ξ±ΞΉΟ„ΞµΞ― Ο€ΞµΟΞ―Ο€ΞΏΟ… 2 ΞµΞ²Ξ΄ΞΏΞΌΞ¬Ξ΄ΞµΟ‚, ΞµΞ½Ο Ξ­Ξ½Ξ± ΟƒΟΞ½ΞΈΞµΟ„ΞΏ Growth Engine Ξ® Scale System ΞΌΟ€ΞΏΟΞµΞ― Ξ½Ξ± Ο‡ΟΞµΞΉΞ±ΟƒΟ„ΞµΞ― Ξ±Ο€Ο 4 Ξ­Ο‰Ο‚ 8 ΞµΞ²Ξ΄ΞΏΞΌΞ¬Ξ΄ΞµΟ‚." },
  { question: "Ξ¤ΞΉ Ξ³Ξ―Ξ½ΞµΟ„Ξ±ΞΉ ΞΌΞµΟ„Ξ¬ Ο„ΞΏ Launch;", answer: "Ξ”ΞµΞ½ ΟƒΞµ Ξ±Ο†Ξ®Ξ½ΞΏΟ…ΞΌΞµ ΞΌΟΞ½ΞΏ. Ξ Ξ±ΟΞ­Ο‡ΞΏΟ…ΞΌΞµ ΟƒΟ…Ξ½ΞµΟ‡Ξ® Ο…Ο€ΞΏΟƒΟ„Ξ®ΟΞΉΞΎΞ·, speed optimization ΞΊΞ±ΞΉ Ο„ΞµΟ‡Ξ½ΞΉΞΊΞ® Ο€Ξ±ΟΞ±ΞΊΞΏΞ»ΞΏΟΞΈΞ·ΟƒΞ· Ξ³ΞΉΞ± Ξ½Ξ± Ξ΄ΞΉΞ±ΟƒΟ†Ξ±Ξ»Ξ―ΟƒΞΏΟ…ΞΌΞµ ΟΟ„ΞΉ Ξ· ΞµΟ€Ξ­Ξ½Ξ΄Ο…ΟƒΞ® ΟƒΞΏΟ… Ξ±Ο€ΞΏΞ΄Ξ―Ξ΄ΞµΞΉ ΟƒΟ…Ξ½ΞµΟ‡ΟΟ‚." },
];

/* β”€β”€β”€ Process Protocol (Align with homepage) β”€β”€β”€ */
const processSteps = [
  {
    step: "01",
    title: "Deep Dive",
    desc: "ΞΞ±Ο„Ξ±Ξ»Ξ±Ξ²Ξ±Ξ―Ξ½ΞΏΟ…ΞΌΞµ Ο„ΞΉ Ο€ΟΞ±Ξ³ΞΌΞ±Ο„ΞΉΞΊΞ¬ Ο‡ΟΞµΞΉΞ¬Ξ¶ΞµΟƒΞ±ΞΉ.",
    icon: Search
  },
  {
    step: "02",
    title: "Strategy",
    desc: "ΞΟΞ―Ξ¶ΞΏΟ…ΞΌΞµ Ο„ΞΉ Ξ­Ο‡ΞµΞΉ ΟƒΞ·ΞΌΞ±ΟƒΞ―Ξ±.",
    icon: Target
  },
  {
    step: "03",
    title: "Build",
    desc: "Ξ§Ο„Ξ―Ξ¶ΞΏΟ…ΞΌΞµ Ο„ΞΏ ΟƒΟ‰ΟƒΟ„Ο ΟƒΟΟƒΟ„Ξ·ΞΌΞ±.",
    icon: Code
  },
  {
    step: "04",
    title: "Growth",
    desc: "Ξ’ΞµΞ»Ο„ΞΉΟΞ½ΞΏΟ…ΞΌΞµ ΞΊΞ±ΞΉ ΞµΞΎΞµΞ»Ξ―ΟƒΟƒΞΏΟ…ΞΌΞµ.",
    icon: TrendingUp
  }
];

const Websites = () => {
  const [hasSite, setHasSite] = useState<boolean | null>(null);

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
    window.scrollTo(0, 0);
    document.title = "ΞΞ±Ο„Ξ±ΟƒΞΊΞµΟ…Ξ® Ξ™ΟƒΟ„ΞΏΟƒΞµΞ»Ξ―Ξ΄Ο‰Ξ½ Chania | High-Performance Web Design - Hustle Labs";
    
    // SEO Meta Tags
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Premium ΞΊΞ±Ο„Ξ±ΟƒΞΊΞµΟ…Ξ® ΞΉΟƒΟ„ΞΏΟƒΞµΞ»Ξ―Ξ΄Ο‰Ξ½ ΟƒΟ„Ξ± Ξ§Ξ±Ξ½ΞΉΞ¬. Ξ§ΟΞ·ΟƒΞΉΞΌΞΏΟ€ΞΏΞΉΞΏΟΞΌΞµ Next.js & React Ξ³ΞΉΞ± Ξ±ΟƒΟ„ΟΞ±Ο€ΞΉΞ±Ξ―Ξ± Ο„Ξ±Ο‡ΟΟ„Ξ·Ο„Ξ±, SEO ΞΊΞ±ΞΉ ΞΊΞΏΟΟ…Ο†Ξ±Ξ―Ξ± Ξ±ΞΉΟƒΞΈΞ·Ο„ΞΉΞΊΞ®. Ξ”Ξ·ΞΌΞΉΞΏΟ…ΟΞ³ΞΏΟΞΌΞµ ΟΞ·Ο†ΞΉΞ±ΞΊΞ¬ ΞµΟΞ³Ξ±Ξ»ΞµΞ―Ξ± Ο€ΞΏΟ… Ο†Ξ­ΟΞ½ΞΏΟ…Ξ½ Ξ±Ο€ΞΏΟ„ΞµΞ»Ξ­ΟƒΞΌΞ±Ο„Ξ±.");
    }

    // SEO: Structured Data
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Web Design & Development",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Hustle Labs",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Ξ“Ξ±Ξ»Ξ±Ο„Ξ¬Ο‚, Ξ§Ξ±Ξ½ΞΉΞ¬",
          "addressLocality": "Ξ§Ξ±Ξ½ΞΉΞ¬",
          "addressRegion": "ΞΟΞ®Ο„Ξ·",
          "postalCode": "73100",
          "addressCountry": "GR"
        }
      },
      "areaServed": {
        "@type": "City",
        "name": "Chania"
      },
      "description": "Custom high-performance web design and development services using modern tech stacks like Next.js and React."
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
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
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/80 italic">Web Architecture</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
              className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-12 uppercase italic"
            >
              Growth Engines <br />
              <span className="text-primary block group-hover:scale-[1.02] transition-transform duration-700">disguised as websites.</span>
            </motion.h1>

            <div className="space-y-12 mb-16">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as any }}
                className="font-display text-xl md:text-2xl lg:text-3xl font-medium text-white/50 tracking-tight italic max-w-4xl mx-auto px-4"
              >
                Ξ£Ο„Ξ· Hustle Labs ΟƒΟ‡ΞµΞ΄ΞΉΞ¬Ξ¶ΞΏΟ…ΞΌΞµ ΟΞ·Ο†ΞΉΞ±ΞΊΞ¬ ΞΏΞΉΞΊΞΏΟƒΟ…ΟƒΟ„Ξ®ΞΌΞ±Ο„Ξ± Ο€ΞΏΟ… Ξ»ΞµΞΉΟ„ΞΏΟ…ΟΞ³ΞΏΟΞ½ Ο‰Ο‚ ΞΌΞ·Ο‡Ξ±Ξ½Ξ­Ο‚ Ξ±Ξ½Ξ¬Ο€Ο„Ο…ΞΎΞ·Ο‚. <br className="hidden md:block" />
                <span className="text-white/20">Performance-First Architecture. Built to Scale.</span>
              </motion.p>
              
              <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ duration: 1, delay: 0.3 }}
                 className="flex flex-wrap justify-center gap-x-12 gap-y-2 text-primary font-black uppercase tracking-[0.5em] text-xs md:text-sm italic"
              >
                <span className="flex items-center gap-2"><Layout size={14} /> Custom UI</span>
                <span className="flex items-center gap-2"><Zap size={14} /> Next-Gen Speed</span>
                <span className="flex items-center gap-2"><TrendingUp size={14} /> Conversion Focus</span>
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
                   <Link to="/project-brief?subject=websites">Build my website</Link>
                </Button>
              </Magnetic>
              <Magnetic strength={0.3}>
                <Button variant="outline" size="xl" className="w-full sm:w-auto rounded-full px-12 h-20 text-lg font-black border-white/10 hover:bg-white hover:text-black transition-all italic" asChild>
                   <Link to="/book-call">Book a call</Link>
                </Button>
              </Magnetic>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <motion.div 
          animate={{ y: [0, -20, 0], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-primary/10 blur-[120px] pointer-events-none"
        />
      </section>

      {/* β”€β”€ SECTION 2: TRANSITION (Dark) β”€β”€ */}
      <section className="py-24 md:py-48 relative border-t border-white/5 bg-[#050505] overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.div {...fadeUp()} className="max-w-5xl mx-auto">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-12 block italic">The Hustle Standard</span>
            <h2 className="font-display text-4xl md:text-7xl lg:text-9xl font-black tracking-tighter leading-[0.85] mb-12 italic uppercase text-white">
              Ξ”ΞµΞ½ Ο†Ο„ΞΉΞ¬Ο‡Ξ½ΞΏΟ…ΞΌΞµ sites <br className="hidden md:block" /> Ξ³ΞΉΞ± Ξ½Ξ± Ο…Ο€Ξ¬ΟΟ‡ΞΏΟ…Ξ½. <br />
              <span className="text-white/10 italic">Ξ¤Ξ± Ο†Ο„ΞΉΞ¬Ο‡Ξ½ΞΏΟ…ΞΌΞµ Ξ³ΞΉΞ± Ξ½Ξ± Ξ±Ο€ΞΏΞ΄Ξ―Ξ΄ΞΏΟ…Ξ½.</span>
            </h2>
            <p className="text-xl md:text-3xl text-white/40 font-medium italic leading-relaxed max-w-3xl mx-auto px-4">
              ΞΞ¬ΞΈΞµ ΞµΟ€ΞΉΞ»ΞΏΞ³Ξ®, Ξ±Ο€Ο Ο„ΞΏ UI design ΞΌΞ­Ο‡ΟΞΉ Ο„Ξ·Ξ½ Ξ±ΟΟ‡ΞΉΟ„ΞµΞΊΟ„ΞΏΞ½ΞΉΞΊΞ® Ο„ΞΏΟ… ΞΊΟΞ΄ΞΉΞΊΞ±, Ξ³Ξ―Ξ½ΞµΟ„Ξ±ΞΉ ΞΌΞµ Ξ­Ξ½Ξ±Ξ½ ΞΌΟΞ½ΞΏ ΟƒΞΊΞΏΟ€Ο: Ο„ΞΏ Ο„ΞµΞ»ΞΉΞΊΟ Ξ±Ο€ΞΏΟ„Ξ­Ξ»ΞµΟƒΞΌΞ±.
            </p>
          </motion.div>
        </div>
      </section>

      {/* β”€β”€ SECTION 3: NEXT-GEN ARCHITECTURE (Darkified) β”€β”€ */}
      <section className="py-24 md:py-48 relative border-t border-white/5 bg-[#050505] overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary mb-10 block italic">Engine Specs</span>
            <h2 className="font-display text-4xl md:text-8xl font-black tracking-tighter leading-[0.85] italic uppercase text-white">
              Next-Gen <br /> <span className="text-white/10 italic">Architecture.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {nextGen.map((n, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className="group relative bg-white/[0.01] rounded-[3rem] p-10 lg:p-16 border border-white/5 hover:bg-white/[0.03] transition-all duration-700 hover:border-primary/20 overflow-hidden text-left shadow-2xl flex flex-col"
              >
                <div
                  className="absolute -right-20 -top-20 w-64 h-64 rounded-full opacity-0 group-hover:opacity-[0.03] blur-[100px] transition-all duration-1000 pointer-events-none"
                  style={{ background: n.color }}
                />
                <div className="relative z-10 flex-1">
                   <div className="flex items-center justify-between mb-12">
                      <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                         <n.icon size={28} className="text-primary/60 group-hover:text-primary" />
                      </div>
                      <span className="px-4 py-1.5 rounded-full border border-white/5 bg-white/[0.02] text-[10px] font-black uppercase tracking-widest text-white/30 italic group-hover:text-primary/60 transition-colors duration-500">
                        {n.badge}
                      </span>
                   </div>
                   <h3 className="font-display text-3xl md:text-5xl font-black mb-6 leading-none text-white tracking-tighter italic uppercase group-hover:text-primary transition-colors duration-500">{n.title}</h3>
                   <p className="text-white/40 text-lg md:text-xl leading-relaxed italic pr-4">{n.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* β”€β”€ SECTION 4: HUSTLE GROWTH β”€β”€ */}
      <section className="py-24 md:py-48 relative border-t border-white/5 bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,_rgba(208,255,0,0.02),_transparent_50%)] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
           <motion.div {...fadeUp()}>
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary mb-12 block italic">Conversion Stack</span>
              <h2 className="font-display text-4xl md:text-8xl lg:text-[10rem] font-black text-white italic uppercase mb-12 leading-none tracking-tighter">
                Hustle <br className="md:hidden" /> <span className="text-white/10">Growth Engine.</span>
              </h2>
              <p className="text-xl md:text-3xl text-white/40 font-medium italic underline decoration-primary/20 decoration-4 underline-offset-8">Designed to convert. Not just impress.</p>
           </motion.div>
        </div>
      </section>

      {/* β”€β”€ SECTION 5: CHOICE (Dark Comparison) β”€β”€ */}
      <section className="py-24 md:py-48 relative bg-[#050505] border-y border-white/5">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="mb-24">
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary mb-10 block italic">The Difference</span>
            <h2 className="font-display text-4xl md:text-8xl font-black tracking-tighter leading-[0.85] italic uppercase text-white">
              Ξ“ΞΉΞ±Ο„Ξ― Ο„Ξ± Ο€ΞµΟΞΉΟƒΟƒΟΟ„ΞµΟΞ± <br /> <span className="text-white/10 italic">Ξ΄ΞµΞ½ Ξ±Ο€ΞΏΞ΄Ξ―Ξ΄ΞΏΟ…Ξ½.</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto mt-24 overflow-hidden rounded-[3rem] border border-white/5 bg-white/[0.01] shadow-3xl text-left backdrop-blur-sm">
              <div className="grid grid-cols-3 bg-white/[0.02] border-b border-white/5 p-8 md:p-12">
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 italic">Core Factor</div>
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 text-center italic">Generic Site</div>
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-primary text-center italic">Hustle Built</div>
              </div>
              {[
                { feature: "Load Speed", generic: "3-8 seconds", hustle: "< 2 seconds" },
                { feature: "PageScore", generic: "30-60 Score", hustle: "95+ Score" },
                { feature: "UI Design", generic: "Template", hustle: "100% Custom" },
                { feature: "SEO Ready", generic: "Basic", hustle: "Advanced" },
                { feature: "Sales Focus", generic: "Visual Only", hustle: "Data Driven" }
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-3 p-8 md:p-12 border-b border-white/[0.02] last:border-0 hover:bg-white/[0.02] transition-all duration-300 group/row">
                  <div className="text-base font-black text-white italic uppercase tracking-tighter group-hover/row:text-primary transition-colors">{row.feature}</div>
                  <div className="text-white/20 text-sm font-medium italic text-center group-hover/row:text-white/40 transition-colors">{row.generic}</div>
                  <div className="flex justify-center items-center gap-3 text-primary font-black text-sm italic uppercase tracking-widest leading-none">
                    <CheckCircle2 size={18} className="group-hover/row:scale-125 transition-transform duration-500" /> {row.hustle}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* β”€β”€ SECTION 6: EXISTING WEBSITE (AUDIT) β”€β”€ */}
      <section className="py-24 md:py-48 relative bg-[#050505] border-b border-white/5 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white italic uppercase leading-[0.85] mb-12">
              ΞΟ‡ΞµΞΉΟ‚ Ξ®Ξ΄Ξ· <br /> <span className="text-primary italic animate-glow">website;</span>
            </h2>
            <p className="text-xl md:text-3xl text-white/40 font-medium italic max-w-2xl mx-auto mb-24 px-4 leading-relaxed">
              ΞΞ¬ΞΈΞµ pixel Ο€ΟΞ­Ο€ΞµΞΉ Ξ½Ξ± Ξ΄ΞΏΟ…Ξ»ΞµΟΞµΞΉ Ξ³ΞΉΞ± ΞµΟƒΞ­Ξ½Ξ±. <br />
              ΞΟ€ΞΏΟΞΏΟΞΌΞµ Ξ½Ξ± ΟƒΞΏΟ… Ξ΄ΞµΞ―ΞΎΞΏΟ…ΞΌΞµ Ο„ΞΉ Ξ΄ΞµΞ½ Ξ»ΞµΞΉΟ„ΞΏΟ…ΟΞ³ΞµΞ― <br className="hidden md:block" /> ΞΊΞ±ΞΉ Ο€ΟΟ‚ Ξ΄ΞΉΞΏΟΞΈΟΞ½ΞµΟ„Ξ±ΞΉ.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 mb-32 justify-center max-w-4xl mx-auto px-4">
              <button
                onClick={() => setHasSite(true)}
                className={`flex-1 h-40 rounded-[2.5rem] text-xl font-black italic uppercase tracking-widest transition-all border-2 flex flex-col items-center justify-center gap-4
                   ${hasSite === true ? 'bg-primary border-primary text-black shadow-glow-strong scale-105' : 'bg-white/[0.02] border-white/5 hover:border-primary/40 text-white/20'}
                 `}
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary transition-all">
                  <Wrench size={24} className={hasSite === true ? 'text-black' : 'text-primary/40'} /> 
                </div>
                <span className="text-sm font-black tracking-[0.3em]">Audit my website</span>
              </button>
              <button
                onClick={() => setHasSite(false)}
                className={`flex-1 h-40 rounded-[2.5rem] text-xl font-black italic uppercase tracking-widest transition-all border-2 flex flex-col items-center justify-center gap-4
                   ${hasSite === false ? 'bg-primary border-primary text-black shadow-glow-strong scale-105' : 'bg-white/[0.02] border-white/5 hover:border-primary/40 text-white/20'}
                 `}
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary transition-all">
                  <Rocket size={24} className={hasSite === false ? 'text-black' : 'text-primary/40'} /> 
                </div>
                <span className="text-sm font-black tracking-[0.3em]">Start fresh</span>
              </button>
            </div>

            <AnimatePresence mode="wait">
              {hasSite !== null && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  className="p-12 md:p-24 rounded-[3.5rem] bg-white/[0.01] border border-white/5 backdrop-blur-xl shadow-glow text-center max-w-4xl mx-auto"
                >
                  <p className="text-xl md:text-4xl font-black mb-16 italic text-white uppercase tracking-tighter leading-tight">
                    {hasSite
                      ? "ΞΞ± ΞΊΞ¬Ξ½ΞΏΟ…ΞΌΞµ Ξ­Ξ½Ξ± Ο€Ξ»Ξ®ΟΞµΟ‚ SEO & Performance Audit Ξ³ΞΉΞ± Ξ½Ξ± Ξ΄ΞΏΟΞΌΞµ Ξ±ΞΊΟΞΉΞ²ΟΟ‚ Ο„ΞΉ Ο‡ΟΞµΞΉΞ¬Ξ¶ΞµΟ„Ξ±ΞΉ Ξ²ΞµΞ»Ο„Ξ―Ο‰ΟƒΞ·."
                      : "ΞΞ± ΟƒΟ‡ΞµΞ΄ΞΉΞ¬ΟƒΞΏΟ…ΞΌΞµ Ξ±Ο€Ο Ο„ΞΏ ΞΌΞ·Ξ΄Ξ­Ξ½ Ο„Ξ· Ξ΄ΞΏΞΌΞ® Ο€ΞΏΟ… ΞΈΞ± Ο†Ξ­ΟΞµΞΉ Ο„Ξ± Ξ²Ξ­Ξ»Ο„ΞΉΟƒΟ„Ξ± Ξ±Ο€ΞΏΟ„ΞµΞ»Ξ­ΟƒΞΌΞ±Ο„Ξ± Ξ³ΞΉΞ± Ο„ΞΏ brand ΟƒΞΏΟ…."}
                  </p>
                  <Button size="xl" className="rounded-full px-16 h-24 md:h-28 text-2xl font-black group bg-primary text-black shadow-glow-strong italic border-none" asChild>
                    <Link to={hasSite ? "/book-call" : "/project-brief?subject=websites"}>
                      {hasSite ? "ΞΞ»ΞµΞ―ΟƒΟ„Ξµ Ξ”Ο‰ΟΞµΞ¬Ξ½ Audit" : "ΞΞµΞΊΞΉΞ½Ξ®ΟƒΟ„Ξµ Ο„ΞΏ Brief"}
                      <ArrowRight className="ml-3 group-hover:translate-x-3 transition-transform" size={24} />
                    </Link>
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* β”€β”€ SECTION 7: PROCESS β”€β”€ */}
      <section className="py-24 md:py-56 relative bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(208,255,0,0.02),_transparent_50%)] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
           <motion.div {...fadeUp()} className="text-center mb-32 md:mb-48 max-w-5xl mx-auto">
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary mb-12 block italic">The Protocol</span>
            <h2 className="font-display text-4xl md:text-7xl lg:text-9xl font-black tracking-tighter italic uppercase leading-[0.85] text-white">
              This is how <br /> <span className="text-white/10 italic">we build.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {processSteps.map((step, i) => (
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
                  <step.icon size={32} strokeWidth={1} />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-black uppercase italic mb-6 tracking-tight text-white group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-[11px] md:text-[13px] text-white/30 font-black uppercase tracking-[0.4em] leading-relaxed italic">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* β”€β”€ SECTION 9: WHY US (STRONGER) β”€β”€ */}
      <section className="py-24 md:py-48 relative border-t border-white/5 bg-[#050505]">
        <div className="container mx-auto px-4 lg:px-8 text-center">
           <motion.div {...fadeUp()} className="max-w-5xl mx-auto">
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary mb-12 block italic">Deep Insight</span>
              <h2 className="font-display text-4xl md:text-7xl lg:text-9xl font-black text-white italic uppercase mb-24 leading-[0.85] tracking-tighter">
                Ξ“ΞΉΞ±Ο„Ξ― Ο„Ξ± <br /> <span className="text-white/10">Ο€ΞµΟΞΉΟƒΟƒΟΟ„ΞµΟΞ± Ξ±Ο€ΞΏΟ„Ο…Ξ³Ο‡Ξ¬Ξ½ΞΏΟ…Ξ½.</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left max-w-4xl mx-auto">
                 <div className="space-y-8 p-10 rounded-[3rem] bg-white/[0.01] border border-white/5 hover:bg-white/[0.02] transition-all">
                    <h4 className="font-display text-2xl md:text-3xl font-black uppercase italic text-primary tracking-tight">Templates & Over-complication</h4>
                    <p className="text-white/40 italic leading-relaxed text-lg">Ξ¤Ξ± Ο€ΞµΟΞΉΟƒΟƒΟΟ„ΞµΟΞ± sites Ξ²Ξ±ΟƒΞ―Ξ¶ΞΏΞ½Ο„Ξ±ΞΉ ΟƒΞµ Ξ­Ο„ΞΏΞΉΞΌΞ± ΟƒΟ…ΟƒΟ„Ξ®ΞΌΞ±Ο„Ξ± Ο€ΞΏΟ… Ο„Ξ± ΞΊΞ¬Ξ½ΞΏΟ…Ξ½ Ξ±ΟΞ³Ξ¬, Ξ΄Ο…ΟƒΞΊΞ―Ξ½Ξ·Ο„Ξ± ΞΊΞ±ΞΉ Ξ―Ξ΄ΞΉΞ± ΞΌΞµ Ο„Ο‰Ξ½ Ξ±Ξ½Ο„Ξ±Ξ³Ο‰Ξ½ΞΉΟƒΟ„ΟΞ½. Ξ¤ΞΏ scaling Ξ³Ξ―Ξ½ΞµΟ„Ξ±ΞΉ ΞµΟ†ΞΉΞ¬Ξ»Ο„Ξ·Ο‚.</p>
                 </div>
                 <div className="space-y-8 p-10 rounded-[3rem] bg-white/[0.01] border border-white/5 hover:bg-white/[0.02] transition-all">
                    <h4 className="font-display text-2xl md:text-3xl font-black uppercase italic text-primary tracking-tight">Lack of Growth Strategy</h4>
                    <p className="text-white/40 italic leading-relaxed text-lg">ΞΞ½Ξ± Ο‰ΟΞ±Ξ―ΞΏ design Ο‡Ο‰ΟΞ―Ο‚ ΟƒΟ„ΟΞ±Ο„Ξ·Ξ³ΞΉΞΊΞ® conversion ΞµΞ―Ξ½Ξ±ΞΉ Ξ±Ο€Ξ»Ξ¬ ΞΌΞΉΞ± ΟΞ·Ο†ΞΉΞ±ΞΊΞ® Ξ±Ο†Ξ―ΟƒΞ±. Ξ‘Ξ½ Ξ΄ΞµΞ½ Ο…Ο€Ξ¬ΟΟ‡ΞµΞΉ ΟƒΞΊΞΏΟ€ΟΟ‚, Ξ΄ΞµΞ½ Ο…Ο€Ξ¬ΟΟ‡ΞµΞΉ ROI.</p>
                 </div>
              </div>
           </motion.div>
        </div>
      </section>

      {/* β”€β”€ SECTION 10: PRICING β”€β”€ */}
      <section id="packages" className="py-24 md:py-56 relative bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="mb-32">
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary mb-10 block italic">Investment</span>
            <h2 className="font-display text-4xl md:text-8xl font-black tracking-tighter leading-[0.85] italic uppercase text-white">
              Choose your <br /> <span className="text-white/10 italic">Architecture.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
            {packages.map((pkg, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className={`group relative rounded-[4rem] p-12 lg:p-16 flex flex-col transition-all duration-700 hover:-translate-y-4 shadow-3xl border text-left
                  ${pkg.featured ? 'bg-primary/5 border-primary/40' : 'bg-white/[0.01] border-white/5'}
                `}
              >
                {pkg.featured && (
                   <span className="absolute -top-5 left-12 px-6 py-2 rounded-full bg-primary text-black text-[10px] font-black uppercase tracking-[0.4em] italic shadow-glow">High Efficiency</span>
                )}
                <div className="mb-12">
                   <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center text-white/20 mb-10 group-hover:bg-primary group-hover:text-black transition-all">
                      <pkg.icon size={32} />
                   </div>
                   <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4 block italic">{pkg.label}</span>
                   <h3 className="font-display text-4xl font-black mb-4 italic uppercase tracking-tighter text-white">{pkg.name}</h3>
                   <div className="text-5xl font-black text-white italic tracking-tighter mb-10">{pkg.price}</div>
                </div>
                <ul className="space-y-6 mb-20 flex-1">
                  {pkg.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-white/40 text-base font-medium italic group-hover:text-white/60 transition-colors">
                      <CheckCircle2 size={20} className="text-primary mt-0.5 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <Button size="xl" className={`w-full rounded-2xl h-24 text-xl font-black italic uppercase group shadow-2xl border-none ${pkg.featured ? 'bg-primary text-black hover:bg-white' : 'bg-white text-black hover:bg-primary'} transition-all`} asChild>
                   <Link to="/project-brief?subject=websites">Deploy {pkg.name.split(' ')[0]}</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* β”€β”€ SECTION 11: SPEED β”€β”€ */}
      <section className="py-24 md:py-56 relative bg-[#050505] border-y border-white/5 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center max-w-7xl mx-auto">
              <motion.div {...fadeUp()}>
                 <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary mb-12 block italic">Elite Performance</span>
                 <h2 className="font-display text-5xl md:text-8xl lg:text-[10rem] font-black text-white italic uppercase mb-12 leading-[0.85] tracking-tighter">
                   Speed is <br /> <span className="text-white/10 italic">a feature.</span>
                 </h2>
                 <p className="text-xl md:text-3xl text-white font-black mb-12 italic uppercase leading-tight italic">
                    ΞΞΉ Ο‡ΟΞ®ΟƒΟ„ΞµΟ‚ Ξ΄ΞµΞ½ Ο€ΞµΟΞΉΞΌΞ­Ξ½ΞΏΟ…Ξ½. <br />
                    Ξ‘Ξ½ Ο„ΞΏ site ΟƒΞΏΟ… Ξ±ΟΞ³ΞµΞ―, Ο†ΞµΟΞ³ΞΏΟ…Ξ½. <br />
                    <span className="text-white/20">ΞΞ±ΞΉ ΞΌΞ±Ξ¶Ξ― Ο„ΞΏΟ…Ο‚ Ο†ΞµΟΞ³ΞΏΟ…Ξ½ ΞΊΞ±ΞΉ Ο„Ξ± conversions.</span>
                 </p>
                 <div className="flex items-center gap-4 bg-primary/10 border border-primary/20 px-8 py-3 rounded-full inline-flex">
                    <Zap size={20} className="text-primary animate-pulse" />
                    <span className="text-xs font-black uppercase tracking-[0.4em] text-primary italic">100/100 PageSpeed Foundation</span>
                 </div>
              </motion.div>
              <div className="relative aspect-square rounded-[5rem] bg-white/[0.01] border border-white/5 flex flex-col items-center justify-center text-center p-12 overflow-hidden shadow-glow-strong group">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(208,255,0,0.05),transparent_70%)] group-hover:scale-150 transition-all duration-1000" />
                 <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-8xl md:text-[12rem] lg:text-[15rem] font-black text-white italic tracking-tighter relative"
                  >
                    99.
                    <span className="text-primary text-5xl md:text-7xl absolute top-0 -right-8 md:-right-12">9</span>
                 </motion.div>
                 <p className="text-primary font-black uppercase tracking-[0.6em] text-xs md:text-sm mt-12 italic">Verified Performance</p>
              </div>
           </div>
        </div>
      </section>

      {/* β”€β”€ SECTION 12: PROJECTS β”€β”€ */}
      <section className="py-24 md:py-64 relative bg-[#050505]">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
           <div className="text-center mb-32 max-w-5xl mx-auto">
             <motion.div {...fadeUp()}>
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary mb-12 block italic">Deployment Gallery</span>
              <h2 className="font-display text-4xl md:text-8xl lg:text-9xl font-black tracking-tighter italic uppercase leading-none mb-10 text-white">
                Built to <br /> <span className="text-white/10 italic">Perform.</span>
              </h2>
              <p className="text-xl md:text-3xl font-black text-white/20 italic uppercase tracking-tighter">Real businesses. Exponential results.</p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 max-w-7xl mx-auto">
            {[
              { title: "Harmony Apartments", category: "Hospitality Tech", image: "/images/harmony-apartments.jpg", slug: "harmony-apartments" },
              { title: "Sigmalabs AI", category: "Agentic AI & Commerce", image: "/images/sigmalabs.jpg", slug: "sigmalabs-ai" },
              { title: "Liv Tours & Transfers", category: "Tourism & Transfers", image: "/images/liv-tours-main.png", slug: "liv-tours-transfers" }
            ].map((cs, i) => (
              <motion.div
                key={cs.slug}
                {...fadeUp(i * 0.15)}
                className={i === 1 ? "md:pt-32" : i === 2 ? "md:pt-64" : ""}
              >
                 <Link to={`/portfolio/${cs.slug}`} className="group cursor-pointer block">
                    <div className="relative aspect-[16/11] overflow-hidden rounded-[3rem] md:rounded-[4rem] border border-white/5 mb-10 group-hover:border-primary/40 transition-all duration-1000 shadow-3xl bg-white/5">
                       <img src={cs.image} alt={cs.title} className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                    </div>
                    <h4 className="font-display text-2xl md:text-4xl font-black text-white italic uppercase mb-3 tracking-tighter group-hover:text-primary transition-colors">{cs.title}</h4>
                    <p className="text-primary text-[10px] md:text-xs font-black uppercase tracking-[0.5em] italic leading-tight">{cs.category}</p>
                 </Link>
              </motion.div>
            ))}
          </div>
          <div className="mt-48 text-center">
            <Button variant="outline" size="xl" className="rounded-full px-16 h-24 text-xl font-black border-white/10 hover:bg-white hover:text-black transition-all italic uppercase tracking-widest shadow-xl" asChild>
               <Link to="/portfolio">Explore all projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* β”€β”€ SECTION 13: DELIVERABLES β”€β”€ */}
      <section className="py-24 md:py-56 relative border-t border-white/5 bg-[#050505] overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-32">
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary mb-12 block italic">Inclusions</span>
            <h2 className="font-display text-4xl md:text-8xl font-black tracking-tighter leading-[0.85] italic uppercase text-white">
              Ξ¤ΞΉ <br className="md:hidden" /> <span className="text-white/10 italic">Ο€ΞµΟΞΉΞ»Ξ±ΞΌΞ²Ξ¬Ξ½ΞµΟ„Ξ±ΞΉ.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {deliverables.map((d, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.08)}
                className="p-12 rounded-[3.5rem] bg-white/[0.01] border border-white/5 group hover:border-primary/40 hover:bg-white/[0.03] transition-all duration-700 text-left shadow-2xl"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-black transition-all duration-500">
                  <d.icon size={28} strokeWidth={1} />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-black text-white mb-6 italic uppercase tracking-tight group-hover:text-primary transition-colors">{d.title}</h3>
                <p className="text-lg text-white/30 leading-relaxed font-medium italic group-hover:text-white/50 transition-colors">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* β”€β”€ SECTION 14: FAQ (Dark) β”€β”€ */}
      <section className="py-24 md:py-48 relative bg-[#050505] overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div {...fadeUp()} className="max-w-5xl mx-auto mb-20">
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary mb-12 block italic">Knowledge</span>
            <h2 className="font-display text-5xl md:text-8xl lg:text-9xl font-black text-white mb-16 italic uppercase tracking-tighter leading-[0.85]">
              Common <br className="md:hidden" /> <span className="text-white/10 italic">Questions.</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto text-left">
            <FAQAccordion items={faqs} dark />
          </div>
        </div>
      </section>

      {/* β”€β”€ SECTION: CHANIA HUB & LOCAL IMPACT β”€β”€ */}
      <section className="py-24 md:py-48 relative border-t border-white/5 bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(208,255,0,0.03),_transparent_50%)] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center max-w-7xl mx-auto">
              <motion.div {...fadeUp()}>
                 <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary mb-10 block italic">Regional Hub Β· Crete</span>
                 <h2 className="font-display text-5xl md:text-8xl font-black text-white mb-12 leading-[0.85] tracking-tighter italic uppercase">
                    Ξ§Ο„Ξ―Ξ¶ΞΏΟ…ΞΌΞµ Ο„ΞΏ <br /> <span className="text-white/10 italic">Ξ¨Ξ·Ο†ΞΉΞ±ΞΊΟ ΞΞ­Ξ»Ξ»ΞΏΞ½.</span>
                 </h2>
                 <p className="text-xl md:text-2xl text-white/40 leading-relaxed max-w-xl italic mb-12">
                    Ξ— Hustle Labs ΞµΞ΄ΟΞµΟΞµΞΉ ΟƒΟ„Ξ± Ξ§Ξ±Ξ½ΞΉΞ¬ ΞΊΞ±ΞΉ ΞΊΞ±Ο„Ξ±Ξ½ΞΏΞµΞ― Ο„ΞΉΟ‚ ΞΉΞ΄ΞΉΞ±ΞΉΟ„ΞµΟΟΟ„Ξ·Ο„ΞµΟ‚ Ο„Ξ·Ο‚ Ο„ΞΏΟ€ΞΉΞΊΞ®Ο‚ Ξ±Ξ³ΞΏΟΞ¬Ο‚. Ξ”Ξ·ΞΌΞΉΞΏΟ…ΟΞ³ΞΏΟΞΌΞµ ΟΞ·Ο†ΞΉΞ±ΞΊΞ¬ ΞµΟΞ³Ξ±Ξ»ΞµΞ―Ξ± Ο€ΞΏΟ… Ξ²ΞΏΞ·ΞΈΞΏΟΞ½ Ο„ΞΉΟ‚ ΞµΟ€ΞΉΟ‡ΞµΞΉΟΞ®ΟƒΞµΞΉΟ‚ Ο„Ξ·Ο‚ ΞΟΞ®Ο„Ξ·Ο‚ Ξ½Ξ± Ξ±Ξ½Ο„Ξ±Ξ³Ο‰Ξ½ΞΉΟƒΟ„ΞΏΟΞ½ ΟƒΞµ Ο€Ξ±Ξ³ΞΊΟΟƒΞΌΞΉΞΏ ΞµΟ€Ξ―Ο€ΞµΞ΄ΞΏ.
                 </p>
                 <div className="space-y-6">
                    {[
                      "Tourism & Hospitality: Ξ•ΞΎΞµΞΉΞ΄ΞΉΞΊΞµΟ…ΞΌΞ­Ξ½Ξ± Booking Engines Ξ³ΞΉΞ± Villas ΟƒΟ„Ξ± Ξ§Ξ±Ξ½ΞΉΞ¬.",
                      "Real Estate: Luxury Platforms Ξ³ΞΉΞ± Ο„ΞΏ premium market Ο„Ξ·Ο‚ ΞΟΞ®Ο„Ξ·Ο‚.",
                      "Local Commerce: E-shops Ο€ΞΏΟ… ΟƒΟ…Ξ½Ξ΄Ξ­ΞΏΟ…Ξ½ Ο„Ξ± Ξ§Ξ±Ξ½ΞΉΞ¬ ΞΌΞµ Ο„Ξ·Ξ½ Ο€Ξ±Ξ³ΞΊΟΟƒΞΌΞΉΞ± Ξ±Ξ³ΞΏΟΞ¬."
                    ].map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-5 group">
                        <div className="w-2 h-2 rounded-full bg-primary mt-3 shrink-0 group-hover:scale-150 transition-transform" />
                        <p className="text-lg text-white/60 font-medium italic group-hover:text-white transition-colors">{bullet}</p>
                      </div>
                    ))}
                 </div>
              </motion.div>

              <motion.div {...fadeUp(0.2)} className="relative p-12 lg:p-20 rounded-[4rem] bg-white/[0.01] border border-white/5 overflow-hidden group shadow-2xl">
                 <div className="absolute top-0 right-0 p-12">
                    <MapPin className="text-primary/10 w-48 h-48 -rotate-12 group-hover:rotate-0 transition-transform duration-2000 ease-out shadow-glow" />
                 </div>
                 <div className="relative z-10">
                    <h3 className="text-3xl md:text-5xl font-black text-white italic uppercase mb-10 tracking-tighter">Ξ¤ΞΏΟ€ΞΉΞΊΞ® <br /> Ξ¥Ο€ΞΏΟƒΟ„Ξ®ΟΞΉΞΎΞ·</h3>
                    <p className="text-xl text-white/40 leading-relaxed mb-12 italic pr-8">
                       Ξ•Ξ―ΞΌΞ±ΟƒΟ„Ξµ Ξ΄Ξ―Ο€Ξ»Ξ± ΟƒΞ±Ο‚, Ξ±Ο€Ο Ο„Ξ·Ξ½ Ο€ΟΟΟ„Ξ· ΟƒΟ…Ξ½Ξ¬Ξ½Ο„Ξ·ΟƒΞ· ΟƒΟ„ΞΏ Ξ³ΟΞ±Ο†ΞµΞ―ΞΏ ΞΌΞ±Ο‚ ΟƒΟ„Ξ± Ξ§Ξ±Ξ½ΞΉΞ¬ ΞΌΞ­Ο‡ΟΞΉ Ο„ΞΏ Go-Live ΞΊΞ±ΞΉ Ο„ΞΏ ΟƒΟ…Ξ½ΞµΟ‡Ξ® optimization. Ξ— ΞµΟ€ΞΉΟ„Ο…Ο‡Ξ―Ξ± ΟƒΞ±Ο‚ ΞµΞ―Ξ½Ξ±ΞΉ ΞΊΞ±ΞΉ Ξ΄ΞΉΞΊΞ® ΞΌΞ±Ο‚ ΞµΟ€ΞΉΟ„Ο…Ο‡Ξ―Ξ±.
                    </p>
                    <div className="inline-flex flex-col gap-2">
                       <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] italic mb-2">Primary Location</span>
                       <span className="text-lg font-black text-white italic uppercase tracking-widest">Ξ“Ξ±Ξ»Ξ±Ο„Ξ¬Ο‚, Ξ§Ξ±Ξ½ΞΉΞ¬, ΞΟΞ®Ο„Ξ·</span>
                    </div>
                 </div>
              </motion.div>
           </div>
        </div>
      </section>

      {/* β”€β”€ SECTION 15: FINAL CTA β”€β”€ */}
      <section className="py-24 md:py-64 relative bg-[#050505] overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,_rgba(208,255,0,0.1),transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div {...fadeUp()}>
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary mb-12 block italic">Ready for Launch</span>
            <h2 className="font-display text-5xl md:text-9xl font-black tracking-tighter italic uppercase leading-[0.85] mb-20 px-4 text-white">
              ΞΟ„ΞΏΞΉΞΌΞΏΟ‚ Ξ³ΞΉΞ± <br /> <span className="text-primary italic animate-glow">Ξ±Ο€ΞΏΞ³ΞµΞ―Ο‰ΟƒΞ·;</span>
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-24 max-w-4xl mx-auto">
              <Button size="xl" className="w-full sm:w-auto rounded-full px-16 md:px-24 h-24 md:h-32 text-2xl md:text-4xl font-black group bg-primary text-black hover:bg-white transition-all border-none italic shadow-glow-strong" asChild>
                <Link to="/project-brief?subject=websites">
                  Build my website
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="rounded-full px-16 md:px-24 h-24 md:h-32 text-2xl md:text-4xl font-black border-white/10 hover:bg-white hover:text-black transition-all italic text-white" asChild>
                <Link to="/book-call">Book a call</Link>
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

export default Websites;
