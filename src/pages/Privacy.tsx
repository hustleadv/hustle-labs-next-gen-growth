import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, ArrowLeft, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Privacy = () => {
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
              <Shield size={24} />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-black tracking-tighter uppercase italic">
              {t('privacy.title1')} <span className="text-primary">{t('privacy.title2')}</span>
            </h1>
          </div>

          <div className="prose prose-invert max-w-none space-y-12 text-white/60 leading-relaxed">
            <section className="space-y-6">
              <p className="text-xl text-white/80 font-medium italic border-l-2 border-primary/30 pl-6">
                {t('privacy.intro')}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-primary font-black">01.</span> {t('privacy.section1.title')}
              </h2>
              <p>
                {t('privacy.section1.text')}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t('privacy.section1.item1')}</li>
                <li>{t('privacy.section1.item2')}</li>
                <li>{t('privacy.section1.item3')}</li>
                <li>{t('privacy.section1.item4')}</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-primary font-black">02.</span> {t('privacy.section2.title')}
              </h2>
              <p>
                {t('privacy.section2.text')}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t('privacy.section2.item1')}</li>
                <li>{t('privacy.section2.item2')}</li>
                <li>{t('privacy.section2.item3')}</li>
                <li>{t('privacy.section2.item4')}</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-primary font-black">03.</span> {t('privacy.section3.title')}
              </h2>
              <p>
                {t('privacy.section3.text')}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-primary font-black">04.</span> {t('privacy.section4.title')}
              </h2>
              <p>
                {t('privacy.section4.text')}
              </p>
            </section>

            <section className="p-8 rounded-[2rem] bg-white/5 border border-white/10 space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3">
                <MessageSquare className="text-primary" size={20} /> {t('privacy.contact.title')}
              </h2>
              <p className="text-sm">
                {t('privacy.contact.text')} <br />
                <span className="text-primary font-bold">hustlelabs.gr@gmail.com</span>
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

export default Privacy;
