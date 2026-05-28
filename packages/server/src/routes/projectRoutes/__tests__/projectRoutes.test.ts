import express from "express";
import request from "supertest";
import projectRoutes from "../projectRoutes.js";

vi.mock("../../../controllers/projectController/projectController.js", () => {
   return {
      getAllProjects: vi.fn((_req, res) => res.status(200).json([])),
      getProjectBySlug: vi.fn((req, res) => {
         const projectSlug = req.params.projectSlug.toLowerCase();
         if (projectSlug === "project-one") {
            return res.status(200).json({ name: "Project One", description: "Description of Project One" });
         } else {
            return res.status(404).send("Project not found");
         }
      }),
   };
});

const server = express();
server.use(express.json());
server.use("/projects", projectRoutes);

describe("projectRoute route tests", () => {
   it("should respond with 200 status code for valid project", async () => {
      const response = await request(server).get("/projects/project-one");
      expect(response.status).toBe(200);
      expect(response.body.name).toBe("Project One");
   });

   it("should respond with 404 status code for invalid project", async () => {
      const response = await request(server).get("/projects/invalid-project");
      expect(response.status).toBe(404);
   });

   it("should handle case insensitivity correctly", async () => {
      const response = await request(server).get("/projects/pRoJect-one");
      expect(response.status).toBe(200);
      expect(response.body.name).toBe("Project One");
   });

   it("should respond with 404 status code for empty project slug", async () => {
      const response = await request(server).get("/projects/");
      expect(response.status).toBe(404);
   });

   it("should handle special characters correctly", async () => {
      const response = await request(server).get("/projects/project@one!");
      expect(response.status).toBe(404);
   });

   it("should return correct response structure", async () => {
      const response = await request(server).get("/projects/project-one");
      expect(response.body).toHaveProperty("name");
      expect(response.body).toHaveProperty("description");
   });
});
