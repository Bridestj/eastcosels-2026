export default function Schedule() {
  const schedule = [
    {
      day: "Day One",
      date: "August 28, 2026",
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
      date: "August 29, 2026",
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
      date: "August 30, 2026",
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
    <section id="schedule" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <h2 className="text-4xl font-bold text-gray-900">
  Conference Schedule
</h2>

<p className="mt-3 text-xl font-medium text-green-600">
  Three-Day Conference Programme
</p>

<p className="mt-6 text-lg leading-8 text-gray-600">
  With power packed exciting activities planned...
</p>

          

        </div>

        <div className="grid gap-8 md:grid-cols-3">

          {schedule.map((day) => (

            <div
              key={day.day}
              className="rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
            >

              <div className="mb-6">

                <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700">
                  {day.day}
                </span>

                <p className="mt-4 font-semibold text-gray-500">
                  {day.date}
                </p>

              </div>

              <ul className="space-y-4">

                {day.activities.map((activity) => (

                  <li
                    key={activity}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <span className="text-xl text-green-600">
                      ✓
                    </span>

                    {activity}

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