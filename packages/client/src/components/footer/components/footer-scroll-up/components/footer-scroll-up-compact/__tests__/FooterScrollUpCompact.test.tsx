import { render, screen } from "@testing-library/react";
import FooterScrollUpCompact from "../FooterScrollUpCompact";
import { FOOTER_ARROW_ICON_DARK_MODE, FOOTER_ARROW_ICON_LIGHT_MODE, FOOTER_SCROLL_UP_ARROW_ICON_ALT_TEXT, FOOTER_SCROLL_UP_COMPACT_ARIA_LABEL } from "../../../data/footerScrollUpData";
import { resetModes, setupDarkMode, setupLightMode } from "./test-utils/testUtils";

describe("FooterScrollUpCompact tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../../../utils/hooks/useThemeContext/useThemeContext.tsx");
      resetModes();
      setupLightMode();
   });

   test("renders FooterScrollUpCompact link element", () => {
      render(<FooterScrollUpCompact />);
      const linkElement = screen.getByRole("link");
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute("href", "#top");
      expect(linkElement).toHaveAttribute("aria-label", FOOTER_SCROLL_UP_COMPACT_ARIA_LABEL);
   });

   test("renders FooterScrollUpCompact arrow icon", () => {
      render(<FooterScrollUpCompact />);
      const imageElement = screen.getByAltText(FOOTER_SCROLL_UP_ARROW_ICON_ALT_TEXT);
      expect(imageElement).toBeInTheDocument();
   });

   test("renders arrow icon with light mode source", () => {
      setupLightMode();
      render(<FooterScrollUpCompact />);
      const imageElement = screen.getByAltText(FOOTER_SCROLL_UP_ARROW_ICON_ALT_TEXT);
      expect(imageElement).toHaveAttribute("src", FOOTER_ARROW_ICON_LIGHT_MODE);
   });

   test("renders arrow icon with dark mode source", () => {
      setupDarkMode();
      render(<FooterScrollUpCompact />);
      const imageElement = screen.getByAltText(FOOTER_SCROLL_UP_ARROW_ICON_ALT_TEXT);
      expect(imageElement).toHaveAttribute("src", FOOTER_ARROW_ICON_DARK_MODE);
   });
});
