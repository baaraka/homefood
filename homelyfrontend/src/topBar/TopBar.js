import { useState } from "react";
import Modal from "../modal/Modal";
import "./TopBar.css";

export default function TopBar() {
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState(false);

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
          <span className="topInput">0</span>
        </button>
      </div>
      <Modal trigger={modal} setTrigger={setModal} className="popupContainer">
        <div className="popupContent">
          <div className="containerBody">
            <div className="modalBodyDiv">
              <div className="dishImage">
                <img
                  src="https://storage.dado.ng/wp-content/uploads/2019/06/06200804/Webp.net-resizeimage-3.png"
                  alt=""
                  className="modalImg"
                />
              </div>
              <div className="dishElite">
                <p className="dishParagraphImg">Yam and egg sauce</p>
                <div className="divDiv">
                  <p>
                    <span className="dishNumberList">TZS 5000.00/=</span>
                  </p>

                  <div className="qtyList">
                    <p>
                      <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                    </p>
                  </div>
                  <button className="deleteBtn">
                    <i className="deleteIcon fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
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
            <span className="topInput">0</span>
          </button>
        </div>
      ) : null}
    </div>
  );
}
