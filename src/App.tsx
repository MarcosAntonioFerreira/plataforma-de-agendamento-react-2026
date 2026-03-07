
import { BrowserRouter, Routes, Route } from "react-router";
import PageComponents from "./pages/page-components";
import PageHome from "./pages/page-home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/componentes" element={<PageComponents />} />
        <Route path="/" element={<PageHome />} />
      </Routes>
    </BrowserRouter>
  )
}

