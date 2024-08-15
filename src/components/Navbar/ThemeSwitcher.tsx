"use client";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaCircleDot, FaRegMoon, FaRegSun } from "react-icons/fa6";

export default function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="flex aspect-square h-full cursor-wait items-center justify-center"
        aria-label="Loading theme switcher"
        title="Loading theme switcher"
      >
        <FaCircleDot className="h-4 w-4 animate-pulse fill-muted-foreground" />
      </div>
    );
  }

  return (
    <TooltipProvider>
      <Tooltip delayDuration={+process.env.TOOLTIP_DELAY_DURATION!}>
        <TooltipTrigger
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
          className="group flex aspect-square h-full items-center justify-center transition-all hover:text-orange-500 active:translate-y-1"
          aria-label={theme === "light" ? "Too bright? Switch to dark mode" : "Too dark? Switch to light mode"}
        >
          {theme === "light" ? (
            <FaRegSun className="h-4 w-4 group-hover:scale-125" />
          ) : (
            <FaRegMoon className="h-4 w-4 group-hover:scale-125" />
          )}
        </TooltipTrigger>
        <TooltipContent>
          {theme === "light" ? <p>Too bright? Switch to dark mode</p> : <p>Too dark? Switch to light mode</p>}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
