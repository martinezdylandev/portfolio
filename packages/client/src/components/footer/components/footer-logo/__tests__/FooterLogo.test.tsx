import { render, screen } from "@testing-library/react";
import { useMediaQuery } from "../../../../../utils/hooks/useMediaQuery/useMediaQuery";
import FooterLogo from "../FooterLogo";
import { FOOTER_LOGO_ARIA_LABEL, FOOTER_LOGO_COMPACT_ARIA_LABEL, FOOTER_LOGO_DESKTOP_ARIA_LABEL } from "../data/footerLogoData";
import { resetModes, setupLightMode } from "./test-utils/testUtils";

describe("FooterLogo tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../utils/hooks/useThemeContext/useThemeContext.tsx");
      vi.mock("../../../../../utils/hooks/useMediaQuery/useMediaQuery.tsx");
      resetModes();
      setupLightMode();
   });

   test("renders FooterLogo element with the correct aria label", () => {
      render(<FooterLogo />);
      const footerLogo = screen.getByLabelText(FOOTER_LOGO_ARIA_LABEL);
      expect(footerLogo).toBeInTheDocument();
   });

   test("renders FooterLogoCompact on small screens", () => {
      vi.mocked(useMediaQuery).mockReturnValue(false);
      render(<FooterLogo />);
      const footerLogo = screen.getByLabelText(FOOTER_LOGO_ARIA_LABEL);
      const compactElement = screen.getByLabelText(FOOTER_LOGO_COMPACT_ARIA_LABEL);
      expect(footerLogo).toBeInTheDocument();
      expect(footerLogo).toContainElement(compactElement);
   });

   test("renders FooterLogoDesktop on large screens", () => {
      vi.mocked(useMediaQuery).mockReturnValue(true);
      render(<FooterLogo />);
      const footerLogo = screen.getByLabelText(FOOTER_LOGO_ARIA_LABEL);
      const desktopElement = screen.getByLabelText(FOOTER_LOGO_DESKTOP_ARIA_LABEL);
      expect(footerLogo).toBeInTheDocument();
      expect(footerLogo).toContainElement(desktopElement);
   });
});
