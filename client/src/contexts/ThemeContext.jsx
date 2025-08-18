// context for Theme
// Acts as a "channel" for sharing theme data across components
import { createContext } from "react";
const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});
export default ThemeContext;
