import { render, screen } from "@testing-library/react";
import { useMediaQuery } from "../../../../../utils/hooks/useMediaQuery/useMediaQuery";
import FooterScrollUp from "../FooterScrollUp";
import { FOOTER_SCROLL_UP_ARIA_LABEL, FOOTER_SCROLL_UP_COMPACT_ARIA_LABEL, FOOTER_SCROLL_UP_DESKTOP_ARIA_LABEL } from "../data/footerScrollUpData";
import { resetModes, setupLightMode } from "./test-utils/testUtils";

describe("FooterScrollUp tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../utils/hooks/useThemeContext/useThemeContext.tsx");
      vi.mock("../../../../../utils/hooks/useMediaQuery/useMediaQuery.tsx");
      resetModes();
      setupLightMode();
   });

   test("renders FooterScrollUp element with the correct aria label", () => {
      render(<FooterScrollUp />);
      const footerScrollUp = screen.getByLabelText(FOOTER_SCROLL_UP_ARIA_LABEL);
      expect(footerScrollUp).toBeInTheDocument();
   });

   test("renders FooterScrollUpCompact on small screens", () => {
      vi.mocked(useMediaQuery).mockReturnValue(false);
      render(<FooterScrollUp />);
      const footerScrollUp = screen.getByLabelText(FOOTER_SCROLL_UP_ARIA_LABEL);
      const compactElement = screen.getByLabelText(FOOTER_SCROLL_UP_COMPACT_ARIA_LABEL);
      expect(footerScrollUp).toBeInTheDocument();
      expect(footerScrollUp).toContainElement(compactElement);
   });

   test("renders FooterScrollUpDesktop on large screens", () => {
      vi.mocked(useMediaQuery).mockReturnValue(true);
      render(<FooterScrollUp />);
      const footerScrollUp = screen.getByLabelText(FOOTER_SCROLL_UP_ARIA_LABEL);
      const desktopElement = screen.getByLabelText(FOOTER_SCROLL_UP_DESKTOP_ARIA_LABEL);
      expect(footerScrollUp).toBeInTheDocument();
      expect(footerScrollUp).toContainElement(desktopElement);
   });
});
