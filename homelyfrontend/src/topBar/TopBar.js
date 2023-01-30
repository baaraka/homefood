import { useEffect, useState } from "react";
import Modal from "../modal/Modal";
import "./TopBar.css";

export default function TopBar({ cart }) {
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState(false);

  const [CART, setCART] = useState([]);
  useEffect(() => {
    setCART(cart);
  }, [cart]);

  return (
    <div className="topBar">
      <div className="topBarTitleLeft">
        <h1 className="topBarTitleItem">HomeBg</h1>
      </div>
      <div className="topBarTitle">
        <ul className="topBarListItem">
          <a className="aTop" href="#Home">
            <li className="topBarListItems">Home</li>
          </a>
          <a className="aTop" href="#WhyChooseUs">
            <li className="topBarListItems">Why Choose Us</li>
          </a>
          <a className="aTop" href="#OurDish">
            <li className="topBarListItems">Our dishes</li>
          </a>
          <a className="aTop" href="#AboutUs">
            <li className="topBarListItems">About Us</li>
          </a>
          <a className="aTop" href="#Testimonials">
            <li className="topBarListItems">Testimonials</li>
          </a>
        </ul>
      </div>
      <div className="topBarCart">
        <button onClick={() => setModal(true)} className="topBarCartItem">
          <span className="topCart">
            <i class="topBarCartL fa-solid fa-cart-shopping"></i>
          </span>
          Cart
          <span className="topInput">{cart.length}</span>
        </button>
      </div>
      <Modal trigger={modal} setTrigger={setModal} className="popupContainer">
        <div className="popupContent">
          <div className="containerBody">
            {CART?.map((cartItem, cartIndex) => {
              return (
                <div className="modalBodyDiv" key={cartIndex}>
                  <div className="dishImage">
                    <img src={cartItem.imageURL} alt="" className="modalImg" />
                  </div>
                  <div className="dishElite">
                    <p className="dishParagraphImg">{cartItem.name}</p>
                    <div className="divDiv">
                      <p>
                        <span className="dishNumberList">
                          TZS {cartItem.price * cartItem.quantity}
                        </span>
                      </p>

                      <div className="qtyList">
                        <button
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
                        <span>{cartItem.quantity}</span>
                        <button
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
                      <button className="deleteBtn">
                        <i className="deleteIcon fa-solid fa-trash"></i>
                      </button>
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
              <button onClick={() => setModal(false)} className="closeButton">
                Close
              </button>
              <button className="orderButton">Order</button>
            </div>
          </div>
        </div>
      </Modal>
      <div className="toggleMenu">
        <i
          onClick={() => setShow(!show)}
          className="showBtn fa-solid fa-bars"
        ></i>
      </div>
      {show ? (
        <div className="sideBarTitle">
          <ul className="sideBarListItem">
            <a className="aTop" href="#Home">
              <li className="sideBarListItems">Home</li>
            </a>
            <a className="aTop" href="#WhyChooseUs">
              <li className="sideBarListItems">Why Choose Us</li>
            </a>
            <a className="aTop" href="#OurDish">
              <li className="sideBarListItems">Our dishes</li>
            </a>
            <a className="aTop" href="#AboutUs">
              <li className="sideBarListItems">About Us</li>
            </a>
            <a className="aTop" href="#Testimonials">
              <li className="sideBarListItems">Testimonials</li>
            </a>
          </ul>
          <button onClick={() => setModal(true)} className="sideBarCartItem">
            <span className="topCart">
              <i class="topBarCartL fa-solid fa-cart-shopping"></i>
            </span>
            Cart
            <span className="topInput">{cart.length}</span>
          </button>
        </div>
      ) : null}
    </div>
  );
}
