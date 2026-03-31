import React, { useState } from "react";
import ContactForm from "../contact-form/ContactForm";
import ContactPageAccomplishments from "./components/contact-page-accomplishments/ContactPageAccomplishments";
import ContactPageHeader from "./components/contact-page-header/ContactPageHeader";
import ContactPagePitch from "./components/contact-page-pitch/ContactPagePitch";
import "./styles/contact-page-content-styles.css";

const ContactPageContent = (): React.ReactElement => {
   const [isContactFormLoaded, setIsContactFormLoaded] = useState(false);

   return (
      <div className="contact-page__content relative min-w-screen bg-page">
         <ContactPageHeader />

         <article className="contact-page__intro flex flex-col min-h-screen py-25">
            <ContactPageAccomplishments />
            <ContactPagePitch isContactFormLoaded={isContactFormLoaded} />
         </article>

         <ContactForm onLoad={() => setIsContactFormLoaded(true)} />
      </div>
   );
};

export default ContactPageContent;
