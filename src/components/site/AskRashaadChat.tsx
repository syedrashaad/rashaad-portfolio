import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, Sparkles, User, Bot, ArrowUpRight } from "lucide-react";

import { CONTACT } from "@/lib/brand";

type Message = {
  id: string;
  sender: "user" | "assistant";
  text: string;
  links?: { label: string; href: string; external?: boolean }[];
};

const SUGGESTIONS = [
  "What kind of Product Manager is Rashaad?",
  "Tell me about Magpie AI",
  "What did he do at Harrods?",
  "Tell me about NorthShore B2B",
  "What are his enterprise AI metrics?",
  "How can I get in touch?",
];

function generateResponse(query: string): { text: string; links?: Message["links"] } {
  const q = query.toLowerCase();

  if (q.includes("pm") || q.includes("product manager") || q.includes("kind of") || q.includes("background")) {
    return {
      text: "Rashaad is a Product Manager with strong AI depth and software engineering foundations. He bridges product strategy, user feedback, data analytics, and technical execution: having built AI platforms, commercial forecasting models, and B2B eCommerce systems.",
      links: [{ label: "Download CV", href: "/cv/Rashaad-Syed-CV.pdf", external: true }],
    };
  }

  if (q.includes("magpie")) {
    return {
      text: "At Talk to Magpie AI (Sep 2026 -> Present), Rashaad works as Product Manager Associate. He conducts direct user research, analyzes conversation friction in AI roleplay & voice experiences, and turns customer feedback into product and roadmap decisions.",
    };
  }

  if (q.includes("harrods") || q.includes("239") || q.includes("13m")) {
    return {
      text: "At Harrods (London LAB), Rashaad narrowed a broad commercial challenge into an AI forecasting opportunity. He analyzed 13M+ transactions using K-Means clustering and category demand forecasting, delivering a £239M 2026 revenue view for executive leadership.",
    };
  }

  if (q.includes("northshore") || q.includes("ecommerce") || q.includes("stripe") || q.includes("b2b")) {
    return {
      text: "For NorthShore Care Supply, Rashaad led the B2B eCommerce experience reengineering across product discovery, cart, checkout, and Stripe payment integration in direct collaboration with engineering teams.",
    };
  }

  if (q.includes("metric") || q.includes("impact") || q.includes("perficient") || q.includes("genai") || q.includes("10k")) {
    return {
      text: "Rashaad's key verified production metrics include:\n• 13M+ Harrods transactions & £239M revenue view\n• 10K+ daily RAG queries at <2s latency & 99.9% uptime\n• 80%+ manual data entry cut (1,200+ hrs/mo saved for Aristocrat)\n• 120K+ sales records in XGBoost demand models\n• 90% accuracy across 10K+ scientific images.",
    };
  }

  if (q.includes("contact") || q.includes("email") || q.includes("hire") || q.includes("reach") || q.includes("linkedin")) {
    return {
      text: "You can reach out to Rashaad directly via email or LinkedIn. He is actively open to Product Manager, AI Product, and Product Strategy roles in London & Remote.",
      links: [
        { label: "Email Rashaad", href: `mailto:${CONTACT.email}` },
        { label: "LinkedIn Profile", href: CONTACT.linkedin, external: true },
      ],
    };
  }

  if (q.includes("education") || q.includes("lbs") || q.includes("degree")) {
    return {
      text: "Rashaad holds a Master's in Analytics and Management from London Business School (2025 – 2026) and a B.Tech in Computer Science & Engineering from VIT University (2019 – 2023).",
    };
  }

  return {
    text: "Rashaad Syed is an AI Product Manager based in London. He has worked across AI roleplay products at Magpie AI, revenue forecasting at Harrods (£239M revenue view across 13M+ transactions), enterprise GenAI systems at Perficient (10K+ daily queries), and B2B eCommerce at NorthShore Care Supply.",
    links: [
      { label: "Download CV", href: "/cv/Rashaad-Syed-CV.pdf", external: true },
      { label: "Email Rashaad", href: `mailto:${CONTACT.email}` },
    ],
  };
}

export function AskRashaadChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init",
      sender: "assistant",
      text: "Hi! I'm Rashaad's AI Assistant. Ask me anything about his product experience, AI projects, metrics, or background.",
    },
  ]);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
    }
  }, [messages, open]);

  const handleSend = (userText: string) => {
    if (!userText.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), sender: "user", text: userText };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      const resp = generateResponse(userText);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "assistant",
        text: resp.text,
        links: resp.links,
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 350);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          type="button"
          onClick={() => setOpen((v) => !v)}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="group flex items-center gap-2.5 rounded-full border border-forest/30 bg-ink px-4 py-3 text-paper shadow-xl backdrop-blur-md transition-colors hover:bg-forest"
          aria-label="Ask Rashaad AI Assistant"
        >
          <Sparkles className="h-4 w-4 text-forest transition-colors group-hover:text-paper" />
          <span className="text-[0.82rem] font-medium tracking-wide">Ask Rashaad</span>
        </motion.button>
      </div>

      {/* Compact Chat Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            data-lenis-prevent="true"
            className="fixed bottom-22 right-4 z-50 flex h-[30rem] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-md border border-hairline bg-paper shadow-2xl md:right-6"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-hairline bg-paper-deep/40 px-4 py-3">
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-forest/15 text-forest">
                  <Sparkles className="h-3.5 w-3.5" />
                </span>
                <div>
                  <h4 className="text-xs font-semibold tracking-wide text-ink">Ask Rashaad AI</h4>
                  <p className="text-[0.68rem] text-ink-faint">Factual insights on experience & metrics</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full p-1 text-ink-soft transition-colors hover:bg-ink/5 hover:text-ink"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Messages Area */}
            <div
              ref={scrollRef}
              data-lenis-prevent="true"
              className="custom-scrollbar flex-1 overflow-y-auto p-4 space-y-3.5 text-[0.85rem]"
            >
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex items-start gap-2.5 ${m.sender === "user" ? "flex-row-reverse" : ""}`}
                >
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[0.65rem] ${
                      m.sender === "user" ? "bg-ink text-paper" : "bg-forest/15 text-forest"
                    }`}
                  >
                    {m.sender === "user" ? <User className="h-3 w-3" /> : <Bot className="h-3 w-3" />}
                  </span>
                  <div
                    className={`rounded-lg px-3.5 py-2.5 max-w-[84%] leading-relaxed ${
                      m.sender === "user"
                        ? "bg-ink text-paper"
                        : "bg-paper-deep/50 border border-hairline text-ink-soft"
                    }`}
                  >
                    <p className="whitespace-pre-line">{m.text}</p>

                    {m.links && (
                      <div className="mt-2.5 flex flex-wrap gap-2 pt-1 border-t border-hairline/60">
                        {m.links.map((l) => (
                          <a
                            key={l.label}
                            href={l.href}
                            target={l.external ? "_blank" : undefined}
                            rel={l.external ? "noopener noreferrer" : undefined}
                            className="inline-flex items-center gap-1 rounded bg-forest/10 px-2.5 py-1 text-[0.72rem] font-medium text-forest hover:bg-forest hover:text-paper transition-colors"
                          >
                            {l.label}
                            {l.external && <ArrowUpRight className="h-3 w-3" />}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Suggestions */}
            <div className="border-t border-hairline/60 bg-paper/60 px-3 py-2">
              <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar text-[0.72rem]">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => handleSend(s)}
                    className="shrink-0 rounded-full border border-hairline bg-paper px-2.5 py-1 text-ink-soft hover:border-forest/50 hover:text-forest transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Field */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="flex items-center gap-2 border-t border-hairline bg-paper px-3 py-2.5"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about product, AI, metrics..."
                className="flex-1 rounded-sm bg-paper-deep/30 px-3 py-1.5 text-xs text-ink placeholder:text-ink-faint focus:outline-none focus:ring-1 focus:ring-forest"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="flex h-7 w-7 items-center justify-center rounded-sm bg-forest text-paper disabled:opacity-40"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
