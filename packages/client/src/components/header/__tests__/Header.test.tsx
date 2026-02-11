import { render, screen, waitFor } from "@testing-library/react";
import { act } from "react";
import Header from "../Header";
import { getPageYOffset, resetModes, setupLightMode } from "./test-utils/testUtils";

describe("Header component tests", () => {
   beforeAll(() => {
      vi.mock("../../../utils/hooks/useThemeContext/useThemeContext.tsx");
      vi.mock("../../../utils/hooks/useMediaQuery/useMediaQuery.tsx");
      resetModes();
      setupLightMode();
   });

   test("should render the header element", () => {
      render(<Header />);
      const header = screen.getByRole("banner");
      expect(header).toBeInTheDocument();
   });

   test("should render the header correct background color in dark mode", () => {
      render(<Header />);
      const header = screen.getByRole("banner");
      expect(header).toHaveClass("bg-page");
   });

   test("should render the header with the correct Y position", () => {
      render(<Header />);
      const header = screen.getByRole("banner");
      expect(header).toHaveClass("transform-none");
   });

   test("should render the header with the correct Y position after scrolling", async () => {
      render(<Header />);
      const header = screen.getByRole("banner");
      expect(header).toHaveClass("transform-none");

      getPageYOffset();

      await act(async () => {
         window.dispatchEvent(new Event("scroll"));

         waitFor(() => {
            expect(header).toHaveClass("-translate-y-full");
         });
      });
   });
});
