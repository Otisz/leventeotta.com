import MobileMenu from "@/components/Navbar/mobile-menu";
import ThemeSwitcherButton from "@/components/Navbar/theme-switcher-button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import { FaRegFilePdf } from "react-icons/fa6";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Navbar() {
  return (
    <nav className="container mt-4 flex h-20 items-center gap-2 md:gap-6 lg:gap-8">
      <Link
        href="/"
        className="inline-flex h-full items-center rounded-xl border-2 border-border bg-accent/30 px-4 text-center text-2xl font-bold transition-all hover:border-orange-500 hover:bg-accent md:px-8 lg:px-16"
      >
        Levente Otta
      </Link>
      <div className="flex-1"></div>
      <ThemeSwitcherButton />
      <div className="hidden h-full gap-4 md:inline-flex">
        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <a
                href="https://github.com/Otisz"
                target="_blank"
                rel="noreferrer"
                className="inline-flex aspect-square h-full items-center justify-center rounded-xl border-2 border-border bg-accent/30 transition-all hover:border-orange-500 hover:bg-accent"
                aria-label="Check out my Github"
              >
                <SiGithub className="h-8 w-8" />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Check out my Github</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <a
                href="https://www.linkedin.com/in/leventeotta/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex aspect-square h-full items-center justify-center rounded-xl border-2 border-border bg-accent/30 transition-all hover:border-orange-500 hover:bg-accent"
                aria-label="Visit my LinkedIn"
              >
                <SiLinkedin className="h-8 w-8" />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Visit my LinkedIn</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <a
                href="https://assets.leventeotta.com/documents/Levente%20Otta%20CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex aspect-square h-full items-center justify-center rounded-xl border-2 border-border bg-accent/30 transition-all hover:border-orange-500 hover:bg-accent"
                aria-label="Download my CV"
              >
                <FaRegFilePdf className="h-8 w-8" />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Download my CV</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <MobileMenu />
    </nav>
  );
}
