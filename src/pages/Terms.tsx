import { motion } from "framer-motion";
import { FileText, Shield, AlertCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Terms = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <Button variant="ghost" className="mb-12 rounded-full gap-2 text-muted-foreground hover:text-foreground" asChild>
          <Link to="/"><ArrowLeft size={16} /> {t('brief.back')}</Link>
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <FileText size={24} />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-black tracking-tighter uppercase italic">
              {t('terms.title1')} <span className="text-primary">{t('terms.title2')}</span>
            </h1>
          </div>

          <div className="prose prose-invert max-w-none space-y-12 text-white/60 leading-relaxed">
            <section className="space-y-6">
              <p className="text-xl text-white/80 font-medium italic border-l-2 border-primary/30 pl-6">
                {t('terms.intro')}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-primary font-black">01.</span> {t('terms.section1.title')}
              </h2>
              <p>
                {t('terms.section1.text')}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-primary font-black">02.</span> {t('terms.section2.title')}
              </h2>
              <p>
                {t('terms.section2.text')}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-primary font-black">03.</span> {t('terms.section3.title')}
              </h2>
              <p>
                {t('terms.section3.text')}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-primary font-black">04.</span> {t('terms.section4.title')}
              </h2>
              <p>
                {t('terms.section4.text')}
              </p>
            </section>

            <p className="text-xs text-white/20 text-center pt-10">
              {t('privacy.last_update')}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;
