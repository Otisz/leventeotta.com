import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "@/components/providers";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { ReactNode } from "react";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Levente Otta's portfolio",
    template: "%s | Levente Otta's portfolio",
  },
  description: "Check out Levente Otta's portfolio who is a software engineer and a web developer for almost 10 years.",
  keywords: [
    "software engineer",
    "web developer",
    "portfolio",
    "levente otta",
    "leventeotta",
    "otisz",
    "otta",
    "web development",
    "php",
    "laravel",
    "react",
    "tailwindcss",
    "nextjs",
    "typescript",
    "javascript",
    "nodejs",
    "git",
    "github",
    "linkedin",
  ],
};

type Props = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background bg-[radial-gradient(theme(colors.accent.DEFAULT)_2px,_transparent_25%)] bg-[length:40px_40px] bg-fixed font-sans text-[100%] antialiased",
          fontSans.variable,
        )}
      >
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
