import { render, screen } from "@testing-library/react";

import ProjectMainCoverContainerCompact from "../ProjectMainCoverContainerCompact";
import { mockProjects, resetModes, setupLightMode } from "./test-utils/testUtils";

describe("ProjectMainCoverContainerCompact component tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../../../utils/hooks/useTheme.tsx");
   });

   beforeEach(() => {
      setupLightMode();
   });

   afterAll(() => {
      resetModes();
   });

   test("render ProjectMainCoverContainer element", () => {
      render(<ProjectMainCoverContainerCompact project={mockProjects[0]} />);
      const mainCoverContainer = screen.getByLabelText("Project main cover container");
      expect(mainCoverContainer).toBeInTheDocument();
   });
});
