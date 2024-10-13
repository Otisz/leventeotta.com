import MeImage from "@/assets/images/me_small.jpeg";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Image from "next/image";
import { IconType } from "react-icons";
import { FaBootstrap, FaLaravel, FaLocationDot, FaPhp, FaReact, FaVuejs } from "react-icons/fa6";
import { RiNextjsLine } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";

export default function HeadingSection() {
  return (
    <section className="grid auto-rows-max grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 2xl:grid-cols-8 2xl:grid-rows-2">
      <div className="prose dark:prose-invert border-border bg-accent/30 max-w-none rounded-xl border-2 p-4 md:col-span-3 lg:col-span-2 2xl:col-span-6">
        <h1 className="text-balance">
          Hello! 👋 My name is <span className="text-orange-500">Levente &quot;Otisz&quot; Otta</span>.
        </h1>
        <p className="flex items-center gap-2">
          <FaLocationDot className="inline-block" />
          <span>Budapest, Hungary.</span>
        </p>
        <p>I&apos;m a Full-Stack web developer for almost 10 years.</p>
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
      <div className="prose dark:prose-invert border-border bg-accent/30 prose-a:text-orange-500 max-w-none text-balance rounded-xl border-2 p-4 2xl:col-span-2">
        <h2>Backend</h2>
        <p>
          For backend I chose <TechnologyLink icon={FaPhp} href="https://php.net" text="PHP" /> and the{" "}
          <TechnologyLink icon={FaLaravel} href="https://laravel.com" text="Laravel" /> framework.
        </p>
        <p>I&apos;m open to learn NodeJS and Elixir.</p>
      </div>
      <div className="prose dark:prose-invert border-border bg-accent/30 prose-a:text-orange-500 max-w-none text-balance rounded-xl border-2 p-4 2xl:col-span-2">
        <h2>Frontend</h2>
        <p>
          Primarily I&apos;m using <TechnologyLink icon={FaReact} href="https://react.dev" text="React" /> and{" "}
          <TechnologyLink icon={RiNextjsLine} href="https://nextjs.org" text="NextJS" />.
        </p>
        <p>
          I also know <TechnologyLink icon={FaVuejs} href="https://vuejs.org" text="VueJS" /> but I&apos;m not fan of
          it.
        </p>
      </div>
      <div className="prose dark:prose-invert border-border bg-accent/30 prose-a:text-orange-500 max-w-none text-balance rounded-xl border-2 p-4 2xl:col-span-2">
        <h2>UI</h2>
        <p>
          My go-to UI framework is{" "}
          <TechnologyLink icon={SiTailwindcss} href="https://tailwindcss.com" text="TailwindCSS" />.
        </p>
        <p>
          Before that I used <TechnologyLink icon={FaBootstrap} href="https://getbootstrap.com" text="Bootstrap" />.
        </p>
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
