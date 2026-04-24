import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const links = [
  { Icon: FiMail, href: 'mailto:bhandari.diw@northeastern.edu', label: 'Email' },
  { Icon: FiLinkedin, href: 'https://www.linkedin.com/in/diwanbhandari', label: 'LinkedIn' },
  { Icon: FiGithub, href: 'https://github.com/Diwan01', label: 'GitHub' },
]

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-zinc-200/80 dark:border-zinc-800/60">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-6 h-6 rounded-md bg-indigo-600 text-white text-[10px] font-bold leading-none shrink-0">
            DB
          </div>
          <span className="text-sm font-medium text-zinc-500 dark:text-zinc-500">
            Diwan Bhandari
          </span>
        </div>

        <div className="flex items-center gap-1">
          {links.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              aria-label={label}
              className="p-2 rounded-lg text-zinc-400 dark:text-zinc-600 hover:text-zinc-700 dark:hover:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-all duration-150"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>

        <span className="text-xs text-zinc-300 dark:text-zinc-700">
          © {new Date().getFullYear()} — Built with React &amp; Tailwind
        </span>
      </div>
    </footer>
  )
}
