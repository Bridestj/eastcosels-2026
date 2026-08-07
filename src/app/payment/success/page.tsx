"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

function PaymentSuccessContent() {
  const searchParams = useSearchParams();

  const reference = searchParams.get("reference");

  const [loading, setLoading] = useState(true);
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    if (!reference) return;

    const verifyPayment = async () => {
      const response = await fetch(
        `/api/paystack/verify?reference=${reference}`
      );

      const result = await response.json();

      if (
        result.status &&
        result.data &&
        result.data.status === "success"
      ) {
        setVerified(true);
      }

      setLoading(false);
    };

    verifyPayment();
  }, [reference]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-green-50 px-6">
      <div className="max-w-lg rounded-3xl bg-white p-10 text-center shadow-2xl">

        {loading ? (
          <>
            <h1 className="text-3xl font-bold">
              Verifying Payment...
            </h1>

            <p className="mt-4">
              Please wait...
            </p>
          </>
        ) : verified ? (
          <>
            <div className="text-6xl">🎉</div>

            <h1 className="mt-6 text-4xl font-bold text-green-700">
              Payment Successful!
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              Thank you for registering for EASTCOSELS 2026.
            </p>

            <p className="mt-2 text-gray-600">
              Your payment has been verified.
            </p>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-bold text-red-600">
              Verification Failed
            </h1>

            <p className="mt-4">
              We couldn't verify your payment.
            </p>
          </>
        )}

        <a
          href="/"
          className="mt-8 inline-block rounded-full bg-green-600 px-8 py-4 font-bold text-white"
        >
          Return Home
        </a>

      </div>
    </main>
  );
}

export default function PaymentSuccess() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center">
          Loading...
        </main>
      }
    >
      <PaymentSuccessContent />
    </Suspense>
  );
}