import { motion } from 'framer-motion';
import SuperheroEffects from './SuperheroEffects';

const ProjectCard = ({ project }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.2,
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const techVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="relative bg-gray-800 rounded-xl overflow-hidden shadow-lg"
    >
      {/* Project Image */}
      <motion.div
        variants={imageVariants}
        className="relative h-48 overflow-hidden"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
      </motion.div>

      {/* Project Content */}
      <div className="p-6">
        <motion.h3
          whileHover={{ color: '#E62429' }}
          className="text-2xl font-bold mb-2"
        >
          {project.title}
        </motion.h3>
        <p className="text-gray-300 mb-4">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <motion.span
              key={tech}
              variants={techVariants}
              className="px-3 py-1 bg-gray-700 rounded-full text-sm"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-marvel-red rounded-lg text-white font-semibold marvel-button"
          >
            View Demo
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 border border-marvel-red rounded-lg text-marvel-red font-semibold"
          >
            Source Code
          </motion.button>
        </div>
      </div>

      {/* Hero Effects */}
      <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none">
        <SuperheroEffects hero={{ name: project.hero }} />
      </div>

      {/* Hover Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-r from-marvel-red/10 to-transparent pointer-events-none"
      />
    </motion.div>
  );
};

export default ProjectCard; 