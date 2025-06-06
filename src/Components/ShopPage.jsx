import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import ProductDetailPage from './ProductDetailPage';
import GlassModal from './CommonModal';
import { X } from 'lucide-react';
import SmoothLoopVideo from './Video';
import CheckoutModal from './CheckoutPage';

const categories = [
  'T-shirt',
  'Shirt',
  'Pants',
  'Shoes',
  'Jackets',
  'Accessories',
  'Sneakers',
  'Hoodies',
];
const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
const materials = [
  'Organic Cotton',
  'Bamboo',
  'Recycled Fiber',
  'Linen',
  'Hemp',
  'Silk',
];
const colors = ['Black', 'White', 'Grey', 'Blue', 'Green', 'Red'];
const brands = ['EcoWear', 'GreenFit', 'Sustaina', 'NatureThreads'];
const priceRanges = ['Under ₹1000', '₹1000 - ₹2000', '₹2000 - ₹3000', '₹3000+'];

const products = Array.from({ length: 13 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: 999 + i * 100,
  rating: (4 + (i % 2) * 0.5).toFixed(1),
  reviews: 20 + i * 5,
  description:
    'Premium eco-friendly product with sustainable fabric and modern fit.',
  image:
    'https://static.zara.net/assets/public/d6ce/b085/3f7b4144ad30/fbf31af19037/01887455800-p/01887455800-p.jpg?ts=1740385760293&w=2048',
}));

const ShopPage = () => {
  const [OpenViewModal, setOpenViewModal] = useState(false);
  const [visibleCount, setVisibleCount] = useState(13);
  const [videoCount, setVideoCount] = useState(1);
  const [isCheckOut, setisCheckOut] = useState(false);

  const visibleProducts = products.slice(0, visibleCount);

  useEffect(() => {
    const handleScroll = () => {
      const scrollBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
      if (scrollBottom && visibleCount < products.length) {
        setVisibleCount((prev) => prev + 8);
      }

      const screenHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const requiredVideos = Math.ceil(docHeight / screenHeight);
      if (requiredVideos > videoCount) {
        setVideoCount(requiredVideos);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleCount, videoCount]);

  return (
    <div className="min-h-screen text-white px-4 md:px-6 py-24 relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 w-full h-full flex flex-col pointer-events-none z-0">
          {[...Array(videoCount)].map((_, i) => (
            <div key={i} className="relative w-full h-screen">
              <SmoothLoopVideo Video="https://videos.pexels.com/video-files/3051492/3051492-hd_1920_1080_25fps.mp4" />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[20vh] bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 left-0 w-full h-[20vh] bg-gradient-to-b from-black via-black/60 to-transparent pointer-events-none z-10" />

      <div className="mx-auto grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6">
        <aside className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 space-y-6 text-sm sticky   self-start h-fit">
          <h2 className="text-lg font-semibold text-white/90">Filters</h2>

          <div>
            <h4 className="font-semibold mb-2">Categories</h4>
            <div className="space-y-2 text-white/80">
              {categories.map((cat) => (
                <label key={cat} className="block cursor-pointer">
                  <input
                    type="checkbox"
                    className="mr-2 accent-white cursor-pointer"
                  />
                  {cat}
                </label>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Size</h4>
            <div className="flex gap-2 flex-wrap">
              {sizes.map((size) => (
                <button
                  key={size}
                  className="px-2 py-1 border border-white/20 rounded-full hover:bg-white/10 cursor-pointer"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Material</h4>
            <div className="space-y-2 text-white/80">
              {materials.map((mat) => (
                <label key={mat} className="block cursor-pointer">
                  <input
                    type="checkbox"
                    className="mr-2 accent-white cursor-pointer"
                  />
                  {mat}
                </label>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Color</h4>
            <div className="space-y-2 text-white/80">
              {colors.map((color) => (
                <label key={color} className="block cursor-pointer">
                  <input
                    type="checkbox"
                    className="mr-2 accent-white cursor-pointer"
                  />
                  {color}
                </label>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Brand</h4>
            <div className="space-y-2 text-white/80">
              {brands.map((brand) => (
                <label key={brand} className="block cursor-pointer">
                  <input
                    type="checkbox"
                    className="mr-2 accent-white cursor-pointer"
                  />
                  {brand}
                </label>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Price Range</h4>
            <div className="space-y-2 text-white/80">
              {priceRanges.map((range) => (
                <label key={range} className="block cursor-pointer ">
                  <input
                    type="checkbox"
                    className="mr-2 accent-white cursor-pointer"
                  />
                  {range}
                </label>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Custom Price</h4>
            <input
              type="range"
              min="500"
              max="5000"
              className="w-full accent-white cursor-pointer"
            />
            <p className="text-xs text-white/50 mt-1">Up to ₹5000</p>
          </div>
        </aside>

        <section className="space-y-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleProducts.map((product) => (
              <div
                key={product.id}
                className="group cursor-pointer bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden transition hover:border-white/20 hover:scale-[1.02] duration-300"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-72 object-cover grayscale"
                  />
                  <div
                    onClick={() => setOpenViewModal(true)}
                    className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition"
                  ></div>
                </div>
                <div className="p-4 space-y-2">
                  <h4 className="text-base font-semibold leading-tight">
                    {product.name}
                  </h4>
                  <p className="text-sm text-white/60 leading-snug">
                    {product.description}
                  </p>
                  <div className="flex items-center text-white/90 text-sm">
                    {'★'.repeat(Math.floor(product.rating))}
                    {product.rating % 1 ? '½' : ''}
                    <span className="ml-2 text-white/60">
                      ({product.reviews} reviews)
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-white font-semibold text-lg">
                      ₹{product.price.toLocaleString()}
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => alert('Item Added to Cart')}
                        className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition cursor-pointer"
                      >
                        Add to Cart
                      </button>
                      <button
                        onClick={() => setisCheckOut(true)}
                        className="px-4 py-2 bg-black text-white border border-white rounded hover:bg-white hover:text-black transition cursor-pointer"
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <CheckoutModal
            isOpen={isCheckOut}
            onClose={() => setisCheckOut(false)}
          />
        </section>
      </div>

      {OpenViewModal && (
        <GlassModal
          isOpen={OpenViewModal}
          onClose={() => setOpenViewModal(false)}
        >
          <>
            <div className="flex justify-between items-center mb-6 border-b border-white/20 pb-3">
              <h2 className="text-xl font-semibold">Product Detail</h2>
              <button
                className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white"
                onClick={() => setOpenViewModal(false)}
              >
                <X size={20} />
              </button>
            </div>
            <ProductDetailPage />
          </>
        </GlassModal>
      )}
    </div>
  );
};

export default ShopPage;
