import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import "./style.scss";

const ProductsCard = ({
  name,
  price,
  image,
  description
}) =>

(
    <>
        <div class="product-grid-item">
          <div class="flip-card product-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={image} alt={name} />
                <div class="product-container">
                  <h4>
                    <b>{name}</b>
                  </h4>
                  <p>{price}</p>
                </div>
              </div>
              <div class="flip-card-back">
                <h2>{name}</h2>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
    </>
  );

export default ProductsCard
