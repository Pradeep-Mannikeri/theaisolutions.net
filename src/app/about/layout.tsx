import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | AI Solutions | Tech & Fintech Development Partner",
  description:
    "Discover AI Solutions, a premier technology firm based in Dubai. We specialize in fintech, AI, cybersecurity, data analytics, and digital transformation.",
  keywords:
    "AI Solutions company, about AI Solutions, fintech developers Dubai, tech transformation partner",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | AI Solutions | Tech & Fintech Development Partner",
    description:
      "Discover AI Solutions, a premier technology firm based in Dubai. We specialize in fintech, AI, cybersecurity, data analytics, and digital transformation.",
    url: "https://theaisolutions.net/about",
    siteName: "AI Solutions",
    images: [
      {
        url: "/assets/images/logo.png",
        width: 1200,
        height: 630,
        alt: "About AI Solutions",
      },
    ],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
