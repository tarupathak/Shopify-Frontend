import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import './Pages.css'

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

  console.warn('products', products)
  return (
    <div className="box">
      <h3>Product List</h3>
      <table class="table table-striped" >
        <thead>
          <tr>
            <th scope="col">S. No.</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Category</th>
          </tr>
        </thead>
        <tbody>
          {products && products.map((item,index) => {
            return (
              <tr>
                <th scope="row">{index+1}</th>
                <td>{item.name}</td>
                <td>$ {item.price}</td>
                <td>{item.category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
