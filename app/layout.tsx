import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";

export const metadata: Metadata = {
  title: "Joshua Wehunt | Web Designer & Full-Stack Developer",
  description: "Full-stack developer specializing in building modern, responsive web applications with React, Next.js, and Node.js. View my portfolio and get in touch for your next project.",
  keywords: [
    "Joshua Wehunt",
    "web developer",
    "full-stack developer",
    "web designer",
    "React developer",
    "Next.js developer",
    "portfolio",
    "frontend developer",
    "backend developer",
    "TypeScript",
    "Tailwind CSS"
  ],
  authors: [{ name: "Joshua Wehunt" }],
  creator: "Joshua Wehunt",
  publisher: "Joshua Wehunt",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://joshuawehunt.netlify.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Joshua Wehunt | Web Designer & Full-Stack Developer",
    description: "Full-stack developer specializing in building modern, responsive web applications. View my portfolio and projects.",
    url: 'https://joshuawehunt.netlify.app',
    siteName: "Joshua Wehunt Portfolio",
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Joshua Wehunt Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Joshua Wehunt | Web Designer & Full-Stack Developer",
    description: "Full-stack developer specializing in building modern, responsive web applications.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
