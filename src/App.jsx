import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Team from "./pages/Team";
import Projects from "./pages/Projects";
import Join from "./pages/Join";

import "./App.css";

function AnimatedRoutes() {

  const location = useLocation();

  return (
    <AnimatePresence mode="wait">

      <Routes location={location} key={location.pathname}>

        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/join" element={<Join />} />

      </Routes>

    </AnimatePresence>
  );
}

export default function App() {

  return (
    <Router>

      <Navbar />

      <main className="main-content">
        <AnimatedRoutes />
      </main>

      <Footer />

    </Router>
  );
}