import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/[lang]/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "studio Cauris",
  description: "Graphic Designer",
};

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "fr" }];
}
export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: "en" | "fr" }>;
}>) {
  return (
    <html
      lang={(await params).lang}
      data-theme="light"
      suppressHydrationWarning
    >
      <head>
        <meta property="description" content="Graphic Designer" />
        <meta property="og:description" content="Graphic Designer" />
        <meta property="og:url" content="studio-cauris.com" />
        <meta property="og:title" content="Studio Cauris" />
        <meta property="twitter:title" content="Studio Cauris" />
        <meta property="twitter:description" content="Graphic Designer" />
        <meta property="twitter:image" content="" />
        <meta property="twitter:card" content="summary" />
        <title>Studio Cauris</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Footer lang={(await params).lang} />
        </ThemeProvider>
      </body>
    </html>
  );
}
