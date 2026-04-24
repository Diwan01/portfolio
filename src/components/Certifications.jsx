import { motion } from 'framer-motion'
import { FiAward, FiExternalLink } from 'react-icons/fi'

const categories = [
  {
    label: 'Cloud and Infrastructure',
    certs: [
      { name: 'Certified Cloud Computing Consultant', issuer: 'Arcitura Education', credential: 'https://www.credly.com/badges/41564a97-a20c-417f-9759-62f3cca755a7/public_url' },
      { name: 'Certified Cloud Technology Professional', issuer: 'Arcitura Education', credential: 'https://www.credly.com/badges/d6786033-555b-4592-b357-18f86ab5973a/public_url' },
      { name: 'Certified Cloud Professional', issuer: 'Arcitura Education', credential: 'https://www.credly.com/badges/542f79f1-44eb-4e26-b057-8f367ba6cfaa/public_url' },
    ],
  },
  {
    label: 'Software Development',
    certs: [
      { name: 'Introduction to Back End Development', issuer: 'Meta', credential: 'https://coursera.org/verify/LFKJ2MLGX6FF' },
      { name: 'Programming Fundamentals in Kotlin', issuer: 'Meta', credential: 'https://coursera.org/verify/HFLLVQG5ZCMD' },
      { name: 'Version Control', issuer: 'Meta', credential: 'https://coursera.org/verify/FRP4TNWZFQC5' },
      { name: 'Introduction to Android Mobile Application Development', issuer: 'Meta', credential: 'https://coursera.org/verify/2QQR52S7DT7Q' },
    ],
  },
  {
    label: 'IT and Systems',
    certs: [
      { name: 'Google IT Support Professional Certificate', issuer: 'Google', credential: 'https://www.credly.com/badges/050ae495-046c-4764-898f-cfc1079188aa/public_url' },
      { name: 'IT Security: Defense Against the Digital Dark Arts', issuer: 'Google', credential: 'https://coursera.org/verify/QUG5YMM2JNSN' },
      { name: 'The Bits and Bytes of Computer Networking', issuer: 'Google', credential: 'https://coursera.org/verify/KT9AVWY5R8NK' },
      { name: 'Operating Systems and You: Becoming a Power User', issuer: 'Google', credential: 'https://coursera.org/verify/VMHPG85JHSLF' },
      { name: 'System Administration and IT Infrastructure Services', issuer: 'Google', credential: 'https://coursera.org/verify/QPRCY2NRKTKY' },
    ],
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-28 px-6 bg-zinc-50/80 dark:bg-zinc-900/20">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-xs font-mono tracking-[0.12em] text-indigo-500 dark:text-indigo-400 uppercase mb-4"
        >
          Certifications
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-3xl sm:text-[38px] font-bold text-zinc-900 dark:text-zinc-50 mb-14"
          style={{ letterSpacing: '-0.025em' }}
        >
          Credentials.
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-4">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="flex flex-col p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50"
            >
              {/* Category header */}
              <div className="flex items-center gap-2.5 mb-5">
                <div className="p-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/60">
                  <FiAward size={13} className="text-indigo-500 dark:text-indigo-400" />
                </div>
                <p className="text-[11px] font-mono tracking-[0.1em] text-indigo-500 dark:text-indigo-400 uppercase">
                  {cat.label}
                </p>
              </div>

              {/* Cert list */}
              <ul className="flex flex-col gap-2 flex-1">
                {cat.certs.map((cert, i) => (
                  <motion.li
                    key={cert.name}
                    initial={{ opacity: 0, x: 8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: ci * 0.1 + i * 0.05 }}
                    whileHover={{ scale: 1.015, x: 2, transition: { duration: 0.15, ease: 'easeOut' } }}
                    className="group flex items-start justify-between gap-3 px-3 py-2.5 rounded-xl
                      border border-zinc-100 dark:border-zinc-800/60
                      bg-zinc-50/60 dark:bg-zinc-800/20
                      hover:border-indigo-200/60 dark:hover:border-indigo-800/50
                      hover:bg-indigo-50/40 dark:hover:bg-indigo-950/20
                      transition-colors duration-200 cursor-default"
                  >
                    <div className="min-w-0">
                      <p className="text-[13px] font-medium text-zinc-700 dark:text-zinc-300 leading-snug">
                        {cert.name}
                      </p>
                      <p className="text-[11px] text-zinc-400 dark:text-zinc-600 mt-0.5">
                        {cert.issuer}
                      </p>
                    </div>
                    {cert.credential && (
                      <a
                        href={cert.credential}
                        target="_blank"
                        rel="noreferrer"
                        className="shrink-0 mt-0.5 text-zinc-300 dark:text-zinc-700 group-hover:text-indigo-400 dark:group-hover:text-indigo-500 transition-colors duration-200"
                        aria-label={`View credential for ${cert.name}`}
                      >
                        <FiExternalLink size={12} />
                      </a>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
