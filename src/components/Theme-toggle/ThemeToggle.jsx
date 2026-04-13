import React from "react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "dark" ? "Light" : "Dark"} Mode
    </button>
  );
}
