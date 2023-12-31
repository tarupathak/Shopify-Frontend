import React from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import PrivateComponent from "./Components/PrivateComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import ProductList from "./Pages/ProductList";
import AddProduct from "./Pages/AddProduct";
import UpdateProduct from "./Pages/UpdateProduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<ProductList />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route
              path="/update/:id"
              element={<UpdateProduct />}
            />
            <Route
              path="/logout"
              element={<h1>Product Listing Component</h1>}
            />
            <Route path="/profile" element={<h1>Hello</h1>} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
