import { motion } from 'framer-motion';

const Skills = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="min-h-screen pt-20 px-6 skills-page"
  >
    <div className="container mx-auto">
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-4xl font-bold mb-8 text-marvel-purple"
      >
        My Powers
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {['Frontend', 'Backend', 'DevOps'].map((skill) => (
          <motion.div
            key={skill}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg marvel-card"
          >
            <h3 className="text-2xl font-bold mb-4 text-marvel-gold">{skill}</h3>
            <div className="space-y-2">
              {['React', 'Node.js', 'Docker'].map((tech) => (
                <div key={tech} className="flex items-center">
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '80%' }}
                      transition={{ duration: 1 }}
                      className="bg-marvel-red h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <span className="ml-2 text-sm">{tech}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default Skills; 