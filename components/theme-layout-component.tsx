"use client";
import React, { useEffect, useState } from "react";
import { ModeToggle } from "@/components/theme-toggle";
import { useTheme } from "next-themes";

export const ThemeLayoutComponent = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 🚫 Prevent render until client mounts
  if (!mounted) return null;

  return (
    <div className="flex">
      <div
        className="text-black dark:text-white rounded-md text-sm flex flex-col justify-center items-center absolute top-7 right-14 
        shadow-[43px_41px_0px_0px_rgba(0,0,0,0.04),34px_34px_0px_0px_rgba(0,0,0,0.2),26px_26px_0px_0px_rgba(0,0,0,0.4),18px_18px_0px_0px_rgba(0,0,0,0.7),10px_10px_0px_0px_#000000]
        dark:shadow-[43px_41px_0px_0px_rgba(255,255,255,0.02),34px_34px_0px_0px_rgba(255,255,255,0.05),26px_26px_0px_0px_rgba(255,255,255,0.08),18px_18px_0px_0px_rgba(255,255,255,0.12),10px_10px_0px_0px_rgba(255,255,255,0.2)]"
      >
        <ModeToggle />
      </div>
    </div>
  );
};