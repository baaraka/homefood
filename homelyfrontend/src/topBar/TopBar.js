import { useState } from "react";
import "./TopBar.css";

export default function TopBar() {
  const [show, setShow] = useState(false);
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
        <button className="topBarCartItem">
          <span className="topCart">
            <i class="topBarCartL fa-solid fa-cart-shopping"></i>
          </span>
          Cart
          <span className="topInput">
            <input className="topInputItem" type="total" />
          </span>
        </button>
      </div>
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
          <button className="sideBarCartItem">
            <span className="topCart">
              <i class="topBarCartL fa-solid fa-cart-shopping"></i>
            </span>
            Cart
            <span className="topInput">
              <input className="topInputItem" type="total" />
            </span>
          </button>
        </div>
      ) : null}
    </div>
  );
}
