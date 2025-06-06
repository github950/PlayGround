import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'What makes BlackThread sustainable?',
    answer:
      'We use organic fabrics, recycled packaging, and maintain carbon neutrality through offset programs. Sustainability is woven into every step of our process.',
  },
  {
    question: 'Do you ship internationally?',
    answer:
      'Yes, we offer worldwide shipping with eco-conscious partners to minimize our carbon footprint.',
  },
  {
    question: 'How do I care for my BlackThread apparel?',
    answer:
      'Wash cold, hang dry. Avoid bleach and high-heat tumble drying to protect the fabric and the planet.',
  },
  {
    question: 'Can I return or exchange an item?',
    answer:
      'Absolutely. We accept returns within 14 days of delivery, as long as items are unworn and tags intact.',
  },
  {
    question: 'What makes BlackThread sustainable?',
    answer:
      'We use organic fabrics, recycled packaging, and maintain carbon neutrality through offset programs. Sustainability is woven into every step of our process.',
  },
  {
    question: 'Do you ship internationally?',
    answer:
      'Yes, we offer worldwide shipping with eco-conscious partners to minimize our carbon footprint.',
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      className="relative min-h-screen bg-black text-white px-6 py-24 overflow-hidden"
      id="faq"
    >
      {/* Background Texture */}
      <motion.img
        src="https://cdn.vectorstock.com/i/500p/65/36/hand-drawn-questions-marks-isolated-on-white-vector-53606536.jpg"
        alt="abstract"
        initial={{ opacity: 0.1, scale: 1.2 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0 w-full h-full object-cover blur-2xl pointer-events-none z-0"
      />

      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-full h-[20vh] bg-gradient-to-b from-black via-black/70 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-[20vh] bg-gradient-to-t from-black via-black/70 to-transparent z-10" />

      {/* FAQ Content */}
      <div className="relative z-20 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold font-serif mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-white/60 mb-12 text-lg">
          Everything you need to know about our brand, mission, and policies.
        </p>

        <div className="space-y-6 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 cursor-pointer"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left flex justify-between items-center text-lg font-medium focus:outline-none cursor-pointer"
              >
                <span>{faq.question}</span>
                <span className="text-white/50 text-2xl">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 text-white/80 text-sm"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
