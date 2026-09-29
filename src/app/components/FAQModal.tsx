import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, HelpCircle, Mail, FileText, CheckCircle2, ShieldAlert } from 'lucide-react';

interface FAQModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'faq' | 'support' | 'legal';
}

const FAQS = [
  {
    q: 'What is the Nike SURGE concept?',
    a: 'Nike SURGE is a high-fidelity design concept exploring the intersection of sneaker culture, athlete nutrition, and energy drink branding. Each drink flavor is inspired by famous Air Jordan and Nike colorways (e.g. University Blue, Chicago 1985, Dior Air, Travis Scott Cactus Jack, and Pollen).',
  },
  {
    q: 'Is Nike SURGE an official commercial Nike product?',
    a: 'No. Nike SURGE is an educational UI/UX design project created for Design Paradox - VIT Mumbai CSI Chapter. All trademarks, logos, and sneaker names belong to Nike, Inc. and respective collaborators. No physical product is sold.',
  },
  {
    q: 'What are the performance ingredients in the concept formula?',
    a: 'The fictional formula specifies 200mg of natural caffeine extracted from green coffee bean and guarana, 1000mg BCAAs (leucine, isoleucine, valine), 1000mg taurine, essential electrolytes (sodium, potassium, magnesium), B-vitamin complex, and 0g sugar sweetened with natural stevia and erythritol.',
  },
  {
    q: 'How does the Pre-Order / Reserve system work on this website?',
    a: 'The pre-order flow is a fully functional front-end simulation. You can pick flavors, select pack sizes, and test order confirmations with real-time price updates and reservation code generation. No payments or credit cards are accepted or processed.',
  },
  {
    q: 'Can I visit the stores listed in the Store Locator?',
    a: 'The store locator displays real Nike retail locations across major Indian cities (Mumbai, Pune, Delhi, Bengaluru, Hyderabad) to demonstrate how a physical launch campaign would map to retail touchpoints. Stock levels shown are simulated demo indicators.',
  },
];

export function FAQModal({ isOpen, onClose, defaultTab = 'faq' }: FAQModalProps) {
  const [activeTab, setActiveTab] = useState<'faq' | 'support' | 'legal'>(defaultTab);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSent, setContactSent] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setActiveTab(defaultTab);
      setContactSent(false);
    }
  }, [isOpen, defaultTab]);

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

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName.trim() || !contactEmail.trim() || !contactMessage.trim()) return;
    setContactSent(true);
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md"
        role="dialog"
        aria-modal="true"
        aria-labelledby="faq-modal-title"
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
          <div className="bg-gradient-to-r from-orange-500/20 via-zinc-900 to-black px-6 py-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400">
                <HelpCircle className="w-4 h-4" />
              </div>
              <div>
                <h2 id="faq-modal-title" className="text-white text-base font-black uppercase tracking-wider">
                  SURGE Information & Support
                </h2>
                <span className="text-[11px] text-orange-400 font-semibold tracking-widest uppercase">
                  Project Documentation & FAQs
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              type="button"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 text-white/60 hover:text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
              aria-label="Close information modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Tab Navigation */}
          <div className="flex border-b border-white/10 bg-black/50 px-6">
            <button
              type="button"
              onClick={() => setActiveTab('faq')}
              className={`py-3 px-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
                activeTab === 'faq'
                  ? 'border-orange-500 text-orange-400'
                  : 'border-transparent text-white/50 hover:text-white'
              }`}
            >
              Frequently Asked Questions
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('support')}
              className={`py-3 px-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
                activeTab === 'support'
                  ? 'border-orange-500 text-orange-400'
                  : 'border-transparent text-white/50 hover:text-white'
              }`}
            >
              Contact & Feedback
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('legal')}
              className={`py-3 px-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
                activeTab === 'legal'
                  ? 'border-orange-500 text-orange-400'
                  : 'border-transparent text-white/50 hover:text-white'
              }`}
            >
              Concept Disclaimer
            </button>
          </div>

          <div className="p-6 md:p-8 max-h-[70vh] overflow-y-auto">
            {activeTab === 'faq' && (
              <div className="space-y-3">
                {FAQS.map((item, idx) => {
                  const isOpenItem = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-white/10 rounded-xl overflow-hidden bg-black/40 transition-colors"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(isOpenItem ? null : idx)}
                        className="w-full text-left p-4 flex justify-between items-center gap-4 hover:bg-white/5 transition-colors cursor-pointer"
                        aria-expanded={isOpenItem}
                      >
                        <span className="text-white text-xs font-bold uppercase tracking-wide">{item.q}</span>
                        <span className="text-orange-400 font-bold text-sm">{isOpenItem ? '−' : '+'}</span>
                      </button>
                      {isOpenItem && (
                        <div className="px-4 pb-4 pt-1 text-white/65 text-xs leading-relaxed border-t border-white/5">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {activeTab === 'support' && (
              <div className="max-w-lg mx-auto">
                {contactSent ? (
                  <div className="text-center py-8">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white uppercase mb-1">Message Received</h3>
                    <p className="text-white/60 text-xs mb-4">
                      Thank you for your feedback! This demo interaction has been logged in the frontend session.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setContactSent(false);
                        setContactMessage('');
                      }}
                      className="text-orange-400 text-xs underline font-semibold"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="flex items-center gap-2 mb-2 text-white/70 text-xs">
                      <Mail className="w-4 h-4 text-orange-400" />
                      <span>Project Inquiries & Design Feedback</span>
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name *"
                        required
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        className="w-full px-4 py-2.5 bg-black border border-white/15 focus:border-orange-500 text-white text-xs rounded-xl focus:outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Your Email *"
                        required
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        className="w-full px-4 py-2.5 bg-black border border-white/15 focus:border-orange-500 text-white text-xs rounded-xl focus:outline-none"
                      />
                    </div>
                    <div>
                      <textarea
                        rows={4}
                        placeholder="Your feedback, thoughts on the UI/UX, or inquiry..."
                        required
                        value={contactMessage}
                        onChange={(e) => setContactMessage(e.target.value)}
                        className="w-full px-4 py-2.5 bg-black border border-white/15 focus:border-orange-500 text-white text-xs rounded-xl focus:outline-none resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white text-xs font-black uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                    >
                      Submit Feedback (Demo)
                    </button>
                  </form>
                )}
              </div>
            )}

            {activeTab === 'legal' && (
              <div className="space-y-4 text-xs text-white/70 leading-relaxed">
                <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-start gap-3">
                  <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-bold uppercase mb-1">Academic & Design Competition Purpose</h4>
                    <p>
                      This website is a student design prototype developed for <strong>Design Paradox - VIT Mumbai CSI Chapter</strong>.
                      It is an artistic concept project demonstrating UI/UX principles, 3D/Figma asset integration, and interactive web development.
                    </p>
                  </div>
                </div>

                <div className="border border-white/10 rounded-xl p-4 bg-black/40 space-y-2">
                  <h4 className="text-white font-bold uppercase">Intellectual Property & Trademarks</h4>
                  <p>
                    "Nike", the Swoosh design, "Air Jordan", "Jumpman", and related trademarks are registered trademarks of Nike, Inc.
                    This project is not endorsed by, sponsored by, or affiliated with Nike, Inc. or Travis Scott / Cactus Jack.
                  </p>
                </div>

                <div className="border border-white/10 rounded-xl p-4 bg-black/40 space-y-2">
                  <h4 className="text-white font-bold uppercase">No Commercial Transactions</h4>
                  <p>
                    All pre-order interactions, store inventory indicators, nutritional data, and prices are conceptual simulations.
                    No financial data or credit card details are collected or processed.
                  </p>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
