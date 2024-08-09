import { FaRegFilePdf } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="container space-y-16 px-8 py-24 md:px-24 lg:px-32">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Hello There!</h1>

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
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">My journey with web development</h2>

        <ol className="relative border-s border-border">
          <li className="mb-10 ms-4">
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-border bg-orange-500"></div>
            <time className="mb-1 text-sm font-normal leading-none">July 2020 - Present</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Fullstack developer at TMRW Applications Ltd.
            </h3>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-border bg-orange-500"></div>
            <time className="mb-1 text-sm font-normal leading-none">January 2020 - June 2020</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Fullstack developer at Designatives Kft.
            </h3>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-border bg-orange-500"></div>
            <time className="mb-1 text-sm font-normal leading-none">June 2018 - November 2019</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Fullstack developer at Codebuild Kft.
            </h3>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-border bg-orange-500"></div>
            <time className="mb-1 text-sm font-normal leading-none">May 2017 - April 2018</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Fullstack developer at Unioffice Kft.
            </h3>
          </li>
        </ol>
      </section>
    </main>
  );
}
