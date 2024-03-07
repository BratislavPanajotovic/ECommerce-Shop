import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import ProductProvider from "./contexts/ProductContext";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Router>
        <ProductProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
          <Sidebar />
          <Footer />
        </ProductProvider>
      </Router>
    </div>
  );
};

export default App;
