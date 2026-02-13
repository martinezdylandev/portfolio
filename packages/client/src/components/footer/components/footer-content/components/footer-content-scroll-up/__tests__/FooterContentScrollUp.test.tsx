import { render, screen } from "@testing-library/react";
import { FOOTER_ARROW_ICON_DARK_MODE, FOOTER_ARROW_ICON_LIGHT_MODE, FOOTER_SCROLL_UP_ARIA_LABEL, FOOTER_SCROLL_UP_ARROW_ICON_ALT_TEXT, FOOTER_SCROLL_UP_TEXT } from "../data/footerContentScrollUpData";
import FooterContentScrollUp from "../FooterContentScrollUp";
import { resetModes, setupDarkMode, setupLightMode } from "./test-utils/testUtils";

describe("FooterContentScrollUp tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../../../utils/hooks/useThemeContext/useThemeContext.tsx");
      resetModes();
      setupLightMode();
   });

   test("renders FooterContentScrollUp element", () => {
      render(<FooterContentScrollUp />);
      const FooterContentScrollUpElement = screen.getByLabelText(FOOTER_SCROLL_UP_ARIA_LABEL);
      expect(FooterContentScrollUpElement).toBeInTheDocument();
   });

   test("renders FooterContentScrollUp link element", () => {
      render(<FooterContentScrollUp />);
      const FooterContentScrollUpLink = screen.getByRole("link");
      expect(FooterContentScrollUpLink).toHaveAttribute("href", "#top");
      expect(FooterContentScrollUpLink).toBeInTheDocument();
   });

   test("renders FooterContentScrollUp span element", () => {
      render(<FooterContentScrollUp />);
      const FooterContentScrollUpText = screen.getByText(FOOTER_SCROLL_UP_TEXT);
      expect(FooterContentScrollUpText).toBeInTheDocument();
   });

   test("renders FooterContentScrollUp arrow icon", () => {
      render(<FooterContentScrollUp />);
      const FooterContentScrollUpArrowIcon = screen.getByAltText(FOOTER_SCROLL_UP_ARROW_ICON_ALT_TEXT);
      expect(FooterContentScrollUpArrowIcon).toBeInTheDocument();
   });

   test("renders FooterContentScrollUp arrow icon in light mode", () => {
      render(<FooterContentScrollUp />);
      const FooterContentScrollUpArrowIcon = screen.getByAltText(FOOTER_SCROLL_UP_ARROW_ICON_ALT_TEXT);
      expect(FooterContentScrollUpArrowIcon).toHaveAttribute("src", FOOTER_ARROW_ICON_LIGHT_MODE);
   });

   test("renders FooterContentScrollUp arrow icon in dark mode", () => {
      setupDarkMode();
      render(<FooterContentScrollUp />);
      const FooterContentScrollUpArrowIcon = screen.getByAltText(FOOTER_SCROLL_UP_ARROW_ICON_ALT_TEXT);
      expect(FooterContentScrollUpArrowIcon).toHaveAttribute("src", FOOTER_ARROW_ICON_DARK_MODE);
   });
});
