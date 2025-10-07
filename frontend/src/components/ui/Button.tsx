"use client";
import { cn } from "@/utils/cn";
import Link from "next/link";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost" | "gradient";
  asChild?: boolean;
  href?: string;
  isLoading?: boolean;
};

export default function Button({
  variant = "primary",
  asChild,
  className,
  href,
  isLoading = false,
  disabled,
  children,
  ...props
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium " +
    "transition-colors focus-visible:ring-2 focus-visible:ring-[--color-ring] cursor-pointer " +
    "disabled:opacity-60 disabled:cursor-not-allowed";

  const styles = {
    primary:   "bg-[--color-primary] text-white hover:bg-[--color-primary-strong]",
    secondary: "border border-[--color-border] text-[--color-foreground] bg-[--color-card] hover:bg-[--color-primary-weak]",
    ghost:     "text-[--color-foreground] hover:bg-[--color-primary-weak]",
    gradient:  "text-white bg-gradient-to-r from-[--color-primary] to-[--color-primary-strong] hover:opacity-90",
  }[variant];

  const classes = cn(base, styles, "transition-colors", className);

  const content = isLoading ? "Please wait…" : children;

  if (asChild && href) {
    return (
      <Link href={href} className={classes} aria-busy={isLoading}>
        {content}
      </Link>
    );
  }
  return (
    <button className={classes} disabled={disabled || isLoading} aria-busy={isLoading} {...props}>
      {content}
    </button>
  );
}
