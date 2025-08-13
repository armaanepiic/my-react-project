
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

import "./App.css";
import ThemeProvider from "./providers/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </ThemeProvider>
  );
}
