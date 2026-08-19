"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

function PaymentSuccessContent() {
  const searchParams = useSearchParams();

  const reference = searchParams.get("reference");

  const [loading, setLoading] = useState(true);
  const [verified, setVerified] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!reference) {
      setErrorMessage(
        "No payment reference was found."
      );
      setLoading(false);
      return;
    }

    const verifyPayment = async () => {
      try {
        const response = await fetch(
          `/api/paystack/verify?reference=${encodeURIComponent(
            reference
          )}`,
          {
            method: "GET",
            cache: "no-store",
          }
        );

        const result = await response.json();

        console.log(
          "PAYMENT VERIFICATION:",
          result
        );

        if (
          response.ok &&
          result.success &&
          result.registration_id
        ) {
          setVerified(true);

          // Send the attendee to their ticket page
          window.location.replace(
            `/ticket/${result.registration_id}`
          );

          return;
        }

        setErrorMessage(
          result.message ||
            "We couldn't verify your payment."
        );
        setLoading(false);
      } catch (error) {
        console.error(
          "Payment verification error:",
          error
        );

        setErrorMessage(
          "Something went wrong while verifying your payment. Please try again."
        );
        setLoading(false);
      }
    };

    verifyPayment();
  }, [reference]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-green-50 px-6">
      <div className="w-full max-w-lg rounded-3xl bg-white p-10 text-center shadow-2xl">

        {loading ? (
          <>
            <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-green-100 border-t-green-700" />

            <h1 className="mt-6 text-3xl font-bold text-gray-900">
              Verifying Payment...
            </h1>

            <p className="mt-4 text-gray-600">
              Please wait while we confirm your
              payment with Paystack.
            </p>
          </>
        ) : verified ? (
          <>
            <div className="text-6xl">
              🎉
            </div>

            <h1 className="mt-6 text-4xl font-bold text-green-700">
              Payment Successful!
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              Thank you for registering for
              EASTCOSELS 2026.
            </p>

            <p className="mt-2 text-gray-600">
              Your payment has been verified.
            </p>
          </>
        ) : (
          <>
            <div className="text-5xl">
              ⚠️
            </div>

            <h1 className="mt-6 text-4xl font-bold text-red-600">
              Verification Failed
            </h1>

            <p className="mt-4 text-gray-600">
              {errorMessage ||
                "We couldn't verify your payment."}
            </p>

            <p className="mt-4 text-sm text-gray-500">
              If you believe your payment was successful,
              please keep your payment reference and
              contact the conference organizers.
            </p>
          </>
        )}

        <a
          href="/"
          className="mt-8 inline-block rounded-full bg-green-600 px-8 py-4 font-bold text-white transition hover:bg-green-700"
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
        <main className="flex min-h-screen items-center justify-center bg-green-50">
          <p className="text-gray-600">
            Loading...
          </p>
        </main>
      }
    >
      <PaymentSuccessContent />
    </Suspense>
  );
}