import Home from "./pages/Home";
import PropertyRequestAddress from "./pages/PropertyRequestAddress";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './index.css'
import FilterPage from "./pages/FilterPage";
import PropertyAddFirstPage from "./pages/PropertyAddPageFirst";
import PropertyRequestDetailAddress from "./pages/PropertyRequestDetailAddress";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/property" element={<PropertyRequestAddress/>}/>
        <Route path="/filter" element={<FilterPage/>}/>
        <Route path="/property-1" element={<PropertyAddFirstPage/>}/>
        <Route path="/property-2" element={<PropertyRequestAddress/>}/>
        <Route path="/property-3" element={<PropertyRequestDetailAddress/>}/>
      </Routes>
    </BrowserRouter>
  );
}



