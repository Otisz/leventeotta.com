import { otherTechnologies } from "@/data";

export default function OtherTechnologies() {
  return (
    <div className="prose dark:prose-invert col-span-full max-w-none text-balance rounded-xl border-2 border-border bg-accent/30 p-4 prose-a:text-orange-500">
      <h2>Other technologies</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {otherTechnologies.map((technology) => (
          <div className="flex items-center gap-8" key={technology.name}>
            <technology.icon className="size-10" />
            <div className="flex flex-col">
              <span className="font-semibold">{technology.name}</span>
              <span className="text-muted-foreground">{technology.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
