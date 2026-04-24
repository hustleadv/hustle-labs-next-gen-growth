import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Privacy = () => {
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
              <Shield size={24} />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-black tracking-tighter uppercase italic">
              Πολιτική <span className="text-primary">Απορρήτου</span>
            </h1>
          </div>

          <div className="prose prose-invert max-w-none space-y-12 text-white/60 leading-relaxed">
            <section className="space-y-6">
              <p className="text-xl text-white/80 font-medium italic border-l-2 border-primary/30 pl-6">
                Στην Hustle Labs, η προστασία των προσωπικών σας δεδομένων είναι προτεραιότητά μας. Η παρούσα Πολιτική Απορρήτου περιγράφει πώς συλλέγουμε, χρησιμοποιούμε και προστατεύουμε τις πληροφορίες σας.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-primary font-black">01.</span> Συλλογή Δεδομένων
              </h2>
              <p>
                Συλλέγουμε πληροφορίες που μας παρέχετε απευθείας όταν συμπληρώνετε τις φόρμες επικοινωνίας, τις αιτήσεις συνεργασίας (Roster) ή τις φόρμες σύνταξης brief. Αυτές περιλαμβάνουν:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ονοματεπώνυμο και στοιχεία επικοινωνίας (Email, Τηλέφωνο).</li>
                <li>Επαγγελματικές πληροφορίες και links (LinkedIn, Portfolio).</li>
                <li>Πληροφορίες σχετικά με τα project σας.</li>
                <li>Δεδομένα χρήσης μέσω cookies για τη βελτίωση της εμπειρίας σας.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-primary font-black">02.</span> Χρήση Πληροφοριών
              </h2>
              <p>
                Χρησιμοποιούμε τα δεδομένα σας αποκλειστικά για:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Την επικοινωνία μαζί σας σχετικά με τα αιτήματά σας.</li>
                <li>Την αξιολόγηση των αιτήσεων συνεργασίας για το Hustle Roster.</li>
                <li>Τη βελτίωση των υπηρεσιών μας και της λειτουργικότητας της ιστοσελίδας.</li>
                <li>Την αποστολή ενημερώσεων (μόνο εφόσον έχετε δώσει τη ρητή συγκατάθεσή σας).</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-primary font-black">03.</span> Προστασία & Ασφάλεια
              </h2>
              <p>
                Εφαρμόζουμε σύγχρονα τεχνικά και οργανωτικά μέτρα ασφαλείας (SSL encryption, secure databases) για να διασφαλίσουμε ότι τα δεδομένα σας είναι προστατευμένα από μη εξουσιοδοτημένη πρόσβαση, απώλεια ή αλλοίωση.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-primary font-black">04.</span> Τα Δικαιώματά σας (GDPR)
              </h2>
              <p>
                Σύμφωνα με τον Γενικό Κανονισμό Προστασίας Δεδομένων (GDPR), έχετε το δικαίωμα πρόσβασης, διόρθωσης, διαγραφής ("δικαίωμα στη λήθη") και φορητότητας των δεδομένων σας. Μπορείτε να επικοινωνήσετε μαζί μας ανά πάσα στιγμή για να ασκήσετε αυτά τα δικαιώματα.
              </p>
            </section>

            <section className="p-8 rounded-[2rem] bg-white/5 border border-white/10 space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3">
                <MessageSquare className="text-primary" size={20} /> Επικοινωνία
              </h2>
              <p className="text-sm">
                Για οποιαδήποτε απορία σχετικά με την Πολιτική Απορρήτου, μπορείτε να στείλετε email στο: <br />
                <span className="text-primary font-bold">hustlelabs.gr@gmail.com</span>
              </p>
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

export default Privacy;
