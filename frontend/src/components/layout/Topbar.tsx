"use client";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { notify } from "@/utils/toast"; // optional if you added toast

export default function Topbar() {
  const router = useRouter();
  const { logout } = useAuth();

  const handleLogout = () => {
    const ok = window.confirm("Log out of FinTrack?");
    if (!ok) return;
    logout();                 // clear auth
    notify?.success?.("Logged out"); // optional toast
    router.push("/");         // go to homepage
  };

  return (
    <header className="h-14 border-b border-[--color-border] bg-[--color-card] flex items-center justify-end px-4 gap-2">
      <div className="text-sm text-[--color-muted]">Signed in</div>
      <Button
        variant="ghost"
        onClick={handleLogout}
        className="cursor-pointer hover:opacity-80 transition-colors"
        >Logout</Button>
    </header>
  );
}
