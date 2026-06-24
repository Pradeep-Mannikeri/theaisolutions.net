import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | AI Solutions Dubai",
  description:
    "Get in touch with AI Solutions in Dubai. Reach out to discuss your software engineering, fintech, cybersecurity, or machine learning needs.",
  keywords:
    "contact AI Solutions, technology consulting Dubai, hire developers Dubai, software consulting inquiries",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | AI Solutions Dubai",
    description:
      "Get in touch with AI Solutions in Dubai. Reach out to discuss your software engineering, fintech, cybersecurity, or machine learning needs.",
    url: "https://theaisolutions.net/contact",
    siteName: "AI Solutions",
    images: [
      {
        url: "/assets/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Contact AI Solutions",
      },
    ],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
