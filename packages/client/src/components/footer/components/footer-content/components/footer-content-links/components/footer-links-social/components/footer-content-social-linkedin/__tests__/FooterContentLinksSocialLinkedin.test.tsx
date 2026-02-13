import { render, screen } from "@testing-library/react";
import { FOOTER_CONTENT_SOCIAL_LINKEDIN_ARIA_LABEL, LINKEDIN_LOGO_ALT, LINKEDIN_LOGO_DARK_MODE, LINKEDIN_LOGO_LIGHT_MODE, LINKEDIN_PROFILE_URL } from "../data/footerContentSocialLinkedinData";
import FooterContentLinksSocialLinkedin from "../FooterContentLinksSocialLinkedin";
import { resetModes, setupDarkMode, setupLightMode } from "./test-utils/testUtils";

describe("FooterContentLinksSocialLinkedin component tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../../../../../../../utils/hooks/useThemeContext/useThemeContext.tsx");
      vi.mock("../../../../../../../../../../../utils/hooks/useMediaQuery/useMediaQuery.tsx");
      resetModes();
      setupLightMode();
   });

   test("renders the FooterContentLinksLinkedin div element", () => {
      render(<FooterContentLinksSocialLinkedin />);
      const footerCOntentSocialLinkedinContainer = screen.getByLabelText(FOOTER_CONTENT_SOCIAL_LINKEDIN_ARIA_LABEL);
      expect(footerCOntentSocialLinkedinContainer).toBeInTheDocument();
   });

   test("renders the FooterContentLinksLinkedin a element with the correct role", () => {
      render(<FooterContentLinksSocialLinkedin />);
      const footerContentLinksSocialLinkedinLink = screen.getByRole("link");
      expect(footerContentLinksSocialLinkedinLink).toBeInTheDocument();
   });

   test("renders the FooterContentLinksLinkedin a element with the correct role and attribute", () => {
      render(<FooterContentLinksSocialLinkedin />);
      const footerContentLinksSocialLinkedinLink = screen.getByRole("link");
      expect(footerContentLinksSocialLinkedinLink).toBeInTheDocument();
      expect(footerContentLinksSocialLinkedinLink).toHaveAttribute("href", LINKEDIN_PROFILE_URL);
   });

   test("renders the FooterContentLinksLinkedin element", () => {
      render(<FooterContentLinksSocialLinkedin />);
      const footerContentLinksSocialLinkedin = screen.getByAltText(LINKEDIN_LOGO_ALT);
      expect(footerContentLinksSocialLinkedin).toBeInTheDocument();
   });

   test("renders the FooterContentLinksLinkedin light mode element", () => {
      render(<FooterContentLinksSocialLinkedin />);
      const footerContentLinksSocialLinkedinDarkMode = screen.getByAltText(LINKEDIN_LOGO_ALT);
      expect(footerContentLinksSocialLinkedinDarkMode).toHaveAttribute("src", LINKEDIN_LOGO_LIGHT_MODE);
   });

   test("renders the FooterContentLinksLinkedin dark mode element", () => {
      setupDarkMode();
      render(<FooterContentLinksSocialLinkedin />);
      const footerContentLinksSocialLinkedinDarkMode = screen.getByAltText(LINKEDIN_LOGO_ALT);
      expect(footerContentLinksSocialLinkedinDarkMode).toHaveAttribute("src", LINKEDIN_LOGO_DARK_MODE);
   });
});
