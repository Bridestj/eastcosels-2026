"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const targetDate = new Date(2026, 7, 30, 9, 0, 0).getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = Date.now();
      const difference = targetDate - now;

      if (difference <= 0) return;

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-12 rounded-3xl bg-white px-8 py-8 shadow-2xl">
      <h2 className="mb-6 text-xl font-bold text-green-700">
        Conference Begins In
      </h2>

      <div className="mt-8 flex flex-wrap justify-center gap-8">
        <TimeBox value={timeLeft.days} label="Days" />
        <TimeBox value={timeLeft.hours} label="Hours" />
        <TimeBox value={timeLeft.minutes} label="Minutes" />
        <TimeBox value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  );
}

function TimeBox({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div className="group w-32 rounded-2xl border border-gray-200 bg-white p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="text-6xl font-extrabold text-green-700">
        {String(value).padStart(2, "0")}
      </div>

      <div className="mt-3 text-sm font-semibold uppercase tracking-widest text-gray-500">
        {label}
      </div>
    </div>
  );
}