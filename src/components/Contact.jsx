import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiArrowUpRight } from 'react-icons/fi'

const contacts = [
  {
    Icon: FiMail,
    label: 'Email',
    display: 'bhandari.diw@northeastern.edu',
    href: 'mailto:bhandari.diw@northeastern.edu',
    external: false,
  },
  {
    Icon: FiLinkedin,
    label: 'LinkedIn',
    display: 'linkedin.com/in/diwanbhandari',
    href: 'https://www.linkedin.com/in/diwanbhandari',
    external: true,
  },
  {
    Icon: FiGithub,
    label: 'GitHub',
    display: 'github.com/Diwan01',
    href: 'https://github.com/Diwan01',
    external: true,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-xs font-mono tracking-[0.12em] text-indigo-500 dark:text-indigo-400 uppercase mb-4"
        >
          Contact
        </motion.p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="text-3xl sm:text-[38px] font-bold text-zinc-900 dark:text-zinc-50 mb-4"
              style={{ letterSpacing: '-0.025em' }}
            >
              Let&apos;s work together.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.16 }}
              className="text-[15px] text-zinc-500 dark:text-zinc-400 max-w-sm leading-relaxed"
            >
              Open to co-op roles, internships, or any project worth building.
              I&apos;d love to hear from you.
            </motion.p>
          </div>

          <motion.a
            href="mailto:bhandari.diw@northeastern.edu"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.22 }}
            whileHover={{ scale: 1.03, y: -1, transition: { duration: 0.15, ease: 'easeOut' } }}
            whileTap={{ scale: 0.97 }}
            className="shrink-0 self-start md:self-auto inline-flex items-center gap-2
              px-6 py-3 rounded-xl text-sm font-semibold text-white
              bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700
              shadow-lg shadow-indigo-600/20 dark:shadow-indigo-600/10
              transition-colors duration-150
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950"
          >
            <FiMail size={14} />
            Send an email
          </motion.a>
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-3">
          {contacts.map(({ Icon, label, display, href, external }, i) => (
            <motion.a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer' : undefined}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.09 }}
              whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.18, ease: [0.25, 0.4, 0.25, 1] } }}
              className="group flex flex-col gap-4 p-5 rounded-2xl
                border border-zinc-200 dark:border-zinc-800
                bg-white dark:bg-zinc-900/50
                hover:border-indigo-200/70 dark:hover:border-indigo-800/60
                hover:shadow-[0_4px_20px_-2px_rgba(99,102,241,0.07)] dark:hover:shadow-[0_4px_20px_-2px_rgba(99,102,241,0.1)]
                transition-colors duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950/50 transition-colors duration-200">
                  <Icon
                    size={15}
                    className="text-zinc-500 dark:text-zinc-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200"
                  />
                </div>
                <FiArrowUpRight
                  size={14}
                  className="text-zinc-300 dark:text-zinc-700 group-hover:text-indigo-400 dark:group-hover:text-indigo-500 transition-colors duration-200"
                />
              </div>
              <div>
                <p className="text-[10px] font-mono tracking-[0.1em] text-zinc-400 dark:text-zinc-600 uppercase mb-1">
                  {label}
                </p>
                <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 truncate">
                  {display}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
