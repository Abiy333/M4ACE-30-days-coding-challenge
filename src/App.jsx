import React from "react";
import ThemeProvider from "./components/Theme-toggle/ThemeProvider";
import ToastProvider from "./components/toast_notification/ToastProvider";
import ThemeToggle from "./components/Theme-toggle/ThemeToggle";
import ToastContainer from "./components/toast_notification/ToastContainer";
import WizardForm from "./components/wizardform/WizardForm";

export default function App() {
  return (
    <ThemeProvider>
      {/* Wrap everything else in the Toast engine */}
      <ToastProvider>
        <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
          <header>
            <h1>My Awesome App</h1>
            <ThemeToggle />
          </header>

          <main>
            <WizardForm />
          </main>

          <ToastContainer />
        </div>
      </ToastProvider>
    </ThemeProvider>
  );
}
