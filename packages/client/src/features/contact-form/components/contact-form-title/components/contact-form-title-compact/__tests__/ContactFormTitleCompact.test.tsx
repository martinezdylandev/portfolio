import { render, screen } from "@testing-library/react";
import ContactFormTitleCompact from "../ContactFormTitleCompact";
import { setupLightMode, resetModes } from "./test-utils/testUtils";

describe("ContactFormTitleCompact component tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../../../utils/hooks/useTheme");
   });

   beforeEach(() => {
      setupLightMode();
   });

   afterAll(() => {
      resetModes();
   });

   test("should render ContactFormTitleCompact heading element", () => {
      render(<ContactFormTitleCompact />);
      const titleElement = screen.getByRole("heading", { name: "LET'S TALK" });
      expect(titleElement).toBeInTheDocument();
   });

   test("should render ContactFormTitleCompact with center text alignment class", () => {
      render(<ContactFormTitleCompact />);
      const titleElement = screen.getByRole("heading", { name: "LET'S TALK" });
      expect(titleElement).toHaveClass("text-center");
   });
});
