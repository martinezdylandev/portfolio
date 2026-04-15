import { Router } from "express";
import { submitContact } from "../../controllers/contact-controller/contactController.js";

const contactRoutes = Router();

contactRoutes.post("/", submitContact);

export default contactRoutes;
