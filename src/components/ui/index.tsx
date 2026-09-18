import type { ButtonHTMLAttributes, ImgHTMLAttributes, ReactNode } from "react";
import { Link, type LinkProps } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { cn } from "../../lib/cn";

export type ButtonVariant = "primary" | "secondary" | "quiet" | "icon";

const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    "border border-signal/65 bg-signal px-5 py-3 text-void shadow-glow hover:bg-[#dfbd43] hover:shadow-panel focus-visible:ring-signal",
  secondary:
    "border border-stroke bg-panel/80 px-5 py-3 text-bone hover:border-signal/45 hover:bg-panel2 focus-visible:ring-signal",
  quiet:
    "border border-transparent px-4 py-3 text-mist underline-offset-4 hover:border-stroke hover:bg-panel/50 hover:text-bone focus-visible:ring-signal",
  icon:
    "h-11 w-11 border border-stroke bg-panel/80 p-2.5 text-mist hover:border-signal/45 hover:bg-panel2 hover:text-bone focus-visible:ring-signal",
};

const buttonBase =
  "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md font-mono text-[11px] font-medium uppercase tracking-[0.18em] transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-void disabled:pointer-events-none disabled:opacity-45 motion-reduce:transition-none";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  loading?: boolean;
}

export function Button({
  className,
  variant = "primary",
  loading = false,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonBase, buttonVariants[variant], className)}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? <Spinner label="Carregando" /> : null}
      {children}
    </button>
  );
}

export interface ButtonLinkProps extends LinkProps {
  variant?: ButtonVariant;
  className?: string;
}

export function ButtonLink({
  className,
  variant = "primary",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={cn(buttonBase, buttonVariants[variant], className)} {...props}>
      {children}
    </Link>
  );
}

export interface SectionHeaderProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  id,
  eyebrow,
  title,
  description,
  action,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <header
      className={cn(
        "flex gap-6",
        align === "center"
          ? "mx-auto max-w-2xl flex-col items-center text-center"
          : "flex-col items-start sm:flex-row sm:items-end sm:justify-between",
        className
      )}
    >
      <div className={cn(align === "center" ? "items-center" : "items-start")}>
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2 id={id} className="mt-3 font-display text-3xl font-light tracking-tight text-bone sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mist sm:text-base">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </header>
  );
}

export interface DossierMetaProps {
  label: string;
  value: string;
  className?: string;
}

export function DossierMeta({ label, value, className }: DossierMetaProps) {
  return (
    <div className={cn("flex min-w-0 flex-col gap-1", className)}>
      <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal/80">
        {label}
      </dt>
      <dd className="truncate text-sm text-mist">{value}</dd>
    </div>
  );
}

export interface StatusBadgeProps {
  children: ReactNode;
  tone?: "signal" | "muted" | "danger" | "success";
  className?: string;
}

const badgeTones = {
  signal: "border-signal/35 bg-signal/10 text-signal",
  muted: "border-stroke bg-panel/80 text-mist",
  danger: "border-blood/70 bg-blood/20 text-[#e7aeb2]",
  success: "border-frost/40 bg-frost/10 text-[#b7d1d5]",
};

export function StatusBadge({ children, tone = "signal", className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em]",
        badgeTones[tone],
        className
      )}
    >
      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-current" />
      {children}
    </span>
  );
}

export interface MediaFrameProps extends ImgHTMLAttributes<HTMLImageElement> {
  aspect?: "square" | "landscape" | "portrait";
  fallback?: ReactNode;
}

export function MediaFrame({
  alt = "",
  aspect = "landscape",
  className,
  fallback,
  ...props
}: MediaFrameProps) {
  const aspectClass = {
    square: "aspect-square",
    landscape: "aspect-[16/10]",
    portrait: "aspect-[4/5]",
  }[aspect];

  return (
    <div className={cn("media-frame", aspectClass, className)}>
      {props.src ? (
        <img
          {...props}
          alt={alt}
          width={props.width ?? 1200}
          height={props.height ?? 750}
          loading={props.loading ?? "lazy"}
          onError={(event) => {
            props.onError?.(event);
            event.currentTarget.onerror = null;
            event.currentTarget.src = "/assets/locations/dossier-cover.svg";
          }}
          className="h-full w-full object-cover"
        />
      ) : (
        fallback ?? <span className="font-mono text-[10px] uppercase tracking-[0.16em]">Sem mídia</span>
      )}
    </div>
  );
}

export interface DossierCardProps {
  children: ReactNode;
  href?: string;
  className?: string;
  label?: string;
}

export function DossierCard({ children, href, className, label }: DossierCardProps) {
  const body = (
    <article className={cn("dossier-card group", className)}>
      {children}
      {href ? (
        <span className="mt-5 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-signal/80 transition group-hover:text-signal">
          {label ?? "Abrir dossiê"} <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
        </span>
      ) : null}
    </article>
  );

  return href ? (
    <Link to={href} className="block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-void">
      {body}
    </Link>
  ) : (
    body
  );
}

export function EmptyState({
  title = "Nenhum registro encontrado",
  description,
  action,
}: {
  title?: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="rounded-xl border border-dashed border-stroke bg-panel/40 px-6 py-12 text-center">
      <p className="font-display text-2xl text-bone">{title}</p>
      {description ? <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-mist">{description}</p> : null}
      {action ? <div className="mt-6">{action}</div> : null}
    </div>
  );
}

export function Skeleton({ className }: { className?: string }) {
  return <span aria-hidden className={cn("skeleton block", className)} />;
}

export function Spinner({ label = "Carregando" }: { label?: string }) {
  return <span className="spinner" role="status" aria-label={label} />;
}
