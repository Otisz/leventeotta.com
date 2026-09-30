import { FilePdfIcon, GithubLogoIcon, LinkedinLogoIcon, MapPinIcon } from "@phosphor-icons/react/ssr";
import { createFileRoute } from "@tanstack/react-router";
import type { PropsWithChildren, ReactNode } from "react";
import LaravelLogoIcon from "#/components/svg/laravel.tsx";
import NestJSLogoIcon from "#/components/svg/nestjs.tsx";
import ReactJSLogoIcon from "#/components/svg/reactjs.tsx";
import TailwindLogoIcon from "#/components/svg/tailwind.tsx";
import TypeScriptLogoIcon from "#/components/svg/typescript.tsx";
import VueJSLogoIcon from "#/components/svg/vuejs.tsx";
import { buttonVariants } from "#/components/ui/button.tsx";
import { Tooltip, TooltipContent, TooltipTrigger } from "#/components/ui/tooltip.tsx";
import { cn } from "#/lib/utils.ts";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main className="container flex flex-col items-center p-4">
      <section className="max-w-none">
        <h1 className="text-balance text-center">
          Hello, I'm
          <br />
          <span className="text-orange-500 text-shadow-foreground text-shadow-xs dark:text-shadow-none">
            Levente Otta
          </span>
        </h1>
        <p className="flex w-full flex-col items-center gap-4 md:flex-row">
          <span className="text-muted-foreground">
            <MapPinIcon className="inline animate-bounce" alt="Located in" /> Budapest, Hungary
          </span>
        </p>
      </section>
      <section className="flex flex-col gap-8 md:flex-row md:justify-center">
        <div className="flex flex-col gap-4">
          <img
            srcSet="/me_1x.jpeg, /me_2x.jpeg 1.5x, /me_3x.jpeg 2x"
            src="/me_4x.jpeg"
            alt="Levente Otta"
            className="my-0! w-50 self-center border-6 border-border object-cover md:self-start"
            width={160}
            height={160}
          />
          <div className="not-prose grid grid-rows-2 gap-4 md:grid-rows-1">
            <a
              href="https://github.com/Otisz"
              target="_blank"
              className={buttonVariants({ variant: "secondary" })}
              rel="noopener"
            >
              <GithubLogoIcon className="inline" /> Github
            </a>
            <a
              href="https://www.linkedin.com/in/leventeotta/"
              target="_blank"
              className={buttonVariants({ variant: "secondary" })}
              rel="noopener"
            >
              <LinkedinLogoIcon className="inline" /> LinkedIn
            </a>
            <a
              href="https://assets.leventeotta.com/documents/Levente%20Otta%20CV.pdf"
              target="_blank"
              className={cn(buttonVariants({ variant: "secondary" }), "col-span-2 md:col-span-1")}
              rel="noopener"
            >
              <FilePdfIcon className="inline" /> CV / Resume
            </a>
          </div>
        </div>
        <div className="flex-1">
          <h2>Senior Fullstack Developer</h2>
          <p>
            Nearly 10 years of experience in web development using Laravel and NestJs on the backend, with ReactJS and
            VueJS on the frontend.
          </p>
          <p>
            Specialized on scalable, performant and secure{" "}
            <TextTooltip text="CRM" description="Company Relationship Management" />,{" "}
            <TextTooltip text="ERP" description="Enterprise Resource Planning" /> and{" "}
            <TextTooltip text="PMS" description="Property Management Software" /> applications.
          </p>
          <p>I have been architecting projects, leading development and mentoring juniors.</p>
        </div>
      </section>
      <section className="w-full-">
        <h3>Technologies & Skills</h3>
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          <Technology name="Laravel" description="Backend Framework" logo={<LaravelLogoIcon />} />
          <Technology name="NestJS" description="Backend Framework" logo={<NestJSLogoIcon />} />
          <Technology name="ReactJS" description="Frontend Framework" logo={<ReactJSLogoIcon />} />
          <Technology name="VueJS" description="Frontend Framework" logo={<VueJSLogoIcon />} />
          <Technology name="TypeScript" description="JS with types" logo={<TypeScriptLogoIcon />} />
          <Technology name="TailwindCSS" description="UI Framework" logo={<TailwindLogoIcon />} />
        </div>
        <ul>
          <li>
            <strong>Backend:</strong> PHP, Laravel, NodeJS, ExpressJS, NestJS, REST API
          </li>
          <li>
            <strong>Database:</strong> MySql, PostgreSQL, SQLite, Redis, ORM (Eloquent, Prisma, Drizzle)
          </li>
          <li>
            <strong>Frontend:</strong> Javascript & Typescript, ReactJS & NextJS, VueJS, TailwindCSS, WebSockets
          </li>
          <li>
            <strong>State management:</strong> TanStack Query, Form, Store
          </li>
          <li>
            <strong>Design:</strong> UX/UI, Figma ○ Testing: PHPUnit, Pest, Vitest, Playwright
          </li>
          <li>
            <strong>Dev tools:</strong> Git, Github, Vite, ESLint & Prettier, BiomeJS, Docker
          </li>
          <li>
            <strong>CI/CD:</strong> Github Actions
          </li>
          <li>
            <strong>Hosting:</strong> AWS, Cloudflare, Vercel, Laravel Forge, Ubuntu
          </li>
          <li>
            <strong>AI tools:</strong> Claude Code, JetBrains Junie, Github Copilot
          </li>
        </ul>
        <p>
          <strong>Skills:</strong> Fullstack Architecture & System Design, Frontend Engineering, Backend Development &
          API Design, Performance Optimization & Developer Experience, Leadership, Mentoring & Collaboration
        </p>
        <p>
          <strong>Interest:</strong> Workout, Basketball, Cycling, Gaming, Learning and Reading
        </p>
      </section>
      <section>
        <h3>Experience</h3>
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
      </section>
      <section className="w-full">
        <h3>Education</h3>
        <Experience
          company="BMSZC Petrik Lajos Két Tanítási Nyelvű Technikum"
          position="Software developer Associate degree"
          time="Jul. 2017"
        >
          <ul>
            <li>Java, Java Android, C#, PHP and SQL</li>
          </ul>
        </Experience>
        <Experience
          company="BMSZC Bláthy Ottó Titusz Informatikai Szakgimnáziuma"
          position="Graduation"
          time="2010 - 2015"
        />
      </section>
    </main>
  );
}

function TextTooltip(props: { text: string; description: string }) {
  return (
    <Tooltip>
      <TooltipTrigger className="underline decoration-3 decoration-dotted underline-offset-4">
        {props.text}
      </TooltipTrigger>
      <TooltipContent>{props.description}</TooltipContent>
    </Tooltip>
  );
}

function Experience(props: PropsWithChildren<{ company: string; position: string; time: string }>) {
  return (
    <>
      <div className="flex flex-col">
        <h4 className="font-bold">{props.position}</h4>
        <div className="items-baseline-last flex flex-1 justify-between gap-4">
          <span className="text-muted-foreground">{props.company}</span>
          <time className="text-nowrap text-right text-muted-foreground text-sm">{props.time}</time>
        </div>
      </div>
      {props.children}
    </>
  );
}

function Technology(props: { name: string; description: string; logo: ReactNode }) {
  return (
    <div className="flex items-center gap-4 border-2 border-border px-2 py-4">
      <div className="w-16">{props.logo}</div>
      <div className="flex flex-col items-start">
        <span>{props.name}</span>
        <span className="text-muted-foreground text-sm">{props.description}</span>
      </div>
    </div>
  );
}
