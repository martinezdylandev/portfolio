import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import HeaderModeSwitcher from "../HeaderModeSwitcher";
import { BUTTON_ARIA_LABEL_TEXT, DARK_MODE_ALT_TEXT, LIGHT_MODE_ALT_TEXT } from "../data/headerModeSwitcherData";
import { resetModes, setupDarkMode, setupLightMode } from "./test-utils/testUtils";

describe("HeaderModeSwitcher component tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../utils/hooks/useThemeContext/useThemeContext.tsx");
      vi.mock("../../../../../utils/hooks/useMediaQuery/useMediaQuery");
      resetModes();
      setupLightMode();
   });

   test("should render the button element with the correct aria-label", () => {
      render(<HeaderModeSwitcher />);
      const button = screen.getByRole("button", { name: BUTTON_ARIA_LABEL_TEXT });
      expect(button).toBeInTheDocument();
   });

   test("should render the image element using the image role", () => {
      render(<HeaderModeSwitcher />);
      const image = screen.getByRole("img");
      expect(image).toBeInTheDocument();
   });

   test("should render the image element with the correct class when clicking on button", async () => {
      render(<HeaderModeSwitcher />);
      const button = screen.getByRole("button", { name: BUTTON_ARIA_LABEL_TEXT });
      expect(button).toBeInTheDocument();

      const image = screen.getByRole("img");
      expect(image).toBeInTheDocument();

      fireEvent.click(button);

      await waitFor(() => {
         expect(image).toHaveClass("toggle-mode-animation");
      });

      await waitFor(
         () => {
            expect(image).not.toHaveClass("toggle-mode-animation");
         },
         { timeout: 2000 },
      );
   });

   test("should render the light mode image with the correct alt text", () => {
      setupLightMode();
      render(<HeaderModeSwitcher />);
      const lightModeImage = screen.getByAltText(LIGHT_MODE_ALT_TEXT);
      expect(lightModeImage).toBeInTheDocument();
   });

   test("should render the dark mode image with the correct alt text", () => {
      setupDarkMode();
      render(<HeaderModeSwitcher />);
      const darkModeImage = screen.getByAltText(DARK_MODE_ALT_TEXT);
      expect(darkModeImage).toBeInTheDocument();
   });
});
