import { useState } from "react";
import type { ActiveForm } from "../data/contactFormData";

export interface UseContactFormStateReturn {
   activeForm: ActiveForm;
   handleActiveFormUpdate: (newActiveForm: ActiveForm) => void;
}

export const useContactFormState = (): UseContactFormStateReturn => {
   const [activeForm, setActiveForm] = useState<ActiveForm>("defaultForm");

   const handleActiveFormUpdate = (newActiveForm: ActiveForm): void => {
      setActiveForm(newActiveForm);
   };

   return {
      activeForm,
      handleActiveFormUpdate,
   };
};
