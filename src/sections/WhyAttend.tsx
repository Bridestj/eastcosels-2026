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
    <section id="why-attend"className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <p className="font-bold uppercase tracking-[0.4em] text-green-600">
            Why Attend
          </p>

          <h2 className="mt-4 text-5xl font-extrabold text-gray-900">
            Why Attend EASTCOSELS 2026?
          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
              >

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">

                  <Icon className="h-8 w-8 text-green-700" />

                </div>

                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  {feature.title}
                </h3>

                <p className="leading-7 text-gray-600">
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