import { motion } from 'framer-motion'
import { FiMapPin, FiBookOpen, FiTerminal } from 'react-icons/fi'

const highlights = [
  { Icon: FiMapPin, label: 'Boston, MA' },
  { Icon: FiBookOpen, label: 'Northeastern University — IT (2026)' },
  { Icon: FiTerminal, label: 'Bunker Hill Community College — CS (2024)' },
]

const interests = ['Backend', 'Cloud', 'Databases', 'AI / ML', 'Analytics', 'Networking']

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-xs font-mono tracking-[0.12em] text-indigo-500 dark:text-indigo-400 uppercase mb-4"
        >
          About
        </motion.p>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Body copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="md:col-span-3"
          >
            <h2
              className="text-3xl sm:text-[38px] font-bold text-zinc-900 dark:text-zinc-50 leading-[1.15] mb-7"
              style={{ letterSpacing: '-0.025em' }}
            >
              Building technology that solves real problems.
            </h2>
            <div className="space-y-4 text-zinc-500 dark:text-zinc-400 leading-[1.75] text-[15px]">
              <p>
                I'm an Information Technology student at Northeastern University (graduating 2026),
                with a Computer Science foundation from Bunker Hill Community College.
              </p>
              <p>
                My focus is backend systems, cloud infrastructure, databases, and applied AI — areas
                where thoughtful engineering creates measurable impact. I care about writing code
                that's functional, maintainable, and built to scale.
              </p>
              <p>
                I approach every project with a problem-first mindset: understand the constraints,
                design the right architecture, then ship it cleanly.
              </p>
            </div>
          </motion.div>

          {/* Right panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.18, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="md:col-span-2 space-y-2"
          >
            {highlights.map(({ Icon, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.07, ease: [0.21, 0.47, 0.32, 0.98] }}
                whileHover={{ scale: 1.02, y: -1, transition: { duration: 0.15, ease: 'easeOut' } }}
                className="flex items-center gap-3 px-4 py-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors duration-200 cursor-default"
              >
                <Icon
                  size={14}
                  className="text-indigo-500 dark:text-indigo-400 shrink-0"
                />
                <span className="text-sm text-zinc-600 dark:text-zinc-300 leading-snug">
                  {label}
                </span>
              </motion.div>
            ))}

            <div className="px-4 py-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50">
              <p className="text-[10px] font-mono tracking-[0.12em] text-zinc-400 dark:text-zinc-600 uppercase mb-3">
                Interests
              </p>
              <div className="flex flex-wrap gap-1.5">
                {interests.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 font-medium border border-zinc-200 dark:border-zinc-700/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
