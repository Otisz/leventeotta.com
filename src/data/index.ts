import { DateTime } from "luxon";
import type { Journey, Technology } from "../types";

export const journeyData: Journey[] = [
  {
    role: "Fullstack Senior Developer",
    company: "Bannerse OU.",
    location: "Budapest, Hungary",
    from: DateTime.fromSQL("2025-03-01"),
    to: DateTime.fromSQL("2026-01-31"),
    description: [
      "Maintained and modernized a legacy Vue.js application integrated with Cloudflare services.",
      "Designed and initiated development of a new multi-continental system supporting millions of users, including project planning and cross-team collaboration.",
      "Established and configured new codebases with code quality tools, unit testing frameworks, and CI/CD pipelines for both Laravel REST API and React.js frontend applications.",
      "Conducted code reviews, managed pull requests, and coordinated task assignments across the development team.",
      "Implemented analytics tracking with Google Analytics and PostHog to collect business and user behavior data for usability improvements.",
      "Collaborated with UX/UI designers to translate Figma prototypes into enhanced user interfaces and improved user experiences.",
    ],
  },
  {
    role: "Fullstack Senior Developer",
    company: "Captiwate Inc.",
    location: "Budapest, Hungary",
    from: DateTime.fromSQL("2024-11-01"),
    to: DateTime.fromSQL("2024-12-31"),
    description: ["Worked on Captiwate's customer service solution as a full stack developer."],
  },
  {
    role: "Fullstack Senior Developer",
    company: "TMRW Applications Ltd.",
    location: "Budapest, Hungary",
    from: DateTime.fromSQL("2020-07-01"),
    to: DateTime.fromSQL("2024-09-30"),
    description: [
      "TMRW is in the business of smart hotels which aims to bring every aspect of your reservations into a single mobile app - we also created the company's own PMS and integrated the app with many others.",
      "NTAK.guru is a standalone multi-tenant application which can be integrated into multiple PMS applications and receive, build and send reports to the Hungarian government (NTAK and VIZA).",
      "Utilizing queues, team-based permissions; Users have abilities to view, modify and resend reports.",
      "It was mostly my responsibility to host the applications and build the CI/CD.",
      "Collaborated with other developers (frontend, backend and mobile) and also I was responsible for reviewing other's Pull Requests.",
    ],
  },
  {
    role: "Fullstack Medior Developer",
    company: "Designatives Kft.",
    location: "Budapest, Hungary",
    from: DateTime.fromSQL("2020-01-01"),
    to: DateTime.fromSQL("2020-06-30"),
    description: [
      "Worked on Swisscare (insurance) as a backend developer.",
      "Worked on Able donations (donation service) as a full stack developer.",
    ],
  },
  {
    role: "Fullstack Medior Developer",
    company: "Codebuild Kft.",
    location: "Budapest, Hungary",
    from: DateTime.fromSQL("2018-06-01"),
    to: DateTime.fromSQL("2019-11-30"),
    description: [
      "Worked on internal CRM/ERP application for Korda Filmstudio, internal CRM application for Budapest Sportarena and private social platform for KeK Group as backend developer.",
      "Worked on Collectorism (item exchange) as Project owner and full stack developer.",
    ],
  },
  {
    role: "Fullstack Junior Developer",
    company: "Unioffice Kft.",
    location: "Budapest, Hungary",
    from: DateTime.fromSQL("2017-05-01"),
    to: DateTime.fromSQL("2018-04-30"),
    description: ["Developed an event management system for Oriflame with IBM Lotus Notes integration."],
  },
];

export const otherTechnologies: Technology[] = [
  { name: "GitHub", description: "Version Control", icon: "simple-icons:github" },
  { name: "GitHub Actions", description: "CI/CD tool", icon: "simple-icons:githubactions" },
  { name: "AWS", description: "Cloud hosting", icon: "simple-icons:amazonwebservices" },
  { name: "Vercel", description: "Cloud hosting", icon: "simple-icons:vercel" },
  { name: "MySQL", description: "Relational database", icon: "simple-icons:mysql" },
  { name: "PostgreSQL", description: "Relational database", icon: "simple-icons:postgresql" },
  { name: "Redis", description: "In-memory key-value database", icon: "simple-icons:redis" },
  { name: "Figma", description: "Interface Design tool", icon: "simple-icons:figma" },
];
