import { render, screen } from "@testing-library/react";
import FooterScrollUpDesktop from "../FooterScrollUpDesktop";
import { FOOTER_ARROW_ICON_DARK_MODE, FOOTER_ARROW_ICON_LIGHT_MODE, FOOTER_SCROLL_UP_ARROW_ICON_ALT_TEXT, FOOTER_SCROLL_UP_DESKTOP_ARIA_LABEL, FOOTER_SCROLL_UP_TEXT } from "../../../data/footerScrollUpData";
import { resetModes, setupDarkMode, setupLightMode } from "./test-utils/testUtils";

describe("FooterScrollUpDesktop tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../../../utils/hooks/useThemeContext/useThemeContext.tsx");
      resetModes();
      setupLightMode();
   });

   test("renders FooterScrollUpDesktop link element", () => {
      render(<FooterScrollUpDesktop />);
      const linkElement = screen.getByRole("link");
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute("href", "#top");
      expect(linkElement).toHaveAttribute("aria-label", FOOTER_SCROLL_UP_DESKTOP_ARIA_LABEL);
   });

   test("renders FooterScrollUpDesktop text", () => {
      render(<FooterScrollUpDesktop />);
      const spanElement = screen.getByText(FOOTER_SCROLL_UP_TEXT);
      expect(spanElement).toBeInTheDocument();
   });

   test("renders FooterScrollUpDesktop arrow icon", () => {
      render(<FooterScrollUpDesktop />);
      const imageElement = screen.getByAltText(FOOTER_SCROLL_UP_ARROW_ICON_ALT_TEXT);
      expect(imageElement).toBeInTheDocument();
   });

   test("renders arrow icon with light mode source", () => {
      setupLightMode();
      render(<FooterScrollUpDesktop />);
      const imageElement = screen.getByAltText(FOOTER_SCROLL_UP_ARROW_ICON_ALT_TEXT);
      expect(imageElement).toHaveAttribute("src", FOOTER_ARROW_ICON_LIGHT_MODE);
   });

   test("renders arrow icon with dark mode source", () => {
      setupDarkMode();
      render(<FooterScrollUpDesktop />);
      const imageElement = screen.getByAltText(FOOTER_SCROLL_UP_ARROW_ICON_ALT_TEXT);
      expect(imageElement).toHaveAttribute("src", FOOTER_ARROW_ICON_DARK_MODE);
   });
});
