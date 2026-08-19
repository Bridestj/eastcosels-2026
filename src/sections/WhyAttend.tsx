import {
  GraduationCap,
  Users,
  Lightbulb,
  Award,
  ScrollText,
} from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Learn from Experts",
    text: "Gain valuable insights from renowned scholars, researchers and keynote speakers.",
  },
  {
    icon: Users,
    title: "Build Your Network",
    text: "Meet students, lecturers and professionals from universities across the country.",
  },
  {
    icon: Lightbulb,
    title: "Research & Innovation",
    text: "Discover new ideas, research trends and innovative approaches in literary studies.",
  },
  {
    icon: Award,
    title: "Academic Excellence",
    text: "Participate in an environment that promotes scholarship, leadership and excellence.",
  },
  {
    icon: ScrollText,
    title: "Certificate",
    text: "Receive an official certificate of participation to recognize your attendance.",
  },
];

export default function WhyAttend() {
  return (
    <section
      id="why-attend"
      className="bg-gray-50 py-16 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Heading */}
        <div className="mb-10 text-center sm:mb-16">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-600 sm:text-base sm:tracking-[0.4em]">
            Why Attend
          </p>

          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-gray-900 sm:mt-4 sm:text-4xl md:text-5xl">
            Why Attend EASTCOSELS 2026?
          </h2>

        </div>

        {/* Features */}
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl sm:p-8"
              >

                {/* Icon */}
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 sm:mb-6 sm:h-16 sm:w-16">
                  <Icon className="h-7 w-7 text-green-700 sm:h-8 sm:w-8" />
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-bold text-gray-900 sm:mb-4 sm:text-2xl">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-base leading-7 text-gray-600">
                  {feature.text}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}