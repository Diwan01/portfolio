import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'

const NAV_LINKS = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

export default function Navbar() {
  const { dark, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/60 shadow-sm shadow-zinc-900/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
        >
          DB
        </button>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors duration-200"
            >
              {link}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-2 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-all duration-200"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={dark ? 'sun' : 'moon'}
                initial={{ opacity: 0, rotate: -30, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 30, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="block"
              >
                {dark ? <FiSun size={16} /> : <FiMoon size={16} />}
              </motion.span>
            </AnimatePresence>
          </button>

          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-lg text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-all duration-200"
          >
            {menuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-t border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md"
          >
            <div className="px-6 py-5 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  className="text-left px-3 py-2.5 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-zinc-50 dark:hover:bg-zinc-900 rounded-lg transition-all duration-150"
                >
                  {link}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
