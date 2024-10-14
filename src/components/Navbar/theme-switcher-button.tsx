"use client";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { AnimatePresence, motion } from "framer-motion";
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
        className="bg-accent/30 hover:bg-accent border-border inline-flex aspect-square h-full cursor-wait items-center justify-center rounded-xl border-2 transition-all"
        aria-label="Loading theme switcher"
        title="Loading theme switcher"
      >
        <FaCircleDot className="fill-muted-foreground h-4 w-4 animate-pulse" />
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
          className="bg-accent/30 hover:bg-accent border-border inline-flex aspect-square h-full items-center justify-center rounded-xl border-2 transition-all hover:border-orange-500"
          aria-label={theme === "light" ? "Too bright? Switch to dark mode" : "Too dark? Switch to light mode"}
        >
          <AnimatePresence mode="wait">
            {theme === "light" ? (
              <motion.div
                key="sun"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.15 }}
              >
                <FaRegSun />
              </motion.div>
            ) : (
              <motion.div
                key="moon"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.15 }}
              >
                <FaRegMoon />
              </motion.div>
            )}
          </AnimatePresence>
        </TooltipTrigger>
        <TooltipContent>
          {theme === "light" ? <p>Too bright? Switch to dark mode</p> : <p>Too dark? Switch to light mode</p>}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
