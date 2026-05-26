import { render, screen } from "@testing-library/react";
import { useMediaQuery } from "../../../../../utils/hooks/useMediaQuery/useMediaQuery";
import { NAV_ARIA_LABEL_TEXT, NAV_DESKTOP_ARIA_LABEL_TEXT } from "../data/footerNavigationData";
import FooterNavigation from "../FooterNavigation";
import { resetModes, setupLightMode } from "./test-utils/testUtils";

describe("FooterNavigation tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../utils/hooks/useThemeContext/useThemeContext.tsx");
      vi.mock("../../../../../utils/hooks/useMediaQuery/useMediaQuery.tsx");
      resetModes();
      setupLightMode();
   });

   test("renders FooterNavigation element with the correct aria label", () => {
      render(<FooterNavigation />);
      const footerNavigation = screen.getByLabelText(NAV_ARIA_LABEL_TEXT);
      expect(footerNavigation).toBeInTheDocument();
   });

   test("should render FooterNavigationCompact on small screens", () => {
      vi.mocked(useMediaQuery).mockReturnValue(false);
      render(<FooterNavigation />);
      const footerNavigation = screen.getByLabelText(NAV_ARIA_LABEL_TEXT);
      const buttonElement = screen.getByRole("button", { name: "Open footer navigation menu" });
      expect(footerNavigation).toBeInTheDocument();
      expect(footerNavigation).toContainElement(buttonElement);
   });

   test("should not render FooterNavigationDesktop on small screens", () => {
      vi.mocked(useMediaQuery).mockReturnValue(false);
      render(<FooterNavigation />);
      const desktopElement = screen.queryByLabelText(NAV_DESKTOP_ARIA_LABEL_TEXT);
      expect(desktopElement).not.toBeInTheDocument();
   });

   test("should render FooterNavigationDesktop on large screens", () => {
      vi.mocked(useMediaQuery).mockReturnValue(true);
      render(<FooterNavigation />);
      const footerNavigation = screen.getByLabelText(NAV_ARIA_LABEL_TEXT);
      const desktopElement = screen.getByLabelText(NAV_DESKTOP_ARIA_LABEL_TEXT);
      expect(footerNavigation).toBeInTheDocument();
      expect(footerNavigation).toContainElement(desktopElement);
   });

   test("should not render FooterNavigationCompact on large screens", () => {
      vi.mocked(useMediaQuery).mockReturnValue(true);
      render(<FooterNavigation />);
      const buttonElement = screen.queryByRole("button", { name: "Open footer navigation menu" });
      expect(buttonElement).not.toBeInTheDocument();
   });
});
