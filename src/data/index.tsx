import { DateTime } from "luxon";
import type { ReactElement } from "react";
import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa6";
import { SiFigma, SiGithub, SiGithubactions, SiMysql, SiPostgresql, SiRedis, SiVercel } from "react-icons/si";

export const journeyData = [
  {
    role: "Fullstack Senior Developer",
    company: "Bannerse OÜ.",
    location: "Budapest, Hungary",
    from: DateTime.fromFormat("March 2025", "LLLL yyyy"),
    to: null,
    description: (
      <ul className="list-disc leading-loose">
        <li>Maintained and modernized a legacy Vue.js application integrated with Cloudflare services.</li>
        <li>
          Designed and initiated development of a new multi-continental system supporting millions of users, including
          project planning and cross-team collaboration.
        </li>
        <li>
          Established and configured new codebases with code quality tools, unit testing frameworks, and CI/CD pipelines
          for both Laravel REST API and React.js frontend applications.
        </li>
        <li>
          Conducted code reviews, managed pull requests, and coordinated task assignments across the development team.
        </li>
        <li>
          Implemented analytics tracking with Google Analytics and PostHog to collect business and user behavior data
          for usability improvements.
        </li>
        <li>
          Collaborated with UX/UI designers to translate Figma prototypes into enhanced user interfaces and improved
          user experiences.
        </li>
      </ul>
    ),
  },
  {
    role: "Fullstack Senior Developer",
    company: "Captiwate Inc.",
    location: "Budapest, Hungary",
    from: DateTime.fromFormat("November 2024", "LLLL yyyy"),
    to: DateTime.fromFormat("December 2024", "LLLL yyyy"),
    description: (
      <ul className="list-disc leading-loose">
        <li>I worked on Captiwate’s customer service solution as a full stack developer.</li>
      </ul>
    ),
  },
  {
    role: "Fullstack Senior Developer",
    company: "TMRW Applications Ltd.",
    location: "Budapest, Hungary",
    from: DateTime.fromFormat("July 2020", "LLLL yyyy"),
    to: DateTime.fromFormat("September 2024", "LLLL yyyy"),
    description: (
      <ul className="list-disc leading-loose">
        <li>
          TMRW is in the business of smart hotels which aims to bring every aspect of your reservations into a single
          mobile app - we also created the company’s own PMS and integrated the app with many others.
          <ul className="list-inside list-[circle] ps-5">
            <li>
              NTAK.guru is a standalone multi-tenant application which can be integrated into multiple PMS applications
              and receive, build and send reports to the Hungarian government (NTAK and VIZA).
            </li>
            <li>Utilizing queues, team-based permissions; Users have abilities to view, modify and resend reports.</li>
          </ul>
        </li>
        <li>It was mostly my responsibility to host the applications and build the CI/CD.</li>
        <li>
          Collaborated with other developers (frontend, backend and mobile) and also I was responsible for reviewing
          other’s Pull Requests.
        </li>
      </ul>
    ),
  },
  {
    role: "Fullstack Medior Developer",
    company: "Designatives Kft.",
    location: "Budapest, Hungary",
    from: DateTime.fromFormat("January 2020", "LLLL yyyy"),
    to: DateTime.fromFormat("June 2020", "LLLL yyyy"),
    description: (
      <ul className="list-disc leading-loose">
        <li>I worked on Swisscare (insurance) as a backend developer.</li>
        <li>I worked on Able donations (donation service) as a full stack developer.</li>
      </ul>
    ),
  },
  {
    role: "Fullstack Medior Developer",
    company: "Codebuild Kft.",
    location: "Budapest, Hungary",
    from: DateTime.fromFormat("June 2018", "LLLL yyyy"),
    to: DateTime.fromFormat("November 2019", "LLLL yyyy"),
    description: (
      <ul className="list-disc leading-loose">
        <li>
          I worked on internal CRM/ERP application for Korda Filmstúdió, internal CRM application for Budapest
          Sportarena and private social platform for KéK Group as backend developer.
        </li>
        <li>I worked on Collectorism (item exchange) as Project owner and full stack developer.</li>
      </ul>
    ),
  },
  {
    role: "Fullstack Junior Developer",
    company: "Unioffice Kft.",
    location: "Budapest, Hungary",
    from: DateTime.fromFormat("May 2017", "LLLL yyyy"),
    to: DateTime.fromFormat("April 2018", "LLLL yyyy"),
    description: (
      <ul className="list-disc leading-loose">
        <li>I developed an event management system for Oriflame with IBM Lotus Notes integration.</li>
      </ul>
    ),
  },
] as {
  role: string;
  company: string;
  location: string;
  from: DateTime;
  to: DateTime | null;
  description: ReactElement;
}[];

export const otherTechnologies = [
  {
    icon: SiGithub,
    name: "GitHub",
    description: "Version Control",
  },
  {
    icon: SiGithubactions,
    name: "GitHub Actions",
    description: "CI/CD tool",
  },
  {
    icon: FaAws,
    name: "AWS",
    description: "Cloud hosting",
  },
  {
    icon: SiVercel,
    name: "Vercel",
    description: "Cloud hosting",
  },
  {
    icon: SiMysql,
    name: "MySQL",
    description: "Relational database",
  },
  {
    icon: SiPostgresql,
    name: "PostgreSQL",
    description: "Relational database",
  },
  {
    icon: SiRedis,
    name: "Redis",
    description: "In-memory key-value database",
  },
  {
    icon: SiFigma,
    name: "Figma",
    description: "Interface Design tool",
  },
] as {
  icon: IconType;
  name: string;
  description: string;
}[];
