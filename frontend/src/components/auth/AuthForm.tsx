"use client";
import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

type Props = { type: "login" | "signup" };

export default function AuthForm({ type }: Props) {
  const { login, signup } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    setLoading(true);
    try {
      if (type === "login") await login(email, password);
      else await signup(email, password);
      // optional: redirect here if you want -> router.push("/dashboard")
    } catch (e: any) {
      setErr(e?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-md">
      <div className="card p-8">
        <h2 className="text-2xl font-semibold">
          {type === "login" ? "Welcome back" : "Create your account"}
        </h2>
        <p className="mt-1 text-sm text-[--color-muted]">
          {type === "login" ? "Log in to continue" : "It takes less than a minute"}
        </p>

        {/* 🔊 Accessibility: screen-reader live region announces new errors */}
        <div aria-live="polite" className="sr-only">
          {err ? `Error: ${err}` : ""}
        </div>

        {/* ⚠️ Visible inline error message */}
        {err && (
          <div
            role="alert"
            className="mt-4 rounded-md border border-[--color-border] bg-[--color-primary-weak] px-3 py-2 text-sm"
          >
            {err}
          </div>
        )}

        <form onSubmit={onSubmit} className="mt-6 space-y-3" aria-busy={loading}>
          <Input
            type="email"
            placeholder="Email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={!!err}
          />
          <Input
            type="password"
            placeholder="Password"
            autoComplete={type === "login" ? "current-password" : "new-password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-invalid={!!err}
          />

          <Button type="submit" className="w-full" isLoading={loading}>
            {type === "login" ? "Login" : "Sign Up"}
          </Button>
        </form>

        <p className="mt-4 text-center text-sm text-[--color-muted]">
          {type === "login" ? (
            <>
              No account?{" "}
              <Link href="/signup" className="underline text-[--color-primary]">
                Sign up
              </Link>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <Link href="/login" className="underline text-[--color-primary]">
                Login
              </Link>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
