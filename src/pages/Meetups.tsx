import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  MapPin,
  Users,
  ExternalLink,
  Clock,
  Image,
  Mic,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import WP_MEETUP_1 from "@/assets/chaniawordpressmeetup.JPG";
import WP_MEETUP_2 from "@/assets/meetup.jpg";

/* ─── Data ─── */

const upcomingMeetups = [
  {
    title: "WordPress Performance & Core Web Vitals",
    date: "TBA, Μάρτιος 2026",
    time: "19:00 – 21:00",
    location: "Hustle Space, Χανιά",
    description:
      "Πώς να κάνεις το WordPress site σου πιο γρήγορο, πρακτικά tips & live demo.",
    rsvpLink: "https://www.meetup.com/",
  },
  {
    title: "WooCommerce για Ελληνικές Επιχειρήσεις",
    date: "TBA, Απρίλιος 2026",
    time: "19:00 – 21:00",
    location: "Hustle Space, Χανιά",
    description:
      "Setup, πληρωμές, αποστολές, SEO, ό,τι χρειάζεσαι για e-shop στην Ελλάδα.",
    rsvpLink: "https://www.meetup.com/",
  },
  {
    title: "WordPress + AI: Automations & Content",
    date: "TBA, Μάιος 2026",
    time: "19:00 – 21:00",
    location: "Hustle Space, Χανιά",
    description:
      "Πώς το AI μπορεί να σε βοηθήσει με content, SEO και customer support στο WordPress.",
    rsvpLink: "https://www.meetup.com/",
  },
];

const pastMeetups = [
  { title: "Intro to Gutenberg Blocks", date: "Ιαν 2026", attendees: 24 },
  { title: "WordPress Security Best Practices", date: "Νοε 2025", attendees: 18 },
  { title: "Building with Elementor Pro", date: "Σεπ 2025", attendees: 30 },
  { title: "SEO Masterclass for WordPress", date: "Ιούλ 2025", attendees: 22 },
  { title: "Headless WordPress & React", date: "Μάι 2025", attendees: 16 },
  { title: "First Meetup, Hello Chania!", date: "Μαρ 2025", attendees: 35 },
];

const fade = {
  initial: { opacity: 0, y: 24 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
};

const Meetups = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* ──── Hero ──── */}
      <PageHero
        label="Community"
        icon={Users}
        floatingIcons={[Calendar, Users, MapPin, Mic, Heart, Clock]}
        title="Chania WordPress Meetups"
        highlight="Meetups"
        description="Meetups, workshops και networking στον χώρο μας. Ανοιχτά σε όλους, ελεύθερη είσοδος."
      >
        <p className="text-sm text-muted-foreground/60 italic mb-8">
          Διοργανώνουμε & φιλοξενούμε τα Chania WordPress Meetups στο Hustle
          Space.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" asChild>
            <a
              href="https://www.meetup.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              RSVP στο Meetup.com{" "}
              <ExternalLink size={16} className="ml-1" />
            </a>
          </Button>
          <Button variant="hero-outline" size="lg" asChild>
            <Link to="/hustle-space">Δες τον χώρο</Link>
          </Button>
        </div>
      </PageHero>

      {/* ──── Intro strip ──── */}
      <section className="border-t border-border bg-card/20">
        <div className="container mx-auto px-4 lg:px-8 py-12 md:py-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              {...fade}
              className="flex flex-col md:flex-row items-center gap-12 mb-16"
            >
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 shadow-glow">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-10 h-10 text-primary-soft"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM3.443 12c0-1.36.325-2.645.9-3.782l4.955 13.58A8.563 8.563 0 013.443 12zm8.557 8.557a8.519 8.519 0 01-3.024-.55l3.212-9.332 3.293 9.02a.807.807 0 00.061.12 8.52 8.52 0 01-3.542.742zm1.476-12.564c.645-.034 1.226-.1 1.226-.1.577-.068.51-.916-.068-.884 0 0-1.735.136-2.855.136-1.052 0-2.82-.136-2.82-.136-.578-.032-.645.85-.068.884 0 0 .546.066 1.122.1l1.667 4.566-2.342 7.023L6.382 12.1c.645-.034 1.226-.1 1.226-.1.577-.068.51-.916-.068-.884 0 0-1.735.136-2.855.136-.2 0-.437-.006-.687-.015A8.535 8.535 0 0112 3.443c2.242 0 4.286.862 5.813 2.27-.037-.002-.072-.008-.11-.008-1.052 0-1.798.916-1.798 1.9 0 .884.51 1.632 1.052 2.516.408.714.884 1.632.884 2.956 0 .918-.352 1.983-.816 3.468l-1.071 3.576-3.878-11.528zM17.07 19.32l3.26-9.424a8.088 8.088 0 00.645-3.18c0-.327-.02-.647-.06-.96A8.545 8.545 0 0120.557 12a8.556 8.556 0 01-3.487 7.32z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed italic">
                  Τα{" "}
                  <span className="font-black text-primary italic uppercase">
                    Chania WordPress Meetups
                  </span>{" "}
                  διοργανώνονται από την ομάδα του{" "}
                  <span className="font-black text-foreground italic uppercase">
                    Hustle Labs
                  </span>{" "}
                  και φιλοξενούνται στο{" "}
                  <Link
                    to="/hustle-space"
                    className="text-primary hover:underline underline-offset-4 decoration-primary/30"
                  >
                    Hustle Space
                  </Link>
                  . Κάθε meetup είναι μια ευκαιρία για γνώση, networking και ανταλλαγή ιδεών σε ένα περιβάλλον υψηλής αισθητικής.
                </p>
              </div>
            </motion.div>

            {/* Snapshots Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
               <motion.div 
                 {...fade} 
                 transition={{ delay: 0.1 }}
                 className="group aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-700 shadow-2xl"
               >
                 <img src={WP_MEETUP_1} alt="Chania WordPress Meetup Session" className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[2s]" />
               </motion.div>
               <motion.div 
                 {...fade} 
                 transition={{ delay: 0.2 }}
                 className="group aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-700 shadow-2xl md:mt-12"
               >
                 <img src={WP_MEETUP_2} alt="Community Meetup at Hustle Space" className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[2s]" />
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ──── Upcoming Meetups ──── */}
      <section className="py-28 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            label="Προσεχώς"
            title="Επόμενα Meetups"
            highlight="Meetups"
            description="Κλείσε θέση, τα meetups γίνονται στο Hustle Space. Ελεύθερη είσοδος."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {upcomingMeetups.map((m, i) => (
              <motion.div
                key={i}
                {...fade}
                transition={{ delay: i * 0.08 }}
                className="group rounded-xl border border-border bg-card p-6 hover:border-accent/20 transition-all duration-300 flex flex-col"
              >
                {/* Date & location */}
                <div className="flex items-center gap-2 text-xs text-primary-soft mb-1">
                  <Calendar size={14} />
                  <span>{m.date}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                  <Clock size={14} />
                  <span>{m.time}</span>
                  <span className="amber-dot mx-1" />
                  <MapPin size={14} />
                  <span>{m.location}</span>
                </div>

                <h3 className="font-display font-semibold text-foreground text-sm mb-2">
                  {m.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-5 flex-1">
                  {m.description}
                </p>

                <Button variant="hero-outline" size="sm" asChild className="w-full">
                  <a
                    href={m.rsvpLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    RSVP <ExternalLink size={12} className="ml-1" />
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── Past Meetups ──── */}
      <section className="py-28 border-t border-border bg-card/20">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            label="Αρχείο"
            title="Προηγούμενα Meetups"
            highlight="Meetups"
            description="Ένα μικρό ιστορικό από τα meetups μας."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {pastMeetups.map((pm, i) => (
              <motion.div
                key={i}
                {...fade}
                transition={{ delay: i * 0.06 }}
                className="rounded-xl border border-border bg-card overflow-hidden hover:border-accent/15 transition-all duration-300"
              >
                {/* Placeholder photo */}
                <div className="aspect-video bg-secondary/60 flex items-center justify-center">
                  <Image
                    size={28}
                    className="text-muted-foreground/30"
                    aria-hidden="true"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-sm font-semibold text-foreground mb-1.5">
                    {pm.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar size={12} />
                    <span>{pm.date}</span>
                    <span className="amber-dot mx-1" />
                    <Users size={12} />
                    <span>{pm.attendees} άτομα</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── Organizer Note ──── */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            {...fade}
            className="max-w-3xl mx-auto rounded-xl border border-border/40 bg-card/40 p-8 md:p-10 flex flex-col md:flex-row items-start gap-6"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Heart size={22} className="text-primary-soft" />
            </div>
            <div>
              <span className="text-xs font-medium text-primary-soft uppercase tracking-[0.2em] mb-2 block">
                Organizer
              </span>
              <p className="text-foreground/80 leading-relaxed">
                Τα Chania WordPress Meetups διοργανώνονται από την ομάδα του{" "}
                <Link
                  to="/"
                  className="font-semibold text-foreground hover:text-accent transition-colors"
                >
                  Hustle Labs
                </Link>{" "}
                και φιλοξενούνται στο{" "}
                <Link
                  to="/hustle-space"
                  className="font-semibold text-foreground hover:text-accent transition-colors"
                >
                  Hustle Space
                </Link>{" "}
                , τον φυσικό μας χώρο στα Χανιά. Στόχος μας: μια ζωντανή
                τοπική κοινότητα γύρω από το WordPress, το web development
                και την τεχνολογία.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ──── Speaker CTA ──── */}
      <section className="py-28 border-t border-border text-center">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fade}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Θέλεις να μιλήσεις σε meetup;
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Αν έχεις κάτι ενδιαφέρον να μοιραστείς, πες μας. Ψάχνουμε
              πάντα speakers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact?subject=meetup-speaker">
                  Πρότεινε θέμα{" "}
                  <ArrowRight size={18} className="ml-1" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a
                  href="https://www.meetup.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  RSVP στο Meetup.com{" "}
                  <ExternalLink size={16} className="ml-1" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Meetups;
