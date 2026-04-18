import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  index?: number;
}

const TestimonialCard = ({ quote, name, role, index = 0 }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-xl border border-border bg-card p-8 relative"
    >
      <Quote size={24} className="text-primary/30 mb-4" />
      <p className="text-foreground/90 leading-relaxed mb-6 text-sm italic">"{quote}"</p>
      <div>
        <p className="font-display font-semibold text-sm text-foreground">{name}</p>
        <p className="text-xs text-muted-foreground mt-0.5">{role}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
