import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, Sparkles, User, Bot, ArrowUpRight, FolderKanban, ArrowDown } from "lucide-react";

import { useCaseStudy } from "./CaseStudy";
import { CONTACT } from "@/lib/brand";

type MessageLink = {
  label: string;
  href?: string;
  external?: boolean;
  caseStudyId?: string;
  scrollToId?: string;
};

type Message = {
  id: string;
  sender: "user" | "assistant";
  text: string;
  links?: MessageLink[];
};

const SUGGESTIONS = [
  "What does Rashaad do?",
  "Tell me about Harrods",
  "Does he have eCommerce experience?",
  "How can I contact him?",
];

function getResponse(
  query: string,
  lastTopic: string | null,
): { text: string; topic: string; links?: MessageLink[] } {
  const q = query.toLowerCase().trim();

  // 1. Follow-up role questions based on conversational memory
  if (lastTopic === "harrods" && (q.includes("role") || q.includes("what did he do") || q.includes("position"))) {
    return {
      text: "He was a Student Consultant, helping frame the commercial problem, analyze the data and shape the forecasting approach.",
      topic: "harrods",
      links: [{ label: "View Harrods", caseStudyId: "harrods" }],
    };
  }

  if (lastTopic === "magpie" && (q.includes("role") || q.includes("what did he do") || q.includes("position"))) {
    return {
      text: "He's a Product Manager Associate, focusing on user feedback, voice UX friction, roleplay scenario testing, and roadmap decisions.",
      topic: "magpie",
      links: [{ label: "View Magpie", caseStudyId: "magpie" }],
    };
  }

  if (lastTopic === "perficient" && (q.includes("role") || q.includes("what did he do") || q.includes("position"))) {
    return {
      text: "He was an Associate Technical Consultant sitting between business requirements and engineering across GenAI, knowledge retrieval, Document AI, and eCommerce.",
      topic: "perficient",
      links: [{ label: "View Perficient", caseStudyId: "perficient" }],
    };
  }

  // 2. Direct intent matches

  // Contact / Reach / Hire
  if (q.includes("contact") || q.includes("email") || q.includes("reach") || q.includes("hire") || q.includes("linkedin")) {
    return {
      text: "Email or LinkedIn are the easiest ways to reach him.",
      topic: "contact",
      links: [
        { label: "Email", href: `mailto:${CONTACT.email}` },
        { label: "LinkedIn", href: CONTACT.linkedin, external: true },
        { label: "Download CV", href: "/cv/Rashaad-Syed-CV.pdf", external: true },
      ],
    };
  }

  // CV Download
  if (q.includes("cv") || q.includes("resume") || q.includes("download")) {
    return {
      text: "Sure, you can grab his CV directly below.",
      topic: "contact",
      links: [{ label: "Download CV", href: "/cv/Rashaad-Syed-CV.pdf", external: true }],
    };
  }

  // Where does he work now / Magpie AI
  if (q.includes("where does he work") || q.includes("current role") || q.includes("magpie") || q.includes("now")) {
    return {
      text: "He's currently working in AI product at Talk to Magpie AI as Product Manager Associate in London.",
      topic: "magpie",
      links: [{ label: "View Magpie", caseStudyId: "magpie" }],
    };
  }

  // Harrods
  if (q.includes("harrods") || q.includes("239") || q.includes("13m")) {
    return {
      text: "He worked on an AI forecasting problem through London LAB, using 13M+ transactions to explore revenue forecasting and customer segmentation.",
      topic: "harrods",
      links: [{ label: "View Harrods", caseStudyId: "harrods" }],
    };
  }

  // eCommerce / NorthShore Care Supply
  if (q.includes("ecommerce") || q.includes("e-commerce") || q.includes("northshore") || q.includes("stripe") || q.includes("b2b")) {
    return {
      text: "Yes. At Perficient, he worked on NorthShore Care Supply, a B2B eCommerce experience spanning product discovery, checkout and payments.",
      topic: "northshore",
      links: [{ label: "View NorthShore", caseStudyId: "northshore" }],
    };
  }

  // AI Experience / RAG
  if (q.includes("ai experience") || q.includes("ai work") || q.includes("rag") || q.includes("genai") || q.includes("llm")) {
    return {
      text: "His AI work ranges from enterprise GenAI and RAG to AI product experiences and document automation.",
      topic: "ai",
      links: [
        { label: "Magpie AI", caseStudyId: "magpie" },
        { label: "Enterprise AI", caseStudyId: "perficient" },
      ],
    };
  }

  // Metrics / Numbers
  if (q.includes("metric") || q.includes("number") || q.includes("impact") || q.includes("outcome")) {
    return {
      text: "Some of the larger ones are 13M+ transactions analysed at Harrods and 10K+ daily queries on an enterprise GenAI platform.",
      topic: "metrics",
      links: [
        { label: "Harrods", caseStudyId: "harrods" },
        { label: "Enterprise AI", caseStudyId: "perficient" },
      ],
    };
  }

  // Perficient / Clients
  if (q.includes("perficient") || q.includes("client") || q.includes("caterpillar") || q.includes("aristocrat")) {
    return {
      text: "At Perficient, he spent 16 months building AI, ML, automation and B2B eCommerce products across client contexts including Core GenAI, Caterpillar, Aristocrat, and NorthShore Care Supply.",
      topic: "perficient",
      links: [{ label: "View Perficient", caseStudyId: "perficient" }],
    };
  }

  // Technical Background
  if (q.includes("technical") || q.includes("engineering") || q.includes("code") || q.includes("developer") || q.includes("stack")) {
    return {
      text: "Yep. His background is a mix of product, AI and engineering. He has a B.Tech in Computer Science from VIT and a Master's from London Business School.",
      topic: "general",
      links: [
        { label: "View Toolkit", scrollToId: "stack" },
        { label: "Download CV", href: "/cv/Rashaad-Syed-CV.pdf", external: true },
      ],
    };
  }

  // What makes his background different
  if (q.includes("different") || q.includes("unique") || q.includes("stand out") || q.includes("why hire")) {
    return {
      text: "He combines software engineering foundations and ML research with commercial product framing from LBS and hands-on AI product management.",
      topic: "general",
      links: [{ label: "See selected work", scrollToId: "work" }],
    };
  }

  // What does Rashaad do / General intro
  if (q.includes("what does rashaad do") || q.includes("who is rashaad") || q.includes("overview") || q.includes("about")) {
    return {
      text: "He's an AI Product Manager working across product discovery, AI experiences and data-driven products. He's currently at Magpie AI.",
      topic: "general",
      links: [
        { label: "Magpie", caseStudyId: "magpie" },
        { label: "Harrods", caseStudyId: "harrods" },
        { label: "Perficient", caseStudyId: "perficient" },
      ],
    };
  }

  // Unknown / Out of scope
  return {
    text: "I don't have that detail. You can ask Rashaad directly if you'd like.",
    topic: "general",
    links: [
      { label: "Email Rashaad", href: `mailto:${CONTACT.email}` },
      { label: "LinkedIn", href: CONTACT.linkedin, external: true },
    ],
  };
}

export function AskRashaadChat() {
  const { open: openCaseStudy } = useCaseStudy();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [lastTopic, setLastTopic] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init",
      sender: "assistant",
      text: "Hi! I can help you explore Rashaad's product work, AI experience, and metrics.",
      links: [
        { label: "Magpie", caseStudyId: "magpie" },
        { label: "Harrods", caseStudyId: "harrods" },
        { label: "Perficient", caseStudyId: "perficient" },
      ],
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
      const resp = getResponse(userText, lastTopic);
      setLastTopic(resp.topic);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "assistant",
        text: resp.text,
        links: resp.links,
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 300);
  };

  const handleLinkClick = (l: MessageLink) => {
    if (l.caseStudyId) {
      setOpen(false);
      openCaseStudy(l.caseStudyId);
    } else if (l.scrollToId) {
      setOpen(false);
      const el = document.getElementById(l.scrollToId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
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
            className="fixed bottom-22 right-4 z-50 flex h-[31rem] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-md border border-hairline bg-paper shadow-2xl md:right-6"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-hairline bg-paper-deep/40 px-4 py-3">
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-forest/15 text-forest">
                  <Sparkles className="h-3.5 w-3.5" />
                </span>
                <div>
                  <h4 className="text-xs font-semibold tracking-wide text-ink uppercase font-mono">Ask Rashaad</h4>
                  <p className="text-[0.68rem] text-ink-faint">Curious about my work?</p>
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
                    className={`rounded-lg px-3.5 py-2.5 max-w-[86%] leading-relaxed ${
                      m.sender === "user"
                        ? "bg-ink text-paper"
                        : "bg-paper-deep/50 border border-hairline text-ink-soft"
                    }`}
                  >
                    <p className="whitespace-pre-line">{m.text}</p>

                    {m.links && (
                      <div className="mt-2.5 flex flex-wrap gap-1.5 pt-2 border-t border-hairline/60">
                        {m.links.map((l) =>
                          l.caseStudyId || l.scrollToId ? (
                            <button
                              key={l.label}
                              type="button"
                              onClick={() => handleLinkClick(l)}
                              className="inline-flex items-center gap-1.5 rounded bg-forest/10 px-2.5 py-1 text-[0.7rem] font-semibold text-forest hover:bg-forest hover:text-paper transition-colors"
                            >
                              {l.caseStudyId ? <FolderKanban className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
                              {l.label}
                            </button>
                          ) : (
                            <a
                              key={l.label}
                              href={l.href}
                              target={l.external ? "_blank" : undefined}
                              rel={l.external ? "noopener noreferrer" : undefined}
                              className="inline-flex items-center gap-1 rounded bg-forest/10 px-2.5 py-1 text-[0.7rem] font-semibold text-forest hover:bg-forest hover:text-paper transition-colors"
                            >
                              {l.label}
                              {l.external && <ArrowUpRight className="h-3 w-3" />}
                            </a>
                          ),
                        )}
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
                placeholder="Ask a question..."
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
