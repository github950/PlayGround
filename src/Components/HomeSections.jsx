import React from 'react';
import { motion } from 'framer-motion';
import {
  FaLeaf,
  FaRecycle,
  FaTruck,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGlobeAmericas,
  FaYoutube,
} from 'react-icons/fa';
import { CheckCircle } from 'lucide-react'; // or use your own check icon
import ContactPage from './Contact';
import AboutPage from './AboutPage';
import BlogSection from './Blog';
import FaqSection from './Faq';

const features = [
  'Timeless style that never fades',
  'Bold and powerful presence',
  'Matches effortlessly with anything',
  'Slimming, sleek, and universally flattering',
];

const WhyBlack = () => {
  return (
    <section
      id="why-black"
      className="min-h-screen relative bg-black text-black px-6 py-24 flex items-center justify-center overflow-hidden"
    >
      {/* Blurred Background Accent */}
      <motion.img
        src="https://images.pexels.com/photos/21044849/pexels-photo-21044849/free-photo-of-black-and-white-photography-of-men-in-suits-posing-on-chairs.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Background Blur"
        initial={{ opacity: 0.1, scale: 1.1 }}
        animate={{ opacity: 0.35, scale: 1.2 }}
        transition={{
          duration: 2,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 blur-xl pointer-events-none z-0"
      />

      {/* Top and Bottom Gradients */}
      <div className="absolute bottom-0 left-0 w-full h-[20vh] bg-gradient-to-t from-black via-black/50 to-transparent z-0 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[20vh] bg-gradient-to-b from-black via-black/50 to-transparent z-0 pointer-events-none" />

      {/* Main Content */}
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-stretch relative z-10 gap-10">
        {/* Left: Glassy Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2,
            type: 'spring',
            stiffness: 100,
            damping: 20,
          }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl border border-white/10 bg-white/5"
        >
          <img
            src="https://images.pexels.com/photos/21044849/pexels-photo-21044849/free-photo-of-black-and-white-photography-of-men-in-suits-posing-on-chairs.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="All Black Fashion"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right: Text Content with New Animation */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 80,
            damping: 14,
            duration: 1.4,
          }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 p-14 flex flex-col justify-center bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white relative w-fit">
            Why Black?
          </h2>

          <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed tracking-wide">
            Black transcends trends — it’s a symbol of strength, clarity, and
            simplicity. Whether you're dressing up or keeping it casual, black
            delivers elegance without effort.
          </p>

          <ul className="space-y-4 mb-8">
            {features.map((feature, idx) => (
              <motion.li
                key={idx}
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.3 + idx * 0.1,
                  type: 'spring',
                  stiffness: 80,
                  damping: 12,
                }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-lg text-white"
              >
                <CheckCircle className="w-5 h-5 text-white" />
                {feature}
              </motion.li>
            ))}
          </ul>

          <p className="text-base text-gray-300 leading-relaxed">
            Our mission is to bring you the essence of black — minimal yet
            expressive, refined yet rebellious. Every piece in our collection is
            crafted to elevate your identity, without screaming for attention.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const ecoItems = [
  {
    icon: <FaLeaf />,
    title: 'Organic Fabrics',
    description: 'Breathable, skin-safe cotton. No chemicals. No compromise.',
  },
  {
    icon: <FaRecycle />,
    title: 'Plastic-Free Packaging',
    description:
      'Minimalist, biodegradable materials from production to delivery.',
  },
  {
    icon: <FaTruck />,
    title: 'Carbon-Neutral Delivery',
    description: 'We offset every shipment’s footprint to stay 100% net zero.',
  },
  {
    icon: <FaGlobeAmericas />,
    title: 'Low-Impact Manufacturing',
    description: 'Powered by clean energy and sustainable production methods.',
  },
];

const EcoStatement = () => (
  <section
    id="eco"
    className="min-h-screen relative bg-black text-white px-6 py-24 flex items-center justify-center overflow-hidden"
  >
    {/* Background Accent Blur */}
    <motion.img
      key="accent-bg"
      src="https://bw-engineering.com/wp-content/uploads/2023/07/Sustainability-Header-Image-3-scaled.jpg"
      alt="Background Blur"
      initial={{ opacity: 0.15, x: -60 }}
      animate={{ opacity: 0.35, x: 0 }}
      transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
      className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 scale-125 blur-xl pointer-events-none z-0"
    />

    {/* Top and Bottom Gradient Overlays */}
    <div className="absolute bottom-0 left-0 w-full h-[20vh] bg-gradient-to-t from-black via-black/60 to-transparent z-0 pointer-events-none" />
    <div className="absolute top-0 left-0 w-full h-[20vh] bg-gradient-to-b from-black via-black/60 to-transparent z-0 pointer-events-none" />

    {/* Glass Container */}
    <div className="max-w-6xl w-full mx-auto relative z-10 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 shadow-[0_20px_80px_rgba(255,255,255,0.05)]">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-white tracking-tight"
      >
        Sustainability is Style
      </motion.h2>

      {/* Grid Items */}
      <div className="grid md:grid-cols-4 gap-10 text-center">
        {ecoItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 + index * 0.1 }}
            className="p-6 flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="text-white text-4xl mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold mb-2 text-white">
              {item.title}
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed max-w-xs">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export const Footer = () => (
  <footer className="relative bg-black text-white py-24 px-6 overflow-hidden">
    {/* Blurred Background Layer */}
    {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-white/5 via-white/0 to-white/5 pointer-events-none blur-lg z-0" />
    <div className="absolute bottom-0 left-0 w-full h-[20vh] bg-gradient-to-t from-black via-black/60 to-transparent z-0 pointer-events-none" /> */}
    {/* <div className="absolute top-0 left-0 w-full h-[20vh] bg-gradient-to-b from-black via-black/60 to-transparent z-0 pointer-events-none" /> */}

    {/* Footer Content */}
    <div className="w-full max-w-[1600px] mx-auto relative z-10 backdrop-blur-lg bg-white/9 border border-white/10 rounded-3xl p-12 shadow-[0_10px_50px_rgba(255,255,255,0.05)]">
      {/* Mission Statement */}
      <motion.img
        key="accent-bg"
        src="https://img.freepik.com/premium-vector/black-wavy-lines-shapes-amazing-smooth-lines-effect-black-white-illustration_206325-1682.jpg"
        alt="Background Blur"
        initial={{ opacity: 0.15, x: -60 }}
        animate={{ opacity: 0.35, x: 0 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 scale-125 blur-xl pointer-events-none z-0"
      />

      <div className="text-center mb-16 px-4 lg:px-32">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Timeless Style. Sustainable Soul.
        </h2>
        <p className="text-gray-300 text-sm max-w-3xl mx-auto">
          Our all-black essentials reflect a mindset — bold, clean, and always
          in style. We believe fashion should leave an impression, not a
          footprint. Join us in redefining how clothing feels, fits, and affects
          the world.
        </p>
      </div>

      {/* Links Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-lg mb-4 tracking-wide">Quick Links</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <a href="#shop" className="hover:text-white transition">
                Shop
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-white transition">
                FAQ
              </a>
            </li>
            <li>
              <a href="#terms" className="hover:text-white transition">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#careers" className="hover:text-white transition">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h4 className="font-bold text-lg mb-4 tracking-wide">
            Customer Service
          </h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <a href="#support" className="hover:text-white transition">
                Help Center
              </a>
            </li>
            <li>
              <a href="#returns" className="hover:text-white transition">
                Returns & Exchanges
              </a>
            </li>
            <li>
              <a href="#shipping" className="hover:text-white transition">
                Shipping Information
              </a>
            </li>
            <li>
              <a href="#track" className="hover:text-white transition">
                Track Your Order
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Our Values */}
        <div>
          <h4 className="font-bold text-lg mb-4 tracking-wide">Our Values</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <a href="#sustainability" className="hover:text-white transition">
                Sustainability
              </a>
            </li>
            <li>
              <a href="#ethics" className="hover:text-white transition">
                Ethical Manufacturing
              </a>
            </li>
            <li>
              <a href="#materials" className="hover:text-white transition">
                Eco-Friendly Fabrics
              </a>
            </li>
            <li>
              <a href="#impact" className="hover:text-white transition">
                Carbon Neutrality
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-bold text-lg mb-4 tracking-wide">Connect</h4>
          <p className="text-gray-400 text-sm mb-4">
            Follow us for behind-the-scenes looks and product drops.
          </p>
          <div className="flex gap-5 text-white text-2xl">
            <a href="#">
              <FaFacebook className="hover:text-gray-300 transition" />
            </a>
            <a href="#">
              <FaInstagram className="hover:text-gray-300 transition" />
            </a>
            <a href="#">
              <FaTwitter className="hover:text-gray-300 transition" />
            </a>
            <a href="#">
              <FaYoutube className="hover:text-gray-300 transition" />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-bold text-lg mb-4 tracking-wide">Stay Updated</h4>
          <p className="text-gray-300 text-sm mb-4">
            Get early access to launches, news & curated content. No spam.
          </p>
          <form className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 text-sm rounded-md bg-white/10 text-white placeholder-gray-300 border border-white/20 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-white transition"
            />
            <button className="bg-white text-black px-5 py-2 rounded-md font-semibold hover:bg-gray-200 transition cursor-pointer">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider Bottom */}
      <div className="mt-16 border-t border-white/10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Timeless Black. Crafted with integrity.
        Powered by minimalism.
      </div>
    </div>
  </footer>
);

const Main = () => {
  return (
    <>
      <WhyBlack />
      <AboutPage />
      <BlogSection />
      <EcoStatement />

      <FaqSection />
      <ContactPage />
    </>
  );
};

export default Main;
