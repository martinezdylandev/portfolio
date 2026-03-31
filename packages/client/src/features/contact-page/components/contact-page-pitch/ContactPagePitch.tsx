import React from "react";
import { useMediaQuery } from "../../../../utils/hooks/useMediaQuery/useMediaQuery";
import "./styles/contact-page-pitch-styles.css";
import ContactPagePitchCompact from "./components/contact-page-pitch-compact/ContactPagePitchCompact";
import ContactPagePitchDesktop from "./components/contact-page-pitch-desktop/ContactPagePitchDesktop";

const ContactPagePitch = ({ isContactFormLoaded }: { isContactFormLoaded: boolean }): React.ReactElement => {
   const isDesktop = useMediaQuery("(min-width: 1024px)");

   return isDesktop ? <ContactPagePitchDesktop isContactFormLoaded={isContactFormLoaded} /> : <ContactPagePitchCompact isContactFormLoaded={isContactFormLoaded} />;
};

export default ContactPagePitch;
