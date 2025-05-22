import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Iron Man's Tech Suite",
      description: "A full-stack application showcasing advanced AI and robotics integration, inspired by Tony Stark's technology.",
      technologies: ["React", "Node.js", "TensorFlow", "WebSocket"],
      hero: "ironman",
      image: "/projects/ironman-tech.jpg",
    },
    {
      id: 2,
      title: "Thor's Weather App",
      description: "Real-time weather tracking application with lightning-fast updates and storm prediction capabilities.",
      technologies: ["Vue.js", "Python", "OpenWeather API", "D3.js"],
      hero: "thor",
      image: "/projects/thor-weather.jpg",
    },
    {
      id: 3,
      title: "Hulk's Fitness Tracker",
      description: "A powerful fitness tracking application that helps users transform their workout routines.",
      technologies: ["React Native", "Firebase", "GraphQL", "Redux"],
      hero: "hulk",
      image: "/projects/hulk-fitness.jpg",
    },
    {
      id: 4,
      title: "Scarlet Witch's UI Library",
      description: "A magical UI component library with stunning animations and effects for modern web applications.",
      technologies: ["TypeScript", "Framer Motion", "Tailwind CSS", "Storybook"],
      hero: "wanda",
      image: "/projects/wanda-ui.jpg",
    },
    {
      id: 5,
      title: "Spider-Man's Web App",
      description: "A responsive web application that helps users navigate and connect different services seamlessly.",
      technologies: ["Next.js", "MongoDB", "Socket.io", "AWS"],
      hero: "spiderman",
      image: "/projects/spiderman-web.jpg",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen py-20 px-6 relative"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-5"
          style={{
            background: 'radial-gradient(circle, #E62429 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl font-bold text-center mb-12 text-marvel-red"
        >
          My Projects
        </motion.h1>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-8 py-3 bg-marvel-red rounded-full text-white font-bold marvel-button"
          >
            View More Projects
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects; 