import { Leaf } from "lucide-react";

export interface Client {
  name: string;
  sector: string;
  logo?: string;
  icon?: any;
  iconColor?: string;
  iconBg?: string;
  dark?: boolean;
  lightBg?: boolean;
}

export const clients: Client[] = [
  { name: "Hotelyzer", sector: "Villa & Hotel Management", logo: "/images/clients/hotelyzer.png" },
  { name: "Liv Tours & Transfers", sector: "Tourism", logo: "/images/clients/logo-liv.webp" },
  { name: "Top Travel", sector: "Personal Travel Agency", logo: "/images/clients/toptravellogo.svg" },
  { name: "Harmony Apartments", sector: "Modern Apartments", logo: "/images/clients/harmony-logo.png" },
  { name: "Gesthimani's Residence", sector: "Εξοχική κατοικία | Airbnb", logo: "/images/clients/gesth-logo.jpg" },
  { name: "NKA Advisory Ltd.", sector: "Εταιρεία Διαχείρισης Οικονομικών", logo: "/images/clients/nka-logo.svg", dark: true },
  { name: "Κλάδος", sector: "Γεωπονικά Πολυκαταστήματα", icon: Leaf, iconColor: "text-green-400", iconBg: "bg-green-500/15" },
  { name: "AEGIS Dynamic Security", sector: "Συστήματα Ασφαλείας", logo: "/images/clients/logo-aegis.png", dark: true },
  { name: "Balos Paradise Cruises", sector: "Εκδρομές με Σκάφος", logo: "/images/clients/balos-paradise-logo.png", dark: true },
  { name: "Crucero Al Paraiso", sector: "Εκδρομές με Σκάφος", logo: "/images/clients/cruceroalparaiso-logo.png", dark: true },
  { name: "Falasarna Private Cruises", sector: "Private Cruises", logo: "/images/clients/falasarna-logo.png", lightBg: true },
  { name: "Κέντρο Ειδικών Θεραπειών", sector: "Πολυχώρος Ειδικών Θεραπειών", logo: "/images/clients/kentroeid-chania.png", lightBg: true },
];
