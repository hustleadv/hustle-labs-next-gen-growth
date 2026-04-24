import { motion } from "framer-motion";
import { Cookie, Info, Settings, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Cookies = () => {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <Button variant="ghost" className="mb-12 rounded-full gap-2 text-muted-foreground hover:text-foreground" asChild>
          <Link to="/"><ArrowLeft size={16} /> Επιστροφή</Link>
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <Cookie size={24} />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-black tracking-tighter uppercase italic">
              Πολιτική <span className="text-primary">Cookies</span>
            </h1>
          </div>

          <div className="prose prose-invert max-w-none space-y-12 text-white/60 leading-relaxed">
            <section className="space-y-6">
              <p className="text-xl text-white/80 font-medium italic border-l-2 border-primary/30 pl-6">
                Χρησιμοποιούμε cookies για να βελτιώσουμε την εμπειρία σας στην ιστοσελίδα μας. Μάθετε τι είναι τα cookies και πώς τα χρησιμοποιούμε.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-primary font-black">01.</span> Τι είναι τα Cookies;
              </h2>
              <p>
                Τα cookies είναι μικρά αρχεία κειμένου που αποθηκεύονται στον υπολογιστή ή την κινητή συσκευή σας όταν επισκέπτεστε μια ιστοσελίδα. Μας επιτρέπουν να θυμόμαστε τις προτιμήσεις σας και να κατανοούμε πώς χρησιμοποιείτε το site μας.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-primary font-black">02.</span> Ποια Cookies χρησιμοποιούμε;
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h3 className="font-bold text-white mb-2">Απαραίτητα Cookies</h3>
                  <p className="text-sm">Είναι απαραίτητα για τη βασική λειτουργία της ιστοσελίδας και δεν μπορούν να απενεργοποιηθούν.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h3 className="font-bold text-white mb-2">Cookies Ανάλυσης</h3>
                  <p className="text-sm">Μας βοηθούν να μετράμε την επισκεψιμότητα και να βελτιώνουμε το περιεχόμενό μας (π.χ. Google Analytics).</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h3 className="font-bold text-white mb-2">Cookies Λειτουργικότητας</h3>
                  <p className="text-sm">Θυμούνται τις επιλογές σας (όπως η γλώσσα) για μια πιο προσωποποιημένη εμπειρία.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h3 className="font-bold text-white mb-2">Cookies Marketing</h3>
                  <p className="text-sm">Χρησιμοποιούνται για την προβολή διαφημίσεων που είναι πιο σχετικές με τα ενδιαφέροντά σας.</p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-primary font-black">03.</span> Διαχείριση Cookies
              </h2>
              <p>
                Μπορείτε να ελέγξετε ή να διαγράψετε τα cookies μέσω των ρυθμίσεων του browser σας (Chrome, Safari, Firefox κλπ.). Ωστόσο, σημειώστε ότι η απενεργοποίηση ορισμένων cookies ενδέχεται να επηρεάσει τη λειτουργικότητα της ιστοσελίδας.
              </p>
            </section>

            <section className="p-8 rounded-[2rem] bg-white/5 border border-white/10 flex items-start gap-6">
              <Settings className="text-primary shrink-0" size={32} />
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-white">Πώς να τα αλλάξετε</h2>
                <p className="text-sm">
                  Για να αλλάξετε τις ρυθμίσεις των cookies, ανατρέξτε στο μενού "Βοήθεια" ή "Ρυθμίσεις" του προγράμματος περιήγησης που χρησιμοποιείτε.
                </p>
              </div>
            </section>

            <p className="text-xs text-white/20 text-center pt-10">
              Τελευταία ενημέρωση: Απρίλιος 2026
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Cookies;
