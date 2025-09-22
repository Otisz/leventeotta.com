import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/providers/theme-provider";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
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

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-[radial-gradient(var(--color-zinc-400)_1.1px,transparent_1.1px),radial-gradient(var(--color-zinc-400)_1.1px,var(--color-background)_1.1px)] bg-background bg-size-[0_0,22px_22px] bg-size-[44px_44px] font-sans antialiased dark:bg-[radial-gradient(var(--color-zinc-700)_1.1px,transparent_1.1px),radial-gradient(var(--color-zinc-700)_1.1px,var(--color-background)_1.1px)] ${inter.variable}`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
