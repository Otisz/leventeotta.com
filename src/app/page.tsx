import MeImage from "@/assets/images/me_small.jpeg";
import { TimeLine, TimeLineItem } from "@/features/home/timeline";
import Image from "next/image";
import { FaRegFilePdf } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="container space-y-16 px-8 py-24 md:px-24 lg:px-32">
      <section className="flex gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl font-bold">Hello there! 👋</h1>

          <p>
            My name is <span className="text-orange-500">Levente &quot;Otisz&quot; Otta</span> from Hungary.
          </p>

          <p>I&apos;m a software engineer and a web developer for almost 10 years.</p>

          <p>I specialized on high availability, scalable and performant CRM, ERP and PMS systems.</p>

          <p>For backend I&apos;m using PHP: Laravel and for the frontend I&apos;m using React: NextJS.</p>

          <p>Also I have experience with CI/CD, DevOps and Hosting.</p>

          <a
            href="https://assets.leventeotta.com/documents/Levente%20Otta%20CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-4 rounded-lg border-2 border-border bg-background p-8 transition-colors hover:border-orange-500"
          >
            <FaRegFilePdf className="h-6 w-6 fill-orange-500" />
            <span>Download CV</span>
          </a>
        </div>
        <div className="relative hidden w-1/3 self-stretch md:flex md:justify-center">
          <Image
            src={MeImage}
            alt="Levente Otta"
            style={{ objectFit: "cover", width: "auto", height: "auto" }}
            className="rounded-lg object-top shadow-[0_0_0_theme(width.2)_#000000,0_0_0_theme(width.3)_theme(colors.orange.500)]"
            priority
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">My journey with web development</h2>

        <TimeLine>
          <TimeLineItem
            dateFrom="July 2020"
            dateTo="Present"
            position="Fullstack developer"
            company="TMRW Applications Ltd."
            technologies={[
              "Laravel",
              "Yii2",
              "MySQL",
              "PostgreSQL",
              "VueJS",
              "NuxtJS",
              "ReactJS",
              "NextJS",
              "TailwindCSS",
              "Bootstrap",
              "Vercel",
              "Amazon",
              "Nginx",
              "GitHub Actions",
            ]}
          >
            <ul className="max-w-[80ch] list-inside list-disc leading-loose">
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
                Collaborated with other developers (frontend, backend and mobile) and also I was responsible for
                reviewing other’s Pull Requests.
              </li>
            </ul>
          </TimeLineItem>
          <TimeLineItem
            dateFrom="January 2020"
            dateTo="June 2020"
            position="Fullstack developer"
            company="Designatives Kft."
            technologies={["Laravel", "MySQL", "VueJS", "Hetzner"]}
          >
            <ul className="max-w-[80ch] list-inside list-disc leading-loose">
              <li>I worked on Swisscare (insurance) as a backend developer.</li>
              <li>I worked on Able donations (donation service) as a full stack developer.</li>
            </ul>
          </TimeLineItem>
          <TimeLineItem
            dateFrom="June 2018"
            dateTo="November 2019"
            position="Fullstack developer"
            company="Codebuild Kft."
            technologies={["Laravel", "MySQL", "VueJS", "Google Cloud Platform", "Digital Ocean"]}
          >
            <ul className="max-w-[80ch] list-inside list-disc leading-loose">
              <li>
                I worked on internal CRM/ERP application for Korda Filmstúdió, internal CRM application for Budapest
                Sportarena and private social platform for KéK Group as backend developer.
              </li>
              <li>I worked on Collectorism (item exchange) as Project owner and full stack developer.</li>
            </ul>
          </TimeLineItem>
          <TimeLineItem
            dateFrom="May 2017"
            dateTo="April 2018"
            position="Fullstack developer"
            company="Unioffice Kft."
            technologies={["PHP", "CodeIgniter", "MySQL", "Bootstrap"]}
          >
            <ul className="max-w-[80ch] list-inside list-disc leading-loose">
              <li>I developed an event management system for Oriflame with IBM Lotus Notes integration.</li>
            </ul>
          </TimeLineItem>
        </TimeLine>
      </section>
    </main>
  );
}
