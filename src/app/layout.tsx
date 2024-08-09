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
    default: "Levente Otta",
    template: "%s | Levente Otta",
  },
  description: "Generated by create next app",
};

type Props = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background bg-[radial-gradient(theme(colors.accent.DEFAULT)_2px,_transparent_25%)] bg-[length:40px_40px] bg-[position:-19px_-19px] font-sans antialiased",
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
