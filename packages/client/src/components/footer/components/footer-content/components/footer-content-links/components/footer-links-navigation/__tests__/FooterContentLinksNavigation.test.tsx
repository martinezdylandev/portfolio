import { render, screen } from "@testing-library/react";
import FooterContentLinksNavigation from "../FooterContentLinksNavigation";
import { FOOTER_CONTENT_LINKS_NAVIGATION_ARIA_LABEL, FOOTER_CONTENT_LINKS_NAVIGATION_LINKS, FOOTER_CONTENT_LINKS_NAVIGATION_SPAN_TEXT } from "../data/footerContentLinksNavigationData";
import { resetModes, setupLightMode } from "./test-utils/testUtils";

describe("FooterContentLinksNavigation tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../../../../../utils/hooks/useThemeContext/useThemeContext.tsx");
      vi.mock("../../../../../../../../../utils/hooks/useMediaQuery/useMediaQuery.tsx");
      resetModes();
      setupLightMode();
   });

   test("renders FooterContentLinksNavigation element", () => {
      render(<FooterContentLinksNavigation />);
      const FooterContentLinksNavigationElement = screen.getByLabelText(FOOTER_CONTENT_LINKS_NAVIGATION_ARIA_LABEL);
      expect(FooterContentLinksNavigationElement).toBeInTheDocument();
   });

   test("renders FooterContentLinksNavigation span element", () => {
      render(<FooterContentLinksNavigation />);
      const spanElement = screen.getByText(FOOTER_CONTENT_LINKS_NAVIGATION_SPAN_TEXT);
      expect(spanElement).toBeInTheDocument();
   });

   test("renders FooterContentLinksNavigation list element", () => {
      render(<FooterContentLinksNavigation />);
      const listElement = screen.getByRole("list");
      expect(listElement).toBeInTheDocument();
   });

   test("renders FooterContentLinksNavigation link elements with the correct aria label", () => {
      render(<FooterContentLinksNavigation />);
      const links = screen.getAllByRole("link");
      FOOTER_CONTENT_LINKS_NAVIGATION_LINKS.forEach((expectedLink, index) => {
         expect(links[index]).toHaveAttribute("aria-label", expectedLink.ARIA_LABEL);
      });
   });

   test("renders FooterContentLinksNavigation span elements with the correct text content", () => {
      render(<FooterContentLinksNavigation />);
      FOOTER_CONTENT_LINKS_NAVIGATION_LINKS.forEach((expectedLink) => {
         const link = screen.getByRole("link", { name: expectedLink.ARIA_LABEL });
         expect(link).toBeInTheDocument();

         const span = screen.getByText(expectedLink.LABEL);
         expect(link).toContainElement(span);
      });
   });
});
