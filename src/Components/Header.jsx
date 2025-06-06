import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ShoppingCart, PackageCheck } from 'lucide-react';
import CartModal from './Cart';
import OrderModal from './OrderModal';
import ProfileModal from './ProfileModal';
import { Link, useNavigate } from 'react-router-dom';

const mockItems = [
  {
    name: 'Black Linen Shirt',
    price: 1999,
    quantity: 1,
    image: 'https://images.pexels.com/photos/6311396/pexels-photo-6311396.jpeg',
  },
  {
    name: 'Monochrome Joggers',
    price: 2299,
    quantity: 2,
    image:
      'https://www.dmarge.com/wp-content/uploads/2016/06/black-shirt-black-pants.jpg',
  },
  {
    name: 'Black Linen Shirt',
    price: 1999,
    quantity: 1,
    image: 'https://images.pexels.com/photos/6311396/pexels-photo-6311396.jpeg',
  },
  {
    name: 'Monochrome Joggers',
    price: 2299,
    quantity: 2,
    image:
      'https://www.dmarge.com/wp-content/uploads/2016/06/black-shirt-black-pants.jpg',
  },
  {
    name: 'Black Linen Shirt',
    price: 1999,
    quantity: 1,
    image: 'https://images.pexels.com/photos/6311396/pexels-photo-6311396.jpeg',
  },
  {
    name: 'Monochrome Joggers',
    price: 2299,
    quantity: 2,
    image:
      'https://www.dmarge.com/wp-content/uploads/2016/06/black-shirt-black-pants.jpg',
  },
];
const exampleOrder = [
  {
    id: 'BT1017',
    date: 'May 18, 2025',
    status: 'Delivered',
    eta: 'May 22, 2025',
    deliveryCharge: 0,
    address: '23, Black Lane, Mumbai, MH',
    items: [
      {
        name: 'Eco Joggers',
        quantity: 1,
        price: 1499,
        image:
          'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcThfG82HJMaP6_9uBZu_NuVAbxYUXs6p0BXos7Hd62u6d4BwW3pHtsBPGRFAYihbj96xq7QtoGf',
      },
    ],
  },
  {
    id: 'BT1021',
    date: 'June 2, 2025',
    status: 'Shipped',
    eta: 'June 6, 2025',
    deliveryCharge: 50,
    address: '23, Black Lane, Mumbai, MH',
    statusHistory: [
      { status: 'Order Placed', date: '2025-06-01' },
      { status: 'Shipped', date: '2025-06-02' },
      { status: 'Out for Delivery', date: '2025-06-03' },
    ],
    items: [
      {
        name: 'Classic Black Tee',
        quantity: 2,
        price: 899,
        image:
          'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcThfG82HJMaP6_9uBZu_NuVAbxYUXs6p0BXos7Hd62u6d4BwW3pHtsBPGRFAYihbj96xq7QtoGf',
      },
      {
        name: 'Recycled Hoodie',
        quantity: 1,
        price: 1799,
        image:
          'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcThfG82HJMaP6_9uBZu_NuVAbxYUXs6p0BXos7Hd62u6d4BwW3pHtsBPGRFAYihbj96xq7QtoGf',
      },
    ],
  },
  {
    id: 'BT1017',
    date: 'May 18, 2025',
    status: 'Delivered',
    eta: 'May 22, 2025',
    deliveryCharge: 0,
    address: '23, Black Lane, Mumbai, MH',
    items: [
      {
        name: 'Eco Joggers',
        quantity: 1,
        price: 1499,
        image:
          'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcThfG82HJMaP6_9uBZu_NuVAbxYUXs6p0BXos7Hd62u6d4BwW3pHtsBPGRFAYihbj96xq7QtoGf',
      },
    ],
  },
];
const centerNavItems = [
  { name: 'Home', href: '/home' },
  { name: 'Shop', href: '/shop' },
  { name: 'About', href: '#about' },
  { name: 'Blog', href: '#blog' },
  { name: 'Faq', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const navigate = useNavigate();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleScrollNav = (hash) => {
    if (window.location.pathname === '/') {
      setTimeout(() => {
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
      navigate(`/${hash}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-51">
      <div className="mx-auto flex items-center justify-between px-4 sm:px-20 py-4 rounded-b-lg border-b border-white/10 bg-white/10 backdrop-blur-md shadow-lg">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold tracking-tight text-white hover:text-gray-300 transition cursor-pointer"
        >
          BlackThread
        </Link>

        {/* Center Navigation */}
        <nav className="hidden md:flex space-x-6 text-base font-medium">
          {centerNavItems.map((item) =>
            item.href.startsWith('#') ? (
              <span
                onClick={() => handleScrollNav(item.href)}
                className="relative group cursor-pointer text-white transition duration-300 hover:text-gray-300"
              >
                {item.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </span>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                className="relative group text-white transition duration-300 hover:text-gray-300"
              >
                {item.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            )
          )}
        </nav>

        {/* Right Side: Icons + Profile */}
        <div className="hidden md:flex items-center space-x-5">
          <span
            // href="#orders"
            onClick={() => setIsModalOpen(true)}
            className="text-white hover:text-gray-300 transition"
            title="Orders"
          >
            <PackageCheck className="w-6 h-6" />
          </span>
          <span
            // href="#cart"
            className="text-white hover:text-gray-300 transition"
            title="Cart"
            onClick={() => setCartOpen(true)}
          >
            <ShoppingCart className="w-6 h-6" />
          </span>
          <span
            // href="#profile"
            onClick={() => setIsProfileOpen(true)}
            className="w-9 h-9 rounded-full overflow-hidden border-2 border-white/30 hover:border-white transition"
          >
            <img
              src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
              alt="Profile"
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition duration-300"
            />
          </span>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="h-7 w-7 transition-transform duration-300 hover:scale-110"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  isMobileMenuOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>
        </div>
      </div>
      <CartModal
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        initialItems={mockItems}
      />
      <OrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        orders={exampleOrder}
      />
      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/10 backdrop-blur-md text-white px-6 py-4 space-y-4 border-t border-white/10"
          >
            {[...centerNavItems, 'Orders', 'Cart', 'Profile'].map((item) => (
              <span
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-[1.1rem] font-medium transition duration-200 hover:text-gray-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
