import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import HustleAI from "@/components/HustleAI";
import SmoothScroll from "@/components/SmoothScroll";
import CookieBanner from "@/components/CookieBanner";
import { Suspense, lazy } from "react";
import Index from "./pages/Index";

const About = lazy(() => import("./pages/About"));
const Ecosystem = lazy(() => import("./pages/Ecosystem"));
const Websites = lazy(() => import("./pages/Websites"));
const Studio = lazy(() => import("./pages/Studio"));
const Academy = lazy(() => import("./pages/Academy"));
const AcademyTrack = lazy(() => import("./pages/AcademyTrack"));
const Services = lazy(() => import("./pages/Services"));
const Growth = lazy(() => import("./pages/Growth"));
const AILab = lazy(() => import("./pages/AILab"));
const Work = lazy(() => import("./pages/Work"));
const CaseStudyPage = lazy(() => import("./pages/CaseStudyPage"));
const HustleSpace = lazy(() => import("./pages/HustleSpace"));
const Book = lazy(() => import("./pages/Book"));
const Contact = lazy(() => import("./pages/Contact"));
const Women = lazy(() => import("./pages/Women"));
const Meetups = lazy(() => import("./pages/Meetups"));
const BriefPage = lazy(() => import("./pages/BriefPage"));
const Roster = lazy(() => import("./pages/Roster"));
const HustlerProfile = lazy(() => import("./pages/HustlerProfile"));
const HustlerJoin = lazy(() => import("./pages/HustlerJoin"));
const Clients = lazy(() => import("./pages/Clients"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Cookies = lazy(() => import("./pages/Cookies"));
const NotFound = lazy(() => import("./pages/NotFound"));
import { LanguageProvider } from "./contexts/LanguageContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SmoothScroll />
          <ScrollToTop />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md focus:text-sm focus:font-medium"
          >
            Μετάβαση στο περιεχόμενο
          </a>
          <Header />
          <main id="main-content" role="main" className="min-h-screen">
            <Suspense fallback={
              <div className="flex items-center justify-center min-h-screen bg-[#050505]">
                <div className="w-8 h-8 rounded-full border-t-2 border-primary animate-spin" />
              </div>
            }>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/ecosystem" element={<Ecosystem />} />
                <Route path="/websites" element={<Websites />} />
                <Route path="/studio" element={<Studio />} />
                <Route path="/academy" element={<Academy />} />
                <Route path="/academy/:slug" element={<AcademyTrack />} />
                <Route path="/services" element={<Services />} />
                <Route path="/growth" element={<Growth />} />
                <Route path="/ai-lab" element={<AILab />} />
                <Route path="/portfolio" element={<Work />} />
                <Route path="/portfolio/:slug" element={<CaseStudyPage />} />
                <Route path="/hustle-space" element={<HustleSpace />} />
                <Route path="/hustle-women" element={<Women />} />
                <Route path="/hustle-meetups" element={<Meetups />} />
                <Route path="/book-call" element={<Book />} />
                <Route path="/project-brief" element={<BriefPage />} />
                <Route path="/roster" element={<Roster />} />
                <Route path="/roster/:slug" element={<HustlerProfile />} />
                <Route path="/join-hustler" element={<HustlerJoin />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/cookies" element={<Cookies />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <ScrollToTopButton />
          <HustleAI />
          <CookieBanner />
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
