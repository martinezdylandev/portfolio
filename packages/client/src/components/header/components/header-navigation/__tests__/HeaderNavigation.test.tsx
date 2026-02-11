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

   test("should render HeaderNavigation navigation component with the correct aria label", () => {
      render(<HeaderNavigation />);
      const navElement = screen.getByLabelText(NAV_ARIA_LABEL_TEXT);
      expect(navElement).toBeInTheDocument();
   });

   test("should render headerNavigationCompact component on small screns", () => {
      vi.mocked(useMediaQuery).mockReturnValue(false);
      render(<HeaderNavigation />);
      const navElement = screen.getByLabelText(NAV_ARIA_LABEL_TEXT);
      const headerLogoCompact = screen.getByLabelText(NAV_COMPACT_ARIA_LABEL_TEXT);
      expect(navElement).toBeInTheDocument();
      expect(navElement).toContainElement(headerLogoCompact);
   });

   test("should render headerNavigationDesktop component on larger screns", () => {
      vi.mocked(useMediaQuery).mockReturnValue(true);
      render(<HeaderNavigation />);
      const navElement = screen.getByLabelText(NAV_ARIA_LABEL_TEXT);
      const headerLogoDesktop = screen.getByLabelText(NAV_DESKTOP_ARIA_LABEL_TEXT);
      expect(navElement).toBeInTheDocument();
      expect(navElement).toContainElement(headerLogoDesktop);
   });
});
