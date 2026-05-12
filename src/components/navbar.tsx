import { FilePdfIcon, GithubLogoIcon, LinkedinLogoIcon, ListIcon } from "@phosphor-icons/react/ssr";
import { ModeToggle } from "#/components/mode-toggle.tsx";
import { Button, buttonVariants } from "#/components/ui/button.tsx";
import { Sheet, SheetContent, SheetTrigger } from "#/components/ui/sheet.tsx";
import { Tooltip, TooltipContent, TooltipTrigger } from "#/components/ui/tooltip.tsx";

export default function Navbar() {
  return (
    <nav className="container flex h-32 items-center justify-between px-4 py-8">
      <ModeToggle />
      <Sheet>
        <SheetTrigger
          render={
            <Button variant="secondary" size="icon-18" className="flex sm:hidden">
              <ListIcon className="size-8" />
              <span className="sr-only">Open menu</span>
            </Button>
          }
        />
        <SheetContent>
          <div className="mt-24 grid flex-1 auto-rows-min gap-6 px-4">
            <a
              href="https://github.com/Otisz"
              target="_blank"
              className={buttonVariants({ variant: "secondary" })}
              rel="noopener"
            >
              <GithubLogoIcon className="inline" /> Github
            </a>
            <a
              href="https://www.linkedin.com/in/leventeotta/"
              target="_blank"
              className={buttonVariants({ variant: "secondary" })}
              rel="noopener"
            >
              <LinkedinLogoIcon className="inline" /> LinkedIn
            </a>
            <a
              href="https://assets.leventeotta.com/documents/Levente%20Otta%20CV.pdf"
              target="_blank"
              className={buttonVariants({ variant: "secondary" })}
              rel="noopener"
            >
              <FilePdfIcon className="inline" /> CV / Resume
            </a>
          </div>
        </SheetContent>
      </Sheet>
      <div className="hidden items-center gap-4 sm:flex">
        <Tooltip>
          <TooltipTrigger
            render={
              <a
                href="https://github.com/Otisz"
                target="_blank"
                className={buttonVariants({ variant: "secondary", size: "icon-18" })}
                rel="noopener"
                aria-label="Check out the Github profile"
              >
                <GithubLogoIcon className="size-8" />
              </a>
            }
          />
          <TooltipContent>
            <p>Check out the Github profile</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger
            render={
              <a
                href="https://www.linkedin.com/in/leventeotta/"
                target="_blank"
                className={buttonVariants({ variant: "secondary", size: "icon-18" })}
                rel="noopener"
                aria-label="Visit the LinkedIn profile"
              >
                <LinkedinLogoIcon className="size-8" />
              </a>
            }
          />
          <TooltipContent>
            <p>Visit the LinkedIn profile</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger
            render={
              <a
                href="https://assets.leventeotta.com/documents/Levente%20Otta%20CV.pdf"
                target="_blank"
                className={buttonVariants({ variant: "secondary", size: "icon-18" })}
                rel="noopener"
                aria-label="Download CV / Resume"
              >
                <FilePdfIcon className="size-8" />
              </a>
            }
          />
          <TooltipContent>
            <p>Download CV / Resume</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </nav>
  );
}
