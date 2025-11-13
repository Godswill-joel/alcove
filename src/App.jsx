import About from "./Pages/About/page.jsx";
import Home from "./Pages/Home/Page.jsx";
import { Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      
    </Routes>
  );
}
