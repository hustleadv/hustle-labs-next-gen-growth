import { Monitor, Megaphone, Cpu, Palette, Globe, BadgeCheck, MapPin, Code2, Rocket, Zap, Heart, MessageSquare } from "lucide-react";
import vasilikiImage from "@/assets/vasiliki-giakoumaki.jpg";
import spirosImage from "@/assets/spiros-tsavos.jpg";

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
        role: "Full Stack Marketer | HustleLabs Founder",
        skills: ["Digital Marketing", "SEO", "Google Ads", "Content Strategy", "Growth Hacking"],
        location: "Χανιά, Ελλάδα / RTT",
        verified: true,
        image: vasilikiImage,
        initials: "ΒΓ",
        description: "Εξειδίκευση στο digital marketing και growth strategies για startups και SMEs. Με 10+ χρόνια εμπειρίας σε SEO, paid ads.",
        fullBio: "Ως founder της Hustle Labs, η Βασιλική συνδυάζει τη δημιουργικότητα με τα data. Η στρατηγική της προσέγγιση στο marketing δεν σταματά στα impressions, αλλά εστιάζει στις πωλήσεις και το scalability. Έχει βοηθήσει δεκάδες brands να βρουν τη φωνή τους και να κυριαρχήσουν στην αγορά τους.",
        experience: {
            years: "12+ Έτη",
            projects: "100+ Brands",
            specialty: "Growth Strategy",
        },
        socials: {
            linkedin: "#",
            instagram: "#",
            website: "#",
        }
    },
    {
        id: "2",
        slug: "spyros-tsavos",
        name: "Σπύρος Τσάβος",
        role: "Full-Stack Developer & Tech Lead",
        skills: ["React", "Node.js", "TypeScript", "Next.js", "Supabase", "AI Integrations"],
        location: "Καστοριά, Ελλάδα / RMT",
        verified: true,
        image: spirosImage,
        initials: "ΣΤ",
        description: "Co-founder της Sigma Labs. Εξειδίκευση σε web development, AI integrations και custom software solutions.",
        fullBio: "Ο Σπύρος είναι ο άνθρωπος πίσω από τον κώδικα. Με πάθος για την καθαρή αρχιτεκτονική και τις high-performance λύσεις, εξειδικεύεται στο να μετατρέπει σύνθετες ιδέες σε λειτουργικά ψηφιακά προϊόντα. Έχει ηγηθεί δεκάδων project ανάπτυξης λογισμικού, από e-commerce πλατφόρμες μέχρι AI-powered εφαρμογές.",
        experience: {
            years: "8+ Έτη",
            projects: "50+ Projects",
            specialty: "Full-Stack Architecture",
        },
        socials: {
            linkedin: "#",
            github: "#",
            website: "#",
        }
    },
    {
        id: "3",
        slug: "christoforos-proniari",
        name: "Χριστόφορος Προνιάρι",
        role: "Junior Digital Designer",
        skills: ["UI/UX Design", "Figma", "Brand Design", "Web Design", "Visual Arts"],
        location: "Αθήνα, GR / RMT",
        verified: true,
        initials: "ΧΠ",
        description: "Νέο μέλος της ομάδας με πάθος για το design και την εμπειρία χρήστη. Αναλαμβάνει visuals και UI projects.",
        fullBio: "Ο Χριστόφορος φέρνει φρέσκο αέρα και αισθητική στην ομάδα. Με έμφαση στη λεπτομέρεια και τη λειτουργικότητα του design, δημιουργεί visuals που δεν είναι μόνο όμορφα αλλά και φιλικά προς τον χρήστη. Εξειδικεύεται στο Figma και το μοντέρνο UI design.",
        experience: {
            years: "2+ Έτη",
            projects: "20+ Visuals",
            specialty: "UI/UX Design",
        },
        socials: {
            linkedin: "#",
            instagram: "#",
        }
    },
    {
        id: "4",
        slug: "gogo-kamitsi",
        name: "Γωγώ Καμίτση",
        role: "Photographer / Content Creator",
        skills: ["Photography", "Content Creation", "Visual Storytelling", "Social Media Strategy", "Editing"],
        location: "Χανιά, Ελλάδα / RTT",
        verified: true,
        initials: "ΓΚ",
        description: "Εξειδίκευση στη visual αισθητική και τη δημιουργία περιεχομένου που αφηγείται ιστορίες. Φωτογραφία και social strategy.",
        fullBio: "Η Γωγώ είναι η ματιά πίσω από την κάμερα. Με έντονη αισθητική και έμφαση στη λεπτομέρεια, δημιουργεί περιεχόμενο που δεν είναι απλά όμορφο, αλλά επικοινωνεί την ουσία κάθε brand. Από conceptual photography μέχρι social media content, εξασφαλίζει ότι το visual representation είναι πάντα high-end.",
        experience: {
            years: "5+ Έτη",
            projects: "40+ Projects",
            specialty: "Visual Storytelling",
        },
        socials: {
            linkedin: "#",
            instagram: "#",
        }
    },
];
