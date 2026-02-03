import React from "react";
import type { ProjectInterface } from "../../../../../../features/project/data/projectData";
import { useDynamicInputStyling } from "../../../../../../utils/hooks/useDynamicInputStyling/useDynamicInputStyling";
import useFetchData from "../../../../../../utils/hooks/useFetchData/useFetchData";
import { useHeaderProjectsCommandProcessor } from "../../../../../../utils/hooks/useHeaderProjectsCommandProcessor/useHeaderProjectsCommandProcessor";
import { useHeaderProjectsVisibilityTransition } from "../../../../../../utils/hooks/useHeaderProjectsVisibilityTransition/useHeaderProjectsVisibilityTransition";
import { useThemeContext } from "../../../../../../utils/hooks/useThemeContext/useThemeContext";
import "../../styles/custom-ping-animation.css";
import { INPUT_ARIA_LABEL_TEXT, SPAN_TEXT } from "./data/headerNavigationRetroData";
import "./styles/retro-navigation-animations.css";

const HeaderNavigationRetro = (): React.ReactElement => {
   const { theme } = useThemeContext();
   const { data: projects, loading, error } = useFetchData<ProjectInterface[]>("/projects");
   const { inputValue, setInputValue, handleInputChange } = useDynamicInputStyling();
   const { projectsAreVisible, projectsAreClosing, setProjectsAreVisible, setProjectsAreClosing } = useHeaderProjectsVisibilityTransition();
   const { executeCommand } = useHeaderProjectsCommandProcessor({ projects, setProjectsAreVisible, setProjectsAreClosing });

   return (
      <div className="header-navigation-retro">
         <div className="header-navigation-retro__wrapper flex font-mono justify-evenly w-125">
            <span className="header-navigation-retro__label font-bold text-[18px] text-accent">{SPAN_TEXT}</span>
            <form
               className="header-navigation-retro__form flex relative"
               onSubmit={(event) => {
                  event.preventDefault();
                  executeCommand(inputValue);
                  setInputValue("");
               }}
            >
               <input type="text" value={inputValue} maxLength={18} aria-label={INPUT_ARIA_LABEL_TEXT} onChange={handleInputChange()} className="header-navigation-retro__input min-w-5 w-[173px] text-body caret-accent bg-section outline-none" />
            </form>
         </div>
         {projectsAreVisible &&
            (loading ? (
               <span className={`header__navigation-retro-loading absolute -left-68 origin-top font-mono p-5 ${theme === "light" ? "bg-[#B6CCFE] text-[#E2EAFC]" : "bg-[#E2EAFC] text-[#B6CCFE]"}`} aria-label="Loading projects">
                  Loading projects...
               </span>
            ) : error ? (
               <span className={`header__navigation-retro-error absolute -left-68 origin-top font-mono p-5 ${theme === "light" ? "bg-[#B6CCFE] text-red-700" : "bg-[#E2EAFC] text-red-500]"}`} aria-label="Error message">
                  Error: {error.message}
               </span>
            ) : projects === null || projects.length === 0 ? (
               <span className={`header__navigation-retro-empty absolute -left-68 origin-top font-mono p-5 ${theme === "light" ? "bg-[#B6CCFE] text-[#E2EAFC]" : "bg-[#E2EAFC] text-[#B6CCFE]"}`} aria-label="Error message">
                  No projects data available or unexpected format.
               </span>
            ) : (
               <ul aria-label="projects-menu-button" className={`header__navigation-retro-list absolute origin-top top-[27px] left-[-50px] w-[600px] grid grid-cols-3 grid-rows-2 ${theme === "light" ? "bg-[#B6CCFE]" : "bg-[#E2EAFC]"} visible ${projectsAreClosing ? "header__navigation-retro-list--closing" : ""}`}>
                  {projects.map((project) => (
                     <li key={project.project_id} className={`header__navigation-retro-list-item p-2.5 hover:${theme === "light" ? "bg-[#ABC4FF]" : "bg-[#EDF2FB]"} cursor-pointer`}>
                        <a href={`/projects/${project.project_name}`} className={`header__navigation-retro-list-link block w-full font-mono ${theme === "light" ? "text-[#E2EAFC]" : "text-[#B6CCFE]"}`}>
                           <span className="header__navigation-retro-list-link-text block w-full">{formatName(project.project_name)}</span>
                        </a>
                     </li>
                  ))}
               </ul>
            ))}
      </div>
   );
};

export default HeaderNavigationRetro;
