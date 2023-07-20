import React from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>Product Listing Component</h1>} />
          <Route path="/add" element={<h1>Product Listing Component</h1>} />
          <Route path="/update" element={<h1>Product Listing Component</h1>} />
          <Route path="/logout" element={<h1>Product Listing Component</h1>} />
          <Route path="/profile" element={<h1>Hello</h1>} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
