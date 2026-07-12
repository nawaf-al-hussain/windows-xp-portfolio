import { useState } from 'react';
import { Send, Github, Globe, Mail, MapPin, GraduationCap } from 'lucide-react';
import { PROFILE } from '../data/profile';

const ICON_MAP = {
  github: Github,
  globe: Globe,
  mail: Mail,
  map: MapPin,
  edu: GraduationCap,
};

export default function ContactMe() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      // Build a mailto link so the message actually goes somewhere
      const subject = encodeURIComponent(`Portfolio message from ${formData.name}`);
      const body = encodeURIComponent(`${formData.message}\n\n— ${formData.name} (${formData.email})`);
      window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full text-black p-4">
      {/* Contact Form */}
      <div className="flex-1 bg-white p-6 shadow-sm border border-gray-200 rounded flex flex-col">
        <h2 className="text-2xl font-bold mb-1 font-serif text-blue-900">Get In Touch</h2>
        <p className="text-sm text-gray-500 mb-6">Drop me a line, and I'll get back to you ASAP.</p>

        {submitted && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded mb-4 text-sm font-medium">
            Opening your email client... thanks for reaching out!
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 flex-1">
          <div>
            <label className="block text-xs font-semibold uppercase text-gray-600 mb-1">Your Name</label>
            <input
              type="text"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition shadow-inner bg-gray-50 focus:bg-white"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase text-gray-600 mb-1">Email Address</label>
            <input
              type="email"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition shadow-inner bg-gray-50 focus:bg-white"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="you@example.com"
            />
          </div>
          <div className="flex-1 flex flex-col">
            <label className="block text-xs font-semibold uppercase text-gray-600 mb-1">Message</label>
            <textarea
              required
              className="w-full flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition shadow-inner bg-gray-50 focus:bg-white resize-none min-h-[120px]"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="How can I help you?"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow flex items-center justify-center gap-2 transition"
          >
            <Send className="w-4 h-4" /> Send Message
          </button>
        </form>
      </div>

      {/* Social Side Panel */}
      <div className="w-full md:w-1/3 bg-gray-50 border border-gray-200 rounded p-6 flex flex-col items-center justify-center text-center gap-4">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2">
          <Mail className="w-7 h-7 text-blue-600" />
        </div>
        <div>
          <h3 className="font-bold text-gray-800">Email</h3>
          <a
            href={`mailto:${PROFILE.email}`}
            className="text-sm text-blue-600 hover:underline break-all"
          >
            {PROFILE.email}
          </a>
        </div>

        <div className="w-full h-px bg-gray-200 my-2"></div>

        <div className="flex flex-col gap-2 w-full">
          {PROFILE.accounts.map((acc) => {
            const IconComp = ICON_MAP[acc.icon] || Globe;
            const content = (
              <>
                <IconComp className="w-4 h-4" />
                <span className="text-sm font-medium">{acc.label}</span>
                <span className="text-xs text-gray-500 ml-auto truncate">{acc.value}</span>
              </>
            );
            return acc.href ? (
              <a
                key={acc.id}
                href={acc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded hover:bg-white border border-transparent hover:border-gray-200 transition text-gray-700 text-left"
              >
                {content}
              </a>
            ) : (
              <div
                key={acc.id}
                className="flex items-center gap-2 px-3 py-2 text-gray-700 text-left"
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
