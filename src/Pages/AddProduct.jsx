import React, { useState, useEffect } from "react";
import "./Pages.css";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);

  const handleAdd = async () => {
    console.warn(!name);
    if (!name || !price || !category || !company) {
      setError(true);
      return false;
    }
    console.warn(name, price, category, company);
    let userId = JSON.parse(localStorage.getItem("user"))._id;
    let result = await fetch("http://localhost:8080/add-product", {
      method: "post",
      body: JSON.stringify({ name, price, category, company, userId }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
  };

  return (
    <div className="add-pro">
      <div className="login-box">
        <h1>Add Product</h1>
        <div className="inp-box">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span>Enter valid name.</span>
        </div>
        <div className="inp-box">
          <label>Price</label>
          <input
            type="text"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="inp-box">
          <label>Category</label>
          <input
            type="text"
            placeholder="Enter Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="inp-box">
          <label>Company</label>
          <input
            type="text"
            placeholder="Enter Company Name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <button onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
};

export default AddProduct;
