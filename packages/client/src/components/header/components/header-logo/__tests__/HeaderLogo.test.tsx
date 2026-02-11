import { render, screen } from "@testing-library/react";
import { useMediaQuery } from "../../../../../utils/hooks/useMediaQuery/useMediaQuery";
import { resetModes, setupLightMode } from "../../../__tests__/test-utils/testUtils";
import HeaderLogo from "../HeaderLogo";

describe("HeaderLogo Component tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../utils/hooks/useThemeContext/useThemeContext.tsx");
      vi.mock("../../../../../utils/hooks/useMediaQuery/useMediaQuery");
      resetModes();
      setupLightMode();
   });

   test("should render link element with correct role", () => {
      vi.mocked(useMediaQuery).mockReturnValue(true);
      render(<HeaderLogo />);
      const logoContainer = screen.getByRole("link");
      expect(logoContainer).toBeInTheDocument();
   });

   test("should render headerLogoCompact component on small screns", () => {
      vi.mocked(useMediaQuery).mockReturnValue(false);
      render(<HeaderLogo />);
      const logoContainer = screen.getByRole("link");
      const headerLogoCompact = screen.getByTestId("header__logo-compact");
      expect(logoContainer).toBeInTheDocument();
      expect(logoContainer).toContainElement(headerLogoCompact);
   });

   test("should render headerLogoDesktop component on larger screns", () => {
      vi.mocked(useMediaQuery).mockReturnValue(true);
      render(<HeaderLogo />);
      const logoContainer = screen.getByRole("link");
      const headerLogoDesktop = screen.getByTestId("header__logo-desktop");
      expect(logoContainer).toBeInTheDocument();
      expect(logoContainer).toContainElement(headerLogoDesktop);
   });
});
