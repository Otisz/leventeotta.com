import MeImage from "@/assets/images/me_small.jpeg";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Image from "next/image";
import { IconType } from "react-icons";
import { FaAws, FaLocationDot } from "react-icons/fa6";
import {
  SiBootstrap,
  SiCss3,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiPhp,
  SiReact,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVuedotjs,
} from "react-icons/si";

export default function HeadingSection() {
  return (
    <section className="grid auto-rows-max grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 2xl:grid-cols-8 2xl:grid-rows-2">
      <div className="prose max-w-none rounded-xl border-2 border-border bg-accent/30 p-4 dark:prose-invert md:col-span-3 lg:col-span-2 2xl:col-span-6">
        <h1 className="text-balance">
          Hello! 👋 My name is <span className="text-orange-500">Levente &quot;Otisz&quot; Otta</span>.
        </h1>
        <p className="flex items-center gap-2">
          <FaLocationDot className="inline-block" />
          <span>Budapest, Hungary.</span>
        </p>
        <p>
          I&apos;m a{" "}
          <span className="dark:bg-gradient-to-r dark:from-[#f05340] dark:via-[#61dbfb] dark:to-[#31aff6] dark:bg-clip-text dark:text-transparent">
            Full-Stack web developer
          </span>{" "}
          for almost 10 years.
        </p>
        <p>
          I specialized on high availability, scalable and performant{" "}
          <Popover>
            <PopoverTrigger
              className="cursor-help underline decoration-dotted underline-offset-4"
              title="Company Relationship Management"
            >
              CRM
            </PopoverTrigger>
            <PopoverContent className="w-auto">Company Relationship Management</PopoverContent>
          </Popover>
          ,{" "}
          <Popover>
            <PopoverTrigger
              className="cursor-help underline decoration-dotted underline-offset-4"
              title="Enterprise Resource Planning"
            >
              ERP
            </PopoverTrigger>
            <PopoverContent className="w-auto">Enterprise Resource Planning</PopoverContent>
          </Popover>{" "}
          and{" "}
          <Popover>
            <PopoverTrigger
              className="cursor-help underline decoration-dotted underline-offset-4"
              title="Property Management Software"
            >
              PMS
            </PopoverTrigger>
            <PopoverContent className="w-auto">Property Management Software</PopoverContent>
          </Popover>{" "}
          applications.
        </p>
      </div>
      <div className="relative hidden h-full rounded-xl border-2 border-orange-500 lg:block 2xl:col-span-2 2xl:row-span-2">
        <Image
          src={MeImage}
          alt="Levente Otta"
          className="mx-auto h-full w-auto rounded-xl object-cover object-top"
          priority
        />
      </div>
      <div className="prose max-w-none text-balance rounded-xl border-2 border-[#f05340] bg-accent/30 p-4 dark:prose-invert prose-a:text-orange-500 2xl:col-span-2">
        <h2>Backend</h2>
        <p>
          For backend I chose <TechnologyLink icon={SiPhp} href="https://php.net" text="PHP" /> and the{" "}
          <TechnologyLink icon={SiLaravel} href="https://laravel.com" text="Laravel" /> framework.
        </p>
        <p>I&apos;m open to learn NodeJS and Elixir.</p>
      </div>
      <div className="prose max-w-none text-balance rounded-xl border-2 border-[#61dbfb] bg-accent/30 p-4 dark:prose-invert prose-a:text-orange-500 2xl:col-span-2">
        <h2>Frontend</h2>
        <p>
          Primarily I&apos;m using <TechnologyLink icon={SiReact} href="https://react.dev" text="React" /> and{" "}
          <TechnologyLink icon={SiNextdotjs} href="https://nextjs.org" text="NextJS" />.
        </p>
        <p>
          I also know <TechnologyLink icon={SiVuedotjs} href="https://vuejs.org" text="VueJS" /> but I&apos;m not fan of
          it.
        </p>
      </div>
      <div className="prose max-w-none text-balance rounded-xl border-2 border-[#31aff6] bg-accent/30 p-4 dark:prose-invert prose-a:text-orange-500 2xl:col-span-2">
        <h2>UI</h2>
        <p>
          My go-to UI framework is{" "}
          <TechnologyLink icon={SiTailwindcss} href="https://tailwindcss.com" text="TailwindCSS" />.
        </p>
        <p>
          Before that I used <TechnologyLink icon={SiBootstrap} href="https://getbootstrap.com" text="Bootstrap" />.
        </p>
      </div>
      <div className="prose col-span-full max-w-none text-balance rounded-xl border-2 border-border bg-accent/30 p-4 dark:prose-invert prose-a:text-orange-500">
        <h2>Other technologies</h2>
        <div className="flex flex-wrap justify-between gap-4 text-nowrap">
          <div className="inline-flex items-center gap-4">
            <SiHtml5 className="inline-block text-2xl" />
            <span>HTML</span>
          </div>
          <div className="inline-flex items-center gap-4">
            <SiCss3 className="inline-block text-2xl" />
            <span>CSS</span>
          </div>
          <div className="inline-flex items-center gap-4">
            <SiJavascript className="inline-block text-2xl" />
            <span>Javascript</span>
          </div>
          <div className="inline-flex items-center gap-4">
            <SiTypescript className="inline-block text-2xl" />
            <span>Typescript</span>
          </div>
          <div className="inline-flex items-center gap-4">
            <SiGit className="inline-block text-2xl" />
            <span>Git</span>
          </div>
          <div className="inline-flex items-center gap-4">
            <SiGithub className="inline-block text-2xl" />
            <span>GitHub</span>
          </div>
          <div className="inline-flex items-center gap-4">
            <SiGithubactions className="inline-block text-2xl" />
            <span>GitHub Actions</span>
          </div>
          <div className="inline-flex items-center gap-4">
            <FaAws className="inline-block text-2xl" />
            <span>AWS</span>
          </div>
          <div className="inline-flex items-center gap-4">
            <SiVercel className="inline-block text-2xl" />
            <span>Vercel</span>
          </div>
          <div className="inline-flex items-center gap-4">
            <SiMysql className="inline-block text-2xl" />
            <span>MySQL</span>
          </div>
          <div className="inline-flex items-center gap-4">
            <SiSqlite className="inline-block text-2xl" />
            <span>SQLite</span>
          </div>
          <div className="inline-flex items-center gap-4">
            <SiNginx className="inline-block text-2xl" />
            <span>Nginx</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechnologyLink(props: { icon: IconType; href: string; text: string }) {
  return (
    <span className="text-nowrap">
      <props.icon className="inline-block text-3xl" />{" "}
      <a href={props.href} target="_blank" rel="noreferrer">
        {props.text}
      </a>
    </span>
  );
}
