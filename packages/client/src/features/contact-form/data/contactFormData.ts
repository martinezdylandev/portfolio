export const CONTACT_FORM_ARIA_LABEL: string = "Contact form container";

export type ActiveForm = "defaultForm" | "jobForm";
export interface ActiveFormProps {
   activeForm: ActiveForm;
}
export interface ContactFormStateProps extends ActiveFormProps {
   handleActiveFormUpdate: (newActiveForm: ActiveForm) => void;
}
