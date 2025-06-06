import { useState } from 'react';
import GlassModal from './CommonModal';
import {
  CheckCircle,
  Clock,
  Truck,
  PackageCheck,
  XCircle,
  X,
  MapPin,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const statusIcons = {
  placed: <Clock size={18} />,
  shipped: <Truck size={18} />,
  delivered: <CheckCircle size={18} />,
  cancelled: <XCircle size={18} />,
  completed: <PackageCheck size={18} />,
};

const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case 'delivered':
    case 'completed':
      return 'text-green-400';
    case 'shipped':
      return 'text-blue-400';
    case 'placed':
      return 'text-yellow-400';
    case 'cancelled':
      return 'text-red-400';
    default:
      return 'text-white/60';
  }
};

const TrackModal = ({
  isOpen,
  onClose,
  statusHistory = [],
  mapEmbedUrl,
  orderId = 'BTX202406',
  estimatedDelivery = 'June 10, 2025',
  currentAddress = '123 Eco Street, BlackTown, IN',
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50  bg-black/60   flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className=" w-full max-w-3xl max-h-[90vh] bg-black/20 backdrop-blur-lg border border-white/20 overflow-hidden shadow-xl p-6 rounded-2xl shadow-lg"
            // className="bg-black/80  text-white w-full max-w-xl rounded-xl shadow-lg overflow-hidden max-h-[90vh] p-6"
          >
            {/* Header */}
            <div className="mb-6 flex justify-between items-top space-y-1">
              <span>
                <h2 className="text-xl font-bold">Order #{orderId}</h2>
                <p className="text-sm text-white/50">
                  Estimated Delivery:{' '}
                  <span className="text-white">{estimatedDelivery}</span>
                </p>
              </span>

              <button
                onClick={onClose}
                className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Timeline */}
            <div className="space-y-6 overflow-y-auto pr-2 max-h-[40vh]">
              {statusHistory.map((item, idx) => {
                const isLast = idx === statusHistory.length - 1;
                const color = getStatusColor(item.status);
                const Icon = statusIcons[item.status.toLowerCase()] || (
                  <Clock size={16} />
                );

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="flex gap-4 items-start relative"
                  >
                    {!isLast && (
                      <div className="absolute top-6 left-[10px] h-[calc(100%-1.5rem)] w-px bg-white/10" />
                    )}
                    <div
                      className={`w-6 h-6 mt-1 rounded-full flex items-center justify-center border border-white/20 bg-white/5 ${color}`}
                    >
                      {Icon}
                    </div>
                    <div>
                      <p className={`text-sm font-semibold ${color}`}>
                        {item.status}
                      </p>
                      <p className="text-xs text-white/50">{item.date}</p>
                      {item.note && (
                        <p className="text-xs text-white/60 mt-1 italic">
                          {item.note}
                        </p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Map Section */}
            {mapEmbedUrl && (
              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <MapPin size={16} />
                  <span>Current Location</span>
                </div>
                <div className="rounded-xl overflow-hidden border border-white/10">
                  <iframe
                    src={mapEmbedUrl}
                    width="100%"
                    height="200"
                    className="w-full h-52 rounded-xl border-none"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <p className="text-xs text-white/40">{currentAddress}</p>
              </div>
            )}

            {/* Footer */}
            <div className="mt-6 text-center text-sm text-white/50">
              <p>
                Have questions?{' '}
                <button
                  onClick={onClose}
                  className="text-white underline hover:text-gray-300"
                >
                  Contact Support
                </button>
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const MultiOrderModal = ({ isOpen, onClose, orders = [] }) => {
  const [showTrackModal, setShowTrackModal] = useState(false);
  const [currentTracking, setCurrentTracking] = useState([]);
  const handleTrack = (statusHistory) => {
    setCurrentTracking(statusHistory);
    setShowTrackModal(true);
  };

  const handleCancelOrder = (orderId) => {
    // You can implement actual cancel logic or a confirmation modal here
    console.log(`Cancel requested for Order ID: ${orderId}`);
    alert(`Order ${orderId} cancellation requested.`);
  };

  return (
    <GlassModal isOpen={isOpen} onClose={onClose}>
      <div className="flex justify-between items-center mb-6 border-b border-white/20 pb-3">
        <h2 className="text-xl font-semibold">Your Orders ({orders.length})</h2>
        <button
          onClick={onClose}
          className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white"
        >
          <X size={20} />
        </button>
      </div>

      <div className="space-y-12 max-h-[70vh] pr-2 ">
        {[...orders]
          .sort((a, b) => (a.status === 'Delivered' ? 1 : -1))
          .map((order, idx) => {
            const subtotal = order.items.reduce(
              (acc, item) => acc + item.price * item.quantity,
              0
            );

            return (
              <div
                key={order.id || idx}
                className="border border-white/10 p-5 rounded-2xl bg-white/5 backdrop-blur-sm"
              >
                <div className="mb-4 flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      Order #{order.id}
                    </h3>
                    <p className="text-white/50 text-sm">{order.date}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-white/70 text-xs">
                    {order.status}
                  </span>
                </div>

                {/* Items */}
                <div className="space-y-4 mb-4">
                  {order.items.map((item, i) => (
                    <div key={i} className="flex gap-4 items-center">
                      <img
                        src={item.image}
                        className="w-14 h-14 object-cover rounded-lg"
                        alt={item.name}
                      />
                      <div className="flex-1">
                        <p className="text-white text-sm">{item.name}</p>
                        <p className="text-white/60 text-xs">
                          Qty: {item.quantity} × ₹{item.price.toLocaleString()}
                        </p>
                      </div>
                      <p className="text-white/80 text-sm font-semibold">
                        ₹{(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Summary */}
                <div className="text-sm text-white/80 space-y-1 border-t border-white/10 pt-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery</span>
                    <span>₹{order.deliveryCharge}</span>
                  </div>
                  <div className="flex justify-between font-semibold text-white">
                    <span>Total</span>
                    <span>
                      ₹{(subtotal + order.deliveryCharge).toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Meta Info */}
                <div className="mt-4 space-y-2 text-white/60 text-xs">
                  <p>
                    <span className="text-white font-medium">Shipping to:</span>{' '}
                    {order.address}
                  </p>
                  <p>
                    <span className="text-white font-medium">Payment:</span>{' '}
                    Credit Card •••• 1234
                  </p>
                  <p>
                    <span className="text-white font-medium">Delivery by:</span>{' '}
                    {order.eta}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-5">
                  {order.status !== 'Delivered' && (
                    <>
                      {' '}
                      <button
                        onClick={() => handleCancelOrder(order.id)}
                        className="flex-1 py-2 border border-red-400 text-red-400 rounded-lg hover:bg-red-400/10 transition"
                      >
                        Cancel Order
                      </button>
                      <button
                        onClick={() => handleTrack(order.statusHistory)}
                        className="flex-1 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition"
                      >
                        Track Order
                      </button>
                    </>
                  )}

                  <button className="flex-1 py-2 border border-white/20 text-white rounded-lg hover:bg-white/10 transition">
                    Download Invoice
                  </button>
                </div>
              </div>
            );
          })}
      </div>
      <TrackModal
        isOpen={showTrackModal}
        onClose={() => setShowTrackModal(false)}
        statusHistory={currentTracking}
        mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1184601575314!2d-122.42005008468392!3d37.77902617975843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808cbaa3bb99%3A0xf81d2f4d8a6d4e50!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1629479304046!5m2!1sen!2sus
"
      />
    </GlassModal>
  );
};

export default MultiOrderModal;
