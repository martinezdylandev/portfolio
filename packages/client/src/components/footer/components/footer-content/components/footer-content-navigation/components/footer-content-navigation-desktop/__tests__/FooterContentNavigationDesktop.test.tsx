import { render, screen } from "@testing-library/react";
import { NAV_DESKTOP_ARIA_LABEL_TEXT } from "../../../data/footerContentNavigationData";
import FooterContentNavigationDesktop from "../FooterContentNavigationDesktop";
import { resetModes, setupLightMode } from "./test-utils/testUtils";

describe("FooterContentNavigationDesktop tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../../../../../utils/hooks/useThemeContext/useThemeContext.tsx");
      vi.mock("../../../../../../../../../utils/hooks/useMediaQuery/useMediaQuery.tsx");
      resetModes();
      setupLightMode();
   });

   test("renders FooterContentNavigationDesktop element with the correct aria label", () => {
      render(<FooterContentNavigationDesktop />);
      const FooterContentNavigationDesktopElement = screen.getByLabelText(NAV_DESKTOP_ARIA_LABEL_TEXT);
      expect(FooterContentNavigationDesktopElement).toBeInTheDocument();
   });
});
