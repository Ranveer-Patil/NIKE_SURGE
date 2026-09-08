import { motion, AnimatePresence } from 'motion/react';
import { Zap, Trophy, Heart, Rocket, Target, Flame } from 'lucide-react';
import { useState } from 'react';
import canAirJordan from 'figma:asset/284fe6d097a86cc207cee5449a505db0667e4e05.png';
import canChicago from 'figma:asset/2806e944ba679afedce467d1bc22dda435e8e944.png';
import canDior from 'figma:asset/31e6f830b5e4b045171e29ecb4bbd3877306379f.png';
import canCactus from 'figma:asset/07567252f410fc145190255e9bf3045ff97a17a3.png';
import canPollen from 'figma:asset/413087b0e0007ac83f6e128fa03b1816b721f603.png';

const features = [
  {
    icon: Zap,
    title: 'Instant Energy',
    description: 'Advanced formula delivers rapid energy activation within minutes',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Trophy,
    title: 'Peak Performance',
    description: 'Scientifically engineered to maximize athletic output and endurance',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Heart,
    title: 'Zero Crash',
    description: 'Sustained energy release without the post-drink energy drop',
    color: 'from-red-500 to-pink-500',
  },
  {
    icon: Rocket,
    title: 'Rapid Recovery',
    description: 'Electrolytes and nutrients for faster post-workout recovery',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Target,
    title: 'Mental Focus',
    description: 'Enhanced cognitive function for strategic game-time decisions',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    icon: Flame,
    title: 'Metabolism Boost',
    description: 'Thermogenic blend to optimize calorie burn and fat oxidation',
    color: 'from-orange-600 to-red-600',
  },
];

const flavors = [
  { img: canAirJordan, name: 'Icy Berry',    label: 'Air Jordan',  accent: '#63B3ED', stat: 'University Blue' },
  { img: canChicago,   name: 'Aero Speed',   label: 'Chicago',     accent: '#E53E3E', stat: 'Nike Air' },
  { img: canDior,      name: 'Aero Ice',     label: 'Dior Air',    accent: '#A0AEC0', stat: 'Luxury Edit.' },
  { img: canCactus,    name: 'Cactus Energy',label: 'Travis Scott', accent: '#C8A882', stat: 'Cactus Jack' },
  { img: canPollen,    name: 'Pollen Power', label: 'Yellow & Blk',accent: '#ECC94B', stat: 'Pollen Air' },
];

export function ProductHighlights() {
  const [activeFlavor, setActiveFlavor] = useState(0);
  const flavor = flavors[activeFlavor];

  return (
    <section className="relative py-32 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase">
            Built For{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-cyan-500">
              Champions
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Every ingredient, every formula, engineered for one purpose: To push you beyond your limits.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="relative p-8 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg overflow-hidden hover:border-orange-500/50 transition-all duration-300">
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                {/* Icon */}
                <div className={`relative w-16 h-16 mb-6 rounded-lg bg-gradient-to-br ${feature.color} p-0.5`}>
                  <div className="w-full h-full bg-black rounded-lg flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-black mb-3 uppercase">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>

                {/* Decorative Element */}
                <div className="absolute top-4 right-4 w-12 h-12 border-2 border-gray-800 group-hover:border-orange-500/50 transition-colors duration-300 rounded-full"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Product Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="grid md:grid-cols-2 gap-0 items-stretch min-h-[640px] border border-white/8 rounded-2xl overflow-hidden bg-[#0a0a0a]">

            {/* ── LEFT — Can stage ── */}
            <div className="relative flex flex-col items-center justify-center px-8 py-16 overflow-hidden">

              {/* Radial color wash */}
              <motion.div
                key={activeFlavor + '-wash'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse 65% 65% at 50% 50%, ${flavor.accent}22 0%, transparent 80%)`,
                }}
              />

              {/* Concentric rings */}
              {[1, 2, 3].map(i => (
                <div
                  key={i}
                  className="absolute rounded-full border border-white/[0.04]"
                  style={{ width: `${i * 160}px`, height: `${i * 160}px` }}
                />
              ))}

              {/* Can */}
              <div className="relative z-10 w-full flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeFlavor}
                    src={flavor.img}
                    alt={flavor.name}
                    initial={{ opacity: 0, scale: 0.88, y: 24 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 1.06, y: -20 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      maxHeight: '420px',
                      filter: `drop-shadow(0 32px 64px ${flavor.accent}60)`,
                    }}
                    className="object-contain w-auto"
                  />
                </AnimatePresence>
              </div>

              {/* Flavor selector strip */}
              <div className="relative z-10 mt-10 flex items-center gap-3">
                {flavors.map((f, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveFlavor(i)}
                    className="group relative flex flex-col items-center gap-1.5 transition-all duration-200"
                  >
                    <div
                      className="w-12 h-12 rounded-full overflow-hidden border-2 transition-all duration-200"
                      style={{
                        borderColor: i === activeFlavor ? f.accent : 'rgba(255,255,255,0.1)',
                        boxShadow: i === activeFlavor ? `0 0 12px ${f.accent}60` : 'none',
                      }}
                    >
                      <img src={f.img} alt={f.name} className="w-full h-full object-cover" />
                    </div>
                    <span
                      className="transition-colors duration-200"
                      style={{
                        fontSize: '0.56rem',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: i === activeFlavor ? f.accent : 'rgba(255,255,255,0.25)',
                      }}
                    >
                      {f.label}
                    </span>
                  </button>
                ))}
              </div>

              {/* Bottom label */}
              <div className="absolute bottom-5 left-6">
                <p className="text-white/15" style={{ fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                  473ml · Nike SURGE
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-px bg-white/[0.06]" />

            {/* ── RIGHT — Product details ── */}
            <div className="flex flex-col justify-center px-10 md:px-14 py-14">

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
                    className="mb-4"
                    style={{
                      color: flavor.accent,
                      fontSize: '0.68rem',
                      letterSpacing: '0.22em',
                      textTransform: 'uppercase',
                      fontWeight: 600,
                    }}
                  >
                    {flavor.stat} · {flavor.name}
                  </p>
                </motion.div>
              </AnimatePresence>

              <h3
                className="text-white mb-2"
                style={{
                  fontSize: 'clamp(2.4rem, 4vw, 3.5rem)',
                  fontWeight: 900,
                  letterSpacing: '-0.03em',
                  lineHeight: 0.95,
                  textTransform: 'uppercase',
                }}
              >
                Precision
              </h3>
              <h3
                className="mb-8"
                style={{
                  fontSize: 'clamp(2.4rem, 4vw, 3.5rem)',
                  fontWeight: 900,
                  letterSpacing: '-0.03em',
                  lineHeight: 0.95,
                  textTransform: 'uppercase',
                  color: flavor.accent,
                }}
              >
                Engineered
              </h3>

              {/* Ingredient list */}
              <div className="space-y-0 mb-10 border-t border-white/[0.07]">
                {[
                  { title: 'Advanced Formula', body: '200mg natural caffeine · BCAAs · Electrolyte complex' },
                  { title: 'Zero Sugar', body: 'Clean energy without compromise · Only 10 cal per can' },
                  { title: 'Premium Ingredients', body: 'Sourced from the world\'s finest natural energy sources' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-5 py-5 border-b border-white/[0.07]"
                  >
                    <span className="text-white/20 mt-0.5 shrink-0" style={{ fontSize: '0.65rem', letterSpacing: '0.1em', fontWeight: 700 }}>
                      0{i + 1}
                    </span>
                    <div>
                      <p className="text-white mb-0.5" style={{ fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.02em' }}>
                        {item.title}
                      </p>
                      <p className="text-white/40" style={{ fontSize: '0.75rem', lineHeight: 1.6 }}>
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mb-10">
                {[
                  { value: '200mg', label: 'Caffeine' },
                  { value: '10',    label: 'Calories' },
                  { value: '0g',    label: 'Sugar' },
                ].map((s, i) => (
                  <div key={i} className="py-5 px-3 border border-white/[0.08] rounded-xl text-center bg-black/40">
                    <div
                      className="mb-1"
                      style={{ fontSize: '1.6rem', fontWeight: 900, letterSpacing: '-0.03em', color: flavor.accent }}
                    >
                      {s.value}
                    </div>
                    <div className="text-white/30 uppercase" style={{ fontSize: '0.6rem', letterSpacing: '0.18em' }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex gap-3">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex-1 text-center py-3.5 rounded-full bg-white text-black transition-colors hover:bg-white/90"
                  style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.04em' }}
                >
                  Shop {flavor.label}
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex-1 text-center py-3.5 rounded-full border border-white/20 text-white transition-colors hover:border-white/50"
                  style={{ fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.04em' }}
                >
                  Learn More
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}