import "./ProductScreen.scss";

const ProductScreen = () => {
  return (
    <div className="productscreen">
      <div className="productscreen__left">
        <div className="left__image">
          <img
            src="https://images.unsplash.com/photo-1519183071298-a2962feb14f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt=""
          ></img>
        </div>
        <div className="left__info">
          <p className="left__name"> Product </p>
          <p className="left__price"> $99 .99 </p>
          <p className="left__description"> This is a Popular product </p>
        </div>
      </div>
      <div className="productscreen__right">
        <div className="right__info">
          <p className="right__price">
            Price:
            <span> $99 .99 </span>
          </p>
          <p className="right__status">
            Status:
            <span> In Stock </span>
          </p>
          <p className="right__qty">
            Qty:
            <select>
              <option value="1"> 1 </option>
              <option value="2"> 2 </option>
              <option value="3"> 3 </option>
            </select>
          </p>
          <p>
            <button type="button">Add to cart</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
