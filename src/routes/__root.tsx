import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import type { PropsWithChildren } from "react";
import Navbar from "#/components/navbar.tsx";
import { ThemeProvider } from "#/components/theme-provider.tsx";
import { buttonVariants } from "#/components/ui/button.tsx";
import { TooltipProvider } from "#/components/ui/tooltip.tsx";
import { cn } from "#/lib/utils.ts";
import appCss from "#/styles.css?url";

const siteUrl = "https://leventeotta.com";
const title = "Levente Otta, Senior Fullstack Developer in Budapest";
const description =
  "Levente Otta (Otisz) is a Senior Fullstack Developer in Budapest, building CRM, ERP and SaaS platforms with Laravel, NestJS and React since 2017.";

const person = {
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: "Levente Otta",
  alternateName: "Otisz",
  jobTitle: "Senior Fullstack Developer",
  description,
  url: siteUrl,
  image: `${siteUrl}/me_4x.jpeg`,
  email: "leventeotta@gmail.com",
  homeLocation: {
    "@type": "Place",
    address: { "@type": "PostalAddress", addressLocality: "Budapest", addressCountry: "HU" },
  },
  nationality: { "@type": "Country", name: "Hungary" },
  knowsLanguage: ["hu", "en"],
  knowsAbout: ["PHP", "Laravel", "Node.js", "NestJS", "React", "TypeScript", "PostgreSQL", "Docker"],
  worksFor: { "@type": "Organization", name: "Bit Different Ltd." },
  alumniOf: [
    { "@type": "EducationalOrganization", name: "BMSZC Petrik Lajos Két Tanítási Nyelvű Technikum" },
    { "@type": "EducationalOrganization", name: "BMSZC Bláthy Ottó Titusz Informatikai Szakgimnáziuma" },
  ],
  sameAs: [
    "https://github.com/Otisz",
    "https://www.linkedin.com/in/leventeotta/",
    "https://stackoverflow.com/users/7991098/levente-otta",
    "https://packagist.org/packages/otisz/",
  ],
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Levente Otta",
      inLanguage: "en",
      publisher: { "@id": person["@id"] },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profile`,
      url: siteUrl,
      name: title,
      isPartOf: { "@id": `${siteUrl}/#website` },
      mainEntity: person,
    },
  ],
};

const icons = [
  { rel: "icon", href: "/favicon.ico", sizes: "16x16 32x32 48x48" },
  { rel: "icon", href: "/icon.svg", type: "image/svg+xml" },
  { rel: "icon", href: "/icon1.png", sizes: "16x16", type: "image/png" },
  { rel: "icon", href: "/icon2.png", sizes: "32x32", type: "image/png" },
  { rel: "icon", href: "/icon3.png", sizes: "192x192", type: "image/png" },
  { rel: "icon", href: "/icon4.png", sizes: "512x512", type: "image/png" },
  { rel: "apple-touch-icon", href: "/apple-icon.png", sizes: "512x512" },
  { rel: "manifest", href: "/manifest.json" },
];

export const Route = createRootRoute({
  head: ({ matches }) => {
    const base = [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Levente Otta" },
    ];

    if (matches.some((match) => match._notFound || match.status === "notFound")) {
      return {
        meta: [...base, { title: "Page not found | Levente Otta" }, { name: "robots", content: "noindex" }],
        links: [{ rel: "stylesheet", href: appCss }, ...icons],
      };
    }

    return {
      meta: [
        ...base,
        { title },
        { name: "description", content: description },

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
      links: [{ rel: "stylesheet", href: appCss }, { rel: "canonical", href: siteUrl }, ...icons],
      scripts: [{ type: "application/ld+json", children: JSON.stringify(structuredData) }],
    };
  },
  notFoundComponent: NotFound,
  shellComponent: RootDocument,
});

function RootDocument(props: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        <meta name="theme-color" content="#f9fafb" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#030712" media="(prefers-color-scheme: dark)" />
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

function NotFound() {
  return (
    <main className="mx-auto flex min-h-[calc(100dvh-4rem)] max-w-6xl flex-col justify-center px-4 md:px-8">
      <p className="font-mono text-muted-foreground text-xl">404</p>
      <h1 className="mt-2 font-bold font-mono text-4xl text-brand tracking-tight md:text-5xl">Page not found</h1>
      <p className="mt-6 text-lg text-muted-foreground">The page you are looking for does not exist.</p>
      <a href="/" className={cn(buttonVariants(), "mt-8 h-11 w-fit px-5 font-mono text-sm")}>
        Back to the homepage
      </a>
    </main>
  );
}
