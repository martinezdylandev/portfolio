import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BUTTON_ARIA_LABEL, FOOTER_COMPACT_NAVIGATION_LINKS, ICON_ALT_LABEL, LIST_ARIA_LABEL_TEXT, NAV_ARIA_LABEL_TEXT } from "../data/footerContentNavigationCompactData";
import FooterContentNavigationCompact from "../FooterContentNavigationCompact";
import { resetModes, setupLightMode } from "./test-utils/testUtils";

describe("FooterContentNavigationCompact tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../../../../../utils/hooks/useThemeContext/useThemeContext.tsx");
      resetModes();
      setupLightMode();
   });

   test("renders FooterContentNavigationCompact element", () => {
      render(<FooterContentNavigationCompact />);
      const FooterContentNavigationCompactButton = screen.getByLabelText(BUTTON_ARIA_LABEL);
      expect(FooterContentNavigationCompactButton).toBeInTheDocument();
   });

   test("should render FooterContentNavigationCompact button image with the correct alt text", () => {
      render(<FooterContentNavigationCompact />);
      const navButton = screen.getByLabelText(BUTTON_ARIA_LABEL);
      expect(navButton).toBeInTheDocument();

      const navButtonImage = screen.getByAltText(ICON_ALT_LABEL);
      expect(navButton).toContain(navButtonImage);
   });

   test("should render FooterContentNavigationCompact button image with the correct rotation when clicking on navigation button", async () => {
      render(<FooterContentNavigationCompact />);
      const navButton = screen.getByLabelText(BUTTON_ARIA_LABEL);
      expect(navButton).toBeInTheDocument();

      const navButtonImage = screen.getByAltText(ICON_ALT_LABEL);
      expect(navButton).toContain(navButtonImage);

      fireEvent.click(navButton);

      expect(navButtonImage).toHaveClass("rotate-90");

      fireEvent.click(navButton);

      await waitFor(() => {
         expect(navButtonImage).toHaveClass("rotate-0");
      });
   });

   test("should render FooterContentNavigationCompact component with the correct aria label when clicking on navigation button", () => {
      render(<FooterContentNavigationCompact />);
      const navButton = screen.getByLabelText(BUTTON_ARIA_LABEL);
      expect(navButton).toBeInTheDocument();

      fireEvent.click(navButton);

      const navElement = screen.getByLabelText(NAV_ARIA_LABEL_TEXT);
      expect(navElement).toBeInTheDocument();
   });

   test("should hide FooterContentNavigationCompact component with the correct aria label when closing the navigation menu", async () => {
      render(<FooterContentNavigationCompact />);
      const navButton = screen.getByLabelText(BUTTON_ARIA_LABEL);
      expect(navButton).toBeInTheDocument();

      fireEvent.click(navButton);

      const navElement = screen.getByLabelText(NAV_ARIA_LABEL_TEXT);
      expect(navElement).toBeInTheDocument();

      fireEvent.click(navButton);

      await waitFor(() => {
         expect(screen.queryByLabelText(NAV_ARIA_LABEL_TEXT)).not.toBeInTheDocument();
      });
   });

   test("should hide FooterContentNavigationCompact component with the correct aria label when pressing escape and closing navigation menu", async () => {
      render(<FooterContentNavigationCompact />);
      const navButton = screen.getByLabelText(BUTTON_ARIA_LABEL);
      expect(navButton).toBeInTheDocument();

      fireEvent.click(navButton);

      const navElement = screen.getByLabelText(NAV_ARIA_LABEL_TEXT);
      expect(navElement).toBeInTheDocument();

      fireEvent.keyDown(document, { key: "Escape" });

      await waitFor(() => {
         expect(screen.queryByLabelText(NAV_ARIA_LABEL_TEXT)).not.toBeInTheDocument();
      });
   });

   test("should hide FooterContentNavigationCompact component with the correct aria label when clicking outside the navigation menu and closing navigation menu", async () => {
      render(<FooterContentNavigationCompact />);
      const navButton = screen.getByLabelText(BUTTON_ARIA_LABEL);
      expect(navButton).toBeInTheDocument();

      fireEvent.click(navButton);

      const navElement = screen.getByLabelText(NAV_ARIA_LABEL_TEXT);
      expect(navElement).toBeInTheDocument();

      fireEvent.mouseDown(document.body);

      await waitFor(() => {
         expect(screen.queryByLabelText(NAV_ARIA_LABEL_TEXT)).not.toBeInTheDocument();
      });
   });

   test("should render FooterContentNavigationCompact list element with the correct aria label", () => {
      render(<FooterContentNavigationCompact />);
      const navButton = screen.getByLabelText(BUTTON_ARIA_LABEL);
      expect(navButton).toBeInTheDocument();

      fireEvent.click(navButton);

      const navElement = screen.getByLabelText(NAV_ARIA_LABEL_TEXT);
      expect(navElement).toBeInTheDocument();

      const listElement = screen.getByLabelText(LIST_ARIA_LABEL_TEXT);
      expect(listElement).toBeInTheDocument();
   });

   test("should render FooterContentNavigationCompact links elements with their correct aria label", () => {
      render(<FooterContentNavigationCompact />);
      const navButton = screen.getByLabelText(BUTTON_ARIA_LABEL);
      expect(navButton).toBeInTheDocument();

      fireEvent.click(navButton);

      const navElement = screen.getByLabelText(NAV_ARIA_LABEL_TEXT);
      expect(navElement).toBeInTheDocument();

      const listElement = screen.getByLabelText(LIST_ARIA_LABEL_TEXT);
      expect(listElement).toBeInTheDocument();

      const links = screen.getAllByRole("link");
      FOOTER_COMPACT_NAVIGATION_LINKS.forEach((expectedLink, index) => {
         expect(links[index]).toHaveAttribute("aria-label", expectedLink.ARIA_LABEL);
      });
   });

   test("should render FooterContentNavigationCompact span elements with their correct text content", () => {
      render(<FooterContentNavigationCompact />);
      const navButton = screen.getByLabelText(BUTTON_ARIA_LABEL);
      expect(navButton).toBeInTheDocument();

      fireEvent.click(navButton);

      const navElement = screen.getByLabelText(NAV_ARIA_LABEL_TEXT);
      expect(navElement).toBeInTheDocument();

      FOOTER_COMPACT_NAVIGATION_LINKS.slice(1).forEach((expectedLink) => {
         const link = screen.getByRole("link", { name: expectedLink.ARIA_LABEL });
         expect(link).toBeInTheDocument();

         const span = screen.getByText(expectedLink.LABEL);
         expect(link).toContainElement(span);
      });
   });
});
