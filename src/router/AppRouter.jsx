import { BrowserRouter, Route, Routes } from "react-router";
import App from "../App";
export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="about" element={<h1>About</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
