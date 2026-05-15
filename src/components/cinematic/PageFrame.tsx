import { cn } from "../../lib/cn";
import type { ReactNode } from "react";

interface PageFrameProps {
  children: ReactNode;
  className?: string;
  /** Título curto em mono acima do conteúdo */
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}

export function PageFrame({
  children,
  className,
  eyebrow,
  title,
  subtitle,
}: PageFrameProps) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-6xl px-4 py-12 sm:px-8 sm:py-16",
        className
      )}
    >
      {(eyebrow || title || subtitle) && (
        <header className="mb-12 max-w-3xl border-l-2 border-signal/40 pl-5 sm:mb-16 sm:pl-6">
          {eyebrow ? (
            <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-signal/90">
              {eyebrow}
            </p>
          ) : null}
          {title ? (
            <h1 className="mt-3 font-display text-3xl font-light tracking-tight text-bone sm:text-5xl">
              {title}
            </h1>
          ) : null}
          {subtitle ? (
            <p className="mt-4 font-sans text-sm leading-relaxed text-mist sm:text-base">
              {subtitle}
            </p>
          ) : null}
        </header>
      )}
      {children}
    </div>
  );
}
