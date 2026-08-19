type StatsCardProps = {
  title: string;
  value: string | number;
  icon: string;
};

export default function StatsCard({
  title,
  value,
  icon,
}: StatsCardProps) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg">
      <div className="text-4xl">{icon}</div>

      <h3 className="mt-4 text-gray-500">
        {title}
      </h3>

      <p className="mt-2 text-4xl font-bold text-green-700">
        {value}
      </p>
    </div>
  );
}