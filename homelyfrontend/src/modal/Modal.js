import { useEffect, useState } from "react";
import "./Modal.css";

export default function Modal({ cart }) {
  const [CART, setCART] = useState([]);
  const [orderCount, setOrderCount] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleOrder = () => {
    setOrderCount((prevCount) => prevCount + 1);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      cart.length = 0;
      setCART([]); // Empty the cart after the order is placed
    }, 3000);
  };

  useEffect(() => {
    setCART(cart);
  }, [cart]);

  return (
    <div className="modal">
      {CART?.map((cartItem, cartIndex) => {
        return (
          <div className="modalBody" key={cartIndex}>
            <div className="modalImage">
              <img src={cartItem.imageURL} alt="" className="dishImg" />
            </div>
            <div className="modalElite">
              <p className="modalParagraphImg">{cartItem.name}</p>
              <div className="divDiv">
                <p className="dishNumberLists">
                  <span className="dishNumberList">
                    TZS {cartItem.price * cartItem.quantity}
                  </span>
                </p>
                <div className="qtyList">
                  <button
                    className="dBtn"
                    onClick={() => {
                      const _CART = CART.map((item, index) => {
                        return cartIndex === index
                          ? {
                              ...item,
                              quantity:
                                item.quantity > 0 ? item.quantity - 1 : 0,
                            }
                          : item;
                      });
                      setCART(_CART);
                    }}
                  >
                    -
                  </button>
                  <span className="modalInput">{cartItem.quantity}</span>
                  <button
                    className="pBtn"
                    onClick={() => {
                      const _CART = CART.map((item, index) => {
                        return cartIndex === index
                          ? { ...item, quantity: item.quantity + 1 }
                          : item;
                      });
                      setCART(_CART);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="popupHeaderBtn">
        <div className="divBtn">
          <div className="totalAmount">
            <p className="totalAmt">Total Amount</p>
          </div>
          <div className="totalAmounts">
            <p className="amtTotal">
              TZS{" "}
              {CART?.map((item) => item.price * item.quantity).reduce(
                (total, value) => total + value,
                0
              )}
            </p>
          </div>
        </div>
        <div className="dvBtn">
          <button onClick={handleOrder} className="orderButton">
            Order Now
          </button>
        </div>

        {showSuccess && (
          <div className="orderSuccess">
            <span className="orderSS">
              <i className="orderSSIcon fa-solid fa-thumbs-up"></i>
            </span>{" "}
            Order Placed Successfully!
          </div>
        )}
      </div>
    </div>
  );
}
