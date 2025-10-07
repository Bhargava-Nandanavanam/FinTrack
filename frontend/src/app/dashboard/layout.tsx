import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen grid md:grid-cols-[14rem_1fr]">
      <Sidebar />
      <div className="flex min-h-svh flex-col">
        <Topbar />
        <main className="flex-1 p-4 md:p-6 bg-[--color-background]">{children}</main>
      </div>
    </div>
  );
}
