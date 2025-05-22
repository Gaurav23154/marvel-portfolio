import { motion } from 'framer-motion';

const SuperheroEffects = ({ hero }) => {
  const effects = {
    ironman: {
      icon: '🤖',
      color: '#E62429',
      animation: {
        scale: [1, 1.2, 1],
        rotate: [0, 360],
        y: [0, -20, 0],
      },
      duration: 4,
      style: {
        background: 'radial-gradient(circle, rgba(230, 36, 41, 0.2) 0%, transparent 70%)',
      },
    },
    thor: {
      icon: '⚡',
      color: '#518CCA',
      animation: {
        scale: [1, 1.3, 1],
        rotate: [0, 180, 360],
        y: [0, -30, 0],
      },
      duration: 5,
      style: {
        background: 'radial-gradient(circle, rgba(81, 140, 202, 0.2) 0%, transparent 70%)',
      },
    },
    hulk: {
      icon: '💪',
      color: '#4CAF50',
      animation: {
        scale: [1, 1.4, 1],
        rotate: [0, 360],
        y: [0, -40, 0],
      },
      duration: 6,
      style: {
        background: 'radial-gradient(circle, rgba(76, 175, 80, 0.2) 0%, transparent 70%)',
      },
    },
    wanda: {
      icon: '✨',
      color: '#9C27B0',
      animation: {
        scale: [1, 1.2, 1],
        rotate: [360, 0],
        y: [0, -25, 0],
      },
      duration: 4.5,
      style: {
        background: 'radial-gradient(circle, rgba(156, 39, 176, 0.2) 0%, transparent 70%)',
      },
    },
    spiderman: {
      icon: '🕷️',
      color: '#E62429',
      animation: {
        scale: [1, 1.1, 1],
        rotate: [0, 360],
        y: [0, -15, 0],
      },
      duration: 3.5,
      style: {
        background: 'radial-gradient(circle, rgba(230, 36, 41, 0.2) 0%, transparent 70%)',
      },
    },
  };

  const heroEffect = effects[hero.name] || effects.ironman;

  return (
    <div className="absolute pointer-events-none">
      {/* Hero Icon */}
      <motion.div
        className="text-4xl"
        animate={heroEffect.animation}
        transition={{
          duration: heroEffect.duration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {heroEffect.icon}
      </motion.div>

      {/* Energy Effect */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full"
        style={heroEffect.style}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: heroEffect.duration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Energy Lines */}
      <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64" style={{ opacity: 0.3 }}>
        <motion.path
          d="M32,32 Q64,0 96,32 T160,32"
          stroke={heroEffect.color}
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: heroEffect.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.path
          d="M32,96 Q64,128 96,96 T160,96"
          stroke={heroEffect.color}
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: heroEffect.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </svg>

      {/* Particle Effects */}
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-2 h-2 rounded-full"
          style={{ backgroundColor: heroEffect.color }}
          initial={{
            x: 0,
            y: 0,
            opacity: 0,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: heroEffect.duration,
            repeat: Infinity,
            delay: index * 0.2,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
};

export default SuperheroEffects; 