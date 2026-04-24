import { motion } from 'framer-motion'

const groups = [
  {
    label: 'Languages',
    skills: ['Python', 'Java', 'JavaScript', 'Kotlin', 'SQL', 'C++'],
  },
  {
    label: 'Web & APIs',
    skills: ['React', 'Node.js', 'Express', 'REST APIs', 'HTML / CSS'],
  },
  {
    label: 'Databases',
    skills: ['MySQL', 'Supabase', 'PostgreSQL', 'ERD Design'],
  },
  {
    label: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'MySQL Workbench', 'Linux'],
  },
  {
    label: 'Cloud & IT',
    skills: ['AWS Basics', 'Networking', 'Security', 'System Administration'],
  },
]

const chipVariants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.28 } },
}

const rowVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-zinc-50/80 dark:bg-zinc-900/20">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-xs font-mono tracking-[0.12em] text-indigo-500 dark:text-indigo-400 uppercase mb-4"
        >
          Skills
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-3xl sm:text-[38px] font-bold text-zinc-900 dark:text-zinc-50 mb-14"
          style={{ letterSpacing: '-0.025em' }}
        >
          Technologies I work with.
        </motion.h2>

        <div className="divide-y divide-zinc-200 dark:divide-zinc-800/80">
          {groups.map(({ label, skills }, gi) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: gi * 0.06 }}
              className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-10 py-6 first:pt-0 last:pb-0"
            >
              <span className="shrink-0 w-32 text-xs font-semibold text-zinc-400 dark:text-zinc-600 uppercase tracking-[0.1em] pt-2">
                {label}
              </span>

              <motion.div
                variants={rowVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={chipVariants}
                    className="px-3 py-1.5 rounded-lg text-[13px] font-medium border cursor-default select-none
                      border-zinc-200 dark:border-zinc-800
                      bg-white dark:bg-zinc-900
                      text-zinc-600 dark:text-zinc-300
                      hover:bg-indigo-50 dark:hover:bg-indigo-950/40
                      hover:border-indigo-200/80 dark:hover:border-indigo-700/60
                      hover:text-indigo-700 dark:hover:text-indigo-300
                      transition-all duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
