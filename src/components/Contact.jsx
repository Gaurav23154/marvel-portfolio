import { motion } from 'framer-motion';

const Contact = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="min-h-screen pt-20 px-6 contact-page"
  >
    <div className="container mx-auto max-w-2xl">
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-4xl font-bold mb-8 text-marvel-red"
      >
        Contact Me
      </motion.h2>
      <motion.form
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="space-y-6"
      >
        <div>
          <label className="block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-marvel-red"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-marvel-red"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Message</label>
          <textarea
            className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-marvel-red"
            rows="4"
          ></textarea>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full px-6 py-3 bg-marvel-red rounded-lg text-white font-bold marvel-button"
        >
          Send Message
        </motion.button>
      </motion.form>
    </div>
  </motion.div>
);

export default Contact; 