"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  // Hide navbar on auth pages
  if (pathname.startsWith("/login") || pathname.startsWith("/signup")) return null;

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
      <Link href="/" className="text-xl font-bold text-blue-600">
        FinTrack 💸
      </Link>
      <div className="flex gap-4">
        <Link
          href="/login"
          className="px-4 py-2 rounded-md border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition"
        >
          Login
        </Link>
        <Link
          href="/signup"
          className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
