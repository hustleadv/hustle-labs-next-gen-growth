import { Monitor, Megaphone, Cpu, Palette, Globe, BadgeCheck, MapPin, Code2, Rocket, Zap, Heart, MessageSquare } from "lucide-react";
import vasilikiImage from "@/assets/vasiliki.JPG";
import spirosImage from "@/assets/spiros-tsavos.jpg";
import gogoImage from "@/assets/gogo kamitsi.jpg";
import christoforosImage from "@/assets/christoforos.jpg";

export interface Hustler {
    id: string;
    slug: string;
    name: string;
    role: string;
    skills: string[];
    location: string;
    verified: boolean;
    image?: string;
    initials: string;
    description: string;
    fullBio: string;
    experience: {
        years: string;
        projects: string;
        specialty: string;
    };
    socials: {
        linkedin?: string;
        instagram?: string;
        website?: string;
        github?: string;
    };
}

export const hustlers: Hustler[] = [
    {
        id: "1",
        slug: "vasiliki-giakoumaki",
        name: "Βασιλική Γιακουμάκη",
        role: "Full Stack Marketer | Co-founder of SigmaLabs | Mentor at Women Do Business",
        skills: ["Digital Marketing", "SEO", "Google Ads", "Content Strategy", "Growth Hacking"],
        location: "Χανιά, Ελλάδα / RTT",
        verified: true,
        image: vasilikiImage,
        initials: "ΒΓ",
        description: "Founder της Hustle Labs και co-founder του SigmaLabs AI. Σύμβουλος ανάπτυξης και μέντορας στο Women Do Business.",
        fullBio: "Πίσω από κάθε project που δημιουργεί η Βασιλική Γιακουμάκη, υπάρχει μια απλή σκέψη: “Πώς αυτό θα φέρει πραγματικό αποτέλεσμα;”\n\nΩς founder της Hustle Labs και co-founder του SigmaLabs AI, κινείται ανάμεσα σε marketing, τεχνολογία και AI, δημιουργώντας λύσεις που βοηθούν επιχειρήσεις να εξελιχθούν, όχι απλά να φαίνονται.\n\nΜε εμπειρία 10+ ετών, έχει συνεργαστεί με brands που ήθελαν κάτι παραπάνω από μια “όμορφη παρουσία”: ήθελαν ανάπτυξη, αυτοματισμούς και ξεκάθαρη στρατηγική.\n\nΣήμερα, μέσα από τη Hustle Labs, βοηθά ανθρώπους να μετατρέψουν ιδέες σε πραγματικά projects και projects σε επιχειρήσεις που αντέχουν.",
        experience: {
            years: "10+ Έτη",
            projects: "40+ Brands",
            specialty: "Growth Strategy",
        },
        socials: {}
    },
    {
        id: "2",
        slug: "spyros-tsavos",
        name: "Σπύρος Τσάβος",
        role: "Co-founder of SigmaLabs & Tech Lead",
        skills: ["React", "Node.js", "TypeScript", "Next.js", "Supabase", "AI Integrations"],
        location: "Καστοριά, Ελλάδα / RMT",
        verified: true,
        image: spirosImage,
        initials: "ΣΤ",
        description: "Co-founder της Sigma Labs. Εξειδίκευση σε web development, AI integrations και custom software solutions.",
        fullBio: "Ο Σπύρος είναι ο άνθρωπος πίσω από τον κώδικα. Με πάθος για την καθαρή αρχιτεκτονική και τις high-performance λύσεις, εξειδικεύεται στο να μετατρέπει σύνθετες ιδέες σε λειτουργικά ψηφιακά προϊόντα. Έχει ηγηθεί δεκάδων project ανάπτυξης λογισμικού, από e-commerce πλατφόρμες μέχρι AI-powered εφαρμογές.",
        experience: {
            years: "20+ Έτη",
            projects: "50+ Projects",
            specialty: "Full-Stack Architecture",
        },
        socials: {}
    },
    {
        id: "3",
        slug: "christoforos-proniari",
        name: "Χριστόφορος Προνιάρι",
        role: "Junior Digital Designer",
        skills: ["UI/UX Design", "Figma", "Brand Design", "Web Design", "Visual Arts"],
        location: "Αθήνα, GR / RMT",
        verified: true,
        image: christoforosImage,
        initials: "ΧΠ",
        description: "Νέο μέλος της ομάδας με πάθος για το design και την εμπειρία χρήστη. Αναλαμβάνει visuals και UI projects.",
        fullBio: "Ο Χριστόφορος φέρνει φρέσκο αέρα και αισθητική στην ομάδα. Με έμφαση στη λεπτομέρεια και τη λειτουργικότητα του design, δημιουργεί visuals που δεν είναι μόνο όμορφα αλλά και φιλικά προς τον χρήστη. Εξειδικεύεται στο Figma και το μοντέρνο UI design.",
        experience: {
            years: "2+ Έτη",
            projects: "20+ Visuals",
            specialty: "UI/UX Design",
        },
        socials: {
            website: "https://www.behance.net/crispy961", // Behance
        }
    },
    {
        id: "4",
        slug: "gogo-kamitsi",
        name: "Γωγώ Καμίτση",
        role: "Photographer / Content Creator",
        skills: ["Photography", "Content Creation", "Visual Storytelling", "Social Media Management", "Social Media Strategy", "Editing"],
        location: "Χανιά, Ελλάδα / RTT",
        verified: true,
        image: gogoImage,
        initials: "ΓΚ",
        description: "Photographer, Content Creator & Visual Storytelling. Δημιουργεί οπτικό περιεχόμενο προσαρμοσμένο σε κάθε brand, με αισθητική και στρατηγική.",
        fullBio: "Είμαι η Γωγώ, φωτογράφος που δραστηριοποιείται στα Χανιά, με έμφαση στη lifestyle φωτογραφία και σε δημιουργικά φωτογραφικά concepts.\n\nΣτόχος μου είναι να δημιουργώ εικόνες με χαρακτήρα, συναίσθημα και ταυτότητα, εικόνες που ξεχωρίζουν και αφηγούνται μια ιστορία.\n\nΔίνω ιδιαίτερη σημασία στην επικοινωνία και στην ουσιαστική κατανόηση κάθε project, δημιουργώντας μια άνετη και δημιουργική συνεργασία που οδηγεί σε φυσικό και αυθεντικό αποτέλεσμα.\n\nΞεχωρίζω για τη συνέπεια, την ευχέρεια στην επικοινωνία και τη δημιουργική μου προσέγγιση, ενώ στόχος μου είναι να βοηθώ brands και επαγγελματίες να αναδεικνύονται μέσα από μια φρέσκια, σύγχρονη και δυνατή οπτική ταυτότητα.",
        experience: {
            years: "3+ Έτη",
            projects: "15+ Projects",
            specialty: "Visual Storytelling",
        },
        socials: {}
    },
];
