import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { resetModes, setupDarkMode, setupLightMode } from "../../../../../__tests__/test-utils/testUtils";
import { LOGO_IMAGE_ALT_TEXT, LOGO_TITLE_TEXT } from "../../../data/headerLogoData";
import HeaderLogoDesktop from "../HeaderLogoDesktop";

describe("HeaderLogoDesktop Component tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../../../utils/hooks/useThemeContext/useThemeContext.tsx");
      resetModes();
      setupLightMode();
   });

   test("should render header logo wrapper element with correct test id", () => {
      render(<HeaderLogoDesktop />);
      const logoContainer = screen.getByTestId("header__logo-desktop");
      expect(logoContainer).toBeInTheDocument();
   });

   test("should render header logo image element with correct alt text", () => {
      render(<HeaderLogoDesktop />);
      const logoImage = screen.getByAltText(LOGO_IMAGE_ALT_TEXT);
      expect(logoImage).toBeInTheDocument();
   });

   test("should render header logo image element with correct src in ligth mode", () => {
      setupLightMode();
      render(<HeaderLogoDesktop />);
      const logoImage = screen.getByAltText(LOGO_IMAGE_ALT_TEXT);
      expect(logoImage).toBeInTheDocument();
      expect(logoImage).toHaveAttribute("src", "/header/dm_logo_light_mode.svg");
   });

   test("should render header logo image element with correct src in dark mode", () => {
      setupDarkMode();
      render(<HeaderLogoDesktop />);
      const logoImage = screen.getByAltText(LOGO_IMAGE_ALT_TEXT);
      expect(logoImage).toBeInTheDocument();
      expect(logoImage).toHaveAttribute("src", "/header/dm_logo_dark_mode.svg");
   });

   test("should render header logo span element with correct text", () => {
      render(<HeaderLogoDesktop />);
      const logoSpan = screen.getByText(LOGO_TITLE_TEXT);
      expect(logoSpan).toBeInTheDocument();
   });

   test("should render header logo image with correct animations when hovered", async () => {
      render(<HeaderLogoDesktop />);
      const logoContainer = screen.getByTestId("header__logo-desktop");
      const logoImage = screen.getByAltText(LOGO_IMAGE_ALT_TEXT);
      fireEvent.mouseEnter(logoContainer);
      await waitFor(() => {
         const style = window.getComputedStyle(logoImage);
         expect(style.transform).toContain("translateY");
         expect(style.borderBottomWidth).toBe("5px");
         expect(style.paddingBottom).toBe("3px");
      });
   });

   test("should render header logo image with correct animations when un-hovered", async () => {
      render(<HeaderLogoDesktop />);
      const logoContainer = screen.getByTestId("header__logo-desktop");
      const logoImage = screen.getByAltText(LOGO_IMAGE_ALT_TEXT);
      fireEvent.mouseEnter(logoContainer);
      await waitFor(() => {
         const style = window.getComputedStyle(logoImage);
         expect(style.transform).toContain("translateY");
         expect(style.borderBottomWidth).toBe("5px");
         expect(style.paddingBottom).toBe("3px");
      });
      fireEvent.mouseLeave(logoContainer);
      await waitFor(() => {
         const style = window.getComputedStyle(logoImage);
         expect(style.transform).not.toContain("translateY");
         expect(style.borderBottomWidth).toBe("0px");
         expect(style.paddingBottom).toBe("0px");
      });
   });

   test("should render header logo span with correct animations when hovered", async () => {
      render(<HeaderLogoDesktop />);
      const logoContainer = screen.getByTestId("header__logo-desktop");
      const logoSpan = screen.getByText(LOGO_TITLE_TEXT);
      fireEvent.mouseEnter(logoContainer);
      await waitFor(() => {
         const style = window.getComputedStyle(logoSpan);
         expect(style.top).toContain("105%");
         expect(style.opacity).toBe("1");
      });
   });

   test("should render header logo span with correct animations when un-hovered", async () => {
      render(<HeaderLogoDesktop />);
      const logoContainer = screen.getByTestId("header__logo-desktop");
      const logoSpan = screen.getByText(LOGO_TITLE_TEXT);
      fireEvent.mouseEnter(logoContainer);
      await waitFor(() => {
         const style = window.getComputedStyle(logoSpan);
         expect(style.top).toContain("105%");
         expect(style.opacity).toBe("1");
      });
      fireEvent.mouseLeave(logoContainer);
      await waitFor(() => {
         const style = window.getComputedStyle(logoSpan);
         expect(style.top).toContain("1%");
         expect(style.opacity).toBe("0");
      });
   });
});
