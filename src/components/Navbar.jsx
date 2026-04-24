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
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/75 dark:bg-zinc-950/75 backdrop-blur-xl border-b border-zinc-200/60 dark:border-zinc-800/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Monogram badge */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold tracking-tight transition-colors duration-200 shrink-0"
          aria-label="Scroll to top"
        >
          DB
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="relative px-3 py-1.5 text-sm text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white rounded-md hover:bg-zinc-100/80 dark:hover:bg-zinc-800/60 transition-all duration-150"
            >
              {link}
            </button>
          ))}
        </div>

        {/* Right: theme + mobile toggle */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-2 rounded-md text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100/80 dark:hover:bg-zinc-800/60 transition-all duration-150"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={dark ? 'sun' : 'moon'}
                initial={{ opacity: 0, rotate: -20, scale: 0.85 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 20, scale: 0.85 }}
                transition={{ duration: 0.18 }}
                className="block"
              >
                {dark ? <FiSun size={15} /> : <FiMoon size={15} />}
              </motion.span>
            </AnimatePresence>
          </button>

          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-md text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100/80 dark:hover:bg-zinc-800/60 transition-all duration-150"
          >
            {menuOpen ? <FiX size={17} /> : <FiMenu size={17} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
            className="md:hidden overflow-hidden border-t border-zinc-200/60 dark:border-zinc-800/50 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl"
          >
            <div className="px-4 py-3 flex flex-col gap-0.5">
              {NAV_LINKS.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  className="text-left px-3 py-2.5 text-sm text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100/80 dark:hover:bg-zinc-800/60 rounded-lg transition-all duration-150"
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
