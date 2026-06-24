import type { Metadata } from "next";
import { Funnel_Display } from "next/font/google";
import "./globals.css";

const funnel = Funnel_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-funnel",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://theaisolutions.net"),
  title: "AI Solutions | Smart Digital Solutions",
  description:
    "We partner with startups and enterprises to deliver impactful digital experiences from custom app and web development to cloud solutions, data analytics, machine learning, and full-scale digital marketing. Whatever your vision, we bring it to life with precision, creativity, and tech-driven strategy.",
  keywords:
    "AI solutions, custom web development, mobile app development, machine learning, data analytics, fintech development, cloud solutions, digital transformation, Dubai technology firm, cybersecurity, software engineering",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AI Solutions | Smart Digital Solutions",
    description:
      "We partner with startups and enterprises to deliver impactful digital experiences from custom app and web development to cloud solutions, data analytics, machine learning, and full-scale digital marketing.",
    url: "https://theaisolutions.net",
    siteName: "AI Solutions",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/images/logo.png",
        width: 1200,
        height: 630,
        alt: "AI Solutions Logo - Smart Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Solutions | Smart Digital Solutions",
    description:
      "We partner with startups and enterprises to deliver impactful digital experiences from custom app and web development to cloud solutions, data analytics, machine learning, and full-scale digital marketing.",
    images: ["/assets/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "AI Solutions",
  "image": "https://theaisolutions.net/assets/images/logo.png",
  "@id": "https://theaisolutions.net/#organization",
  "url": "https://theaisolutions.net",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dubai",
    "addressRegion": "Dubai",
    "addressCountry": "AE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 25.2048,
    "longitude": 55.2708
  },
  "sameAs": [
    "https://www.linkedin.com/company/ai-solutions-llc/",
    "https://www.instagram.com/aisolutions2025/"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={funnel.variable} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

