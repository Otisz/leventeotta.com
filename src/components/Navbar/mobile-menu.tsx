"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useState } from "react";
import { FaAlignRight, FaLinkedin, FaRegCircleXmark, FaRegFilePdf, FaSquareGithub } from "react-icons/fa6";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className="bg-accent/30 hover:bg-accent border-border inline-flex aspect-square h-full items-center justify-center justify-self-end rounded-xl border-2 transition-all hover:border-orange-500 md:hidden"
        aria-label="Open navigation menu"
      >
        <FaAlignRight className="h-8 w-8" />
      </SheetTrigger>
      <SheetContent noClose className="w-full border-none p-0">
        <SheetHeader className="divide-background m-4 flex h-20 flex-row divide-x">
          <SheetTitle className="flex flex-1 items-center px-8 text-2xl font-bold">Menu</SheetTitle>
          <SheetClose
            className="bg-accent/30 hover:bg-accent border-border inline-flex aspect-square h-full items-center justify-center rounded-xl border-2 transition-all hover:border-orange-500"
            aria-labelledby="close-navitaion-menu"
          >
            <FaRegCircleXmark className="h-8 w-8" />
            <span className="sr-only" id="close-navitaion-menu">
              Close navigation menu
            </span>
          </SheetClose>
          <VisuallyHidden asChild>
            <SheetDescription className="hidden">Navigation menu</SheetDescription>
          </VisuallyHidden>
        </SheetHeader>
        <div className="h-full space-y-8 overflow-auto pb-32">
          <div className="divide-accent flex flex-col divide-y"></div>
          <div className="grid grid-cols-2 gap-4 px-8">
            <a
              href="https://assets.leventeotta.com/documents/Levente%20Otta%20CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="col-span-2 inline-flex flex-1 items-center justify-center gap-4 rounded-lg border-2 border-orange-500 p-8"
              aria-label="Download my CV"
            >
              <FaRegFilePdf className="h-6 w-6 fill-orange-500" />
              <span>Download CV</span>
            </a>
            <a
              href="https://github.com/Otisz"
              target="_blank"
              rel="noreferrer"
              className="border-border inline-flex flex-1 items-center justify-center rounded-lg border-2 p-8"
              aria-label="Check out my Github"
            >
              <FaSquareGithub className="h-8 w-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/leventeotta/"
              target="_blank"
              rel="noreferrer"
              className="border-border inline-flex flex-1 items-center justify-center rounded-lg border-2 p-8"
              aria-label="Visit my LinkedIn"
            >
              <FaLinkedin className="h-8 w-8" />
            </a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
