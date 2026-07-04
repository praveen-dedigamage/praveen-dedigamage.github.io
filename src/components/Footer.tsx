export default function Footer() {
  return (
    <footer className="w-full border-t border-black/10 dark:border-white/10">
      <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-4 px-6 py-8 text-sm opacity-70 sm:flex-row sm:px-10 lg:px-16">
        <span>&copy; {new Date().getFullYear()} Praveen Dedigamage</span>
        <a
          className="hover:text-accent"
          href="https://github.com/praveen-dedigamage"
          target="_blank"
          rel="noreferrer"
        >
          github.com/praveen-dedigamage
        </a>
      </div>
    </footer>
  );
}
