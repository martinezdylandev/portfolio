import { ABOUT_ME_HEADER_IMAGE_ALT_TEXT, ABOUT_ME_HEADER_IMAGE_SRC } from "../../about-me/data/aboutMeData";

export const CONTACT_PAGE_ARIA_LABEL: string = "Contact page";

export const CONTACT_PAGE_HEADER_ARIA_LABEL: string = "Contact introduction header";

export const CONTACT_PAGE_HEADER_TEXT: string = "CONTACT";

export const CONTACT_PAGE_IMAGE_SRC: string = ABOUT_ME_HEADER_IMAGE_SRC;
export const CONTACT_PAGE_IMAGE_ALT_TEXT: string = ABOUT_ME_HEADER_IMAGE_ALT_TEXT;
export const CONTACT_PAGE_MARKER_NAME: string = "ME";

export type ContactPageAccomplishmentTermVariant = "main" | "minor";

export interface ContactPageAccomplishmentTerm {
   id: string;
   text: string;
   variant: ContactPageAccomplishmentTermVariant;
}

export interface ContactPageAccomplishmentRow {
   id: string;
   terms: ContactPageAccomplishmentTerm[];
}

export const CONTACT_PAGE_ACCOMPLISHMENTS_ROWS: ContactPageAccomplishmentRow[] = [
   {
      id: "accomplishments-row-1",
      terms: [
         { id: "accomplishments-row-1-main-1", variant: "main", text: "Stuff Building" },
         { id: "accomplishments-row-1-minor-1", variant: "minor", text: "scalable end-to-end applications" },
         { id: "accomplishments-row-1-minor-2", variant: "minor", text: "robust software solutions" },
      ],
   },
   {
      id: "accomplishments-row-2",
      terms: [
         { id: "accomplishments-row-2-main-1", variant: "main", text: "Taste as Guide" },
         { id: "accomplishments-row-2-minor-1", variant: "minor", text: "simple yet cautaving animations" },
         { id: "accomplishments-row-2-minor-2", variant: "minor", text: "good looking UIs" },
      ],
   },
   {
      id: "accomplishments-row-3",
      terms: [
         { id: "accomplishments-row-3-main-1", variant: "main", text: "Tech Thinkering" },
         { id: "accomplishments-row-3-minor-1", variant: "minor", text: "libraries and frameworks" },
         { id: "accomplishments-row-3-minor-2", variant: "minor", text: "AI models" },
      ],
   },
   {
      id: "accomplishments-row-4",
      terms: [
         { id: "accomplishments-row-4-main-1", variant: "main", text: "Necessities Understanding" },
         { id: "accomplishments-row-4-minor-1", variant: "minor", text: "interaction and connection" },
         { id: "accomplishments-row-4-minor-2", variant: "minor", text: "pride and ambition" },
      ],
   },
];

export const CONTACT_PAGE_PITCH_IDEA: string = "If you're shaping a new product idea and need clarity before committing resources, I’ll help your team turn concepts into direction: defining scope, validating assumptions, and mapping a path that balances user needs with technical feasibility. I ask the right questions early, challenge weak spots, and translate vision into something buildable.";

export const CONTACT_PAGE_PITCH_IMPLEMENTATION: string = "When it’s time to build, I’ll help your team move from plans to working software: structuring clean architectures, shipping iteratively, and keeping both frontend and backend aligned. I focus on maintainability, test coverage, and steady delivery so progress stays predictable without sacrificing quality or long-term scalability.";

export const CONTACT_PAGE_PITCH_END_PRODUCT: string = "As your product reaches users, I’ll help your team deliver something reliable and ready for real-world use: refining performance, tightening edge cases, and ensuring a smooth user experience across the stack. I monitor, iterate, and improve continuously so the final product not only works, but holds up under growth.";

export const CONTACT_PAGE_CODE_SNIPPET: string = `const buildEndToEnd = async (spec) => {
  const ready = spec.steps.every((s) => s.status === "ready");
  return ready ? deploy(await spec.bundle()) : Promise.reject(new Error("Missing requirements"));
};`;
