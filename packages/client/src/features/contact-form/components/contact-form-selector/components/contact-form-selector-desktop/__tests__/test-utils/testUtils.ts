import userEvent from "@testing-library/user-event";
import { useThemeContext } from "../../../../../../../../utils/hooks/useThemeContext/useThemeContext";

const setupLightMode = () => {
   vi.mocked(useThemeContext).mockReturnValue({
      mode: "light",
      toggleMode: vi.fn(),
   });
};

const setupDarkMode = () => {
   vi.mocked(useThemeContext).mockReturnValue({
      mode: "dark",
      toggleMode: vi.fn(),
   });
};

const resetModes = () => {
   vi.resetAllMocks();
};

const mockHandleActiveFormUpdate = vi.fn();

const user = userEvent.setup();

export { mockHandleActiveFormUpdate, resetModes, setupDarkMode, setupLightMode, user };
