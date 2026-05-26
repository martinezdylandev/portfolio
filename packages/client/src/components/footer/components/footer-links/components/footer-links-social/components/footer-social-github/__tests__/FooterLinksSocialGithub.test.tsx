import { render, screen } from "@testing-library/react";
import { FOOTER_SOCIAL_GITHUB_ARIA_LABEL, GITHUB_LOGO_ALT, GITHUB_LOGO_DARK_MODE, GITHUB_LOGO_LIGHT_MODE, GITHUB_PROFILE_URL } from "../data/footerSocialGithubData";
import FooterLinksSocialGithub from "../FooterLinksSocialGithub";
import { resetModes, setupDarkMode, setupLightMode } from "./test-utils/testUtils";

describe("FooterLinksSocialGithub component tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../../../../../utils/hooks/useThemeContext/useThemeContext.tsx");
      vi.mock("../../../../../../../../../utils/hooks/useMediaQuery/useMediaQuery.tsx");
      resetModes();
      setupLightMode();
   });

   test("renders the FooterLinksSocialGithub div element", () => {
      render(<FooterLinksSocialGithub />);
      const footerSocialGithubContainer = screen.getByLabelText(FOOTER_SOCIAL_GITHUB_ARIA_LABEL);
      expect(footerSocialGithubContainer).toBeInTheDocument();
   });

   test("renders the FooterLinksSocialGithub a element with the correct href", () => {
      render(<FooterLinksSocialGithub />);
      const footerLinksSocialGithubLink = screen.getByRole("link");
      expect(footerLinksSocialGithubLink).toHaveAttribute("href", GITHUB_PROFILE_URL);
      expect(footerLinksSocialGithubLink).toBeInTheDocument();
   });

   test("renders the FooterLinksSocialGithub element", () => {
      render(<FooterLinksSocialGithub />);
      const footerLinksSocialGithub = screen.getByAltText(GITHUB_LOGO_ALT);
      expect(footerLinksSocialGithub).toBeInTheDocument();
   });

   test("renders the FooterLinksSocialGithub light mode element", () => {
      render(<FooterLinksSocialGithub />);
      const footerLinksSocialGithubLightMode = screen.getByAltText(GITHUB_LOGO_ALT);
      expect(footerLinksSocialGithubLightMode).toHaveAttribute("src", GITHUB_LOGO_LIGHT_MODE);
   });

   test("renders the FooterLinksSocialGithub dark mode element", () => {
      setupDarkMode();
      render(<FooterLinksSocialGithub />);
      const footerLinksSocialGithubDarkMode = screen.getByAltText(GITHUB_LOGO_ALT);
      expect(footerLinksSocialGithubDarkMode).toHaveAttribute("src", GITHUB_LOGO_DARK_MODE);
   });
});
