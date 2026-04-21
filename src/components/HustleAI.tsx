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
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[100] w-12 h-12 rounded-full bg-black/80 backdrop-blur-xl text-primary flex items-center justify-center shadow-2xl border border-primary/20 hover:border-primary/50 transition-all focus:outline-none"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={20} />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <Bot size={20} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-[100] w-[90vw] md:w-[400px] h-[600px] max-h-[70vh] bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/5 bg-white/[0.02] flex items-center gap-4">
              <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                <Bot size={22} />
              </div>
              <div>
                <h3 className="font-display font-black text-white uppercase italic tracking-wider text-sm">Lab Buddy</h3>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-[10px] uppercase font-black tracking-widest text-white/30 italic">Online · Assistant</span>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[85%] p-4 rounded-3xl text-sm italic font-medium leading-relaxed ${
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
                  <div className="bg-white/5 p-4 rounded-3xl rounded-tl-none border border-white/10 flex gap-1">
                    <span className="w-1 h-1 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1 h-1 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1 h-1 bg-primary/40 rounded-full animate-bounce" />
                  </div>
                </div>
              )}
            </div>

            {/* Quick Suggestions */}
            {messages.length < 3 && (
              <div className="px-6 pb-4 flex flex-wrap gap-2">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => { setInput(s); }}
                    className="px-4 py-2 rounded-full border border-white/5 bg-white/[0.02] text-[10px] font-black uppercase tracking-wider text-white/40 hover:text-primary hover:border-primary/30 transition-all italic"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input Area */}
            <div className="p-6 border-t border-white/5 bg-white/[0.01]">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ρώτησε κάτι..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-6 pr-14 text-sm italic outline-none focus:border-primary/30 transition-all"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="absolute right-2 p-3 rounded-xl bg-primary text-black disabled:opacity-50 disabled:grayscale transition-all shadow-glow hover:scale-105"
                >
                  <Send size={18} />
                </button>
              </div>
              <p className="text-[8px] text-center mt-4 text-white/10 uppercase font-black tracking-widest italic">
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
