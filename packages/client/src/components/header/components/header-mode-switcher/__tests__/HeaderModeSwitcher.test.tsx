import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { useMediaQuery } from "../../../../../utils/hooks/useMediaQuery/useMediaQuery";
import HeaderModeSwitcher from "../HeaderModeSwitcher";
import { BUTTON_ARIA_LABEL_TEXT } from "../data/headerModeSwitcherData";
import { resetModes, setupLightMode } from "./test-utils/testUtils";

describe("HeaderModeSwitcher component tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../utils/hooks/useThemeContext/useThemeContext.tsx");
      vi.mock("../../../../../utils/hooks/useMediaQuery/useMediaQuery");
      resetModes();
      setupLightMode();
   });

   test("should render HeaderModeSwitcherCompact on small screens", () => {
      vi.mocked(useMediaQuery).mockReturnValue(false);
      render(<HeaderModeSwitcher />);
      const buttonElement = screen.getByRole("button", { name: BUTTON_ARIA_LABEL_TEXT });
      expect(buttonElement).toBeInTheDocument();
      expect(buttonElement).toHaveClass("h-10", "w-10");
   });

   test("should render HeaderModeSwitcherDesktop on large screens", () => {
      vi.mocked(useMediaQuery).mockReturnValue(true);
      render(<HeaderModeSwitcher />);
      const buttonElement = screen.getByRole("button", { name: BUTTON_ARIA_LABEL_TEXT });
      expect(buttonElement).toBeInTheDocument();
      expect(buttonElement).toHaveClass("h-12", "w-12");
   });
});
