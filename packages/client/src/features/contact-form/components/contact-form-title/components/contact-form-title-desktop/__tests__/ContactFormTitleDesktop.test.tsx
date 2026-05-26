import { render, screen } from "@testing-library/react";
import ContactFormTitleDesktop from "../ContactFormTitleDesktop";
import { setupLightMode, resetModes } from "./test-utils/testUtils";

describe("ContactFormTitleDesktop component tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../../../utils/hooks/useTheme");
   });

   beforeEach(() => {
      setupLightMode();
   });

   afterAll(() => {
      resetModes();
   });

   test("should render ContactFormTitleDesktop heading element", () => {
      render(<ContactFormTitleDesktop />);
      const titleElement = screen.getByRole("heading", { name: "LET'S TALK" });
      expect(titleElement).toBeInTheDocument();
   });

   test("should render ContactFormTitleDesktop with left text alignment class", () => {
      render(<ContactFormTitleDesktop />);
      const titleElement = screen.getByRole("heading", { name: "LET'S TALK" });
      expect(titleElement).toHaveClass("text-left");
   });
});
