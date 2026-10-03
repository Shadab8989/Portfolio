import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  variant?: "primary" | "ghost";
  href?: string;
  onClick?: (e: any) => void;
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
}

export function Button({
  children,
  variant = "primary",
  href,
  onClick,
  disabled,
  className = "",
  ariaLabel,
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-[8px] h-10 px-5 text-sm font-medium transition-all duration-150 ease-in-out cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-bg-inv text-fg-inv hover:opacity-90 active:scale-[0.98] border border-transparent dark:hover:border-border-strong",
    ghost:
      "border border-border-strong text-fg hover:bg-bg-card active:scale-[0.98] dark:hover:bg-bg-card dark:hover:border-border-strong depth-highlight",
  };

  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <a 
        href={href} 
        className={cls} 
        aria-label={ariaLabel}
        onClick={onClick}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={cls}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
