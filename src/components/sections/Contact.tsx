import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../../data/portfolioData";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle,
  FileDown,
  MessageSquare,
} from "lucide-react";

export const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || "Full Stack Engineering Inquiry",
    )}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-24 relative bg-transparent overflow-hidden"
    >
      {/* Semi-transparent backdrop overlay to allow continuous 3D world visibility */}
      <div className="absolute inset-0 bg-slate-950/25 dark:bg-slate-950/25 light:bg-slate-100/35 backdrop-blur-[1px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-mono font-semibold mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>DIRECT COMMUNICATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white dark:text-white light:text-slate-950 mt-2 tracking-tight">
            Let's Engineer Something Great
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base mt-4">
            Available for full-time senior frontend/full-stack engineering
            roles, systems architecture consulting, and high-impact software
            missions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Info & Direct Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-slate-900/50 dark:bg-slate-900/50 light:bg-white/80 border border-indigo-500/20 dark:border-indigo-500/20 light:border-slate-200 rounded-3xl p-6 sm:p-8 backdrop-blur-xl space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900">
                Direct Channels
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-cyan-400/50 transition-all group shadow-sm"
                >
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:text-cyan-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500">
                      Email Address
                    </p>
                    <p className="text-sm font-bold text-white dark:text-white light:text-slate-900 group-hover:text-cyan-400 truncate">
                      {personalInfo.email}
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-emerald-500/50 transition-all group shadow-sm"
                >
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:text-emerald-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500">
                      Direct Line
                    </p>
                    <p className="text-sm font-bold text-white dark:text-white light:text-slate-900 group-hover:text-emerald-400">
                      {personalInfo.phone}
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 shadow-sm">
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500">
                      Based In
                    </p>
                    <p className="text-sm font-bold text-white dark:text-white light:text-slate-900">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                <p className="text-xs font-mono uppercase text-slate-400 dark:text-slate-400 light:text-slate-500 mb-3">
                  Verified Developer Profiles
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-300 hover:border-cyan-400/50 text-slate-300 dark:text-slate-300 light:text-slate-800 hover:text-white transition-all text-xs font-semibold"
                  >
                    <Github className="w-4 h-4 text-cyan-400" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-300 hover:border-indigo-400/50 text-slate-300 dark:text-slate-300 light:text-slate-800 hover:text-white transition-all text-xs font-semibold"
                  >
                    <Linkedin className="w-4 h-4 text-indigo-400" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={personalInfo.resumeUrl}
                    download
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-300 hover:border-cyan-400/50 text-slate-300 dark:text-slate-300 light:text-slate-800 hover:text-white transition-all text-xs font-semibold"
                  >
                    <FileDown className="w-4 h-4 text-cyan-400" />
                    <span>Resume</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="bg-slate-900/50 dark:bg-slate-900/50 light:bg-white/80 border border-indigo-500/20 dark:border-indigo-500/20 light:border-slate-200 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-xl">
              <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 mb-1">
                Initiate Conversation
              </h3>
              <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mb-6">
                Send a project proposal, team inquiry, or interview schedule
                directly to Daniel's inbox.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white dark:text-white light:text-slate-900">
                    Email Client Dispatched!
                  </h4>
                  <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600">
                    Your inquiry has been formulated and sent to{" "}
                    <strong className="text-emerald-400">
                      {personalInfo.email}
                    </strong>
                    .
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-3 text-xs text-cyan-400 hover:underline font-semibold"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Alex Henderson"
                        className="w-full px-4 py-3 rounded-2xl bg-slate-950/70 dark:bg-slate-950/70 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-white dark:text-white light:text-slate-900 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="e.g. alex@company.com"
                        className="w-full px-4 py-3 rounded-2xl bg-slate-950/70 dark:bg-slate-950/70 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-white dark:text-white light:text-slate-900 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="e.g. Senior Full Stack Role / System Architecture"
                      className="w-full px-4 py-3 rounded-2xl bg-slate-950/70 dark:bg-slate-950/70 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-white dark:text-white light:text-slate-900 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Describe your company, technical stack, or project requirements..."
                      className="w-full px-4 py-3 rounded-2xl bg-slate-950/70 dark:bg-slate-950/70 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-white dark:text-white light:text-slate-900 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-bold text-sm shadow-xl shadow-indigo-500/25 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message Directly</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
