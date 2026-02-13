import { render, screen } from "@testing-library/react";
import { FOOTER_CONTENT_SOCIAL_GITHUB_ARIA_LABEL, GITHUB_LOGO_ALT, GITHUB_LOGO_DARK_MODE, GITHUB_LOGO_LIGHT_MODE, GITHUB_PROFILE_URL } from "../data/footerContentSocialGithubData";
import FooterContentLinksSocialGithub from "../FooterContentLinksSocialGithub";
import { resetModes, setupDarkMode, setupLightMode } from "./test-utils/testUtils";

describe("FooterContentLinksSocialGithub component tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../../../../../../../utils/hooks/useThemeContext/useThemeContext.tsx");
      vi.mock("../../../../../../../../../../../utils/hooks/useMediaQuery/useMediaQuery.tsx");
      resetModes();
      setupLightMode();
   });

   test("renders the FooterContentLinksGithub div element", () => {
      render(<FooterContentLinksSocialGithub />);
      const footerCOntentSocialGithubContainer = screen.getByLabelText(FOOTER_CONTENT_SOCIAL_GITHUB_ARIA_LABEL);
      expect(footerCOntentSocialGithubContainer).toBeInTheDocument();
   });

   test("renders the FooterContentLinksGithub a element with the correct href", () => {
      render(<FooterContentLinksSocialGithub />);
      const footerContentLinksSocialGithubLink = screen.getByRole("link");
      expect(footerContentLinksSocialGithubLink).toHaveAttribute("href", GITHUB_PROFILE_URL);
      expect(footerContentLinksSocialGithubLink).toBeInTheDocument();
   });

   test("renders the FooterContentLinksGithub element", () => {
      render(<FooterContentLinksSocialGithub />);
      const footerContentLinksSocialGithub = screen.getByAltText(GITHUB_LOGO_ALT);
      expect(footerContentLinksSocialGithub).toBeInTheDocument();
   });

   test("renders the FooterContentLinksGithub light mode element", () => {
      render(<FooterContentLinksSocialGithub />);
      const footerContentLinksSocialGithubLightMode = screen.getByAltText(GITHUB_LOGO_ALT);
      expect(footerContentLinksSocialGithubLightMode).toHaveAttribute("src", GITHUB_LOGO_LIGHT_MODE);
   });

   test("renders the FooterContentLinksGithub dark mode element", () => {
      setupDarkMode();
      render(<FooterContentLinksSocialGithub />);
      const footerContentLinksSocialGithubDarkMode = screen.getByAltText(GITHUB_LOGO_ALT);
      expect(footerContentLinksSocialGithubDarkMode).toHaveAttribute("src", GITHUB_LOGO_DARK_MODE);
   });
});
