import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShoppingCart, Bell, Sparkles, CheckCircle2, ShieldAlert, Loader2 } from 'lucide-react';

interface CallToActionProps {
  onOpenPreOrder: () => void;
  onOpenStoreLocator: () => void;
}

export function CallToAction({ onOpenPreOrder, onOpenStoreLocator }: CallToActionProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubscribe = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (subscribed || isSubmitting) return;

    const trimmed = email.trim();
    if (!trimmed) {
      setErrorMessage('Please enter your email address.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed)) {
      setErrorMessage('Please enter a valid email address (e.g. athlete@example.com).');
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    // Simulate safe client-side processing without sending data to external APIs
    setTimeout(() => {
      setIsSubmitting(false);
      setSubscribed(true);
    }, 1100);
  };

  return (
    <section
      id="drop"
      className="relative py-28 md:py-36 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden scroll-mt-12"
    >
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-transparent blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-500/10 to-transparent blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Limited Batch Simulation</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black mb-6 uppercase leading-tight tracking-tight text-white">
            Ready To
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-400 to-cyan-400">
              Surge Ahead?
            </span>
          </h2>

          <p className="text-sm md:text-xl text-white/50 mb-10 max-w-2xl mx-auto leading-relaxed">
            Experience the future of sneaker-inspired energy. Reserve your demo collector pack or locate sample retail stock points.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <motion.button
              type="button"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenPreOrder}
              className="group px-10 py-4.5 bg-orange-500 hover:bg-orange-600 text-white text-xs md:text-sm font-black uppercase tracking-[0.2em] rounded-xl transition-all duration-300 shadow-[0_0_35px_rgba(249,115,22,0.45)] flex items-center gap-3 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <span>Pre-Order Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>

            <motion.button
              type="button"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenStoreLocator}
              className="px-10 py-4.5 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/50 text-white text-xs md:text-sm font-bold uppercase tracking-[0.2em] rounded-xl transition-all duration-300 flex items-center gap-3 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
            >
              <ShoppingCart className="w-4 h-4 text-orange-400" />
              <span>Find Stores (Demo)</span>
            </motion.button>
          </div>

          <p className="text-xs text-white/40 uppercase tracking-widest font-mono">
            Limited Edition Launch Drop • Concept Release 2026
          </p>
        </motion.div>

        {/* Email Signup Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-zinc-950 border border-white/15 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400">
                <Bell className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-black uppercase text-white tracking-tight">
                  Get On The Drop List
                </h3>
                <span className="text-[10px] text-orange-400 font-bold uppercase tracking-wider font-mono">
                  Priority Concept Access
                </span>
              </div>
            </div>

            <p className="text-white/60 text-xs md:text-sm mb-6 leading-relaxed">
              Subscribe to test the frontend drop alert simulation. Receive instant mock reservation confirmations for future colorway drops.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-3" noValidate>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    disabled={isSubmitting || subscribed}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      if (errorMessage) setErrorMessage('');
                    }}
                    aria-label="Email address for drop notifications"
                    className={`w-full px-5 py-3.5 bg-black border text-white placeholder-white/30 text-xs rounded-xl focus:outline-none transition-colors ${
                      errorMessage
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-white/20 focus:border-orange-500'
                    } ${subscribed ? 'opacity-50 cursor-not-allowed' : ''}`}
                  />
                  {errorMessage && (
                    <p className="text-red-400 text-[11px] mt-1.5 font-medium">{errorMessage}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || subscribed}
                  className={`px-8 py-3.5 text-xs font-black uppercase tracking-[0.15em] rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shrink-0 cursor-pointer ${
                    subscribed
                      ? 'bg-emerald-600 text-white cursor-default'
                      : 'bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white shadow-[0_0_20px_rgba(249,115,22,0.35)]'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Verifying...</span>
                    </>
                  ) : subscribed ? (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Subscribed</span>
                    </>
                  ) : (
                    <span>Subscribe</span>
                  )}
                </button>
              </div>
            </form>

            {/* Status Feedback Message */}
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-2">
                {subscribed ? (
                  <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    You're on the SURGE list.
                  </span>
                ) : (
                  <span className="text-white/40 text-[11px]">
                    Instant client-side confirmation • No external data transmission
                  </span>
                )}
              </div>

              {subscribed && (
                <button
                  type="button"
                  onClick={() => {
                    setSubscribed(false);
                    setEmail('');
                  }}
                  className="text-white/40 hover:text-white text-[11px] underline cursor-pointer"
                >
                  Reset form
                </button>
              )}
            </div>

            <div className="mt-3 flex items-center gap-2 text-[10px] text-white/30">
              <ShieldAlert className="w-3.5 h-3.5 text-orange-400 shrink-0" />
              <span>
                Demo frontend subscription only — no marketing spam or external transmission.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
