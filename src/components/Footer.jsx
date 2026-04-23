export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-zinc-200 dark:border-zinc-800/80">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <span className="text-sm font-semibold text-zinc-400 dark:text-zinc-500 tracking-tight">
          Diwan Bhandari
        </span>
        <span className="text-xs text-zinc-300 dark:text-zinc-700">
          © {new Date().getFullYear()} — Built with React &amp; Tailwind CSS
        </span>
      </div>
    </footer>
  )
}
