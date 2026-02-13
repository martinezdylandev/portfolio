import { render, screen } from "@testing-library/react";
import { FOOTER_CONTENT_SOCIAL_ARIA_LABEL, FOOTER_CONTENT_SOCIAL_SPAN_TEXT } from "../data/footerContentSocialData";
import FooterContentSocial from "../FooterContentLinksSocial";
import { resetModes, setupLightMode } from "./test-utils/testUtils";

describe("FooterContentSocial tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../../../../../utils/hooks/useThemeContext/useThemeContext.tsx");
      vi.mock("../../../../../../../../../utils/hooks/useMediaQuery/useMediaQuery.tsx");
      resetModes();
      setupLightMode();
   });

   test("renders FooterContentSocial element", () => {
      render(<FooterContentSocial />);
      const FooterContentSocialElement = screen.getByLabelText(FOOTER_CONTENT_SOCIAL_ARIA_LABEL);
      expect(FooterContentSocialElement).toBeInTheDocument();
   });

   test("renders FooterContentSocial span element", () => {
      render(<FooterContentSocial />);
      const FooterContentSocialSpanElement = screen.getByText(FOOTER_CONTENT_SOCIAL_SPAN_TEXT);
      expect(FooterContentSocialSpanElement).toBeInTheDocument();
   });
});
