import { render, screen } from "@testing-library/react";
import { resetModes, setupDarkMode, setupLightMode } from "../../../../../__tests__/test-utils/testUtils";
import { LOGO_IMAGE_ALT_TEXT } from "../../../data/headerLogoData";
import HeaderLogoCompact from "../HeaderLogoCompact";

describe("HeaderLogoDesktop Component tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../../../utils/hooks/useThemeContext/useThemeContext.tsx");
      resetModes();
      setupLightMode();
   });

   test("should render header logo image element with correct alt text", () => {
      render(<HeaderLogoCompact />);
      const logoImage = screen.getByAltText(LOGO_IMAGE_ALT_TEXT);
      expect(logoImage).toBeInTheDocument();
   });

   test("should render header logo image element with correct src in ligth mode", () => {
      setupLightMode();
      render(<HeaderLogoCompact />);
      const logoImage = screen.getByAltText(LOGO_IMAGE_ALT_TEXT);
      expect(logoImage).toBeInTheDocument();
      expect(logoImage).toHaveAttribute("src", "/header/dm_logo_light_mode.svg");
   });

   test("should render header logo image element with correct src in dark mode", () => {
      setupDarkMode();
      render(<HeaderLogoCompact />);
      const logoImage = screen.getByAltText(LOGO_IMAGE_ALT_TEXT);
      expect(logoImage).toBeInTheDocument();
      expect(logoImage).toHaveAttribute("src", "/header/dm_logo_dark_mode.svg");
   });
});
