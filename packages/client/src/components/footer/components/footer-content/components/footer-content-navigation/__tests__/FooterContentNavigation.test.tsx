import { render, screen } from "@testing-library/react";
import { useMediaQuery } from "../../../../../../../utils/hooks/useMediaQuery/useMediaQuery";
import { NAV_ARIA_LABEL_TEXT, NAV_COMPACT_ARIA_LABEL_TEXT, NAV_DESKTOP_ARIA_LABEL_TEXT } from "../data/footerContentNavigationData";
import FooterContentNavigation from "../FooterContentNavigation";
import { resetModes, setupLightMode } from "./test-utils/testUtils";

describe("FooterContentNavigation tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../../../utils/hooks/useThemeContext/useThemeContext.tsx");
      vi.mock("../../../../../../../utils/hooks/useMediaQuery/useMediaQuery.tsx");
      resetModes();
      setupLightMode();
   });

   test("renders FooterContentNavigation element with the correct aria label", () => {
      render(<FooterContentNavigation />);
      const FooterContentNavigationElement = screen.getByLabelText(NAV_ARIA_LABEL_TEXT);
      expect(FooterContentNavigationElement).toBeInTheDocument();
   });

   test("should render headerNavigationCompact component on small screns", () => {
      vi.mocked(useMediaQuery).mockReturnValue(false);
      render(<FooterContentNavigation />);
      const navElement = screen.getByLabelText(NAV_ARIA_LABEL_TEXT);
      const headerLogoCompact = screen.getByLabelText(NAV_COMPACT_ARIA_LABEL_TEXT);
      expect(navElement).toBeInTheDocument();
      expect(navElement).toContainElement(headerLogoCompact);
   });

   test("should render headerNavigationDesktop component on larger screns", () => {
      vi.mocked(useMediaQuery).mockReturnValue(true);
      render(<FooterContentNavigation />);
      const navElement = screen.getByLabelText(NAV_ARIA_LABEL_TEXT);
      const headerLogoDesktop = screen.getByLabelText(NAV_DESKTOP_ARIA_LABEL_TEXT);
      expect(navElement).toBeInTheDocument();
      expect(navElement).toContainElement(headerLogoDesktop);
   });
});
