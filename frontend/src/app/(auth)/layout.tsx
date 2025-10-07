import Logo from "@/components/layout/Logo";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen grid place-items-center px-4">
      <div className="absolute top-6 left-6"><Logo /></div>
      {children}
    </div>
  );
}
