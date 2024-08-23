import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Pages.css";
import { Link, useNavigate } from "react-router-dom";
import img from "../Assets/download.jpeg";
import search from "../Assets/search.svg";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:8000/products", {
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    result = await result.json();
    setProducts(result);
  };

  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:8000/product/${id}`, {
      method: "Delete",
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    result = await result.json();
    if (result) {
      getProducts();
    }
  };

  const searchProduct = async (e) => {
    console.warn(e.target.value);
    let key = e.target.value;
    if (key) {
      let result = await fetch(`http://localhost:8000/search/${key}`, {
        headers: {
          authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });
      result = await result.json();
      if (result) {
        setProducts(result);
      }
    } else {
      getProducts();
    }
  };

  console.warn("products", products);
  return (
    <div className="box">
      <h3>Product List</h3>
      <div className="input">
        <img src={search} />
        <input
          type="text"
          style={{
            width: "100%",
            border: "none",
            outline: "none",
          }}
          placeholder="Search Product"
          onChange={searchProduct}
        />
      </div>
      <div className="probox">
        {products.length > 0 ? (
          products.map((item, index) => {
            return (
              <div className="product" key={item._id}>
                <img src={img} />
                <p>{item.name}</p>
                <div>
                  <span
                    style={{
                      fontSize: "medium",
                      fontWeight: "500",
                      color: "#666",
                    }}
                  >
                    Price :{" "}
                  </span>
                  <span style={{ color: "#666" }}>$ {item.price}</span>
                </div>
                <div>
                  <span
                    style={{
                      fontSize: "medium",
                      fontWeight: "500",
                      color: "#666",
                    }}
                  >
                    Category :{" "}
                  </span>
                  <span style={{ color: "#666" }}>{item.category}</span>
                </div>
                <div className="delBut">
                  <button onClick={() => deleteProduct(item._id)}>
                    Delete
                  </button>
                </div>
                <div className="upBut">
                  <Link to={"/update/" + item._id}>
                    <button>Update</button>
                  </Link>
                </div>
              </div>
            );
          })
        ) : (
          <h1>No Result Found!</h1>
        )}
      </div>
    </div>
  );
};

export default ProductList;
