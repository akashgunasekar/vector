import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import { SITE_CONFIG } from "@/data/company";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
  title: {
    default: "Vector Food Equipments | Complete Commercial Kitchen Solutions",
    template: "%s | Vector Food Equipments",
  },
  description:
    "Vector Food Equipments specializes in commercial and industrial kitchen solutions: kitchen planning, 2D/3D layouts, BOQ formulation, SS fabrication, equipment supply, and technical service support.",
  keywords: [
    "Vector Food Equipments",
    "commercial kitchen equipment",
    "commercial kitchen solutions",
    "industrial kitchen equipment",
    "commercial kitchen planning",
    "commercial kitchen layout",
    "commercial kitchen design",
    "kitchen BOQ",
    "stainless steel fabrication",
    "hotel kitchen equipment",
    "restaurant kitchen equipment",
    "catering equipment",
  ],
  authors: [{ name: "Vector Food Equipments" }],
  creator: "Vector Food Equipments",
  publisher: "Maxwell Group",
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
  openGraph: {
    title: "Vector Food Equipments | Complete Commercial Kitchen Solutions",
    description:
      "From kitchen planning & design to equipment supply, custom SS fabrication and technical support.",
    url: SITE_CONFIG.domain,
    siteName: "Vector Food Equipments",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero_commercial_kitchen.jpg",
        width: 1200,
        height: 630,
        alt: "Vector Food Equipments Commercial Kitchen Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vector Food Equipments | Complete Commercial Kitchen Solutions",
    description:
      "Planning, design, equipment supply, SS fabrication, and technical support for professional commercial kitchens.",
    images: ["/images/hero_commercial_kitchen.jpg"],
  },
  icons: {
    icon: "/brands/vector-official-logo.png",
    apple: "/brands/vector-official-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable} bg-white text-slate-900 scroll-smooth`}>
      <head>
        {/* Organization Structured Data Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: SITE_CONFIG.name,
              url: SITE_CONFIG.domain,
              logo: `${SITE_CONFIG.domain}/brands/vector-official-logo.png`,
              description: SITE_CONFIG.description,
              parentOrganization: {
                "@type": "Organization",
                name: SITE_CONFIG.parentGroup,
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: SITE_CONFIG.contact.phone.split("/")[0].trim(),
                contactType: "sales and technical support",
                areaServed: "IN",
                availableLanguage: ["English", "Hindi", "Tamil"],
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "PKM Industrial Complex, Mel Ayanambakkam",
                addressLocality: "Chennai",
                postalCode: "600095",
                addressRegion: "Tamil Nadu",
                addressCountry: "IN",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased selection:bg-red-500 selection:text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <QuoteModal />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
