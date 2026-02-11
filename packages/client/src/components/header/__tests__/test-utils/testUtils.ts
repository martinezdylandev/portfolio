import { useThemeContext } from "../../../../utils/hooks/useThemeContext/useThemeContext";

const setupLightMode = () => {
   vi.mocked(useThemeContext).mockReturnValue({
      theme: "light",
      toggleTheme: vi.fn(),
   });
};

const setupDarkMode = () => {
   vi.mocked(useThemeContext).mockReturnValue({
      theme: "dark",
      toggleTheme: vi.fn(),
   });
};

const resetModes = () => {
   vi.resetAllMocks();
};

const getPageYOffset = () => {
   Object.defineProperty(window, "pageYOffset", {
      get: () => 0,
      configurable: true,
   });
};

export { getPageYOffset, resetModes, setupDarkMode, setupLightMode };
