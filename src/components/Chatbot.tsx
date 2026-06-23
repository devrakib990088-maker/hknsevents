"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

const faqs = [
  { q: "How do I book a consultation?", a: "Click 'Contact Us' above or call (630)-229-1402. We'll schedule your free consultation within 24 hours." },
  { q: "Do you offer showroom tours?", a: "Yes! We offer private showroom tours. You can touch fabrics, see florals, and experience our designs in person." },
  { q: "What types of events do you do?", a: "Weddings, Sangeet/Mehndi, Receptions, Corporate events, Birthdays, and more. We specialize in South Asian and multicultural celebrations." },
  { q: "What areas do you serve?", a: "We are based in Addison, IL and serve the greater Chicagoland area and beyond." },
  { q: "Do you provide day-of coordination?", a: "Absolutely! Our team of 2-4 coordinators handles every detail so you can enjoy your event stress-free." },
];

const initialBotMessage = "Hi! Welcome to HKNS Events. How can we help you today? You can ask me about our services, showroom tours, pricing, or just say hello!";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "bot"; text: string }[]>([
    { role: "bot", text: initialBotMessage },
  ]);
  const [input, setInput] = useState("");
  const [step, setStep] = useState<"initial" | "name" | "email" | "done">("initial");
  const [leadData, setLeadData] = useState({ name: "", email: "" });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const addBot = (text: string) => setMessages((prev) => [...prev, { role: "bot", text }]);
  const addUser = (text: string) => setMessages((prev) => [...prev, { role: "user", text }]);

  const handleSend = (text: string) => {
    const msg = text.trim();
    if (!msg) return;
    addUser(msg);
    setInput("");

    setTimeout(() => {
      if (step === "initial") {
        if (msg.toLowerCase().includes("pricing") || msg.toLowerCase().includes("cost") || msg.toLowerCase().includes("price") || msg.toLowerCase().includes("budget")) {
          addBot("Our pricing depends on the scope of your event. We offer customized packages starting from $2,500. Would you like us to reach out with a detailed quote?");
          setStep("name");
        } else if (msg.toLowerCase().includes("book") || msg.toLowerCase().includes("consult") || msg.toLowerCase().includes("tour") || msg.toLowerCase().includes("showroom")) {
          addBot("We'd love to host you! Could you share your name so we can schedule your private showroom tour?");
          setStep("name");
        } else if (msg.toLowerCase().includes("hello") || msg.toLowerCase().includes("hi") || msg.toLowerCase().includes("hey")) {
          addBot("Hello! I'm here to help. You can ask about our services, pricing, showroom tours, or anything else!");
        } else if (msg.toLowerCase().includes("thank")) {
          addBot("You're welcome! We're here to help. Feel free to ask if you have more questions, or visit our Contact page to speak with our team directly.");
        } else {
          const matched = faqs.find((f) => msg.toLowerCase().includes(f.q.slice(0, 10).toLowerCase()) || f.q.toLowerCase().includes(msg.slice(0, 10).toLowerCase()));
          if (matched) {
            addBot(matched.a);
          } else {
            addBot("That's a great question! Let me connect you with our team. What's your name?");
            setStep("name");
          }
        }
      } else if (step === "name") {
        setLeadData((prev) => ({ ...prev, name: msg }));
        addBot(`Nice to meet you, ${msg}! What's the best email address to reach you at?`);
        setStep("email");
      } else if (step === "email") {
        setLeadData((prev) => ({ ...prev, email: msg }));
        addBot(`Thank you, ${leadData.name || "friend"}! We've received your inquiry and our team will reach out to ${msg} within 24 hours. Is there anything else I can help with?`);
        setStep("done");
      } else {
        addBot("One of our team members will be in touch soon! Feel free to browse our Portfolio or Gallery for inspiration.");
      }
    }, 600);
  };

  const handleQuickAction = (q: string) => {
    addUser(q);
    setInput("");
    setTimeout(() => {
      const matched = faqs.find((f) => f.q === q);
      if (matched) {
        addBot(matched.a);
      }
    }, 400);
  };

  return (
    <div className="chatbot-container">
      {open && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <Sparkles size={18} />
            <span>HKNS Events Assistant</span>
            <button
              onClick={() => setOpen(false)}
              style={{ marginLeft: "auto", background: "none", border: "none", color: "white", cursor: "pointer", padding: 4 }}
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((m, i) => (
              <div key={i} className={`chatbot-msg ${m.role}`}>
                {m.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {step === "initial" && messages.length < 4 && (
            <div className="chatbot-options">
              {faqs.slice(0, 3).map((f) => (
                <button key={f.q} onClick={() => handleQuickAction(f.q)}>
                  {f.q}
                </button>
              ))}
              <button onClick={() => handleQuickAction("How do I book a consultation?")}>
                Book Now
              </button>
            </div>
          )}

          <div className="chatbot-input-area">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend(input)}
              placeholder="Type your message..."
            />
            <button onClick={() => handleSend(input)} aria-label="Send">
              <Send size={16} />
            </button>
          </div>
        </div>
      )}

      <button
        className="chatbot-button"
        onClick={() => setOpen(!open)}
        aria-label="Toggle chatbot"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}
