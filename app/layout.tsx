import type { Metadata } from "next";
import { Geist, Syne, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Jashanpreet Singh | Student. Builder. Problem Solver.",
  description:
    "Portfolio of Jashanpreet Singh, a high school student passionate about physics, math, and building things with code.",
  keywords: [
    "developer",
    "portfolio",
    "student",
    "web development",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Jashanpreet Singh" }],
  openGraph: {
    title: "Jashanpreet Singh | Student. Builder. Problem Solver.",
    description:
      "Portfolio of Jashanpreet Singh, a high school student passionate about physics, math, and building things with code.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${syne.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider delayDuration={200}>
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
