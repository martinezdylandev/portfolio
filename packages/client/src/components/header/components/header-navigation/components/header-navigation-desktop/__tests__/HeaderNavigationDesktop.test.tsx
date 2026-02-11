import { render, screen } from "@testing-library/react";
import { resetModes, setupLightMode } from "../../../__tests__/test-utils/testUtils";
import { HEADER_NAVIGATION_LINKS, LIST_DESKTOP_ARIA_LABEL_TEXT, NAV_DESKTOP_ARIA_LABEL_TEXT } from "../../../data/headerNavigationData";
import HeaderNavigationDesktop from "../HeaderNavigationDesktop";

describe("HeaderNavigation Component tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../../../utils/hooks/useThemeContext/useThemeContext.tsx");
      vi.mock("../../../../../../../utils/hooks/useMediaQuery/useMediaQuery");
      resetModes();
      setupLightMode();
   });

   test("should render HeaderNavigationDesktop component with the correct aria label", () => {
      render(<HeaderNavigationDesktop />);
      const navElement = screen.getByLabelText(NAV_DESKTOP_ARIA_LABEL_TEXT);
      expect(navElement).toBeInTheDocument();
   });

   test("should render HeaderNavigationDesktop list element with the correct aria label", () => {
      render(<HeaderNavigationDesktop />);
      const listElement = screen.getByLabelText(LIST_DESKTOP_ARIA_LABEL_TEXT);
      expect(listElement).toBeInTheDocument();
   });

   test("should render HeaderNavigationDesktop links elements with their correct aria label", () => {
      render(<HeaderNavigationDesktop />);
      const listElement = screen.getByLabelText(LIST_DESKTOP_ARIA_LABEL_TEXT);
      expect(listElement).toBeInTheDocument();
      const links = screen.getAllByRole("link");
      HEADER_NAVIGATION_LINKS.slice(1).forEach((expectedLink, index) => {
         expect(links[index]).toHaveAttribute("aria-label", expectedLink.ARIA_LABEL);
      });
   });

   test("should render HeaderNavigationDesktop span elements with their correct text content", () => {
      render(<HeaderNavigationDesktop />);
      HEADER_NAVIGATION_LINKS.slice(1).forEach((expectedLink) => {
         const link = screen.getByRole("link", { name: expectedLink.ARIA_LABEL });
         expect(link).toBeInTheDocument();

         const span = screen.getByText(expectedLink.LABEL);
         expect(link).toContainElement(span);
      });
   });
});
