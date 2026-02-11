import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { resetModes, setupLightMode } from "../../../__tests__/test-utils/testUtils";
import { HEADER_NAVIGATION_LINKS, LIST_COMPACT_ARIA_LABEL_TEXT, NAV_COMPACT_ARIA_LABEL_TEXT } from "../../../data/headerNavigationData";
import HeaderNavigationCompact from "../HeaderNavigationCompact";

describe("HeaderNavigation Component tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../../../utils/hooks/useThemeContext/useThemeContext.tsx");
      vi.mock("../../../../../../../utils/hooks/useMediaQuery/useMediaQuery");
      resetModes();
      setupLightMode();
   });

   test("should render HeaderNavigationCompact button with the correct aria label", () => {
      render(<HeaderNavigationCompact />);
      const navButton = screen.getByLabelText("Open navigation menu");
      expect(navButton).toBeInTheDocument();
   });

   test("should render HeaderNavigationCompact button image with the correct alt text", () => {
      render(<HeaderNavigationCompact />);
      const navButton = screen.getByLabelText("Open navigation menu");
      expect(navButton).toBeInTheDocument();

      const navButtonImage = screen.getByAltText("Navigation menu icon");
      expect(navButton).toContain(navButtonImage);
   });

   test("should render HeaderNavigationCompact button image with the correct rotation when clicking on navigation button", async () => {
      render(<HeaderNavigationCompact />);
      const navButton = screen.getByLabelText("Open navigation menu");
      expect(navButton).toBeInTheDocument();

      const navButtonImage = screen.getByAltText("Navigation menu icon");
      expect(navButton).toContain(navButtonImage);

      fireEvent.click(navButton);

      expect(navButtonImage).toHaveClass("rotate-90");

      fireEvent.click(navButton);

      await waitFor(() => {
         expect(navButtonImage).toHaveClass("rotate-0");
      });
   });

   test("should render HeaderNavigationCompact component with the correct aria label when clicking on navigation button", () => {
      render(<HeaderNavigationCompact />);
      const navButton = screen.getByLabelText("Open navigation menu");
      expect(navButton).toBeInTheDocument();

      fireEvent.click(navButton);

      const navElement = screen.getByLabelText(NAV_COMPACT_ARIA_LABEL_TEXT);
      expect(navElement).toBeInTheDocument();
   });

   test("should hide HeaderNavigationCompact component with the correct aria label when closing the navigation menu", async () => {
      render(<HeaderNavigationCompact />);
      const navButton = screen.getByLabelText("Open navigation menu");
      expect(navButton).toBeInTheDocument();

      fireEvent.click(navButton);

      const navElement = screen.getByLabelText(NAV_COMPACT_ARIA_LABEL_TEXT);
      expect(navElement).toBeInTheDocument();

      fireEvent.click(navButton);

      await waitFor(() => {
         expect(screen.queryByLabelText(NAV_COMPACT_ARIA_LABEL_TEXT)).not.toBeInTheDocument();
      });
   });

   test("should hide HeaderNavigationCompact component with the correct aria label when pressing escape and closing navigation menu", async () => {
      render(<HeaderNavigationCompact />);
      const navButton = screen.getByLabelText("Open navigation menu");
      expect(navButton).toBeInTheDocument();

      fireEvent.click(navButton);

      const navElement = screen.getByLabelText(NAV_COMPACT_ARIA_LABEL_TEXT);
      expect(navElement).toBeInTheDocument();

      fireEvent.keyDown(document, { key: "Escape" });

      await waitFor(() => {
         expect(screen.queryByLabelText(NAV_COMPACT_ARIA_LABEL_TEXT)).not.toBeInTheDocument();
      });
   });

   test("should hide HeaderNavigationCompact component with the correct aria label when clicking outside the navigation menu and closing navigation menu", async () => {
      render(<HeaderNavigationCompact />);
      const navButton = screen.getByLabelText("Open navigation menu");
      expect(navButton).toBeInTheDocument();

      fireEvent.click(navButton);

      const navElement = screen.getByLabelText(NAV_COMPACT_ARIA_LABEL_TEXT);
      expect(navElement).toBeInTheDocument();

      fireEvent.mouseDown(document.body);

      await waitFor(() => {
         expect(screen.queryByLabelText(NAV_COMPACT_ARIA_LABEL_TEXT)).not.toBeInTheDocument();
      });
   });

   test("should render HeaderNavigationCompact list element with the correct aria label", () => {
      render(<HeaderNavigationCompact />);
      const navButton = screen.getByLabelText("Open navigation menu");
      expect(navButton).toBeInTheDocument();

      fireEvent.click(navButton);

      const navElement = screen.getByLabelText(NAV_COMPACT_ARIA_LABEL_TEXT);
      expect(navElement).toBeInTheDocument();

      const listElement = screen.getByLabelText(LIST_COMPACT_ARIA_LABEL_TEXT);
      expect(listElement).toBeInTheDocument();
   });

   test("should render HeaderNavigationCompact links elements with their correct aria label", () => {
      render(<HeaderNavigationCompact />);
      const navButton = screen.getByLabelText("Open navigation menu");
      expect(navButton).toBeInTheDocument();

      fireEvent.click(navButton);

      const navElement = screen.getByLabelText(NAV_COMPACT_ARIA_LABEL_TEXT);
      expect(navElement).toBeInTheDocument();

      const listElement = screen.getByLabelText(LIST_COMPACT_ARIA_LABEL_TEXT);
      expect(listElement).toBeInTheDocument();

      const links = screen.getAllByRole("link");
      HEADER_NAVIGATION_LINKS.forEach((expectedLink, index) => {
         expect(links[index]).toHaveAttribute("aria-label", expectedLink.ARIA_LABEL);
      });
   });

   test("should render HeaderNavigationCompact span elements with their correct text content", () => {
      render(<HeaderNavigationCompact />);
      const navButton = screen.getByLabelText("Open navigation menu");
      expect(navButton).toBeInTheDocument();

      fireEvent.click(navButton);

      const navElement = screen.getByLabelText(NAV_COMPACT_ARIA_LABEL_TEXT);
      expect(navElement).toBeInTheDocument();

      HEADER_NAVIGATION_LINKS.slice(1).forEach((expectedLink) => {
         const link = screen.getByRole("link", { name: expectedLink.ARIA_LABEL });
         expect(link).toBeInTheDocument();

         const span = screen.getByText(expectedLink.LABEL);
         expect(link).toContainElement(span);
      });
   });
});
