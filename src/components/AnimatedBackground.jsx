import { motion } from 'framer-motion'

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Orb 1 — indigo, top-left */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[700px] h-[700px] rounded-full
          blur-[160px]
          bg-indigo-400/55 dark:bg-indigo-600/22"
        animate={{ x: [0, 100, -50, 0], y: [0, 80, 120, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Orb 2 — violet/purple, bottom-right */}
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] rounded-full
          blur-[160px]
          bg-violet-400/50 dark:bg-purple-700/20"
        animate={{ x: [0, -100, 40, 0], y: [0, -60, -120, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Orb 3 — sky in light, fuchsia in dark, center */}
      <motion.div
        className="absolute top-[35%] left-[40%] w-[500px] h-[500px] rounded-full
          blur-[140px]
          bg-sky-400/35 dark:bg-fuchsia-700/12"
        animate={{ x: [0, 80, -80, 0], y: [0, 50, -50, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Edge fade — softens orbs at viewport boundaries (light mode) */}
      <div
        className="absolute inset-0 pointer-events-none dark:opacity-0 transition-opacity duration-500"
        style={{
          background:
            'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, rgba(250,250,250,0.98) 95%)',
        }}
      />

      {/* Edge fade — dark mode */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 dark:opacity-100 transition-opacity duration-500"
        style={{
          background:
            'radial-gradient(ellipse 90% 80% at 50% 50%, transparent 40%, rgba(9,9,11,0.75) 100%)',
        }}
      />

      {/* Subtle noise overlay to break up the blur banding */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'2\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
        }}
      />
    </div>
  )
}
