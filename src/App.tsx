import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import PlanetFact from "./pages/PlanetFact";
import './App.css'

function App() {
  return (
    <div className="body">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/planet/mercury" />} />
        <Route path="/planet/:planetFact" element={<PlanetFact />} />
      </Routes>
    </div>
  );
}

export default App;
