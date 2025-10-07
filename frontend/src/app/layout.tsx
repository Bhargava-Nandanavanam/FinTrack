import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/layout/Navbar";

export const metadata = {
  title: "FinTrack",
  description: "Smart Personal Finance Tracker",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[--background] text-[--foreground]">
        <AuthProvider>
          <Navbar /> {/* <- put it back here */}
          {children}
          <Toaster
            toastOptions={{
              style: {
                background: "var(--card)",
                color: "var(--foreground)",
                border: "1px solid var(--border)",
              },
              success: {
                iconTheme: { primary: "var(--color-primary)", secondary: "white" },
              },
              error: { style: { borderColor: "#ef4444" } },
            }}
          />
        </AuthProvider>
      </body>
    </html>
  );
}
