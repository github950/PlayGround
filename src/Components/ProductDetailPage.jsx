import { X } from 'lucide-react';
import { useState } from 'react';
import CheckoutModal from './CheckoutPage';

const ProductDetailPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const sizes = ['S', 'M', 'L', 'XL'];
  const colors = ['black', 'gray', 'white'];
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const handleQuantityChange = (e) => {
    const val = Math.max(1, Number(e.target.value));
    setQuantity(val);
  };

  const productImages = [
    'https://static.zara.net/assets/public/d37c/390a/1bc740e4947c/16ce31b9fc61/01887455800-e3/01887455800-e3.jpg?ts=1739261516287&w=4112',
    'https://static.zara.net/assets/public/afd6/6be6/ce7647a99ba6/6c0afcc36051/01887455800-e2/01887455800-e2.jpg?ts=1739261511950&w=1700',
    'https://static.zara.net/assets/public/6602/1a2a/d159453da086/9e4166e136c2/01887455800-a3/01887455800-a3.jpg?ts=1740385769058&w=1700',
    'https://static.zara.net/assets/public/afd6/6be6/ce7647a99ba6/6c0afcc36051/01887455800-e2/01887455800-e2.jpg?ts=1739261511950&w=1700',
    'https://static.zara.net/assets/public/afd6/6be6/ce7647a99ba6/6c0afcc36051/01887455800-e2/01887455800-e2.jpg?ts=1739261511950&w=1700',
    'https://static.zara.net/assets/public/6602/1a2a/d159453da086/9e4166e136c2/01887455800-a3/01887455800-a3.jpg?ts=1740385769058&w=1700',
  ];

  const recommended = [
    {
      name: 'Eco Hoodie',
      description: 'Made from 100% recycled cotton. Super soft and breathable.',
      price: 1299,
      rating: 4,
      image:
        'https://static.zara.net/assets/public/b5f9/b9a3/21c843cf99fc/134977827f11/01887455800-e1/01887455800-e1.jpg?ts=1739197159811&w=1700',
    },
    {
      name: 'Slim Fit Jeans',
      description: 'Stylish and sustainable, made with organic denim.',
      price: 1899,
      rating: 5,
      image:
        'https://static.zara.net/assets/public/b5f9/b9a3/21c843cf99fc/134977827f11/01887455800-e1/01887455800-e1.jpg?ts=1739197159811&w=1700',
    },
    {
      name: 'Bamboo Socks',
      description: 'Antibacterial and eco-friendly bamboo fiber socks.',
      price: 499,
      rating: 4,
      image:
        'https://static.zara.net/assets/public/b5f9/b9a3/21c843cf99fc/134977827f11/01887455800-e1/01887455800-e1.jpg?ts=1739197159811&w=1700',
    },
  ];

  const bestSellers = [
    {
      name: 'Casual Linen Shirt',
      description: 'Breathable and timeless design for daily comfort.',
      price: 1499,
      rating: 5,
      image:
        'https://static.zara.net/assets/public/b5f9/b9a3/21c843cf99fc/134977827f11/01887455800-e1/01887455800-e1.jpg?ts=1739197159811&w=1700',
    },
    {
      name: 'Recycled Denim Jacket',
      description: 'Classic cut with eco-conscious recycled denim.',
      price: 2499,
      rating: 4,
      image:
        'https://static.zara.net/assets/public/b5f9/b9a3/21c843cf99fc/134977827f11/01887455800-e1/01887455800-e1.jpg?ts=1739197159811&w=1700',
    },
    {
      name: 'Classic White Tee',
      description: 'Everyday essential tee made from organic cotton.',
      price: 799,
      rating: 4,
      image:
        'https://static.zara.net/assets/public/b5f9/b9a3/21c843cf99fc/134977827f11/01887455800-e1/01887455800-e1.jpg?ts=1739197159811&w=1700',
    },
  ];

  const comments = [
    {
      user: 'Alice Johnson',
      image: 'https://i.pravatar.cc/150?img=1',
      text: 'Absolutely love this! The quality exceeded my expectations.',
      date: 'June 5, 2025',
      rating: 5,
      location: 'New York, USA',
      verified: true,
    },
    {
      user: 'Carlos Mendes',
      image: 'https://i.pravatar.cc/150?img=2',
      text: 'Good product but shipping was delayed by a week.',
      date: 'June 3, 2025',
      rating: 3,
      location: 'Lisbon, Portugal',
      verified: false,
    },
    {
      user: 'Priya Ramesh',
      image: 'https://i.pravatar.cc/150?img=3',
      text: 'Affordable and elegant. Would definitely buy again.',
      date: 'May 28, 2025',
      rating: 4,
      location: 'Chennai, India',
      verified: true,
    },
  ];
  const [isCheckOut, setisCheckOut] = useState(false);

  return (
    <div className="min-h-screen  text-white px-6  relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10 mt-5">
        {/* Details */}
        <div className="backdrop-blur-xl p-8 rounded-2xl border border-white/10 space-y-6">
          <div>
            <h1 className="text-3xl font-bold">Men's Organic Cotton T-Shirt</h1>
            <p className="text-sm text-white/60">
              Brand: EcoWear | SKU: EW12345
            </p>
          </div>

          <div className="text-white text-lg">
            ★★★★☆ <span className="text-sm text-white/60">(112 reviews)</span>
          </div>

          <div className="text-2xl font-bold text-white">
            ₹899{' '}
            <span className="line-through text-white/40 text-base ml-2">
              ₹1299
            </span>
          </div>

          <p className="text-sm text-white/80">
            A comfortable and breathable t-shirt made from 100% organic cotton.
            Ideal for daily wear with a soft feel and durable stitching.
            Pre-shrunk for a consistent fit and designed with minimal stitching
            for a sleek look.
          </p>

          <div>
            <h3 className="font-semibold mb-1 text-white">Select Size:</h3>
            <div className="flex gap-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-full text-sm transition ${
                    selectedSize === size
                      ? 'bg-white text-black font-bold'
                      : 'border-white/30 text-white hover:bg-white/10'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-1 text-white">Choose Color:</h3>
            <div className="flex gap-4">
              {colors.map((color) => (
                <div
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full cursor-pointer border-2 ${
                    selectedColor === color ? 'border-white' : 'border-white/10'
                  }`}
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <label htmlFor="qty" className="text-sm font-medium text-white">
              Quantity:
            </label>
            <input
              id="qty"
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
              className="w-20 px-3 py-1 border border-white/20 rounded bg-white/5 text-white"
            />
          </div>

          <div className="mt-6 border-t border-white/10 pt-4 text-sm text-white/80">
            <h4 className="font-semibold mb-2">Product Specifications</h4>
            <ul className="space-y-1 list-disc list-inside">
              <li>Material: 100% Organic Cotton</li>
              <li>Fit: Regular Fit</li>
              <li>Wash Care: Machine Wash, cold only</li>
              <li>Country of Origin: India</li>
              <li>Weight: 180g</li>
              <li>Sleeves: Half</li>
              <li>Neck: Crew Neck</li>
              <li>Packaging: Biodegradable bag</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10">
            <img
              src={productImages[selectedImage]}
              alt="Product"
              className="w-full h-full object-cover transition-all duration-300"
            />
          </div>
          <div className="mt-4 flex gap-3">
            {productImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Preview ${index + 1}`}
                onClick={() => setSelectedImage(index)}
                className={`w-20 h-20 object-cover rounded-md border cursor-pointer ${
                  selectedImage === index
                    ? 'border-white scale-101'
                    : 'border-white/20 opacity-70 hover:opacity-100'
                } transition`}
              />
            ))}
          </div>
          <div className="backdrop-blur-xl p-8 rounded-2xl border border-white/10 space-y-6">
            <div className="text-sm text-white/70 space-y-1">
              <p>🚚 Free delivery in 3-5 business days</p>
              <p>🔄 14-day easy returns</p>
              <p>💳 Secure payments: All cards, UPI, COD</p>
              <p>📦 Ships from: Mumbai warehouse</p>
              <p>🛡️ Warranty: 6 months stitching guarantee</p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => alert('Item Added to Cart')}
                className="flex-1 px-4 py-3 bg-white text-black rounded hover:bg-gray-200 transition cursor-pointer"
              >
                Add to Cart
              </button>
              <button
                onClick={() => setisCheckOut(true)}
                className="flex-1 px-4 py-3 bg-black text-white border border-white rounded hover:bg-white hover:text-black transition cursor-pointer"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-16 space-y-8">
        <h2 className="text-xl font-bold border-b border-white/10 pb-2">
          Customer Reviews
        </h2>
        <div className="space-y-4">
          {comments.map((review, idx) => {
            const filledStars = '★'.repeat(review.rating);
            const emptyStars = '☆'.repeat(5 - review.rating);
            return (
              <div
                key={idx}
                className="bg-white/5 p-6 rounded-lg border border-white/10"
              >
                <p className="text-white/80 italic mb-4 leading-relaxed">
                  "{review.text}"
                </p>
                <div className="flex items-center justify-between">
                  {/* User Info Left */}
                  <div className="flex items-center space-x-4">
                    <img
                      src={review.image || 'https://i.pravatar.cc/150?img=12'}
                      alt={review.user}
                      className="w-12 h-12 rounded-full object-cover border border-white/20"
                    />
                    <div>
                      <div className="text-white font-semibold">
                        {review.user}
                      </div>
                      <div className="text-white/50 text-sm">
                        {review.location} • {review.date}
                      </div>
                      {review.verified && (
                        <div className="text-green-400 text-xs font-medium mt-1">
                          ✔ Verified Purchase
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Rating Right */}
                  <div className="text-white/90 text-lg font-medium text-right">
                    {filledStars}
                    <span className="text-white/30">{emptyStars}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recommended Products */}
      <div className="max-w-7xl mx-auto mt-16 px-4">
        <h2 className="text-2xl font-bold text-white mb-6">
          Recommended Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recommended.map((item, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 transition-all hover:scale-105 hover:shadow-lg"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-xl mb-4 border border-white/10"
              />
              <h4 className="font-semibold text-white text-lg">{item.name}</h4>
              <p className="text-white/60 text-sm mt-1">{item.description}</p>
              <div className="mt-3 text-white/80 font-medium">
                ₹{item.price}
              </div>
              <div className="mt-1 text-white/90 text-sm">
                {'★'.repeat(item.rating)}{' '}
                <span className="text-white/40">
                  {'☆'.repeat(5 - item.rating)}
                </span>
              </div>

              <div className="mt-4 flex justify-center gap-2">
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
          ))}
        </div>
      </div>

      {/* Best Sellers */}
      <div className="max-w-7xl mx-auto mt-20 px-4">
        <h2 className="text-2xl font-bold text-white mb-6">Best Sellers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {bestSellers.map((item, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 transition-all hover:scale-105 hover:shadow-lg"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-xl mb-4 border border-white/10"
              />
              <h4 className="font-semibold text-white text-lg">{item.name}</h4>
              <p className="text-white/60 text-sm mt-1">{item.description}</p>
              <div className="mt-3 text-white/80 font-medium">
                ₹{item.price}
              </div>
              <div className="mt-1 text-white/90 text-sm">
                {'★'.repeat(item.rating)}{' '}
                <span className="text-white/40">
                  {'☆'.repeat(5 - item.rating)}
                </span>
              </div>
              <div className="mt-4 flex justify-center gap-2">
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
          ))}
        </div>
      </div>
      <CheckoutModal isOpen={isCheckOut} onClose={() => setisCheckOut(false)} />
    </div>
  );
};

export default ProductDetailPage;
