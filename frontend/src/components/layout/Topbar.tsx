"use client";
import Button from "@/components/ui/Button";

export default function Topbar() {
  return (
    <header className="h-14 border-b border-[--color-border] bg-[--color-card] flex items-center justify-end px-4 gap-2">
      {/* Replace with real user/email when wiring auth */}
      <div className="text-sm text-[--color-muted]">Signed in</div>
      <Button variant="ghost">Logout</Button>
    </header>
  );
}
