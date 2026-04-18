import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, BadgeCheck, MapPin, Search, ExternalLink, Linkedin, Instagram, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import LabBackground from "@/components/LabBackground";
import { useState } from "react";
import { hustlers } from "@/data/hustlers";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }
};

const Roster = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredHustlers = hustlers.filter((h) =>
    h.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    h.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    h.skills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()))
  );

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
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/80 italic">The Hustle Roster · {hustlers.length} Collaborators</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
              className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-[0.85] mb-10 uppercase italic"
            >
              Οι άνθρωποι <br />
              <span className="text-primary">πίσω από τη δουλειά.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as any }}
            >
              <p className="font-display text-xl md:text-2xl lg:text-3xl font-medium text-white/50 tracking-tight italic mb-4 max-w-3xl mx-auto">
                Επιλεγμένοι συνεργάτες που χτίζουν τα projects της Hustle.
              </p>
              <p className="font-display text-lg md:text-xl font-medium text-white/25 tracking-tight italic max-w-2xl mx-auto">
                Κάθε άτομο εδώ έχει δουλέψει, δουλεύει ή συνεργάζεται ενεργά στα project μας.
              </p>
            </motion.div>

          </div>
        </div>

        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-primary/10 blur-[120px] pointer-events-none"
        />
      </section>

      {/* ── ROSTER GRID ── */}
      <section className="py-32 md:py-48 relative border-t border-white/5 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 lg:px-8">

          {/* Search */}
          <motion.div {...fadeInUp} className="max-w-xl mx-auto mb-20 md:mb-32">
            <div className="relative group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary transition-colors" size={18} />
              <input
                type="text"
                placeholder="Αναζήτηση με όνομα, skill, ρόλο..."
                className="w-full pl-14 pr-6 py-5 rounded-full bg-white/5 border border-white/10 focus:border-primary/40 outline-none transition-all font-black text-sm italic text-white placeholder:text-white/20 uppercase tracking-widest"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </motion.div>

          {/* Count */}
          <div className="max-w-7xl mx-auto mb-12">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 italic">
              {filteredHustlers.length} {filteredHustlers.length === 1 ? "Member" : "Members"} in the roster
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-12 max-w-6xl mx-auto">
            {filteredHustlers.map((h, i) => (
              <motion.div
                key={h.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] as any }}
                className="group relative flex flex-col rounded-[3rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-primary/20 transition-all duration-700 overflow-hidden p-10 md:p-12"
              >
                {/* Top accent */}
                <div className="absolute top-0 left-12 w-px h-10 bg-gradient-to-b from-primary/40 to-transparent group-hover:h-20 transition-all duration-1000" />

                {/* Hover glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(208,255,0,0.03),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Header */}
                <div className="flex items-start gap-5 mb-8 relative z-10">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-[1.5rem] bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center shrink-0 group-hover:border-primary/20 transition-all">
                    {h.image ? (
                      <img src={h.image} alt={h.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                    ) : (
                      <span className="font-display font-black text-xl italic text-white/30 group-hover:text-primary transition-colors">{h.initials}</span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h3 className="font-display font-black text-lg italic uppercase tracking-tight group-hover:text-primary transition-colors">{h.name}</h3>
                      {h.verified && (
                        <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 shrink-0">
                          <BadgeCheck size={10} className="text-primary" />
                          <span className="text-[9px] font-black text-primary uppercase tracking-widest">Verified</span>
                        </div>
                      )}
                    </div>
                    <p className="text-[11px] text-white/30 font-black uppercase tracking-[0.3em] italic leading-tight">{h.role}</p>
                    <div className="flex items-center gap-1.5 mt-2">
                      <MapPin size={10} className="text-primary/40" />
                      <span className="text-[10px] text-white/20 font-black uppercase tracking-widest italic">{h.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-white/40 italic leading-relaxed mb-8 flex-grow relative z-10">{h.description}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                  {h.skills.slice(0, 4).map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-black text-white/30 uppercase tracking-[0.3em] group-hover:border-primary/20 group-hover:text-white/50 transition-all italic">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Experience stats */}
                <div className="grid grid-cols-3 gap-3 mb-8 p-5 rounded-2xl bg-white/[0.02] border border-white/5 relative z-10">
                  <div className="text-center">
                    <p className="text-primary font-black text-sm italic mb-0.5">{h.experience.years}</p>
                    <p className="text-[9px] text-white/20 uppercase tracking-widest font-black italic">Εμπειρία</p>
                  </div>
                  <div className="text-center border-x border-white/5">
                    <p className="text-primary font-black text-sm italic mb-0.5">{h.experience.projects}</p>
                    <p className="text-[9px] text-white/20 uppercase tracking-widest font-black italic">Projects</p>
                  </div>
                  <div className="text-center">
                    <p className="text-white/60 font-black text-[10px] italic mb-0.5 leading-tight">{h.experience.specialty}</p>
                    <p className="text-[9px] text-white/20 uppercase tracking-widest font-black italic">Focus</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between relative z-10 pt-6 border-t border-white/5">
                  <Link
                    to={`/roster/${h.slug}`}
                    className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-primary group-hover:gap-5 transition-all italic"
                  >
                    Δες προφίλ <ArrowRight size={16} />
                  </Link>
                  <div className="flex items-center gap-3">
                    {h.socials.linkedin && (
                      <a href={h.socials.linkedin} target="_blank" rel="noreferrer"
                        className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/20 hover:text-primary hover:border-primary/20 transition-all">
                        <Linkedin size={14} />
                      </a>
                    )}
                    {h.socials.instagram && (
                      <a href={h.socials.instagram} target="_blank" rel="noreferrer"
                        className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/20 hover:text-primary hover:border-primary/20 transition-all">
                        <Instagram size={14} />
                      </a>
                    )}
                    {h.socials.website && (
                      <a href={h.socials.website} target="_blank" rel="noreferrer"
                        className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/20 hover:text-primary hover:border-primary/20 transition-all">
                        <Globe size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No results */}
          {filteredHustlers.length === 0 && (
            <div className="text-center py-40">
              <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-8">
                <Search size={32} className="text-white/10" />
              </div>
              <h3 className="font-display text-2xl font-black text-white/20 italic uppercase tracking-tighter">Δεν βρέθηκαν αποτελέσματα.</h3>
            </div>
          )}
        </div>
      </section>

      {/* ── JOIN CTA ── */}
      <section className="py-32 md:py-48 lg:py-64 relative overflow-hidden bg-[#0a0a0a] border-y border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(208,255,0,0.06),transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as any }}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-12 block italic">Join the Roster</span>
            <h2 className="font-display text-3xl md:text-6xl lg:text-8xl xl:text-9xl font-black tracking-tighter italic uppercase leading-[0.85] mb-8 px-2">
              Είσαι ο επόμενος <br />
              <span className="text-white/20">Hustler;</span>
            </h2>
            <div className="w-16 md:w-20 h-px bg-primary mx-auto mb-12 md:mb-20 shadow-glow" />
            <p className="font-display text-xl md:text-2xl font-medium tracking-tight text-white/40 italic uppercase px-4 max-w-3xl mx-auto leading-tight mb-16">
              Εξειδικεύεσαι σε design, development, content ή marketing; <br className="hidden md:block" />
              <span className="text-white/70">Δούλεψε σε next-gen projects.</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button size="xl" className="w-full sm:w-auto rounded-full px-12 md:px-20 h-20 md:h-28 text-xl md:text-3xl font-black group bg-primary text-black hover:bg-white transition-all border-none italic shadow-glow-strong" asChild>
                <Link to="/join-hustler">
                  Γίνε μέλος <ArrowRight size={24} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Roster;
