"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/dashboard", label: "Overview" },
  { href: "/income", label: "Income" },
  { href: "/expenses", label: "Expenses" },
  { href: "/reports", label: "Reports" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:block w-56 shrink-0 border-r border-[--color-border] bg-[--color-card]">
      <div className="p-4 font-extrabold tracking-tight">FinTrack</div>
      <nav className="flex flex-col gap-1 p-2">
        {links.map(({ href, label }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={[
                "rounded-md px-3 py-2 text-sm transition",
                active
                  ? "bg-[--color-primary-weak] text-[--color-foreground]"
                  : "hover:bg-[--color-primary-weak]"
              ].join(" ")}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
