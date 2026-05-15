export function Footer() {
  return (
    <footer className="relative z-20 border-t border-stroke/60 bg-abyss/90 py-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/20 to-transparent" />
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:px-8 sm:text-left">
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-mist">
          Ijatu Mystery &copy; {new Date().getFullYear()}
        </p>
        <p className="max-w-md font-sans text-xs leading-relaxed text-mist/80">
          Tom de investigação paranormal — não substitui
          apoio psicológico ou jurídico real.
        </p>
      </div>
    </footer>
  );
}
