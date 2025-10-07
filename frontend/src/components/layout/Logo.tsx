"use client";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="font-extrabold tracking-tight text-lg">
      FinTrack<span className="text-foreground/50">.app</span>
    </Link>
  );
}
