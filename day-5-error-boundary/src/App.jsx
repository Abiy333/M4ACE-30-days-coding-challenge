import React from "react";
import BuggyComponent from "./components/BuggyComponent";
import ErrorBoundary from "./components/ErrorBoundary";

export default function App() {
  return (
    <div>
      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
    </div>
  );
}
