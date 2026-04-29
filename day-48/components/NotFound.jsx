import React from "react";
import { Link } from "react-router-dom";

import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <Link to="/">
        <div>
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/error/en_US/title._TTD_.png"
            alt="Sorry this page is not found"
          />
        </div>
        <div>
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/error/en_US/111._TTD_.jpg"
            alt="dog-pic"
          />
        </div>
      </Link>
    </div>
  );
};

export default NotFound;
