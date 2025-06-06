// ...imports
import { useState } from 'react';
import GlassModal from './CommonModal';
import { Pencil, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AddAddressModal from './AddressAddEditModal';
import CardModal from './CardModal';

const ProfileModal = ({ isOpen, onClose }) => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+91 9876543210',
    image: 'https://i.pravatar.cc/150?img=12',
  });

  const [addresses, setAddresses] = useState([
    {
      label: 'Home',
      fullName: 'John Doe',
      phone: '9876543210',
      address: '123 Eco Street',
      city: 'BlackTown',
      state: 'Kerala',
      zip: '695001',
      country: 'India',
      isDefault: true,
    },
    {
      label: 'Work',
      fullName: 'John Doe',
      phone: '9876543210',
      address: '456 Business Rd',
      city: 'WorkCity',
      state: 'Kerala',
      zip: '695002',
      country: 'India',
      isDefault: false,
    },
    {
      label: 'Home',
      fullName: 'Jane Smith',
      phone: '9123456780',
      address: '123 Eco Street',
      city: 'BlackTown',
      state: 'Kerala',
      zip: '695003',
      country: 'India',
      isDefault: false,
    },
    {
      label: 'Work',
      fullName: 'Jane Smith',
      phone: '9123456780',
      address: '456 Business Rd',
      city: 'WorkCity',
      state: 'Kerala',
      zip: '695004',
      country: 'India',
      isDefault: false,
    },
  ]);

  const [cards, setCards] = useState([
    {
      label: 'Visa',
      cardNumber: '4111111111111234',
      cardHolder: 'John Doe',
      expiry: '09/26',
      cvv: '123',
      last4: '1234',
      isDefault: true,
    },
    {
      label: 'MasterCard',
      cardNumber: '5555555555555678',
      cardHolder: 'Jane Smith',
      expiry: '11/27',
      cvv: '456',
      last4: '5678',
      isDefault: false,
    },
    {
      label: 'Visa',
      cardNumber: '4111111111119876',
      cardHolder: 'John Doe',
      expiry: '01/28',
      cvv: '789',
      last4: '9876',
      isDefault: false,
    },
    {
      label: 'MasterCard',
      cardNumber: '5555555555554321',
      cardHolder: 'Jane Smith',
      expiry: '03/25',
      cvv: '321',
      last4: '4321',
      isDefault: false,
    },
  ]);

  const [preferences, setPreferences] = useState({
    darkMode: false,
    language: 'en',
    currency: 'INR',
    notifications: true,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [isopen, setIsOpen] = useState(false);
  const [editingCard, setEditingCard] = useState(null);
  const handleSave = (data) => {
    if (editingAddress) {
      // Update existing
      setAddresses((prev) =>
        prev.map((a) => (a.phone === editingAddress.phone ? { ...data } : a))
      );
    } else {
      // Add new
      setAddresses([...addresses, data]);
    }
    setEditingAddress(null);
  };
  const handleSaveCard = (card) => {
    if (editingCard) {
      setCards((prev) =>
        prev.map((c) => (c.cardNumber === editingCard.cardNumber ? card : c))
      );
    } else {
      setCards([...cards, card]);
    }
    setEditingCard(null);
  };
  return (
    <GlassModal isOpen={isOpen} onClose={onClose}>
      {/* Header */}
      <div className="flex justify-between items-center mb-6 border-b border-white/20 pb-3">
        <h2 className="text-xl font-bold">Your Profile</h2>
        <button
          onClick={onClose}
          className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white"
        >
          <X size={20} />
        </button>
      </div>

      {/* Profile */}
      <AnimatePresence mode="wait">
        {isEditing ? (
          <motion.form
            key="edit"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            onSubmit={(e) => {
              e.preventDefault();
              setIsEditing(false); // Save action
            }}
            className="flex flex-col items-center gap-4 mt-6 text-center"
          >
            {/* Editable Image Input */}
            <img
              src={user.image}
              alt="Profile"
              className="w-24 h-24 rounded-full border-2 border-white/30 object-cover"
            />
            <input
              type="text"
              value={user.image}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, image: e.target.value }))
              }
              placeholder="Image URL"
              className="w-full max-w-xs bg-white/10 border border-white/20 rounded px-3 py-2 text-white text-sm focus:outline-none"
            />
            <input
              type="text"
              value={user.name}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, name: e.target.value }))
              }
              placeholder="Name"
              className="w-full max-w-xs bg-white/10 border border-white/20 rounded px-3 py-2 text-white text-sm focus:outline-none"
            />
            <input
              type="email"
              value={user.email}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, email: e.target.value }))
              }
              placeholder="Email"
              className="w-full max-w-xs bg-white/10 border border-white/20 rounded px-3 py-2 text-white text-sm focus:outline-none"
            />
            <input
              type="text"
              value={user.phone}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, phone: e.target.value }))
              }
              placeholder="Phone"
              className="w-full max-w-xs bg-white/10 border border-white/20 rounded px-3 py-2 text-white text-sm focus:outline-none"
            />

            <div className="flex gap-3 mt-2">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="text-white/70 underline hover:text-white text-sm"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="text-white/70 underline hover:text-white text-sm"
              >
                Save
              </button>
            </div>
          </motion.form>
        ) : (
          <motion.div
            key="view"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center gap-2 text-center mt-4"
          >
            <img
              src={user.image}
              alt="Profile"
              className="w-24 h-24 rounded-full border-2 border-white/30 object-cover"
            />
            <h3 className="text-xl font-semibold">{user.name}</h3>
            <p className="text-white/60 text-sm">{user.email}</p>
            <p className="text-white/60 text-sm">{user.phone}</p>
            <button
              onClick={() => setIsEditing(true)}
              className="mt-2 text-sm underline text-white/70 hover:text-white"
            >
              Edit Profile
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-4 space-y-10">
        {/* Addresses */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-lg font-semibold">Saved Addresses</h4>
            <button
              onClick={() => {
                setEditingAddress(null); // Add mode
                setModalOpen(true);
              }}
              className="text-sm text-white/70 hover:text-white underline"
            >
              + Add Address
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {addresses.map((addr, i) => (
              <div
                key={i}
                onClick={() => {
                  setAddresses((prev) =>
                    prev.map((a, idx) => ({ ...a, isDefault: idx === i }))
                  );
                }}
                className={`p-4 relative rounded-xl border bg-white/5 cursor-pointer transition ${
                  addr.isDefault ? 'border-white/40' : 'border-white/20'
                } hover:border-white/30`}
              >
                <button
                  className="absolute right-2 top-4 text-white/60 hover:text-white"
                  onClick={(e) => {
                    e.stopPropagation(); // prevent selecting default
                    setEditingAddress(addr);
                    setModalOpen(true);
                  }}
                >
                  <Pencil size={17} />
                </button>
                <div className="flex justify-between items-center  mr-5">
                  <h5 className="text-sm font-semibold">{addr.label}</h5>
                  {addr.isDefault && (
                    <span className="text-xs text-green-400 bg-white/10 px-2 py-0.5 rounded-md">
                      Default
                    </span>
                  )}
                </div>
                <p className="text-sm text-white/60">
                  {addr.fullName}, {addr.phone}
                  <br />
                  {addr.address}, {addr.city}, {addr.state}, {addr.zip},{' '}
                  {addr.country}
                </p>
              </div>
            ))}
          </div>
          <AddAddressModal
            isOpen={modalOpen}
            onClose={() => {
              setModalOpen(false);
              setEditingAddress(null);
            }}
            onSave={handleSave}
            initialData={editingAddress}
          />
        </div>

        {/* Cards */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-lg font-semibold">Payment Cards</h4>
            <button
              onClick={() => {
                setEditingCard(null);
                setIsOpen(true);
              }}
              className="text-sm text-white/70 hover:text-white underline"
            >
              + Add Card
            </button>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cards.map((card, idx) => (
              <li
                key={idx}
                // className="p-4 border border-white/10 bg-white/5 rounded-xl flex justify-between items-center"
                onClick={() => {
                  setCards((prev) =>
                    prev.map((a, i) => ({ ...a, isDefault: idx === i }))
                  );
                }}
                className={`p-4 relative rounded-xl border bg-white/5 cursor-pointer transition flex justify-between items-center ${
                  card.isDefault ? 'border-white/40' : 'border-white/20'
                } hover:border-white/30`}
              >
                <div>
                  <p className="text-white font-medium">{card.cardHolder}</p>
                  <p className="text-white/70 text-sm tracking-widest">
                    {`•••• •••• •••• ${card.cardNumber.slice(-4)}`}
                  </p>
                </div>
                <button
                  className="absolute right-2 top-4 text-white/60 hover:text-white"
                  onClick={(e) => {
                    e.stopPropagation(); // prevent selecting default
                    setEditingAddress(card);
                    setModalOpen(true);
                  }}
                >
                  <Pencil size={17} />
                </button>
                {/* <div className="flex justify-between items-center"> */}
                {card.isDefault && (
                  <span className="text-xs text-green-400 bg-white/10 px-2 py-0.5 rounded-md mr-5 -mt-6 ">
                    Default
                  </span>
                )}
                {/* </div> */}
              </li>
            ))}
          </ul>

          <CardModal
            isOpen={isopen}
            onClose={() => {
              setIsOpen(false);
              setEditingCard(null);
            }}
            onSave={handleSaveCard}
            initialData={editingCard}
          />
        </div>

        {/* ⚙️ Preferences */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Account Preferences</h4>

          {/* Language Dropdown */}
          <div className="flex justify-between items-center">
            <span className="text-sm text-white/70">Language</span>
            <select
              className="w-40 bg-white/10 border border-white/20 rounded px-3 py-1 text-sm text-white/80 focus:outline-none"
              value={preferences.language}
              onChange={(e) =>
                setPreferences((p) => ({ ...p, language: e.target.value }))
              }
            >
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              <option value="ml">Malayalam</option>
            </select>
          </div>

          {/* Currency Dropdown */}
          <div className="flex justify-between items-center">
            <span className="text-sm text-white/70">Currency</span>
            <select
              className="w-40 bg-white/10 border border-white/20 rounded px-3 py-1 text-sm text-white/80 focus:outline-none"
              value={preferences.currency}
              onChange={(e) =>
                setPreferences((p) => ({ ...p, currency: e.target.value }))
              }
            >
              <option value="INR">₹ INR</option>
              <option value="USD">$ USD</option>
              <option value="EUR">€ EUR</option>
            </select>
          </div>

          {/* Notifications Toggle */}
          <div className="flex justify-between items-center">
            <span className="text-sm text-white/70">Notifications</span>
            <button
              onClick={() =>
                setPreferences((p) => ({
                  ...p,
                  notifications: !p.notifications,
                }))
              }
              className={`w-12 h-6 rounded-full relative transition duration-300 ${
                preferences.notifications ? 'bg-green-500/70' : 'bg-white/20'
              }`}
            >
              <span
                className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform duration-300 ${
                  preferences.notifications ? 'translate-x-0' : '-translate-x-5'
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </GlassModal>
  );
};

export default ProfileModal;
