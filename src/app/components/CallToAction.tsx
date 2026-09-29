import { motion } from 'motion/react';
import { ArrowRight, ShoppingCart, Bell } from 'lucide-react';
import { FormEvent, useState } from 'react';

export function CallToAction() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubscribed(true);
  };

  return (
    <section id="drop" className="relative py-32 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
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

      <div className="container mx-auto px-6 relative z-10">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-black mb-8 uppercase leading-tight"
          >
            Ready To
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-cyan-500">
              Surge Ahead?
            </span>
          </motion.h2>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Join thousands of athletes who are already experiencing the future of energy.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-12 py-6 bg-white text-black text-lg font-black uppercase tracking-wider overflow-hidden hover:bg-orange-500 transition-colors duration-300"
            >
              <span className="relative z-10 flex items-center gap-3">
                Pre-Order Now
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://www.nike.com/w/locations', '_blank', 'noopener,noreferrer')}
              className="group px-12 py-6 bg-transparent border-2 border-white text-white text-lg font-black uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300"
            >
              <span className="flex items-center gap-3">
                <ShoppingCart className="w-6 h-6" />
                Find Stores
              </span>
            </motion.button>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm text-gray-500 uppercase tracking-wider"
          >
            Limited Edition Launch • March 17, 2026
          </motion.p>
        </motion.div>

        {/* Email Signup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <Bell className="w-8 h-8 text-orange-500" />
              <h3 className="text-2xl md:text-3xl font-black uppercase">Stay Updated</h3>
            </div>
            
            <p className="text-gray-400 mb-6">
              Be the first to know about exclusive drops, athlete stories, and special offers.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setSubscribed(false);
                }}
                required
                aria-label="Email address"
                className="flex-1 px-6 py-4 bg-black border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-orange-500 text-white font-black uppercase tracking-wider hover:bg-orange-600 transition-colors duration-300"
              >
                {subscribed ? 'Subscribed' : 'Subscribe'}
              </motion.button>
            </form>

            <p role="status" className="text-xs text-gray-500 mt-4">
              {subscribed
                ? `You're on the list. Updates will be sent to ${email}.`
                : 'By subscribing, you agree to receive marketing emails from Nike. Unsubscribe at any time.'}
            </p>
          </div>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          {[
            {
              quote: "SURGE changed my game completely. The energy is instant and lasts through my entire training session.",
              author: "Marcus J.",
              role: "Professional Basketball Player"
            },
            {
              quote: "Finally, an energy drink that doesn't compromise on taste or performance. Nike nailed it.",
              author: "Sarah L.",
              role: "Marathon Runner"
            },
            {
              quote: "The zero-crash formula is a game changer. I feel energized without the jitters or afternoon slump.",
              author: "David K.",
              role: "CrossFit Athlete"
            }
          ].map((testimonial, index) => (
            <div key={index} className="p-6 bg-black border border-gray-800 rounded-lg hover:border-orange-500/50 transition-colors duration-300">
              <div className="mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-orange-500 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-black">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Final Push */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <h3 className="text-4xl md:text-6xl font-black mb-4 uppercase">
            Just Do It.
          </h3>
          <p className="text-xl text-gray-400">Fuel your greatness with SURGE.</p>
        </motion.div>
      </div>
    </section>
  );
}
