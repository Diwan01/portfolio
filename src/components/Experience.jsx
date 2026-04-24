import { motion } from 'framer-motion'
import { FiCalendar, FiMapPin } from 'react-icons/fi'

const education = [
  {
    institution: 'Northeastern University',
    degree: 'B.S. Information Technology',
    period: '2024 to 2026',
    location: 'Boston, MA',
    tag: 'Expected May 2026',
    tagColor: 'indigo',
    highlights: [
      'Focus: cloud infrastructure, databases, IT systems, and security',
      'Coursework: Networking, Data Management, IT Architecture, Information Security',
    ],
  },
  {
    institution: 'Bunker Hill Community College',
    degree: 'A.S. Computer Science',
    period: '2022 to 2024',
    location: 'Boston, MA',
    tag: 'Graduated 2024',
    tagColor: 'emerald',
    highlights: [
      'Foundation in algorithms, data structures, OOP, and software engineering principles',
    ],
  },
]

const tagStyle = {
  indigo:
    'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/70 dark:border-indigo-800/50',
  emerald:
    'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/70 dark:border-emerald-800/50',
}

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 bg-zinc-50/80 dark:bg-zinc-900/20">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-xs font-mono tracking-[0.12em] text-indigo-500 dark:text-indigo-400 uppercase mb-4"
        >
          Background
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-3xl sm:text-[38px] font-bold text-zinc-900 dark:text-zinc-50 mb-12"
          style={{ letterSpacing: '-0.025em' }}
        >
          Education &amp; Experience.
        </motion.h2>

        {/* Co-op callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.06 }}
          className="mb-10 p-5 rounded-2xl border border-indigo-200/70 dark:border-indigo-800/40 bg-indigo-50/70 dark:bg-indigo-950/20 flex items-start gap-3.5"
        >
          <span className="relative flex h-2 w-2 mt-1 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
          </span>
          <div>
            <p className="text-sm font-semibold text-indigo-700 dark:text-indigo-300 mb-1">
              Actively seeking co-op &amp; internship opportunities
            </p>
            <p className="text-[13px] text-indigo-600/70 dark:text-indigo-400/60 leading-relaxed">
              Available for software engineering, backend, cloud/IT, and data engineering roles.
              Northeastern's co-op program enables full-time, multi-month placements.
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative space-y-4 pl-6">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-zinc-200 dark:bg-zinc-800" />

          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[25px] top-6 w-2.5 h-2.5 rounded-full bg-indigo-500 border-2 border-white dark:border-zinc-950 ring-2 ring-indigo-200 dark:ring-indigo-900/70" />

              <motion.div
                whileHover={{ scale: 1.015, y: -3, transition: { duration: 0.18, ease: [0.25, 0.4, 0.25, 1] } }}
                className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors duration-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <h3
                      className="text-[15px] font-semibold text-zinc-900 dark:text-zinc-50 mb-0.5"
                      style={{ letterSpacing: '-0.01em' }}
                    >
                      {edu.institution}
                    </h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{edu.degree}</p>
                  </div>
                  <div className="flex sm:flex-col items-start sm:items-end gap-2 shrink-0">
                    <span className="flex items-center gap-1.5 text-xs text-zinc-400 dark:text-zinc-600">
                      <FiCalendar size={10} />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-zinc-400 dark:text-zinc-600">
                      <FiMapPin size={10} />
                      {edu.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {edu.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-[13px] text-zinc-400 dark:text-zinc-500 leading-relaxed">
                      <span className="mt-[7px] w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium ${tagStyle[edu.tagColor]}`}>
                  {edu.tag}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
