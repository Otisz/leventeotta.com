import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/providers/theme-provider";
import "@/styles/globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    default: "Levente Otta's portfolio",
    template: "%s | Levente Otta's portfolio",
  },
  description:
    "Explore the portfolio of Levente Otta, a Senior Software Engineer specializing in building scalable, secure, and performant backend and frontend applications in Laravel and NextJs.",
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
  metadataBase: new URL("https://leventeotta.com"),
};

type Props = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className="bg-background antialiased" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
