import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, ShieldAlert, Zap, Award, Flame, HeartPulse } from 'lucide-react';
import { FLAVORS, Flavor } from '../data/flavors';

interface ProductDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  flavorIndex: number;
  onOpenPreOrder: (flavorIndex: number) => void;
}

export function ProductDetailsModal({
  isOpen,
  onClose,
  flavorIndex,
  onOpenPreOrder,
}: ProductDetailsModalProps) {
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

  const flavor: Flavor = FLAVORS[flavorIndex] || FLAVORS[0];

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md"
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-details-title"
      >
        <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative z-10 w-full max-w-3xl bg-zinc-950 border border-white/15 rounded-2xl shadow-2xl overflow-hidden my-8"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-zinc-900 to-black px-6 py-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: flavor.accent }}
              />
              <span className="text-white/60 text-xs font-bold tracking-widest uppercase">
                Product Specification Sheet
              </span>
              <span className="text-[10px] text-orange-400 border border-orange-500/30 px-2 py-0.5 rounded-full font-semibold uppercase">
                Demo Concept
              </span>
            </div>
            <button
              onClick={onClose}
              type="button"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 text-white/60 hover:text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
              aria-label="Close product details modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Educational Concept Disclaimer */}
          <div className="bg-amber-500/10 border-b border-amber-500/20 px-6 py-2 flex items-center gap-2 text-amber-300 text-xs">
            <ShieldAlert className="w-4 h-4 shrink-0 text-amber-400" />
            <p>
              <strong>Concept / Demo Notice:</strong> Fictional energy drink formulation inspired by sneaker colorways for student UI/UX design showcase.
            </p>
          </div>

          <div className="p-6 md:p-8 max-h-[78vh] overflow-y-auto space-y-6">
            {/* Top Product Hero */}
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 flex flex-col items-center justify-center p-6 bg-black/60 border border-white/10 rounded-2xl relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-20 blur-2xl"
                  style={{ background: `radial-gradient(circle, ${flavor.accent} 0%, transparent 70%)` }}
                />
                <img
                  src={flavor.canImg}
                  alt={flavor.name}
                  className="h-64 object-contain relative z-10 drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)]"
                />
                <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-white/70">
                  <img src={flavor.shoeImg} alt={flavor.sneaker} className="w-8 h-8 rounded-full border border-white/20 object-cover" />
                  <span>Inspiration: {flavor.label}</span>
                </div>
              </div>

              <div className="md:col-span-7 space-y-3">
                <div className="flex items-center gap-2">
                  <span
                    className="text-xs uppercase font-extrabold tracking-widest px-2.5 py-1 rounded"
                    style={{ backgroundColor: `${flavor.accent}25`, color: flavor.accent }}
                  >
                    {flavor.stat}
                  </span>
                  <span className="text-xs text-white/40 font-mono uppercase tracking-wider">
                    {flavor.availability}
                  </span>
                </div>

                <h3 id="product-details-title" className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
                  SURGE {flavor.name}
                </h3>
                <p className="text-orange-400 font-semibold text-sm">{flavor.tagline}</p>

                <p className="text-white/60 text-xs leading-relaxed pt-1">
                  {flavor.description}
                </p>

                {/* Flavor Notes Pills */}
                <div className="pt-2">
                  <span className="text-[10px] text-white/40 uppercase tracking-widest block mb-1.5 font-bold">
                    Tasting & Botanical Profile
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {flavor.flavorNotes.map((note, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/80 text-[11px] font-medium"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pricing & Size Concept */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-white/40 uppercase tracking-wider block">Concept Price</span>
                    <span className="text-xl font-black text-white">${flavor.conceptPrice.single} <span className="text-xs font-normal text-white/40">USD (Demo)</span></span>
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 uppercase tracking-wider block">Net Volume</span>
                    <span className="text-sm font-bold text-white">473ml / 16 FL OZ</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Formula Grid */}
            <div>
              <h4 className="text-xs font-bold text-white/70 uppercase tracking-widest mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4 text-orange-400" />
                Performance Formula Specification (Concept)
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-3 bg-black/40 border border-white/10 rounded-xl">
                  <span className="text-lg font-black text-white block">{flavor.caffeine}</span>
                  <span className="text-[10px] text-white/40 uppercase tracking-wider">Natural Caffeine</span>
                </div>
                <div className="p-3 bg-black/40 border border-white/10 rounded-xl">
                  <span className="text-lg font-black text-white block">{flavor.sugar}</span>
                  <span className="text-[10px] text-white/40 uppercase tracking-wider">Sugar Added</span>
                </div>
                <div className="p-3 bg-black/40 border border-white/10 rounded-xl">
                  <span className="text-lg font-black text-white block">{flavor.bcaas}</span>
                  <span className="text-[10px] text-white/40 uppercase tracking-wider">BCAAs Complex</span>
                </div>
                <div className="p-3 bg-black/40 border border-white/10 rounded-xl">
                  <span className="text-lg font-black text-white block">{flavor.calories}</span>
                  <span className="text-[10px] text-white/40 uppercase tracking-wider">Clean Energy</span>
                </div>
              </div>
            </div>

            {/* Nutritional & Ingredient Table */}
            <div className="bg-black/40 border border-white/10 rounded-xl p-4 text-xs">
              <h5 className="font-bold text-white uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>Nutrition Facts Table (Concept)</span>
                <span className="text-[10px] text-white/40">Per 1 Can (473ml)</span>
              </h5>
              <div className="divide-y divide-white/10 text-white/70">
                <div className="py-1.5 flex justify-between">
                  <span>Serving Size</span>
                  <span className="text-white font-medium">1 Can (473ml)</span>
                </div>
                <div className="py-1.5 flex justify-between">
                  <span>Calories</span>
                  <span className="text-white font-medium">{flavor.calories}</span>
                </div>
                <div className="py-1.5 flex justify-between">
                  <span>Total Carbohydrate</span>
                  <span className="text-white font-medium">2g (0% DV)</span>
                </div>
                <div className="py-1.5 flex justify-between">
                  <span>Total Sugars</span>
                  <span className="text-white font-medium">{flavor.sugar}</span>
                </div>
                <div className="py-1.5 flex justify-between">
                  <span>Taurine + L-Theanine</span>
                  <span className="text-white font-medium">{flavor.taurine}</span>
                </div>
                <div className="py-1.5 flex justify-between">
                  <span>Electrolyte Blend</span>
                  <span className="text-white font-medium">{flavor.electrolytes}</span>
                </div>
                <div className="py-1.5 flex justify-between">
                  <span>Vitamins B3, B6, B12, B5</span>
                  <span className="text-white font-medium">100% Daily Value</span>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenPreOrder(flavorIndex);
                }}
                className="flex-1 py-3.5 bg-orange-500 hover:bg-orange-600 text-white text-xs font-black uppercase tracking-[0.2em] rounded-xl transition-all shadow-[0_0_25px_rgba(249,115,22,0.35)] flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Pre-Order {flavor.name} (Demo)</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
