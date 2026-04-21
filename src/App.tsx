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
import Index from "./pages/Index";
import About from "./pages/About";
import Ecosystem from "./pages/Ecosystem";
import Websites from "./pages/Websites";
import Studio from "./pages/Studio";
import Academy from "./pages/Academy";
import AcademyTrack from "./pages/AcademyTrack";
import Services from "./pages/Services";
import Growth from "./pages/Growth";
import AILab from "./pages/AILab";
import Work from "./pages/Work";
import CaseStudyPage from "./pages/CaseStudyPage";
import HustleSpace from "./pages/HustleSpace";
import Book from "./pages/Book";
import Contact from "./pages/Contact";
import Women from "./pages/Women";
import Meetups from "./pages/Meetups";
import BriefPage from "./pages/BriefPage";
import Roster from "./pages/Roster";
import HustlerProfile from "./pages/HustlerProfile";
import HustlerJoin from "./pages/HustlerJoin";
import Clients from "./pages/Clients";
import NotFound from "./pages/NotFound";
import { LanguageProvider } from "./contexts/LanguageContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          {/* Skip to main content — accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md focus:text-sm focus:font-medium"
          >
            Μετάβαση στο περιεχόμενο
          </a>
          <Header />
          <main id="main-content" role="main">
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
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <ScrollToTopButton />
          <HustleAI />
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
