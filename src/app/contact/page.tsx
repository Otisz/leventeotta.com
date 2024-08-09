import type { Metadata } from "next";
import { FaLinkedin, FaRegFilePdf, FaSquareGithub } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Page() {
  return (
    <main className="container space-y-16 px-8 py-24 md:px-24 lg:px-32">
      <h1 className="text-4xl font-bold">Get in touch</h1>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Where you can find me?</h2>
        <p>I live in Hungary, but I&apos;m also available for remote work.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">You can reach me via email</h2>
        <p>
          <a className="text-orange-500 underline underline-offset-4" href="mailto:leventeotta@gmail.com">
            leventeotta@gmail.com
          </a>
        </p>
        <a
          href="https://assets.leventeotta.com/documents/Levente%20Otta%20CV.pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-4 rounded-lg border-2 border-border bg-background p-8 transition-colors hover:border-orange-500"
          aria-label="Download my CV"
        >
          <FaRegFilePdf className="h-6 w-6 fill-orange-500" />
          <span>Download CV</span>
        </a>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">And of course, on social media</h2>
        <div className="space-x-4">
          <a
            href="https://github.com/Otisz"
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-1 items-center justify-center rounded-lg border-2 border-border bg-background p-8 transition-colors hover:border-orange-500"
            aria-label="Check out my Github"
          >
            <FaSquareGithub className="h-8 w-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/leventeotta/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-1 items-center justify-center rounded-lg border-2 border-border bg-background p-8 transition-colors hover:border-orange-500"
            aria-label="Visit my LinkedIn"
          >
            <FaLinkedin className="h-8 w-8" />
          </a>
        </div>
      </section>
    </main>
  );
}
