"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";
import Logo from "./Logo";

export default function Navbar() {
  const path = usePathname();
  const hide =
    path.startsWith("/login") ||
    path.startsWith("/signup") ||
    path.startsWith("/dashboard"); // hide on dashboard shell
  if (hide) return null;

  return (
    <nav className="sticky top-0 z-40 bg-background/80 backdrop-blur border-b border-[--color-border]">
      <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-2">
          <Button asChild href="/login" variant="ghost">Login</Button>
          <Button asChild href="/signup" variant="secondary">Sign Up</Button>
        </div>
      </div>
    </nav>
  );
}
