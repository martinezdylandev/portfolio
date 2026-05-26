import { render, screen } from "@testing-library/react";
import FooterLinksNavigation from "../FooterLinksNavigation";
import { FOOTER_LINKS_NAVIGATION_ARIA_LABEL, FOOTER_LINKS_NAVIGATION_LINKS, FOOTER_LINKS_NAVIGATION_SPAN_TEXT } from "../data/footerLinksNavigationData";
import { resetModes, setupLightMode } from "./test-utils/testUtils";

describe("FooterLinksNavigation tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../../../utils/hooks/useThemeContext/useThemeContext.tsx");
      vi.mock("../../../../../../../utils/hooks/useMediaQuery/useMediaQuery.tsx");
      resetModes();
      setupLightMode();
   });

   test("renders FooterLinksNavigation element", () => {
      render(<FooterLinksNavigation />);
      const footerLinksNavigationElement = screen.getByLabelText(FOOTER_LINKS_NAVIGATION_ARIA_LABEL);
      expect(footerLinksNavigationElement).toBeInTheDocument();
   });

   test("renders FooterLinksNavigation span element", () => {
      render(<FooterLinksNavigation />);
      const spanElement = screen.getByText(FOOTER_LINKS_NAVIGATION_SPAN_TEXT);
      expect(spanElement).toBeInTheDocument();
   });

   test("renders FooterLinksNavigation list element", () => {
      render(<FooterLinksNavigation />);
      const listElement = screen.getByRole("list");
      expect(listElement).toBeInTheDocument();
   });

   test("renders FooterLinksNavigation link elements with the correct aria label", () => {
      render(<FooterLinksNavigation />);
      const links = screen.getAllByRole("link");
      FOOTER_LINKS_NAVIGATION_LINKS.forEach((expectedLink, index) => {
         expect(links[index]).toHaveAttribute("aria-label", expectedLink.ARIA_LABEL);
      });
   });

   test("renders FooterLinksNavigation span elements with the correct text content", () => {
      render(<FooterLinksNavigation />);
      FOOTER_LINKS_NAVIGATION_LINKS.forEach((expectedLink) => {
         const link = screen.getByRole("link", { name: expectedLink.ARIA_LABEL });
         expect(link).toBeInTheDocument();

         const span = screen.getByText(expectedLink.LABEL);
         expect(link).toContainElement(span);
      });
   });
});
