import "./Product.scss";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="product">
      <img
        src="https://images.unsplash.com/photo-1519183071298-a2962feb14f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        alt=""
      ></img>
      <div className="product__info">
        <p className="info__name">Product 1</p>
        <p className="info__description">This is a product very good</p>
        <p className="info__price">$99.99</p>
        <Link to={`/product/${111}`} className="info__button">
          View
        </Link>
      </div>
    </div>
  );
};

export default Product;
