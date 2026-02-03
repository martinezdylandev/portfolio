import React, { useEffect, useRef, useState } from "react";

interface UseCompactNavigationMenuReturn {
   isNavigationMenuOpen: boolean;
   handleClick: () => void;
   navRef: React.RefObject<HTMLElement | null>;
   buttonRef: React.RefObject<HTMLButtonElement | null>;
}

export const useCompactNavigationMenu = (): UseCompactNavigationMenuReturn => {
   const [isNavigationMenuOpen, setIsNavigationMenuOpen] = useState(false);
   const navRef = useRef<HTMLElement>(null);
   const buttonRef = useRef<HTMLButtonElement>(null);

   const handleClick = (): void => {
      setIsNavigationMenuOpen((prev) => !prev);
   };

   useEffect(() => {
      const handleEscape = (event: KeyboardEvent) => {
         if (event.key === "Escape") {
            setIsNavigationMenuOpen(false);
            buttonRef.current?.focus();
         }
      };

      const handleClickOutside = (event: MouseEvent) => {
         if (navRef.current && !navRef.current.contains(event.target as Node) && buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
            setIsNavigationMenuOpen(false);
         }
      };

      if (isNavigationMenuOpen) {
         document.addEventListener("keydown", handleEscape);
         document.addEventListener("mousedown", handleClickOutside);
         navRef.current?.focus();
      } else {
         document.removeEventListener("keydown", handleEscape);
         document.removeEventListener("mousedown", handleClickOutside);
      }

      return () => {
         document.removeEventListener("keydown", handleEscape);
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, [isNavigationMenuOpen]);

   return {
      isNavigationMenuOpen,
      handleClick,
      navRef,
      buttonRef,
   };
};
