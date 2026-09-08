import { motion } from 'motion/react';
import surgeAllCans from 'figma:asset/110ed51db6df165dbeef85e2e068e1a33b3090e4.png';

export function VideoShowcase() {
  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, white 2px, white 4px)',
          backgroundSize: '100% 20px'
        }}></div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6"
      >
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black mb-6 uppercase"
          >
            Experience The{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-cyan-500">
              Power
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Watch how SURGE fuels athletes to break barriers and achieve the impossible
          </motion.p>
        </div>

        {/* Main Visual Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Large Image Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 relative group cursor-pointer overflow-hidden"
          >
            <div className="relative h-96 md:h-[600px] bg-black rounded-lg overflow-hidden">
              <img
                src={surgeAllCans}
                alt="SURGE Energy — All Variants"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Text below image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-b-lg px-8 py-7 flex items-center justify-between gap-6 bg-[#ffffff]"
              style={{ backgroundColor: '#FF6600' }}
            >
              {/* Nike Swoosh + Just Do It */}
              <div className="flex items-center gap-5">
                {/* Official Nike Swoosh SVG */}
                <svg
                  viewBox="0 0 200 72"
                  className="w-24 md:w-36 flex-shrink-0"
                  fill="black"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M190.5 0.5C183.7 2.3 152.4 13.6 112 28.4C71.6 43.2 40.2 53.6 24.5 57.5C16.6 59.5 9.4 60.3 5.5 59.1C1.1 57.7 0 53.9 2.8 49.2C5.3 45 11.2 40.6 19.5 37C28 33.3 33.5 32 33.5 32C33.5 32 15.5 39.2 15.5 50.5C15.5 54.5 18.3 57 22.5 57C29.5 57 42 51.8 68.5 41.5C95 31.2 200 0.5 200 0.5H190.5Z" />
                </svg>

                <h3
                  className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black leading-none"
                  style={{ fontStyle: 'italic' }}
                >
                  Just Do It.
                </h3>
              </div>

              {/* Right side tagline */}
              <p className="text-black/80 text-base md:text-lg max-w-xs text-right hidden md:block">
                Fuel every rep, every mile,<br />every breakthrough — <strong>SURGE.</strong>
              </p>
            </motion.div>
          </motion.div>

          {/* Video Grid */}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { number: '1M+', label: 'Athletes Powered' },
            { number: '50+', label: 'World Records' },
            { number: '100%', label: 'Performance Boost' },
            { number: '24/7', label: 'Energy Support' },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg">
              <div className="text-4xl md:text-5xl font-black text-orange-500 mb-2">{stat.number}</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}