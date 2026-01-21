// context for Theme
// Acts as a "channel" for sharing theme data across components
import { createContext } from "react";
const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});
export default ThemeContext;


// What this file really does

// Creates a context object

// Defines what data shape the context will have

// Key ideas

// theme → current theme value

// toggleTheme → function to change theme

// Why default values exist

// Helps with autocomplete

// Prevents crashes if provider is missing

// Not the real data — just a fallback

// 🧠 Think of this as:

// “This context will always give me a theme and a toggleTheme.”