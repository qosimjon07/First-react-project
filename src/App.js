import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/questions";
import Home from "./pages/home";
import LoginPage from "./pages/login";
import Guides from "./pages/guides";
import Security from "./pages/security";
import Help from "./pages/help";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/question" element={<About />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/security" element={<Security />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
