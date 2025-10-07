"use client";
import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { validateEmail, validatePassword } from "@/utils/validators";

type Props = { type: "login" | "signup" };

export default function AuthForm({ type }: Props) {
  const { login, signup } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);

    if (!validateEmail(email)) return setErr("Please enter a valid email.");
    if (!validatePassword(password)) return setErr("Password must be 6+ chars.");

    try {
      setLoading(true);
      if (type === "login") await login(email, password);
      else await signup(email, password);
    } catch (e: any) {
      setErr(e?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="bg-white p-8 rounded-2xl shadow-md w-96">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
        {type === "login" ? "Login to FinTrack" : "Create an Account"}
      </h2>

      {err && (
        <div className="mb-4 rounded-md border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700">
          {err}
        </div>
      )}

      <input
        type="email"
        placeholder="Email"
        className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-blue-500"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoComplete="email"
        required
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full mb-6 px-4 py-2 border rounded-md focus:outline-blue-500"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete={type === "login" ? "current-password" : "new-password"}
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 disabled:opacity-60"
      >
        {loading ? "Please wait..." : type === "login" ? "Login" : "Sign Up"}
      </button>

      <p className="text-center mt-4 text-sm">
        {type === "login" ? (
          <>
            Don’t have an account?{" "}
            <Link href="/signup" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </>
        )}
      </p>
    </form>
  );
}
