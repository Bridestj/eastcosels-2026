"use client";

import Link from "next/link";
import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";

const packages = {
  Student: {
    title: "Student Delegate",
    price: 12000,
    displayPrice: "₦12,000",
    features: [
      "Conference Materials",
      "Conference Badge",
      "Certificate of Participation",
      "Refreshments",
    ],
  },

  Alumini: {
    title: "Alumini",
    price: 20000,
    displayPrice: "₦20,000",
    features: [
      "Everything in Student",
      "EASTCOSELS Polo",
      "Special Conference Souvenir",
    ],
  },

  "International Delegate": {
    title: "International Delegate",
    price: 199,
    displayPrice: "$199",
    features: [
      "Everything in Alumini",
      "Airport Welcome Guide",
      "International Delegate Kit",
      "Priority Conference Support",
    ],
  },
};

type PackageName = keyof typeof packages;

function RegisterForm() {
  const searchParams = useSearchParams();

  const initialPackage =
    (searchParams.get("package") as PackageName) || "Student";

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [institution, setInstitution] = useState("");
  const [department, setDepartment] = useState("");
  const [level, setLevel] = useState("");

  const [registrationCategory, setRegistrationCategory] =
    useState<PackageName>(
      packages[initialPackage]
        ? initialPackage
        : "Student"
    );

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const selectedPackage = packages[registrationCategory];

  const inputClassName =
    "w-full rounded-xl border border-gray-200 bg-gray-50 p-4 text-base text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100";

  const selectClassName =
    "w-full rounded-xl border border-gray-200 bg-gray-50 p-4 text-base text-gray-900 outline-none transition focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100";

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (loading) return;

    setErrorMessage("");

    const cleanName = fullName.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanPhone = phone.trim();
    const cleanInstitution = institution.trim();
    const cleanDepartment = department.trim();

    // -------------------------
    // VALIDATION
    // -------------------------

    if (!cleanName) {
      setErrorMessage("Please enter your full name.");
      return;
    }

    if (cleanName.length < 3) {
      setErrorMessage(
        "Please enter your full name correctly."
      );
      return;
    }

    if (cleanName.length > 100) {
      setErrorMessage("Your full name is too long.");
      return;
    }

    if (!cleanEmail) {
      setErrorMessage(
        "Please enter your email address."
      );
      return;
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        cleanEmail
      )
    ) {
      setErrorMessage(
        "Please enter a valid email address."
      );
      return;
    }

    if (!cleanPhone) {
      setErrorMessage(
        "Please enter your phone number."
      );
      return;
    }

    const phoneDigits = cleanPhone.replace(/\D/g, "");

    if (phoneDigits.length < 10) {
      setErrorMessage(
        "Please enter a valid phone number."
      );
      return;
    }

    if (phoneDigits.length > 15) {
      setErrorMessage(
        "Please enter a valid phone number."
      );
      return;
    }

    if (!gender) {
      setErrorMessage(
        "Please select your gender."
      );
      return;
    }

    if (!cleanInstitution) {
      setErrorMessage(
        "Please enter your institution."
      );
      return;
    }

    if (cleanInstitution.length > 150) {
      setErrorMessage(
        "Your institution name is too long."
      );
      return;
    }

    if (!cleanDepartment) {
      setErrorMessage(
        "Please enter your department."
      );
      return;
    }

    if (cleanDepartment.length > 150) {
      setErrorMessage(
        "Your department name is too long."
      );
      return;
    }

    if (!level) {
      setErrorMessage(
        "Please select your level."
      );
      return;
    }

    if (!registrationCategory) {
      setErrorMessage(
        "Please select a registration category."
      );
      return;
    }

    setLoading(true);

    try {
      const amount = selectedPackage.price;

      const response = await fetch(
        "/api/paystack/initialize",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: cleanEmail,
            registrationCategory,
          }),
        }
      );

      const payment = await response.json();

      console.log(
        "PAYSTACK INITIALIZATION:",
        payment
      );

      if (!payment.status) {
        setErrorMessage(
          payment.message ||
            "Unable to initialize payment. Please try again."
        );
        return;
      }

      // -------------------------
      // SAVE REGISTRATION
      // -------------------------

      const { error } = await supabase
        .from("registrations")
        .insert([
          {
            full_name: cleanName,
            email: cleanEmail,
            phone: cleanPhone,
            gender,
            institution: cleanInstitution,
            department: cleanDepartment,
            level,
            registration_category:
              registrationCategory,
            payment_status: "Pending",
            payment_reference:
              payment.data.reference,
            amount_paid: amount,
          },
        ]);

      if (error) {
        console.error(
          "Registration error:",
          error
        );

        setErrorMessage(
          "We couldn't save your registration. Please try again."
        );

        return;
      }

      // -------------------------
      // REDIRECT TO PAYSTACK
      // -------------------------

      window.location.href =
        payment.data.authorization_url;
    } catch (error) {
      console.error(
        "Registration error:",
        error
      );

      setErrorMessage(
        "Something went wrong. Please check your connection and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-gray-100 px-4 py-8 sm:px-6 sm:py-12 lg:py-16">

      {/* Navigation */}

      <div className="mx-auto mb-8 flex max-w-6xl items-center justify-between">

        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-green-800 transition hover:text-green-600"
        >
          <span className="text-xl">←</span>
          Back to Home
        </Link>

        <div className="hidden text-right sm:block">
          <p className="text-sm font-semibold text-gray-500">
            EASTCOSELS
          </p>

          <p className="text-xs tracking-[3px] text-green-700">
            2026
          </p>
        </div>

      </div>

      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.4fr_0.8fr]">

        {/* Registration Form */}

        <div className="rounded-3xl bg-white p-6 shadow-xl sm:p-8 lg:p-10">

          <div className="mb-8">

            <p className="font-semibold uppercase tracking-[0.3em] text-green-600">
              Registration
            </p>

            <h1 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Secure Your Seat
            </h1>

            <p className="mt-3 leading-7 text-gray-600">
              Complete your details below to register
              for EASTCOSELS 2026.
            </p>

            <p className="mt-3 text-sm text-gray-500">
              Fields marked with{" "}
              <span className="font-bold text-red-500">
                *
              </span>{" "}
              are required.
            </p>

          </div>

          {/* Error */}

          {errorMessage && (
            <div
              role="alert"
              className="mb-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700"
            >
              {errorMessage}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            {/* Full Name */}

            <div>
              <label className="mb-2 block text-sm font-bold text-gray-800">
                Full Name
                <span className="ml-1 text-red-500">
                  *
                </span>
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) =>
                  setFullName(e.target.value)
                }
                minLength={3}
                maxLength={100}
                autoComplete="name"
                className={inputClassName}
                required
              />
            </div>

            {/* Email */}

            <div>
              <label className="mb-2 block text-sm font-bold text-gray-800">
                Email Address
                <span className="ml-1 text-red-500">
                  *
                </span>
              </label>

              <input
                type="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                autoComplete="email"
                className={inputClassName}
                required
              />
            </div>

            {/* Phone */}

            <div>
              <label className="mb-2 block text-sm font-bold text-gray-800">
                Phone Number
                <span className="ml-1 text-red-500">
                  *
                </span>
              </label>

              <input
                type="tel"
                placeholder="+234 801 234 5678"
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value)
                }
                autoComplete="tel"
                maxLength={20}
                className={inputClassName}
                required
              />
            </div>

            {/* Gender + Level */}

            <div className="grid gap-6 sm:grid-cols-2">

              {/* Gender */}

              <div>
                <label className="mb-2 block text-sm font-bold text-gray-800">
                  Gender
                  <span className="ml-1 text-red-500">
                    *
                  </span>
                </label>

                <select
                  value={gender}
                  onChange={(e) =>
                    setGender(e.target.value)
                  }
                  className={selectClassName}
                  required
                >
                  <option value="">
                    Select Gender
                  </option>

                  <option value="Male">
                    Male
                  </option>

                  <option value="Female">
                    Female
                  </option>
                </select>
              </div>

              {/* Level / Status */}

              <div>

                <label className="mb-2 block text-sm font-bold text-gray-800">

                  {registrationCategory === "Student"
                    ? "Level"
                    : registrationCategory === "Alumini"
                      ? "Status"
                      : "Academic / Professional Status"}

                  <span className="ml-1 text-red-500">
                    *
                  </span>

                </label>

                <select
                  value={level}
                  onChange={(e) =>
                    setLevel(e.target.value)
                  }
                  className={selectClassName}
                  required
                >

                  <option value="">
                    {registrationCategory === "Student"
                      ? "Select Level"
                      : "Select Status"}
                  </option>

                  {registrationCategory === "Student" && (
                    <>
                      <option value="100 Level">
                        100 Level
                      </option>

                      <option value="200 Level">
                        200 Level
                      </option>

                      <option value="300 Level">
                        300 Level
                      </option>

                      <option value="400 Level">
                        400 Level
                      </option>

                      <option value="500 Level">
                        500 Level
                      </option>
                    </>
                  )}

                  {registrationCategory === "Alumini" && (
                    <>
                      <option value="Graduate">
                        Graduate
                      </option>

                      <option value="Postgraduate">
                        Postgraduate
                      </option>
                    </>
                  )}

                  {registrationCategory === "International Delegate" && (
                    <>
                      <option value="Undergraduate">
                        Undergraduate
                      </option>

                      <option value="Postgraduate">
                        Postgraduate
                      </option>

                      <option value="Graduate / Alumni">
                        Graduate / Alumni
                      </option>

                      <option value="Professional / Researcher">
                        Professional / Researcher
                      </option>
                    </>
                  )}

                </select>

              </div>

            </div>

            {/* Institution */}

            <div>

              <label className="mb-2 block text-sm font-bold text-gray-800">
                Institution
                <span className="ml-1 text-red-500">
                  *
                </span>
              </label>

              <input
                type="text"
                placeholder="University of Nigeria, Nsukka"
                value={institution}
                onChange={(e) =>
                  setInstitution(e.target.value)
                }
                maxLength={150}
                autoComplete="organization"
                className={inputClassName}
                required
              />

            </div>

            {/* Department */}

            <div>

              <label className="mb-2 block text-sm font-bold text-gray-800">
                Department
                <span className="ml-1 text-red-500">
                  *
                </span>
              </label>

              <input
                type="text"
                placeholder="English and Literary Studies"
                value={department}
                onChange={(e) =>
                  setDepartment(e.target.value)
                }
                maxLength={150}
                className={inputClassName}
                required
              />

            </div>

            {/* Registration Category */}

            <div>

              <label className="mb-2 block text-sm font-bold text-gray-800">
                Registration Category
                <span className="ml-1 text-red-500">
                  *
                </span>
              </label>

              <select
                value={registrationCategory}
                onChange={(e) => {
                  const newCategory =
                    e.target.value as PackageName;

                  setRegistrationCategory(
                    newCategory
                  );

                  setLevel("");
                }}
                className={selectClassName}
                required
              >

                <option value="Student">
                  Student Delegate
                </option>

                <option value="Alumini">
                  Alumini
                </option>

                <option value="International Delegate">
                  International Delegate
                </option>

              </select>

            </div>

            {/* Mobile Package Summary */}

            <div className="rounded-2xl border border-green-200 bg-green-50 p-5 lg:hidden">

              <p className="text-sm font-bold uppercase tracking-wider text-green-600">
                Selected Package
              </p>

              <div className="mt-2 flex items-center justify-between gap-4">

                <div>
                  <h3 className="font-bold text-gray-900">
                    {selectedPackage.title}
                  </h3>

                  <p className="text-sm text-gray-600">
                    EASTCOSELS 2026
                  </p>
                </div>

                <p className="text-2xl font-extrabold text-green-800">
                  {selectedPackage.displayPrice}
                </p>

              </div>

            </div>

            {/* Submit */}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-green-700 py-4 font-bold text-white shadow-lg transition hover:bg-green-800 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
            >

              {loading ? (
                <span className="flex items-center justify-center gap-3">

                  <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />

                  Processing Payment...

                </span>
              ) : (
                "Proceed to Secure Payment →"
              )}

            </button>

            <p className="text-center text-xs leading-5 text-gray-500">
              You will be securely redirected to Paystack
              to complete your payment.
            </p>

          </form>

        </div>

        {/* Desktop Package Summary */}

        <aside className="hidden lg:block">

          <div className="sticky top-24 rounded-3xl bg-green-900 p-8 text-white shadow-2xl">

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-green-200">
              Your Registration
            </p>

            <h2 className="mt-3 text-3xl font-extrabold">
              {selectedPackage.title}
            </h2>

            <p className="mt-2 text-green-200">
              EASTCOSELS 2026
            </p>

            <div className="my-8 h-px bg-green-700" />

            <p className="text-sm text-green-200">
              Registration Fee
            </p>

            <p className="mt-1 text-5xl font-extrabold">
              {selectedPackage.displayPrice}
            </p>

            <div className="my-8 h-px bg-green-700" />

            <p className="font-bold">
              Package includes:
            </p>

            <ul className="mt-5 space-y-4">

              {selectedPackage.features.map(
                (feature) => (
                  <li
                    key={feature}
                    className="flex gap-3 text-sm text-green-50"
                  >
                    <span className="text-green-300">
                      ✓
                    </span>

                    <span>{feature}</span>
                  </li>
                )
              )}

            </ul>

            <div className="mt-10 rounded-2xl bg-white/10 p-5">

              <p className="text-sm leading-6 text-green-100">
                Your registration details will be
                securely saved before you are redirected
                to Paystack for payment.
              </p>

            </div>

          </div>

        </aside>

      </div>

      <p className="mt-8 text-center text-xs text-gray-500">
        © 2026 EASTCOSELS. All rights reserved.
      </p>

    </main>
  );
}

export default function RegisterPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-green-50">
          <p className="text-gray-600">
            Loading registration form...
          </p>
        </main>
      }
    >
      <RegisterForm />
    </Suspense>
  );
}