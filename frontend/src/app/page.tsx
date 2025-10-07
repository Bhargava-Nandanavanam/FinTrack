"use client";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [showHelp, setShowHelp] = useState(false);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to FinTrack 💸</h1>

      <p className="text-gray-700 max-w-xl mb-8">
        <strong>FinTrack</strong> is your smart personal finance tracker.  
        It helps you manage income, track expenses, and view insights with visual charts.  
        You can even upload your bank statements (CSV) to automatically categorize transactions.
      </p>

      <div className="flex gap-4 mb-8">
        <Link
          href="/login"
          className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Login
        </Link>
        <Link
          href="/signup"
          className="px-6 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition"
        >
          Sign Up
        </Link>
      </div>

      {/* Help Button */}
      <button
        onClick={() => setShowHelp(true)}
        className="px-4 py-2 text-sm text-blue-600 underline hover:text-blue-800"
      >
        Need Help?
      </button>

      {/* Help Modal */}
      {showHelp && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-xl shadow-lg w-96 text-left">
            <h2 className="text-xl font-semibold mb-3 text-blue-600">How to Use FinTrack</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-4">
              <li><strong>Sign Up</strong> to create your account.</li>
              <li><strong>Login</strong> to access your dashboard.</li>
              <li>Add or upload transactions to track spending.</li>
              <li>View summary cards and charts for insights.</li>
              <li>Export your data anytime.</li>
            </ul>
            <button
              onClick={() => setShowHelp(false)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
