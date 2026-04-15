import type { ActiveForm } from "../data/contactFormData";

export const getContactFormDirection = (activeForm: ActiveForm): "left" | "right" => {
   return activeForm === "defaultForm" ? "left" : "right";
};
