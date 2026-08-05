"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
function RegisterForm() {
    const searchParams = useSearchParams();

const selectedPackage =
  searchParams.get("package") || "Student";
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [gender, setGender] = useState("");
const [institution, setInstitution] = useState("");
const [department, setDepartment] = useState("");
const [level, setLevel] = useState("");
  const [registrationCategory, setRegistrationCategory] =
  useState(selectedPackage);
  const [accommodationRequired, setAccommodationRequired] = useState("No");
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const { error } = await supabase
    .from("registrations")
    .insert([
  {
    full_name: fullName,
    email: email,
    phone: phone,
    gender: gender,
    institution: institution,
    department: department,
    level: level,
    registration_category: registrationCategory,
    accommodation_required: accommodationRequired,

    payment_status: "Pending",

    amount_paid:
      registrationCategory === "Student"
        ? 12000
        : registrationCategory === "Regular Delegate"
        ? 35000
        : 199,
  },
]);
  if (error) {
  alert("Registration failed.");
  alert(JSON.stringify(error, null, 2));
} else {
    alert("Registration successful!");

    setFullName("");
    setEmail("");
    setPhone("");
    setGender("");
    setInstitution("");
    setDepartment("");
    setLevel("");
  }
};
  return (
    <main className="min-h-screen bg-gray-100 py-16">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-10 shadow-xl">

        <h1 className="text-4xl font-bold text-green-700">
          EASTCOSELS 2026 Registration
        </h1>

        <p className="mt-3 text-gray-600">
          Complete the form below to register for the conference.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-6">

          <div>
            <label className="mb-2 block font-semibold">
              Full Name
            </label>

            <input
  type="text"
  placeholder="Enter your full name"
  value={fullName}
  onChange={(e) => setFullName(e.target.value)}
  className="w-full rounded-xl border p-4"
/>
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Email Address
            </label>

            <input
  type="email"
  placeholder="example@email.com"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full rounded-xl border p-4"
/>
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Phone Number
            </label>

            <input
            type="tel"
            placeholder="+234..."
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-xl border p-4"
/>
          </div>
          <div>
         <label className="mb-2 block font-semibold">
           Gender
         </label>

         <select
  value={gender}
  onChange={(e) => setGender(e.target.value)}
  className="w-full rounded-xl border p-4"
>
         <option>Select Gender</option>
         <option>Male</option>
         <option>Female</option>
         </select>
         </div>
         <div>
  <label className="mb-2 block font-semibold">
    Institution
  </label>

 <input
  type="text"
  placeholder="University of Nigeria, Nsukka"
  value={institution}
  onChange={(e) => setInstitution(e.target.value)}
  className="w-full rounded-xl border p-4"
/>
</div>

<div>
  <label className="mb-2 block font-semibold">
    Department
  </label>

  <input
  type="text"
  placeholder="English and Literary Studies"
  value={department}
  onChange={(e) => setDepartment(e.target.value)}
  className="w-full rounded-xl border p-4"
/>
</div>

<div>
  <label className="mb-2 block font-semibold">
    Level
  </label>

  <select
  value={level}
  onChange={(e) => setLevel(e.target.value)}
  className="w-full rounded-xl border p-4"
>
  <option value="">Select Level</option>
  <option value="100 Level">100 Level</option>
  <option value="200 Level">200 Level</option>
  <option value="300 Level">300 Level</option>
  <option value="400 Level">400 Level</option>
  <option value="500 Level">500 Level</option>
  <option value="Postgraduate">Postgraduate</option>
  <option value="Graduate">Graduate</option>
</select>
</div>

<div>
  <label className="mb-2 block font-semibold">
    Registration Category
  </label>

  <select
  value={registrationCategory}
  onChange={(e) => setRegistrationCategory(e.target.value)}
  className="w-full rounded-xl border p-4"
>
  <option value="Student">Student Delegate</option>
<option value="Regular Delegate">Regular Delegate</option>
<option value="International Delegate">
  International Delegate
</option>
</select>
</div>

{registrationCategory === "Student" && (
  <div>
    <label className="mb-2 block font-semibold">
      Accommodation Required?
    </label>

    <select
  value={accommodationRequired}
  onChange={(e) => setAccommodationRequired(e.target.value)}
  className="w-full rounded-xl border p-4"
>
  <option value="No">No</option>
  <option value="Yes">Yes</option>
</select>
  </div>
)}
<div className="rounded-2xl border border-green-200 bg-green-50 p-6">
  <h3 className="text-lg font-bold text-green-700">
    Registration Fee
  </h3>

  <p className="mt-2 text-3xl font-extrabold text-green-900">
    {registrationCategory === "Student"
      ? "₦12,000"
      : registrationCategory === "Regular Delegate"
      ? "₦35,000"
      : "$199"}
  </p>
</div>


          <button
            type="submit"
            className="w-full rounded-xl bg-green-700 py-4 font-bold text-white hover:bg-green-800"
          >
            Continue
          </button>

        </form>

      </div>
    </main>
  );
} 
export default function RegisterPage() {
  return (
    <Suspense fallback={<div className="p-10">Loading registration form...</div>}>
      <RegisterForm />
    </Suspense>
  );
}