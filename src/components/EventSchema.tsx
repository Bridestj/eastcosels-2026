export default function EventSchema() {
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "EASTCOSELS 2026",
    description:
      "EASTCOSELS 2026 — International Conference for South East Students of English and Literary Studies.",
    startDate: "2026-08-30",
    endDate: "2026-09-02",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "University of Nigeria, Nsukka",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nsukka",
        addressRegion: "Enugu State",
        addressCountry: "NG",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "EASTCOSELS",
    },
    url: "https://eastcosels-2026-six.vercel.app/",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(eventSchema),
      }}
    />
  );
}