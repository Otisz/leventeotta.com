import MobileMenu from "@/components/Navbar/MobileMenu";
import ThemeSwitcher from "@/components/Navbar/ThemeSwitcher";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import { FaLinkedin, FaRegFilePdf, FaSquareGithub } from "react-icons/fa6";

export default function Navbar() {
  return (
    <nav className="flex h-20 divide-x divide-background bg-accent">
      <Link
        href="/"
        className="text-1xl mr-auto flex items-center text-nowrap px-8 font-bold transition-all hover:text-orange-500 hover:underline hover:decoration-2 hover:underline-offset-8 active:translate-y-1 md:mr-0 md:text-2xl lg:px-16"
      >
        Levente Otta
      </Link>
      <div className="hidden flex-1 justify-center md:flex">
        <Link
          href="/contact"
          className="flex items-center px-8 transition-all hover:text-orange-500 hover:underline hover:decoration-2 hover:underline-offset-8 active:translate-y-1"
        >
          Contact
        </Link>
      </div>

      <ThemeSwitcher />
      <div className="hidden md:block">
        <TooltipProvider>
          <Tooltip delayDuration={+process.env.TOOLTIP_DELAY_DURATION!}>
            <TooltipTrigger asChild>
              <a
                href="https://github.com/Otisz"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex aspect-square h-full items-center justify-center transition-all active:translate-y-1"
                aria-label="Check out my Github"
              >
                <FaSquareGithub className="h-8 w-8 transition-all group-hover:scale-125 group-hover:rounded-md group-hover:bg-white group-hover:fill-[#171515]" />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Check out my Github</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip delayDuration={+process.env.TOOLTIP_DELAY_DURATION!}>
            <TooltipTrigger asChild>
              <a
                href="https://www.linkedin.com/in/leventeotta/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex aspect-square h-full items-center justify-center transition-all active:translate-y-1"
                aria-label="Visit my LinkedIn"
              >
                <FaLinkedin className="h-8 w-8 transition-all group-hover:scale-125 group-hover:rounded-md group-hover:bg-white group-hover:fill-[#0072b1]" />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Visit my LinkedIn</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip delayDuration={+process.env.TOOLTIP_DELAY_DURATION!}>
            <TooltipTrigger asChild>
              <a
                href="https://assets.leventeotta.com/documents/Levente%20Otta%20CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex aspect-square h-full items-center justify-center transition-all active:translate-y-1"
                aria-label="Download my CV"
              >
                <FaRegFilePdf className="h-8 w-8 transition-all group-hover:scale-125 group-hover:fill-orange-500" />
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
