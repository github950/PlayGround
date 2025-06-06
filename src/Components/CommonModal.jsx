import { AnimatePresence, motion } from 'framer-motion';

const GlassModal = ({ isOpen, onClose, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-lg flex items-end justify-center px-4"
          onClick={onClose}
        >
          <motion.div
            key="modal"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-6xl h-[90vh] bg-white/10 backdrop-blur-lg border border-white/20 overflow-hidden shadow-xl rounded-t-[2rem]"
          >
            {/* Scrollable content with hidden scrollbar */}
            <div className="relative z-10 h-full overflow-y-auto no-scrollbar p-6 text-white">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GlassModal;
