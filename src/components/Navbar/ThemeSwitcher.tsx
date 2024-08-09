"use client";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useTheme } from "next-themes";
import { FaRegMoon, FaRegSun, FaSquareGithub } from "react-icons/fa6";

export default function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();

  return (
    <TooltipProvider>
      <Tooltip delayDuration={+process.env.TOOLTIP_DELAY_DURATION!}>
        <TooltipTrigger
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
          className="flex aspect-square h-full items-center justify-center transition-all hover:text-orange-500 active:translate-y-1"
          aria-label={theme === "light" ? "Too bright? Switch to dark mode" : "Too dark? Switch to light mode"}
        >
          {theme === "light" ? <FaRegSun /> : <FaRegMoon />}
        </TooltipTrigger>
        <TooltipContent>
          {theme === "light" ? <p>Too bright? Switch to dark mode</p> : <p>Too dark? Switch to light mode</p>}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
