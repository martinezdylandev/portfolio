import { Mock } from "vitest"; // TODO: Get rid of this import statement by using globals importing
import { dbQuery } from "../../../config/databaseConfig.js";
import { getProjectBySlug } from "../projectController.js";
import { deinitializeMocks, initializeConsoleErrorSpy, initializeMocks, jsonSpy, mockRequest, mockResponse, restoreConsoleErrorSpy, statusSpy } from "./test-utils/testUtils.js";

vi.mock("../../../config/databaseConfig.js");

describe("projectController controller tests", () => {

   beforeEach(() => {
      initializeConsoleErrorSpy();
      initializeMocks("project-01");
   });

   afterEach(() => {
      restoreConsoleErrorSpy();
      deinitializeMocks();
   });

   test("should return a correct project given a valid slug", async () => {
      const mockProject = { project_slug: "project-01" };

      (dbQuery as Mock).mockResolvedValueOnce({ rows: [mockProject] });

      await getProjectBySlug(mockRequest, mockResponse);

      expect(jsonSpy).toHaveBeenCalledWith(mockProject);
   });

   test("should return a correct project given a valid slug with different case", async () => {
      initializeMocks("ProJect-01");

      const mockProject = { project_slug: "project-01" };

      (dbQuery as Mock).mockResolvedValueOnce({ rows: [mockProject] });

      await getProjectBySlug(mockRequest, mockResponse);

      expect(jsonSpy).toHaveBeenCalledWith(mockProject);
   });

   test("should not return a project given an invalid slug", async () => {
      initializeMocks("invalid-project");

      (dbQuery as Mock).mockResolvedValueOnce({ rows: [] });

      await getProjectBySlug(mockRequest, mockResponse);

      expect(statusSpy).toHaveBeenCalledWith(404);
      expect(jsonSpy).toHaveBeenCalledWith({ message: `Project with slug ${mockRequest.params.projectSlug} not found` });
   });

   test("should return a 400 status code if projectSlug parameter is missing", async () => {
      initializeMocks("");

      await getProjectBySlug(mockRequest, mockResponse);

      expect(statusSpy).toHaveBeenCalledWith(400);
      expect(jsonSpy).toHaveBeenCalledWith({ message: "Project slug is required" });
   });

   test("should return a 500 status code and an error message if an error occurs", async () => {
      (dbQuery as Mock).mockRejectedValueOnce(new Error("Database error"));

      await getProjectBySlug(mockRequest, mockResponse);

      expect(statusSpy).toHaveBeenCalledWith(500);
      expect(jsonSpy).toHaveBeenCalledWith({ message: "Internal server error" });
   });
});
