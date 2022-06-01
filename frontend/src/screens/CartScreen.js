import CartItem from "../components/CartItem";
import "./CartScreen.scss";

const CartScreen = () => {
  return (
    <div className="cartscreen">
      <div className="cartscreen__list">
        <div className="cartscreen__up">
          <h2>Shopping Cart</h2>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className="cartscreen__down">
          <div className="cartscreen__info">
            <p>Subtotal (0) items</p>
            <p>$99.99</p>
          </div>
          <div className="cartscreen__button">
            <button type="button">Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
