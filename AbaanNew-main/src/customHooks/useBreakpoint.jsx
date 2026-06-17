// hooks/useBreakpoint.js
import { useEffect, useState } from "react";

const getCurrentBreakpoint = () => {
  if (window.innerWidth < 480) return "vsm";
  if (window.innerWidth >= 480 && window.innerWidth < 640) return "xs";
  if (window.innerWidth >= 640 && window.innerWidth < 768) return "sm";
  if (window.innerWidth >= 768 && window.innerWidth < 1024) return "md";
  if (window.innerWidth >= 1024 && window.innerWidth < 1280) return "lg";
  return "xl";
};

export default function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState(getCurrentBreakpoint());

  useEffect(() => {
    const handleResize = () => {
      setBreakpoint(getCurrentBreakpoint());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint;
}
