import React, { useState, useEffect} from "react";
import ProductsCard from "../../components/ProductCard/ProductCard";
import axios from "axios";

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/products")
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  const [ascPriceProducts, setAscPriceProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/products/ascprice")
      .then((response) => {
        console.log(response.data);
        setAscPriceProducts(response.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  const [descPriceProducts, setDescPriceProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/products/descprice")
      .then((response) => {
        console.log(response.data);
        setDescPriceProducts(response.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  const [descDateProducts, setDescDateProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/products/descdate")
      .then((response) => {
        console.log(response.data);
        setDescDateProducts(response.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  const [ascDateProducts, setAscDateProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/products/ascdate")
      .then((response) => {
        console.log(response.data);
        setAscDateProducts(response.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  var btns = document.getElementsByClassName("productBtn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }

  function filter(type) {
    return () => {
      this.setState({type})
    }
  }

  return (
    <main class="productMain">
      <div id="myBtnContainer">
        <button class="productBtn active" onclick="">
          Show all
        </button>
        <button class="productBtn" onclick="">
          Price (high-low)
        </button>
        <button class="productBtn" onclick="">
          Price (low-high)
        </button>
        <button class="productBtn" onclick="">
          Date (vintage-recent)
        </button>
        <button class="productBtn" onclick="">
          Date (recent-vintage)
        </button>
      </div>
      <article class="product-grid-container">
        {products.map((car) => (
          <ProductsCard
            key={car.id}
            name={car.car_name}
            price={car.car_price}
            description={car.car_description}
            image={car.car_image}
          />
        ))}
      </article>
    </main>
  );
}
