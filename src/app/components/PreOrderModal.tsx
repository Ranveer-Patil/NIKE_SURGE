import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, ShoppingBag, ShieldAlert, Sparkles, Plus, Minus } from 'lucide-react';
import confetti from 'canvas-confetti';
import { FLAVORS, Flavor } from '../data/flavors';

interface PreOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialFlavorIndex?: number;
}

export function PreOrderModal({ isOpen, onClose, initialFlavorIndex = 0 }: PreOrderModalProps) {
  const [selectedFlavorIdx, setSelectedFlavorIdx] = useState(initialFlavorIndex);
  const [packSize, setPackSize] = useState<'single' | 'fourPack' | 'twelvePack'>('fourPack');
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [demoOrderCode, setDemoOrderCode] = useState('');

  // Synchronize when modal opens with a requested flavor
  useEffect(() => {
    if (isOpen) {
      setSelectedFlavorIdx(Math.max(0, Math.min(initialFlavorIndex, FLAVORS.length - 1)));
      setIsSuccess(false);
      setErrors({});
    }
  }, [isOpen, initialFlavorIndex]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentFlavor: Flavor = FLAVORS[selectedFlavorIdx] || FLAVORS[0];

  const getPackPrice = () => {
    switch (packSize) {
      case 'single':
        return currentFlavor.conceptPrice.single;
      case 'fourPack':
        return currentFlavor.conceptPrice.fourPack;
      case 'twelvePack':
        return currentFlavor.conceptPrice.twelvePack;
    }
  };

  const unitPrice = getPackPrice();
  const totalPrice = (unitPrice * quantity).toFixed(2);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!name.trim()) newErrors.name = 'Full name is required';
    if (!email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!city.trim()) newErrors.city = 'City or delivery region is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      const randomCode = `SURGE-${Math.floor(1000 + Math.random() * 9000)}-${currentFlavor.label.replace(/\s+/g, '').toUpperCase().slice(0, 6)}`;
      setDemoOrderCode(randomCode);

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#F97316', '#63B3ED', '#ECC94B', '#ffffff'],
        });
      } catch {
        // Fallback gracefully if confetti unavailable
      }
    }, 900);
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md"
        role="dialog"
        aria-modal="true"
        aria-labelledby="preorder-modal-title"
      >
        {/* Backdrop click dismiss */}
        <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

        {/* Modal Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative z-10 w-full max-w-2xl bg-zinc-950 border border-white/15 rounded-2xl shadow-2xl overflow-hidden my-8"
        >
          {/* Top banner */}
          <div className="bg-gradient-to-r from-orange-500/20 via-zinc-900 to-black px-6 py-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h2 id="preorder-modal-title" className="text-white text-base font-black uppercase tracking-wider">
                  Reserve Nike SURGE
                </h2>
                <span className="text-[11px] text-orange-400 font-semibold tracking-widest uppercase">
                  Concept Pre-Order Experience
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              type="button"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 text-white/60 hover:text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
              aria-label="Close pre-order modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Educational Concept Disclaimer */}
          <div className="bg-amber-500/10 border-b border-amber-500/20 px-6 py-2.5 flex items-center gap-2.5 text-amber-300 text-xs">
            <ShieldAlert className="w-4 h-4 shrink-0 text-amber-400" />
            <p>
              <strong>Concept / Demo Notice:</strong> Nike SURGE is a fictional design project for showcase & education. No real payment or delivery is processed.
            </p>
          </div>

          <div className="p-6 md:p-8 max-h-[75vh] overflow-y-auto">
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">
                  Pre-Order Request Received
                </h3>
                <p className="text-white/60 text-sm max-w-md mx-auto mb-6">
                  Thank you, <strong className="text-white">{name}</strong>! Your demo reservation for the{' '}
                  <strong style={{ color: currentFlavor.accent }}>{currentFlavor.name}</strong> line has been registered.
                </p>

                <div className="bg-black/60 border border-white/10 rounded-xl p-5 max-w-md mx-auto text-left mb-6 space-y-2 text-xs">
                  <div className="flex justify-between text-white/50">
                    <span>Reservation Code</span>
                    <span className="font-mono text-orange-400 font-bold">{demoOrderCode}</span>
                  </div>
                  <div className="flex justify-between text-white/50">
                    <span>Flavor / Sneaker Edition</span>
                    <span className="text-white font-medium">{currentFlavor.name} ({currentFlavor.label})</span>
                  </div>
                  <div className="flex justify-between text-white/50">
                    <span>Pack Selection</span>
                    <span className="text-white font-medium">
                      {packSize === 'single' ? 'Single Can (473ml)' : packSize === 'fourPack' ? '4-Pack Collector Box' : '12-Pack Case'} × {quantity}
                    </span>
                  </div>
                  <div className="flex justify-between text-white/50">
                    <span>Concept Total</span>
                    <span className="text-white font-bold">${totalPrice} (Demo USD)</span>
                  </div>
                  <div className="flex justify-between text-white/50">
                    <span>Destination City</span>
                    <span className="text-white font-medium">{city}</span>
                  </div>
                </div>

                <div className="p-4 bg-white/5 rounded-xl text-white/50 text-xs max-w-md mx-auto mb-8 border border-white/5">
                  This is an interactive simulation demonstrating a high-converting Nike SNKRS-inspired energy drop experience.
                </div>

                <div className="flex justify-center gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      setIsSuccess(false);
                      setName('');
                      setEmail('');
                      setCity('');
                    }}
                    className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    Reserve Another Flavor
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    Done
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 1. Flavor Selector */}
                <div>
                  <label className="block text-xs font-bold text-white/70 uppercase tracking-widest mb-2.5">
                    1. Select Flavor / Colorway
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                    {FLAVORS.map((f, i) => (
                      <button
                        key={f.id}
                        type="button"
                        onClick={() => setSelectedFlavorIdx(i)}
                        className={`p-2.5 rounded-xl border text-left flex flex-col items-center sm:items-start transition-all ${
                          selectedFlavorIdx === i
                            ? 'bg-white/10 border-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.25)]'
                            : 'bg-black/40 border-white/10 hover:border-white/25 text-white/60'
                        }`}
                      >
                        <div className="w-10 h-10 mb-1.5 flex items-center justify-center">
                          <img src={f.canImg} alt={f.name} className="h-full object-contain" />
                        </div>
                        <span className="text-[11px] font-bold text-white leading-tight">{f.name}</span>
                        <span className="text-[9px] uppercase font-semibold text-white/40 tracking-wider">
                          {f.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Selected Flavor Summary Highlight */}
                <div
                  className="p-3.5 rounded-xl border flex items-center justify-between gap-4 bg-black/60"
                  style={{ borderColor: `${currentFlavor.accent}40` }}
                >
                  <div className="flex items-center gap-3">
                    <img src={currentFlavor.canImg} alt={currentFlavor.name} className="h-14 w-auto object-contain" />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-black text-white">{currentFlavor.name}</span>
                        <span
                          className="px-2 py-0.5 rounded text-[9px] font-bold tracking-wider uppercase"
                          style={{ backgroundColor: `${currentFlavor.accent}20`, color: currentFlavor.accent }}
                        >
                          {currentFlavor.stat}
                        </span>
                      </div>
                      <p className="text-white/50 text-xs mt-0.5">{currentFlavor.tagline}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-white/40 text-[10px] uppercase tracking-wider block">Formula</span>
                    <span className="text-xs font-bold text-white">{currentFlavor.caffeine} Natural Caffeine</span>
                  </div>
                </div>

                {/* 2. Pack Size & Quantity */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-white/70 uppercase tracking-widest mb-2">
                      2. Pack Size
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { key: 'single', label: '1 Can', price: `$${currentFlavor.conceptPrice.single}` },
                        { key: 'fourPack', label: '4-Pack', price: `$${currentFlavor.conceptPrice.fourPack}` },
                        { key: 'twelvePack', label: '12-Pack', price: `$${currentFlavor.conceptPrice.twelvePack}` },
                      ].map((item) => (
                        <button
                          key={item.key}
                          type="button"
                          onClick={() => setPackSize(item.key as any)}
                          className={`p-2.5 rounded-xl border text-center transition-all ${
                            packSize === item.key
                              ? 'bg-orange-500/15 border-orange-500 text-white font-bold'
                              : 'bg-black/30 border-white/10 hover:border-white/20 text-white/60'
                          }`}
                        >
                          <span className="block text-xs">{item.label}</span>
                          <span className="block text-[11px] font-bold text-orange-400 mt-0.5">{item.price}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-white/70 uppercase tracking-widest mb-2">
                      Quantity
                    </label>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center border border-white/15 rounded-xl bg-black/40 overflow-hidden">
                        <button
                          type="button"
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="w-10 h-10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-12 text-center text-sm font-bold text-white">{quantity}</span>
                        <button
                          type="button"
                          onClick={() => setQuantity(Math.min(10, quantity + 1))}
                          className="w-10 h-10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="text-right flex-1">
                        <span className="text-[10px] text-white/40 uppercase tracking-wider block">Concept Total</span>
                        <span className="text-xl font-black text-white">${totalPrice}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Delivery / Customer Information */}
                <div>
                  <label className="block text-xs font-bold text-white/70 uppercase tracking-widest mb-2">
                    3. Reservation Details
                  </label>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <input
                        type="text"
                        placeholder="Full Name *"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        className={`w-full px-4 py-2.5 bg-black border text-white placeholder-white/30 text-xs rounded-xl focus:outline-none transition-colors ${
                          errors.name ? 'border-red-500' : 'border-white/15 focus:border-orange-500'
                        }`}
                      />
                      {errors.name && <p className="text-red-400 text-[10px] mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <input
                        type="email"
                        placeholder="Email Address *"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        className={`w-full px-4 py-2.5 bg-black border text-white placeholder-white/30 text-xs rounded-xl focus:outline-none transition-colors ${
                          errors.email ? 'border-red-500' : 'border-white/15 focus:border-orange-500'
                        }`}
                      />
                      {errors.email && <p className="text-red-400 text-[10px] mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <input
                        type="tel"
                        placeholder="Phone Number (Optional)"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-2.5 bg-black border border-white/15 focus:border-orange-500 text-white placeholder-white/30 text-xs rounded-xl focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        placeholder="City / Region (e.g., Mumbai, Pune) *"
                        value={city}
                        onChange={(e) => {
                          setCity(e.target.value);
                          if (errors.city) setErrors({ ...errors, city: '' });
                        }}
                        className={`w-full px-4 py-2.5 bg-black border text-white placeholder-white/30 text-xs rounded-xl focus:outline-none transition-colors ${
                          errors.city ? 'border-red-500' : 'border-white/15 focus:border-orange-500'
                        }`}
                      />
                      {errors.city && <p className="text-red-400 text-[10px] mt-1">{errors.city}</p>}
                    </div>
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white text-xs font-black uppercase tracking-[0.2em] rounded-xl transition-all duration-200 shadow-[0_0_30px_rgba(249,115,22,0.35)] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Processing Demo Reservation...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        <span>Confirm Demo Reservation • ${totalPrice}</span>
                      </>
                    )}
                  </button>
                  <p className="text-center text-[10px] text-white/40 mt-2.5">
                    No card required • Instant demo confirmation • Educational project simulation
                  </p>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
