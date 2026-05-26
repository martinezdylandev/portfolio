import { render, screen } from "@testing-library/react";
import { useMediaQuery } from "../../../../../utils/hooks/useMediaQuery/useMediaQuery";
import HeaderNavigation from "../HeaderNavigation";
import { NAV_ARIA_LABEL_TEXT, NAV_COMPACT_ARIA_LABEL_TEXT, NAV_DESKTOP_ARIA_LABEL_TEXT } from "../data/headerNavigationData";
import { resetModes, setupLightMode } from "./test-utils/testUtils";

describe("HeaderNavigation Component tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../utils/hooks/useThemeContext/useThemeContext.tsx");
      vi.mock("../../../../../utils/hooks/useMediaQuery/useMediaQuery");
      resetModes();
      setupLightMode();
   });

   test("should render HeaderNavigation container with the correct aria label", () => {
      vi.mocked(useMediaQuery).mockReturnValue(false);
      render(<HeaderNavigation />);
      const navElement = screen.getByLabelText(NAV_ARIA_LABEL_TEXT);
      expect(navElement).toBeInTheDocument();
   });

   test("should render HeaderNavigationCompact on small screens", () => {
      vi.mocked(useMediaQuery).mockReturnValue(false);
      render(<HeaderNavigation />);
      const navElement = screen.getByLabelText(NAV_ARIA_LABEL_TEXT);
      const headerNavigationCompact = screen.getByRole("button", { name: "Open navigation menu" });
      expect(navElement).toBeInTheDocument();
      expect(navElement).toContainElement(headerNavigationCompact);
   });

   test("should not render HeaderNavigationDesktop on small screens", () => {
      vi.mocked(useMediaQuery).mockReturnValue(false);
      render(<HeaderNavigation />);
      const headerNavigationDesktop = screen.queryByLabelText(NAV_DESKTOP_ARIA_LABEL_TEXT);
      expect(headerNavigationDesktop).not.toBeInTheDocument();
   });

   test("should render HeaderNavigationDesktop on large screens", () => {
      vi.mocked(useMediaQuery).mockReturnValue(true);
      render(<HeaderNavigation />);
      const navElement = screen.getByLabelText(NAV_ARIA_LABEL_TEXT);
      const headerNavigationDesktop = screen.getByLabelText(NAV_DESKTOP_ARIA_LABEL_TEXT);
      expect(navElement).toBeInTheDocument();
      expect(navElement).toContainElement(headerNavigationDesktop);
   });

   test("should not render HeaderNavigationCompact on large screens", () => {
      vi.mocked(useMediaQuery).mockReturnValue(true);
      render(<HeaderNavigation />);
      const headerNavigationCompact = screen.queryByRole("button", { name: "Open navigation menu" });
      expect(headerNavigationCompact).not.toBeInTheDocument();
   });
});
