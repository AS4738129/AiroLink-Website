import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bot, Send, X, Sparkles, Loader2 } from "lucide-react";
import { getAgentReply } from "../utils/chatAgent";
import { siteInfo } from "../data/site";

const WELCOME_MESSAGE = {
  role: "agent",
  text: `Hi, I'm the AiroLink Assistant. Ask me about our services, industries, quotes or support — or I can point you to a specialist on ${siteInfo.phones[0]}.`,
  quickReplies: ["Our Services", "Request a Quote", "Get Support", "Contact Us"],
};

export default function AiAgent() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, thinking, open]);

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 250);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const send = async (text) => {
    const trimmed = text.trim();
    if (!trimmed || thinking) return;

    const userMessage = { role: "user", text: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setThinking(true);

    try {
      const history = messages.map((m) => ({ role: m.role, text: m.text }));
      const reply = await getAgentReply(trimmed, history);
      setMessages((prev) => [
        ...prev,
        {
          role: "agent",
          text: reply.text,
          quickReplies: reply.quickReplies,
          link: reply.link,
        },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "agent",
          text: `Sorry, I couldn't process that right now. You can reach AiroLink directly on ${siteInfo.phones[0]}.`,
        },
      ]);
    } finally {
      setThinking(false);
    }
  };

  const handleQuickReply = (label) => {
    send(label);
  };

  const handleLinkClick = (link) => {
    setOpen(false);
    navigate(link);
  };

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close AI assistant" : "Open AI assistant"}
        aria-expanded={open}
        className="fixed bottom-24 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-techblue-500 text-white shadow-panel transition-transform hover:scale-105"
      >
        {open ? <X size={24} /> : <Bot size={26} />}
      </button>

      <div
        className={`fixed bottom-[9.5rem] right-5 z-30 flex w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-navy-900/10 bg-white shadow-panel transition-all duration-200 sm:right-5 ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
        style={{ height: "min(32rem, 70vh)" }}
        role="dialog"
        aria-modal="false"
        aria-label="AiroLink AI Assistant"
        aria-hidden={!open}
      >
        <div className="flex items-center gap-3 bg-navy-900 px-5 py-4">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sky-300">
            <Sparkles size={18} />
          </span>
          <div className="leading-tight">
            <p className="font-display text-sm font-semibold text-white">
              AiroLink Assistant
            </p>
            <p className="text-xs text-white/50">Usually replies instantly</p>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex-1 space-y-4 overflow-y-auto bg-cloud-50 px-4 py-4"
        >
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div className="max-w-[85%]">
                <div
                  className={`rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "rounded-br-sm bg-techblue-500 text-white"
                      : "rounded-bl-sm border border-navy-900/8 bg-white text-ink-700"
                  }`}
                >
                  {msg.text}
                </div>
                {msg.role === "agent" && msg.link && (
                  <button
                    onClick={() => handleLinkClick(msg.link)}
                    className="mt-2 inline-block text-xs font-semibold text-techblue-500 hover:text-techblue-400"
                  >
                    Open page →
                  </button>
                )}
                {msg.role === "agent" && msg.quickReplies?.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {msg.quickReplies.map((qr) => (
                      <button
                        key={qr}
                        onClick={() => handleQuickReply(qr)}
                        className="rounded-full border border-techblue-500/30 bg-white px-3 py-1.5 text-xs font-medium text-techblue-500 transition-colors hover:bg-techblue-500/10"
                      >
                        {qr}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          {thinking && (
            <div className="flex justify-start">
              <div className="flex items-center gap-2 rounded-2xl rounded-bl-sm border border-navy-900/8 bg-white px-4 py-2.5 text-sm text-ink-500">
                <Loader2 size={14} className="animate-spin" />
                Thinking...
              </div>
            </div>
          )}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
          className="flex items-center gap-2 border-t border-navy-900/8 bg-white px-3 py-3"
        >
          <label htmlFor="ai-agent-input" className="sr-only">
            Message the AiroLink assistant
          </label>
          <input
            id="ai-agent-input"
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about services, quotes, support..."
            className="flex-1 rounded-full border border-navy-900/10 bg-cloud-50 px-4 py-2.5 text-sm text-navy-900 placeholder:text-ink-300 focus:border-techblue-500 focus:outline-none focus:ring-2 focus:ring-techblue-500/20"
          />
          <button
            type="submit"
            disabled={thinking || !input.trim()}
            aria-label="Send message"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-techblue-500 text-white transition-colors hover:bg-techblue-400 disabled:opacity-40"
          >
            <Send size={16} />
          </button>
        </form>
      </div>
    </>
  );
}
