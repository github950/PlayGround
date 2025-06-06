import React, { useState } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import CheckoutModal from './CheckoutPage';

const products = [
  {
    id: 1,
    name: 'Black T-Shirt',
    image:
      'https://www.dmarge.com/wp-content/uploads/2016/06/black-shirt-black-pants.jpg',
    accentColor: '#1e1e1e',
    description: 'Premium cotton tee designed for comfort and versatility.',
    price: '₹799',
  },
  {
    id: 2,
    name: 'Black Sneakers',
    image:
      'https://baccabucci.com/cdn/shop/products/MG_5181_f494a3ff-efcb-4339-9bc0-c2680c4faadb.jpg?v=1635593244',
    accentColor: '#0f0f0f',
    description: 'All-day comfort sneakers in bold, all-black design.',
    price: '₹2,499',
  },
  {
    id: 3,
    name: 'Black Shirt',
    image:
      'https://thehouseofrare.com/cdn/shop/files/OTAGOBLACK__OTAGOBLACK__0.jpg?v=1743586832',
    accentColor: '#2b2b2b',
    description: 'Sleek and stylish button-down shirt for any occasion.',
    price: '₹1,299',
  },
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProduct = products[activeIndex];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    beforeChange: (_, newIndex) => setActiveIndex(newIndex),
    customPaging: () => (
      <div className="dot w-2 h-2 bg-white rounded-full opacity-60 transition-all duration-300 mt-10"></div>
    ),
    appendDots: (dots) => (
      <ul className="flex justify-center gap-2 mt-6">{dots}</ul>
    ),
  };

  const [isCheckOut, setisCheckOut] = useState(false);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center px-6 lg:px-20 overflow-hidden transition duration-1000 bg-black"
    >
      {/* Blurred Background Image Accent */}
      <motion.img
        key={activeProduct.image}
        src={activeProduct.image}
        alt="Accent Background"
        initial={{ opacity: 0.2, x: -40 }}
        animate={{ opacity: 0.5, x: 0 }}
        exit={{ opacity: 0.2, x: 0 }}
        transition={{
          duration: 1.8,
          ease: [0.25, 0.1, 0.25, 1], // smoother cubic bezier
        }}
        className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 scale-125 blur-xl pointer-events-none grayscale z-0"
      />
      <div className="absolute bottom-0 left-0 w-full h-[20vh] bg-gradient-to-t from-black via-black/50 to-transparent z-0 pointer-events-none" />

      {/* Main Content */}
      <div className="max-w-screen-xl w-full flex flex-col lg:flex-row items-center justify-between gap-14 relative z-10">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="w-full lg:w-1/2 text-center flex flex-col items-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white mb-5">
            Redefine Style
            <br />
            In Pure Black
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl">
            Elevate your wardrobe with premium all-black <br />
            essentials made for modern men who <br /> value sustainability,
            detail, and bold aesthetics.
          </p>

          <ul className="text-sm text-gray-400 space-y-2 mb-8 list-disc list-inside max-w-md text-left">
            <li>100% Eco-Friendly Fabrics</li>
            <li>Minimalist Designs.</li>
            <li>Free Shipping & Easy Returns</li>
          </ul>

          <motion.a
            href="#shop"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-black font-semibold px-15 py-3  rounded-md shadow-md transition-all duration-300 hover:bg-gray-200"
          >
            Explore the Collection
          </motion.a>
        </motion.div>

        {/* Right Side - Carousel */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="w-full lg:w-1/2 z-10"
        >
          <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-2xl p-10 pb-20 shadow-2xl overflow-hidden">
            <Slider {...settings}>
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col items-center text-center w-full"
                >
                  {/* Images Row */}
                  <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-6 w-full">
                    {[1, 2].map((_, index) => (
                      <div
                        key={index}
                        className="w-64 h-64 bg-white/10 rounded-xl p-2 flex items-center justify-center border border-white/20 overflow-hidden"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover rounded-lg grayscale"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Product Info */}
                  <h3 className="text-2xl font-semibold text-white">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-300 mt-1">
                    {product.description}
                  </p>
                  <p className="text-lg font-medium text-white my-2">
                    {product.price}
                  </p>

                  {/* Buttons */}
                  <div className="flex justify-center gap-4 mt-4">
                    <button
                      onClick={() => alert('Item Added to Cart')}
                      className="px-4 py-2 cursor-pointer bg-white text-black rounded hover:bg-gray-200 transition"
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={() => setisCheckOut(true)}
                      className="px-4 py-2 cursor-pointer bg-black text-white border border-white rounded hover:bg-white hover:text-black transition"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </motion.div>
      </div>
      <CheckoutModal isOpen={isCheckOut} onClose={() => setisCheckOut(false)} />
    </section>
  );
};

export default HeroSection;
