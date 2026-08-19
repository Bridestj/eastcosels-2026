"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setLoading(true);
    setMessage("");
    setErrorMessage("");

    try {
      const siteUrl =
        process.env.NEXT_PUBLIC_SITE_URL ||
        window.location.origin;

      const { error } =
        await supabase.auth.resetPasswordForEmail(
          email,
          {
            redirectTo: `${siteUrl}/admin/reset-password`,
          }
        );

      if (error) {
        setErrorMessage(error.message);
        return;
      }

      setMessage(
        "Password reset instructions have been sent to your email address."
      );
    } catch (error) {
      console.error("PASSWORD RESET ERROR:", error);

      setErrorMessage(
        "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-900 via-green-700 to-green-500 p-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">

        <div className="mb-8 text-center">

          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-3xl">
            🔑
          </div>

          <h1 className="text-3xl font-black text-green-900">
            Forgot Password?
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Enter your organizer email and we'll send you a
            password reset link.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Email Address
            </label>

            <input
              type="email"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              placeholder="organizer@example.com"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />
          </div>

          {errorMessage && (
            <div className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
              {errorMessage}
            </div>
          )}

          {message && (
            <div className="rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
              {message}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-green-700 px-4 py-3 font-bold text-white shadow-md transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading
              ? "Sending..."
              : "Send Reset Link"}
          </button>

        </form>

        <div className="mt-6 text-center">
          <Link
            href="/admin/login"
            className="font-semibold text-green-700 transition hover:text-green-900"
          >
            ← Back to Login
          </Link>
        </div>

        <p className="mt-8 text-center text-xs text-gray-400">
          EASTCOSELS 2026 • Organizer Portal
        </p>

      </div>
    </main>
  );
}