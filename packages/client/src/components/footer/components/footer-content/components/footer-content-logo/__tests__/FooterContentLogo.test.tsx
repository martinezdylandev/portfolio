import { render, screen } from "@testing-library/react";
import FooterContentLogo from "../FooterContentLogo";
import { FOOTER_CONTENT_LOGO_ARIA_LABEL, FOOTER_CONTENT_LOGO_DARK_MODE, FOOTER_CONTENT_LOGO_IMAGE_ALT, FOOTER_CONTENT_LOGO_LIGHT_MODE } from "../data/footerContentLogoData";
import { resetModes, setupDarkMode, setupLightMode } from "./test-utils/testUtils";

describe("FooterContentLogo tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../../../utils/hooks/useThemeContext/useThemeContext.tsx");
      resetModes();
      setupLightMode();
   });

   test("renders FooterContentLogo element", () => {
      render(<FooterContentLogo />);
      const FooterContentLogoElement = screen.getByLabelText(FOOTER_CONTENT_LOGO_ARIA_LABEL);
      expect(FooterContentLogoElement).toBeInTheDocument();
   });

   test("renders FooterContentLogo image", () => {
      render(<FooterContentLogo />);
      const FooterContentLogoImage = screen.getByAltText(FOOTER_CONTENT_LOGO_IMAGE_ALT);
      expect(FooterContentLogoImage).toBeInTheDocument();
   });

   test("renders FooterContentLogo image in light mode", () => {
      setupLightMode();
      render(<FooterContentLogo />);
      const FooterContentLogoImage = screen.getByAltText("Dylan Martinez's logo");
      expect(FooterContentLogoImage).toHaveAttribute("src", FOOTER_CONTENT_LOGO_LIGHT_MODE);
   });

   test("renders FooterContentLogo image in dark mode", () => {
      setupDarkMode();
      render(<FooterContentLogo />);
      const FooterContentLogoImage = screen.getByAltText("Dylan Martinez's logo");
      expect(FooterContentLogoImage).toHaveAttribute("src", FOOTER_CONTENT_LOGO_DARK_MODE);
   });
});
