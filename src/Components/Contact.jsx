import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, Twitter, Linkedin } from 'lucide-react';

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errs.email = 'Invalid email format';
    }
    if (!form.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log('Submitted', form);
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    }
  };

  return (
    <div
      className="relative min-h-screen bg-black text-white px-6 py-20 flex items-center justify-center overflow-hidden"
      id="contact"
    >
      {/* Background Image */}
      <motion.img
        key="accent-bg"
        src="https://static.vecteezy.com/system/resources/previews/020/146/452/non_2x/smartphone-moblie-phone-set-with-white-screen-and-black-body-old-and-new-smartphone-and-button-phone-eps-10-vector.jpg"
        alt="Background Pattern"
        initial={{ opacity: 0.12, scale: 1.2 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 w-full h-full object-cover blur-xl pointer-events-none"
      />

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-[20vh] bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 left-0 w-full h-[20vh] bg-gradient-to-b from-black via-black/60 to-transparent pointer-events-none z-10" />

      {/* Contact Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative w-full max-w-3xl p-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl z-20 shadow-[0_8px_32px_rgba(255,255,255,0.05)]"
      >
        <h1 className="text-4xl font-bold text-center mb-10"> Contact Us</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {['name', 'email', 'message'].map((field) => (
            <div key={field}>
              <label className="block text-sm font-semibold capitalize">
                {field}
              </label>
              {field === 'message' ? (
                <textarea
                  rows="4"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full px-4 py-2 mt-2 bg-white/5 border border-white/30 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-white/60"
                  placeholder="Your message..."
                />
              ) : (
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  value={form[field]}
                  onChange={(e) =>
                    setForm({ ...form, [field]: e.target.value })
                  }
                  className="w-full px-4 py-2 mt-2 bg-white/5 border border-white/30 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-white/60"
                  placeholder={`Your ${field}`}
                />
              )}
              {errors[field] && (
                <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
              )}
            </div>
          ))}

          <button
            type="submit"
            className="w-full py-3 mt-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition cursor-pointer"
          >
            Send Message
          </button>

          {submitted && (
            <p className="text-green-400 text-center mt-4">
              Message sent successfully!
            </p>
          )}
        </form>

        {/* Contact Info */}
        <div className="mt-12 pt-6 border-t border-white/20 text-sm  space-y-3">
          <div className="flex  justify-center gap-6 text-lg mt-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-5 h-5 hover:scale-110 transition" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-5 h-5 hover:scale-110 transition" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5 hover:scale-110 transition" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
