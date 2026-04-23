import { motion } from 'framer-motion'
import { FiGithub, FiArrowUpRight } from 'react-icons/fi'

const projects = [
  {
    num: '01',
    title: 'Awn Creel Digital Pattern Platform',
    description:
      'Full-stack e-commerce platform enabling digital asset distribution, flexible license management, and secure payment processing for independent craft pattern creators.',
    tech: ['React', 'Node.js', 'Supabase', 'Stripe', 'REST API'],
    github: 'https://github.com/Diwan01',
    demo: null,
  },
  {
    num: '02',
    title: 'Homify — Nepal Housing Platform',
    description:
      'Real estate platform targeting underserved rural regions in Nepal, with smart location scoring, structured property listings, and a fully normalized relational database.',
    tech: ['MySQL', 'ERD Design', 'Backend API', 'Location Intelligence'],
    github: 'https://github.com/Diwan01',
    demo: null,
  },
  {
    num: '03',
    title: 'Homework Alert App',
    description:
      'Android productivity app built in Kotlin delivering task scheduling, push notifications, and assignment tracking with local data persistence.',
    tech: ['Kotlin', 'Android', 'Room DB', 'WorkManager'],
    github: 'https://github.com/Diwan01',
    demo: null,
  },
  {
    num: '04',
    title: 'Huffman Compression Tool',
    description:
      'Java implementation of the Huffman coding algorithm achieving efficient lossless file compression through dynamic frequency analysis and binary tree construction.',
    tech: ['Java', 'Data Structures', 'Algorithms', 'File I/O'],
    github: 'https://github.com/Diwan01',
    demo: null,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-mono tracking-widest text-indigo-500 dark:text-indigo-400 uppercase mb-4"
        >
          Projects
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-14"
        >
          Things I've built.
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.num}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              whileHover={{ y: -5 }}
              className="group relative flex flex-col p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 hover:border-indigo-300/60 dark:hover:border-indigo-700/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5 dark:hover:shadow-indigo-500/5 cursor-default"
            >
              {/* Subtle hover glow overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <span className="text-[11px] font-mono text-zinc-300 dark:text-zinc-700 mb-4">
                {project.num}
              </span>

              <h3 className="text-[15px] font-semibold text-zinc-900 dark:text-zinc-50 mb-2.5 leading-snug">
                {project.title}
              </h3>

              <p className="text-[13px] text-zinc-500 dark:text-zinc-400 leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-[11px] rounded-md font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/60"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-1 border-t border-zinc-100 dark:border-zinc-800/80">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 text-xs text-zinc-400 dark:text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors duration-150 mt-3"
                  >
                    <FiGithub size={13} />
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 text-xs text-zinc-400 dark:text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors duration-150 mt-3"
                  >
                    <FiArrowUpRight size={13} />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
