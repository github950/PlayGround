import { useState } from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import GlassModal from './CommonModal';
import { motion, AnimatePresence } from 'framer-motion';
import CheckoutModal from './CheckoutPage';

const CartModal = ({ isOpen, onClose, initialItems = [] }) => {
  const [cartItems, setCartItems] = useState(initialItems);
  const [removedItem, setRemovedItem] = useState(null);
  const [showCheckout, setShowCheckout] = useState(false);

  const handleQuantityChange = (index, delta) => {
    const updated = [...cartItems];
    updated[index].quantity = Math.max(1, updated[index].quantity + delta);
    setCartItems(updated);
  };

  const handleRemove = (index) => {
    setRemovedItem(cartItems[index]);
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <GlassModal isOpen={isOpen} onClose={onClose}>
      <div className="flex justify-between items-center mb-6 border-b border-white/20 pb-3">
        <h2 className="text-xl font-semibold">
          Your Cart ({cartItems.length})
        </h2>
        <button
          onClick={onClose}
          className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white"
        >
          <X size={20} />
        </button>
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-white/50 text-sm mb-4">Your cart is empty.</p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
            alt="Empty Cart"
            className="w-24 mx-auto opacity-30"
          />
        </div>
      ) : (
        <motion.div layout className="space-y-8">
          <AnimatePresence mode="popLayout">
            {cartItems.map((item, idx) => {
              const ItemContent = (
                <div className="flex items-center gap-4 border-b border-white/20 pb-5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-white text-sm font-medium">
                      {item.name}
                    </h3>
                    <p className="text-white/60 text-xs mb-2">
                      ₹{item.price.toLocaleString()} × {item.quantity}
                    </p>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleQuantityChange(idx, -1)}
                        className="w-6 h-6 flex items-center justify-center text-white bg-white/10 hover:bg-white/20 rounded"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-white/70 text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(idx, 1)}
                        className="w-6 h-6 flex items-center justify-center text-white bg-white/10 hover:bg-white/20 rounded"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <p className="text-white/80 text-sm font-semibold">
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </p>
                    <button
                      onClick={() => handleRemove(idx)}
                      className="text-white/40 hover:text-red-400 transition"
                      title="Remove Item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              );

              return ItemContent;
            })}
          </AnimatePresence>

          {/* Promo Code Section */}
          <motion.div layout className="space-y-3 pt-2">
            <label className="text-sm text-white/60">Promo Code</label>
            <div className="flex items-center gap-2 mt-1">
              <input
                type="text"
                placeholder="Enter code"
                className="flex-1 px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <button className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm hover:bg-white/20 transition">
                Apply
              </button>
            </div>
          </motion.div>

          {/* Summary Section */}
          <motion.div layout className="pt-4 space-y-3">
            <div className="flex justify-between text-white/80">
              <span className="font-medium">Subtotal</span>
              <span className="font-semibold">
                ₹{subtotal.toLocaleString()}
              </span>
            </div>
            <p className="text-xs text-white/40">
              Delivery charges calculated at checkout.
            </p>
            <button
              onClick={() => setShowCheckout(true)}
              className="w-full py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition"
            >
              Proceed to Checkout
            </button>
            <button
              onClick={onClose}
              className="w-full py-3 border border-white/20 text-white rounded-xl hover:bg-white/10 transition"
            >
              Continue Shopping
            </button>
          </motion.div>
          <CheckoutModal
            isOpen={showCheckout}
            onClose={() => setShowCheckout(false)}
          />
        </motion.div>
      )}
    </GlassModal>
  );
};

export default CartModal;
