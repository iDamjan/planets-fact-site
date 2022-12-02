import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import PlanetFactPage from "./pages/PlanetFactPage";
import "./App.scss";

function App() {
  const location = useLocation();
  
  return (
    <div className="body">
      <Navbar />
      <Routes location={location} key = {location.pathname}>
        <Route path="*" element={<Navigate to="/planet/Mercury" />} />
        <Route path="/planet/:planetName" element={<PlanetFactPage />} />
      </Routes>
    </div>
  );
}

export default App;
