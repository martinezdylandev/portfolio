import { render, screen } from "@testing-library/react";
import { NAV_DESKTOP_ARIA_LABEL_TEXT } from "../../../data/footerNavigationData";
import FooterNavigationDesktop from "../FooterNavigationDesktop";
import { resetModes, setupLightMode } from "./test-utils/testUtils";

describe("FooterNavigationDesktop tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../../../utils/hooks/useThemeContext/useThemeContext.tsx");
      vi.mock("../../../../../../../utils/hooks/useMediaQuery/useMediaQuery.tsx");
      resetModes();
      setupLightMode();
   });

   test("renders FooterNavigationDesktop element with the correct aria label", () => {
      render(<FooterNavigationDesktop />);
      const footerNavigationDesktopElement = screen.getByLabelText(NAV_DESKTOP_ARIA_LABEL_TEXT);
      expect(footerNavigationDesktopElement).toBeInTheDocument();
   });
});
