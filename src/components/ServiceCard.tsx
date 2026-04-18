import { type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

const ServiceCard = ({ icon: Icon, title, description, index = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-xl border border-border bg-card p-8 hover:border-accent/25 transition-all duration-300 hover:shadow-[0_0_24px_hsl(175_85%_55%/0.08)]"
    >
      <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:bg-accent/10 group-hover:text-accent transition-colors duration-500">
        <Icon size={24} />
      </div>
      <h3 className="font-display text-lg font-semibold mb-3 text-foreground group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
