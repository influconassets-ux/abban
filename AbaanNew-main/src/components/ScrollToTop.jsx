import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  // 1. Scroll to top on normal route changes
  useEffect(() => {
    const hash = window.location.hash;

    if (!hash) {
      // Reset scroll position
      window.scrollTo({ top: 0, behavior: "smooth" });
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }, [pathname]);// Important: use pathname instead of hash to force re-trigger

  return null;
}
