import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ayesha Patel — Software Engineer",
  description:
    "Portfolio of Ayesha Patel — Software Engineer, backend developer, and ONGC Scholar specialising in databases, AI/ML, and full-stack development.",
  openGraph: {
    title: "Ayesha Patel — Software Engineer",
    description:
      "Software Engineer & full-stack developer. Currently at Jeavio, previously ONGC & Legasis.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-white text-stone-900 overflow-x-hidden">{children}</body>
    </html>
  );
}
