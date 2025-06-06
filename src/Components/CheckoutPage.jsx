import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CheckoutModal = ({ isOpen, onClose }) => {
  const savedAddresses = [
    {
      id: 1,
      label: 'Home',
      fullName: 'John Doe',
      address: '123 Eco Street',
      city: 'GreenTown',
      state: 'Kerala',
      zip: '695001',
      country: 'India',
      isDefault: true,
    },
    {
      id: 2,
      label: 'Work',
      fullName: 'John Doe',
      address: '456 Office Rd',
      city: 'WorkCity',
      state: 'Kerala',
      zip: '695002',
      country: 'India',
      isDefault: false,
    },
  ];

  const savedCards = [
    {
      id: 1,
      label: 'Visa',
      last4: '1234',
      isDefault: true,
    },
    {
      id: 2,
      label: 'MasterCard',
      last4: '5678',
      isDefault: false,
    },
  ];

  const items = [
    {
      name: 'Eco T-shirt',
      price: 799,
      quantity: 2,
      image:
        'https://static.zara.net/assets/public/d6ce/b085/3f7b4144ad30/fbf31af19037/01887455800-p/01887455800-p.jpg?ts=1740385760293&w=2048',
    },
    {
      name: 'Organic Hoodie',
      price: 1499,
      quantity: 1,
      image:
        'https://static.zara.net/assets/public/d6ce/b085/3f7b4144ad30/fbf31af19037/01887455800-p/01887455800-p.jpg?ts=1740385760293&w=2048',
    },
  ];

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const [selectedAddress, setSelectedAddress] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    if (isOpen) {
      setSelectedAddress(
        savedAddresses.find((a) => a.isDefault) || savedAddresses[0]
      );
      setSelectedCard(savedCards.find((c) => c.isDefault) || savedCards[0]);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70  px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} // smoother fade
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 25,
            }}
            className="w-full max-w-4xl  bg-black/20 text-white backdrop-blur-md border border-white/20 rounded-2xl p-8 relative overflow-y-auto max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/60 hover:text-white"
            >
              <X size={20} />
            </button>

            <h2 className="text-2xl font-semibold mb-6">Checkout</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Left: Select Address & Card */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Shipping Address
                  </h3>
                  <div className="space-y-3">
                    {savedAddresses.map((addr) => (
                      <button
                        key={addr.id}
                        onClick={() => setSelectedAddress(addr)}
                        className={`w-full text-left p-4 rounded-lg border transition ${
                          selectedAddress?.id === addr.id
                            ? 'border-white/30 bg-white/10'
                            : 'border-white/10 hover:border-white/20'
                        }`}
                      >
                        <p className="font-medium">
                          {addr.label} - {addr.fullName}
                        </p>
                        <p className="text-sm text-white/60">
                          {addr.address}, {addr.city}, {addr.state}, {addr.zip},{' '}
                          {addr.country}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
                  <div className="space-y-3">
                    {savedCards.map((card) => (
                      <button
                        key={card.id}
                        onClick={() => setSelectedCard(card)}
                        className={`w-full flex justify-between items-center p-4 rounded-lg border transition ${
                          selectedCard?.id === card.id
                            ? 'border-white/30 bg-white/10'
                            : 'border-white/10 hover:border-white/20'
                        }`}
                      >
                        <span>{card.label}</span>
                        <span className="text-white/70 tracking-widest">
                          •••• •••• •••• {card.last4}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Order Summary */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold">Order Summary</h3>
                <div className="space-y-4">
                  {items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between border-b border-white/10 pb-3"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <p className="text-sm font-medium">{item.name}</p>
                          <p className="text-xs text-white/60">
                            ₹{item.price.toLocaleString()} × {item.quantity}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm font-semibold text-white">
                        ₹{(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between pt-4 text-white/80 text-base font-medium">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-white/50 text-sm">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>

                <button
                  onClick={() => alert('order placed')}
                  className="mt-4 w-full
                  py-3 rounded-xl bg-gradient-to-r from-white to-gray-200
                  text-black font-semibold hover:from-gray-100 hover:to-white
                  transition"
                >
                  {' '}
                  Place Order
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CheckoutModal;
