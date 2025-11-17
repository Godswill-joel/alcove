import Home from "./Pages/Home/Page.jsx";
import About from "./Pages/About/page.jsx";
import Apartment from "./Pages/Apartment/pages.jsx";
import Contact from "./Pages/Contact/Pages.jsx";
import { Routes, Route } from "react-router-dom";
import ApartmentDetails from "./components/apartment/Apartmentdetails.jsx";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/apartments" element={<Apartment/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/details" element={<ApartmentDetails />} />
      
    </Routes>
  );
}
