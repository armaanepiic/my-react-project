// Theme provider
// A wrapper component that manages the actual theme state using useState

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import ThemeContext from "../contexts/ThemeContext";

// Contains the toggle logic to switch between "light" and "dark" themes
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };


  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    setSearchParams({ ...searchParams, mode: theme, user: "Arman" });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);



  // ThemeContext.Provider make the theme state and toggle function available to all child components
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

// What happens here (VERY IMPORTANT)

// Provider broadcasts values

// Any component inside can access:

// theme

// toggleTheme

// 🧠 Think of Provider as:

// “I’m opening a Wi-Fi network. Anyone inside can connect.”
