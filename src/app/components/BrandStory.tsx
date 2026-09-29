import { motion } from 'motion/react';

export function BrandStory() {
  return (
    <section id="story" className="relative py-32 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1739430547883-dc519d7f7e56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB3b3Jrb3V0JTIwaW50ZW5zZXxlbnwxfHx8fDE3NzM2NDkxNzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Athlete Training"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 relative z-10"
      >
        {/* Main Story */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-black mb-8 uppercase leading-tight">
              From The Track
              <br />
              To The{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-cyan-500">
                Can
              </span>
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-cyan-500 to-orange-500 transform -translate-x-1/2"></div>

            {/* Story Points */}
            <div className="space-y-20">
              {/* Point 1 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative md:grid md:grid-cols-2 gap-8 items-center"
              >
                <div className="md:text-right mb-6 md:mb-0">
                  <h3 className="text-3xl md:text-4xl font-black mb-4 uppercase">The Innovation</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    For decades, Nike has pushed the boundaries of athletic performance. From revolutionary footwear to cutting-edge apparel, we've always asked: "What's next?" The answer: SURGE. An energy drink that embodies everything Nike stands for.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-transparent blur-2xl"></div>
                  <div className="relative bg-gradient-to-br from-gray-900 to-black border border-orange-500/30 rounded-lg p-8">
                    <div className="text-6xl font-black text-orange-500 mb-2">1972</div>
                    <div className="text-gray-400">The Journey Begins</div>
                  </div>
                </div>
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 top-1/2 w-6 h-6 bg-orange-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 border-4 border-black"></div>
              </motion.div>

              {/* Point 2 */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative md:grid md:grid-cols-2 gap-8 items-center"
              >
                <div className="order-2 md:order-1 relative">
                  <div className="absolute -inset-4 bg-gradient-to-l from-cyan-500/20 to-transparent blur-2xl"></div>
                  <div className="relative bg-gradient-to-br from-gray-900 to-black border border-cyan-500/30 rounded-lg p-8">
                    <div className="text-6xl font-black text-cyan-500 mb-2">5+</div>
                    <div className="text-gray-400">Years of Research</div>
                  </div>
                </div>
                <div className="order-1 md:order-2 mb-6 md:mb-0">
                  <h3 className="text-3xl md:text-4xl font-black mb-4 uppercase">The Science</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Working with world-class athletes and sports scientists, we developed a formula that delivers sustained energy, enhanced focus, and rapid recovery. Every ingredient is performance-tested and athlete-approved.
                  </p>
                </div>
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 top-1/2 w-6 h-6 bg-cyan-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 border-4 border-black"></div>
              </motion.div>

              {/* Point 3 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative md:grid md:grid-cols-2 gap-8 items-center"
              >
                <div className="md:text-right mb-6 md:mb-0">
                  <h3 className="text-3xl md:text-4xl font-black mb-4 uppercase">The Legacy</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    SURGE isn't just an energy drink. It's the next evolution of athletic performance. Built on Nike's legacy of innovation, powered by science, and designed for those who refuse to settle for second place.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-transparent blur-2xl"></div>
                  <div className="relative bg-gradient-to-br from-gray-900 to-black border border-orange-500/30 rounded-lg p-8">
                    <div className="text-6xl font-black text-orange-500 mb-2">2026</div>
                    <div className="text-gray-400">The Future is Now</div>
                  </div>
                </div>
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 top-1/2 w-6 h-6 bg-orange-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 border-4 border-black"></div>
              </motion.div>
            </div>
          </div>

          {/* Quote Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-32 text-center"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-cyan-500/20 blur-3xl"></div>
              <blockquote className="relative text-3xl md:text-5xl font-black italic mb-8 leading-tight">
                "If you have a body,
                <br />
                <span className="text-orange-500">you're an athlete."</span>
              </blockquote>
            </div>
            <p className="text-xl text-gray-400">— Bill Bowerman, Nike Co-Founder</p>
          </motion.div>

          {/* Brand Values */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20 grid md:grid-cols-3 gap-8"
          >
            {[
              { title: 'Innovation', description: 'Constantly pushing boundaries' },
              { title: 'Performance', description: 'Engineered for excellence' },
              { title: 'Inspiration', description: 'Empowering every athlete' },
            ].map((value, index) => (
              <div key={index} className="text-center p-8 border border-gray-800 rounded-lg hover:border-orange-500/50 transition-colors duration-300">
                <h4 className="text-2xl font-black mb-3 uppercase">{value.title}</h4>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}