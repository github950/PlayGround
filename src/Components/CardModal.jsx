import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CardModal = ({ isOpen, onClose, onSave, initialData = null }) => {
  const [form, setForm] = useState({
    cardNumber: '',
    cardHolder: '',
    expiry: '',
    cvv: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialData) setForm(initialData);
    else
      setForm({
        cardNumber: '',
        cardHolder: '',
        expiry: '',
        cvv: '',
      });

    setErrors({});
  }, [initialData, isOpen]);

  const validate = () => {
    const newErrors = {};
    if (!form.cardNumber || form.cardNumber.length < 16)
      newErrors.cardNumber = 'Valid card number required';
    if (!form.cardHolder) newErrors.cardHolder = 'Cardholder name required';
    if (!form.expiry || !/^\d{2}\/\d{2}$/.test(form.expiry))
      newErrors.expiry = 'Expiry must be MM/YY';
    if (!form.cvv || form.cvv.length < 3)
      newErrors.cvv = 'CVV must be at least 3 digits';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSave(form);
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 10, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-md p-6 rounded-xl backdrop-blur-md border border-white/10 bg-black/20 text-white shadow-none relative"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/60 hover:text-white"
            >
              <X size={20} />
            </button>

            <h2 className="text-xl font-semibold mb-6 tracking-tight">
              {initialData ? 'Edit Card' : 'Add New Card'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                {
                  label: 'Card Number',
                  name: 'cardNumber',
                  placeholder: '1234 5678 9012 3456',
                },
                {
                  label: 'Cardholder Name',
                  name: 'cardHolder',
                  placeholder: 'John Doe',
                },
              ].map(({ label, name, placeholder }) => (
                <div key={name}>
                  <label className="block text-sm font-medium text-white/80 mb-1">
                    {label}
                  </label>
                  <input
                    type="text"
                    name={name}
                    value={form[name]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className="w-full px-4 py-2 bg-black/20 text-white border border-white/20 rounded-md focus:outline-none focus:ring-0"
                  />
                  {errors[name] && (
                    <p className="text-red-400 text-xs mt-1">{errors[name]}</p>
                  )}
                </div>
              ))}

              {/* Expiry + CVV */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    label: 'Expiry (MM/YY)',
                    name: 'expiry',
                    placeholder: '09/26',
                  },
                  { label: 'CVV', name: 'cvv', placeholder: '123' },
                ].map(({ label, name, placeholder }) => (
                  <div key={name}>
                    <label className="block text-sm font-medium text-white/80 mb-1">
                      {label}
                    </label>
                    <input
                      type="text"
                      name={name}
                      value={form[name]}
                      onChange={handleChange}
                      placeholder={placeholder}
                      className="w-full px-4 py-2 bg-black/20 text-white border border-white/20 rounded-md focus:outline-none focus:ring-0"
                    />
                    {errors[name] && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors[name]}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="pt-5 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 bg-white/10 text-white rounded hover:bg-white/20 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-white text-black rounded hover:bg-gray-100 transition"
                >
                  {initialData ? 'Update Card' : 'Save Card'}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CardModal;
