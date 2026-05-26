export const ABOUT_ME_ARIA_LABEL = "About me section";
export const ABOUT_ME_TEST_ID = "about-me-section";
export const ABOUT_ME_ABOUT_DETAILED_NAVIGATION_ARIA_LABEL = "Navigate to about page";
export const ABOUT_ME_ABOUT_CONTACT_NAVIGATION_ARIA_LABEL = "Navigate to contact page";

export const ABOUT_ME_HEADER_TITLE: string = "DYLAN MARTINEZ";
export const ABOUT_ME_HEADER_IMAGE_SRC: string = "/dylan.webp";
export const ABOUT_ME_HEADER_IMAGE_ALT_TEXT: string = "Dylan Martinez portrait";
export const ABOUT_ME_HEADER_IMAGE_TEXT: string = "I'M WATCHING YOU";
export const ABOUT_ME_CONTENT_TEXT_FIRST: string = "I'm a Product-oriented Full-Stack Software Developer from Argentina, based in Copenhagen, Denmark. My passion for technology began early, when my mother introduced me to computers in a small cybercafé at age 10. For over 7 years, I led cross-functional teams and drove digital transformations in customer-facing operations as a CX Director. Today, I design and create performant, user-focused solutions for clients across Europe, blending technical execution with deep business insight at every step.";
export const ABOUT_ME_CONTENT_TEXT_SECOND: string = "I build by taking end-to-end ownership of my work while collaborating closely with others to deliver fast results. I use first-principles thinking, checklists, and software development conventions such as Clean Code, SOLID, DRY, and TDD on every project. What sets me apart is that I care deeply about what I build, and I pay close attention to the client’s real needs so the end solution is thoughtful, durable, and grounded in depth rather than surface-level fixes, and built for long-term success.";
export const ABOUT_ME_CONTENT_LINK_KNOW_MORE_TEXT: string = "KNOW MORE";
export const ABOUT_ME_CONTENT_LINK_CONTACT_TEXT: string = "CONTACT ME";

export const CATEGORY_NAME: string[] = ["ME", "VALUES", "TOOLS", "STORY"];

export const CATEGORY_DESCRIPTION: string[] = ["THE WHY", "THE HOW", "UNDER CONSTRUCTION..."];

export const INTRO_TEXTS: string[] = [
   "I'm a Product-oriented Full-Stack Software Developer from Argentina, based in Copenhagen, Denmark, building thoughtful products with purpose and care.",
   "With 7+ years in CX and digital transformation, I bring product thinking, technical depth, and a strong sense of ownership to every project every day.",
   "I care deeply about what I build, and I combine first-principles thinking with clear conventions and a deep understanding of client needs in practice.",
   "I work end to end, collaborate closely, and design durable web applications that balance user experience, performance, usability, and long-term value.",
 ];

export type PhilosophyColumns = "Column N1" | "Column N2" | "Column N3" | "Column N4";

export const PHILOSOPHY_COLUMNS: PhilosophyColumns[] = ["Column N1", "Column N2", "Column N3", "Column N4"];

export const PHILOSOPHY_PRINCIPLES: string[] = ["Listen more than you speak.", "Simplify until it can't be more simple.", "Think globally and locally.", "Invert, always invert. Focus first on what NOT to do.", "Think in terms of incentives, do not change people/situations, change their incentives.", "The people surrounding you are an extension of you.", "A good product/service makes great part of its marketing.", "Opposite rule: Stimulate, provoke, do new things, break habits.", "Seek for freedom above all.", "Your way of thinking shapes your reality.", "Focus on the principles of each area/task of your life (80/20 rule).", "Be the kind of person that you will like to meet.", "Don't try to be someone else, use the unfair advantage of being YOU.", "Time > Money.", "Do not fix what is not broken."];

export const PHILOSOPHY_DISCLAIMER = "Each of the principles appearing on this list are the result of distilling thoughts both other's and mine, and are under revision all the time.";

export type ToolCategoryTitle = "LANGUAGES" | "FRAMEWORKS" | "DATABASES" | "AI";

export interface ToolCategory {
   title: ToolCategoryTitle;
   description: string;
}

export const TOOL_CATEGORIES: ToolCategory[] = [
   {
      title: "LANGUAGES",
      description: `"JavaScript, TypeScript, Node"`,
   },
   {
      title: "FRAMEWORKS",
      description: `"React, Vue, Next, Express, Nest"`,
   },
   {
      title: "DATABASES",
      description: `"Postgresql, MySQL, MongoDB, Redis"`,
   },
   {
      title: "AI",
      description: `"GPT, Claude, Gemini"`,
   },
];

export const STORY_IMAGES = [
   { src: "/old-monitor.png", alt: "Old computer monitor representing early career" },
   { src: "/office-monitor.png", alt: "Office monitor representing professional growth" },
   { src: "/laptop.png", alt: "Modern laptop representing current work" },
];
