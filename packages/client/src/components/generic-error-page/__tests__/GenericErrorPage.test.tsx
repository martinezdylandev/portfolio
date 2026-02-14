import { render, screen } from "@testing-library/react";
import { describe, test } from "vitest";
import GenericErrorPage from "../GenericErrorPage";
import { GENERIC_ERROR_PAGE_ARIA_LABEL, GENERIC_ERROR_PAGE_BUTTON, GENERIC_ERROR_PAGE_MESSAGE } from "../data/genericErrorPageData";
import { resetModes, setupLightMode } from "./test-utils/testUtils";

describe("GenericErrorPage Component tests", () => {
   beforeAll(() => {
      vi.mock("../../../utils/hooks/useThemeContext/useThemeContext.tsx");
      resetModes();
      setupLightMode();
   });

   test("should render the GenericErrorPage when an error occurs", () => {
      render(<GenericErrorPage />);
      const genericErrorPageElement = screen.getByLabelText(GENERIC_ERROR_PAGE_ARIA_LABEL);
      expect(genericErrorPageElement).toBeInTheDocument();
   });

   test("should render the GenericErrorPage error text", () => {
      render(<GenericErrorPage />);
      const spanElement = screen.getByText(GENERIC_ERROR_PAGE_MESSAGE);
      expect(spanElement).toBeInTheDocument();
   });

   test("should render the GenericErrorPage reload button", () => {
      render(<GenericErrorPage />);
      const buttonElement = screen.getByRole("button", { name: GENERIC_ERROR_PAGE_BUTTON });
      expect(buttonElement).toBeInTheDocument();
   });
});
