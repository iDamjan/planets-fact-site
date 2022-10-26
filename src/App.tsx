import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import PlanetFactPage from "./pages/PlanetFactPage";
import "./App.css";
import ContextProvider from "./context/context-api";

function App() {
  return (
    <ContextProvider>
      <div className="body">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/planet/mercury" />} />
          <Route path="/planet/:planetName" element={<PlanetFactPage />} />
        </Routes>
      </div>
    </ContextProvider>
  );
}

export default App;
