import { render, screen } from "@testing-library/react";
import ContactFormSelectorDesktop from "../ContactFormSelectorDesktop";
import { setupLightMode, resetModes, mockHandleActiveFormUpdate, user } from "./test-utils/testUtils";

describe("ContactFormSelectorDesktop tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../../../utils/hooks/useTheme");
   });

   beforeEach(() => {
      setupLightMode();
      mockHandleActiveFormUpdate.mockClear();
   });

   afterAll(() => {
      resetModes();
   });

   test("should render ContactFormSelectorDesktop selector element", () => {
      render(<ContactFormSelectorDesktop activeForm="defaultForm" handleActiveFormUpdate={mockHandleActiveFormUpdate} />);
      const contactFormSelectorDesktop = screen.getByLabelText("Contact form selector");
      expect(contactFormSelectorDesktop).toBeInTheDocument();
   });

   test("should render default selector button as active when defaultForm is active", () => {
      render(<ContactFormSelectorDesktop activeForm="defaultForm" handleActiveFormUpdate={mockHandleActiveFormUpdate} />);
      const defaultButton = screen.getByLabelText("Contact form default selector");
      expect(defaultButton).toHaveAttribute("aria-disabled", "false");
      expect(defaultButton).toBeInTheDocument();
   });

   test("should render default selector button h2 with correct text and active state", () => {
      render(<ContactFormSelectorDesktop activeForm="defaultForm" handleActiveFormUpdate={mockHandleActiveFormUpdate} />);
      const defaultButton = screen.getByLabelText("Contact form default selector");
      const h2Element = defaultButton.querySelector("h2");
      expect(h2Element).toHaveAttribute("data-is-active", "true");
      expect(h2Element).toHaveTextContent("CONTACT");
      expect(h2Element).toBeInTheDocument();
   });

   test("should render job selector button as inactive when defaultForm is active", () => {
      render(<ContactFormSelectorDesktop activeForm="defaultForm" handleActiveFormUpdate={mockHandleActiveFormUpdate} />);
      const jobButton = screen.getByLabelText("Contact form job selector");
      expect(jobButton).toHaveAttribute("aria-disabled", "true");
      expect(jobButton).toBeInTheDocument();
   });

   test("should call handleActiveFormUpdate with jobForm when job button is clicked", async () => {
      render(<ContactFormSelectorDesktop activeForm="defaultForm" handleActiveFormUpdate={mockHandleActiveFormUpdate} />);
      const jobButton = screen.getByLabelText("Contact form job selector");
      await user.click(jobButton);
      expect(mockHandleActiveFormUpdate).toHaveBeenCalledWith("jobForm");
   });

   test("should render job selector button as active when jobForm is active", () => {
      render(<ContactFormSelectorDesktop activeForm="jobForm" handleActiveFormUpdate={mockHandleActiveFormUpdate} />);
      const jobButton = screen.getByLabelText("Contact form job selector");
      const h2Element = jobButton.querySelector("h2");
      expect(jobButton).toHaveAttribute("aria-disabled", "false");
      expect(h2Element).toHaveAttribute("data-is-active", "true");
      expect(h2Element).toHaveTextContent("JOB OFFER");
      expect(h2Element).toBeInTheDocument();
   });

   test("should call handleActiveFormUpdate with defaultForm when default button is clicked", async () => {
      render(<ContactFormSelectorDesktop activeForm="jobForm" handleActiveFormUpdate={mockHandleActiveFormUpdate} />);
      const defaultButton = screen.getByLabelText("Contact form default selector");
      await user.click(defaultButton);
      expect(mockHandleActiveFormUpdate).toHaveBeenCalledWith("defaultForm");
   });
});
