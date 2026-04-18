import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Rocket, Clock, AtSign, Inbox } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PageHero from "@/components/PageHero";

const serviceOptions = [
  { value: "website", label: "Ιστοσελίδα" },
  { value: "ads", label: "Διαφημίσεις & Ανάπτυξη" },
  { value: "ai", label: "AI & Αυτοματισμοί" },
  { value: "full", label: "Πλήρης Ανάπτυξη (όλα μαζί)" },
];

const timelineOptions = [
  { value: "asap", label: "Το συντομότερο" },
  { value: "1month", label: "Μέσα σε 1 μήνα" },
  { value: "3months", label: "Μέσα σε 3 μήνες" },
  { value: "exploring", label: "Απλά εξερευνώ" },
];

const budgetOptions = [
  { value: "500-1500", label: "€500 – €1.500" },
  { value: "1500-3000", label: "€1.500 – €3.000" },
  { value: "3000-5000", label: "€3.000 – €5.000" },
  { value: "5000+", label: "€5.000+" },
  { value: "unsure", label: "Δεν είμαι σίγουρος" },
];

const subjectMap: Record<string, string> = {
  "hustle-space": "Ενδιαφέρομαι για τον Hustle Space, ζητάω διαθεσιμότητα.",
  "academy": "Ενδιαφέρομαι για workshops / Hustle Academy.",
  "session-website-audit": "Θέλω να κλείσω Website Audit session.",
  "session-ads-audit": "Θέλω να κλείσω Ads Audit session.",
  "session-ai-automation-consult": "Θέλω να κλείσω AI Automation Consult session.",
  "session-strategy-session": "Θέλω να κλείσω Strategy Session.",
  "studio": "Ενδιαφέρομαι για custom website / Hustle Studio.",
  "growth": "Ενδιαφέρομαι για ads & growth services.",
  "ai": "Ενδιαφέρομαι για AI automations.",
  "women-collab": "Ενδιαφέρομαι για συνεργασία στη γυναικεία επιχειρηματικότητα.",
};

const nextSteps = [
  { icon: CheckCircle2, title: "Λάβαμε το brief σου", desc: "Θα το μελετήσουμε προσεκτικά." },
  { icon: MessageSquare, title: "Επικοινωνία σε 24h", desc: "Θα σε καλέσουμε ή θα σου στείλουμε email." },
  { icon: Rocket, title: "Πρόταση & ξεκίνημα", desc: "Αναλυτική πρόταση χωρίς δέσμευση." },
];

const fade = {
  initial: { opacity: 0, y: 24 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
};

const Contact = () => {
  const [searchParams] = useSearchParams();
  const subjectKey = searchParams.get("subject") || "";
  const prefill = subjectMap[subjectKey] || "";

  const [submitted, setSubmitted] = useState(false);
  const [contactMethod, setContactMethod] = useState<"email" | "phone">("email");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen pt-24">
      <AnimatePresence mode="wait">
        {submitted ? (
          /* ─── Success State ─── */
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="py-28"
          >
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-2xl mx-auto text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 size={40} className="text-primary" />
                </div>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Το brief στάλθηκε!
                </h1>
                <p className="text-muted-foreground text-lg mb-14">
                  Ευχαριστούμε. Θα επικοινωνήσουμε μαζί σου σύντομα.
                </p>

                <h2 className="font-display text-lg font-semibold text-foreground mb-8">Τι γίνεται τώρα;</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {nextSteps.map((step, i) => (
                    <div key={i} className="p-6 rounded-xl border border-border bg-card text-center">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                        <step.icon size={20} className="text-primary" />
                      </div>
                      <h3 className="font-display font-semibold text-sm text-foreground mb-1">{step.title}</h3>
                      <p className="text-xs text-muted-foreground">{step.desc}</p>
                    </div>
                  ))}
                </div>

                <Button variant="hero-outline" className="mt-12" onClick={() => setSubmitted(false)}>
                  Στείλε νέο brief
                </Button>
              </div>
            </div>
          </motion.div>
        ) : (
          /* ─── Form State ─── */
          <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <PageHero
              label="Contact"
              icon={Mail}
              floatingIcons={[Send, MessageSquare, AtSign, Inbox, Phone, Mail]}
              title="Request a Brief"
              highlight="Brief"
              description="Συμπλήρωσε τη φόρμα. Θα επικοινωνήσουμε σε 24 ώρες."
            />

            <section className="pb-28">
              <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 max-w-5xl mx-auto">
                  {/* Form, 3 cols */}
                  <motion.form {...fade} onSubmit={handleSubmit} className="lg:col-span-3 space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-muted-foreground mb-1.5 block">Όνομα *</label>
                        <Input required placeholder="Γιώργος" name="name" autoComplete="name" className="bg-card border-border" />
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground mb-1.5 block">Επιχείρηση *</label>
                        <Input required placeholder="Hustle Labs" className="bg-card border-border" />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm text-muted-foreground mb-1.5 block">Ιστοσελίδα <span className="text-muted-foreground/50">(προαιρετικό)</span></label>
                      <Input placeholder="https://example.com" className="bg-card border-border" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-muted-foreground mb-1.5 block">Τι χρειάζεσαι; *</label>
                        <Select required>
                          <SelectTrigger className="bg-card border-border"><SelectValue placeholder="Επίλεξε..." /></SelectTrigger>
                          <SelectContent className="bg-card border-border z-50">
                            {serviceOptions.map((o) => (<SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground mb-1.5 block">Χρονοδιάγραμμα</label>
                        <Select>
                          <SelectTrigger className="bg-card border-border"><SelectValue placeholder="Πότε θέλεις;" /></SelectTrigger>
                          <SelectContent className="bg-card border-border z-50">
                            {timelineOptions.map((o) => (<SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm text-muted-foreground mb-1.5 block">Εύρος προϋπολογισμού</label>
                      <Select>
                        <SelectTrigger className="bg-card border-border"><SelectValue placeholder="Επίλεξε εύρος..." /></SelectTrigger>
                        <SelectContent className="bg-card border-border z-50">
                          {budgetOptions.map((o) => (<SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm text-muted-foreground mb-1.5 block">Σημειώσεις</label>
                      <Textarea placeholder="Πες μας περισσότερα για το project σου..." defaultValue={prefill} rows={4} className="bg-card border-border resize-none" />
                    </div>

                    <div>
                      <label className="text-sm text-muted-foreground mb-2.5 block">Πώς προτιμάς να επικοινωνήσουμε;</label>
                      <div className="flex gap-3">
                        <button type="button" onClick={() => setContactMethod("email")} className={`flex-1 flex items-center justify-center gap-2 rounded-lg border p-3 text-sm font-medium transition-all ${contactMethod === "email" ? "border-primary bg-primary/10 text-primary" : "border-border bg-card text-muted-foreground hover:border-muted-foreground/40"}`}>
                          <Mail size={16} /> Email
                        </button>
                        <button type="button" onClick={() => setContactMethod("phone")} className={`flex-1 flex items-center justify-center gap-2 rounded-lg border p-3 text-sm font-medium transition-all ${contactMethod === "phone" ? "border-primary bg-primary/10 text-primary" : "border-border bg-card text-muted-foreground hover:border-muted-foreground/40"}`}>
                          <Phone size={16} /> Τηλέφωνο
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm text-muted-foreground mb-1.5 block">{contactMethod === "email" ? "Διεύθυνση Email *" : "Τηλέφωνο *"}</label>
                      <Input required type={contactMethod === "email" ? "email" : "tel"} name={contactMethod === "email" ? "email" : "tel"} autoComplete={contactMethod === "email" ? "email" : "tel"} placeholder={contactMethod === "email" ? "hello@example.com" : "+30 69X XXX XXXX"} className="bg-card border-border" />
                    </div>

                    <div className="flex items-start gap-3 pt-2">
                      <input
                        type="checkbox"
                        id="terms"
                        required
                        className="mt-1 w-4 h-4 rounded border-border bg-card text-primary focus:ring-primary/20 focus:ring-offset-0"
                      />
                      <label htmlFor="terms" className="text-xs text-muted-foreground leading-relaxed">
                        Συμφωνώ με τους <a href="/terms" className="text-primary hover:underline transition-colors" target="_blank">Όρους Χρήσης</a> και την <a href="/privacy" className="text-primary hover:underline transition-colors" target="_blank">Πολιτική Απορρήτου</a>.
                      </label>
                    </div>

                    <Button variant="hero" size="lg" className="w-full" type="submit">
                      Αποστολή Brief <Send size={16} className="ml-2" />
                    </Button>
                  </motion.form>

                  {/* Sidebar, 2 cols */}
                  <motion.div {...fade} transition={{ delay: 0.15 }} className="lg:col-span-2 flex flex-col gap-8">
                    <div className="rounded-xl border border-border bg-card p-6">
                      <h3 className="font-display font-semibold text-foreground mb-4">Απευθείας επικοινωνία</h3>
                      <div className="space-y-4">
                        <a href="mailto:info@hustlelabs.gr" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors">
                          <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"><Mail size={16} className="text-primary" /></div>
                          info@hustlelabs.gr
                        </a>
                        <a href="tel:+302821000000" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                          <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"><Phone size={16} className="text-primary" /></div>
                          +30 28210 00000
                        </a>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"><MapPin size={16} className="text-primary" /></div>
                          Ελευθέρων Σκοπευτών 15, Γαλατάς, Χανιά 73100
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl border border-border bg-card p-6">
                      <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Clock size={16} className="text-primary" /> Τι γίνεται μετά;
                      </h3>
                      <ol className="space-y-3">
                        {nextSteps.map((step, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="font-display text-xs font-bold text-primary mt-0.5">{`0${i + 1}`}</span>
                            <div>
                              <p className="text-sm font-medium text-foreground">{step.title}</p>
                              <p className="text-xs text-muted-foreground">{step.desc}</p>
                            </div>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;
