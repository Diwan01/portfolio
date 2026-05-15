import { motion } from 'framer-motion'

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Orb 1 — indigo, top-left */}
      <motion.div
        className="absolute top-[-20%] left-[-15%] w-[700px] h-[700px] rounded-full
          blur-[120px]
          bg-indigo-300/40 dark:bg-indigo-600/25"
        animate={{ x: [0, 100, -50, 0], y: [0, 80, 120, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Orb 2 — violet/purple, bottom-right */}
      <motion.div
        className="absolute bottom-[-25%] right-[-15%] w-[800px] h-[800px] rounded-full
          blur-[120px]
          bg-violet-300/30 dark:bg-purple-700/22"
        animate={{ x: [0, -100, 40, 0], y: [0, -60, -120, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Orb 3 — sky in light, fuchsia in dark, center-right */}
      <motion.div
        className="absolute top-[35%] left-[45%] w-[500px] h-[500px] rounded-full
          blur-[100px]
          bg-sky-300/25 dark:bg-fuchsia-700/15"
        animate={{ x: [0, 80, -80, 0], y: [0, 50, -50, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Subtle noise overlay to break up the blur banding */}
      <div
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'2\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
        }}
      />
    </div>
  )
}
