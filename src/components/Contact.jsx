import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 px-6 max-w-6xl mx-auto text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-saffron-neon">Get In Touch</h2>
        <div className="w-24 h-1 bg-saffron-neon mx-auto rounded-full shadow-neon-orange" />
        <p className="text-gray-400 mt-6 max-w-xl mx-auto text-lg">
          Have a project in mind or just want to say hello? I'm always open to discussing 
          AI, Data Science, or Astrology!
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left: Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-10 rounded-3xl border-white/10 shadow-2xl text-left"
        >
          
<form
  action="https://send.pageclip.co/puL4pCrfrzvBdJ1FNEJK3LAMT9Em0zur/kundli"
  className="pageclip-form space-y-6"
  method="post"
>
  <div className="grid md:grid-cols-2 gap-6">
    <div className="flex flex-col gap-2">
      <label
        htmlFor="full-name"
        className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1"
      >
        Full Name
      </label>
      <input
        id="full-name"
        type="text"
        name="name"
        placeholder="John Doe"
        required
        className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-saffron-neon transition-all placeholder:text-gray-600"
      />
    </div>

    <div className="flex flex-col gap-2">
      <label
        htmlFor="email"
        className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1"
      >
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="john@example.com"
        required
        className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-saffron-neon transition-all placeholder:text-gray-600"
      />
    </div>
  </div>

  <div className="flex flex-col gap-2">
    <label
      htmlFor="message"
      className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1"
    >
      Message
    </label>
    <textarea
      id="message"
      name="message"
      rows={5}
      placeholder="Tell me about your project..."
      required
      className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-saffron-neon transition-all placeholder:text-gray-600 resize-none"
    />
  </div>

  <button
    type="submit"
    className="pageclip-form__submit w-full py-4 bg-saffron-neon text-black font-bold rounded-xl hover:bg-deep-orange transition-all shadow-neon-orange uppercase tracking-widest text-sm"
  >
    <span>Send Message</span>
  </button>
</form>
        </motion.div>

        {/* Right: Socials & Info */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-start gap-10 text-left"
        >
          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:border-saffron-neon transition-all shadow-lg">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-saffron-neon"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
</div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Email Me</p>
                <p className="text-xl font-medium text-white">connect.janmejay@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 group">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:border-saffron-neon transition-all shadow-lg">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-saffron-neon"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.09 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.78.59 2.62a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.46-1.11a2 2 0 0 1 2.11-.45c.84.27 1.72.47 2.62.59A2 2 0 0 1 22 16.92z"/>
  </svg>
</div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Contact Number</p>
                <p className="text-xl font-medium text-white">+91 95123 63057</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:border-saffron-neon transition-all shadow-lg">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-saffron-neon"
  >
    <path d="M12 21s-6-4.35-6-10a6 6 0 1 1 12 0c0 5.65-6 10-6 10z" />
    <circle cx="12" cy="11" r="2" />
  </svg>
</div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Location</p>
                <p className="text-xl font-medium text-white">Ahmedabad, Gujarat</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            {/* Social Logos only */}
            <a href="https://github.com/janmejay25" target="_blank" rel="noreferrer" className="p-3 glass rounded-full text-white hover:text-saffron-neon transition-all border border-white/10 hover:border-saffron-neon/50">
              <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="white"
    className="text-saffron-neon"
  >
    <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2.17c-3.2.7-3.88-1.54-3.88-1.54-.52-1.32-1.28-1.67-1.28-1.67-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.72-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.28 1.2-3.08-.12-.3-.52-1.5.12-3.13 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.82 0c2.22-1.5 3.2-1.18 3.2-1.18.64 1.63.24 2.83.12 3.13.75.8 1.2 1.82 1.2 3.08 0 4.43-2.69 5.4-5.25 5.69.41.35.78 1.04.78 2.1v3.12c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/>
  </svg>
            </a>
            <a href="https://linkedin.com/in/janmejaypandya" target="_blank" rel="noreferrer" className="p-3 glass rounded-full text-white hover:text-saffron-neon transition-all border border-white/10 hover:border-saffron-neon/50">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="mailto:connect.janmejay@gmail.com" className="p-3 glass rounded-full text-white hover:text-saffron-neon transition-all border border-white/10 hover:border-saffron-neon/50">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22 6 12 13 2 6"/></svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
