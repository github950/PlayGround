import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BlogSection = () => {
  const posts = [
    {
      title: 'Black is the New Green',
      excerpt:
        'Exploring how timeless black clothing can lead the eco-fashion revolution.',
      content: `Black isn’t just a color — it's a statement. Our commitment to black apparel goes beyond aesthetics. It’s about timeless pieces, reduced waste, and versatile design. Explore how embracing black contributes to sustainable fashion choices.`,
      date: 'May 2025',
      images: [
        'https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg',
        'https://images.pexels.com/photos/1456737/pexels-photo-1456737.jpeg',
      ],
    },
    {
      title: 'The Rise of Conscious Fashion',
      excerpt:
        'How modern brands are redefining style with sustainability at the core.',
      content: `Sustainable fashion is no longer niche. It’s the future. Discover how new-generation brands are reshaping their supply chains, using recycled materials, and staying transparent about their impact.`,
      date: 'June 2025',
      images: [
        'https://images.pexels.com/photos/194098/pexels-photo-194098.jpeg',
        'https://images.pexels.com/photos/1030895/pexels-photo-1030895.jpeg',
      ],
    },
    {
      title: 'Minimal Wardrobe, Maximum Impact',
      excerpt:
        'Tips on building a sleek, sustainable capsule wardrobe using only what you need.',
      content: `Capsule wardrobes simplify your life and reduce your carbon footprint. Learn how to build a minimal closet with maximum utility — all while staying stylish.`,
      date: 'April 2025',
      images: [
        'https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg',
        'https://images.pexels.com/photos/1815065/pexels-photo-1815065.jpeg',
      ],
    },
    {
      title: 'Black is the New Green',
      excerpt:
        'Exploring how timeless black clothing can lead the eco-fashion revolution.',
      content: `Black isn’t just a color — it's a statement. Our commitment to black apparel goes beyond aesthetics. It’s about timeless pieces, reduced waste, and versatile design. Explore how embracing black contributes to sustainable fashion choices.`,
      date: 'May 2025',
      images: [
        'https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg',
        'https://images.pexels.com/photos/1456737/pexels-photo-1456737.jpeg',
      ],
    },
    {
      title: 'The Rise of Conscious Fashion',
      excerpt:
        'How modern brands are redefining style with sustainability at the core.',
      content: `Sustainable fashion is no longer niche. It’s the future. Discover how new-generation brands are reshaping their supply chains, using recycled materials, and staying transparent about their impact.`,
      date: 'June 2025',
      images: [
        'https://images.pexels.com/photos/194098/pexels-photo-194098.jpeg',
        'https://images.pexels.com/photos/1030895/pexels-photo-1030895.jpeg',
      ],
    },
    {
      title: 'Minimal Wardrobe, Maximum Impact',
      excerpt:
        'Tips on building a sleek, sustainable capsule wardrobe using only what you need.',
      content: `Capsule wardrobes simplify your life and reduce your carbon footprint. Learn how to build a minimal closet with maximum utility — all while staying stylish.`,
      date: 'April 2025',
      images: [
        'https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg',
        'https://images.pexels.com/photos/1815065/pexels-photo-1815065.jpeg',
      ],
    },
  ];

  const [selectedPost, setSelectedPost] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const closeModal = () => {
    setSelectedPost(null);
    setActiveImageIndex(0);
  };
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (!selectedPost) return;
  //     setActiveImageIndex((prev) => (prev + 1) % selectedPost.images.length);
  //   }, 2000);
  //   return () => clearInterval(interval);
  // }, [selectedPost]);
  return (
    <section
      className="relative min-h-screen bg-black text-white px-6 py-24 overflow-hidden"
      id="blog"
    >
      {/* Background */}
      <motion.img
        src="https://icons8.com/blog/wp-content/uploads/2020/02/black-and-white-photography-1280x720.jpg"
        alt="abstract"
        initial={{ opacity: 0.1, scale: 1.2 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0 w-full h-full object-cover blur-2xl pointer-events-none z-0"
      />
      <div className="absolute top-0 left-0 w-full h-[20vh] bg-gradient-to-b from-black via-black/70 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-[20vh] bg-gradient-to-t from-black via-black/70 to-transparent z-10" />

      {/* Header */}
      <div className="relative z-20 max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold font-serif mb-4">Latest Insights</h2>
        <p className="text-white/60 text-lg">
          Stay updated with what inspires BlackThread — from sustainability to
          minimalist living.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="relative z-20 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {posts.map((post, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            onClick={() => setSelectedPost(post)}
            className="cursor-pointer bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-xl hover:scale-[1.03] transition-transform"
          >
            <img
              src={post.images[0]}
              alt={post.title}
              className="w-full h-48 object-cover grayscale"
            />
            <div className="p-6">
              <p className="text-sm text-white/50 mb-2">{post.date}</p>
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-sm text-white/70">{post.excerpt}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedPost && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 backdrop-blur-lg bg-black/60 flex items-center justify-center px-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-8"
            >
              {/* Auto-scroll carousel */}

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute  cursor-pointer top-0 right-0 w-10 h-10  hover:bg-black/90 rounded-full flex items-center justify-center text-white text-2xl font-bold transition z-50"
                aria-label="Close"
              >
                ×
              </button>

              {/* Carousel */}
              <div className="relative mb-6">
                <motion.img
                  key={selectedPost.images[activeImageIndex]}
                  src={selectedPost.images[activeImageIndex]}
                  className="w-full h-80 object-cover rounded-xl"
                  alt={`Slide ${activeImageIndex + 1}`}
                  initial={{ opacity: 0.3, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Arrow Controls */}
                {selectedPost.images.length > 1 && (
                  <>
                    {/* Left Arrow */}
                    <button
                      onClick={() =>
                        setActiveImageIndex(
                          (activeImageIndex - 1 + selectedPost.images.length) %
                            selectedPost.images.length
                        )
                      }
                      className="absolute cursor-pointer left-3 top-1/2 -translate-y-1/2 z-40 bg-black/60 hover:bg-black/80 rounded-full w-10 h-10 flex items-center justify-center text-white text-xl"
                      aria-label="Previous"
                    >
                      ‹
                    </button>

                    {/* Right Arrow */}
                    <button
                      onClick={() =>
                        setActiveImageIndex(
                          (activeImageIndex + 1) % selectedPost.images.length
                        )
                      }
                      className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 z-40 bg-black/60 hover:bg-black/80 rounded-full w-10 h-10 flex items-center justify-center text-white text-xl"
                      aria-label="Next"
                    >
                      ›
                    </button>
                  </>
                )}

                {/* Dot Navigation */}
                {selectedPost.images.length > 1 && (
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                    {selectedPost.images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveImageIndex(i)}
                        className={`w-3 h-3 rounded-full transition ${
                          i === activeImageIndex ? 'bg-white' : 'bg-white/30'
                        }`}
                        aria-label={`Go to image ${i + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Post Content */}
              <p className="text-sm text-white/50">{selectedPost.date}</p>
              <h3 className="text-2xl font-bold mb-3">{selectedPost.title}</h3>
              <p className="text-white/80 leading-relaxed whitespace-pre-wrap">
                {selectedPost.content}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BlogSection;
