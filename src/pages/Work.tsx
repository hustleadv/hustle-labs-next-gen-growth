import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, Briefcase, TrendingUp,
  BarChart3, Award, Layers, Rocket, Zap,
  CalendarDays, RefreshCcw, LayoutDashboard,
  Bell, Truck, CreditCard, Lock, Smartphone,
  Bot, Cpu, Activity, Handshake, Trophy,
  Monitor, Sparkles, Filter, CheckCircle2, Users,
  MessageSquare, ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import CaseStudyCard from "@/components/CaseStudyCard";
import LabBackground from "@/components/LabBackground";
import PortfolioCard from "@/components/PortfolioCard";
import { useLanguage } from "@/contexts/LanguageContext";
import TOPTRAVEL_HOME from "@/assets/TOPTRAVEL-HOME.png";
import SIGMAEKS from "@/assets/SIGMAEKS.png";
import NKACONSTR from "@/assets/NKACONSTR.png";
import AEGISNESPH from "@/assets/AEGISNESPH.png";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export interface CaseStudy {
  slug: string;
  business: string;
  type: string;
  category: "websites" | "growth" | "ai" | "strategy";
  whatWeBuilt: string;
  outcome: string;
  metric: string;
  challenge: string;
  solution: string;
  features: string[];
  results: { label: string; value: string }[];
  image: string;
  projectUrl?: string;
  themeColor?: string;
  adminPanel?: {
    title: string;
    systemLabel?: string;
    description: string;
    features: { icon: any; title: string; desc: string }[];
    images: string[];
    mobileImages?: string[];
  };
  keyInsight?: {
    title: string;
    body: string;
  };
  testimonial?: {
    quote: string;
    name: string;
    role: string;
  };
  techStack?: string[];
  timeline?: {
    duration: string;
    steps: { name: string; description: string }[];
  };
  aiAgent?: {
    name: string;
    tagline: string;
    description: string;
    mythOrigin?: string;
    image?: string;
    features: { icon: string; title: string; desc: string }[];
  };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "nka-constructions",
    business: "NKA Constructions",
    type: "Κατασκευαστική Εταιρεία",
    category: "websites",
    themeColor: "#c5da4e",
    image: NKACONSTR,
    projectUrl: "https://nkaconstructions.gr/",
    whatWeBuilt: "Premium ιστοσελίδα παρουσίασης κατασκευαστικής εταιρείας με έμφαση στο minimal design και την ανάδειξη των έργων.",
    outcome: "Ψηφιακή Παρουσία",
    metric: "100% Custom",
    challenge: "Η NKA Constructions χρειαζόταν μια ψηφιακή παρουσία που να αντανακλά την ποιότητα και την αξιοπιστία των κατασκευών της. Το ζητούμενο ήταν ένα site που να λειτουργεί ως portfolio υψηλής αισθητικής, επιτρέποντας στους υποψήφιους πελάτες να περιηγηθούν στα έργα της εταιρείας με ευκολία και ταχύτητα.",
    solution: "Σχεδιάσαμε και υλοποιήσαμε μια custom ιστοσελίδα με minimal αισθητική, εστιάζοντας στη φωτογραφία και την καθαρή τυπογραφία. Χρησιμοποιήσαμε Next.js για μέγιστη ταχύτητα και SEO, διασφαλίζοντας ότι η πρώτη εντύπωση του χρήστη είναι αντάξια της ποιότητας των έργων της NKA.",
    features: [
      "Custom UI/UX Design",
      "Project Gallery System",
      "Mobile First Architecture",
      "High Performance (Next.js)",
      "SEO Optimization",
      "Contact & Lead Generation Flow"
    ],
    results: [
      { label: "Design Unique", value: "100%" },
      { label: "Site Speed", value: "99/100" },
      { label: "User Experience", value: "Elite" },
    ],
    techStack: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    timeline: {
      duration: "Παράδοση σε 2 εβδομάδες",
      steps: [
        { name: "Design Phase", description: "Minimal UI/UX σχεδιασμός." },
        { name: "Build", description: "Custom ανάπτυξη με Next.js." },
        { name: "Optimization", description: "Speed & SEO Audit." }
      ]
    }
  },
  {
    slug: "harmony-apartments",
    business: "Harmony Apartments",
    type: "Τουρισμός & Φιλοξενία",
    category: "growth",
    themeColor: "#c5da4e",
    image: "/images/harmony-apartments.jpg",
    projectUrl: "https://harmonyapartments-truehospitality.gr/",
    whatWeBuilt: "Ιστοσελίδα και custom διαχειριστικό κρατήσεων με αυτόματο συγχρονισμό κρατήσεων μεταξύ πλατφορμών (V1).",
    outcome: "Εξοικονόμηση Χρόνου Admin",
    metric: "80%",
    challenge: "Ο διαχειριστής χρειαζόταν έναν τρόπο να διαχειρίζεται τις κρατήσεις από ένα κεντρικό σημείο, χωρίς χειροκίνητη ενημέρωση πολλαπλών πλατφορμών (Booking, Airbnb κ.λπ.). Παράλληλα, ήθελε να μπορεί να αλλάζει εύκολα τις πληροφορίες των διαμερισμάτων στην ιστοσελίδα, να ανεβάζει άρθρα, και όλα αυτά να γίνονται γρήγορα ακόμα και μέσα από το κινητό του.",
    solution: "Δημιουργήσαμε επαγγελματική ιστοσελίδα και custom διαχειριστικό σύστημα (V1) που συγχρονίζει αυτόματα τις κρατήσεις με όλες τις μεγάλες πλατφόρμες. Ο διαχειριστής μπορεί πλέον να αλλάζει πανεύκολα τις τιμές των διαμερισμάτων στην ιστοσελίδα και να διαχειρίζεται όλες τις κρατήσεις από ένα κεντρικό σημείο.",
    features: [
      "Custom Booking Admin (V1)",
      "Επεξεργασία Διαμερισμάτων",
      "Διαχείριση Τιμών από το Admin",
      "Ημερολόγιο Διαθεσιμότητας",
      "Online Πληρωμή Κράτησης",
      "Δημοσίευση Άρθρων & Blog",
      "Real-time Sync Admin ↔ Ιστοσελίδα",
      "Auto Sync Κρατήσεων (Booking, Airbnb, VRBO, Expedia, TripAdvisor)",
      "Διαχείριση απευθείας από το Κινητό"
    ],
    results: [
      { label: "Εξοικονόμηση Χρόνου", value: "80%" },
      { label: "Διπλές Κρατήσεις", value: "0" },
      { label: "Ενιαία Διαχείριση", value: "100%" },
    ],
    adminPanel: {
      title: "Custom Booking Admin",
      description: "Ένα ολοκληρωμένο διαχειριστικό σύστημα που δημιουργήσαμε εξ ολοκλήρου για τα Harmony Apartments. Από ένα σημείο, ο διαχειριστής βλέπει και διαχειρίζεται όλες τις κρατήσεις από Booking.com, Airbnb, VRBO και TripAdvisor ταυτόχρονα, χωρίς να χρειάζεται να ανοίγει κάθε πλατφόρμα ξεχωριστά.",
      features: [
        { icon: <CalendarDays strokeWidth={1.5} className="w-6 h-6" />, title: "Ημερολόγιο Κρατήσεων", desc: "Visual calendar with real-time picture of availability for each property. Color coding per platform." },
        { icon: <RefreshCcw strokeWidth={1.5} className="w-6 h-6" />, title: "Automatic Sync", desc: "Every new reservation from any platform automatically updates the others. Zero double bookings." },
        { icon: <LayoutDashboard strokeWidth={1.5} className="w-6 h-6" />, title: "Dashboard Analytics", desc: "Overview of revenue, occupancy rate and performance per channel in real time." },
        { icon: <Bell strokeWidth={1.5} className="w-6 h-6" />, title: "Notifications", desc: "Immediate notification to administrator for every new booking, cancellation or change." },
        { icon: <Lock strokeWidth={1.5} className="w-6 h-6" />, title: "PIN Security", desc: "Fast and secure login to the management with PIN use, as in banking applications." },
      ],
      images: ["/images/harmony-admin-1.png"],
      mobileImages: ["/images/harmony-admin-2.png"],
    },
    keyInsight: {
      title: "Independence from Third Platforms",
      body: "With this implementation, the customer does not depend on any third party platform for management of their business. The custom admin is fully theirs, can be upgraded with any new functionality, be modified at any time and evolve in parallel with the needs of the business. Additionally, the system is full mobile responsive, offering absolute freedom and easy management directly from mobile, a system that grows with you.",
    },
    techStack: ["React Native (Mobile)", "Next.js", "Node.js", "PostgreSQL", "Supabase", "Custom API Sync", "Tailwind CSS"],
    testimonial: {
      quote: "The management of the apartments and reservations is now done easily from a single point. We definitely forgot about double bookings and, most importantly, we have the total control from our mobile. It literally solved our hands.",
      name: "Giorgos G.",
      role: "Owner, Harmony Apartments"
    },
    timeline: {
      duration: "Delivery in 3 weeks",
      steps: [
        { name: "Discovery", description: "Analysis of needs and strategic planning." },
        { name: "UI/UX Design", description: "Design of interface for admin & site." },
        { name: "Development", description: "Custom development and API integrations." },
        { name: "Launch", description: "Tests, training and Go-Live." }
      ]
    }
  },
  {
    slug: "liv-tours-transfers",
    business: "Liv Tours & Transfers",
    type: "Τουρισμός & Μεταφορές",
    category: "growth",
    themeColor: "#c5da4e",
    image: "/images/liv-tours-main.png",
    projectUrl: "https://liv-tours.com/",
    whatWeBuilt: "Σύστημα Κρατήσεων + Διαχείριση Στόλου + Πολύγλωσση Ιστοσελίδα",
    outcome: "Μηνιαία Έσοδα",
    metric: "4.2x",
    challenge: "The traditional reservation procedures created chaos during the high-season. The customer needed digital upgrade in every level: from fleet management and real-time tracking for tourists, up to the part of cancellations due to unpredictable weather conditions. Also, a direct way of communication and a smart system that suggests personalized tours without the need of human intervention was missing.",
    solution: "We developed a custom website with reservation management and TripHub where the customer sees in real time the status of their reservation and which driver is coming. We implemented an AI weather system that informs the customer about the conditions depending on the day and the destination: if the weather does not agree with the excursion, it displays alerts and suggests alternatives. We added AI virtual assistant (chat button) that answers customer questions based on the content of the website and helps them complete a reservation. Also we created the Customized Tours page with a quiz that helps the customer find the ideal excursion for them.",
    features: [
      "TripHub Real-time Tracker",
      "AI Weather Alerts System",
      "AI Virtual Assistant (Chat)",
      "Custom Tours Quiz",
      "Booking Form & Payments",
      "Fleet & Drivers Management",
      "Multilingual Content",
      "Mobile Friendly Management",
      "Real-time Booking Status"
    ],
    results: [
      { label: "Increase in Bookings", value: "320%" },
      { label: "Flow Improvement", value: "100%" },
      { label: "International Clients", value: "15+" },
    ],
    adminPanel: {
      title: "Fleet & Booking Manager",
      description: "A central system for the management of vehicles, drivers and reservations in real time. TripHub allows the automatic notification of customers, reducing telephone calls to the minimum.",
      features: [
        { icon: <Truck strokeWidth={1.5} className="w-6 h-6" />, title: "Fleet Monitoring", desc: "Monitoring of fleet and availability of vehicles in real time." },
        { icon: <Bell strokeWidth={1.5} className="w-6 h-6" />, title: "AI Weather Notifications", desc: "Automatic customer notification for weather conditions and suggestions for excursion change." },
        { icon: <LayoutDashboard strokeWidth={1.5} className="w-6 h-6" />, title: "TripHub", desc: "Live status of the reservation and driver information for the final customer." },
        { icon: <CreditCard strokeWidth={1.5} className="w-6 h-6" />, title: "Payment Gateway", desc: "Secure payments and automatic issuance of documents." },
      ],
      images: ["/images/liv-tours-main.png"],
    },
    keyInsight: {
      title: "Automation through AI",
      body: "The addition of the AI Weather System and the Virtual Assistant transformed the business from a traditional transport office to a modern digital agency. Now, 60% of questions are answered automatically, while customers feel greater security having access to Triphub for the status of their route.",
    },
    techStack: ["Next.js", "TypeScript", "OpenAI API", "WeatherStack API", "Supabase", "Tailwind CSS"],
    testimonial: {
      quote: "Triphub and the weather system changed the way we communicate with our customers. The trust we build now is on another level.",
      name: "Nikos P.",
      role: "Operations Manager, Liv Tours"
    },
    timeline: {
      duration: "Delivery in 4 weeks",
      steps: [
        { name: "Strategy", description: "Analysis of needs and AI logic design." },
        { name: "Development", description: "Custom development of TripHub and Admin Panel." },
        { name: "AI Integration", description: "Integration of AI Assistant and Weather API." },
        { name: "Go-Live", description: "Launch and drivers training." }
      ]
    }
  },
  {
    slug: "sigmalabs-ai",
    business: "Sigmalabs AI",
    type: "Agentic AI & Engineering",
    category: "ai",
    themeColor: "#c5da4e",
    image: "/images/sigmalabs.jpg",
    projectUrl: "https://sigmalabs.gr/",
    whatWeBuilt: "The first worldwide Agentic AI Command Center for WooCommerce & Shopify. Autonomous management of orders, products and analytics with voice commands and AI Vision.",
    outcome: "Automation Performance",
    metric: "10x",
    challenge: "Ecommerce businesses spend dozens of hours weekly on manual tasks of products, orders and inventory management. Existing AI tools were limited to simple chat, without the ability to execute actual actions within the platforms.",
    solution: "We designed and developed an autonomous AI Agent that connects directly with APIs of WooCommerce and Shopify. The user can give commands in natural language and the AI undertakes to update prices, create descriptions, check inventory and execute complex workflows automatically.",
    features: [
      "AI Chat Assistant (Natural Language)",
      "Voice Commands (Whisper API)",
      "GPT-5 Vision Product Analysis",
      "AI Product Description Generator",
      "SEO-Optimized Ecommerce Copying",
      "Bulk Stock & Price Management",
      "Orders & CRM AI Command Center",
      "Predictive Sales Analytics",
      "AI Social Media Post Generator",
      "GA4 & Klaviyo Integrations",
      "Multi-store Logic (Woo/Shopify)",
      "Deep Thinking Analysis Mode"
    ],
    results: [
      { label: "Execution Speed", value: "10x" },
      { label: "Reduction of Manual Work", value: "90%" },
      { label: "Data Accuracy", value: "100%" },
    ],
    adminPanel: {
      title: "AI Command Center",
      description: "The control environment of Sigmalabs AI offers full visibility to the actions of the Agent. Users can see in real time how the AI interacts with its store, to approve bulk changes and to train the model in new workflows.",
      features: [
        { icon: <Bot strokeWidth={1.5} className="w-6 h-6" />, title: "Autonomous Actions", desc: "The AI does not simply suggest, but executes tasks directly in the database of the store." },
        { icon: <Activity strokeWidth={1.5} className="w-6 h-6" />, title: "Live Activity Feed", desc: "Full log of all actions of the Agent for absolute transparency and control." },
        { icon: <Cpu strokeWidth={1.5} className="w-6 h-6" />, title: "Multi-Store Bridge", desc: "Management of multiple e-shops from different platforms within a common AI interface." },
        { icon: <Lock strokeWidth={1.5} className="w-6 h-6" />, title: "Enterprise Security", desc: "Encrypted connection with APIs of stores and strict access protocols." },
      ],
      images: ["/images/sigmalabs-das.jpg", "/images/sigmalabs-mrsigma.png"],
    },
    keyInsight: {
      title: "From Theory to Practice",
      body: "Sigmalabs AI constitutes the cutting edge of Agentic AI. While most talk about AI, we built a system that 'gets to work'. The ability of the Agent to understand the context of an ecommerce store and act autonomously, unlocks a new era of profitability and scale for merchants.",
    },
    techStack: ["Python", "OpenAI", "Claude", "Gemini", "Node.js", "Redis", "Supabase", "React", "Tailwind CSS"],
    testimonial: {
      quote: "What we built with Sigmalabs is not just a tool, it is the future employee of every e-shop. The ability to execute tasks in WooCommerce and Shopify simultaneously is a game changer.",
      name: "Spyros T. & Vasiliki G.",
      role: "Founders, Sigmalabs AI"
    },
    timeline: {
      duration: "Under continuous development (12+ months R&D)",
      steps: [
        { name: "Design", description: "Design of Agentic architecture." },
        { name: "API Development", description: "Implementation of bridges for WooCommerce & Shopify." },
        { name: "Agent Training", description: "Training of AI in ecommerce scenarios." },
        { name: "Beta Launch", description: "Release to selected enterprise customers." }
      ]
    }
  },
  {
    slug: "aegis-dynamic-security",
    business: "AEGIS Dynamic Security",
    type: "Υπηρεσίες Ασφαλείας",
    category: "growth",
    image: AEGISNESPH,
    projectUrl: "https://aegisdynamicsec.gr/",
    themeColor: "#c5da4e",
    whatWeBuilt: "Εταιρική Ιστοσελίδα + Custom Διαχειριστικό Αγγελιών",
    outcome: "Αιτήσεις Εργασίας",
    metric: "2x",
    challenge: "The company needed a modern and reliable digital presence. But, the biggest problem was the continuous need for finding new personnel and the lack of a central way of creating and managing job postings on their own page.",
    solution: "We developed a premium service presentation website that exudes security and prestige, accompanied by a powerful custom admin. The administrator now has the ability to upload, edit and close job postings in real time, which are synchronized and appear immediately on the website to the candidates.",
    features: [
      "Premium Corporate Site",
      "Custom Job Board",
      "Applications Management",
      "Mobile Friendly Admin",
      "Real-time Sync",
      "PIN Security Access",
      "Content Management",
      "SEO Optimization",
      "Extensible Architecture"
    ],
    results: [
      { label: "Personnel Finding", value: "2x" },
      { label: "Ad Upload", value: "2 min" },
      { label: "Traffic", value: "+150%" },
    ],
    adminPanel: {
      title: "Recruitment & Job Manager",
      description: "The system offers a simple and extremely fast website, with an admin that allows for easy management of CVs. Its architecture is designed to allow future extensions and new features according to the needs of AEGIS.",
      features: [
        { icon: <Briefcase strokeWidth={1.5} className="w-6 h-6" />, title: "Ads Management", desc: "Full control over open job positions with easy upload from mobile or computer." },
        { icon: <LayoutDashboard strokeWidth={1.5} className="w-6 h-6" />, title: "Applications Center", desc: "All CVs are collected and organized in one point for fast assessment." },
        { icon: <RefreshCcw strokeWidth={1.5} className="w-6 h-6" />, title: "Real-time Sync", desc: "Instant update of the website at every upload or editing of an ad from the admin." },
        { icon: <Zap strokeWidth={1.5} className="w-6 h-6" />, title: "Smart Toggle", desc: "Easy and fast transition between the public website and the management environment." },
        { icon: <Layers strokeWidth={1.5} className="w-6 h-6" />, title: "Services Management", desc: "Management of services and content of the website in real time." },
        { icon: <Lock strokeWidth={1.5} className="w-6 h-6" />, title: "PIN Access", desc: "Secure access to the admin with personal PIN for maximum speed and security." },
        { icon: <Smartphone strokeWidth={1.5} className="w-6 h-6" />, title: "Mobile Friendly", desc: "Full mobile responsive design for the website and the admin." },
        { icon: <Rocket strokeWidth={1.5} className="w-6 h-6" />, title: "SEO Optimization", desc: "Automatic optimization of ads for job search engines." },
      ],
      images: ["/images/portal.jpg", "/images/dashboard.jpg"],
      mobileImages: ["/images/aegis-mobile.jpg"],
    },
    keyInsight: {
      title: "Recruitment Simplification",
      body: "AEGIS no longer needs external platforms to find personnel. Their own Career Portal is their main tool, offering absolute organization and professionalism to candidate partners.",
    },
    techStack: ["Next.js", "TypeScript", "Supabase Auth", "PostgreSQL", "Tailwind CSS"],
    testimonial: {
      quote: "The result is truly beautiful and exceeded our expectations! Our new digital presence and the management system are very nice, excellent work!!",
      name: "Georgia Dr.",
      role: "CEO, AEGIS Dynamic Security"
    },
    timeline: {
      duration: "Delivery in 1.5 weeks",
      steps: [
        { name: "Branding", description: "Alignment with corporate identity." },
        { name: "Design", description: "Design of premium corporate presence." },
        { name: "Portal Development", description: "Development of Job Board and Admin Panel." },
        { name: "Go-live", description: "Go-live and SEO indexing." }
      ]
    }
  },
  {
    slug: "skinnera-ike",
    business: "Skinnera IKE",
    type: "Platform & Mobile App",
    category: "websites",
    themeColor: "#c5da4e",
    image: "/images/skinera.png",
    projectUrl: "#",
    whatWeBuilt: "Partners Management Platform + Mobile Tracking App",
    outcome: "Applications for ESPA/DYPA",
    metric: "+250%",
    challenge: "Management of hundreds of partners and monitoring of the course of ESPA/DYPA applications was being done manually, leading to delays and lack of transparency. The business needed a system that motivates partners and offers real-time update to customers.",
    solution: "We created a web app with Flutter and Firebase Realtime Database where the business manages the network of partners and customers. Simultaneously, we developed an Android mobile application (available on Google Play) with OneSignal push notifications, allowing users to receive notifications for new programs, to book appointments with advisors and to monitor their application live.",
    features: [
      "Android App (Google Play)",
      "Flutter Web Operations Hub",
      "OneSignal Real-time Alerts",
      "Booking with Advisors",
      "Personalized ESPA Alerts",
      "Live Application Tracking",
      "Partner & Client CRM",
      "Favorite Programs Logic"
    ],
    results: [
      { label: "Increase in Participation", value: "3x" },
      { label: "Reduction of Admin Time", value: "70%" },
      { label: "Live Updates", value: "100%" },
    ],
    adminPanel: {
      title: "SkinnERA Operations Hub",
      description: "The control center allows SkinnERA to inform users in bulk about new ESPA, Development Law and LEADER programs. The administrators see the appointments booked through the app and update the stages of each application, with the changes appearing instantly on mobile phones of customers.",
      features: [
        { icon: <Bell strokeWidth={1.5} className="w-6 h-6" />, title: "Smart ESPA Alerts", desc: "Immediate notifications for new and upcoming programs before applications close." },
        { icon: <CalendarDays strokeWidth={1.5} className="w-6 h-6" />, title: "Online Appointments", desc: "Booking appointments with special advisor SkinnERA directly through the application." },
        { icon: <Activity strokeWidth={1.5} className="w-6 h-6" />, title: "Live Application Tracker", desc: "Full visibility to the stages of application for the final user in real time." },
        { icon: <Trophy strokeWidth={1.5} className="w-6 h-6" />, title: "Personalized Content", desc: "'Favorites' system and personalized notifications based on interests." },
      ],
      images: ["/images/skinera.png"],
    },
    keyInsight: {
      title: "Closing the Digital Distance",
      body: "SkinnERA managed to turn a bureaucratic procedure into a modern digital experience. The ability of the user to 'have their advisor in their pocket' and to see the progress of their application at any time, created a new level of trust and efficiency in the market of consulting services.",
    },
    techStack: ["Flutter", "Firebase Realtime DB", "OneSignal", "Dart", "Android SDK"],
    testimonial: {
      quote: "The platform gave us a new dynamic. Now our partners have a 'voice' and our customers 'eyes' in the course of their applications. It is the absolute tool for our development.",
      name: "Stelios S.",
      role: "CEO, Skinnera IKE"
    },
    timeline: {
      duration: "Delivery in 5 weeks",
      steps: [
        { name: "Business Logic", description: "System analysis of reward and flow of applications." },
        { name: "UI/UX Design", description: "Design of Platform & Mobile App interface." },
        { name: "Full-Stack Dev", description: "Development of backend and mobile application." },
        { name: "Testing & Launch", description: "Beta testing with partners and Go-live." }
      ]
    }
  },
  {
    slug: "rekrua",
    business: "Rekrua",
    type: "AI HR Platform",
    category: "ai",
    themeColor: "#c5da4e",
    image: "/images/rekrua-main.jpg",
    projectUrl: "https://rekrua.com/",
    whatWeBuilt: "AI HR Platform with Candidate Rating System for smart Hiring",
    outcome: "Screening Time",
    metric: "60% Λιγότερο",
    challenge: "HR teams lost hours in manual screening of CVs and email follow-ups with candidates, without a structured assessment system. The procedure was slow, subjective and tiring, with result good candidates being lost and candidate experience being bad.",
    solution: "We built an AI HR platform with candidate rating system, React frontend and Supabase backend with PostgreSQL and Edge Functions. We used GPT-5.2 Mini for intelligent screening that automates the whole pipeline - from position creation up to candidate assessment. Deployed on Netlify/Vercel for immediate scalability.",
    features: [
      "AI Job Description Builder",
      "Dynamic AI Interview Questions",
      "Reasoning-based Candidate Rating",
      "Candidate Feedback Reports",
      "Multi-tenant Architecture",
      "Application Chat Interface",
      "Shareable Job Links",
      "Free / Pro / Business Plans"
    ],
    results: [
      { label: "Εξοικονόμηση Χρόνου", value: "60%" },
      { label: "Faster Time-to-Hire", value: "2x" },
      { label: "Ghosting", value: "0%" },
    ],
    adminPanel: {
      title: "AI Hiring Command Center",
      description: "The HR dashboard of Rekrua offers full visibility in every job position and candidate. Recruiters see analytics AI scores, reasoning reports and candidate feedback in a single interface: without tabs, without chaos.",
      features: [
        { icon: <Bot strokeWidth={1.5} className="w-6 h-6" />, title: "AI Interview Builder", desc: "Automatic creation of customized questions based on AI for every role and corporate culture." },
        { icon: <Award strokeWidth={1.5} className="w-6 h-6" />, title: "Candidate Scoring", desc: "Reasoning-based candidate assessment with objective criteria and transparent scoring." },
        { icon: <Activity strokeWidth={1.5} className="w-6 h-6" />, title: "Live Pipeline View", desc: "Real-time picture of all candidates and their stages per job position." },
        { icon: <Layers strokeWidth={1.5} className="w-6 h-6" />, title: "Multi-tenant Ready", desc: "Ideal for HR agencies: isolated data per customer in a central system." },
      ],
      images: ["/images/rekrua-das.jpg"],
    },
    keyInsight: {
      title: "Fair Hiring with AI",
      body: "Rekrua solved one of the biggest problems of modern HR: subjectivity. With AI-powered assessment based on reasoning and not on gut feelings, every candidate is treated equally. The feedback report to every candidate eliminates ghosting and builds employer brand that stands out.",
    },
    techStack: ["React", "Supabase", "PostgreSQL", "Edge Functions", "GPT-5.2 Mini", "Netlify", "Vercel"],
    testimonial: {
      quote: "Rekrua changed the way we do hiring. Now every decision is based on data, not on impressions. It is the tool that should have existed earlier.",
      name: "Stavros P.",
      role: "Co-founder, Rekrua"
    },
    timeline: {
      duration: "Ongoing Development",
      steps: [
        { name: "Product Design", description: "Product design of hiring pipeline and AI logic." },
        { name: "AI Development", description: "Integration of OpenAI for interview generation & scoring." },
        { name: "Platform Build", description: "Development of multi-tenant platform." },
        { name: "Beta & Launch", description: "Beta testing and public launch." }
      ]
    }
  },
  {
    slug: "top-travel-greece",
    business: "Top Travel Greece",
    type: "Τουρισμός & Ταξιδιωτικό Πρακτορείο",
    category: "ai",
    themeColor: "#1a6b5a",
    image: TOPTRAVEL_HOME,
    projectUrl: "https://toptravelgreece.com/",
    whatWeBuilt: "Ανακατασκευή ιστοσελίδας, Custom Διαχειριστικό 10 ενοτήτων & Hermes AI Agent 24/7.",
    outcome: "Αυτόματη Εξυπηρέτηση Πελατών",
    metric: "24/7",
    challenge: "Η προηγούμενη ιστοσελίδα της επιχείρησης είχε ξεπεραστεί και δεν εξυπηρετούσε πλέον τον σκοπό της, καθώς το Top Travel Greece διαχειριζόταν κρατήσεις εκδρομών και ενοικίαση οχημάτων μέσω email και τηλεφώνου, χωρίς κεντρικό σύστημα. Ο στόλος οχημάτων, οι εκδρομές, τα blog άρθρα και τα ερωτήματα πελατών απαιτούσαν ώρες χειροκίνητης διαχείρισης: παράλληλα, οι επισκέπτες δεν είχαν τρόπο να λάβουν άμεση βοήθεια, με αποτέλεσμα την απώλεια υποψήφιων πελατών.",
    solution: "Πραγματοποιήσαμε πλήρη ανακατασκευή της προηγούμενης ιστοσελίδας κατόπιν αιτήματος του πελάτη, με στόχο τη δημιουργία μιας premium και σύγχρονης παρουσίας. Αποφασίσαμε να ενισχύσουμε την πλατφόρμα με έξυπνες λειτουργίες: δημιουργήσαμε ένα πλήρες custom διαχειριστικό 10 ενοτήτων και τον Hermes, έναν εξελιγμένο AI Agent που εξυπηρετεί, καθοδηγεί και μετατρέπει επισκέπτες σε πελάτες 24 ώρες το 24ωρο.",
    features: [
      "Premium Website Ανακατασκευή",
      "Custom Διαχειριστικό (10 ενότητες)",
      "Hermes AI Agent 24/7",
      "Διαχείριση Κρατήσεων Εκδρομών & Οχημάτων",
      "Πλήρης Διαχείριση Στόλου",
      "Blog με Magic Format & SEO",
      "AI Vibe Discovery (Quiz Εκδρομών)",
      "Direct Lead Capture μέσω AI",
      "Έξυπνη Πλοήγηση (AI Navigation)",
      "Product Cards με φωτογραφίες & τιμές",
      "Newsletter Signup μέσω AI",
      "Διαχείριση Κουπονιών & Μαρτυριών",
    ],
    results: [
      { label: "Διαθεσιμότητα Εξυπηρέτησης", value: "24/7" },
      { label: "Ενότητες Διαχείρισης", value: "10" },
      { label: "AI Features", value: "6" },
    ],
    adminPanel: {
      title: "Travel Command Center",
      systemLabel: "Custom & Mobile Friendly",
      description: "Ένα ολοκληρωμένο custom κέντρο ελέγχου 10 ενοτήτων με AI αυτοματισμούς, πλήρως βελτιστοποιημένο για κινητά και tablets. Η διαχείριση κρατήσεων, στόλου και περιεχομένου γίνεται πλέον παιχνιδάκι on-the-go, προσφέροντας απόλυτη ελευθερία στον ιδιοκτήτη.",
      features: [
        { icon: <LayoutDashboard strokeWidth={1.5} className="w-6 h-6" />, title: "Dashboard", desc: "Κεντρική οθόνη με στατιστικά εσόδων, ενεργές κρατήσεις, μηνύματα και πρόσφατη δραστηριότητα σε real time." },
        { icon: <CalendarDays strokeWidth={1.5} className="w-6 h-6" />, title: "Bookings", desc: "Διαχείριση κρατήσεων εκδρομών & οχημάτων. Φίλτρα κατάστασης (Επιβεβαιωμένη, Αναμονή, Ακυρωμένη), λεπτομέρειες και total cost." },
        { icon: <Rocket strokeWidth={1.5} className="w-6 h-6" />, title: "Tours & Fleet", desc: "Έξυπνη πύλη εκδρομών και στόλου με AI λειτουργίες που κάνουν την καταχώρηση παιχνιδάκι: κάθε αλλαγή ενημερώνει in real-time την ιστοσελίδα." },
        { icon: <Sparkles strokeWidth={1.5} className="w-6 h-6" />, title: "Blog & Magic Format", desc: "Editor με Magic Format που μετατρέπει απλό κείμενο σε δομημένα άρθρα με drop caps, αυτόματο TOC και premium τυπογραφία." },
        { icon: <Bell strokeWidth={1.5} className="w-6 h-6" />, title: "Inquiries & Newsletter", desc: "Διαχείριση ερωτημάτων Contact Us και tailor-made tours. Newsletter με λίστα συνδρομητών και email campaigns." },
        { icon: <CreditCard strokeWidth={1.5} className="w-6 h-6" />, title: "Κουπόνια & Μαρτυρίες", desc: "Δημιουργία εκπτωτικών κωδικών (ποσοστό ή σταθερό) και διαχείριση 5-star reviews πελατών για trust building." },
      ],
      images: ["/images/toptravel-dashboard.png"],
    },
    keyInsight: {
      title: "Hermes: Έξυπνη Αυτοματοποίηση & Autopilot",
      body: "Ο Hermes AI Agent λειτουργεί ως ένας travel consultant υψηλής ευφυΐας που αυτοματοποιεί πλήρως τη διαδικασία εξυπηρέτησης και τη συλλογή leads. Με λειτουργίες όπως το Context Awareness και το Vibe Discovery, καθοδηγεί τον επισκέπτη στις κατάλληλες επιλογές χωρίς την ανάγκη ανθρώπινης παρέμβασης: το αποτέλεσμα είναι η εξοικονόμηση άνω των 4 ωρών καθημερινής εργασίας για την ομάδα. Πλέον, η επιχείρηση λειτουργεί σε 'autopilot' όσον αφορά την πρώτη επαφή και την πλοήγηση, επιτρέποντας στους ανθρώπους της να εστιάζουν μόνο στις πωλήσεις υψηλής αξίας.",
    },
    techStack: ["Next.js", "TypeScript", "OpenAI API", "Supabase", "PostgreSQL", "Tailwind CSS", "Framer Motion"],
    aiAgent: {
      name: "Hermes AI Agent",
      tagline: "Premium AI Experience | Powered by OpenAI",
      description: "Ο Hermes είναι ο εξελιγμένος ψηφιακός βοηθός του Top Travel Greece, σχεδιασμένος να καλωσορίζει, να καθοδηγεί και να μετατρέπει τους επισκέπτες σε πελάτες 24 ώρες το 24ωρο.",
      mythOrigin: "Εμπνευσμένος από τον Θεό Ερμή, αγγελιοφόρο και προστάτη των ταξιδιωτών. Συμβολίζει την ταχύτητα στην πληροφορία, την ευφυΐα και την ευελιξία στην επικοινωνία.",
      image: "/images/HERMES_AIAGENT.png",
      features: [
        { icon: "🗺️", title: "Έξυπνη Πλοήγηση", desc: "Ο χρήστης λέει \"I want the booking page\" και ο Hermes τον μεταφέρει αυτόματα στη σωστή σελίδα (Contact, Private Tours, Car Rental κ.λπ.) χωρίς να ρωτάει τίποτα." },
        { icon: "🃏", title: "Product Cards", desc: "Όταν ρωτάει για εκδρομές ή αυτοκίνητα, ο Hermes εμφανίζει διαδραστικές κάρτες με φωτογραφία, τιμή και κουμπί \"View Details\". Δεν στέλνει απλό κείμενο." },
        { icon: "🧭", title: "Vibe Discovery", desc: "Αν ο χρήστης δεν ξέρει τι θέλει, ο Hermes τον ρωτάει 3-4 ερωτήσεις (\"Βουνό ή Θάλασσα;\") και στο τέλος προτείνει τις ιδανικές εκδρομές." },
        { icon: "📝", title: "Direct Lead Capture", desc: "Αν ο χρήστης δείξει ενδιαφέρον, ο Hermes συλλέγει Όνομα, Email, Τηλέφωνο και δημιουργεί αυτόματα Inquiry στη βάση δεδομένων." },
        { icon: "📧", title: "Newsletter Signup", desc: "Αν ο χρήστης είναι ευχαριστημένος, ο Hermes του προτείνει το Newsletter. Αν δεχθεί, καταχωρεί το email αυτόματα στη λίστα συνδρομητών." },
        { icon: "📍", title: "Context Awareness", desc: "Ο Hermes ξέρει σε ποια σελίδα βρίσκεται ο χρήστης και προσαρμόζει τον χαιρετισμό και τις προτάσεις (π.χ. στη σελίδα Car Rental, εστιάζει στα αυτοκίνητα)." },
      ],
    },
    testimonial: {
      quote: "Ο Hermes εξυπηρετεί τους πελάτες μας ακόμα και τα μεσάνυχτα. Το διαχειριστικό μας έδωσε πλήρη εικόνα και έλεγχο σε όλες τις κρατήσεις και τον στόλο μας. Είναι σαν να έχουμε extra υπάλληλο που δεν κουράζεται ποτέ.",
      name: "Ομάδα Top Travel Greece",
      role: "Top Travel Greece"
    },
    timeline: {
      duration: "Παράδοση σε 4 εβδομάδες",
      steps: [
        { name: "Discovery & Design", description: "Ανάλυση αναγκών, UI/UX σχεδιασμός ιστοσελίδας & admin." },
        { name: "Website & Admin", description: "Ανάπτυξη ιστοσελίδας και των 10 ενοτήτων του διαχειριστικού." },
        { name: "Hermes AI", description: "Ενσωμάτωση AI Agent με Navigation, Cards, Vibe Discovery & Lead Capture." },
        { name: "Go-Live", description: "Testing, εκπαίδευση ομάδας και Go-Live." }
      ]
    }
  },
  {
    slug: "nka-advisory-ltd",
    business: "NKA Advisory Ltd.",
    type: "Εταιρεία Διαχείρισης Οικονομικών",
    category: "websites",
    themeColor: "#c5da4e",
    image: "/images/nka-advisory.png",
    projectUrl: "https://nkaadvisory.com/",
    whatWeBuilt: "Απλή και γρήγορη ιστοσελίδα παρουσίασης υπηρεσιών.",
    outcome: "Digital Presence",
    metric: "Fast",
    challenge: "Η NKA Advisory χρειαζόταν μια επαγγελματική ψηφιακή ταυτότητα που να αποπνέει εμπιστοσύνη και κύρος, επιτρέποντας στους πελάτες της να ενημερώνονται γρήγορα για τις οικονομικές και συμβουλευτικές υπηρεσίες της.",
    solution: "Σχεδιάσαμε και αναπτύξαμε μια λιτή, γρήγορη και απόλυτα λειτουργική ιστοσελίδα παρουσίασης, εστιάζοντας στην καθαρή τυπογραφία και την εύκολη πλοήγηση σε όλες τις συσκευές.",
    features: [
      "Εταιρική Παρουσίαση",
      "Responsive Design",
      "SEO Optimization",
      "Clean UI/UX",
      "Service Catalog",
      "Contact Integration"
    ],
    results: [
      { label: "Ταχύτητα Φόρτωσης", value: "100/100" },
      { label: "Mobile Optimization", value: "100%" },
      { label: "Επαγγελματικό Κύρος", value: "High" },
    ],
    adminPanel: {
      title: "Content Management",
      description: "Ένα απλό και λειτουργικό σύστημα διαχείρισης περιεχομένου που επιτρέπει στην εταιρεία να ενημερώνει τις υπηρεσίες της και τα στοιχεία επικοινωνίας άμεσα.",
      features: [
        { icon: <Monitor strokeWidth={1.5} className="w-6 h-6" />, title: "Live Preview", desc: "Άμεση προεπισκόπηση των αλλαγών πριν τη δημοσίευση." },
        { icon: <Zap strokeWidth={1.5} className="w-6 h-6" />, title: "Ultra Fast", desc: "Βελτιστοποιημένος κώδικας για μέγιστη ταχύτητα φόρτωσης." },
      ],
      images: ["/images/nka-advisory.png"],
    },
    keyInsight: {
      title: "Complexity is not always the answer",
      body: "Για μια συμβουλευτική εταιρεία οικονομικών, η καθαρότητα και η ταχύτητα είναι τα πάντα. Εστιάσαμε στο να δώσουμε στον χρήστη αυτό που ψάχνει σε λιγότερο από 2 δευτερόλεπτα.",
    },
    techStack: ["React", "Tailwind CSS", "Framer Motion", "SEO Best Practices"],
    testimonial: {
      quote: "Χρειαζόμασταν κάτι γρήγορο και επαγγελματικό χωρίς περιττές περιπλοκές. Η Hustle Labs παρέδωσε ακριβώς αυτό που είχαμε στο μυαλό μας.",
      name: "Νικόλαος Κ.",
      role: "Founder, NKA Advisory Ltd."
    },
    timeline: {
      duration: "Παράδοση σε 1 εβδομάδα",
      steps: [
        { name: "Briefing", description: "Analysis of services and structure." },
        { name: "Design & Build", description: "Clean development and optimization." },
        { name: "Launch", description: "Deployment and SEO indexing." }
      ]
    }
  },
  {
    slug: "olive-nest",
    business: "Olive Nest",
    type: "Executive Villa | Rebranding & Tech",
    category: "ai",
    themeColor: "#556b2f",
    image: "/images/olivenest_hero.png",
    projectUrl: "https://olivenestvilla.gr/",
    whatWeBuilt: "Πλήρες Rebranding, Luxury Website και ο Νέστορας: ένας AI Ψηφιακός Concierge.",
    outcome: "Luxury Guest Experience",
    metric: "24/7",
    challenge: "Η Olive Nest χρειαζόταν μια ταυτότητα που να αντικατοπτρίζει την executive πολυτέλεια της βίλας, καθώς η προηγούμενη εικόνα της ήταν ελλιπής. Παράλληλα, οι ιδιοκτήτες ήθελαν έναν τρόπο να εξυπηρετούν τις ανάγκες των απαιτητικών καλεσμένων τους οποιαδήποτε στιγμή της ημέρας: από κρατήσεις σε εστιατόρια μέχρι οδηγίες για τις ανέσεις της βίλας, χωρίς να απαιτείται η συνεχής φυσική παρουσία τους.",
    solution: "Δημιουργήσαμε μια νέα, premium οπτική ταυτότητα (Rebranding) και αναπτύξαμε μια ιστοσελίδα υψηλής αισθητικής. Στο επίκεντρο της λύσης βρίσκεται ο Νέστορας, ένας εξελιγμένος AI Concierge που προσφέρει προσωποποιημένη εξυπηρέτηση 24/7. Παράλληλα, αναπτύξαμε custom διαχειριστικό σύστημα για την εποπτεία των κρατήσεων και της συντήρησης των εγκαταστάσεων.",
    features: [
      "Exclusive Villa Rebranding",
      "Luxury Web Experience",
      "Νέστορας AI Concierge 24/7",
      "Custom Booking & Maintenance Admin",
      "Digital Guidebook ενσωματωμένο στο AI",
      "Real-time Guest Requests Management",
      "Automated Check-in / Check-out Guidance",
      "Hyper-local Recommendations Engine",
    ],
    results: [
      { label: "Guest Satisfaction", value: "100%" },
      { label: "Χρόνος Απόκρισης", value: "0 sec" },
      { label: "AI Interactions", value: "24/7" },
    ],
    adminPanel: {
      title: "Villa Command Center",
      description: "Ένα εξειδικευμένο διαχειριστικό σύστημα που επιτρέπει την πλήρη εποπτεία της βίλας: από το ημερολόγιο κρατήσεων μέχρι την αρχειοθέτηση εργασιών συντήρησης και τη διαχείριση των αιτημάτων που δέχεται ο Νέστορας.",
      features: [
        { icon: <LayoutDashboard strokeWidth={1.5} className="w-6 h-6" />, title: "Dashboard", desc: "Συνοπτική εικόνα κρατήσεων, αφίξεων και εκκρεμών εργασιών συντήρησης σε πραγματικό χρόνο." },
        { icon: <CalendarDays strokeWidth={1.5} className="w-6 h-6" />, title: "Reservation Flow", desc: "Διαχείριση απευθείας κρατήσεων και συγχρονισμός με εξωτερικά ημερολόγια για την αποφυγή λαθών." },
        { icon: <Activity strokeWidth={1.5} className="w-6 h-6" />, title: "Maintenance Log", desc: "Καταγραφή και παρακολούθηση εργασιών όπως ο καθαρισμός της πισίνας και η περιποίηση του κήπου." },
        { icon: <Bot strokeWidth={1.5} className="w-6 h-6" />, title: "AI Analytics", desc: "Πλήρες ιστορικό συνομιλιών του Νέστορα για την κατανόηση των αναγκών και των προτιμήσεων των καλεσμένων." },
        { icon: <Bell strokeWidth={1.5} className="w-6 h-6" />, title: "Guest Requests", desc: "Άμεση ειδοποίηση των ιδιοκτητών για ειδικά αιτήματα που συλλέγει ο AI πράκτορας." },
        { icon: <Monitor strokeWidth={1.5} className="w-6 h-6" />, title: "Content Manager", desc: "Εύκολη ενημέρωση του ψηφιακού οδηγού της βίλας (WiFi codes, house rules κ.λπ.) μέσω του admin." },
      ],
      images: ["/images/olive-nest-admin.png"],
    },
    keyInsight: {
      title: "Νέστορας: Η Σοφία της Φιλοξενίας στην Ψηφιακή Εποχή",
      body: "Ο Νέστορας δεν είναι απλά ένα εργαλείο: είναι ο ψηφιακός οικοδεσπότης της Olive Nest. Εκπαιδευμένος με κάθε λεπτομέρεια για τη βίλα και τη γύρω περιοχή, προσφέρει μια εμπειρία πεντάστερης φιλοξενίας: γνωρίζει πώς λειτουργεί η θέρμανση της πισίνας, ποιο είναι το καλύτερο εστιατόριο σε απόσταση 5 λεπτών, και μπορεί να οργανώσει check-in αργά το βράδυ χωρίς άγχος για τον ιδιοκτήτη. Η σοφία του Nestoras εξασφαλίζει ότι κανένας καλεσμένος δεν νιώθει ποτέ μόνος.",
    },
    techStack: ["Next.js", "TypeScript", "OpenAI Suite", "Supabase", "Tailwind CSS", "Framer Motion", "Real-time Notifications"],
    aiAgent: {
      name: "Nestoras AI Concierge",
      tagline: "The Wisdom of Hospitality | 24/7 Digital Concierge",
      description: "Ο Νέστορας είναι ο προσωπικός ψηφιακός βοηθός της Olive Nest, έτοιμος να λύσει κάθε απορία και να ικανοποιήσει κάθε ανάγκη των καλεσμένων σας, οποιαδήποτε στιγμή.",
      mythOrigin: "Εμπνευσμένος από τον Βασιλιά Νέστορα της Πύλου, γνωστό για τη σοφία, τη σύνεση και τη θρυλική του φιλοξενία προς τους ταξιδιώτες στην αρχαιότητα.",
      features: [
        { icon: "🏰", title: "Villa Expert", desc: "Γνωρίζει τα πάντα για τη βίλα: από κωδικούς WiFi μέχρι το πώς λειτουργούν οι οικιακές συσκευές." },
        { icon: "🍽️", title: "Smart Concierge", desc: "Προτείνει τα καλύτερα τοπικά εστιατόρια και αξιοθέατα με βάση τις προτιμήσεις του χρήστη." },
        { icon: "🔑", title: "Seamless Check-in", desc: "Καθοδηγεί τους καλεσμένους τη στιγμή της άφιξης με οδηγίες πλοήγησης και πληροφορίες για την είσοδο." },
        { icon: "🏊", title: "Instant Support", desc: "Απαντά σε ερωτήσεις για τις ανέσεις της βίλας (πισίνα, barbeque κ.λπ.) άμεσα, χωρίς αναμονή." },
        { icon: "📊", title: "Preference Learning", desc: "Μαθαίνει τι αρέσει στους καλεσμένους και ενημερώνει τους ιδιοκτήτες για να προσφέρουν tailor-made εμπειρίες." },
        { icon: "🏺", title: "Local Lore", desc: "Μοιράζεται ιστορίες και μυστικά της περιοχής, κάνοντας τη διαμονή πιο αυθεντική και ενδιαφέρουσα." },
      ],
    },
    testimonial: {
      quote: "Ο Νέστορας αναβάθμισε την εμπειρία των καλεσμένων μας σε άλλο επίπεδο. Δεν χρειάζεται να απαντάμε στις ίδιες ερωτήσεις ξανά και ξανά: οι πελάτες μας νιώθουν ότι έχουν έναν προσωπικό βοηθό δίπλα τους τις 24 ώρες το 24ωρο.",
      name: "Διοίκηση Olive Nest",
      role: "Executive Villa"
    },
    timeline: {
      duration: "Παράδοση σε 5 εβδομάδες",
      steps: [
        { name: "Brand Identity", description: "Σχεδιασμός λογοτύπου και premium οπτικής ταυτότητας." },
        { name: "Development", description: "Κατασκευή website και custom συστήματος διαχείρισης." },
        { name: "AI Nestoras", description: "Εκπαίδευση και παραμετροποίηση του AI Ψηφιακού Concierge." },
        { name: "Villa Launch", description: "Τελικές δοκιμές στις εγκαταστάσεις και επίσημη έναρξη." }
      ]
    }
  },
  {
    slug: "klados-agricultural",
    business: "Κλάδος Γεωπονικά Πολυκαταστήματα",
    type: "Custom ERP & Operations Hub",
    category: "growth",
    themeColor: "#556b2f",
    image: "/images/kladosproject.png",
    projectUrl: "#",
    whatWeBuilt: "Custom Cloud ERP, Διαχείριση Αποθέματος & Hub Πωλήσεων για πολλαπλά σημεία.",
    outcome: "Operational Efficiency",
    metric: "100%",
    challenge: "Η επιχείρηση Κλάδος χρειαζόταν έναν σύγχρονο τρόπο να παρακολουθεί τις πωλήσεις, το απόθεμα και τις παραγγελίες σε πολλαπλά φυσικά καταστήματα ταυτόχρονα. Τα παραδοσιακά συστήματα ήταν αργά και δεν επέτρεπαν την άμεση ενημέρωση και τον κεντρικό έλεγχο από οπουδήποτε.",
    solution: "Αναπτύξαμε ένα πλήρως custom cloud-based ERP σύστημα, βελτιστοποιημένο για την ταχύτητα και την εμπειρία χρήστη (UX). Το σύστημα επιτρέπει στην κεντρική διοίκηση να βλέπει in real-time την κίνηση κάθε καταστήματος, να διαχειρίζεται το απόθεμα και να αυτοματοποιεί τις παραγγελίες προσφέροντας απόλυτη διαφάνεια και έλεγχο.",
    features: [
      "Custom Cloud ERP Architecture",
      "Multi-store Stock Management",
      "Real-time Sales Monitoring",
      "Automated Order Processing",
      "User Roles & Permissions",
      "Advanced Analytics Dashboard",
      "Mobile Responsive Interface",
      "Centralized Operations Hub",
    ],
    results: [
      { label: "Έλεγχος Αποθέματος", value: "Real-time" },
      { label: "Ταχύτητα Διαχείρισης", value: "+300%" },
      { label: "Operational Error", value: "0" },
    ],
    adminPanel: {
      title: "Klados Operations Hub",
      description: "Ένα κεντρικό λειτουργικό σύστημα σχεδιασμένο για τη μέγιστη απόδοση. Ο διαχειριστής έχει πλήρη εικόνα των εσόδων, του αποθέματος και των πωλήσεων ανά κατάστημα, με δυνατότητα εξαγωγής δεδομένων και έξυπνων αναφορών.",
      features: [
        { icon: <LayoutDashboard strokeWidth={1.5} className="w-6 h-6" />, title: "Central Dashboard", desc: "Συνολική εικόνα της επιχείρησης με KPIs και metrics πωλήσεων σε πραγματικό χρόνο." },
        { icon: <Briefcase strokeWidth={1.5} className="w-6 h-6" />, title: "Inventory Engine", desc: "Έξυπνη διαχείριση αποθέματος με αυτόματες προειδοποιήσεις για ελλείψεις." },
        { icon: <Users strokeWidth={1.5} className="w-6 h-6" />, title: "Employee Portal", desc: "Διαφορετικά επίπεδα πρόσβασης για εγγυημένη ασφάλεια και οργάνωση των χρηστών." },
        { icon: <CreditCard strokeWidth={1.5} className="w-6 h-6" />, title: "Sales Analysis", desc: "Λεπτομερής καταγραφή πωλήσεων και παραγγελιών με ιστορικό και φίλτρα αναζήτησης." },
      ],
      images: ["/images/kladosproject.png"],
    },
    keyInsight: {
      title: "Data-Driven Agriculture",
      body: "Η ψηφιοποίηση των παραδοσιακών επιχειρήσεων είναι το κλειδί για το scalability. Με το custom ERP, ο Κλάδος δεν διαχειρίζεται απλώς προϊόντα, αλλά διαχειρίζεται την ανάπτυξη του με βάση πραγματικά δεδομένα, μειώνοντας τα λάθη και αυξάνοντας την αποδοτικότητα της ομάδας.",
    },
    techStack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "High-Performance API"],
    testimonial: {
      quote: "Το διαχειριστικό που χτίσαμε μας έδωσε τα μάτια που χρειαζόμασταν στην επιχείρησή μας. Πλέον γνωρίζουμε ακριβώς τι γίνεται σε κάθε κατάστημα, κάθε στιγμή.",
      name: "Διοίκηση Κλάδος",
      role: "Agricultural Stores"
    },
    timeline: {
      duration: "Παράδοση σε 6 εβδομάδες",
      steps: [
        { name: "Logic Mapping", description: "Ανάλυση των flows των καταστημάτων και των αναγκών αποθέματος." },
        { name: "ERP Architecture", description: "Σχεδιασμός της βάσης δεδομένων και της δομής του cloud συστήματος." },
        { name: "Build & Integration", description: "Υλοποίηση του custom admin και του sales hub." },
        { name: "Testing & Launch", description: "Εκπαίδευση προσωπικού και πλήρης μετάβαση στο νέο σύστημα." }
      ]
    }
  },
  {
    slug: "gesthimani-residence",
    business: "Gesthimani Residence",
    type: "Holiday Home",
    category: "growth",
    themeColor: "#8b7355",
    image: "/images/gesth1.png",
    projectUrl: "https://gesthimaniresidence.gr/",
    whatWeBuilt: "Custom Branding, Website & Σύστημα Αυτόνομης Διαχείρισης Κρατήσεων.",
    outcome: "Owner Autonomy",
    metric: "100%",
    challenge: "Οι ιδιοκτήτες του Gesthimani Residence αναζητούσαν μια λύση που θα τους επέτρεπε να έχουν την αυτονομία τους. Χρειάζονταν ένα σύστημα που να μην εξαρτάται από τρίτους για την ενημέρωση τιμών, τη διαχείριση του περιεχομένου και τον συγχρονισμό των κρατήσεων από πλατφόρμες όπως το Airbnb και το Booking.com.",
    solution: "Ακολουθώντας τη λογική του Harmony Apartments, αναπτύξαμε μια ιστοσελίδα με ενσωματωμένο custom διαχειριστικό σύστημα (V1). Το σύστημα προσφέρει πλήρη αυτονομία στον ιδιοκτήτη, επιτρέποντας real-time αλλαγές σε κείμενα, φωτογραφίες και τιμές, ενώ το αυτόματο sync με τα κανάλια κρατήσεων διασφαλίζει ότι δεν θα υπάρξουν ποτέ double-bookings.",
    features: [
      "Custom Booking Admin (V1)",
      "Real-time Content Management",
      "Dynamic Pricing Engine",
      "Availability Calendar Sync",
      "iCal Integration (Airbnb/Booking)",
      "Mobile-First Experience",
      "Secure Payment Gateway",
      "Automated Guest Notifications",
    ],
    results: [
      { label: "Αυτονομία Ιδιοκτήτη", value: "100%" },
      { label: "Μείωση Λαθών Sync", value: "99%" },
      { label: "Direct Bookings", value: "Increase" },
    ],
    adminPanel: {
      title: "Gesthimani Command Center",
      description: "Ένα εργαλείο σχεδιασμένο για να προσφέρει ελευθερία κινήσεων. Ο ιδιοκτήτης μπορεί από το κινητό του να κλείσει ημερομηνίες, να αλλάξει τις τιμές της σεζόν και να δει την κατάσταση της επιχείρησής του σε δευτερόλεπτα.",
      features: [
        { icon: <LayoutDashboard strokeWidth={1.5} className="w-6 h-6" />, title: "Live Dashboard", desc: "Συνοπτική εικόνα κρατήσεων και διαθεσιμότητας με μια ματιά." },
        { icon: <CalendarDays strokeWidth={1.5} className="w-6 h-6" />, title: "Channel Sync", desc: "Αυτόματος συγχρονισμός με όλα τα εξωτερικά κανάλια κρατήσεων." },
        { icon: <Monitor strokeWidth={1.5} className="w-6 h-6" />, title: "Full CMS", desc: "Διαχείριση κάθε κειμένου και εικόνας της ιστοσελίδας χωρίς τεχνικές γνώσεις." },
        { icon: <CreditCard strokeWidth={1.5} className="w-6 h-6" />, title: "Transaction Log", desc: "Ιστορικό πληρωμών και παρακολούθηση οικονομικών στοιχείων." },
      ],
      images: ["/images/gesth1.png"],
    },
    keyInsight: {
      title: "The Power of Autonomy",
      body: "Η μεγαλύτερη αξία για έναν ιδιοκτήτη εξοχικής κατοικίας είναι ο χρόνος και ο έλεγχος. Κατασκευάζοντας ένα custom οικοσύστημα αντί για ένα έτοιμο template, δώσαμε στο Gesthimani Residence τα εργαλεία να λειτουργεί ως μια αυτόνομη ψηφιακή επιχείρηση, μειώνοντας τις προμήθειες σε τρίτους και αυξάνοντας την αποτελεσματικότητα.",
    },
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "Tailwind CSS", "iCal Engine"],
    testimonial: {
      quote: "Επιτέλους έχουμε ένα σύστημα που δουλεύει για εμάς και όχι εμείς για το σύστημα. Η ευκολία με την οποία αλλάζουμε τα πάντα είναι εντυπωσιακή.",
      name: "Διοίκηση Gesthimani",
      role: "Holiday Home Owner"
    },
    timeline: {
      duration: "Παράδοση σε 4 εβδομάδες",
      steps: [
        { name: "Digital Identity", description: "Μεταφορά του vibe της κατοικίας σε ψηφιακή μορφή." },
        { name: "Admin Setup", description: "Παραμετροποίηση του διαχειριστικού για τις ανάγκες του Gesthimani." },
        { name: "Sync Activation", description: "Σύνδεση με Airbnb, Booking και ενεργοποίηση πληρωμών." },
        { name: "Training", description: "Εκπαίδευση του ιδιοκτήτη για πλήρη αυτονομία στη χρήση." }
      ]
    }
  },
];

const categories = [
  { id: "all", label: "Όλα τα Έργα", icon: Layers },
  { id: "websites", label: "Websites", icon: Monitor },
  { id: "growth", label: "Custom Διαχειριστικά", icon: TrendingUp },
  { id: "ai", label: "AI & Automations", icon: Bot },
];

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const { t } = useLanguage();

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return caseStudies;
    return caseStudies.filter((cs) => cs.category === activeCategory);
  }, [activeCategory]);

  const featuredProjects = caseStudies.slice(0, 3); // Take top 3 for featured

  const scrollToArchive = () => {
    document.getElementById("archive")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-primary selection:text-black overflow-x-hidden">
      
      {/* ── SECTION 1: HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <LabBackground />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(208,255,0,0.04),transparent_70%)] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/20 mb-8 md:mb-12"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/80">{t('portfolio.hero.badge')}</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-wide leading-[1.0] mb-8 md:mb-12 uppercase italic"
            >
              {t('portfolio.hero.title1')} <br />
              <span className="text-primary">{t('portfolio.hero.title2')}</span>
            </motion.h1>

            <div className="space-y-4 mb-12 md:mb-16">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as any }}
                className="text-lg md:text-xl lg:text-2xl font-normal text-white/40 tracking-normal leading-relaxed"
              >
                <p>{t('portfolio.hero.subtitle1')}</p>
                <p>{t('portfolio.hero.subtitle2')}</p>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as any }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
            >
              <Button onClick={scrollToArchive} size="xl" className="w-full sm:w-auto rounded-full px-8 md:px-12 h-16 md:h-20 text-lg md:text-xl font-semibold group bg-primary text-black hover:bg-white transition-all border-none shadow-glow">
                {t('portfolio.hero.explore')}
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="w-full sm:w-auto rounded-full px-8 md:px-12 h-16 md:h-20 text-lg md:text-xl font-semibold border-white/10 hover:bg-white hover:text-black transition-all" asChild>
                <Link to="/project-brief">{t('portfolio.hero.start')}</Link>
              </Button>
            </motion.div>
          </div>
        </div>

        <motion.div 
          animate={{ y: [0, -20, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-primary/10 blur-[120px] pointer-events-none"
        />
      </section>

      {/* ── SECTION 2: SIGMALABS FLAGSHIP ── */}
      <section className="py-24 md:py-32 lg:py-48 relative border-t border-white/5 bg-[#080808] overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,_rgba(197,218,78,0.05),transparent_60%)] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* Label + Title — Editorial Layout */}
          <motion.div {...fadeUp()} className="mb-16 md:mb-24">
            {/* Top eyebrow */}
            <div className="flex items-center gap-3 mb-10">
              <div className="w-8 h-px bg-primary" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-primary opacity-80">
                Flagship Project · Vibe Commerce
              </span>
            </div>

            {/* Split headline */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16">
              {/* Left: main headline */}
              <div className="flex-1">
                <h2 className="font-display uppercase leading-[0.95]">
                  <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-wide text-white">
                    Το μεγαλύτερο
                  </span>
                  <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-wide">
                    <span className="text-primary">build</span>
                    <span className="text-white/20 ml-4">της Hustle.</span>
                  </span>
                </h2>
              </div>

              {/* Right: descriptor */}
              <div className="lg:max-w-xs xl:max-w-sm shrink-0 lg:pb-2">
                <p className="text-white/35 text-sm md:text-base font-normal leading-relaxed tracking-normal border-l border-white/10 pl-6">
                  Το πρώτο παγκοσμίως Agentic AI Command Center για WooCommerce & Shopify. Εισαγωγή του <span className="text-primary/70 font-medium">Vibe Commerce</span> στην πράξη.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Main card */}
          <motion.div {...fadeUp(0.1)}>
            <Link to="/portfolio/sigmalabs-ai" className="group block">
              {/* Image full-width */}
              <div className="relative w-full aspect-[16/8] md:aspect-[21/9] overflow-hidden rounded-3xl md:rounded-[3rem] border border-white/5 group-hover:border-primary/40 transition-all duration-700 shadow-2xl mb-10 md:mb-14">
                <img
                  src={SIGMAEKS}
                  alt="Sigmalabs AI"
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-90 group-hover:scale-[1.03] transition-all duration-1000"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                {/* Text overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-14 lg:p-20">
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="px-4 py-1.5 rounded-full bg-primary text-black text-[10px] font-bold uppercase tracking-[0.2em]">10x Automation Performance</span>
                    <span className="px-4 py-1.5 rounded-full bg-white/10 text-white text-[10px] font-semibold uppercase tracking-[0.15em] backdrop-blur-sm">Agentic AI & Engineering</span>
                    <span className="px-4 py-1.5 rounded-full bg-white/10 text-primary text-[10px] font-semibold uppercase tracking-[0.15em] backdrop-blur-sm">Vibe Commerce Pioneer</span>
                  </div>
                  <h3 className="font-display text-4xl md:text-6xl lg:text-8xl font-black tracking-wide leading-[1.0] uppercase text-white mb-4">
                    Sigmalabs AI
                  </h3>
                  <p className="text-white/60 text-base md:text-lg font-normal max-w-2xl leading-relaxed tracking-normal">
                    The first worldwide Agentic AI Command Center for WooCommerce & Shopify — autonomous product management, voice commands, AI Vision.
                  </p>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-10">
                {[
                  { value: "10x", label: "Ταχύτητα Εκτέλεσης" },
                  { value: "90%", label: "Μείωση Χειρωνακτικής Εργασίας" },
                  { value: "100%", label: "Data Accuracy" },
                  { value: "12+", label: "Months R&D" },
                ].map((stat) => (
                  <div key={stat.label} className="border-t border-white/10 pt-6">
                    <div className="font-display text-3xl md:text-5xl font-black text-primary tracking-wide uppercase mb-2">{stat.value}</div>
                    <div className="text-xs text-white/40 font-semibold uppercase tracking-[0.15em] leading-snug">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold text-primary uppercase tracking-[0.2em] group-hover:gap-3 transition-all flex items-center gap-2">
                  View Full Case Study <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
                <div className="h-px flex-1 bg-white/5 group-hover:bg-primary/20 transition-colors" />
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 2.5: AI AGENTS REGISTRY ── */}
      <section className="py-24 md:py-32 lg:py-48 relative border-t border-white/5 bg-[#0a0a0a] overflow-hidden">
        {/* Technical Grid Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div {...fadeUp()} className="mb-20 md:mb-32">
             <div className="flex items-center gap-3 mb-10">
                <Cpu size={14} className="text-primary animate-pulse" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-primary/70">Autonomous Systems · Active Registry</span>
             </div>

             <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16">
                <h2 className="font-display uppercase leading-[0.9]">
                  <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-wide text-white/10">
                    Deployed
                  </span>
                  <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-wide text-white">
                    AI Agents.
                  </span>
                </h2>
                <div className="lg:max-w-xs xl:max-w-sm shrink-0 lg:pb-2">
                  <p className="text-white/35 text-sm md:text-base font-normal leading-relaxed tracking-normal border-l border-white/10 pl-6">
                    5 Ενεργοί AI Agents που εκτελούν σύνθετες λειτουργίες, από αυτοματοποιημένο concierge μέχρι trade execution και strategic analysis.
                  </p>
                </div>
             </div>
          </motion.div>

          {/* Agents Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {[
              { name: "SIGMA-1", role: "Ops Orchestrator", tech: "GPT-4o / Vector DB", status: "Live", client: "SigmaLabs AI", icon: Cpu },
              { name: "LIVY", role: "Elite Concierge", tech: "Claude 3.5 / Whisper", status: "Live", client: "Liv Tours", icon: MessageSquare },
              { name: "LAB BUDDY", role: "Internal Assistant", tech: "GPT-4o / Context", status: "Live", client: "Hustle Labs", icon: Bot },
              { name: "ΝΕΣΤΩΡ", role: "Villa Concierge", tech: "GPT-4o / Hospitality", status: "Active", client: "Olive Nest", icon: MessageSquare },
              { name: "ΕΡΜΗΣ", role: "Travel Assistant", tech: "GPT-4o / Real-time", status: "Deployed", client: "TopTravel", icon: MessageSquare }
            ].map((agent, i) => (
              <motion.div 
                key={agent.name}
                {...fadeUp(i * 0.1)}
                className="group relative p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 text-primary/5 group-hover:text-primary/10 transition-colors">
                   <agent.icon size={80} strokeWidth={0.5} />
                </div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-10">
                    <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[9px] font-black text-primary uppercase tracking-widest italic">
                       {agent.status}
                    </div>
                    <div className="text-[10px] font-medium text-white/20 font-mono">
                       01001-0{i+1}
                    </div>
                  </div>

                  <h3 className="font-display text-3xl font-black text-white italic uppercase tracking-tight mb-2">
                    {agent.name}
                  </h3>
                  <div className="text-[10px] font-semibold text-primary/60 uppercase tracking-[0.2em] mb-8">
                    {agent.role}
                  </div>

                  <div className="mt-auto space-y-4 pt-6 border-t border-white/5">

                    <div className="flex items-center justify-between">
                       <span className="text-[9px] font-medium text-white/20 uppercase tracking-widest">Integrated At</span>
                       <span className="text-[10px] font-semibold text-white/70">{agent.client}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Empty Slot for "Next Agent" */}
            <motion.div 
              {...fadeUp(0.6)}
              className="group relative p-8 rounded-[2.5rem] bg-transparent border border-dashed border-white/10 flex flex-col items-center justify-center text-center gap-4 hover:border-primary/20 transition-all"
            >
               <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/20 group-hover:text-primary transition-colors text-2xl font-black">
                  +
               </div>
               <p className="text-[10px] font-bold text-white/10 uppercase tracking-[0.3em]">Next Deployment <br/> In Progress</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: ARCHIVE GRID ── */}
      <section id="archive" className="pt-24 md:pt-32 lg:pt-48 pb-16 relative border-t border-white/5 bg-[#050505] scroll-mt-20">
        <div className="container mx-auto px-4 lg:px-8">

          {/* ── Header row ── */}
          <motion.div {...fadeUp()} className="mb-16 md:mb-24">
            {/* Top rule with badge */}
            <div className="flex items-center gap-4 mb-10">
              <div className="w-6 h-px bg-primary" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-primary/70">{t('portfolio.archive.badge')}</span>
              <div className="h-px flex-1 bg-white/5" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/20">{caseStudies.length} Projects</span>
            </div>

            {/* Main headline */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 lg:gap-20">
              <h2 className="font-display uppercase leading-[0.9] flex-1">
                <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-wide text-white/15">
                  {t('portfolio.archive.title1')}
                </span>
                <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-wide text-white">
                  {t('portfolio.archive.title2')}
                </span>
              </h2>

              {/* Filters — pill style */}
              <motion.div {...fadeUp(0.1)} className="flex flex-wrap gap-3 lg:flex-col lg:items-end lg:gap-2 shrink-0">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`relative px-5 py-2 rounded-full text-[11px] font-semibold uppercase tracking-[0.15em] transition-all duration-300 ${
                      activeCategory === cat.id
                        ? "bg-primary text-black shadow-[0_0_16px_hsl(72_62%_58%_/_0.35)]"
                        : "text-white/30 hover:text-white/70 border border-white/8 hover:border-white/20"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </motion.div>
            </div>

            {/* Bottom divider */}
            <div className="mt-10 h-px bg-gradient-to-r from-primary/30 via-white/5 to-transparent" />
          </motion.div>

          <div className="max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
              >
                {filteredProjects.map((cs, i) => (
                  <CaseStudyCard
                    key={cs.slug}
                    title={cs.business}
                    category={cs.type}
                    description={cs.whatWeBuilt}
                    image={cs.image}
                    slug={cs.slug}
                    index={i}
                    metric={cs.metric}
                    outcome={cs.outcome}
                  />
                ))}
              </motion.div>
            </AnimatePresence>

            {filteredProjects.length === 0 && (
              <div className="text-center py-40 rounded-[3.5rem] border border-dashed border-white/10 bg-white/[0.01]">
                <Filter size={48} className="text-white/5 mx-auto mb-6" />
                <p className="text-white/30 font-semibold uppercase tracking-[0.2em] text-sm">{t('portfolio.archive.empty')}</p>
              </div>
            )}
          </div>
        </div>
      </section>


      {/* ── TYPOGRAPHIC COMING SOON ── */}
      <section className="pb-32 lg:pb-48 bg-[#050505] overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 text-center grayscale opacity-10 hover:opacity-100 opacity-20 transition-all duration-1000">
           <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
           >
              <h2 className="font-display text-[12vw] lg:text-[10vw] leading-none font-black italic uppercase tracking-tighter text-white inline-block relative">
                 MORE PROJECTS
                 <span className="block text-primary text-right text-[6vw] lg:text-[5vw] -mt-[2vw] tracking-normal">COMING SOON.</span>
              </h2>
              <div className="mt-12 flex justify-center gap-10 opacity-20">
                 {[1,2,3,4,5].map(i => <div key={i} className="w-1 h-1 rounded-full bg-white" />)}
              </div>
           </motion.div>
        </div>
      </section>

      {/* ── SECTION 4: HUSTLE BACKED / VENTURES ── */}
      <section className="py-32 md:py-48 relative border-t border-white/5 bg-[#080808] overflow-hidden" id="investments">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* Label + Title — Editorial Layout */}
          <motion.div {...fadeUp()} className="mb-16 md:mb-24">
            {/* Top eyebrow */}
            <div className="flex items-center gap-3 mb-10">
              <div className="w-8 h-px bg-primary" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-primary opacity-80">
                {t('portfolio.investments.badge')}
              </span>
              <div className="h-px flex-1 bg-white/5" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/20">Venture Studio</span>
            </div>

            {/* Split headline */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16">
              {/* Left: main headline */}
              <div className="flex-1">
                <h2 className="font-display uppercase leading-[0.95]">
                  <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-wide text-white/15">
                    Hustle Backed
                  </span>
                  <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-wide text-white">
                    Projects.
                  </span>
                </h2>
              </div>

              {/* Right: descriptor */}
              <div className="lg:max-w-xs xl:max-w-sm shrink-0 lg:pb-2">
                <p className="text-white/35 text-sm md:text-base font-normal leading-relaxed tracking-normal border-l border-white/10 pl-6">
                  {t('portfolio.investments.subtitle')}
                </p>
              </div>
            </div>
            
            {/* Bottom divider */}
            <div className="mt-10 h-px bg-gradient-to-r from-primary/30 via-white/5 to-transparent" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-24">
            <div className="md:col-span-12 lg:col-span-7">
              <PortfolioCard 
                index={0}
                title="Skiathos Travellers"
                category="Tourism Engine"
                image="/images/skiathostravellers.png"
                link="/portfolio/skiathos-travellers"
                className="aspect-[4/5] md:aspect-video lg:aspect-[16/10]"
              />
            </div>
            <div className="md:col-span-12 lg:col-span-5 md:mt-24">
              <PortfolioCard 
                index={1}
                title="Next Venture"
                category="In Development"
                isSoon
                className="aspect-[4/5] md:aspect-video lg:aspect-auto"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none -translate-x-1/2" />
      </section>

      {/* ── SECTION 5: FINAL CTA ── */}
      <section className="py-32 md:py-48 lg:py-64 relative overflow-hidden bg-[#0a0a0a] border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(208,255,0,0.06),transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div {...fadeUp()}>
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-12 block">{t('portfolio.cta.badge')}</span>
            <h2 className="font-display text-5xl md:text-7xl lg:text-9xl font-black tracking-wide uppercase leading-[1.05] mb-10">
              {t('portfolio.cta.title1')} <br /><span className="text-white/20">{t('portfolio.cta.title2')}</span>
            </h2>
            <p className="text-primary font-semibold uppercase tracking-[0.2em] text-lg md:text-xl mb-16 md:mb-24">
              {t('portfolio.cta.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button size="xl" className="w-full sm:w-auto rounded-full px-12 md:px-20 h-20 md:h-28 text-xl md:text-3xl font-bold group bg-primary text-black hover:bg-white transition-all border-none shadow-glow-strong" asChild>
                <Link to="/project-brief">
                  {t('portfolio.cta.button')}
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      
    </div>
  );
};

export default Work;
