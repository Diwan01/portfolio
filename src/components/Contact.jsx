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
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-mono tracking-widest text-indigo-500 dark:text-indigo-400 uppercase mb-4"
        >
          Contact
        </motion.p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-14">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4"
            >
              Let&apos;s work together.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18 }}
              className="text-zinc-500 dark:text-zinc-400 max-w-md leading-relaxed text-[15px]"
            >
              Whether it&apos;s a co-op role, internship, or a project you&apos;d like to collaborate
              on — I&apos;d love to hear from you.
            </motion.p>
          </div>

          <motion.a
            href="mailto:bhandari.diw@northeastern.edu"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.24 }}
            whileHover={{ y: -2 }}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors duration-200 shadow-lg shadow-indigo-600/20 self-start md:self-auto"
          >
            <FiMail size={15} />
            Send an email
          </motion.a>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {contacts.map(({ Icon, label, display, href, external }, i) => (
            <motion.a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group flex flex-col gap-3 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-indigo-300/60 dark:hover:border-indigo-700/50 transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/5"
            >
              <div className="flex items-center justify-between">
                <Icon
                  size={17}
                  className="text-zinc-400 dark:text-zinc-500 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-200"
                />
                <FiArrowUpRight
                  size={13}
                  className="text-zinc-300 dark:text-zinc-700 group-hover:text-indigo-400 transition-colors duration-200"
                />
              </div>
              <div>
                <p className="text-[11px] text-zinc-400 dark:text-zinc-600 mb-0.5 font-mono tracking-wide">
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
