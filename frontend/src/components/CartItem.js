import { Link } from "react-router-dom";
import "./CartItem.scss";

const CartItem = () => {
  return (
    <div className="cartitems">
      <div className="cartitem__image">
        <img
          src="https://images.unsplash.com/photo-1519183071298-a2962feb14f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt=""
        ></img>
      </div>
      <Link to={`/product/${111}`} className="cartitem__name">
        <p>Product</p>
      </Link>
      <p className="cartitem__price">$99.99</p>
      <select className="cartitem__select">
        <option value="1"> 1 </option>
        <option value="2"> 2 </option>
        <option value="3"> 3 </option>
      </select>
      <button className="cartitem__deleteBtn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;
