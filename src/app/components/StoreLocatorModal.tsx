import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, Clock, Phone, ExternalLink, ShieldAlert, Search } from 'lucide-react';
import { STORE_LOCATIONS, StoreLocation } from '../data/stores';

interface StoreLocatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectStoreForPreorder?: (store: StoreLocation) => void;
}

const CITIES: Array<'All' | StoreLocation['city']> = [
  'All',
  'Mumbai',
  'Pune',
  'Delhi',
  'Bengaluru',
  'Hyderabad',
];

export function StoreLocatorModal({ isOpen, onClose }: StoreLocatorModalProps) {
  const [selectedCity, setSelectedCity] = useState<'All' | StoreLocation['city']>('All');
  const [searchQuery, setSearchQuery] = useState('');

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

  const filteredStores = STORE_LOCATIONS.filter((store) => {
    const matchesCity = selectedCity === 'All' || store.city === selectedCity;
    const matchesQuery =
      store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.mall.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.city.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCity && matchesQuery;
  });

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md"
        role="dialog"
        aria-modal="true"
        aria-labelledby="store-locator-title"
      >
        <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative z-10 w-full max-w-4xl bg-zinc-950 border border-white/15 rounded-2xl shadow-2xl overflow-hidden my-8"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500/20 via-zinc-900 to-black px-6 py-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <h2 id="store-locator-title" className="text-white text-base font-black uppercase tracking-wider">
                  Find SURGE Store Locations
                </h2>
                <span className="text-[11px] text-orange-400 font-semibold tracking-widest uppercase">
                  Interactive Demo Stock Network
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              type="button"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 text-white/60 hover:text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
              aria-label="Close store locator modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Educational Concept Disclaimer */}
          <div className="bg-amber-500/10 border-b border-amber-500/20 px-6 py-2.5 flex items-center gap-2.5 text-amber-300 text-xs">
            <ShieldAlert className="w-4 h-4 shrink-0 text-amber-400" />
            <p>
              <strong>Demo Locations:</strong> These demo partner locations represent fictional retail showcase spots for the Nike SURGE student concept project.
            </p>
          </div>

          <div className="p-6 md:p-8 max-h-[75vh] overflow-y-auto space-y-6">
            {/* City Filter Pills & Search */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center">
              {/* City tabs */}
              <div className="flex flex-wrap gap-1.5">
                {CITIES.map((city) => (
                  <button
                    key={city}
                    type="button"
                    onClick={() => setSelectedCity(city)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      selectedCity === city
                        ? 'bg-orange-500 text-white shadow-[0_0_12px_rgba(249,115,22,0.4)]'
                        : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>

              {/* Search bar */}
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search area, mall..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 bg-black border border-white/15 focus:border-orange-500 text-white text-xs rounded-xl focus:outline-none placeholder-white/30"
                />
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {filteredStores.length === 0 ? (
                <div className="col-span-2 text-center py-12 text-white/40 text-xs">
                  No demo stores found matching "{searchQuery}". Try selecting another city.
                </div>
              ) : (
                filteredStores.map((store) => (
                  <div
                    key={store.id}
                    className="p-5 bg-black/60 border border-white/10 hover:border-orange-500/40 rounded-xl transition-all duration-200 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div>
                          <span className="text-[10px] uppercase font-bold text-orange-400 tracking-wider">
                            {store.city} • {store.mall}
                          </span>
                          <h3 className="text-white text-sm font-bold mt-0.5">{store.name}</h3>
                        </div>
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-semibold whitespace-nowrap ${
                            store.stockStatus.includes('In Stock')
                              ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                              : store.stockStatus.includes('Limited')
                              ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                              : 'bg-blue-500/15 text-blue-400 border border-blue-500/30'
                          }`}
                        >
                          {store.stockStatus}
                        </span>
                      </div>

                      <div className="space-y-1.5 text-xs text-white/60 mb-3 mt-3">
                        <div className="flex items-start gap-2">
                          <MapPin className="w-3.5 h-3.5 text-white/30 shrink-0 mt-0.5" />
                          <span>{store.address} (PIN {store.pincode})</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-white/30 shrink-0" />
                          <span>{store.hours}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-3.5 h-3.5 text-white/30 shrink-0" />
                          <span>{store.phone}</span>
                        </div>
                      </div>

                      {/* Featured flavors at this store */}
                      <div className="pt-2 border-t border-white/10">
                        <span className="text-[10px] text-white/40 uppercase tracking-widest block mb-1">
                          Demo Stock Allocation
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {store.featuredFlavors.map((flavor, i) => (
                            <span
                              key={i}
                              className="text-[10px] bg-white/5 border border-white/10 text-white/70 px-2 py-0.5 rounded"
                            >
                              {flavor}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 flex items-center justify-between">
                      <span className="text-[10px] text-white/30 uppercase font-mono">
                        ID: {store.id.toUpperCase()}
                      </span>
                      <a
                        href={store.directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-orange-400 hover:text-orange-300 font-semibold transition-colors"
                      >
                        <span>View on Map</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
