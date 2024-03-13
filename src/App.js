import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import ProductProvider from "./contexts/ProductContext";
import SidebarProvider from "./contexts/SidebarContext";
import CartProvider from "./contexts/CartContext";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Router>
        <SidebarProvider>
          <CartProvider>
            <ProductProvider>
              <Header />
              <Hero />

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductDetails />} />
              </Routes>
              <Sidebar />
              <Footer />
            </ProductProvider>
          </CartProvider>
        </SidebarProvider>
      </Router>
    </div>
  );
};

export default App;
