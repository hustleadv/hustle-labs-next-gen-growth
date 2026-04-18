import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LabBackground from "@/components/LabBackground";
import { clients } from "@/data/clients";

const Clients = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredClients = useMemo(() => {
    return clients.filter(client =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.sector.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-primary selection:text-black overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-[70vh] flex items-center justify-center py-32 overflow-hidden border-b border-white/5">
        <LabBackground />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(208,255,0,0.03),transparent_70%)] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto text-center">

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-5 py-1.5 rounded-full bg-primary/5 border border-primary/20 mb-10"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/80 italic">Our Partners · {clients.length} Brands</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
              className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-[0.85] mb-10 uppercase italic"
            >
              Brands που μας <br />
              <span className="text-primary">Εμπιστεύονται.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as any }}
              className="font-display text-xl md:text-2xl lg:text-3xl font-medium text-white/50 tracking-tight italic mb-12 max-w-3xl mx-auto"
            >
              Επιχειρήσεις κάθε μεγέθους. <br className="hidden md:block"/>
              <span className="text-white/25">Από boutique ξενοδοχεία μέχρι διεθνή brands.</span>
            </motion.p>

          </div>
        </div>

        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-primary/10 blur-[120px] pointer-events-none"
        />
      </section>

      {/* ── CLIENT GRID ── */}
      <section className="py-32 md:py-48 relative border-t border-white/5 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 lg:px-8">

          {/* Search */}
          <motion.div {...fadeInUp} className="max-w-xl mx-auto mb-20 md:mb-32">
            <div className="relative group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary transition-colors" size={18} />
              <input
                type="text"
                placeholder="Αναζήτηση brand ή κλάδου..."
                className="w-full pl-14 pr-6 py-5 rounded-full bg-white/5 border border-white/10 focus:border-primary/40 focus:bg-white/8 outline-none transition-all font-black text-sm italic text-white placeholder:text-white/20 uppercase tracking-widest"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
            {filteredClients.map((client, i) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }}
                className="group relative flex flex-col items-center justify-center gap-5 rounded-[2.5rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-primary/20 transition-all duration-700 p-8 md:p-10 aspect-square cursor-default overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(208,255,0,0.04),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[2.5rem]" />

                {/* Top accent line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-8 bg-gradient-to-b from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Logo or icon */}
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center overflow-hidden relative z-10 transition-all duration-500 ${client.dark ? "bg-white/90 p-3" : client.lightBg ? "bg-white/10 p-2" : "bg-white/5 p-2"} group-hover:scale-110`}>
                  {client.logo ? (
                    <img
                      src={client.logo}
                      alt={client.name}
                      className={`w-full h-full object-contain transition-all duration-500 ${client.dark || client.lightBg ? "opacity-90 group-hover:opacity-100" : "opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0"}`}
                    />
                  ) : client.icon ? (
                    <client.icon size={32} className="text-white/30 group-hover:text-primary transition-colors duration-500" />
                  ) : (
                    <div className="w-8 h-8 rounded-lg bg-primary/20 animate-pulse" />
                  )}
                </div>

                {/* Text */}
                <div className="text-center relative z-10">
                  <h3 className="text-xs md:text-sm font-black text-white/60 group-hover:text-white italic uppercase tracking-tight transition-colors leading-tight mb-1">{client.name}</h3>
                  <p className="text-[9px] md:text-[10px] text-white/20 font-black uppercase tracking-[0.3em] group-hover:text-primary/60 transition-colors">{client.sector}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No results */}
          {filteredClients.length === 0 && (
            <div className="text-center py-40">
              <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-8">
                <Search size={32} className="text-white/10" />
              </div>
              <h3 className="font-display text-2xl font-black text-white/20 italic uppercase tracking-tighter">Δεν βρέθηκαν αποτελέσματα.</h3>
              <p className="text-white/10 font-black uppercase tracking-widest text-xs italic mt-3">Δοκιμάστε κάποιον άλλο όρο.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── TRUST STATEMENT ── */}
      <section className="py-32 md:py-48 lg:py-64 relative overflow-hidden bg-[#050505] border-y border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(208,255,0,0.06),transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as any }}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-12 block italic">The HustleLabs Standard</span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black tracking-tighter leading-[0.95] mb-12 md:mb-20 italic uppercase px-2">
              Δεν δουλεύουμε για όλους. <br />
              <span className="text-white/20">Δουλεύουμε σωστά.</span>
            </h2>
            <div className="w-16 md:w-20 h-px bg-primary mx-auto mb-12 md:mb-20 shadow-glow" />
            <p className="font-display text-xl md:text-3xl lg:text-4xl font-medium tracking-tight text-white/40 italic uppercase px-4 max-w-4xl mx-auto leading-tight">
              Κάθε brand σε αυτή τη σελίδα <br className="hidden md:block"/>
              <span className="text-white/70">επέλεξε execution, όχι υποσχέσεις.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-32 md:py-48 lg:py-64 relative bg-[#050505]">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-12 block italic tracking-[0.6em]">ΓΙΝΕ ΜΕΡΟΣ ΤΗΣ ΛΙΣΤΑΣ</span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-black tracking-tighter italic uppercase leading-[0.85] mb-8 px-2">
              Η επόμενη <br className="hidden md:block" />
              επιτυχία <br className="hidden lg:block"/>
              είναι η δική σου.
            </h2>
            <p className="text-primary font-black uppercase tracking-[0.4em] text-lg md:text-2xl mb-16 md:mb-24 italic">Ας χτίσουμε κάτι που θα αξίζει να το δείχνεις.</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8">
              <Button size="xl" className="w-full sm:w-auto rounded-full px-12 md:px-20 h-20 md:h-28 text-xl md:text-3xl font-black group bg-primary text-black hover:bg-white transition-all border-none italic shadow-glow-strong" asChild>
                <Link to="/project-brief">
                  Start a project <ArrowRight size={24} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="w-full sm:w-auto rounded-full px-12 md:px-20 h-20 md:h-28 text-xl md:text-3xl font-black border-white/10 hover:bg-white hover:text-black transition-all italic" asChild>
                <Link to="/book-call">Μίλα μαζί μας</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Clients;
