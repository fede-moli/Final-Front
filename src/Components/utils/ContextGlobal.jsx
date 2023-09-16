import { createContext } from "react";
import { useState } from "react";

export const ContextGlobal = createContext({});

export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  function changeTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  const value = {
    theme,
    changeTheme,
  };

  return (
    <ContextGlobal.Provider value={value}>{children}</ContextGlobal.Provider>
  );
};
