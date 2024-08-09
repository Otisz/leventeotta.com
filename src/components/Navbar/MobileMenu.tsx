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
import Link from "next/link";
import { useState } from "react";
import { FaAlignRight, FaLinkedin, FaRegCircleXmark, FaRegFilePdf, FaSquareGithub } from "react-icons/fa6";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="inline-flex aspect-square h-full items-center justify-center transition-all hover:text-orange-500 active:translate-y-1 md:hidden">
        <FaAlignRight className="h-8 w-8" />
      </SheetTrigger>
      <SheetContent noClose className="w-full border-none p-0">
        <SheetHeader className="flex h-20 flex-row divide-x divide-background bg-accent">
          <SheetTitle className="flex flex-1 items-center px-8 text-2xl font-bold">Menu</SheetTitle>
          <SheetClose className="inline-flex aspect-square h-full items-center justify-center transition-all hover:text-orange-500 active:translate-y-1">
            <FaRegCircleXmark className="h-8 w-8" />
            <span className="sr-only">Close</span>
          </SheetClose>
          <VisuallyHidden asChild>
            <SheetDescription className="hidden">Navigation menu</SheetDescription>
          </VisuallyHidden>
        </SheetHeader>
        <div className="h-full space-y-8 overflow-auto pb-32">
          <div className="flex flex-col divide-y divide-accent">
            <Link href="/contact" className="p-8" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 px-8">
            <a
              href="https://assets.leventeotta.com/documents/Levente%20Otta%20CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="col-span-2 inline-flex flex-1 items-center justify-center gap-4 rounded-lg border-2 border-orange-500 p-8"
            >
              <FaRegFilePdf className="h-6 w-6 fill-orange-500" />
              <span>Download CV</span>
            </a>
            <a
              href="https://github.com/Otisz"
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center rounded-lg border-2 border-border p-8"
            >
              <FaSquareGithub className="h-8 w-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/leventeotta/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center rounded-lg border-2 border-border p-8"
            >
              <FaLinkedin className="h-8 w-8" />
            </a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
