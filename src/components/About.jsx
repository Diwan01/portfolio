import { motion } from 'framer-motion'
import { FiMapPin, FiBookOpen, FiTerminal } from 'react-icons/fi'

const highlights = [
  { Icon: FiMapPin, label: 'Boston, MA' },
  { Icon: FiBookOpen, label: 'Northeastern University — IT (2026)' },
  { Icon: FiTerminal, label: 'Bunker Hill Community College — CS (2024)' },
]

const interests = ['Backend', 'Cloud', 'Databases', 'AI / ML', 'Analytics', 'Networking']

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: [0.25, 0.4, 0.25, 1] },
  }),
}

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="text-xs font-mono tracking-widest text-indigo-500 dark:text-indigo-400 uppercase mb-4"
        >
          About
        </motion.p>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Text — takes 3 cols */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.1}
            className="md:col-span-3"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-snug mb-6">
              Building technology that{' '}
              <span className="text-indigo-600 dark:text-indigo-400">actually solves</span> problems.
            </h2>
            <div className="space-y-4 text-zinc-500 dark:text-zinc-400 leading-relaxed text-[15px]">
              <p>
                I'm an Information Technology student at Northeastern University (graduating 2026), with
                a Computer Science foundation from Bunker Hill Community College.
              </p>
              <p>
                My focus is on backend systems, cloud infrastructure, databases, and applied AI — areas
                where thoughtful engineering creates real, measurable impact. I care about writing code
                that's functional, maintainable, and built to scale.
              </p>
              <p>
                I approach every project with a problem-first mindset: understand the user, design the
                right architecture, then ship it cleanly.
              </p>
            </div>
          </motion.div>

          {/* Cards — takes 2 cols */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.2}
            className="md:col-span-2 space-y-3"
          >
            {highlights.map(({ Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 px-4 py-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50"
              >
                <Icon size={15} className="text-indigo-500 dark:text-indigo-400 shrink-0" />
                <span className="text-sm text-zinc-600 dark:text-zinc-300">{label}</span>
              </div>
            ))}

            <div className="px-4 py-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50">
              <p className="text-[10px] font-mono tracking-widest text-zinc-400 dark:text-zinc-600 uppercase mb-3">
                Interests
              </p>
              <div className="flex flex-wrap gap-1.5">
                {interests.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 font-medium"
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
