import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import PlanetFactPage from "./pages/PlanetFactPage";
import "./App.scss";

function App() {
  return (
    <div className="body">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/planet/mercury" />} />
        <Route path="/planet/:planetName" element={<PlanetFactPage />} />
      </Routes>
    </div>
  );
}

export default App;
