import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Sparkles, ArrowRight, Bot, User, Zap } from "lucide-react";
import { Button } from "./ui/button";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
  action?: {
    label: string;
    link: string;
  };
}

const HustleAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Γεια! Είμαι ο Lab Buddy. Πώς μπορώ να σε βοηθήσω να χτίσεις το επόμενο project σου σήμερα;",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Mock AI Response Logic
    setTimeout(() => {
      const responseObj = getAIResponse(input);
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: responseObj.text,
        sender: "ai",
        timestamp: new Date(),
        action: responseObj.action,
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1200);
  };

  const getAIResponse = (query: string): { text: string; action?: { label: string; link: string } } => {
    const q = query.toLowerCase();
    if (q.includes("academy") || q.includes("μαθημα") || q.includes("σεμιναριο")) {
      return { 
        text: "Στην Hustle Academy μαθαίνεις να χτίζεις κερδοφόρα digital projects.", 
        action: { label: "Δες την Academy", link: "/academy" } 
      };
    }
    if (q.includes("website") || q.includes("ιστοσελιδα") || q.includes("φτιαξε")) {
      return { 
        text: "Χτίζουμε ταχύτατες 'μηχανές ανάπτυξης' με Next.js και Tailwind.", 
        action: { label: "Ξεκίνα Project", link: "/project-brief" } 
      };
    }
    if (q.includes("κοστος") || q.includes("τιμη") || q.includes("ποσο")) {
      return { 
        text: "Κάθε project είναι μοναδικό. Ξεκίνα το Brief για ακριβή κοστολόγηση.", 
        action: { label: "Συμπλήρωσε το Brief", link: "/project-brief" } 
      };
    }
    if (q.includes("space") || q.includes("χανια") || q.includes("coworking")) {
      return { 
        text: "Το Hustle Space στα Χανιά είναι σχεδιασμένο για Deep Work & δικτύωση.", 
        action: { label: "Δες το Space", link: "/space" } 
      };
    }
    if (q.includes("contact") || q.includes("επικοινωνια") || q.includes("κλεισε")) {
      return { 
        text: "Θέλεις να συζητήσουμε την ιδέα σου σε μια κλήση στρατηγικής;", 
        action: { label: "Book a Call", link: "/book-call" } 
      };
    }
    return { 
      text: "Ενδιαφέρον! Θέλεις να μου πεις περισσότερα για την ιδέα σου ή να κλείσουμε μια κλήση;", 
      action: { label: "Επικοινωνία", link: "/contact" } 
    };
  };

  const suggestions = [
    "Πώς λειτουργεί η Academy;",
    "Θέλω ένα Custom Website",
    "Τι είναι το Hustle Space;",
  ];

  return (
    <>
      {/* Floating Trigger */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[100] w-11 h-11 rounded-full bg-black/90 backdrop-blur-2xl text-primary flex items-center justify-center shadow-2xl border border-white/10 hover:border-primary/40 transition-all focus:outline-none"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={18} />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }}>
              <MessageSquare size={18} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            className="fixed bottom-20 right-6 z-[100] w-[90vw] md:w-[350px] h-auto max-h-[70vh] bg-[#080808] border border-white/10 rounded-[2rem] shadow-2xl flex flex-col overflow-hidden backdrop-blur-2xl"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/5 bg-white/[0.01] flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                <Zap size={14} />
              </div>
              <div>
                <h3 className="font-sans font-bold text-white tracking-[0.2em] text-[10px] uppercase">Lab Buddy</h3>
                <div className="flex items-center gap-1.5 leading-none mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-[8px] uppercase font-bold tracking-[0.2em] text-white/20">Active Engine</span>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-5 scrollbar-hide min-h-0">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[88%] space-y-3 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
                    <div className={`p-4 rounded-2xl text-sm font-medium leading-relaxed ${
                      msg.sender === "user" 
                      ? "bg-primary text-black rounded-tr-none" 
                      : "bg-white/5 text-white/80 border border-white/10 rounded-tl-none"
                    }`}>
                      {msg.text}
                    </div>
                    {msg.action && (
                      <motion.div 
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex justify-start"
                      >
                        <Button size="sm" className="rounded-xl bg-primary text-black text-[10px] font-bold uppercase tracking-widest hover:bg-white transition-all h-10 px-4 border-none shadow-glow" asChild>
                          <Link to={msg.action.link} className="flex items-center gap-2">
                            {msg.action.label} <ArrowRight size={12} />
                          </Link>
                        </Button>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/5 p-3 rounded-2xl rounded-tl-none border border-white/10 flex gap-1">
                    <span className="w-1 h-1 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1 h-1 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1 h-1 bg-primary/40 rounded-full animate-bounce" />
                  </div>
                </div>
              )}
            </div>

            {/* Quick Suggestions */}
            {messages.length < 3 && (
              <div className="px-5 pb-3 flex flex-wrap gap-2">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => { setInput(s); }}
                    className="px-3 py-1.5 rounded-full border border-white/5 bg-white/[0.02] text-[9px] font-bold uppercase tracking-widest text-white/30 hover:text-primary hover:border-primary/20 transition-all"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input Area */}
            <div className="p-5 border-t border-white/5 bg-white/[0.01]">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ρώτησε κάτι..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-5 pr-12 text-sm outline-none focus:border-primary/20 transition-all"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="absolute right-1.5 p-2 rounded-lg bg-primary text-black disabled:opacity-50 disabled:grayscale transition-all hover:scale-105"
                >
                  <Send size={16} />
                </button>
              </div>
              <p className="text-[8px] text-center mt-3 text-white/5 uppercase font-bold tracking-[0.3em]">
                Execution-driven AI for Builders
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HustleAI;
