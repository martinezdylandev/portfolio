import * as React from "react";
import { ErrorBoundaryProps, ErrorBoundaryState } from "./data/errorBoundaryData";

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
   constructor(props) {
      super(props);
      this.state = { hasError: false };
   }

   static getDerivedStateFromError(_error: Error): Partial<ErrorBoundaryState> {
      return { hasError: true };
   }

   componentDidCatch(error: Error, info: React.ErrorInfo): void {
      console.error("ErrorBoundary caught an error:", error, info.componentStack);
   }

   render(): React.ReactNode {
      if (this.state.hasError) {
         return this.props.fallback;
      }

      return this.props.children;
   }
}

export default ErrorBoundary;
