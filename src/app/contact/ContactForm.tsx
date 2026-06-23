"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch {
      // Submission will still show success even if logging fails
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
        <h3 className="text-2xl font-serif font-bold text-white mb-4">
          Thank You!
        </h3>
        <p className="text-gray-400 mb-8">
          Your message has been received. We&apos;ll get back to you within 24
          hours.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              email: "",
              phone: "",
              eventType: "",
              eventDate: "",
              message: "",
            });
          }}
          className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-dark-2 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
          placeholder="Your name"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-dark-2 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-dark-2 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
            placeholder="(555) 000-0000"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="eventType"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Event Type
          </label>
          <select
            id="eventType"
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-dark-2 border border-white/10 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
          >
            <option value="">Select…</option>
            <option value="Wedding">Wedding</option>
            <option value="Sangeet/Mehndi">Sangeet / Mehndi</option>
            <option value="Reception">Reception</option>
            <option value="Corporate">Corporate Event</option>
            <option value="Birthday">Birthday</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="eventDate"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Event Date
          </label>
          <input
            type="date"
            id="eventDate"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-dark-2 border border-white/10 rounded-lg text-white focus:outline-none focus:border-primary transition-colors [color-scheme:dark]"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-dark-2 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
          placeholder="Tell us about your vision..."
        />
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300"
      >
        <Send size={18} />
        <span>Send Message</span>
      </button>
    </form>
  );
}
