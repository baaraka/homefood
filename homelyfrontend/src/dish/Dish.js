import "./Dish.css";

export default function Dish({ product, addToCart }) {
  return (
    <div className="dish" id="OurDish">
      <div className="dishHeading">
        <h1 className="headingDish">Our daily dishes</h1>
        <p className="paragraphDish">
          Check out recommended dishes of your choice
        </p>
      </div>
      <div className="dishBody">
        {product.map((productItem, productIndex) => {
          return (
            <div className="dishBodyDiv" key={productIndex}>
              <div className="dishImage">
                <img src={productItem.imageURL} alt="" className="dishImg" />
              </div>
              <div className="dishE">
                <p className="dishParagraphImg">{productItem.name}</p>
                <p className="pPrice">
                  price:{" "}
                  <span className="dishNumber">TZS {productItem.price}</span>
                </p>
                <p className="pStatus">
                  status:{" "}
                  <span>
                    {productItem.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </span>
                </p>
                <div className="qtyL">
                  <p>
                    <button
                      onClick={() => addToCart(productItem)}
                      className="dishButton"
                      type="button"
                    >
                      Add To Cart
                    </button>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
