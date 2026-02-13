import { render, screen } from "@testing-library/react";
import { FOOTER_ARIA_LABEL } from "../data/footerData";
import Footer from "../Footer";
import { resetModes, setupLightMode } from "./test-utils/testUtils";

describe("Footer Component tests", () => {
   beforeAll(() => {
      vi.mock("../../../utils/hooks/useThemeContext/useThemeContext.tsx");
      resetModes();
      setupLightMode();
   });

   test("should render the Footer element", () => {
      render(<Footer />);
      const footerElement = screen.getByLabelText(FOOTER_ARIA_LABEL);
      expect(footerElement).toBeInTheDocument();
   });
});
