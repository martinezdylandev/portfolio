import { render, screen } from "@testing-library/react";
import FooterLogoDesktop from "../FooterLogoDesktop";
import { FOOTER_LOGO_DARK_MODE, FOOTER_LOGO_DESKTOP_ARIA_LABEL, FOOTER_LOGO_IMAGE_ALT, FOOTER_LOGO_LIGHT_MODE } from "../../../data/footerLogoData";
import { resetModes, setupDarkMode, setupLightMode } from "./test-utils/testUtils";

describe("FooterLogoDesktop tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../../../utils/hooks/useThemeContext/useThemeContext.tsx");
      resetModes();
      setupLightMode();
   });

   test("renders FooterLogoDesktop link element", () => {
      render(<FooterLogoDesktop />);
      const linkElement = screen.getByRole("link");
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute("href", "/");
      expect(linkElement).toHaveAttribute("aria-label", FOOTER_LOGO_DESKTOP_ARIA_LABEL);
   });

   test("renders FooterLogoDesktop image", () => {
      render(<FooterLogoDesktop />);
      const imageElement = screen.getByAltText(FOOTER_LOGO_IMAGE_ALT);
      expect(imageElement).toBeInTheDocument();
   });

   test("renders image with light mode source", () => {
      setupLightMode();
      render(<FooterLogoDesktop />);
      const imageElement = screen.getByAltText(FOOTER_LOGO_IMAGE_ALT);
      expect(imageElement).toHaveAttribute("src", FOOTER_LOGO_LIGHT_MODE);
   });

   test("renders image with dark mode source", () => {
      setupDarkMode();
      render(<FooterLogoDesktop />);
      const imageElement = screen.getByAltText(FOOTER_LOGO_IMAGE_ALT);
      expect(imageElement).toHaveAttribute("src", FOOTER_LOGO_DARK_MODE);
   });
});
