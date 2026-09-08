import { motion } from 'motion/react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t border-gray-900 py-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, white 10px, white 20px)',
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Nike Logo */}
              <svg
                className="h-12 fill-white mb-6"
                viewBox="0 0 1000 1000"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M245.8 511.1c-4.5-2.3-8.7-4.5-12.6-6.5-36.2-18.5-59.9-30.6-79.3-40.5-40.5-20.7-65.3-33.4-98.6-50.4-5-2.5-7.7-5.4-7.7-11.7 0-20.7 31.5-52.2 81.9-81.9 50.4-29.7 99.1-44.1 118-44.1 9.9 0 18 3.6 23.4 10.8 5.9 7.7 9 17.1 9 27.5 0 36.9-42.3 99.5-102.9 194.9-1.4 2.3-1.4 4.5-.5 6.8 1.4 2.3 3.6 3.6 6.3 4.1 16.2 2.3 31.5 1.8 45.9-1.8 14.4-3.6 28.8-9 43.2-16.7 30.6-16.2 61.7-38.3 93.7-66.2 105.7-91.9 216.2-230.8 332.4-417.3 3.2-5 7.7-7.7 13.5-8.1 5.9 0 10.8 1.8 14.9 5.9 3.6 3.6 5.9 8.1 6.8 13.5.5 5.4-.5 10.8-3.2 15.8-77.9 146.8-149.5 267.7-214.4 362.8-64.9 95.1-122.5 163.5-172.9 204.9-50.4 41.9-91.9 62.6-123.9 62.6-13.5 0-25.2-3.6-35.1-10.8-9.9-7.7-17.6-18-22.5-31.1-5-13.5-7.2-28.4-6.8-44.6.5-16.7 3.2-33.8 8.6-51.3 10.8-35.1 29.7-72 56.7-110.8 27-38.3 58.5-76.1 94.6-113 36.2-36.9 73.4-69.4 111.7-97.3 13.5-9.9 27.5-18.9 41.9-27 14.9-8.1 29.3-14.9 43.7-20.7 14.4-5.9 28.4-10.3 41.9-13.5 13.5-3.2 25.7-4.5 36.5-4.5 18.5 0 31.5 5.4 39.6 16.2 8.1 10.8 12.1 23.9 12.1 39.2 0 24.3-8.1 53.1-24.3 86.4-16.2 33.3-39.2 68.5-68.9 105.3-29.7 36.9-63.1 72.9-100 108-36.9 35.1-74.3 66.2-112.1 93.2-38.3 27-75.2 48.1-110.3 63.1-35.1 14.9-66.7 22.5-94.6 22.5-2.3 0-4.5 0-6.8 0z" />
              </svg>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                SURGE by Nike. Engineered for athletes, designed for champions.
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                {[
                  { icon: Facebook, href: '#' },
                  { icon: Twitter, href: '#' },
                  { icon: Instagram, href: '#' },
                  { icon: Youtube, href: '#' },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-gray-900 border border-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5 text-white" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Products Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-black uppercase mb-6">Products</h4>
            <ul className="space-y-3">
              {['SURGE Energy', 'Shoes', 'Clothing', 'Equipment', 'Accessories'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-black uppercase mb-6">Company</h4>
            <ul className="space-y-3">
              {['About Nike', 'News', 'Careers', 'Investors', 'Sustainability'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-black uppercase mb-6">Support</h4>
            <ul className="space-y-3">
              {['Contact Us', 'FAQs', 'Shipping', 'Returns', 'Payment Options'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-gray-900"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-xs text-gray-500">
              <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Terms of Use</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Cookie Settings</a>
            </div>
            
            <p className="text-xs text-gray-500">
              © {currentYear} Nike, Inc. All rights reserved.
            </p>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-center"
        >
          <p className="text-xs text-gray-600 max-w-3xl mx-auto">
            This is a design concept created for Design Paradox - VIT Mumbai CSI Chapter. 
            Nike SURGE is a fictional product created for educational and competition purposes only.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
