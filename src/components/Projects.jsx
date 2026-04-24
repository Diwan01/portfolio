import { motion } from 'framer-motion'
import { FiGithub, FiArrowUpRight } from 'react-icons/fi'

const projects = [
  {
    num: '01',
    title: 'Awn Creel: Digital Pattern Platform',
    description:
      'Built and deployed a production licensing and ecommerce platform for digital pattern creators. Engineered the full backend using Node.js, Express, and MySQL on AWS RDS, and handled cloud deployment on AWS Lightsail with Nginx and PM2. Delivered product catalog management, tiered licensing, cart and checkout, an admin dashboard, and a customer portal. Hardened the system by resolving CORS issues, implementing SSL, and modularizing API routes to protect sensitive endpoints.',
    tech: ['React', 'Node.js', 'Express', 'MySQL', 'AWS Lightsail', 'AWS RDS', 'Nginx', 'PM2'],
    github: 'https://github.com/Diwan01',
    demo: null,
  },
  {
    num: '02',
    title: 'Homify: Nepal Housing Platform',
    description:
      'Designed a housing discovery platform to address the lack of structured property data in rural Nepal, built on a fully normalized MySQL schema with complete ERD documentation, a location scoring engine for remote-area ranking, and a RESTful backend API serving listings across regions with limited digital infrastructure.',
    tech: ['MySQL', 'ERD Design', 'Backend API', 'Location Intelligence'],
    github: 'https://github.com/Diwan01',
    demo: null,
  },
  {
    num: '03',
    title: 'Homework Alert App',
    description:
      'Shipped a native Android app in Kotlin that eliminates missed deadlines through a WorkManager-powered background scheduler, Room Database for offline-first persistence, and a precision notification system that surfaces reminders at user-defined intervals, with zero server dependency.',
    tech: ['Kotlin', 'Android', 'Room DB', 'WorkManager'],
    github: 'https://github.com/Diwan01',
    demo: null,
  },
  {
    num: '04',
    title: 'Huffman Compression Tool',
    description:
      'Engineered a lossless file compression system in Java implementing the full Huffman coding pipeline: frequency table construction, min-heap priority queue processing, binary tree traversal, variable-length prefix encoding, and bit-level stream I/O, achieving measurable size reduction with exact data recovery.',
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
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-xs font-mono tracking-[0.12em] text-indigo-500 dark:text-indigo-400 uppercase mb-4"
        >
          Projects
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-3xl sm:text-[38px] font-bold text-zinc-900 dark:text-zinc-50 mb-14"
          style={{ letterSpacing: '-0.025em' }}
        >
          Things I've built.
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
              whileHover={{ scale: 1.018, y: -5, transition: { duration: 0.2, ease: [0.25, 0.4, 0.25, 1] } }}
              className="group relative flex flex-col p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50
                hover:border-indigo-200/70 dark:hover:border-indigo-800/60
                hover:shadow-[0_8px_30px_-4px_rgba(99,102,241,0.08)] dark:hover:shadow-[0_8px_30px_-4px_rgba(99,102,241,0.12)]
                transition-colors duration-300 cursor-default"
            >
              {/* Subtle top-accent on hover */}
              <div className="absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Number */}
              <span className="text-[11px] font-mono text-zinc-300 dark:text-zinc-700 mb-5 tabular-nums">
                {project.num}
              </span>

              {/* Title */}
              <h3
                className="text-base font-semibold text-zinc-900 dark:text-zinc-50 mb-3 leading-snug"
                style={{ letterSpacing: '-0.01em' }}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-[11px] rounded-md font-mono
                      bg-zinc-100 dark:bg-zinc-800
                      text-zinc-500 dark:text-zinc-400
                      border border-zinc-200/80 dark:border-zinc-700/60"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium text-zinc-400 dark:text-zinc-600
                      hover:text-zinc-900 dark:hover:text-zinc-100
                      transition-colors duration-150"
                  >
                    <FiGithub size={13} />
                    View on GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium text-zinc-400 dark:text-zinc-600
                      hover:text-zinc-900 dark:hover:text-zinc-100
                      transition-colors duration-150"
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
