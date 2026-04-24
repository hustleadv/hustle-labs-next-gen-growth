import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Rocket, Clock, AtSign, Inbox, Globe, Sparkles, Building, Users } from "lucide-react";
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
import { sendEmail, formatEmailHtml } from "@/lib/email";
import { toast } from "sonner";

const serviceOptions = [
  { value: "website", label: "Ιστοσελίδα (High-end Development)" },
  { value: "ads", label: "Ads & Growth (Performance Marketing)" },
  { value: "ai", label: "AI & Automations (Internal Tools)" },
  { value: "sessions", label: "Ιδιαίτερα Μαθήματα & Sessions" },
  { value: "full", label: "Strategic Partnership (Equity/Full Support)" },
];

const timelineOptions = [
  { value: "asap", label: "Άμεση έναρξη (ASAP)" },
  { value: "1month", label: "Εντός 30 ημερών" },
  { value: "3months", label: "Εντός 3-6 μηνών" },
  { value: "exploring", label: "Διερευνητική επαφή" },
];

const budgetOptions = [
  { value: "1500-3000", label: "€1.5k – €3.0k" },
  { value: "3000-5000", label: "€3.0k – €5.0k" },
  { value: "5000-10000", label: "€5.0k – €10.0k" },
  { value: "10000+", label: "€10.0k+" },
  { value: "unsure", label: "Under Discussion" },
];

const locations = [
  { city: "Χανιά", type: "Main Operations (Ελευθ. Σκοπευτών 15)", icon: MapPin },
  { city: "Αθήνα", type: "Hustle Partners", icon: Users },
  { city: "Καστοριά", type: "Hustle Partners", icon: Users },
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
  "roster": "Ενδιαφέρομαι για συνεργασία με έναν συνεργάτη από το Roster.",
};

const nextSteps = [
  { icon: CheckCircle2, title: "Brief Analysis", desc: "Μελετάμε τις ανάγκες σου." },
  { icon: MessageSquare, title: "Discovery Call", desc: "Προγραμματίζουμε μια κλήση 20'." },
  { icon: Rocket, title: "Project Kickoff", desc: "Στρατηγική και έναρξη υλοποίησης." },
];

const fade = {
  initial: { opacity: 0, y: 24 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
};

const Contact = () => {
  const [searchParams] = useSearchParams();
  const subjectKey = searchParams.get("subject") || "";
  const hustlerName = searchParams.get("hustler") || "";
  let prefill = subjectMap[subjectKey] || "";
  
  if (subjectKey === "roster" && hustlerName) {
    prefill = `Ενδιαφέρομαι για συνεργασία με τον/την ${hustlerName} από το Roster.`;
  }

  const [submitted, setSubmitted] = useState(false);
  const [contactMethod, setContactMethod] = useState<"email" | "phone">("email");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    
    data.contactMethod = contactMethod;
    data.subjectKey = subjectKey;

    const html = formatEmailHtml("New Contact Form Submission", data);
    
    const { success, error } = await sendEmail({
      subject: `New Brief: ${data.name} - ${data.subjectKey || 'General Inquiry'}`,
      html: html
    });

    setIsLoading(false);

    if (success) {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      console.error("Submission failed:", error);
      toast.error("Κάτι πήγε στραβά. Δοκιμάστε ξανά ή info@hustlelabs.gr");
    }
  };

  return (
    <div className="min-h-screen pt-24 bg-background">
      <AnimatePresence mode="wait">
        {submitted ? (
          /* ─── Success State ─── */
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="py-32"
          >
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-2xl mx-auto text-center">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-10 border border-primary/20">
                  <CheckCircle2 size={48} className="text-primary" />
                </div>
                <h1 className="font-display text-4xl md:text-5xl font-black text-foreground mb-6 tracking-tight">
                  Το Brief <span className="italic text-primary">ελήφθη.</span>
                </h1>
                <p className="text-muted-foreground text-xl mb-16 font-medium max-w-lg mx-auto">
                  Ευχαριστούμε για την εμπιστοσύνη. Η ομάδα μας θα επικοινωνήσει μαζί σου εντός 24 ωρών.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {nextSteps.map((step, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="p-8 rounded-3xl border border-white/5 bg-card/50 backdrop-blur-sm text-center relative overflow-hidden group"
                    >
                      <div className="absolute top-0 left-0 w-full h-1 bg-primary/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                      <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-4 border border-primary/10">
                        <step.icon size={22} className="text-primary" />
                      </div>
                      <h3 className="font-display font-bold text-base text-foreground mb-2 tracking-wide uppercase text-xs">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                    </motion.div>
                  ))}
                </div>

                <Button 
                  variant="hero-outline" 
                  className="mt-16 rounded-full px-12 border-primary/20 hover:border-primary transition-all" 
                  onClick={() => setSubmitted(false)}
                >
                  Στείλε νέο brief
                </Button>
              </div>
            </div>
          </motion.div>
        ) : (
          /* ─── Form State ─── */
          <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <PageHero
              label="GET IN TOUCH"
              icon={Mail}
              floatingIcons={[Send, MessageSquare, AtSign, Inbox, Phone, Mail, Sparkles, Globe]}
              title="Let's Build "
              highlight="Together."
              description="Έχεις ένα νέο project στο μυαλό σου ή ψάχνεις τον ιδανικό τεχνολογικό συνεργάτη; Συμπλήρωσε τη φόρμα επικοινωνίας και θα συνδεθούμε άμεσα μαζί σου."
            />

            <section className="pb-32 -mt-10 relative z-10">
              <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 max-w-7xl mx-auto">
                  
                  {/* Left Column: Form (7 cols) */}
                  <motion.div {...fade} className="lg:col-span-7">
                    <div className="glass-card p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
                      
                      <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Όνοματεπώνυμο *</label>
                            <Input id="name" required placeholder="John Doe" name="name" autoComplete="name" className="bg-white/5 border-white/10 h-14 rounded-2xl focus:border-primary/50 transition-all text-base" />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="company" className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Επιχείρηση *</label>
                            <Input id="company" required placeholder="Brand Name" name="company" className="bg-white/5 border-white/10 h-14 rounded-2xl focus:border-primary/50 transition-all text-base" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="website" className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Website / Socials (προαιρετικό)</label>
                          <Input id="website" placeholder="https://" name="website" className="bg-white/5 border-white/10 h-14 rounded-2xl focus:border-primary/50 transition-all text-base" />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Υπηρεσία *</label>
                            <Select required name="service">
                              <SelectTrigger className="bg-white/5 border-white/10 h-14 rounded-2xl focus:border-primary/50 transition-all text-base">
                                <SelectValue placeholder="Τι σε ενδιαφέρει;" />
                              </SelectTrigger>
                              <SelectContent className="bg-card border-white/10 backdrop-blur-xl rounded-2xl">
                                {serviceOptions.map((o) => (<SelectItem key={o.value} value={o.value} className="focus:bg-primary/10 rounded-lg m-1">{o.label}</SelectItem>))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Χρονοδιάγραμμα</label>
                            <Select name="timeline">
                              <SelectTrigger className="bg-white/5 border-white/10 h-14 rounded-2xl focus:border-primary/50 transition-all text-base">
                                <SelectValue placeholder="Πότε ξεκινάμε;" />
                              </SelectTrigger>
                              <SelectContent className="bg-card border-white/10 backdrop-blur-xl rounded-2xl">
                                {timelineOptions.map((o) => (<SelectItem key={o.value} value={o.value} className="focus:bg-primary/10 rounded-lg m-1">{o.label}</SelectItem>))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Επενδυτικό Εύρος (Budget)</label>
                          <Select name="budget">
                            <SelectTrigger className="bg-white/5 border-white/10 h-14 rounded-2xl focus:border-primary/50 transition-all text-base">
                              <SelectValue placeholder="Επίλεξε εύρος..." />
                            </SelectTrigger>
                            <SelectContent className="bg-card border-white/10 backdrop-blur-xl rounded-2xl">
                              {budgetOptions.map((o) => (<SelectItem key={o.value} value={o.value} className="focus:bg-primary/10 rounded-lg m-1">{o.label}</SelectItem>))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Περιγραφή Project</label>
                          <Textarea id="message" name="message" placeholder="Πες μας περισσότερα για το project σου..." defaultValue={prefill} rows={4} className="bg-white/5 border-white/10 rounded-2xl focus:border-primary/50 transition-all text-base resize-none p-5" />
                        </div>

                        <div className="space-y-4 pt-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Προτιμώμενος Τρόπος Επικοινωνίας</label>
                          <div className="flex gap-4">
                            <button type="button" onClick={() => setContactMethod("email")} className={`flex-1 h-14 flex items-center justify-center gap-3 rounded-2xl border transition-all duration-300 font-display font-bold text-xs uppercase tracking-widest ${contactMethod === "email" ? "border-primary bg-primary/10 text-primary shadow-[0_0_20px_rgba(163,230,53,0.1)]" : "border-white/5 bg-white/5 text-white/40 hover:border-white/20"}`}>
                              <Mail size={16} /> Email
                            </button>
                            <button type="button" onClick={() => setContactMethod("phone")} className={`flex-1 h-14 flex items-center justify-center gap-3 rounded-2xl border transition-all duration-300 font-display font-bold text-xs uppercase tracking-widest ${contactMethod === "phone" ? "border-primary bg-primary/10 text-primary shadow-[0_0_20px_rgba(163,230,53,0.1)]" : "border-white/5 bg-white/5 text-white/40 hover:border-white/20"}`}>
                              <Phone size={16} /> Phone
                            </button>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="contact_input" className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">{contactMethod === "email" ? "Email Address *" : "Phone Number *"}</label>
                          <Input id="contact_input" required type={contactMethod === "email" ? "email" : "tel"} name={contactMethod === "email" ? "email" : "tel"} autoComplete={contactMethod === "email" ? "email" : "tel"} placeholder={contactMethod === "email" ? "hello@example.com" : "+30 69X XXX XXXX"} className="bg-white/5 border-white/10 h-14 rounded-2xl focus:border-primary/50 transition-all text-base" />
                        </div>

                        <div className="flex items-start gap-4 pt-4">
                          <div className="relative flex items-center mt-1">
                            <input
                              type="checkbox"
                              id="terms"
                              required
                              className="peer w-5 h-5 rounded-lg border-white/10 bg-white/5 text-primary focus:ring-primary/20 appearance-none transition-all checked:bg-primary checked:border-transparent"
                            />
                            <CheckCircle2 size={12} className="absolute left-1 text-black opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" />
                          </div>
                          <label htmlFor="terms" className="text-xs text-white/30 leading-relaxed font-medium">
                            Συμφωνώ με τους <a href="/terms" className="text-primary hover:text-white transition-colors underline underline-offset-4" target="_blank">Όρους Χρήσης</a> και την <a href="/privacy" className="text-primary hover:text-white transition-colors underline underline-offset-4" target="_blank">Πολιτική Απορρήτου</a>.
                          </label>
                        </div>

                        <Button 
                          variant="hero" 
                          size="lg" 
                          className="w-full h-16 rounded-2xl text-base font-black uppercase tracking-[0.2em] relative overflow-hidden group shadow-2xl shadow-primary/20 active:scale-[0.98] transition-transform" 
                          type="submit"
                          disabled={isLoading}
                        >
                          <span className="relative z-10 flex items-center gap-2">
                            {isLoading ? "Αποστολή..." : "Submit My Brief"} 
                            {!isLoading && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                          </span>
                        </Button>
                      </form>
                    </div>
                  </motion.div>

                  {/* Right Column: Info & Locations (5 cols) */}
                  <motion.div {...fade} transition={{ delay: 0.2 }} className="lg:col-span-5 space-y-10">
                    
                    {/* Locations Grid */}
                    <div className="space-y-6">
                      <h3 className="font-display text-2xl font-black text-foreground italic tracking-tight">Our <span className="text-primary">Locations.</span></h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {locations.map((loc, i) => (
                          <div key={i} className="p-6 rounded-3xl border border-white/5 bg-card/40 backdrop-blur-sm group hover:border-primary/30 transition-all">
                            <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                              <loc.icon size={20} className="text-primary" />
                            </div>
                            <h4 className="font-display font-bold text-lg text-foreground mb-1">{loc.city}</h4>
                            <p className="text-[10px] uppercase font-bold tracking-widest text-white/30">{loc.type}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Direct Contact */}
                    <div className="glass-card p-8 rounded-[2rem] border border-white/5 space-y-8">
                      <div className="space-y-2">
                        <h3 className="font-display font-bold text-white/40 uppercase tracking-widest text-[10px]">Contact Directly</h3>
                        <div className="space-y-4">
                          <a href="mailto:info@hustlelabs.gr" className="group flex items-center gap-4 text-lg font-medium text-foreground hover:text-primary transition-all">
                            <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center shrink-0 border border-white/5 group-hover:bg-primary/20 transition-all">
                              <Mail size={20} className="text-primary" />
                            </div>
                            info@hustlelabs.gr
                          </a>
                          <a href="tel:+306941521850" className="group flex items-center gap-4 text-lg font-medium text-foreground hover:text-primary transition-all">
                            <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center shrink-0 border border-white/5 group-hover:bg-primary/20 transition-all">
                              <Phone size={20} className="text-primary" />
                            </div>
                            +30 694 152 1850
                          </a>
                        </div>
                      </div>

                      <hr className="border-white/5" />

                      <div className="space-y-4">
                        <h3 className="font-display font-bold text-white/40 uppercase tracking-widest text-[10px] flex items-center gap-2">
                          <Clock size={12} className="text-primary" /> Response Time
                        </h3>
                        <p className="text-sm text-white/60 leading-relaxed italic">
                          "Απαντάμε σε όλα τα briefs εντός 24 ωρών. Κάθε project ξεκινάει με μια στρατηγική συζήτηση για να βεβαιωθούμε ότι το όραμά σου θα γίνει πραγματικότητα."
                        </p>
                      </div>
                    </div>

                    {/* Process Info */}
                    <div className="p-8 rounded-[2rem] bg-primary/5 border border-primary/10 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform">
                        <Sparkles size={64} className="text-primary" />
                      </div>
                      <h3 className="font-display font-bold text-primary uppercase tracking-widest text-[10px] mb-4">The Process</h3>
                      <div className="space-y-6">
                        {nextSteps.map((step, i) => (
                          <div key={i} className="flex gap-4">
                            <span className="font-display font-black text-primary/30 text-xl leading-none">{i + 1}</span>
                            <div>
                              <h4 className="text-sm font-bold text-foreground">{step.title}</h4>
                              <p className="text-xs text-white/40">{step.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
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
