import { motion } from 'framer-motion'

const groups = [
  {
    label: 'Languages',
    color: 'indigo',
    skills: ['Python', 'Java', 'JavaScript', 'Kotlin', 'SQL', 'C++'],
  },
  {
    label: 'Web & APIs',
    color: 'violet',
    skills: ['React', 'Node.js', 'Express', 'REST APIs', 'HTML/CSS'],
  },
  {
    label: 'Databases',
    color: 'blue',
    skills: ['MySQL', 'Supabase', 'PostgreSQL', 'ERD Design'],
  },
  {
    label: 'Tools',
    color: 'emerald',
    skills: ['Git', 'GitHub', 'VS Code', 'MySQL Workbench', 'Linux'],
  },
  {
    label: 'Cloud & IT',
    color: 'amber',
    skills: ['AWS Basics', 'Networking', 'Security', 'System Administration'],
  },
]

const colorMap = {
  indigo:
    'border-indigo-200/80 dark:border-indigo-800/40 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 hover:border-indigo-300 dark:hover:border-indigo-700/60',
  violet:
    'border-violet-200/80 dark:border-violet-800/40 bg-violet-50 dark:bg-violet-950/40 text-violet-700 dark:text-violet-300 hover:bg-violet-100 dark:hover:bg-violet-900/50 hover:border-violet-300 dark:hover:border-violet-700/60',
  blue: 'border-blue-200/80 dark:border-blue-800/40 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:border-blue-300 dark:hover:border-blue-700/60',
  emerald:
    'border-emerald-200/80 dark:border-emerald-800/40 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 hover:border-emerald-300 dark:hover:border-emerald-700/60',
  amber:
    'border-amber-200/80 dark:border-amber-800/40 bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-900/50 hover:border-amber-300 dark:hover:border-amber-700/60',
}

const chipVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
}

const rowVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 px-6 bg-zinc-50 dark:bg-zinc-900/20"
    >
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-mono tracking-widest text-indigo-500 dark:text-indigo-400 uppercase mb-4"
        >
          Skills
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-14"
        >
          Technologies I work with.
        </motion.h2>

        <div className="space-y-9">
          {groups.map(({ label, color, skills }, gi) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: gi * 0.07 }}
              className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-8"
            >
              <span className="shrink-0 w-28 text-xs font-semibold text-zinc-400 dark:text-zinc-600 uppercase tracking-widest pt-1.5">
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
                    className={`px-3 py-1.5 rounded-lg text-[13px] font-medium border cursor-default select-none transition-all duration-200 ${colorMap[color]}`}
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
