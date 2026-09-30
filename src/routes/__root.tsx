import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import type { PropsWithChildren } from "react";
import Navbar from "#/components/navbar.tsx";
import { ThemeProvider } from "#/components/theme-provider.tsx";
import { TooltipProvider } from "#/components/ui/tooltip.tsx";
import appCss from "#/styles.css?url";

const siteUrl = "https://leventeotta.com";
const title = "Levente Otta, Senior Fullstack Developer";
const description = "Fullstack web developer with almost 10 years of experience using Laravel, NestJS and ReactJS.";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title },
      { name: "description", content: description },
      { name: "author", content: "Levente Otta" },
      { name: "theme-color", content: "#f9fafb", media: "(prefers-color-scheme: light)" },
      { name: "theme-color", content: "#030712", media: "(prefers-color-scheme: dark)" },
      {
        name: "keywords",
        content: [
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
          "nestjs",
          "react",
          "reactjs",
          "tailwindcss",
          "typescript",
          "javascript",
          "nodejs",
          "git",
          "github",
          "linkedin",
        ].join(", "),
      },

      { property: "og:url", content: siteUrl },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: `${siteUrl}/og.png` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Levente Otta, Senior Fullstack Developer" },
      { property: "og:type", content: "website" },

      { property: "twitter:url", content: siteUrl },
      { property: "twitter:title", content: title },
      { property: "twitter:description", content: description },
      { property: "twitter:image", content: `${siteUrl}/og.png` },
      { property: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: siteUrl },
      { rel: "icon", href: "/favicon.ico", sizes: "16x16 32x32 48x48" },
      { rel: "icon", href: "/icon.svg", type: "image/svg+xml" },
      { rel: "icon", href: "/icon1.png", sizes: "16x16", type: "image/png" },
      { rel: "icon", href: "/icon2.png", sizes: "32x32", type: "image/png" },
      { rel: "icon", href: "/icon3.png", sizes: "192x192", type: "image/png" },
      { rel: "icon", href: "/icon4.png", sizes: "512x512", type: "image/png" },
      { rel: "apple-touch-icon", href: "/apple-icon.png", sizes: "512x512" },
      { rel: "manifest", href: "/manifest.json" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Levente Otta",
          jobTitle: "Senior Fullstack Developer",
          telephone: "+36 30 932 0409",
          url: siteUrl,
          email: "leventeotta@gmail.com",
          homeLocation: "Budapest, Hungary",
          nationality: "Hungarian",
          sameAs: ["https://github.com/Otisz", "https://www.linkedin.com/in/leventeotta/"],
        }),
      },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument(props: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="bg-background font-sans text-foreground antialiased">
        <ThemeProvider defaultTheme="system" storageKey="theme">
          <TooltipProvider>
            <Navbar />
            {props.children}
          </TooltipProvider>
        </ThemeProvider>
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
