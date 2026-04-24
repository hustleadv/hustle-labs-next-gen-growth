import { motion } from "framer-motion";
import { FileText, Scale, AlertCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Terms = () => {
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
              <Scale size={24} />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-black tracking-tighter uppercase italic">
              Όροι <span className="text-primary">Χρήσης</span>
            </h1>
          </div>

          <div className="prose prose-invert max-w-none space-y-12 text-white/60 leading-relaxed">
            <section className="space-y-6">
              <p className="text-xl text-white/80 font-medium italic border-l-2 border-primary/30 pl-6">
                Καλώς ήρθατε στην Hustle Labs. Η χρήση της ιστοσελίδας μας προϋποθέτει την αποδοχή των παρακάτω όρων. Παρακαλούμε διαβάστε τους προσεκτικά.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-primary font-black">01.</span> Γενικοί Όροι
              </h2>
              <p>
                Η Hustle Labs παρέχει πληροφορίες σχετικά με υπηρεσίες marketing, τεχνολογίας και design. Η ιστοσελίδα λειτουργεί ως πλατφόρμα επικοινωνίας και παρουσίασης του δικτύου συνεργατών μας (Roster).
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-primary font-black">02.</span> Πνευματική Ιδιοκτησία
              </h2>
              <p>
                Όλο το περιεχόμενο της ιστοσελίδας (κείμενα, γραφικά, λογότυπα, εικόνες, κώδικας) αποτελεί πνευματική ιδιοκτησία της Hustle Labs ή των συνεργατών της και προστατεύεται από τη σχετική νομοθεσία. Απαγορεύεται η αναπαραγωγή ή χρήση του χωρίς έγγραφη άδεια.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-primary font-black">03.</span> Περιορισμός Ευθύνης
              </h2>
              <p>
                Η Hustle Labs καταβάλλει κάθε προσπάθεια για την ακρίβεια των πληροφοριών, ωστόσο δεν φέρει ευθύνη για τυχόν λάθη, παραλείψεις ή τεχνικά προβλήματα στην ιστοσελίδα. Οι πληροφορίες παρέχονται "ως έχουν" για ενημερωτικούς σκοπούς.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-primary font-black">04.</span> Εξωτερικοί Σύνδεσμοι
              </h2>
              <p>
                Η ιστοσελίδα ενδέχεται να περιέχει συνδέσμους (links) προς τρίτους ιστότοπους (π.χ. LinkedIn, Behance). Η Hustle Labs δεν φέρει ευθύνη για το περιεχόμενο ή την πολιτική απορρήτου αυτών των ιστότοπων.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-primary font-black">05.</span> Τροποποιήσεις
              </h2>
              <p>
                Διατηρούμε το δικαίωμα να τροποποιούμε τους παρόντες όρους ανά πάσα στιγμή. Η συνεχιζόμενη χρήση της ιστοσελίδας μετά από αλλαγές αποτελεί αποδοχή των νέων όρων.
              </p>
            </section>

            <section className="p-8 rounded-[2rem] bg-white/5 border border-white/10 flex items-start gap-6">
              <AlertCircle className="text-primary shrink-0" size={32} />
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-white">Σημαντική Σημείωση</h2>
                <p className="text-sm">
                  Η χρήση της ιστοσελίδας προορίζεται αποκλειστικά για νόμιμους σκοπούς και με τρόπο που δεν περιορίζει τη χρήση της από τρίτους.
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

export default Terms;
