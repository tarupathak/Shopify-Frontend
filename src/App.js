import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Product Listing Component</h1>}/>
          <Route path="/add" element={<h1>Product Listing Component</h1>}/>
          <Route path="/update" element={<h1>Product Listing Component</h1>}/>
          <Route path="/logout" element={<h1>Product Listing Component</h1>}/>
          <Route path="/profile" element={<h1>Product Listing Component</h1>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
