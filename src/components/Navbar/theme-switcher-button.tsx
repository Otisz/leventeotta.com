"use client";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaCircleDot, FaRegMoon, FaRegSun } from "react-icons/fa6";

export default function ThemeSwitcherButton() {
  const { setTheme, theme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="inline-flex aspect-square h-full cursor-wait items-center justify-center rounded-xl border-2 border-border bg-accent/30 transition-all hover:bg-accent"
        aria-label="Loading theme switcher"
        title="Loading theme switcher"
      >
        <FaCircleDot className="h-4 w-4 animate-pulse fill-muted-foreground" />
      </div>
    );
  }

  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
          className="inline-flex aspect-square h-full items-center justify-center rounded-xl border-2 border-border bg-accent/30 transition-all hover:border-orange-500 hover:bg-accent"
          aria-label={theme === "light" ? "Too bright? Switch to dark mode" : "Too dark? Switch to light mode"}
        >
          {theme === "light" ? <FaRegSun className="h-4 w-4" /> : <FaRegMoon className="h-4 w-4" />}
        </TooltipTrigger>
        <TooltipContent>
          {theme === "light" ? <p>Too bright? Switch to dark mode</p> : <p>Too dark? Switch to light mode</p>}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
