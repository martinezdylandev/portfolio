import { render, screen } from "@testing-library/react";
import { FOOTER_SOCIAL_ARIA_LABEL, FOOTER_SOCIAL_SPAN_TEXT } from "../data/footerSocialData";
import FooterLinksSocial from "../FooterLinksSocial";
import { resetModes, setupLightMode } from "./test-utils/testUtils";

describe("FooterLinksSocial tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../../../utils/hooks/useThemeContext/useThemeContext.tsx");
      vi.mock("../../../../../../../utils/hooks/useMediaQuery/useMediaQuery.tsx");
      resetModes();
      setupLightMode();
   });

   test("renders FooterLinksSocial element", () => {
      render(<FooterLinksSocial />);
      const footerLinksSocialElement = screen.getByLabelText(FOOTER_SOCIAL_ARIA_LABEL);
      expect(footerLinksSocialElement).toBeInTheDocument();
   });

   test("renders FooterLinksSocial span element", () => {
      render(<FooterLinksSocial />);
      const footerLinksSocialSpanElement = screen.getByText(FOOTER_SOCIAL_SPAN_TEXT);
      expect(footerLinksSocialSpanElement).toBeInTheDocument();
   });
});
