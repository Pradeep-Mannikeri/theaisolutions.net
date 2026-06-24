import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | AI Solutions | Custom App, Web & AI Development",
  description:
    "Explore AI Solutions' tech services: Custom app/web development, machine learning, cloud scaling, cybersecurity, and data-driven marketing.",
  keywords:
    "custom software development, machine learning services, cloud solutions Dubai, web application development, cybersecurity services",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Our Services | AI Solutions | Custom App, Web & AI Development",
    description:
      "Explore AI Solutions' tech services: Custom app/web development, machine learning, cloud scaling, cybersecurity, and data-driven marketing.",
    url: "https://theaisolutions.net/services",
    siteName: "AI Solutions",
    images: [
      {
        url: "/assets/images/logo.png",
        width: 1200,
        height: 630,
        alt: "AI Solutions Services",
      },
    ],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
