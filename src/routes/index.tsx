import { CaretDownIcon, EnvelopeSimpleIcon, FilePdfIcon } from "@phosphor-icons/react/ssr";
import { createFileRoute } from "@tanstack/react-router";
import type { CSSProperties, PropsWithChildren } from "react";
import type { SimpleIcon } from "simple-icons";
import { siDocker, siLaravel, siNestjs, siPostgresql, siReact, siTypescript } from "simple-icons";
import { TechLogo } from "#/components/tech-logo.tsx";
import { buttonVariants } from "#/components/ui/button.tsx";
import { Tooltip, TooltipContent, TooltipTrigger } from "#/components/ui/tooltip.tsx";
import { cn } from "#/lib/utils.ts";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [
      {
        rel: "preload",
        as: "image",
        type: "image/avif",
        imageSrcSet: portraitSrcSet("avif"),
        imageSizes: portraitSizes,
        fetchPriority: "high",
      },
    ],
  }),
  component: Home,
});

const portraitSizes = "(min-width: 768px) 384px, 288px";

function portraitSrcSet(format: "avif" | "webp" | "jpeg") {
  return `/me_1x.${format} 240w, /me_2x.${format} 480w, /me_3x.${format} 960w, /me_4x.${format} 1610w`;
}

const inlineLink = "underline decoration-primary underline-offset-4 transition-colors hover:text-brand";

const cta = "h-11 gap-2 px-5 font-mono text-sm transition-transform active:scale-[0.98]";

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Stack />
      <ExperienceSection />
      <Education />
      <Contact />
    </main>
  );
}

function Hero() {
  return (
    <section className="mx-auto grid min-h-[calc(100dvh-4rem)] max-w-6xl grid-cols-1 items-center gap-12 px-4 py-16 md:grid-cols-12 md:px-8 md:py-12">
      <div className="md:col-span-7">
        <h1 className="font-mono tracking-tight">
          <span className="enter block text-muted-foreground text-xl md:text-2xl" style={{ "--i": 0 } as CSSProperties}>
            Hello, I'm
          </span>{" "}
          <span
            className="enter mt-2 block font-bold text-5xl text-brand leading-[1.05] sm:text-6xl lg:text-7xl"
            style={{ "--i": 1 } as CSSProperties}
          >
            Levente Otta
          </span>
        </h1>
        <p
          className="enter mt-6 max-w-[42ch] text-lg text-muted-foreground leading-relaxed md:text-xl"
          style={{ "--i": 2 } as CSSProperties}
        >
          Senior Fullstack Developer in Budapest. Nearly 10 years building scalable{" "}
          <TextTooltip text="CRM" description="Customer Relationship Management" />,{" "}
          <TextTooltip text="ERP" description="Enterprise Resource Planning" /> and{" "}
          <TextTooltip text="PMS" description="Property Management Software" /> platforms with Laravel, NestJS and
          React.
        </p>
        <div className="enter mt-8 flex flex-wrap gap-3" style={{ "--i": 3 } as CSSProperties}>
          <ContactButtons />
        </div>
      </div>
      <div className="enter md:col-span-5 md:justify-self-end" style={{ "--i": 2 } as CSSProperties}>
        <div className="relative mx-auto w-64 sm:w-72 md:w-[min(24rem,calc((100dvh-8rem)*0.75))]">
          <div aria-hidden="true" className="absolute inset-0 translate-x-3 translate-y-3 bg-primary" />
          <picture>
            <source type="image/avif" srcSet={portraitSrcSet("avif")} sizes={portraitSizes} />
            <source type="image/webp" srcSet={portraitSrcSet("webp")} sizes={portraitSizes} />
            <img
              srcSet={portraitSrcSet("jpeg")}
              sizes={portraitSizes}
              src="/me_2x.jpeg"
              alt="Levente Otta, Senior Fullstack Developer"
              width={480}
              height={640}
              fetchPriority="high"
              className="relative aspect-3/4 w-full border border-foreground/10 object-cover"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section title="About">
      <div className="mt-8 max-w-[70ch] space-y-5 text-lg leading-relaxed">
        <p>
          I'm Levente Otta, known online as Otisz, a Senior Fullstack Developer based in Budapest, Hungary. I have been
          building web applications professionally since 2017, and I currently work at Bit Different on{" "}
          <a href="https://myplan.cloud" target="_blank" rel="noopener" className={inlineLink}>
            myPlan.cloud
          </a>
          , a construction project management platform.
        </p>
        <p>
          Most of my work is business software: CRM, ERP and property management platforms, insurance and donation
          systems, and an AI-powered customer service chatbot. On the backend I mainly use PHP with Laravel and Node.js
          with NestJS. On the frontend I work with React and TypeScript, as well as Vue.js and Svelte.
        </p>
        <p>
          I have led the architecture and full rewrite of a legacy application into a multi-tenant platform, designed
          microservice backends, and set standards for testing, code quality and CI/CD. I also review code, mentor
          junior developers, and maintain open-source Laravel packages such as{" "}
          <a
            href="https://packagist.org/packages/otisz/laravel-imgix"
            target="_blank"
            rel="noopener"
            className={inlineLink}
          >
            laravel-imgix
          </a>{" "}
          and{" "}
          <a
            href="https://packagist.org/packages/otisz/laravel-billingo"
            target="_blank"
            rel="noopener"
            className={inlineLink}
          >
            laravel-billingo
          </a>
          .
        </p>
      </div>
    </Section>
  );
}

function Section(props: PropsWithChildren<{ title: string; className?: string }>) {
  return (
    <section className="reveal mx-auto max-w-6xl px-4 md:px-8">
      <div className={cn("border-t py-20 md:py-24", props.className)}>
        <h2 className="font-bold font-mono text-3xl tracking-tight md:text-4xl">{props.title}</h2>
        {props.children}
      </div>
    </section>
  );
}

const coreTech: { name: string; icon: SimpleIcon }[] = [
  { name: "Laravel", icon: siLaravel },
  { name: "NestJS", icon: siNestjs },
  { name: "TypeScript", icon: siTypescript },
  { name: "ReactJS", icon: siReact },
  { name: "PostgreSQL", icon: siPostgresql },
  { name: "Docker", icon: siDocker },
];

const skillGroups: { title: string; rows: [string, string][] }[] = [
  {
    title: "Backend & Data",
    rows: [
      ["Backend", "PHP, Laravel, NodeJS, ExpressJS, NestJS, REST API"],
      ["Database", "MySQL, PostgreSQL, SQLite, Redis"],
      ["ORM", "Eloquent, Prisma, Drizzle"],
    ],
  },
  {
    title: "Frontend, Mobile & Design",
    rows: [
      ["Frontend", "JavaScript & TypeScript, ReactJS & NextJS, VueJS, Svelte, TailwindCSS, WebSockets"],
      ["Mobile", "React Native, Capacitor"],
      ["State management", "TanStack Query, Form, Store"],
      ["Design", "UX/UI, Figma"],
    ],
  },
  {
    title: "Quality & Tooling",
    rows: [
      ["Testing", "PHPUnit, Pest, Vitest, Playwright"],
      ["Dev tools", "Git, GitHub, Vite, ESLint & Prettier, BiomeJS, Docker"],
      ["CI/CD", "GitHub Actions"],
    ],
  },
  {
    title: "Hosting & AI",
    rows: [
      ["Hosting", "AWS, Cloudflare, Vercel, Laravel Forge, Ubuntu"],
      ["AI tools", "Claude Code, JetBrains Junie, GitHub Copilot"],
    ],
  },
];

function Stack() {
  return (
    <Section title="Technologies & Skills">
      <ul className="mt-10 grid grid-cols-3 gap-px border bg-border md:grid-cols-6">
        {coreTech.map((tech) => (
          <li
            key={tech.name}
            className="group flex flex-col items-center gap-3 bg-background px-2 py-6 transition-colors hover:bg-muted"
          >
            <TechLogo
              icon={tech.icon}
              className="size-9 text-foreground/80 transition-transform duration-300 group-hover:-translate-y-0.5"
            />
            <span className="font-mono text-muted-foreground text-xs sm:text-sm">{tech.name}</span>
          </li>
        ))}
      </ul>
      <div className="mt-14 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="border-primary border-l-2 pl-3 font-mono font-semibold">{group.title}</h3>
            <dl className="mt-4 space-y-3">
              {group.rows.map(([label, value]) => (
                <div key={label}>
                  <dt className="font-mono text-muted-foreground text-sm">{label}</dt>
                  <dd className="mt-0.5 leading-relaxed">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
      <dl className="mt-14 grid grid-cols-1 gap-6 bg-muted p-6 md:grid-cols-[2fr_1fr_1fr] md:gap-10 md:p-8">
        <div>
          <dt className="font-mono font-semibold">Skills</dt>
          <dd className="mt-2 leading-relaxed">
            Fullstack Architecture & System Design, Frontend Engineering, Backend Development & API Design, Performance
            Optimization & Developer Experience, Leadership, Mentoring & Collaboration
          </dd>
        </div>
        <div>
          <dt className="font-mono font-semibold">Interest</dt>
          <dd className="mt-2 leading-relaxed">Workout, Basketball, Cycling, Gaming, Learning and Reading</dd>
        </div>
        <div>
          <dt className="font-mono font-semibold">Languages</dt>
          <dd className="mt-2 leading-relaxed">Hungarian (native), English (C1)</dd>
        </div>
      </dl>
    </Section>
  );
}

function ExperienceSection() {
  return (
    <Section title="Experience">
      <p className="mt-6 max-w-[65ch] text-lg text-muted-foreground leading-relaxed">
        I have been architecting projects, leading development and mentoring juniors.
      </p>
      <div className="mt-10">
        <Experience company="Bit Different Ltd." position="Senior Fullstack Developer" time="Sep. 2026 - Present">
          <p>
            At Bit Different, I work on myPlan.cloud, a cloud-based construction project management platform that brings
            task management, document management and{" "}
            <TextTooltip text="BIM" description="Building Information Modeling" /> model viewing into one place for
            construction teams.
          </p>
          <ul>
            <li>Building frontend features with Svelte.</li>
            <li>Working on the backend with PHP.</li>
            <li>Developing the mobile app with Capacitor.</li>
          </ul>
        </Experience>
        <Experience company="Bannerse" position="Senior Fullstack Developer" time="Mar. 2025 - Jan. 2026">
          <p>
            At Bannerse, I was responsible for leading the architecture and a full rewrite of a legacy Vue.js
            application into a scalable, multi-tenant platform. My focus was on delivering robust, maintainable systems
            and elevating developer standards.
          </p>
          <ul>
            <li>
              Directed architecture and execution of a complete rewrite, transforming a legacy codebase into a modern,
              multi-tenant solution.
            </li>
            <li>
              Built React applications using ReactJS and TanStack packages (Router, Query, Form, Store) for enhanced
              performance and maintainability.
            </li>
            <li>
              Integrated WebSockets to deliver real-time data to users, improving responsiveness and user engagement.
            </li>
            <li>
              Designed and implemented a microservice backend using Laravel and NestJS, ensuring scalability and
              modularity.
            </li>
            <li>
              Collaborated closely with designers, translating Figma designs into pixel-perfect, production-ready UIs
              and refining user flows for optimal UX.
            </li>
            <li>
              Established rigorous standards for testing, code quality, and CI/CD workflows, resulting in faster, more
              reliable deployments.
            </li>
            <li>
              Conducted code reviews and mentored team members on best practices to foster continuous improvement.
            </li>
          </ul>
        </Experience>
        <Experience company="Captiwate" position="Senior Fullstack Developer" time="Nov. 2024 - Dec. 2024">
          <p>At Captiwate, I contributed to the development of an AI-powered customer service chatbot solution.</p>
          <ul>
            <li>Engineered core backend and frontend components using Laravel and VueJS.</li>
            <li>
              Collaborated with the team to ensure seamless integration of AI features, enhancing customer support
              automation.
            </li>
          </ul>
        </Experience>
        <Experience company="TMRW Applications" position="Senior Fullstack Developer" time="Jul. 2020 - Sep. 2024">
          <p>
            During my tenure at TMRW Applications, I played a key role in designing, building, and maintaining web
            applications across diverse domains.
          </p>
          <ul>
            <li>
              Led planning, documentation, and delivery of multiple web applications, focusing on scalability and
              maintainability.
            </li>
            <li>Maintained and enhanced frontend applications for a PMS project utilizing VueJS.</li>
            <li>Developed new ReactJS and NextJS applications with TailwindCSS for modern, responsive UIs.</li>
            <li>Built REST API backends using Laravel and NestJS, supporting microservice architectures.</li>
            <li>
              Collaborated with frontend, backend, mobile, and DevOps teams to design and implement complex features.
            </li>
            <li>Established and maintained standards for code quality, testing, and CI/CD workflows.</li>
            <li>
              Conducted code reviews and mentored team members in best practices and modern development workflows.
            </li>
          </ul>
        </Experience>
      </div>
      <details className="group/details mt-4 border-t">
        <summary className="flex cursor-pointer list-none items-center justify-between py-6 font-mono font-semibold transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-ring [&::-webkit-details-marker]:hidden">
          Earlier roles
          <CaretDownIcon className="size-5 transition-transform duration-300 group-open/details:rotate-180" />
        </summary>
        <Experience company="Designatives" position="Medior Fullstack Developer" time="Jan. 2020 - Jun. 2020">
          <p>
            At Designatives, I contributed to building business-critical platforms for insurance management and
            donations.
          </p>
          <ul>
            <li>Participated in the development of an insurance management platform using Laravel and VueJS.</li>
            <li>Designed and launched a donation platform, leading backend development with Laravel.</li>
          </ul>
        </Experience>
        <Experience company="Codebuild" position="Medior Developer" time="Jun. 2018 - Nov. 2019">
          <p>At Codebuild, I focused on CRM/ERP solutions and deepened my expertise in fullstack development.</p>
          <ul>
            <li>Developed CRM/ERP applications using Laravel and VueJS.</li>
            <li>
              Worked closely with senior developers to master component-based architecture and modern ReactJS frontend
              practices.
            </li>
          </ul>
        </Experience>
        <Experience company="UniOffice" position="Junior Developer" time="May 2017 - Apr. 2018">
          <p>As a Junior Developer, I collaborated with senior engineers on an RSVP system.</p>
          <ul>
            <li>
              Assisted in building features and learned foundational software development skills in a collaborative team
              environment.
            </li>
          </ul>
        </Experience>
        <Experience company="Foltnet" position="Trainee" time="Jun. 2016 - Jul. 2016">
          <p>Developing a bug reporting module for an existing custom CMS system.</p>
        </Experience>
      </details>
    </Section>
  );
}

function Education() {
  return (
    <Section title="Education">
      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="border-primary border-t-2 pt-5">
          <time className="font-mono text-muted-foreground text-sm">Jul. 2017</time>
          <h3 className="mt-2 font-mono font-semibold text-lg">Software developer Associate degree</h3>
          <p className="mt-1 text-muted-foreground">BMSZC Petrik Lajos Két Tanítási Nyelvű Technikum</p>
          <p className="mt-4">Java, Java Android, C#, PHP and SQL</p>
        </div>
        <div className="border-t-2 pt-5">
          <time className="font-mono text-muted-foreground text-sm">2010 - 2015</time>
          <h3 className="mt-2 font-mono font-semibold text-lg">Graduation</h3>
          <p className="mt-1 text-muted-foreground">BMSZC Bláthy Ottó Titusz Informatikai Szakgimnáziuma</p>
        </div>
      </div>
    </Section>
  );
}

function ContactButtons() {
  return (
    <>
      <a
        href="https://assets.leventeotta.com/documents/Levente%20Otta%20CV.pdf"
        target="_blank"
        rel="noopener"
        aria-label="Download CV / Resume"
        className={cn(buttonVariants(), cta, "hover:bg-primary/90")}
      >
        <FilePdfIcon className="size-5" /> CV / Resume
      </a>
      <a href="mailto:leventeotta@gmail.com" className={cn(buttonVariants({ variant: "outline" }), cta)}>
        <EnvelopeSimpleIcon className="size-5" /> Email
      </a>
    </>
  );
}

function Contact() {
  return (
    <Section title="Contact" className="pb-32 md:pb-40">
      <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <p className="max-w-[40ch] text-lg text-muted-foreground leading-relaxed md:text-xl">
          I'm currently not available for new roles.
        </p>
        <div className="flex flex-wrap gap-3">
          <ContactButtons />
        </div>
      </div>
    </Section>
  );
}

function TextTooltip(props: { text: string; description: string }) {
  return (
    <Tooltip>
      <TooltipTrigger className="cursor-help underline decoration-2 decoration-primary decoration-dotted underline-offset-4">
        {props.text}
      </TooltipTrigger>
      <TooltipContent>{props.description}</TooltipContent>
    </Tooltip>
  );
}

function Experience(props: PropsWithChildren<{ company: string; position: string; time: string }>) {
  return (
    <article className="grid grid-cols-1 gap-3 border-t py-10 md:grid-cols-12 md:gap-8">
      <div className="md:col-span-3">
        <div className="md:sticky md:top-24">
          <time className="block font-mono text-muted-foreground text-sm">{props.time}</time>
          <p className="mt-1 font-mono font-semibold">{props.company}</p>
        </div>
      </div>
      <div className="md:col-span-9">
        <h3 className="font-mono font-semibold text-xl">
          {props.position}
          <span className="sr-only"> at {props.company}</span>
        </h3>
        {props.children && (
          <div className="mt-4 space-y-5 leading-relaxed [&_li]:relative [&_li]:pl-5 [&_li]:before:absolute [&_li]:before:top-[0.6em] [&_li]:before:left-0 [&_li]:before:size-1.5 [&_li]:before:bg-primary [&_p]:max-w-[65ch] [&_ul]:grid [&_ul]:gap-x-10 [&_ul]:gap-y-3 lg:[&_ul]:grid-cols-2">
            {props.children}
          </div>
        )}
      </div>
    </article>
  );
}
