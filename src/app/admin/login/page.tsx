"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    console.log("LOGIN: started");

    setLoading(true);
    setErrorMessage("");

    try {
      console.log("LOGIN: calling Supabase");

      const { data, error } =
        await supabase.auth.signInWithPassword({
          email,
          password,
        });

      console.log("LOGIN: Supabase returned", {
        hasSession: !!data.session,
        user: data.user?.email,
        error: error?.message,
      });

      if (error) {
        setErrorMessage(error.message);
        setLoading(false);
        return;
      }

      if (!data.session) {
        setErrorMessage(
          "Login succeeded but no session was created."
        );
        setLoading(false);
        return;
      }

      console.log("LOGIN: session created");
      console.log("LOGIN: redirecting");

      router.push("/admin");
      router.refresh();

    } catch (error) {
      console.error(
        "LOGIN: unexpected error",
        error
      );

      setErrorMessage(
        "Unable to connect to the authentication system."
      );

      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-900 via-green-700 to-green-500 p-6">

      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">

        {/* Logo / Heading */}

        <div className="mb-8 text-center">

          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-3xl">
            🔐
          </div>

          <h1 className="text-3xl font-black text-green-900">
            Organizer Login
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            EASTCOSELS 2026 Organizer Portal
          </p>

        </div>

        {/* Login Form */}

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >

          {/* Email */}

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

          {/* Password */}

          <div>

            <div className="mb-2 flex items-center justify-between">

              <label className="text-sm font-semibold text-gray-700">
                Password
              </label>

              <Link
                href="/admin/forgot-password"
                className="text-sm font-semibold text-green-700 transition hover:text-green-500"
              >
                Forgot password?
              </Link>

            </div>

            <input
              type="password"
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
              placeholder="Enter your password"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />

          </div>

          {/* Error */}

          {errorMessage && (
            <div className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
              {errorMessage}
            </div>
          )}

          {/* Login Button */}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-green-700 px-4 py-3 font-bold text-white shadow-md transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading
              ? "Signing in..."
              : "Sign In"}
          </button>

        </form>

        <p className="mt-8 text-center text-xs text-gray-400">
          EASTCOSELS 2026 • Organizer Portal
        </p>

      </div>

    </main>
  );
}