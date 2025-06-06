import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AddAddressModal = ({ isOpen, onClose, onSave, initialData = null }) => {
  const [form, setForm] = useState({
    label: '',
    fullName: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    isDefault: false,
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    } else {
      setForm({
        label: '',
        fullName: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        isDefault: false,
      });
    }
    setErrors({});
  }, [initialData, isOpen]);

  const validate = () => {
    const newErrors = {};
    if (!form.label) newErrors.label = 'Label is required';
    if (!form.fullName) newErrors.fullName = 'Full name is required';
    if (!form.phone) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(form.phone))
      newErrors.phone = 'Phone must be 10 digits';
    if (!form.address) newErrors.address = 'Address is required';
    if (!form.city) newErrors.city = 'City is required';
    if (!form.state) newErrors.state = 'State is required';
    if (!form.zip) newErrors.zip = 'ZIP code is required';
    else if (!/^\d{5,6}$/.test(form.zip))
      newErrors.zip = 'ZIP code must be 5 or 6 digits';
    if (!form.country) newErrors.country = 'Country is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
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
          className="fixed inset-0 z-50 flex items-center bg-black/30  justify-center  px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, y: 40, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className=" w-full max-w-2xl max-h-[90vh] bg-black/70 backdrop-blur-xl border border-white/20 overflow-hidden shadow-xl p-6 rounded-2xl "
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/60 hover:text-white"
            >
              <X size={20} />
            </button>
            <h2 className="text-xl font-semibold mb-4 tracking-tight">
              {initialData ? 'Edit Address' : 'Add New Address'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                {
                  label: 'Label',
                  name: 'label',
                  placeholder: 'e.g. Home, Work',
                },
                {
                  label: 'Full Name',
                  name: 'fullName',
                  placeholder: 'John Doe',
                },
                {
                  label: 'Phone Number',
                  name: 'phone',
                  placeholder: '10-digit phone',
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
                    className="w-full px-4 py-2 bg-black/20 text-white border border-white/20 rounded-md "
                  />
                  {errors[name] && (
                    <p className="text-red-400 text-xs mt-1">{errors[name]}</p>
                  )}
                </div>
              ))}

              <div>
                <label className="block text-sm font-medium text-white/80 mb-1">
                  Address
                </label>
                <textarea
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-black/20 text-white border border-white/20 rounded-md "
                  placeholder="Street address"
                />
                {errors.address && (
                  <p className="text-red-400 text-xs mt-1">{errors.address}</p>
                )}
              </div>

              {/* City / State */}
              <div className="grid grid-cols-2 gap-4">
                {['city', 'state'].map((field) => (
                  <div key={field}>
                    <label className="block text-sm font-medium text-white/80 mb-1 capitalize">
                      {field}
                    </label>
                    <input
                      type="text"
                      name={field}
                      value={form[field]}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-black/20 text-white border border-white/20 rounded-md "
                    />
                    {errors[field] && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors[field]}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Zip / Country */}
              <div className="grid grid-cols-2 gap-4">
                {['zip', 'country'].map((field) => (
                  <div key={field}>
                    <label className="block text-sm font-medium text-white/80 mb-1 capitalize">
                      {field}
                    </label>
                    <input
                      type="text"
                      name={field}
                      value={form[field]}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-black/20 text-white border border-white/20 rounded-md "
                    />
                    {errors[field] && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors[field]}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Default Checkbox */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="isDefault"
                  checked={form.isDefault}
                  onChange={handleChange}
                  className="h-4 w-4 text-white accent-white bg-black/30 border-white/30"
                />
                <label className="text-sm font-medium text-white/80">
                  Set as default address
                </label>
              </div>

              {/* Footer Actions */}
              <div className="pt-4 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 bg-white/10 text-white rounded hover:bg-white/20 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-white text-black font-medium rounded hover:bg-gray-100 transition"
                >
                  {initialData ? 'Update Address' : 'Save Address'}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AddAddressModal;
