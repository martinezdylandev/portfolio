import { render, screen } from "@testing-library/react";
import FooterLinks from "../FooterLinks";
import { setupLightMode, resetModes } from "./test-utils/testUtils";

describe("FooterLinks tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../utils/hooks/useTheme");
   });

   beforeEach(() => {
      setupLightMode();
   });

   afterAll(() => {
      resetModes();
   });

   test("renders FooterLinks element", () => {
      render(<FooterLinks />);
      const footerLinksElement = screen.getByLabelText("Footer content links");
      expect(footerLinksElement).toBeInTheDocument();
   });
});
