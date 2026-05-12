import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import type { PropsWithChildren } from "react";
import Navbar from "#/components/navbar.tsx";
import { ThemeProvider } from "#/components/theme-provider.tsx";
import { TooltipProvider } from "#/components/ui/tooltip.tsx";
import appCss from "#/styles.css?url";

const siteUrl = "https://leventeotta.com";
const title = "Levente Otta's Portfolio";
const description = "Fullstack web developer with almost 10 years of experience using Laravel, NestJS and ReactJS.";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title },
      { name: "description", content: description },
      { name: "author", content: "Levente Otta" },
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
      { property: "og:type", content: "website" },

      { property: "twitter:url", content: siteUrl },
      { property: "twitter:title", content: title },
      { property: "twitter:description", content: description },
      { property: "twitter:image", content: `${siteUrl}/og.png` },
      { property: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", sizes: "16x16 32x32" },
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
        }),
      },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument(props: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning className="font-mono">
      <head>
        <HeadContent />
      </head>
      <body className="mb-24 bg-background text-foreground antialiased">
        <ThemeProvider defaultTheme="system" storageKey="theme">
          <div className="prose dark:prose-invert prose-lg mx-auto prose-h2:mt-0 prose-h3:border-b prose-ul:marker:text-primary">
            <TooltipProvider>
              <Navbar />
              {props.children}
            </TooltipProvider>
          </div>
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
