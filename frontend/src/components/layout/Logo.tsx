"use client";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition"
    >
      {/* You can replace this emoji or text with an actual logo image later */}
      <span className="text-3xl">💸</span>
      <span className="text-2xl font-bold">FinTrack</span>
    </Link>
  );
}
