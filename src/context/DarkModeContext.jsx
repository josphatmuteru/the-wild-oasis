import { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(false, "isDarkMode");

  useEffect(
    function () {
      if (isDarkMode) {
        document.documentElement.classList.add("dark-mode");
        document.documentElement.classList.remove("ligt-mode");
      } else {
        document.documentElement.classList.remove("dark-mode");
        document.documentElement.classList.add("ligt-mode");
      }
    },
    [isDarkMode]
  );

  function toggleDarkMode() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error(
      "DarkModeContext was used outside of DarkMode context provider"
    );

  return context;
}

export { DarkModeProvider, useDarkMode };
