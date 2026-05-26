import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import { BUTTON_ARIA_LABEL_TEXT, DARK_MODE_ALT_TEXT, LIGHT_MODE_ALT_TEXT } from "../../../data/headerModeSwitcherData";
import HeaderModeSwitcherDesktop from "../HeaderModeSwitcherDesktop";
import { resetModes, setupDarkMode, setupLightMode } from "./test-utils/testUtils";

describe("HeaderModeSwitcherDesktop component tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../../../utils/hooks/useThemeContext/useThemeContext.tsx");
      vi.mock("../../../../../../../utils/hooks/useMediaQuery/useMediaQuery");
      resetModes();
      setupLightMode();
   });

   test("should render the button element with the correct aria-label", () => {
      render(<HeaderModeSwitcherDesktop />);
      const buttonElement = screen.getByRole("button", { name: BUTTON_ARIA_LABEL_TEXT });
      expect(buttonElement).toBeInTheDocument();
   });

   test("should render the image element using the image role", () => {
      render(<HeaderModeSwitcherDesktop />);
      const imageElement = screen.getByRole("img");
      expect(imageElement).toBeInTheDocument();
   });

   test("should render the image element with the toggle animation class when clicking on button", async () => {
      render(<HeaderModeSwitcherDesktop />);
      const buttonElement = screen.getByRole("button", { name: BUTTON_ARIA_LABEL_TEXT });
      const imageElement = screen.getByRole("img");

      fireEvent.click(buttonElement);

      await waitFor(() => {
         expect(imageElement).toHaveClass("toggle-mode-animation");
      });

      await waitFor(
         () => {
            expect(imageElement).not.toHaveClass("toggle-mode-animation");
         },
         { timeout: 2000 },
      );
   });

   test("should render the light mode image with the correct alt text", () => {
      setupLightMode();
      render(<HeaderModeSwitcherDesktop />);
      const lightModeImage = screen.getByAltText(LIGHT_MODE_ALT_TEXT);
      expect(lightModeImage).toBeInTheDocument();
   });

   test("should render the dark mode image with the correct alt text", () => {
      setupDarkMode();
      render(<HeaderModeSwitcherDesktop />);
      const darkModeImage = screen.getByAltText(DARK_MODE_ALT_TEXT);
      expect(darkModeImage).toBeInTheDocument();
   });
});
