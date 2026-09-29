import React, { useState, useEffect, useRef } from 'react';
import nikeLogo from 'figma:asset/1a08f1d83d4bde65dd66d89e0667926113de7c54.png';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Menu, X, MapPin, Sparkles, HelpCircle } from 'lucide-react';
import cactusJackCan from 'figma:asset/2ee2089ed5bd6fd544adbd42644fe1cf32f19bd6.png';
import mainCan from 'figma:asset/d11ddb98b482519b6d4aa19c9cad9c07b0aafe8e.png';
import shoe1 from 'figma:asset/e8e1cee5cb9cb229e666438b20c9ffd7f99fe47a.png';
import shoe2 from 'figma:asset/838f6b54cd553b50ce730a69bfcd1666b0a518df.png';
import shoe3 from 'figma:asset/6a3f4c00cb7b9437093ba395d32309935df1b275.png';
import shoe4 from 'figma:asset/de68f0797e6bde2f09103cb7d1a7bd2daa92ddb6.png';
import shoe5 from 'figma:asset/d1af5de3b8b05e5d1169137a1b43f03d2d91eba9.png';
import { FLAVORS } from '../data/flavors';

interface HeroProps {
  onOpenPreOrder: (flavorIndex?: number) => void;
  onOpenStoreLocator: () => void;
  onOpenFaq: () => void;
}

export function Hero({ onOpenPreOrder, onOpenStoreLocator, onOpenFaq }: HeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHeroShoe, setActiveHeroShoe] = useState(4); // Default to Cactus Jack (index 4)

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const heroShoeItems = [
    { img: shoe3, name: 'University Blue', flavorIdx: 0, color: '#63B3ED' },
    { img: shoe2, name: 'Chicago 1985', flavorIdx: 1, color: '#E53E3E' },
    { img: shoe4, name: 'Dior Air', flavorIdx: 2, color: '#A0AEC0' },
    { img: shoe5, name: 'Travis Scott', flavorIdx: 3, color: '#C8A882' },
    { img: shoe1, name: 'Pollen Air', flavorIdx: 4, color: '#ECC94B' },
  ];

  const currentHeroFlavor = FLAVORS[activeHeroShoe] || FLAVORS[3];

  return (
    <section
      ref={sectionRef}
      id="hero"
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

      {/* ── Glowing dynamic orbs ── */}
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
        style={{ background: `radial-gradient(circle, ${currentHeroFlavor.accent} 0%, transparent 70%)` }}
      />

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between">

        {/* ── Top Navigation Bar ── */}
        <header className="px-6 md:px-12 pt-6">
          <nav
            aria-label="Main Navigation"
            className="flex items-center justify-between py-3 px-5 md:px-7 rounded-2xl bg-zinc-950/80 border border-white/10 backdrop-blur-xl shadow-2xl"
          >
            {/* Nike swoosh logo + Brand text */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('hero');
              }}
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-lg p-1"
              aria-label="Nike SURGE Home"
            >
              <img
                src={nikeLogo}
                alt="Nike Swoosh"
                className="h-7 md:h-8 w-auto object-contain transition-transform group-hover:scale-105"
                style={{ filter: 'invert(1)' }}
              />
              <div className="flex flex-col">
                <span className="text-white text-xs md:text-sm font-black tracking-[0.25em] uppercase leading-none">
                  SURGE
                </span>
                <span className="text-orange-500 text-[9px] tracking-[0.3em] uppercase font-bold">
                  Energy Concept
                </span>
              </div>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-7 text-xs tracking-[0.2em] font-semibold text-white/60 uppercase">
              <button
                type="button"
                onClick={() => scrollTo('product')}
                className="hover:text-white transition-colors duration-200 cursor-pointer focus:outline-none focus:text-orange-400"
              >
                Product
              </button>
              <button
                type="button"
                onClick={() => scrollTo('flavors')}
                className="hover:text-white transition-colors duration-200 cursor-pointer focus:outline-none focus:text-orange-400"
              >
                Flavors
              </button>
              <button
                type="button"
                onClick={() => scrollTo('experience')}
                className="hover:text-white transition-colors duration-200 cursor-pointer focus:outline-none focus:text-orange-400"
              >
                Experience
              </button>
              <button
                type="button"
                onClick={() => scrollTo('story')}
                className="hover:text-white transition-colors duration-200 cursor-pointer focus:outline-none focus:text-orange-400"
              >
                Story
              </button>
              <button
                type="button"
                onClick={() => scrollTo('drop')}
                className="hover:text-white transition-colors duration-200 cursor-pointer focus:outline-none focus:text-orange-400"
              >
                Drop
              </button>
              <button
                type="button"
                onClick={onOpenStoreLocator}
                className="flex items-center gap-1.5 hover:text-orange-400 transition-colors duration-200 cursor-pointer focus:outline-none"
              >
                <MapPin className="w-3.5 h-3.5 text-orange-500" />
                <span>Stores</span>
              </button>
              <button
                type="button"
                onClick={onOpenFaq}
                className="flex items-center gap-1 hover:text-orange-400 transition-colors duration-200 cursor-pointer focus:outline-none"
                aria-label="Open Frequently Asked Questions"
              >
                <HelpCircle className="w-3.5 h-3.5 text-white/50 hover:text-orange-400" />
                <span>FAQ</span>
              </button>
            </div>

            {/* Right Action buttons */}
            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => onOpenPreOrder(activeHeroShoe)}
                className="hidden sm:inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-xs font-black tracking-[0.2em] uppercase px-5 py-2.5 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.35)] cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Get Yours</span>
              </motion.button>

              {/* Mobile hamburger button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </header>

        {/* ── Mobile Navigation Drawer ── */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden fixed inset-x-4 top-24 z-50 p-6 rounded-2xl bg-zinc-950/95 border border-white/15 backdrop-blur-2xl shadow-2xl space-y-4"
              role="dialog"
              aria-label="Mobile Navigation Menu"
            >
              <div className="flex flex-col space-y-3 divide-y divide-white/10 text-xs font-bold uppercase tracking-[0.2em]">
                <button
                  type="button"
                  onClick={() => scrollTo('product')}
                  className="py-3 text-left text-white/80 hover:text-white flex items-center justify-between"
                >
                  <span>Product Overview</span>
                  <span className="text-orange-500">01</span>
                </button>
                <button
                  type="button"
                  onClick={() => scrollTo('flavors')}
                  className="py-3 text-left text-white/80 hover:text-white flex items-center justify-between"
                >
                  <span>Flavor Collection</span>
                  <span className="text-orange-500">02</span>
                </button>
                <button
                  type="button"
                  onClick={() => scrollTo('experience')}
                  className="py-3 text-left text-white/80 hover:text-white flex items-center justify-between"
                >
                  <span>Experience The Power</span>
                  <span className="text-orange-500">03</span>
                </button>
                <button
                  type="button"
                  onClick={() => scrollTo('story')}
                  className="py-3 text-left text-white/80 hover:text-white flex items-center justify-between"
                >
                  <span>Concept Story</span>
                  <span className="text-orange-500">04</span>
                </button>
                <button
                  type="button"
                  onClick={() => scrollTo('drop')}
                  className="py-3 text-left text-white/80 hover:text-white flex items-center justify-between"
                >
                  <span>Limited Drop Countdown</span>
                  <span className="text-orange-500">05</span>
                </button>
              </div>

              <div className="pt-2 grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenStoreLocator();
                  }}
                  className="py-3 px-4 bg-white/10 hover:bg-white/15 text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <MapPin className="w-4 h-4 text-orange-400" />
                  <span>Stores</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenFaq();
                  }}
                  className="py-3 px-4 bg-white/10 hover:bg-white/15 text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <HelpCircle className="w-4 h-4 text-orange-400" />
                  <span>FAQ</span>
                </button>
              </div>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPreOrder(activeHeroShoe);
                }}
                className="w-full py-3.5 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-xs font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(249,115,22,0.4)]"
              >
                <Sparkles className="w-4 h-4" />
                <span>Pre-Order Nike SURGE</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Hero body ── */}
        <div className="flex-1 grid md:grid-cols-2 items-center px-6 md:px-16 py-6 md:py-10 gap-8">

          {/* LEFT — Typography */}
          <motion.div className="flex flex-col justify-center order-2 md:order-1">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 mb-4 self-start"
            >
              <div className="w-6 md:w-8 h-px bg-orange-500" />
              <span className="text-orange-500 text-[10px] md:text-xs tracking-[0.35em] uppercase font-bold">
                Nike × Air Jordan Inspiration
              </span>
              <div className="w-6 md:w-8 h-px bg-orange-500" />
            </motion.div>

            {/* Hero headline */}
            <div className="overflow-hidden mb-1">
              <motion.h1
                initial={{ y: 120, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(4.5rem,12vw,10.5rem)] font-black uppercase leading-none tracking-tighter text-white select-none"
                style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}
              >
                SURGE
              </motion.h1>
            </div>

            <div className="overflow-hidden mb-6">
              <motion.div
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-baseline gap-3"
              >
                <span
                  className="text-[clamp(2.2rem,5.5vw,4.5rem)] font-black uppercase leading-none tracking-tight"
                  style={{ color: currentHeroFlavor.accent }}
                >
                  AIR
                </span>
                <span className="text-[clamp(2.2rem,5.5vw,4.5rem)] font-black uppercase leading-none tracking-tight text-white">
                  ENERGY
                </span>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="text-white/60 max-w-lg mb-8 leading-relaxed text-xs md:text-sm"
            >
              A high-voltage energy drink design concept engineered for athletic endurance and inspired by legendary sneaker colorways.
              Featuring <strong className="text-white">{currentHeroFlavor.name}</strong> ({currentHeroFlavor.label}) — 200mg natural caffeine with zero crash formula.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => scrollTo('product')}
                className="bg-orange-500 hover:bg-orange-600 text-white text-xs md:text-sm tracking-[0.2em] uppercase font-black px-8 md:px-10 py-3.5 md:py-4 rounded-xl transition-all duration-300 shadow-[0_0_35px_rgba(249,115,22,0.4)] cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                Shop Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => scrollTo('experience')}
                className="border border-white/20 hover:border-white/60 text-white text-xs md:text-sm tracking-[0.2em] uppercase font-black px-8 md:px-10 py-3.5 md:py-4 rounded-xl transition-all duration-300 backdrop-blur-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
              >
                Watch Film
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => onOpenPreOrder(activeHeroShoe)}
                className="bg-white/10 hover:bg-white/20 border border-orange-500/40 text-orange-400 text-xs md:text-sm tracking-[0.2em] uppercase font-black px-6 py-3.5 md:py-4 rounded-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                Get Yours
              </motion.button>
            </motion.div>

            {/* Sneaker switch selector pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mb-8"
            >
              <span className="text-[10px] text-white/40 uppercase tracking-widest block mb-2 font-bold">
                Switch Sneaker Inspiration:
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {heroShoeItems.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveHeroShoe(idx)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs transition-all cursor-pointer ${
                      activeHeroShoe === idx
                        ? 'bg-white/15 border-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.3)] text-white'
                        : 'bg-black/40 border-white/10 text-white/50 hover:text-white hover:border-white/30'
                    }`}
                  >
                    <img src={item.img} alt={item.name} className="w-5 h-5 rounded-full object-cover" />
                    <span className="text-[11px] font-semibold">{item.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex items-center gap-3 sm:gap-6 flex-wrap"
            >
              {[
                { value: '473ml', label: 'Net Volume' },
                { value: '5 Colorways', label: 'Concept Drops' },
                { value: '200mg', label: 'Natural Caffeine' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col bg-black/80 border border-white/10 px-3.5 py-2.5 rounded-xl backdrop-blur-sm">
                  <span className="text-white text-base md:text-lg font-black">{stat.value}</span>
                  <span className="text-white/35 text-[9px] md:text-[10px] tracking-[0.15em] uppercase">{stat.label}</span>
                </div>
              ))}
              <div className="text-[10px] text-white/40 font-mono tracking-wider">
                *Demo Specifications
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — Can showcase */}
          <div className="relative flex items-center justify-center order-1 md:order-2 min-h-[360px] md:min-h-[580px]">

            {/* Rotating rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[320px] h-[320px] md:w-[480px] md:h-[480px] rounded-full border border-white/5"
              style={{ borderStyle: 'dashed' }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[260px] h-[260px] md:w-[390px] md:h-[390px] rounded-full border border-orange-500/10"
            />

            {/* Glow behind can */}
            <div
              className="absolute w-64 h-64 md:w-96 md:h-96 rounded-full blur-3xl transition-all duration-700"
              style={{ background: `radial-gradient(circle, ${currentHeroFlavor.accent}55 0%, rgba(249,115,22,0.3) 40%, transparent 80%)` }}
            />

            {/* Main can with floating animation */}
            <motion.div
              key={currentHeroFlavor.id}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10"
            >
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <img
                  src={currentHeroFlavor.canImg}
                  alt={`SURGE ${currentHeroFlavor.name} Energy Drink Can`}
                  className="w-48 sm:w-56 md:w-[270px] lg:w-[310px] object-contain drop-shadow-[0_30px_70px_rgba(0,0,0,0.9)] opacity-95"
                />
              </motion.div>
            </motion.div>

            {/* Floating shoe thumbnail tags */}
            {[
              { img: shoe3, top: '8%', right: '5%', delay: 1.3, rot: 15, name: 'Univ. Blue' },
              { img: shoe1, bottom: '15%', left: '2%', delay: 1.5, rot: -10, name: 'Pollen' },
              { img: shoe5, top: '60%', right: '0%', delay: 1.7, rot: 8, name: 'Travis' },
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
                  className="w-16 md:w-20 h-12 md:h-14 rounded-xl overflow-hidden border border-white/15 shadow-2xl backdrop-blur-sm cursor-pointer hover:border-orange-500 transition-colors"
                  style={{ background: 'rgba(0,0,0,0.7)', transform: `rotate(${s.rot}deg)` }}
                >
                  <img src={s.img} alt={s.name} className="w-full h-full object-cover opacity-90" />
                </motion.div>
              </motion.div>
            ))}

            {/* Star rating floating badge (Audited as Concept Metric) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1.6 }}
              className="absolute top-4 left-2 md:left-0 bg-black/80 border border-white/10 backdrop-blur-md px-3.5 py-2.5 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-1 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-orange-500 text-orange-500" />
                ))}
              </div>
              <p className="text-white text-xs font-black">4.9 / 5.0</p>
              <p className="text-white/40 text-[9px] uppercase tracking-wider font-semibold">12.4k Demo Reviews</p>
            </motion.div>

            {/* Flavor badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1.8 }}
              className="absolute bottom-12 right-2 md:-right-2 px-4 py-2.5 rounded-xl shadow-xl border border-white/20 backdrop-blur-md"
              style={{ backgroundColor: `${currentHeroFlavor.accent}30` }}
            >
              <p className="text-white/60 text-[9px] tracking-widest uppercase font-bold">Active Flavor</p>
              <p className="text-white text-xs font-black">{currentHeroFlavor.name}</p>
            </motion.div>
          </div>
        </div>

        {/* ── Ticker strip ── */}
        <div className="relative z-10 border-t border-white/5 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />

          <div className="flex overflow-hidden py-3 select-none">
            {[0, 1].map((track) => (
              <motion.div
                key={track}
                animate={{ x: ['0%', '-100%'] }}
                transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                className="flex items-center gap-0 shrink-0"
              >
                {[
                  { text: 'NIKE SURGE AIR ENERGY', accent: false },
                  { text: '✦', accent: true },
                  { text: '200MG NATURAL CAFFEINE', accent: false },
                  { text: '✦', accent: true },
                  { text: 'ZERO SUGAR · ZERO CRASH', accent: false },
                  { text: '✦', accent: true },
                  { text: 'JORDAN 1 HERITAGE EDITIONS', accent: false },
                  { text: '✦', accent: true },
                  { text: 'DEMO CONCEPT PROJECT', accent: true },
                  { text: '✦', accent: true },
                  { text: '473ML · 16 FL OZ', accent: false },
                  { text: '✦', accent: true },
                  { text: 'ENGINEERED FOR ATHLETES', accent: false },
                  { text: '✦', accent: true },
                ].map((item, i) => (
                  <span
                    key={i}
                    className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase whitespace-nowrap px-4"
                    style={{ color: item.accent ? '#F97316' : 'rgba(255,255,255,0.3)' }}
                  >
                    {item.text}
                  </span>
                ))}
              </motion.div>
            ))}
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
