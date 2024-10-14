import HeadingSection from "@/feature/Home/HeadingSection";
import MyJourneySection from "@/feature/Home/my-jouney-section";

export default function Home() {
  return (
    <main className="container space-y-8 px-2 py-8 md:py-16">
      <section className="flex justify-center">
        <div className="relative rounded-full border-2 border-green-500 px-6 py-2 text-center">
          <div className="absolute inset-0 animate-pulse rounded-full border-2 border-green-500 bg-green-300/30" />
          <span>Actively looking for a new job.</span>{" "}
          <a
            href="https://assets.leventeotta.com/documents/Levente%20Otta%20CV.pdf"
            target="_blank"
            className="text-nowrap underline underline-offset-2"
          >
            Download my CV.
          </a>
        </div>
      </section>
      <HeadingSection />
      <MyJourneySection />
    </main>
  );
}
