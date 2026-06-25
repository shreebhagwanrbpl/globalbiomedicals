import Home from "../Home/page";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;

  const district = resolvedParams?.district || "jaipur";

  const city = district
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  const url = `https://globalbiomedical.in/${district}`;

  return {
    title: `Diagnostic Lab & Medical Equipment Supplier in ${city} | Global Biomedical`,

    description:
      `Global Biomedical is a trusted supplier of diagnostic laboratory equipment, medical analyzers, reagents, laboratory instruments, and healthcare solutions in ${city}. We provide quality products with reliable service and technical support.`,

    keywords: [
      `Diagnostic Lab ${city}`,
      `Medical Equipment ${city}`,
      `Laboratory Equipment ${city}`,
      `Biomedical Equipment ${city}`,
      `Medical Analyzer ${city}`,
      `Diagnostic Instruments ${city}`,
      `Laboratory Reagents ${city}`,
      `Hospital Equipment ${city}`,
      `Healthcare Solutions ${city}`,
      `Global Biomedical ${city}`,
    ],

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: `Diagnostic Lab & Medical Equipment Supplier in ${city} | Global Biomedical`,
      description:
        `Premium laboratory equipment, analyzers, reagents, and biomedical solutions in ${city}.`,
      url,
      siteName: "Global Biomedical",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: "https://globalbiomedical.in/og-image.jpg", // Replace with your actual OG image
          width: 1200,
          height: 630,
          alt: `Global Biomedical ${city}`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `Diagnostic Lab & Medical Equipment Supplier in ${city}`,
      description:
        `Trusted laboratory equipment and biomedical solutions in ${city}.`,
      images: ["https://globalbiomedical.in/og-image.jpg"], // Replace with your actual OG image
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-video-preview": -1,
        "max-snippet": -1,
      },
    },
  };
}

export default async function Page({ params }) {
  const resolvedParams = await params;

  const district = resolvedParams?.district || "jaipur";

  const city = district
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return <Home city={city} />;
}