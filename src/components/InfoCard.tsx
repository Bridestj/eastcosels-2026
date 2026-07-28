type InfoCardProps = {
  icon: string;
  title: string;
  text: string;
};

export default function InfoCard({
  icon,
  title,
  text,
}: InfoCardProps) {
  return (
    <div className="rounded-2xl border border-green-100 bg-white p-8 shadow-md transition hover:-translate-y-2 hover:shadow-xl">
      <div className="text-5xl">{icon}</div>

      <h3 className="mt-5 text-2xl font-bold text-green-700">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-gray-600">
        {text}
      </p>
    </div>
  );
}