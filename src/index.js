import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import About from "./page/About";
import Interior from "./page/Main_Interior";
import Maintenance from "./page/Main_Maintenance";
import Service from "./page/Service";
import ProjectDetail from "./page/ProjectDetail";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Interior />} />
                <Route path="/about" element={<About />} />
                <Route path="/maintenance" element={<Maintenance />} />
                <Route path="/services" element={<Service />} />
                <Route path="/projectdetail" element={<ProjectDetail />} />
            </Routes>
        </Router>
    );
}

// Create root and render App
const root = createRoot(document.getElementById('root'));
root.render(<App />);
