import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import ErrorBoundary from "../components/error-boundary/ErrorBoundary";
import Footer from "../components/footer/Footer";
import GenericErrorPage from "../components/generic-error-page/GenericErrorPage";
import Header from "../components/header/Header";
import ContactForm from "../features/contact-form/ContactForm";
import Project from "../features/project/Project";
import ScrollToTop from "../utils/scrollToTop/ScrollToTop";
import { ThemeProvider } from "../utils/themeProvider/themeProvider";
import AboutMePage from "./pages/AboutMePage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";

function AppContent() {
   const location = useLocation();
   const isContactPage = location.pathname === "/contact";

   return (
      <>
         <ScrollToTop />
         <Header />
         <Routes>
            <Route
               path="/"
               element={
                  <ErrorBoundary fallback={<GenericErrorPage />}>
                     <HomePage />
                  </ErrorBoundary>
               }
            />
            <Route
               path="/projects"
               element={
                  <ErrorBoundary fallback={<GenericErrorPage />}>
                     <ProjectsPage />
                  </ErrorBoundary>
               }
            />
            <Route
               path="/projects/:projectName"
               element={
                  <ErrorBoundary fallback={<GenericErrorPage />}>
                     <Project />
                  </ErrorBoundary>
               }
            />
            <Route
               path="/contact"
               element={
                  <ErrorBoundary fallback={<GenericErrorPage />}>
                     <ContactPage />
                  </ErrorBoundary>
               }
            />
            <Route
               path="/about"
               element={
                  <ErrorBoundary fallback={<GenericErrorPage />}>
                     <AboutMePage />
                  </ErrorBoundary>
               }
            />
         </Routes>
         {!isContactPage && <ContactForm />}
         <Footer />
      </>
   );
}

function App() {
   return (
      <ThemeProvider>
         <BrowserRouter>
            <AppContent />
         </BrowserRouter>
      </ThemeProvider>
   );
}

export default App;
