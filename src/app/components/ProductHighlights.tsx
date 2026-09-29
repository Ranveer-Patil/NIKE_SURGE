import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Zap, Trophy, Heart, Rocket, Target, Flame, Sparkles, Info, ArrowRight } from 'lucide-react';
import { FLAVORS, Flavor } from '../data/flavors';

interface ProductHighlightsProps {
  onOpenPreOrder: (flavorIndex: number) => void;
  onOpenDetails: (flavorIndex: number) => void;
}

const features = [
  {
    icon: Zap,
    title: 'Instant Activation',
    description: 'Natural green coffee bean & guarana complex activates neuro-muscular readiness in minutes',
    color: 'from-orange-500 to-red-500',
    spec: '200mg Natural Caffeine',
  },
  {
    icon: Trophy,
    title: 'Peak Endurance',
    description: 'Balanced BCAA profile (2:1:1 leucine ratio) engineered to preserve muscle glycogen under fatigue',
    color: 'from-yellow-500 to-orange-500',
    spec: '1000mg BCAAs Matrix',
  },
  {
    icon: Heart,
    title: 'Zero Crash Curve',
    description: 'Stevia-sweetened sustained release curve prevents glycemic spiking and post-workout lethargy',
    color: 'from-red-500 to-pink-500',
    spec: '0g Sugar Added',
  },
  {
    icon: Rocket,
    title: 'Rapid Osmotic Balance',
    description: 'Triple-electrolyte matrix (sodium, potassium, magnesium) for cell hydration during high sweat loss',
    color: 'from-cyan-500 to-blue-500',
    spec: '255mg Active Ions',
  },
  {
    icon: Target,
    title: 'Cognitive Drive',
    description: 'L-Theanine and taurine synergy for calm, strategic field focus during critical clutch moments',
    color: 'from-purple-500 to-indigo-500',
    spec: '1000mg Taurine + Focus',
  },
  {
    icon: Flame,
    title: 'Cellular Thermogenesis',
    description: 'Clean metabolic stimulation without jitteriness or artificial coloring agents',
    color: 'from-orange-600 to-red-600',
    spec: '10 Calories Only',
  },
];

export function ProductHighlights({ onOpenPreOrder, onOpenDetails }: ProductHighlightsProps) {
  const [activeFlavor, setActiveFlavor] = useState(0);
  const flavor: Flavor = FLAVORS[activeFlavor] || FLAVORS[0];

  return (
    <section
      id="product"
      className="relative py-28 md:py-36 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden"
    >
      {/* Background Grid Accent */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 mb-3 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-orange-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Formulation Architecture • Demo Concept</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-black mb-5 uppercase tracking-tight">
            Engineered For{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-400 to-cyan-400">
              Breakthroughs
            </span>
          </h2>
          <p className="text-sm md:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            Every molecule, every colorway, and every ingredient is conceptually designed to fuel high-velocity human potential.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative"
            >
              <div className="relative p-7 bg-zinc-950/70 border border-white/10 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all duration-300 h-full flex flex-col justify-between">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} p-0.5`}>
                      <div className="w-full h-full bg-black rounded-xl flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-white/40 border border-white/10 px-2 py-0.5 rounded uppercase">
                      {feature.spec}
                    </span>
                  </div>

                  <h3 className="text-xl font-black mb-2 text-white uppercase tracking-tight">{feature.title}</h3>
                  <p className="text-white/55 text-xs leading-relaxed">{feature.description}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 text-[10px] text-white/30 uppercase tracking-widest font-mono">
                  Concept Formula Metric
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Anchor for Flavors */}
        <div id="flavors" className="pt-4 scroll-mt-24" />

        {/* Product Showcase Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="grid md:grid-cols-2 gap-0 items-stretch min-h-[640px] border border-white/15 rounded-3xl overflow-hidden bg-zinc-950/80 shadow-2xl">

            {/* ── LEFT — Can stage ── */}
            <div className="relative flex flex-col items-center justify-center px-6 py-12 md:py-16 overflow-hidden bg-black/60">

              {/* Radial color wash */}
              <motion.div
                key={activeFlavor + '-wash'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse 65% 65% at 50% 50%, ${flavor.accent}30 0%, transparent 80%)`,
                }}
              />

              {/* Concentric ambient circles */}
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="absolute rounded-full border border-white/[0.04] pointer-events-none"
                  style={{ width: `${i * 150}px`, height: `${i * 150}px` }}
                />
              ))}

              {/* Can display */}
              <div className="relative z-10 w-full flex items-center justify-center py-4">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeFlavor}
                    src={flavor.canImg}
                    alt={`SURGE ${flavor.name} Can`}
                    initial={{ opacity: 0, scale: 0.88, y: 24 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 1.06, y: -20 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      maxHeight: '400px',
                      filter: `drop-shadow(0 25px 50px ${flavor.accent}65)`,
                    }}
                    className="object-contain w-auto select-none"
                  />
                </AnimatePresence>
              </div>

              {/* Flavor selector interactive buttons */}
              <div className="relative z-10 mt-6 flex flex-wrap items-center justify-center gap-3">
                {FLAVORS.map((f, i) => (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setActiveFlavor(i)}
                    className="group relative flex flex-col items-center gap-1.5 transition-all duration-200 cursor-pointer focus:outline-none"
                    aria-label={`Select flavor ${f.name} (${f.label})`}
                    aria-pressed={i === activeFlavor}
                  >
                    <div
                      className="w-12 h-12 rounded-2xl overflow-hidden border-2 transition-all duration-200 p-1 bg-black/60"
                      style={{
                        borderColor: i === activeFlavor ? f.accent : 'rgba(255,255,255,0.15)',
                        boxShadow: i === activeFlavor ? `0 0 16px ${f.accent}70` : 'none',
                        transform: i === activeFlavor ? 'scale(1.08)' : 'scale(1)',
                      }}
                    >
                      <img src={f.canImg} alt={f.name} className="w-full h-full object-contain" />
                    </div>
                    <span
                      className="transition-colors duration-200 font-bold"
                      style={{
                        fontSize: '0.62rem',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: i === activeFlavor ? f.accent : 'rgba(255,255,255,0.4)',
                      }}
                    >
                      {f.label}
                    </span>
                  </button>
                ))}
              </div>

              {/* Bottom label */}
              <div className="absolute bottom-4 left-6 text-white/30 text-[10px] uppercase font-mono tracking-widest">
                473ML · SNEAKER DROP FORMULA
              </div>
            </div>

            {/* ── RIGHT — Product details ── */}
            <div className="flex flex-col justify-center px-8 md:px-12 py-10 md:py-14 bg-zinc-950/90 border-t md:border-t-0 md:border-l border-white/10">

              {/* Eyebrow */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFlavor + '-label'}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p
                    className="mb-3 text-xs font-bold tracking-[0.25em] uppercase flex items-center gap-2"
                    style={{ color: flavor.accent }}
                  >
                    <span>{flavor.stat}</span>
                    <span className="text-white/20">•</span>
                    <span>{flavor.sneaker}</span>
                  </p>
                </motion.div>
              </AnimatePresence>

              <h3 className="text-white text-4xl md:text-5xl font-black uppercase tracking-tight leading-none mb-1">
                SURGE {flavor.name}
              </h3>
              <h4
                className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4"
                style={{ color: flavor.accent }}
              >
                {flavor.tagline}
              </h4>

              <p className="text-white/60 text-xs md:text-sm leading-relaxed mb-6">
                {flavor.description}
              </p>

              {/* Formula Highlights */}
              <div className="space-y-0 mb-8 border-t border-white/10">
                {[
                  { title: 'Natural Caffeine Matrix', body: `${flavor.caffeine} clean stimulation from green coffee bean & guarana` },
                  { title: 'Electrolyte & Hydration Grid', body: `${flavor.electrolytes} for rapid cellular rehydration` },
                  { title: 'Zero Sugar Formulation', body: `${flavor.sugar} added sugars · only ${flavor.calories} clean functional calories` },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 py-3.5 border-b border-white/10"
                  >
                    <span className="text-orange-500 font-mono text-xs font-bold shrink-0 mt-0.5">
                      0{i + 1}
                    </span>
                    <div>
                      <p className="text-white font-bold text-xs">{item.title}</p>
                      <p className="text-white/50 text-xs leading-normal">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats badges */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                {[
                  { value: flavor.caffeine, label: 'Caffeine' },
                  { value: flavor.calories, label: 'Calories' },
                  { value: flavor.sugar, label: 'Sugar' },
                ].map((s, i) => (
                  <div key={i} className="py-3 px-2 border border-white/10 rounded-xl text-center bg-black/50">
                    <div
                      className="text-lg md:text-xl font-black mb-0.5 tracking-tight"
                      style={{ color: flavor.accent }}
                    >
                      {s.value}
                    </div>
                    <div className="text-white/40 uppercase text-[9px] font-bold tracking-wider">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Interactive CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onOpenPreOrder(activeFlavor)}
                  className="flex-1 py-3.5 px-6 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_0_25px_rgba(249,115,22,0.35)] cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Pre-Order {flavor.name}</span>
                </motion.button>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onOpenDetails(activeFlavor)}
                  className="py-3.5 px-6 rounded-xl border border-white/20 hover:border-white/50 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer bg-white/5 hover:bg-white/10"
                >
                  <Info className="w-4 h-4 text-white/70" />
                  <span>View Details (Demo)</span>
                </motion.button>
              </div>

              <p className="text-[10px] text-white/30 text-center mt-3 uppercase tracking-wider">
                Concept Release • Available in Demo Reservation Network
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
