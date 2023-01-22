import { useState } from "react";
import { Link } from "react-router-dom";

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
        <Link className="cartLink" to="cartScreen">
          <span className="topBarCartItem">
            <span className="topCart">
              <i class="topBarCartL fa-solid fa-cart-shopping"></i>
            </span>
            Cart
            <span className="topInput">0</span>
          </span>
        </Link>
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
          <span className="sideBarCartItem">
            <span className="topCart">
              <i class="topBarCartL fa-solid fa-cart-shopping"></i>
            </span>
            Cart
            <span className="topInput">0</span>
          </span>
        </div>
      ) : null}
    </div>
  );
}
