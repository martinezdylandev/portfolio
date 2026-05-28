import { Router } from "express";
import { getAllProjects, getProjectBySlug } from "../../controllers/projectController/projectController.js";

const projectRoutes = Router();

projectRoutes.get("/", getAllProjects);
projectRoutes.get("/:projectSlug", getProjectBySlug);

export default projectRoutes;
