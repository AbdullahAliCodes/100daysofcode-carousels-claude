import React from "react";

import "./Product.css";

const Product = (props) => {
  const { id, title, imgSrc, rating, price } = props;

  return (
    <div className="product">
      <img src={imgSrc} alt="keyboard-product" />
      <div className="product-info">
        <p>{title}</p>
        <div className="product-rating">
          <p>{rating}</p>
        </div>
        <p className="product-price">{price}</p>
      </div>
      <button className="product-button">Add to cart</button>
    </div>
  );
};

export default Product;
