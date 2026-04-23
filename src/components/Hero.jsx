import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi'

const ROLES = ['Software Developer', 'IT Professional', 'Backend Engineer', 'Problem Solver']

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setRoleIdx((i) => (i + 1) % ROLES.length), 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(161,161,170,0.35) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* Dark mode grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 dark:opacity-100 transition-opacity duration-300"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(63,63,70,0.6) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* Light mode grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-100 dark:opacity-0 transition-opacity duration-300"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(161,161,170,0.35) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[700px] h-[500px] rounded-full bg-indigo-500/5 dark:bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-10 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm text-xs text-zinc-500 dark:text-zinc-400 shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          Open to co-op &amp; internship opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-5xl sm:text-6xl md:text-[72px] font-bold tracking-tight leading-[1.05] text-zinc-900 dark:text-zinc-50 mb-5"
        >
          Diwan Bhandari
        </motion.h1>

        {/* Animated role */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.38 }}
          className="flex items-center justify-center gap-2 mb-7 h-7"
        >
          <span className="text-base text-zinc-400 dark:text-zinc-500">IT Student</span>
          <span className="w-px h-4 bg-zinc-300 dark:bg-zinc-700" />
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIdx}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28 }}
              className="text-base font-medium text-indigo-600 dark:text-indigo-400"
            >
              {ROLES[roleIdx]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.48 }}
          className="text-base sm:text-lg text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto leading-relaxed mb-10"
        >
          I build scalable, practical, and user-focused technology solutions.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.58 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <motion.button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white text-sm font-medium transition-colors duration-200 shadow-lg shadow-indigo-600/25 dark:shadow-indigo-600/15"
          >
            View Projects
          </motion.button>
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-all duration-200"
          >
            Contact Me
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-300 dark:text-zinc-700 hover:text-zinc-500 dark:hover:text-zinc-500 transition-colors duration-200"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        >
          <FiArrowDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  )
}
