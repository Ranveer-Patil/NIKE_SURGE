import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Palette, Zap, Compass, Quote } from 'lucide-react';

export function BrandStory() {
  return (
    <section id="story" className="relative py-28 md:py-36 bg-black overflow-hidden scroll-mt-12">
      {/* Background with subtle workout texture */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1739430547883-dc519d7f7e56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB3b3Jrb3V0JTIwaW50ZW5zZXxlbnwxfHx8fDE3NzM2NDkxNzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Athlete Training Background"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/85 to-black" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 md:px-12 relative z-10"
      >
        <div className="max-w-5xl mx-auto">
          {/* Main Story Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 mb-3 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-orange-400 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Creative Direction & Concept Narrative</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black mb-6 uppercase leading-tight tracking-tight text-white">
              From The Track
              <br />
              To The{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-400 to-cyan-400">
                Can
              </span>
            </h2>
            <p className="text-sm md:text-base text-white/50 max-w-2xl mx-auto leading-relaxed">
              An exploration of what happens when the relentless spirit of Nike sneaker drops intersects with next-generation functional performance energy.
            </p>
          </motion.div>

          {/* Timeline / Concept Pillars */}
          <div className="relative">
            {/* Center Line for Desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-cyan-500 to-orange-500 transform -translate-x-1/2 opacity-30" />

            <div className="space-y-16 md:space-y-24">
              {/* Pillar 1: The Origin Concept */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative md:grid md:grid-cols-2 gap-8 items-center"
              >
                <div className="md:text-right mb-6 md:mb-0">
                  <span className="text-orange-500 text-xs font-mono font-bold uppercase tracking-widest block mb-1">
                    [ Concept Genesis ]
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black mb-3 uppercase text-white">
                    The Sneaker Culture Spark
                  </h3>
                  <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                    Sneakerheads and elite runners share an obsession: precision, colorway storytelling, and zero-compromise execution. This student design concept reimagined iconic silhouettes—from the 1985 Chicago high-top to the Travis Scott Cactus Jack—into a sensorial beverage experience.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-transparent blur-2xl pointer-events-none" />
                  <div className="relative bg-zinc-950 border border-orange-500/30 rounded-2xl p-7">
                    <div className="text-4xl md:text-5xl font-black text-orange-500 mb-1">DESIGN</div>
                    <div className="text-white font-bold text-sm uppercase">Paradox Project 2026</div>
                    <p className="text-white/40 text-xs mt-2">
                      Fictional brand study bridging sports heritage and modern energy drink aesthetics.
                    </p>
                  </div>
                </div>
                {/* Center dot */}
                <div className="hidden md:block absolute left-1/2 top-1/2 w-4 h-4 bg-orange-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 border-2 border-black" />
              </motion.div>

              {/* Pillar 2: Performance Philosophy */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative md:grid md:grid-cols-2 gap-8 items-center"
              >
                <div className="order-2 md:order-1 relative">
                  <div className="absolute -inset-4 bg-gradient-to-l from-cyan-500/20 to-transparent blur-2xl pointer-events-none" />
                  <div className="relative bg-zinc-950 border border-cyan-500/30 rounded-2xl p-7">
                    <div className="text-4xl md:text-5xl font-black text-cyan-400 mb-1">200MG</div>
                    <div className="text-white font-bold text-sm uppercase">Natural Clean Fuel Spec</div>
                    <p className="text-white/40 text-xs mt-2">
                      BCAAs + Triple Electrolytes + Green Coffee Extract designed for sustained output.
                    </p>
                  </div>
                </div>
                <div className="order-1 md:order-2 mb-6 md:mb-0">
                  <span className="text-cyan-400 text-xs font-mono font-bold uppercase tracking-widest block mb-1">
                    [ Performance Philosophy ]
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black mb-3 uppercase text-white">
                    The Zero-Crash Imperative
                  </h3>
                  <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                    Most conventional energy drinks rely on excessive refined sugar and synthetic spikes. The SURGE formula concept prioritizes osmotic cellular absorption, clean plant caffeine, and sustained cognitive focus without sugar jitters.
                  </p>
                </div>
                {/* Center dot */}
                <div className="hidden md:block absolute left-1/2 top-1/2 w-4 h-4 bg-cyan-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 border-2 border-black" />
              </motion.div>

              {/* Pillar 3: Design Philosophy & Fictional Collaborations */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative md:grid md:grid-cols-2 gap-8 items-center"
              >
                <div className="md:text-right mb-6 md:mb-0">
                  <span className="text-orange-500 text-xs font-mono font-bold uppercase tracking-widest block mb-1">
                    [ Fictional Collaboration Concept ]
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black mb-3 uppercase text-white">
                    Matte Aluminum & Color DNA
                  </h3>
                  <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                    Each can features a stealth black brushed finish paired with the authentic PANTONE values of iconic sneaker releases. Watermark typography and sneaker silhouettes echo the tactile sensation of unboxing a fresh pair on drop day.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-transparent blur-2xl pointer-events-none" />
                  <div className="relative bg-zinc-950 border border-orange-500/30 rounded-2xl p-7">
                    <div className="text-4xl md:text-5xl font-black text-orange-500 mb-1">LIMITED</div>
                    <div className="text-white font-bold text-sm uppercase">Drop Culture Aesthetic</div>
                    <p className="text-white/40 text-xs mt-2">
                      Bridging the excitement of Nike SNKRS raffle mechanisms with collectible product packaging.
                    </p>
                  </div>
                </div>
                {/* Center dot */}
                <div className="hidden md:block absolute left-1/2 top-1/2 w-4 h-4 bg-orange-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 border-2 border-black" />
              </motion.div>
            </div>
          </div>

          {/* Historical Bill Bowerman Quote */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-28 text-center"
          >
            <div className="relative inline-block max-w-3xl">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/15 via-cyan-500/15 to-orange-500/15 blur-3xl pointer-events-none" />
              <Quote className="w-10 h-10 text-orange-500/40 mx-auto mb-4" />
              <blockquote className="relative text-2xl md:text-4xl font-black italic mb-6 leading-tight text-white">
                "If you have a body,
                <br />
                <span className="text-orange-500">you're an athlete."</span>
              </blockquote>
              <p className="text-sm md:text-base text-white/50 font-semibold">
                — Bill Bowerman, Nike Co-Founder
              </p>
              <span className="text-[10px] text-white/30 uppercase tracking-widest mt-2 block font-mono">
                Historical quote inspiration for athlete-first design
              </span>
            </div>
          </motion.div>

          {/* Core Concept Pillars Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid sm:grid-cols-3 gap-4 mt-20"
          >
            <div className="p-6 bg-zinc-950/70 border border-white/10 rounded-2xl text-left">
              <Palette className="w-6 h-6 text-orange-400 mb-3" />
              <h4 className="text-white font-bold text-sm uppercase mb-1">Colorway Authenticity</h4>
              <p className="text-white/50 text-xs leading-relaxed">
                Faithful color translation of Michael Jordan and Travis Scott footwear aesthetics into can design.
              </p>
            </div>

            <div className="p-6 bg-zinc-950/70 border border-white/10 rounded-2xl text-left">
              <Zap className="w-6 h-6 text-cyan-400 mb-3" />
              <h4 className="text-white font-bold text-sm uppercase mb-1">Clean Energy Ethos</h4>
              <p className="text-white/50 text-xs leading-relaxed">
                Formulated conceptually around natural botanicals, BCAAs, zero sugar, and no synthetic dyes.
              </p>
            </div>

            <div className="p-6 bg-zinc-950/70 border border-white/10 rounded-2xl text-left">
              <Compass className="w-6 h-6 text-amber-400 mb-3" />
              <h4 className="text-white font-bold text-sm uppercase mb-1">Student Showcase</h4>
              <p className="text-white/50 text-xs leading-relaxed">
                Created specifically for the Design Paradox hackathon at VIT Mumbai CSI Chapter.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
