import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home.jsx";
import "./App.css";
import Menu from "./Components/Menu.jsx";
import Evt from "./Components/Events.jsx";
import Apl from "./Components/Apply.jsx";
import Locations from "./Components/Locations.jsx";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Menu" element={<Menu />} />
                    <Route path="/Events" element={<Evt />} />
                    <Route path="/Apply" element={<Apl />} />
                    <Route path="/Locations" element={<Locations />} />
                </Routes>
            </div>
        </Router>
    );

}

export default App;
