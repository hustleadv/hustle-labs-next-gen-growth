import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "gr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Initial translations structure
export const translations: Record<Language, Record<string, string>> = {
  en: {
    "nav.home": "Home",
    "nav.websites": "Websites",
    "nav.growth": "Growth",
    "nav.ai_lab": "AI Lab",
    "nav.services": "Services",
    "nav.studio": "Studio",
    "nav.portfolio": "Portfolio",
    "nav.academy": "Academy",
    "nav.space": "Space",
    "nav.brief": "Build a Project",
    "hero.badge": "Startup Studio . Digital Agency . Private Hub",
    "hero.title1": "We don't build websites.",
    "hero.title2": "We build businesses.",
    "hero.subtitle1": "Some we build for clients.",
    "hero.subtitle2": "Some we build with.",
    "hero.cta1": "Build my project",
    "hero.cta2": "Pitch your idea",
    "hero.locations": "Athens . London . Dubai",
    "intro.badge": "The Lab Identity",
    "intro.title1": "Not an agency.",
    "intro.title2": "Not a coworking.",
    "intro.title3": "Not for everyone.",
    "intro.text1": "HustleLabs is where ideas become real. And some of them become companies.",
    "intro.text2": "We combine strategy, technology and execution to turn concepts into something that actually works.",
    "forBusinesses.badge": "FOR BUSINESSES",
    "forBusinesses.title": "Build\nfor you",
    "forBusinesses.subtitle": "You bring the business. We build the engine.",
    "forBusinesses.text": "We create high-performance websites, systems and marketing strategies for businesses that want to grow fast and properly.",
    "forBusinesses.cta": "Start a project",
    "forFounders.badge": "FOR FOUNDERS",
    "forFounders.title": "Build\nwith you",
    "forFounders.subtitle": "You bring the idea. We build it together.",
    "forFounders.text1": "Some ideas need more than a service. They need a partner.",
    "forFounders.text2": "In selected cases, we collaborate, build and grow projects together.",
    "forFounders.cta": "Pitch your idea",
    "roster.badge": "The Hustle Roster",
    "roster.title1": "We don’t back everyone.",
    "roster.title2": "But when we do we go all in.",
    "roster.subtitle1": "No clients. No templates. Just real builds.",
    "roster.subtitle2": "These are not client projects. These are businesses we chose to build.",
    "growth.badge": "Scale your vision",
    "growth.title1": "Growth",
    "growth.title2": "Systems",
    "growth.subtitle": "Transparent pricing for projects that want to disrupt the status quo.",
    "growth.starter.name": "The Starter",
    "growth.starter.price": "from €1.8k",
    "growth.starter.desc": "High-end corporate presence for businesses that deserve a premium digital identity.",
    "growth.scale.name": "The Scale",
    "growth.scale.price": "Custom",
    "growth.scale.desc": "Full automated systems, custom dashboards and growth engines for high-scale operations.",
    "growth.fractional.name": "The Fractional",
    "growth.fractional.price": "Monthly",
    "growth.fractional.desc": "Your own CTO and Creative Director as a service. Continuous development and strategy.",
    "growth.cta": "Request Access",
    "growth.badge_most_efficient": "Most Efficient",
    "space.badge": "Physical HQ",
    "space.title": "Hustle\nSpace",
    "space.text": "Our premium hybrid hub in Chania. Co-working, networking and experimentation for restless minds.",
    "portfolio.hero.badge": "The Archive · Strategy · Execution",
    "portfolio.hero.title1": "Real Projects.",
    "portfolio.hero.title2": "Built to scale.",
    "portfolio.hero.subtitle1": "We don't build just websites.",
    "portfolio.hero.subtitle2": "We build high-performance digital engines.",
    "portfolio.hero.explore": "Explore Deployments",
    "portfolio.hero.start": "Start Your Project",
    "portfolio.featured.badge": "High Impact",
    "portfolio.featured.title1": "Selected",
    "portfolio.featured.title2": "Works.",
    "portfolio.featured.subtitle": "Case studies that prove the ROI.",
    "portfolio.archive.badge": "The Archive",
    "portfolio.archive.title1": "All",
    "portfolio.archive.title2": "Builds.",
    "portfolio.archive.empty": "No deployments found in this sector.",
    "portfolio.cta.badge": "THE EXECUTION PARTNER",
    "portfolio.cta.title1": "Build the",
    "portfolio.cta.title2": "Future.",
    "portfolio.cta.subtitle": "Strategy and execution for brands that demand the absolute best.",
    "portfolio.cta.button": "Start Your Project",
    "portfolio.investments.badge": "Investment Arm",
    "portfolio.investments.title": "Hustle Backed Projects",
    "portfolio.investments.subtitle": "Projects and ideas of others where Hustle invests capital, technology, and strategic guidance.",
    "footer.rights": "All rights reserved.",
  },
  gr: {
    "nav.home": "Αρχική",
    "nav.websites": "Websites",
    "nav.growth": "Growth",
    "nav.ai_lab": "AI Lab",
    "nav.services": "Υπηρεσίες",
    "nav.studio": "Studio",
    "nav.portfolio": "Portfolio",
    "nav.academy": "Academy",
    "nav.space": "Space",
    "nav.brief": "Ξεκίνα Project",
    "hero.badge": "Startup Studio . Digital Agency . Private Hub",
    "hero.title1": "Δεν χτίζουμε ιστοσελίδες.",
    "hero.title2": "Χτίζουμε επιχειρήσεις.",
    "hero.subtitle1": "Άλλες τις χτίζουμε για πελάτες.",
    "hero.subtitle2": "Άλλες μαζί τους.",
    "hero.cta1": "Build my project",
    "hero.cta2": "Pitch your idea",
    "hero.locations": "Αθήνα . Λονδίνο . Ντουμπάι",
    "intro.badge": "The Lab Identity",
    "intro.title1": "Πέρα από το Agency.",
    "intro.title2": "Πέρα από το Space.",
    "intro.title3": "Mόνο για Builders.",
    "intro.text1": "Το HustleLabs είναι το μέρος όπου οι ιδέες γίνονται πραγματικότητα. Και κάποιες από αυτές γίνονται εταιρείες.",
    "intro.text2": "Συνδυάζουμε στρατηγική, τεχνολογία και υλοποίηση για να μετατρέψουμε τα concepts σε κάτι που πραγματικά λειτουργεί.",
    "forBusinesses.badge": "ΓΙΑ ΕΠΙΧΕΙΡΗΣΕΙΣ",
    "forBusinesses.title": "Χτίζουμε\nγια εσάς",
    "forBusinesses.subtitle": "Εσύ φέρνεις την επιχείρηση. Εμείς χτίζουμε τη μηχανή.",
    "forBusinesses.text": "Δημιουργούμε ιστοσελίδες υψηλών επιδόσεων, συστήματα και στρατηγικές marketing για επιχειρήσεις που θέλουν να αναπτυχθούν σωστά και γρήγορα.",
    "forBusinesses.cta": "Ξεκίνα ένα project",
    "forFounders.badge": "ΓΙΑ FOUNDERS",
    "forFounders.title": "Χτίζουμε\nμαζί σας",
    "forFounders.subtitle": "Εσύ φέρνεις την ιδέα. Την χτίζουμε μαζί.",
    "forFounders.text1": "Κάποιες ιδέες χρειάζονται κάτι παραπάνω από μια υπηρεσία. Χρειάζονται έναν συνεργάτη.",
    "forFounders.text2": "Σε επιλεγμένες περιπτώσεις, συνεργαζόμαστε, χτίζουμε και αναπτύσσουμε projects μαζί.",
    "forFounders.cta": "Pitch την ιδέα σου",
    "roster.badge": "The Hustle Roster",
    "roster.title1": "Δεν υποστηρίζουμε τους πάντες.",
    "roster.title2": "Αλλά όταν το κάνουμε, δίνουμε τα πάντα.",
    "roster.subtitle1": "Όχι πελάτες. Όχι templates. Μόνο πραγματικά builds.",
    "roster.subtitle2": "Αυτά δεν είναι projects πελατών. Είναι επιχειρήσεις που επιλέξαμε να χτίσουμε.",
    "growth.badge": "Ανάπτυξε το όραμά σου",
    "growth.title1": "Συστήματα",
    "growth.title2": "Ανάπτυξης",
    "growth.subtitle": "Διαφανείς τιμές για projects που θέλουν να ανατρέψουν τα δεδομένα.",
    "growth.starter.name": "The Starter",
    "growth.starter.price": "από €1.8k",
    "growth.starter.desc": "Premium εταιρική παρουσία για επιχειρήσεις που αξίζουν μια κορυφαία ψηφιακή ταυτότητα.",
    "growth.scale.name": "The Scale",
    "growth.scale.price": "Custom",
    "growth.scale.desc": "Πλήρως αυτοματοποιημένα συστήματα, custom dashboards και μηχανές ανάπτυξης για μεγάλες επιχειρήσεις.",
    "growth.fractional.name": "The Fractional",
    "growth.fractional.price": "Μηνιαία",
    "growth.fractional.desc": "Ο δικός σου CTO και Creative Director ως υπηρεσία. Συνεχής ανάπτυξη και στρατηγική.",
    "growth.cta": "Request Access",
    "growth.badge_most_efficient": "Η πιο Αποδοτική",
    "space.badge": "Physical HQ",
    "space.title": "Hustle\nSpace",
    "space.text": "Ο premium υβριδικός μας χώρος στα Χανιά. Co-working, δικτύωση και πειραματισμός για ανήσυχα μυαλά.",
    "space.cta": "Επισκέψου το Space",
    "portfolio.hero.badge": "Το Αρχειο · Στρατηγικη · Υλοποιηση",
    "portfolio.hero.title1": "Πραγματικά Projects.",
    "portfolio.hero.title2": "Χτισμένα να αντέχουν.",
    "portfolio.hero.subtitle1": "Δεν φτιάχνουμε απλώς ιστοσελίδες.",
    "portfolio.hero.subtitle2": "Κατασκευάζουμε ψηφιακές μηχανές υψηλών επιδόσεων.",
    "portfolio.hero.explore": "Εξερεύνηση Έργων",
    "portfolio.hero.start": "Ξεκίνα Project",
    "portfolio.featured.badge": "Ισχυρός Αντίκτυπος",
    "portfolio.featured.title1": "Επιλεγμένα",
    "portfolio.featured.title2": "Έργα.",
    "portfolio.featured.subtitle": "Case studies που αποδεικνύουν την απόδοση (ROI).",
    "portfolio.archive.badge": "Το Αρχείο",
    "portfolio.archive.title1": "Όλα τα",
    "portfolio.archive.title2": "Έργα.",
    "portfolio.archive.empty": "Δεν βρέθηκαν έργα σε αυτήν την κατηγορία.",
    "portfolio.cta.badge": "THE EXECUTION PARTNER",
    "portfolio.cta.title1": "Χτίζουμε το",
    "portfolio.cta.title2": "Μέλλον.",
    "portfolio.cta.subtitle": "Στρατηγική και υλοποίηση για brands που απαιτούν το απόλυτο.",
    "portfolio.cta.button": "Ξεκίνα το Project",
    "portfolio.investments.badge": "Επενδυτικός Βραχίονας",
    "portfolio.investments.title": "Hustle Backed Projects",
    "portfolio.investments.subtitle": "Projects και ιδέες τρίτων στις οποίες η Hustle επενδύει κεφάλαιο, τεχνολογία και στρατηγική καθοδήγηση.",
    "footer.rights": "Με την επιφύλαξη παντός δικαιώματος.",
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("hustle_lang");
    return (saved as Language) || "gr";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("hustle_lang", lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
