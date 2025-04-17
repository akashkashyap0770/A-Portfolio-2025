import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import DashBoard from "./components/DashBoard";
import Home from "./pages/Home";
import About from "./pages/About";
import Technologies from "./pages/Technologies";
import Experiences from "./pages/Experiences";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Error from "./components/Error";

function App() {

  return (
    <BrowserRouter>
      <div className="App overflow-hidden transition-all duration-300 scroll-smooth">
        <ScrollToTop />
        <Routes>
          <Route element={<DashBoard />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
