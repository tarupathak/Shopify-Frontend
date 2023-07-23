import React, { useState, useEffect } from "react";
import "./Pages.css";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);
  const params = useParams();

  const handleUpdate = () => {
    console.warn(name, price, category, company);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  const getProductDetail = async () => {
    console.warn(params);
    let result = await fetch(`http://localhost:8080/product-update/${params.id}`);
    result = await result.json();
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company);
  };

  return (
    <div className="add-pro">
      <div className="login-box">
        <h1>Update Product</h1>
        <div className="inp-box">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {error && !name && <span className="invalid">Enter valid name.</span>}
        </div>
        <div className="inp-box">
          <label>Price</label>
          <input
            type="text"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          {error && !price && (
            <span className="invalid">Enter valid price.</span>
          )}
        </div>
        <div className="inp-box">
          <label>Category</label>
          <input
            type="text"
            placeholder="Enter Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          {error && !category && (
            <span className="invalid">Enter valid category.</span>
          )}
        </div>
        <div className="inp-box">
          <label>Company</label>
          <input
            type="text"
            placeholder="Enter Company Name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          {error && !company && (
            <span className="invalid">Enter valid company.</span>
          )}
        </div>
        <button onClick={handleUpdate}>Update</button>
      </div>
    </div>
  );
};

export default UpdateProduct;
