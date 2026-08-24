import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "EASTCOSELS 2026 | International Conference for South East Students of English and Literary Studies",
    template: "%s | EASTCOSELS 2026",
  },

  description:
    "EASTCOSELS 2026 is the International Conference for South East Students of English and Literary Studies, taking place from August 30 to September 2, 2026, at the University of Nigeria, Nsukka.",

  keywords: [
    "EASTCOSELS 2026",
    "EASTCOSELS",
    "EASTCOSELS conference",
    "English and Literary Studies conference",
    "Literary Studies conference Nigeria",
    "English Students conference Nigeria",
    "South East Students of English and Literary Studies",
    "NASELS",
    "NASELS South East",
    "University of Nigeria Nsukka conference",
    "UNN conference",
    "English conference Nigeria",
    "Literary conference Nigeria",
  ],

  authors: [
    {
      name: "EASTCOSELS 2026",
    },
  ],

  creator: "EASTCOSELS 2026",
  publisher: "EASTCOSELS 2026",

  applicationName: "EASTCOSELS 2026",

  alternates: {
    canonical: "/",
  },

  verification: {
    google: "uVXO1ZAJ4mUOI1CdxYEUd1__vzw1sx4Sf0Whkm4_kn8",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "/",
    siteName: "EASTCOSELS 2026",
    title:
      "EASTCOSELS 2026 | International Conference for South East Students of English and Literary Studies",
    description:
      "Join EASTCOSELS 2026 from August 30 to September 2, 2026, at the University of Nigeria, Nsukka, for an international conference bringing together students, scholars, researchers and lovers of English and Literary Studies.",
  },

  twitter: {
    card: "summary_large_image",
    title: "EASTCOSELS 2026",
    description:
      "International Conference for South East Students of English and Literary Studies — August 30 to September 2, 2026, University of Nigeria, Nsukka.",
  },

  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}