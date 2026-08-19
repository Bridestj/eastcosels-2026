"use client";

import { FormEvent, Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";

function ResetPasswordContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [checkingSession, setCheckingSession] = useState(true);

  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const prepareResetSession = async () => {
      try {
        const code = searchParams.get("code");

        if (code) {
          const { error } =
            await supabase.auth.exchangeCodeForSession(code);

          if (error) {
            console.error(
              "RESET CODE ERROR:",
              error
            );

            setErrorMessage(
              "This password reset link is invalid or has expired."
            );

            setCheckingSession(false);
            return;
          }
        }

        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (!session) {
          setErrorMessage(
            "This password reset link is invalid or has expired."
          );
        }
      } catch (error) {
        console.error(
          "RESET SESSION ERROR:",
          error
        );

        setErrorMessage(
          "Unable to verify the password reset link."
        );
      } finally {
        setCheckingSession(false);
      }
    };

    prepareResetSession();
  }, [searchParams]);

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setErrorMessage("");
    setMessage("");

    if (password.length < 6) {
      setErrorMessage(
        "Your password must be at least 6 characters long."
      );
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage(
        "The passwords do not match."
      );
      return;
    }

    setLoading(true);

    try {
      const { error } =
        await supabase.auth.updateUser({
          password,
        });

      if (error) {
        console.error(
          "PASSWORD UPDATE ERROR:",
          error
        );

        setErrorMessage(error.message);
        return;
      }

      setMessage(
        "Your password has been successfully changed."
      );

      setTimeout(() => {
        router.push("/admin/login");
      }, 2000);
    } catch (error) {
      console.error(
        "PASSWORD UPDATE ERROR:",
        error
      );

      setErrorMessage(
        "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (checkingSession) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-900 via-green-700 to-green-500 p-6">
        <div className="w-full max-w-md rounded-3xl bg-white p-10 text-center shadow-2xl">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-3xl">
            🔐
          </div>

          <h1 className="mt-5 text-2xl font-bold text-green-900">
            Verifying Reset Link...
          </h1>

          <p className="mt-2 text-gray-500">
            Please wait while we verify your password reset link.
          </p>

        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-900 via-green-700 to-green-500 p-6">

      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">

        {/* Header */}

        <div className="mb-8 text-center">

          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-3xl">
            🔐
          </div>

          <h1 className="text-3xl font-black text-green-900">
            Create New Password
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Choose a new password for your organizer account.
          </p>

        </div>

        {/* Error */}

        {errorMessage && (
          <div className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
            {errorMessage}
          </div>
        )}

        {/* Success */}

        {message && (
          <div className="rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
            {message}
          </div>
        )}

        {/* Form */}

        {!errorMessage && !message && (
          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            {/* New Password */}

            <div>

              <label className="mb-2 block text-sm font-semibold text-gray-700">
                New Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(event) =>
                  setPassword(event.target.value)
                }
                placeholder="Enter new password"
                required
                minLength={6}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
              />

              <p className="mt-2 text-xs text-gray-400">
                Password must be at least 6 characters.
              </p>

            </div>

            {/* Confirm Password */}

            <div>

              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Confirm New Password
              </label>

              <input
                type="password"
                value={confirmPassword}
                onChange={(event) =>
                  setConfirmPassword(event.target.value)
                }
                placeholder="Confirm new password"
                required
                minLength={6}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
              />

            </div>

            {/* Submit */}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-green-700 px-4 py-3 font-bold text-white shadow-md transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading
                ? "Updating Password..."
                : "Update Password"}
            </button>

          </form>
        )}

        {/* Back to Login */}

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

export default function ResetPasswordPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-900 via-green-700 to-green-500 p-6">
          <div className="w-full max-w-md rounded-3xl bg-white p-10 text-center shadow-2xl">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-3xl">
              🔐
            </div>

            <h1 className="mt-5 text-2xl font-bold text-green-900">
              Loading...
            </h1>

          </div>
        </main>
      }
    >
      <ResetPasswordContent />
    </Suspense>
  );
}