import Home from "./pages/Home";
import PropertyRequestAddress from "./pages/PropertyRequestAddress";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import FilterPage from "./pages/FilterPage";
import PropertyAddFirstPage from "./pages/PropertyAddPageFirst";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/property" element={<PropertyRequestAddress/>}/>
        <Route path="/filter" element={<FilterPage/>}/>
        <Route path="/property-1" element={<PropertyAddFirstPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}



