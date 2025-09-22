import Link from "next/link";
import { TardisSvg } from "@/components/svgAsJsx/TardisSvg";

export default function NotFound() {
  return (
    <main className="container space-y-8 px-8 py-24 text-center md:px-24 lg:px-32">
      <h1 className="font-bold text-4xl">Hello traveler!</h1>
      <p>Looks like you have been lost in time and space.</p>
      <p>Click on Tardis to return to the beginnings, and don&apos;t blink.</p>
      <Link href="/" className="group inline-flex items-center justify-center">
        <TardisSvg className="h-64 w-auto" />
      </Link>
    </main>
  );
}
