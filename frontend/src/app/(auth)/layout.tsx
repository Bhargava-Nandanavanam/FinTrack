import Logo from "@/components/layout/Logo";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      {/* Logo at the top */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2">
        <Logo />
      </div>

      {children}
    </div>
  );
}
