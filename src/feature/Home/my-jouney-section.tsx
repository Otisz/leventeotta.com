import { DateTime } from "luxon";
import { journeyData } from "@/data";
import { elapsedTime } from "@/utils";

export default function MyJourneySection() {
  return (
    <section className="prose dark:prose-invert max-w-none text-balance rounded-xl border-2 border-border bg-accent/30 p-4 prose-a:text-orange-500 2xl:col-span-2">
      <h2>My journey</h2>

      <ol className="relative list-none border-border border-s">
        {journeyData.map((journey) => (
          <li className="-ms-4 mb-10 md:ms-4" key={journey.company}>
            <div className="-start-1.5 absolute mt-1.5 h-3 w-3 rounded-full border border-border bg-orange-500"></div>
            <div className="flex flex-col items-baseline justify-between md:flex-row">
              <h3 className="mt-0">
                {journey.role} <small className="text-muted-foreground">at {journey.company}</small>
              </h3>
              <div className="flex flex-col items-end">
                <span className="text-foreground">
                  <time>{journey.from.toFormat("LLLL yyyy")}</time> -{" "}
                  {journey.to ? <time>{journey.to.toFormat("LLLL yyyy")}</time> : <span>Present</span>}{" "}
                  <span className="text-muted-foreground">
                    • {elapsedTime(journey.from, journey.to?.plus({ month: 1 }) ?? DateTime.now().plus({ month: 1 }))}
                  </span>
                </span>
                <span className="text-muted-foreground text-sm">{journey.location}</span>
              </div>
            </div>

            {journey.description}
          </li>
        ))}
      </ol>
    </section>
  );
}
