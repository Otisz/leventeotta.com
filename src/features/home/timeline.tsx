import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ReactNode } from "react";
import { DiYii } from "react-icons/di";
import {
  SiAmazon,
  SiBootstrap,
  SiCodeigniter,
  SiDigitalocean,
  SiGithubactions,
  SiGooglecloud,
  SiHetzner,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNuxtdotjs,
  SiPhp,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiVercel,
  SiVuedotjs,
} from "react-icons/si";

type TimeLineProps = {
  children: ReactNode;
};

export function TimeLine({ children }: TimeLineProps) {
  return <ol className="relative border-s border-border">{children}</ol>;
}

const ICON_DICTIONARY = {
  PHP: <SiPhp className="h-8 w-8 rounded-md border border-border bg-white fill-[#484C89] p-0.5" />,
  Laravel: <SiLaravel className="h-8 w-8 rounded-md border border-border bg-white fill-[#F05340] p-0.5" />,
  ReactJS: <SiReact className="h-8 w-8 rounded-md border border-border bg-white fill-[#61dbfb] p-0.5" />,
  VueJS: <SiVuedotjs className="h-8 w-8 rounded-md border border-border bg-white fill-[#42b883] p-0.5" />,
  Amazon: <SiAmazon className="h-8 w-8 rounded-md border border-border bg-white fill-[#ff9900] p-0.5" />,
  Bootstrap: <SiBootstrap className="h-8 w-8 rounded-md border border-border bg-white fill-[#5A00F5] p-0.5" />,
  Nginx: <SiNginx className="h-8 w-8 rounded-md border border-border bg-white fill-[#009900] p-0.5" />,
  TailwindCSS: <SiTailwindcss className="h-8 w-8 rounded-md border border-border bg-white fill-[#31AFF6] p-0.5" />,
  NuxtJS: <SiNuxtdotjs className="h-8 w-8 rounded-md border border-border bg-white fill-[#42b883] p-0.5" />,
  NextJS: <SiNextdotjs className="h-8 w-8 rounded-md border border-border bg-white fill-black p-0.5" />,
  MySQL: <SiMysql className="h-8 w-8 rounded-md border border-border bg-white fill-[#00758f] p-0.5" />,
  CodeIgniter: <SiCodeigniter className="h-8 w-8 rounded-md border border-border bg-white fill-[#D8351B] p-0.5" />,
  PostgreSQL: <SiPostgresql className="h-8 w-8 rounded-md border border-border bg-white fill-[#0064a5] p-0.5" />,
  "GitHub Actions": <SiGithubactions className="h-8 w-8 rounded-md border border-border bg-white fill-black p-0.5" />,
  Vercel: <SiVercel className="h-8 w-8 rounded-md border border-border bg-white fill-black p-0.5" />,
  Yii2: <DiYii className="h-8 w-8 rounded-md border border-border bg-white fill-black p-0.5" />,
  Hetzner: <SiHetzner className="h-8 w-8 rounded-md border border-border bg-white fill-[#C30022] p-0.5" />,
  "Digital Ocean": <SiDigitalocean className="h-8 w-8 rounded-md border border-border bg-white fill-[#0080FF] p-0.5" />,
  "Google Cloud Platform": (
    <SiGooglecloud className="h-8 w-8 rounded-md border border-border bg-white fill-[#4285F4] p-0.5" />
  ),
} as const;

type TimeLineItemProps = {
  dateFrom: string;
  dateTo: string;
  position: string;
  company: string;
  technologies?: (keyof typeof ICON_DICTIONARY | string)[];
  children?: ReactNode;
};

export function TimeLineItem(props: TimeLineItemProps) {
  return (
    <li className="mb-10 ms-4">
      <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-border bg-orange-500"></div>
      <time className="mb-1 text-sm font-normal leading-none">
        {props.dateFrom} - {props.dateTo}
      </time>
      <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
        {props.position} at {props.company}
      </h3>

      {props.children}

      {props.technologies && props.technologies?.length > 0 ? (
        <div className="mt-3 flex flex-wrap items-center gap-2">
          {props.technologies.map((technology, i) => (
            <TimeLineTechnologyIcon key={i} technology={technology} />
          ))}
        </div>
      ) : null}
    </li>
  );
}

function TimeLineTechnologyIcon(props: { technology: keyof typeof ICON_DICTIONARY | string }) {
  if (props.technology in ICON_DICTIONARY) {
    return (
      <TooltipProvider>
        <Tooltip delayDuration={+process.env.TOOLTIP_DELAY_DURATION!}>
          <TooltipTrigger asChild className="transition-all hover:scale-125">
            {ICON_DICTIONARY[props.technology as keyof typeof ICON_DICTIONARY]}
          </TooltipTrigger>
          <TooltipContent>{props.technology}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return <span>{props.technology}</span>;
}
