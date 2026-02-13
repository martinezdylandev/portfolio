import { render, screen } from "@testing-library/react";
import { FOOTER_CONTENT_ARIA_LABEL } from "../data/footerContentData";
import FooterContent from "../FooterContent";
import { resetModes, setupLightMode } from "./test-utils/testUtils";

describe("FooterContent tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../utils/hooks/useThemeContext/useThemeContext.tsx");
      resetModes();
      setupLightMode();
   });

   test("should render the FooterContent element", () => {
      render(<FooterContent />);
      const footerContent = screen.getByLabelText(FOOTER_CONTENT_ARIA_LABEL);
      expect(footerContent).toBeInTheDocument();
   });
});
