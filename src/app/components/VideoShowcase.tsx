import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, Sparkles, Volume2, VolumeX, Layers, Zap, ShieldCheck } from 'lucide-react';
import surgeAllCans from 'figma:asset/110ed51db6df165dbeef85e2e068e1a33b3090e4.png';

interface VideoShowcaseProps {
  onOpenPreOrder: () => void;
}

const CHAPTERS = [
  {
    id: 'chapter-1',
    number: '01',
    title: 'The Genesis',
    subtitle: 'From Sneaker Culture to Functional Hydration',
    description:
      'Born in the design studio at the intersection of streetwear subculture and elite athlete hydration. SURGE is conceptualized for competitors who wear their passion on their feet and in their veins.',
    accent: '#F97316',
  },
  {
    id: 'chapter-2',
    number: '02',
    title: 'Colorway DNA',
    subtitle: 'Iconic Silhouettes Reimagined as Energy Flavors',
    description:
      'Translating Chicago Red, University Blue, Dior Grey, Travis Scott Earth Tones, and Pollen Yellow into distinct sensory flavor palettes without artificial compromise.',
    accent: '#63B3ED',
  },
  {
    id: 'chapter-3',
    number: '03',
    title: 'The Clean Formula',
    subtitle: '200mg Natural Caffeine with Zero Crash Curve',
    description:
      'Powered by green coffee extract, branched-chain amino acids, and triple-phase electrolytes. Formulated to elevate reflex speed without glycemic spiking.',
    accent: '#ECC94B',
  },
];

export function VideoShowcase({ onOpenPreOrder }: VideoShowcaseProps) {
  const [activeChapter, setActiveChapter] = useState(0);
  const [isSurgeActive, setIsSurgeActive] = useState(true);
  const currentChapter = CHAPTERS[activeChapter];

  return (
    <section
      id="experience"
      className="relative py-28 md:py-36 bg-black overflow-hidden scroll-mt-12"
    >
      {/* Background Accent Grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 2px, white 2px, white 4px)',
            backgroundSize: '100% 24px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-3 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-widest"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Concept Experience</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-7xl font-black mb-5 uppercase tracking-tight text-white"
          >
            Experience The{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-400 to-cyan-400">
              Power
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm md:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed"
          >
            Explore the creative direction, sound design atmosphere, and colorway philosophy behind the Nike SURGE project.
          </motion.p>
        </div>

        {/* Main Cinematic Showcase Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border border-white/15 rounded-3xl overflow-hidden bg-zinc-950 shadow-2xl relative"
        >
          {/* Top Interactive Controls Bar */}
          <div className="px-6 py-4 bg-zinc-900/80 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-white/70">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono uppercase font-bold tracking-wider">
                Interactive Showcase Player • 60 FPS Canvas
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsSurgeActive(!isSurgeActive)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer ${
                  isSurgeActive
                    ? 'bg-orange-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.4)]'
                    : 'bg-white/10 text-white/60 hover:text-white'
                }`}
              >
                {isSurgeActive ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isSurgeActive ? 'Pulse Active' : 'Resume Pulse'}</span>
              </button>
            </div>
          </div>

          {/* Visual Showcase Stage */}
          <div className="relative min-h-[380px] md:min-h-[520px] bg-black flex items-center justify-center overflow-hidden">
            {/* Ambient Energy Glow */}
            <motion.div
              animate={{
                scale: isSurgeActive ? [1, 1.15, 1] : 1,
                opacity: isSurgeActive ? [0.25, 0.45, 0.25] : 0.15,
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse at 50% 50%, ${currentChapter.accent}45 0%, rgba(249,115,22,0.2) 40%, transparent 75%)`,
              }}
            />

            {/* Audio Wave Visualizer Simulation */}
            <div className="absolute inset-x-8 bottom-6 flex items-end justify-center gap-1.5 h-16 pointer-events-none opacity-40">
              {[...Array(32)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    height: isSurgeActive
                      ? [`${15 + ((i * 7) % 55)}%`, `${30 + ((i * 13) % 70)}%`, `${15 + ((i * 7) % 55)}%`]
                      : '8%',
                  }}
                  transition={{
                    duration: 0.8 + ((i % 5) * 0.2),
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="w-1.5 rounded-full"
                  style={{ backgroundColor: i % 2 === 0 ? currentChapter.accent : '#F97316' }}
                />
              ))}
            </div>

            {/* All Cans Showcase Graphic */}
            <div className="relative z-10 p-6 md:p-12 w-full max-w-5xl">
              <img
                src={surgeAllCans}
                alt="SURGE Energy Lineup — All 5 Sneaker Colorway Editions"
                className="w-full h-auto max-h-[440px] object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)]"
              />
            </div>

            {/* Chapter Overlay Badge */}
            <div className="absolute top-6 left-6 z-20 bg-black/80 border border-white/15 backdrop-blur-md px-4 py-2.5 rounded-xl">
              <span className="text-[10px] text-orange-400 uppercase font-mono font-bold tracking-widest block">
                Chapter {currentChapter.number}
              </span>
              <span className="text-white text-xs font-black uppercase tracking-wider">
                {currentChapter.title}
              </span>
            </div>
          </div>

          {/* Interactive Chapter Selector & Narrative Deck */}
          <div className="bg-zinc-950 p-6 md:p-10 border-t border-white/10">
            {/* Chapter Tab Buttons */}
            <div className="grid sm:grid-cols-3 gap-3 mb-6">
              {CHAPTERS.map((ch, idx) => (
                <button
                  key={ch.id}
                  type="button"
                  onClick={() => setActiveChapter(idx)}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    activeChapter === idx
                      ? 'bg-white/10 border-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.25)]'
                      : 'bg-black/40 border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-bold text-orange-400">
                      // {ch.number}
                    </span>
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: ch.accent }}
                    />
                  </div>
                  <h4 className="text-white text-sm font-bold uppercase">{ch.title}</h4>
                  <p className="text-white/40 text-[11px] truncate mt-0.5">{ch.subtitle}</p>
                </button>
              ))}
            </div>

            {/* Narrative text card */}
            <div className="bg-black/60 border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-1.5 max-w-2xl">
                <span
                  className="text-xs font-bold uppercase tracking-wider"
                  style={{ color: currentChapter.accent }}
                >
                  {currentChapter.subtitle}
                </span>
                <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                  {currentChapter.description}
                </p>
              </div>

              <button
                type="button"
                onClick={onOpenPreOrder}
                className="shrink-0 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-xs font-black uppercase tracking-[0.15em] transition-all shadow-[0_0_20px_rgba(249,115,22,0.35)] cursor-pointer"
              >
                Reserve Collection
              </button>
            </div>
          </div>

          {/* Bottom Orange Brand Bar */}
          <div
            className="px-8 py-5 flex items-center justify-between gap-6 bg-[#FF6600]"
          >
            <div className="flex items-center gap-4">
              <svg
                viewBox="0 0 200 72"
                className="w-20 md:w-28 flex-shrink-0"
                fill="black"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M190.5 0.5C183.7 2.3 152.4 13.6 112 28.4C71.6 43.2 40.2 53.6 24.5 57.5C16.6 59.5 9.4 60.3 5.5 59.1C1.1 57.7 0 53.9 2.8 49.2C5.3 45 11.2 40.6 19.5 37C28 33.3 33.5 32 33.5 32C33.5 32 15.5 39.2 15.5 50.5C15.5 54.5 18.3 57 22.5 57C29.5 57 42 51.8 68.5 41.5C95 31.2 200 0.5 200 0.5H190.5Z" />
              </svg>
              <h3
                className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black leading-none italic"
              >
                Just Do It.
              </h3>
            </div>
            <p className="text-black/85 text-xs md:text-sm font-bold text-right hidden sm:block">
              Concept Design Prototype • VIT Mumbai CSI Hackathon
            </p>
          </div>
        </motion.div>

        {/* Audited Statistics Bar (Section 12 Compliance) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
        >
          {[
            {
              number: '1M+',
              label: 'Target Community',
              footnote: 'Projected Concept Reach',
            },
            {
              number: '50+',
              label: 'Design Iterations',
              footnote: 'Figma 3D Model Studies',
            },
            {
              number: '200mg',
              label: 'Natural Caffeine',
              footnote: 'Concept Specification',
            },
            {
              number: '0g',
              label: 'Added Sugars',
              footnote: 'Clean Metabolic Formula',
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-5 bg-zinc-950/80 border border-white/10 rounded-2xl text-center flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl md:text-4xl font-black text-orange-500 mb-1">
                  {stat.number}
                </div>
                <div className="text-xs font-bold text-white uppercase tracking-wider mb-2">
                  {stat.label}
                </div>
              </div>
              <span className="text-[10px] text-white/35 font-mono uppercase tracking-widest border-t border-white/5 pt-2">
                *{stat.footnote}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
