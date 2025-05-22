import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import MobileMenu from './components/MobileMenu'
import AnimatedBackground from './components/AnimatedBackground'
import SuperheroEffects from './components/SuperheroEffects'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

const heroes = [
  {
    id: 1,
    name: 'Iron Man',
    color: '#E62429',
    description: 'Genius, billionaire, playboy, philanthropist',
    action: 'Repulsor Blast',
    icon: '🤖'
  },
  {
    id: 2,
    name: 'Thor',
    color: '#4B9CD3',
    description: 'God of Thunder',
    action: 'Lightning Strike',
    icon: '⚡'
  },
  {
    id: 3,
    name: 'Hulk',
    color: '#5EAA15',
    description: 'Strongest Avenger',
    action: 'Smash',
    icon: '💪'
  },
  {
    id: 4,
    name: 'Wanda',
    color: '#C41E3A',
    description: 'Scarlet Witch',
    action: 'Reality Warp',
    icon: '✨'
  },
  {
    id: 5,
    name: 'Thanos',
    color: '#6B3FA0',
    description: 'The Mad Titan',
    action: 'Snap',
    icon: '💎'
  },
  {
    id: 6,
    name: 'Spider-Man',
    color: '#E62429',
    description: 'Friendly Neighborhood Spider-Man',
    action: 'Web Swing',
    icon: '🕷️'
  }
]

// Page Transition Component
const PageTransition = ({ children }) => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

// Navbar Component
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeHero, setActiveHero] = useState(null)

  const menuItems = [
    { name: 'Home', path: '/', hero: 'ironman' },
    { name: 'About', path: '/about', hero: 'thor' },
    { name: 'Projects', path: '/projects', hero: 'hulk' },
    { name: 'Skills', path: '/skills', hero: 'wanda' },
    { name: 'Contact', path: '/contact', hero: 'spiderman' }
  ]

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md z-[100]"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="text-2xl font-bold text-marvel-red"
            >
              <Link to="/">Marvel Dev</Link>
            </motion.div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {menuItems.map((item) => (
                <motion.div
                  key={item.name}
                  onHoverStart={() => setActiveHero(item.hero)}
                  onHoverEnd={() => setActiveHero(null)}
                  whileHover={{ scale: 1.1, color: '#E62429' }}
                  className="text-white cursor-pointer relative"
                >
                  <Link to={item.path}>{item.name}</Link>
                  {activeHero === item.hero && (
                    <SuperheroEffects hero={{ name: item.hero }} />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden text-white p-2 bg-gray-800 rounded-lg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        setIsOpen={setIsMobileMenuOpen} 
        menuItems={menuItems} 
      />
    </>
  )
}

const Home = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center relative overflow-hidden home-page"
    >
      <AnimatedBackground />
      
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center z-10 relative"
      >
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-6xl font-bold mb-4 text-marvel-red avengers-assemble"
        >
          Welcome to My Universe
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl mb-8"
        >
          Full Stack Developer & Avengers Enthusiast
        </motion.p>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center space-x-4"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-8 py-3 bg-marvel-red rounded-full text-white font-bold marvel-button"
            onClick={() => navigate('/projects')}
          >
            Assemble Projects
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-8 py-3 border-2 border-marvel-gold rounded-full text-white font-bold"
            onClick={() => navigate('/contact')}
          >
            Contact Shield
          </motion.button>
        </motion.div>
      </motion.div>

      <div className="absolute top-1/4 left-1/4">
        <SuperheroEffects hero={{ name: 'ironman' }} />
      </div>
      <div className="absolute bottom-1/4 right-1/4">
        <SuperheroEffects hero={{ name: 'spiderman' }} />
      </div>
      <div className="absolute top-1/4 right-1/4">
        <SuperheroEffects hero={{ name: 'thor' }} />
      </div>
      <div className="absolute bottom-1/4 left-1/4">
        <SuperheroEffects hero={{ name: 'hulk' }} />
      </div>
    </motion.div>
  )
}

const About = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="min-h-screen pt-20 px-6 about-page"
  >
    <div className="container mx-auto">
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="text-4xl font-bold mb-8 text-marvel-blue avengers-assemble"
      >
        About The Developer
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-800 p-6 rounded-lg marvel-card"
        >
          <h3 className="text-2xl font-bold mb-4 text-marvel-gold">My Journey</h3>
          <p className="text-gray-300">
            Like Tony Stark crafting his first suit, I've been building and innovating in the digital realm.
            My passion for technology and creativity drives me to create exceptional web experiences.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-800 p-6 rounded-lg marvel-card"
        >
          <h3 className="text-2xl font-bold mb-4 text-marvel-gold">My Mission</h3>
          <p className="text-gray-300">
            Just as the Avengers protect Earth, I'm dedicated to crafting digital solutions that make a difference.
            Every project is an opportunity to push boundaries and create something extraordinary.
          </p>
        </motion.div>
      </div>
    </div>
  </motion.div>
)

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white relative">
        <AnimatedBackground />
        <Navbar />
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </PageTransition>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative z-10 py-8 text-center text-gray-400"
        >
          <p>© 2024 Marvel Dev Portfolio. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            {['GitHub', 'LinkedIn', 'Twitter'].map((social) => (
              <motion.a
                key={social}
                href="#"
                whileHover={{ scale: 1.1, color: '#F0B323' }}
                className="text-sm"
              >
                {social}
              </motion.a>
            ))}
          </div>
        </motion.footer>
      </div>
    </Router>
  )
}

export default App
