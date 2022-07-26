import React, { useState, useEffect } from "react";
import ProductsCard from "../../components/ProductCard/ProductCard";
import axios from "axios";

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  function filterNone() {
    axios.get("http://localhost:3001/api/products").then((response) => {
      setProducts(response.data);
    });
  }

  function filterAscPrice() {
    axios
      .get("http://localhost:3001/api/products/ascprice")
      .then((response) => {
        setProducts(response.data);
      });
  }
  function filterDescPrice() {
    axios
      .get("http://localhost:3001/api/products/descprice")
      .then((response) => {
        setProducts(response.data);
      });
  }
  function filterAscDate() {
    axios.get("http://localhost:3001/api/products/ascdate").then((response) => {
      setProducts(response.data);
    });
  }
  function filterDescDate() {
    axios
      .get("http://localhost:3001/api/products/descdate")
      .then((response) => {
        setProducts(response.data);
      });
  }

  var btns = document.getElementsByClassName("productBtn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }

  return (
    <main class="productMain">
      <div id="myBtnContainer">
        <button
          value="products"
          class="productBtn productss active"
          onClick={filterNone}
        >
          Show all
        </button>
        <button
          value="descPriceProducts"
          class="descPriceProducts productBtn"
          onClick={filterDescPrice}
        >
          Price (high-low)
        </button>
        <button
          value="ascPriceProducts"
          class="ascPriceProducts productBtn"
          onClick={filterAscPrice}
        >
          Price (low-high)
        </button>
        <button
          value="ascDateProducts"
          class="ascDateProducts productBtn"
          onClick={filterAscDate}
        >
          Date (vintage-recent)
        </button>
        <button
          value="descDateProducts"
          class="descDateProducts productBtn"
          onClick={filterDescDate}
        >
          Date (recent-vintage)
        </button>
      </div>
      <article class="product-grid-container">
        {products.map((car) => (
          <ProductsCard
            id={car.id}
            name={car.car_name}
            price={car.car_price}
            description={car.car_description}
            image={car.car_image}
          />
        ))}
      </article>
    </main>
  );
  // }
}
