import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, MapPin, Coffee, Wifi, Armchair, Lightbulb, Monitor, Users, Video,
  GraduationCap, Presentation, Mic, PenLine, CalendarDays, Clock, UserCheck,
  Tv, MessageSquare, CheckCircle2, BookOpen, Baby, Printer, Paperclip,
  Camera, Clapperboard, X, CreditCard, ShieldCheck, Lock, Pencil
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import FAQAccordion from "@/components/FAQAccordion";
import LabBackground from "@/components/LabBackground";
import hustleSpaceImg from "@/assets/hustlespacenew.jpg";
import spaceWorkshop from "@/assets/space-workshop.jpg";
import spaceEvents from "@/assets/space-events.jpg";
import studioCornerImg from "@/assets/studio-corner.png";

/* ── Data ── */


const passes = [
  {
    title: "Day Access",
    price: "25€ / day",
    stripeUrl: "https://buy.stripe.com/YOUR_DAY_ACCESS_LINK",
    desc: "Single-day infrastructure access for founders and creators who need a high-performance environment.",
    bullets: [
      "Access 09:00 – 19:00",
      "Fiber Internet & Professional Stationery",
      "Premium Coffee & Lab Snacks",
      "Ergonomic Workspace Architecture",
      "Access to Creative Community",
    ],
  },
  {
    title: "Weekly Sprint",
    price: "85€ / week",
    stripeUrl: "https://buy.stripe.com/YOUR_WEEKLY_LINK",
    desc: "A full week of focus. Ideal for finishing projects or intense strategy sprints.",
    bullets: [
      "5 Consecutive Days Access",
      "Dedicated High-Speed Setup",
      "Meeting Room Priority",
      "Premium Amenities Access",
      "Lab Member Vibe",
    ],
  },
  {
    title: "Monthly Resident",
    price: "150€ / month",
    stripeUrl: "https://buy.stripe.com/YOUR_MONTHLY_LINK",
    desc: "Your home base. A dedicated spot in the Lab for those building the future.",
    bullets: [
      "Unlimited Access (Mon–Fri)",
      "Dedicated Personal Desk",
      "Meeting Room Credits",
      "Exclusive Community Events",
      "Priority Access to Studio",
    ],
  },
  {
    title: "Elite Member",
    price: "180€ / month",
    stripeUrl: "https://buy.stripe.com/YOUR_ELITE_LINK",
    desc: "Full integration into the Hustle ecosystem. The Lab, the community, and the knowledge.",
    bullets: [
      "All Resident Privileges",
      "Full Academy Workshops Access",
      "Hustle Labs Premium Content",
      "Strategic 1-on-1 Sessions",
      "Priority Beta Access",
    ],
  },
];

const amenities = [
  { icon: Wifi, label: "Ultra-Fiber internet" },
  { icon: Coffee, label: "Specialty coffee" },
  { icon: Pencil, label: "Stationery & Supplies" },
  { icon: Tv, label: "Presentation displays" },
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
  { question: "What is the Lab capacity?", answer: "We maintain a strict limit of 20 builders to ensure privacy and focus. Every spot is designed for performance." },
  { question: "Can I book for hourly sessions?", answer: "The Meeting Zone is available for hourly bookings (min. 2 hours). The Creator Lab is booked in half-day slots." },
  { question: "Can I host my own event?", answer: "Yes. We provide the infrastructure and the vibe. You bring the value. We also offer strategic promotion for selected partners." },
  { question: "Is there a trial period?", answer: "We suggest starting with a Day Access. If you feel the vibe, we can upgrade you to a Monthly and deduct the day pass cost." },
  { question: "How do I secure my spot?", answer: "Choose your pass and complete the payment protocol. You'll receive arrival instructions immediately." },
];




/* ── Component ── */

const HustleSpace = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPass, setSelectedPass] = useState<any>(null);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
  };

  const stagger = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    },
    viewport: { once: true }
  };

  const openModal = (pass: any) => {
    setSelectedPass(pass);
    setIsModalOpen(true);
    setCurrentStep(1);
  };

  const handleNext = () => setCurrentStep(prev => prev + 1);
  const handleBack = () => setCurrentStep(prev => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open Stripe Checkout in new tab
    window.open(selectedPass?.stripeUrl, '_blank');
    handleNext();
  };

  const handlePayment = () => {
    handleNext();
  };

  const scrollToPasses = () => {
    document.getElementById("passes")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-primary selection:text-black overflow-x-hidden">
      <LabBackground />
      
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(208,255,0,0.03),transparent_70%)] pointer-events-none" />

      {/* ─── Hero ─── */}
      <PageHero
        size="large"
        label="THE INFRASTRUCTURE"
        icon={MapPin}
        floatingIcons={[Coffee, Wifi, Armchair, Lightbulb, Pencil, Users, Video, GraduationCap]}
        title={<>Hustle <span className="text-primary italic">Space.</span></>}
        description="A high-performance workspace in Chania designed for deep work, strategic collaboration, and premium content creation. Not just a coworking space—a hub for builders."
      >
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
          <Button size="xl" className="w-full sm:w-auto rounded-full px-12 h-20 text-xl font-black group bg-primary text-black hover:bg-white transition-all border-none italic shadow-glow" onClick={scrollToPasses}>
            Access the Lab
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="xl" className="w-full sm:w-auto rounded-full px-12 h-20 text-xl font-black border-white/10 hover:bg-white hover:text-black transition-all italic" asChild>
            <Link to="/contact">Book for events</Link>
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 0.8 }}
          className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-2 text-[10px] font-black uppercase tracking-[0.5em] italic text-white/50"
        >
          <span>Deep Work</span>
          <span>Creative Content</span>
          <span>Live Strategy</span>
        </motion.div>
      </PageHero>



      {/* ─── Bento Grid (The Lab Sections) ─── */}
      <section className="py-32 md:py-48 relative z-10 border-t border-white/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mb-24">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-8 block italic">THE ENVIRONMENT</span>
            <h2 className="font-display text-4xl md:text-7xl font-normal tracking-normal leading-[1.1] mb-12 italic uppercase">
              Designed for <br />
              <span className="text-gradient">high-output work.</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/40 font-medium italic max-w-2xl leading-relaxed">
              Every corner of the Lab is intentional. From high-speed fiber connectivity to ergonomic setups and dedicated content zones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-7xl mx-auto auto-rows-[320px]">
            {/* 1. Coworking & Passes (Large/Tall) */}
            <motion.div
              {...fadeInUp}
              className="group relative md:col-span-6 md:row-span-2 rounded-[3.5rem] overflow-hidden glass-card flex flex-col justify-end p-12 shadow-2xl"
            >
              <img src={hustleSpaceImg} alt="Coworking" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 group-hover:opacity-50 transition-all duration-1000 grayscale" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-black transition-all">
                  <Coffee size={32} />
                </div>
                <h3 className="font-display text-4xl font-black text-white mb-4 italic uppercase tracking-tighter">Coworking Access</h3>
                <p className="text-white/40 text-lg mb-8 leading-relaxed max-w-sm italic">The infrastructure you need to execute. Fiber internet, premium setup, and the right silence.</p>
                <div onClick={scrollToPasses} className="inline-flex items-center gap-3 text-xs font-black text-primary uppercase tracking-[0.4em] cursor-pointer hover:text-white transition-colors italic">
                  Explore Passes <ArrowRight size={18} />
                </div>
              </div>
            </motion.div>

            {/* 2. Meeting & Events (Wide) */}
            <motion.div
              {...fadeInUp} transition={{ delay: 0.1 }}
              className="group relative md:col-span-6 md:row-span-1 rounded-[3rem] overflow-hidden glass-card flex flex-col justify-end p-10 shadow-xl"
            >
              <img src={spaceEvents} alt="Meetings" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 group-hover:opacity-40 transition-all duration-1000 grayscale" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[9px] font-black uppercase tracking-[0.4em] text-primary mb-4 inline-block italic">STRATEGY HUB</span>
                    <h3 className="font-display text-3xl font-black text-white mb-2 italic uppercase tracking-tighter">Meeting Zone</h3>
                    <p className="text-white/40 text-sm max-w-md italic">Optimized for board meetings, client presentations, and intense brainstorming sessions.</p>
                  </div>
                  <div className="hidden sm:flex w-16 h-16 rounded-full border border-white/10 bg-white/5 items-center justify-center cursor-pointer group-hover:bg-white group-hover:text-black transition-all">
                    <Link to="/contact">
                      <ArrowRight size={24} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 3. Workshops (Regular) */}
            <motion.div
              {...fadeInUp} transition={{ delay: 0.2 }}
              className="group relative md:col-span-3 md:row-span-1 rounded-[3rem] overflow-hidden glass-card flex flex-col justify-end p-10 shadow-lg"
            >
              <img src={spaceWorkshop} alt="Training" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 group-hover:opacity-70 transition-all duration-1000 grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
              <div className="relative z-10">
                <h3 className="font-display text-2xl font-black text-white mb-2 italic uppercase tracking-tighter">Training</h3>
                <p className="text-white/40 text-xs italic uppercase tracking-widest font-black">6 Seats available.</p>
              </div>
            </motion.div>

            {/* 4. Content Studio (Regular) */}
            <motion.div
              {...fadeInUp} transition={{ delay: 0.3 }}
              className="group relative md:col-span-3 md:row-span-1 rounded-[3rem] overflow-hidden glass-card flex flex-col justify-end p-10 shadow-lg"
            >
              <img src={studioCornerImg} alt="Content Studio" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 group-hover:opacity-40 transition-all duration-1000 grayscale" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
              <div className="absolute top-6 right-6">
                <span className="px-3 py-1 rounded-full bg-black border border-primary/30 text-primary text-[8px] font-black uppercase tracking-[0.4em] italic z-20">COMING SOON</span>
              </div>
              <div className="relative z-10">
                <h3 className="font-display text-2xl font-black text-white mb-2 italic uppercase tracking-tighter">Creator Lab</h3>
                <p className="text-white/40 text-xs italic uppercase tracking-widest font-black">Podcasts & Vidcasts.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Passes ─── */}
      <section id="passes" className="py-32 md:py-48 relative z-10 bg-[#080808] border-y border-white/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-24">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-8 block italic">CHOOSE YOUR ACCESS</span>
            <h2 className="font-display text-4xl md:text-8xl font-normal italic uppercase leading-[1.1] mb-8">
              Access the <br />
              <span className="text-gradient">Ecosystem.</span>
            </h2>
            <p className="text-primary font-black uppercase tracking-[0.4em] text-sm italic">Limited availability for optimal focus.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
            {passes.map((pass, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="group relative p-12 rounded-[3.5rem] glass-card flex flex-col shadow-2xl"
              >
                <div className="flex items-start justify-between mb-12">
                  <div>
                    <h3 className="font-display text-3xl font-black text-white italic uppercase tracking-tighter mb-2">{pass.title}</h3>
                    <p className="text-white/40 text-sm italic max-w-[240px] leading-relaxed">{pass.desc}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-black text-primary uppercase tracking-[0.5em] mb-2 italic">STARTING AT</p>
                    <p className="text-4xl font-black text-white italic tracking-tighter uppercase">{pass.price}</p>
                  </div>
                </div>

                <div className="h-px w-full bg-white/5 mb-10 group-hover:bg-primary/20 transition-colors" />

                <ul className="space-y-4 mb-12 flex-1">
                  {pass.bullets.map((b, j) => (
                    <li key={j} className="flex items-center gap-4 text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-white/30 italic group-hover:text-white/60 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                      {b}
                    </li>
                  ))}
                </ul>

                <Button 
                  size="xl" 
                  className="w-full rounded-full h-20 text-lg font-black italic uppercase tracking-widest group-hover:bg-primary group-hover:text-black transition-all bg-white text-black"
                  onClick={() => openModal(pass)}
                >
                  Request Access
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Mini CTA - Modern Styled */}
          <motion.div
            {...fadeInUp}
            className="max-w-3xl mx-auto text-center rounded-[3rem] border border-white/5 bg-white/[0.01] p-12 md:p-16 hover:border-primary/20 transition-all duration-700"
          >
            <h4 className="font-display text-2xl font-black text-white uppercase italic tracking-tighter mb-6">Need a custom plan?</h4>
            <p className="text-white/40 text-lg italic mb-10 max-w-xl mx-auto">
              If you have specific team requirements or need the space for long-term production, let's talk about a tailor-made partnership.
            </p>
            <Button variant="outline" size="xl" className="rounded-full px-12 h-20 text-lg font-black italic border-white/10 hover:bg-white hover:text-black transition-all uppercase tracking-widest" asChild>
              <Link to="/contact">Discuss with the Team</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ─── Amenities ─── */}
      <section className="py-32 md:py-48 relative z-10 bg-[#050505]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-24">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-8 block italic">INFRASTRUCTURE</span>
            <h2 className="font-display text-4xl md:text-7xl font-normal italic uppercase leading-[1.1] mb-8">
              The <span className="text-white/20">Specs.</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {amenities.map((a, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.05, duration: 0.6 }}
                className="group flex items-center gap-6 p-8 rounded-[2rem] glass-card shadow-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/20 group-hover:text-primary group-hover:scale-110 transition-all">
                  <a.icon size={22} strokeWidth={1} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 group-hover:text-white transition-colors italic">{a.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-32 md:py-48 relative z-10 border-t border-white/5 bg-[#080808]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-24">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-8 block italic">FREQUENTLY ASKED</span>
            <h2 className="font-display text-4xl md:text-7xl font-normal italic uppercase leading-[1.1]">
              Lab <span className="text-gradient">Protocols.</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqs} dark />
          </div>
        </div>
      </section>

      {/* ─── Purchase Modal ─── */}
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
              className="absolute inset-0 bg-[#050505]/95 backdrop-blur-3xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col items-center z-[101]"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-12 right-12 p-4 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 transition-all z-20"
              >
                <X size={24} />
              </button>

              <AnimatePresence mode="wait">
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="w-full max-w-2xl px-4 py-12"
                  >
                    <div className="text-center mb-16">
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-8 italic">
                        <CreditCard size={12} /> PROTOCOL ACTIVATION
                      </div>
                      <h2 className="font-display text-5xl md:text-7xl font-normal text-white mb-6 uppercase italic tracking-normal leading-[1.1]">Your Details</h2>
                      <p className="text-white/40 text-lg italic">Complete the form to activate your {selectedPass?.title}.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8 bg-white/[0.02] p-12 md:p-20 rounded-[4rem] border border-white/5">
                      <div className="space-y-8">
                        <div className="space-y-4">
                          <label className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 ml-2 italic">FULL NAME</label>
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                            className="w-full px-10 py-7 rounded-[2rem] bg-white/5 border border-white/10 focus:bg-white/10 focus:border-primary/40 transition-all placeholder:text-white/10 text-white outline-none italic text-lg"
                            placeholder="Giannis Papadopoulos"
                          />
                        </div>
                        <div className="space-y-4">
                          <label className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 ml-2 italic">EMAIL ADDRESS</label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                            className="w-full px-10 py-7 rounded-[2rem] bg-white/5 border border-white/10 focus:bg-white/10 focus:border-primary/40 transition-all placeholder:text-white/10 text-white outline-none italic text-lg"
                            placeholder="john@hustle.gr"
                          />
                        </div>
                      </div>

                      <div className="flex items-center gap-4 pt-6">
                        <input type="checkbox" id="terms" required className="w-6 h-6 rounded-lg border-white/10 bg-white/5 text-primary focus:ring-0" />
                        <label htmlFor="terms" className="text-xs text-white/40 italic uppercase tracking-widest font-black">
                          Accept <a href="#" className="text-primary underline">Lab Terms</a>.
                        </label>
                      </div>

                      {/* Order Summary */}
                      <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 flex items-center justify-between">
                        <div>
                          <p className="text-xs font-black uppercase tracking-widest text-white/30 italic mb-1">Selected Plan</p>
                          <p className="text-xl font-black italic uppercase tracking-tighter text-white">{selectedPass?.title}</p>
                        </div>
                        <p className="text-3xl font-black text-primary italic">{selectedPass?.price}</p>
                      </div>

                      <Button type="submit" size="xl" className="w-full rounded-full py-12 text-2xl font-black group bg-primary text-black hover:bg-white transition-all uppercase italic">
                        Πληρωμή μέσω Stripe <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                      </Button>
                      <p className="text-center text-[10px] text-white/20 uppercase tracking-widest italic font-black">Θα μεταφερθείτε με ασφάλεια στο Stripe</p>
                    </form>
                  </motion.div>
                )}

                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center bg-[#0a0a0a] p-16 md:p-32 rounded-[6rem] border border-white/10 max-w-3xl px-8 shadow-glow-strong"
                  >
                    <div className="w-32 h-32 rounded-[2.5rem] bg-primary/10 flex items-center justify-center mx-auto mb-16 border border-primary/20">
                      <CheckCircle2 size={72} className="text-primary" />
                    </div>
                    <h2 className="font-display text-5xl md:text-7xl font-normal text-white mb-8 italic uppercase tracking-normal leading-[1.1]">Μεταφορά στο <span className="text-primary">Stripe.</span></h2>
                    <p className="text-white/40 text-xl mb-12 max-w-lg mx-auto leading-relaxed italic">
                      Ανοίξαμε το Stripe Checkout σε νέο tab. Εάν δεν άνοιξε αυτόματα, πάτησε το κουμπί παρακάτω.
                    </p>
                    <Button
                      onClick={() => window.open(selectedPass?.stripeUrl, '_blank')}
                      size="xl"
                      className="w-full rounded-full py-8 text-xl font-black group bg-primary text-black hover:bg-white transition-all uppercase italic mb-6"
                    >
                      Άνοιγμα Stripe <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                    </Button>
                    <button onClick={() => setIsModalOpen(false)} className="text-[10px] font-black text-white/20 hover:text-white uppercase tracking-[0.6em] italic transition-colors">ΚΛΕΙΣΙΜΟ</button>
                  </motion.div>
                )}

                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center bg-[#0a0a0a] p-16 md:p-32 rounded-[6rem] border border-white/10 max-w-3xl px-8 shadow-glow-strong"
                  >
                    <div className="w-32 h-32 rounded-[2.5rem] bg-primary/10 flex items-center justify-center mx-auto mb-16 border border-primary/20">
                      <CheckCircle2 size={72} className="text-primary" />
                    </div>
                    <h2 className="font-display text-5xl md:text-8xl font-normal text-white mb-8 italic uppercase tracking-normal leading-[1.1]">Ready to <span className="text-primary tracking-normal">Hustle.</span></h2>
                    <p className="text-white/40 text-xl mb-20 max-w-lg mx-auto leading-relaxed italic">
                      Your access to the {selectedPass?.title} has been initialized. Check your inbox for the Lab arrival protocols.
                    </p>
                    <Button onClick={() => setIsModalOpen(false)} variant="outline" size="xl" className="rounded-full px-20 h-24 text-xl font-black uppercase italic tracking-widest border-white/10 hover:bg-white hover:text-black transition-all">
                      Return to Space
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HustleSpace;
