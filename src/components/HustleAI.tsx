import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Sparkles, ArrowRight, Bot, User, Zap } from "lucide-react";
import { Button } from "./ui/button";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
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
      const response = getAIResponse(input);
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1200);
  };

  const getAIResponse = (query: string): string => {
    const q = query.toLowerCase();
    if (q.includes("academy") || q.includes("μαθημα") || q.includes("σεμιναριο")) {
      return "Στην Hustle Academy προσφέρουμε πρακτικά workshops για Ads, AI Automation και Website Building. Το πρώτο project σου μπορεί να είναι έτοιμο σε μόλις 4 εβδομάδες!";
    }
    if (q.includes("website") || q.includes("ιστοσελιδα") || q.includes("φτιαξε")) {
      return "Στη Hustle Labs δεν φτιάχνουμε απλώς websites, χτίζουμε μηχανές ανάπτυξης. Χρησιμοποιούμε Next.js και Tailwind για μέγιστη ταχύτητα και SEO.";
    }
    if (q.includes("κοστος") || q.includes("τιμη") || q.includes("ποσο")) {
      return "Οι τιμές μας ξεκινούν από €25 για workshops και €1.200 για starter websites. Κάθε project είναι μοναδικό, οπότε το καλύτερο είναι να ξεκινήσεις ένα Brief!";
    }
    if (q.includes("space") || q.includes("χανια") || q.includes("coworking")) {
      return "Το Hustle Space βρίσκεται στα Χανιά και είναι ένας χώρος σχεδιασμένος για Deep Work και στρατηγική συνεργασία. Έχουμε Day Passes και μηνιαίες συνδρομές.";
    }
    return "Πολύ ενδιαφέρον! Στη Hustle Labs εστιάζουμε στο αποτέλεσμα (Execution over theory). Θα ήθελες να μου πεις περισσότερα για την ιδέα σου ή να κλείσουμε μια κλήση στρατηγικής;";
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
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm font-medium leading-relaxed ${
                    msg.sender === "user" 
                    ? "bg-primary text-black rounded-tr-none" 
                    : "bg-white/5 text-white/80 border border-white/10 rounded-tl-none"
                  }`}>
                    {msg.text}
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
