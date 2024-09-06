"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      className="bg-[#d23669] dark:bg-[#ffa7c4] text-[white] dark:text-[#282c35] select-none text-[13px] py-[0.25rem] px-[0.5rem] font-bold tracking-[2px] rounded-[5px] w-[73px] flex items-center justify-center cursor-pointer transition-all duration-300 ease-linear"
    >
      Toggle
    </div>
  );
};

export default ThemeToggle;
