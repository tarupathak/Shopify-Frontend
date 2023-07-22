import React from "react";
import "./Pages.css";

const AddProduct = () => {
  return (
    <div className="add-pro">
      <div className="login-box">
      <h1>Add Product</h1>
        <div className="inp-box">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter Name"
          />
        </div>
        <div className="inp-box">
          <label>Price</label>
          <input
            type="text"
            placeholder="Enter price"
          />
        </div>
        <div className="inp-box">
          <label>Category</label>
          <input
            type="text"
            placeholder="Enter Category"
          />
        </div>
        <div className="inp-box">
          <label>Company</label>
          <input
            type="text"
            placeholder="Enter Company Name"
          />
        </div>
        <button>Add</button>
      </div>
    </div>
  );
};

export default AddProduct;
