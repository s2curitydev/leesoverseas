import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import Home from "./pages/HomePage/Home";
import Service from "./pages/Services/Service";
import Product from "./pages/Products/Product";
import Schedule from "./components/Schedule/Schedule";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/products" element={<Product />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
      <Schedule />
      <Footer />
    </Router>
  );
}

export default App;
