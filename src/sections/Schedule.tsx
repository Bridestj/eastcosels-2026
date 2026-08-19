export default function Schedule() {
  const schedule = [
    {
      day: "Day One",
      date: "August 30, 2026",
      activities: [
        "Registration & Check-in",
        "Opening Ceremony",
        "Keynote Address",
        "Research Paper Presentations",
        "Bonfire Night 🔥",
      ],
    },
    {
      day: "Day Two",
      date: "August 31, 2026",
      activities: [
        "Panel Discussion",
        "Sports Festival ⚽",
        "Pool Party 🏊",
        "Cultural Day 🎭",
        "Networking Dinner",
      ],
    },
    {
      day: "Day Three",
      date: "September 1, 2026",
      activities: [
        "Workshops",
        "Career Session",
        "Awards Ceremony 🏆",
        "Closing Ceremony",
        "Departure",
      ],
    },
  ];

  return (
    <section
      id="schedule"
      className="bg-gray-50 py-16 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Heading */}
        <div className="mb-10 text-center sm:mb-16">

          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Conference Schedule
          </h2>

          <p className="mt-3 text-lg font-medium text-green-600 sm:text-xl">
            Three-Day Conference Programme
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
            With power packed exciting activities planned...
          </p>

        </div>

        {/* Schedule Cards */}
        <div className="grid gap-6 md:grid-cols-3 md:gap-8">

          {schedule.map((day) => (

            <div
              key={day.day}
              className="rounded-3xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl sm:p-8"
            >

              {/* Day & Date */}
              <div className="mb-6">

                <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700">
                  {day.day}
                </span>

                <p className="mt-4 font-semibold text-gray-500">
                  {day.date}
                </p>

              </div>

              {/* Activities */}
              <ul className="space-y-4">

                {day.activities.map((activity) => (

                  <li
                    key={activity}
                    className="flex items-start gap-3 text-base leading-6 text-gray-700"
                  >
                    <span className="mt-0.5 shrink-0 text-xl font-bold text-green-600">
                      ✓
                    </span>

                    <span>{activity}</span>

                  </li>

                ))}

              </ul>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}