import { Routes, Route } from "react-router-dom";
import Home from "../src/Pages/Home.jsx";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
    </Routes>
  );
}
