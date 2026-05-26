import { render, screen } from "@testing-library/react";
import { FOOTER_SOCIAL_LINKEDIN_ARIA_LABEL, LINKEDIN_LOGO_ALT, LINKEDIN_LOGO_DARK_MODE, LINKEDIN_LOGO_LIGHT_MODE, LINKEDIN_PROFILE_URL } from "../data/footerSocialLinkedinData";
import FooterLinksSocialLinkedin from "../FooterLinksSocialLinkedin";
import { resetModes, setupDarkMode, setupLightMode } from "./test-utils/testUtils";

describe("FooterLinksSocialLinkedin component tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../../../../../utils/hooks/useThemeContext/useThemeContext.tsx");
      vi.mock("../../../../../../../../../utils/hooks/useMediaQuery/useMediaQuery.tsx");
      resetModes();
      setupLightMode();
   });

   test("renders the FooterLinksSocialLinkedin div element", () => {
      render(<FooterLinksSocialLinkedin />);
      const footerSocialLinkedinContainer = screen.getByLabelText(FOOTER_SOCIAL_LINKEDIN_ARIA_LABEL);
      expect(footerSocialLinkedinContainer).toBeInTheDocument();
   });

   test("renders the FooterLinksSocialLinkedin a element with the correct role", () => {
      render(<FooterLinksSocialLinkedin />);
      const footerLinksSocialLinkedinLink = screen.getByRole("link");
      expect(footerLinksSocialLinkedinLink).toBeInTheDocument();
   });

   test("renders the FooterLinksSocialLinkedin a element with the correct role and attribute", () => {
      render(<FooterLinksSocialLinkedin />);
      const footerLinksSocialLinkedinLink = screen.getByRole("link");
      expect(footerLinksSocialLinkedinLink).toBeInTheDocument();
      expect(footerLinksSocialLinkedinLink).toHaveAttribute("href", LINKEDIN_PROFILE_URL);
   });

   test("renders the FooterLinksSocialLinkedin element", () => {
      render(<FooterLinksSocialLinkedin />);
      const footerLinksSocialLinkedin = screen.getByAltText(LINKEDIN_LOGO_ALT);
      expect(footerLinksSocialLinkedin).toBeInTheDocument();
   });

   test("renders the FooterLinksSocialLinkedin light mode element", () => {
      render(<FooterLinksSocialLinkedin />);
      const footerLinksSocialLinkedinLightMode = screen.getByAltText(LINKEDIN_LOGO_ALT);
      expect(footerLinksSocialLinkedinLightMode).toHaveAttribute("src", LINKEDIN_LOGO_LIGHT_MODE);
   });

   test("renders the FooterLinksSocialLinkedin dark mode element", () => {
      setupDarkMode();
      render(<FooterLinksSocialLinkedin />);
      const footerLinksSocialLinkedinDarkMode = screen.getByAltText(LINKEDIN_LOGO_ALT);
      expect(footerLinksSocialLinkedinDarkMode).toHaveAttribute("src", LINKEDIN_LOGO_DARK_MODE);
   });
});
