import { useEffect, useState } from "react";

export const useMediaQuery = (query: string): boolean => {
   const [matches, setMatches] = useState<boolean>(() => {
      if (typeof window !== "undefined") {
         return window.matchMedia(query).matches;
      }
      return false;
   });

   useEffect(() => {
      if (typeof window === "undefined") {
         return;
      }

      const mediaQuery = window.matchMedia(query);
      setMatches(mediaQuery.matches);

      const handleChange = (event: MediaQueryListEvent) => {
         setMatches(event.matches);
      };

      // Modern browsers support addEventListener
      if (mediaQuery.addEventListener) {
         mediaQuery.addEventListener("change", handleChange);
         return () => {
            mediaQuery.removeEventListener("change", handleChange);
         };
      } else {
         // Fallback for older browsers
         mediaQuery.addListener(handleChange);
         return () => {
            mediaQuery.removeListener(handleChange);
         };
      }
   }, [query]);

   return matches;
};
