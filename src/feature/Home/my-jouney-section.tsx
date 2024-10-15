import { FaRegFilePdf } from "react-icons/fa6";

export default function MyJourneySection() {
  return (
    <section className="prose max-w-none text-balance rounded-xl border-2 border-border bg-accent/30 p-4 dark:prose-invert prose-a:text-orange-500 2xl:col-span-2">
      <h2>My journey</h2>

      <ol className="relative list-none border-s border-border">
        <li className="-ms-4 mb-10 md:ms-4">
          <div className="absolute -start-2 mt-1 h-4 w-4 animate-ping rounded-full border border-border bg-orange-500"></div>
          <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-border bg-orange-500"></div>
          <div className="flex flex-col items-baseline justify-between md:flex-row">
            <h3 className="mt-0">Looking for a new job</h3>
            <span className="text-foreground">
              <time>October 2024</time> - <time>Present</time>
            </span>
          </div>

          <a
            href="https://assets.leventeotta.com/documents/Levente%20Otta%20CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="not-prose inline-flex flex-1 items-center justify-center gap-4 rounded-xl border-2 border-border bg-accent/30 p-8 transition-colors hover:border-orange-500"
          >
            <FaRegFilePdf className="h-6 w-6 fill-orange-500" />
            <span>Download CV</span>
          </a>
        </li>
        <li className="-ms-4 mb-10 md:ms-4">
          <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-border bg-orange-500"></div>
          <div className="flex flex-col items-baseline justify-between md:flex-row">
            <h3 className="mt-0">
              Full-Stack developer <small className="text-muted-foreground">at TMRW Applications Ltd.</small>
            </h3>
            <span className="text-foreground">
              <time>July 2020</time> - <time>September 2024</time>
            </span>
          </div>

          <ul className="list-disc leading-loose">
            <li>
              TMRW is in the business of smart hotels which aims to bring every aspect of your reservations into a
              single mobile app - we also created the company’s own PMS and integrated the app with many others.
              <ul className="list-inside list-[circle] ps-5">
                <li>
                  NTAK.guru is a standalone multi-tenant application which can be integrated into multiple PMS
                  applications and receive, build and send reports to the Hungarian government (NTAK and VIZA).
                </li>
                <li>
                  Utilizing queues, team-based permissions; Users have abilities to view, modify and resend reports.
                </li>
              </ul>
            </li>
            <li>It was mostly my responsibility to host the applications and build the CI/CD.</li>
            <li>
              Collaborated with other developers (frontend, backend and mobile) and also I was responsible for reviewing
              other’s Pull Requests.
            </li>
          </ul>
        </li>
        <li className="-ms-4 mb-10 md:ms-4">
          <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-border bg-orange-500"></div>
          <div className="flex flex-col items-baseline justify-between md:flex-row">
            <h3 className="mt-0">
              Full-Stack developer <small className="text-muted-foreground">at Designatives Kft.</small>
            </h3>
            <span className="text-foreground">
              <time>January 2020</time> - <time>June 2020</time>
            </span>
          </div>

          <ul className="list-disc leading-loose">
            <li>I worked on Swisscare (insurance) as a backend developer.</li>
            <li>I worked on Able donations (donation service) as a full stack developer.</li>
          </ul>
        </li>
        <li className="-ms-4 mb-10 md:ms-4">
          <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-border bg-orange-500"></div>
          <div className="flex flex-col items-baseline justify-between md:flex-row">
            <h3 className="mt-0">
              Full-Stack developer <small className="text-muted-foreground">at Codebuild Kft.</small>
            </h3>
            <span className="text-foreground">
              <time>June 2018</time> - <time>November 2019</time>
            </span>
          </div>

          <ul className="list-disc leading-loose">
            <li>
              I worked on internal CRM/ERP application for Korda Filmstúdió, internal CRM application for Budapest
              Sportarena and private social platform for KéK Group as backend developer.
            </li>
            <li>I worked on Collectorism (item exchange) as Project owner and full stack developer.</li>
          </ul>
        </li>
        <li className="-ms-4 mb-10 md:ms-4">
          <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-border bg-orange-500"></div>
          <div className="flex flex-col items-baseline justify-between md:flex-row">
            <h3 className="mt-0">
              Web developer <small className="text-muted-foreground">at Unioffice Kft.</small>
            </h3>
            <span className="text-foreground">
              <time>May 2017</time> - <time>April 2018</time>
            </span>
          </div>

          <ul className="list-disc leading-loose">
            <li>I developed an event management system for Oriflame with IBM Lotus Notes integration.</li>
          </ul>
        </li>
      </ol>
    </section>
  );
}
