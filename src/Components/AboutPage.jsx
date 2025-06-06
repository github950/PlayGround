import { motion } from 'framer-motion';
import { Leaf, Package, Globe } from 'lucide-react';

const AboutPage = () => {
  return (
    <div
      className="relative min-h-screen bg-black text-white px-6 py-20 overflow-hidden font-sans"
      id="about"
    >
      {/* Background Texture */}
      <motion.img
        src="https://www.color-meanings.com/wp-content/uploads/light-rays-spark-white-colors-black-background.jpeg"
        alt="abstract"
        initial={{ opacity: 0.1, scale: 1.2 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0 w-full h-full object-cover blur-2xl pointer-events-none z-0"
      />

      {/* Overlays */}
      <div className="absolute top-0 left-0 w-full h-[20vh] bg-gradient-to-b from-black via-black/70 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-[20vh] bg-gradient-to-t from-black via-black/70 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto space-y-28">
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight ">
            About &nbsp; BlackThread
          </h1>
          <p className="text-white/60 text-lg">
            Where timeless black fashion meets conscious living.
          </p>
        </motion.section>

        {/* Brand Story */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-10 items-center bg-white/10 backdrop-blur-md p-10 rounded-2xl border border-white/20 shadow-xl"
        >
          <img
            src="https://images.pexels.com/photos/3755704/pexels-photo-3755704.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Why we started"
            className="w-full md:w-1/2 rounded-2xl object-cover grayscale"
          />
          <div className="md:w-1/2 text-base text-white/80 leading-relaxed space-y-4">
            <h2 className="text-3xl font-semibold font-serif text-white">
              Why We Started
            </h2>
            <p>
              BlackThread was born from a desire to create sleek, minimalist
              apparel that doesn't harm the earth. In a world of wasteful fast
              fashion, we wanted to slow things down — and clean them up.
            </p>
            <p>
              We believe black never goes out of style — and sustainability
              shouldn't either.
            </p>
          </div>
        </motion.section>

        {/* Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="space-y-12 text-center"
        >
          <h2 className="text-3xl font-semibold font-serif text-center">
            Our Journey
          </h2>

          <div className="relative mx-auto w-fit flex flex-col items-center">
            {/* Vertical center line */}
            {/* <div className="absolute left-1/2 top-0 h-full w-[2px] bg-white/20 transform -translate-x-1/2 z-0" /> */}

            {[
              {
                year: '2021',
                detail:
                  'BlackThread launches with our first collection of eco-conscious black tees.',
              },
              {
                year: '2022',
                detail:
                  'We switched to 100% recycled and biodegradable packaging.',
              },
              {
                year: '2023',
                detail: 'Achieved carbon neutrality across our supply chain.',
              },
            ].map(({ year, detail }, index) => (
              <div
                key={index}
                className="relative z-10 mb-5 flex flex-col items-center text-center px-6"
              >
                {/* Dot */}
                {/* <div className="w-4 h-4 bg-white border-2 border-black rounded-full mb-3" /> */}
                <p className="text-white/60 text-sm">{year}</p>
                <p className="text-white/90 text-base max-w-md mt-1">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Mission */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center px-6 py-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl"
        >
          <h2 className="text-2xl font-medium mb-6 uppercase tracking-widest text-white/70">
            Mission Statement
          </h2>
          <p className="text-3xl font-bold font-serif max-w-3xl mx-auto leading-snug text-white">
            “Our goal is to create timeless black apparel that doesn’t cost the
            planet.”
          </p>
        </motion.section>

        {/* Founder Quote */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center px-6 py-12 max-w-4xl mx-auto"
        >
          <blockquote className="text-xl italic text-white/60">
            “Simplicity is the new luxury. BlackThread is our answer to wasteful
            fashion — a promise to create clothing with conscience.”
          </blockquote>
          <p className="mt-4 text-white/40 text-sm tracking-wide">
            — Jitheesh Krishnan, Founder
          </p>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutPage;
