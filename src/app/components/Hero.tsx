import nikeLogo from 'figma:asset/1a08f1d83d4bde65dd66d89e0667926113de7c54.png';
import { motion } from 'motion/react';
import { useRef, useState } from 'react';
import { Star } from 'lucide-react';
import cactusJackCan from 'figma:asset/2ee2089ed5bd6fd544adbd42644fe1cf32f19bd6.png';
import mainCan from 'figma:asset/d11ddb98b482519b6d4aa19c9cad9c07b0aafe8e.png';
import canCactus from 'figma:asset/07567252f410fc145190255e9bf3045ff97a17a3.png';
import canCollage from 'figma:asset/bd39074107b45a011f79a372a7b6e69947c74fbf.png';
import shoe1 from 'figma:asset/e8e1cee5cb9cb229e666438b20c9ffd7f99fe47a.png';
import shoe2 from 'figma:asset/838f6b54cd553b50ce730a69bfcd1666b0a518df.png';
import shoe3 from 'figma:asset/6a3f4c00cb7b9437093ba395d32309935df1b275.png';
import shoe4 from 'figma:asset/de68f0797e6bde2f09103cb7d1a7bd2daa92ddb6.png';
import shoe5 from 'figma:asset/d1af5de3b8b05e5d1169137a1b43f03d2d91eba9.png';

const shoes = [
  { img: shoe1, name: 'Yellow Toe', color: '#F7B731' },
  { img: shoe2, name: 'Chicago', color: '#E63946' },
  { img: shoe3, name: 'University Blue', color: '#63B3ED' },
  { img: shoe4, name: 'Dior x Air', color: '#A0AEC0' },
  { img: shoe5, name: 'Travis Scott', color: '#8B7355' },
];

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeShoe, setActiveShoe] = useState(0);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-black overflow-hidden"
    >
      {/* ── Noise grain overlay ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '150px 150px',
        }}
      />

      {/* ── Background gradient ── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-500/5 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-2/3 h-1/2 bg-gradient-to-tr from-blue-500/5 via-transparent to-transparent" />
      </div>

      {/* ── Diagonal accent lines ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.1 * i, ease: 'easeOut' }}
            className="absolute h-px bg-gradient-to-r from-transparent via-white/8 to-transparent"
            style={{
              width: '120%',
              top: `${10 + i * 15}%`,
              left: '-10%',
              transform: `rotate(-12deg)`,
            }}
          />
        ))}
      </div>

      {/* ── Glowing orbs ── */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #F97316 0%, transparent 70%)' }}
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #63B3ED 0%, transparent 70%)' }}
      />

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 min-h-screen flex flex-col">

        {/* ── Top bar ── */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-between px-8 md:px-16 pt-8"
        >
          {/* Nike swoosh logo */}
          <div className="flex items-center gap-3">
            <img
              src={nikeLogo}
              alt="Nike"
              className="h-8 md:h-9 w-auto object-contain"
              style={{ filter: 'invert(1)' }}
            />
            <span className="text-white/40 text-xs tracking-[0.4em] uppercase">Energy</span>
          </div>
          {/* Nav pills */}
          <div className="hidden md:flex items-center gap-8 text-xs tracking-[0.25em] text-white/40 uppercase">
            {['Product', 'Story', 'Flavors', 'Drop'].map(item => (
              <span key={item} className="hover:text-white cursor-pointer transition-colors duration-200">{item}</span>
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-white/20 text-white text-xs tracking-[0.2em] uppercase px-5 py-2.5 transition-all duration-300 hover:bg-orange-500 hover:border-orange-500"
          >
            Get Yours
          </motion.button>
        </motion.div>

        {/* ── Hero body ── */}
        <div className="flex-1 grid md:grid-cols-2 items-center px-8 md:px-16 py-8 gap-8">

          {/* LEFT — Typography */}
          <motion.div className="flex flex-col justify-center order-2 md:order-1">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 mb-6 self-start"
            >
              <div className="w-8 h-px bg-orange-500" />
              <span className="text-orange-500 text-xs tracking-[0.35em] uppercase font-medium">
                Nike × Air Jordan
              </span>
              <div className="w-8 h-px bg-orange-500" />
            </motion.div>

            {/* Hero headline */}
            <div className="overflow-hidden mb-2">
              <motion.h1
                initial={{ y: 120, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(5rem,13vw,11rem)] font-black uppercase leading-none tracking-tighter text-white"
                style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}
              >
                SURGE
              </motion.h1>
            </div>

            <div className="overflow-hidden mb-8">
              <motion.div
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-baseline gap-3"
              >
                <span
                  className="text-[clamp(2.5rem,6vw,5rem)] font-black uppercase leading-none tracking-tight"
                  style={{ color: '#F97316' }}
                >
                  AIR
                </span>
                <span className="text-[clamp(2.5rem,6vw,5rem)] font-black uppercase leading-none tracking-tight text-white">
                  ENERGY
                </span>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="text-white/45 max-w-md mb-10 leading-relaxed"
              style={{ fontSize: 'clamp(0.85rem, 1.1vw, 1rem)' }}
            >Born from the legacy of Air Jordan 1 × Travis Scott. Engineered for those who push limits, break barriers, and rewrite the rules. Cactus Jack — Wild Desert Energy.</motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="bg-orange-500 hover:bg-orange-600 text-white text-sm tracking-[0.2em] uppercase font-black px-10 py-4 transition-all duration-300 shadow-[0_0_40px_rgba(249,115,22,0.4)]"
              >
                Shop Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="border border-white/20 hover:border-white/60 text-white text-sm tracking-[0.2em] uppercase font-black px-10 py-4 transition-all duration-300 backdrop-blur-sm"
              >
                Watch Film
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex items-center gap-8"
            >
              {[
                { value: '473ml', label: 'Net Weight' },
                { value: '5', label: 'Colorways' },
                { value: '2x', label: 'Caffeine Boost' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col bg-black/80 border border-white/10 px-4 py-3 rounded-lg backdrop-blur-sm">
                  <span className="text-white text-xl font-black">{stat.value}</span>
                  <span className="text-white/35 text-xs tracking-[0.2em] uppercase">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — Can showcase */}
          <div className="relative flex items-center justify-center order-1 md:order-2 min-h-[400px] md:min-h-[600px]">

            {/* Rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[380px] h-[380px] md:w-[500px] md:h-[500px] rounded-full border border-white/5"
              style={{ borderStyle: 'dashed' }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[300px] h-[300px] md:w-[420px] md:h-[420px] rounded-full border border-orange-500/10"
            />

            {/* Glow behind can */}
            <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full blur-3xl"
              style={{ background: 'radial-gradient(circle, rgba(99,179,237,0.45) 0%, rgba(249,115,22,0.35) 40%, rgba(200,168,130,0.15) 70%, transparent 90%)' }}
            />

            {/* Main can */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: 80 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10"
            >
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <img
                  src={cactusJackCan}
                  alt="SURGE Air Jordan Energy Drink"
                  className="w-56 md:w-[280px] lg:w-[320px] object-contain drop-shadow-[0_40px_80px_rgba(200,168,130,0.4)] opacity-95"
                />
              </motion.div>
            </motion.div>

            {/* Floating shoe chips */}
            {[
              { img: shoe3, top: '8%', right: '5%', delay: 1.3, rot: 15 },
              { img: shoe1, bottom: '15%', left: '2%', delay: 1.5, rot: -10 },
              { img: shoe5, top: '55%', right: '0%', delay: 1.7, rot: 8 },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: s.delay }}
                style={{ position: 'absolute', top: s.top, right: s.right, bottom: s.bottom, left: s.left }}
              >
                <motion.div
                  animate={{ y: [-5, 5, -5], rotate: [s.rot - 3, s.rot + 3, s.rot - 3] }}
                  transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-20 md:w-24 h-14 md:h-16 rounded-xl overflow-hidden border border-white/10 shadow-2xl backdrop-blur-sm"
                  style={{ background: 'rgba(0,0,0,0.6)', transform: `rotate(${s.rot}deg)` }}
                >
                  <img src={s.img} alt="Jordan shoe" className="w-full h-full object-cover opacity-90" />
                </motion.div>
              </motion.div>
            ))}

            {/* Star rating floating badge */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1.6 }}
              className="absolute top-8 left-4 md:left-0 bg-black/70 border border-white/10 backdrop-blur-md px-3 py-2 rounded-xl"
            >
              <div className="flex items-center gap-1 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-orange-500 text-orange-500" />
                ))}
              </div>
              <p className="text-white text-xs font-black">4.9 / 5.0</p>
              <p className="text-white/40 text-[10px]">12.4k Reviews</p>
            </motion.div>

            {/* Flavor badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1.8 }}
              className="absolute bottom-16 right-0 md:-right-4 bg-orange-500 px-4 py-2 rounded-xl shadow-xl"
            >
              <p className="text-white text-[10px] tracking-widest uppercase font-medium">Flavor</p>
              <p className="text-white text-xs font-black">Desert Energy</p>
            </motion.div>
          </div>
        </div>

        {/* ── Ticker strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="relative z-10 border-t border-white/5 overflow-hidden"
        >
          {/* Orange top-line accent */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />

          <div className="flex overflow-hidden py-4 select-none">
            {/* Two identical tracks for seamless loop */}
            {[0, 1].map((track) => (
              <motion.div
                key={track}
                animate={{ x: ['0%', '-100%'] }}
                transition={{ duration: 20.7, repeat: Infinity, ease: 'linear' }}
                className="flex items-center gap-0 shrink-0"
              >
                {[
                  { text: 'SURGE AIR ENERGY', accent: false },
                  { text: '✦', accent: true },
                  { text: '200MG CAFFEINE', accent: false },
                  { text: '✦', accent: true },
                  { text: 'ZERO SUGAR · ZERO CRASH', accent: false },
                  { text: '✦', accent: true },
                  { text: 'ICY BERRY FLAVOR', accent: false },
                  { text: '✦', accent: true },
                  { text: 'AIR JORDAN SERIES', accent: false },
                  { text: '✦', accent: true },
                  { text: 'JUST DO IT', accent: false },
                  { text: '✦', accent: true },
                  { text: '473ML · 16 FL OZ', accent: false },
                  { text: '✦', accent: true },
                  { text: 'ENGINEERED FOR ATHLETES', accent: false },
                  { text: '✦', accent: true },
                ].map((item, i) => (
                  <span
                    key={i}
                    className="text-[11px] tracking-[0.3em] uppercase whitespace-nowrap px-4"
                    style={{ color: item.accent ? '#F97316' : 'rgba(255,255,255,0.18)' }}
                  >
                    {item.text}
                  </span>
                ))}
              </motion.div>
            ))}
          </div>

          {/* Orange bottom-line accent */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}