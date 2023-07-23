import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Pages.css";
import { Link, useNavigate } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:8080/products");
    result = await result.json();
    setProducts(result);
  };

  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:8080/product/${id}`, {
      method: "Delete",
    });
    result = await result.json();
    if (result) {
      getProducts();
    }
  };

  console.warn("products", products);
  return (
    <div className="box">
      <h3>Product List</h3>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">S. No.</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Category</th>
            <th scope="col">Operation</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((item, index) => {
              return (
                <tr key={item._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>$ {item.price}</td>
                  <td>{item.category}</td>
                  <td>
                    <button onClick={() => deleteProduct(item._id)}>
                      Delete
                    </button>
                  </td>
                  <td>
                    <Link to={"/update/"+item._id}>
                      <button>Update</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
