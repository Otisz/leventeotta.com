import HeadingSection from "@/feature/Home/heading-section";
import MyJourneySection from "@/feature/Home/my-jouney-section";

export default function Home() {
  return (
    <main className="container space-y-8 px-2 py-8 md:py-16">
      <HeadingSection />
      <MyJourneySection />
    </main>
  );
}
