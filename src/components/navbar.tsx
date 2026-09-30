import { FilePdfIcon, GithubLogoIcon, LinkedinLogoIcon, ListIcon } from "@phosphor-icons/react/ssr";
import { ModeToggle } from "#/components/mode-toggle.tsx";
import { Button, buttonVariants } from "#/components/ui/button.tsx";
import { Sheet, SheetContent, SheetTrigger } from "#/components/ui/sheet.tsx";
import { cn } from "#/lib/utils.ts";

const navLink =
  "inline-flex h-10 items-center gap-2 px-3 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring";

const sheetLink = cn(buttonVariants({ variant: "secondary" }), "h-12 justify-start gap-3 px-4 font-mono text-sm");

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-8">
        <a href="/" className="flex items-center" aria-label="Levente Otta, home">
          <img src="/icon3.png" alt="" width={36} height={36} className="size-9" />
        </a>
        <div className="flex items-center gap-1">
          <a
            href="https://github.com/Otisz"
            target="_blank"
            rel="noopener"
            aria-label="Check out the Github profile"
            className={cn(navLink, "hidden sm:inline-flex")}
          >
            <GithubLogoIcon className="size-5" /> Github
          </a>
          <a
            href="https://www.linkedin.com/in/leventeotta/"
            target="_blank"
            rel="noopener"
            aria-label="Visit the LinkedIn profile"
            className={cn(navLink, "hidden sm:inline-flex")}
          >
            <LinkedinLogoIcon className="size-5" /> LinkedIn
          </a>
          <ModeToggle />
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon-lg" className="sm:hidden">
                  <ListIcon className="size-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              }
            />
            <SheetContent>
              <div className="mt-20 grid auto-rows-min gap-3 px-4">
                <a href="https://github.com/Otisz" target="_blank" className={sheetLink} rel="noopener">
                  <GithubLogoIcon className="size-5" /> Github
                </a>
                <a href="https://www.linkedin.com/in/leventeotta/" target="_blank" className={sheetLink} rel="noopener">
                  <LinkedinLogoIcon className="size-5" /> LinkedIn
                </a>
                <a
                  href="https://assets.leventeotta.com/documents/Levente%20Otta%20CV.pdf"
                  target="_blank"
                  className={sheetLink}
                  rel="noopener"
                >
                  <FilePdfIcon className="size-5" /> CV / Resume
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
