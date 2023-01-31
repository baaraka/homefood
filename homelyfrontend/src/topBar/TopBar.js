import { useState } from "react";
import "./TopBar.css";

export default function TopBar(props) {
  const [show, setShow] = useState(false);

  return (
    <div className="topBar">
      <div className="topBarTitleLeft">
        <h1 onClick={() => props.handleShow(false)} className="topBarTitleItem">
          HomeBg
        </h1>
      </div>
      <div className="topBarTitle">
        <ul className="topBarListItem">
          <a className="aTop" href="#Home">
            <li
              onClick={() => props.handleShow(false)}
              className="topBarListItems"
            >
              Home
            </li>
          </a>
          <a className="aTop" href="#WhyChooseUs">
            <li
              onClick={() => props.handleShow(false)}
              className="topBarListItems"
            >
              Why Choose Us
            </li>
          </a>
          <a className="aTop" href="#OurDish">
            <li
              onClick={() => props.handleShow(false)}
              className="topBarListItems"
            >
              Our dishes
            </li>
          </a>
          <a className="aTop" href="#AboutUs">
            <li
              onClick={() => props.handleShow(false)}
              className="topBarListItems"
            >
              About Us
            </li>
          </a>
          <a className="aTop" href="#Testimonials">
            <li
              onClick={() => props.handleShow(false)}
              className="topBarListItems"
            >
              Testimonials
            </li>
          </a>
        </ul>
      </div>
      <div className="topBarCart">
        <button
          onClick={() => props.handleShow(true)}
          className="topBarCartItem"
        >
          <span className="topCart">
            <i class="topBarCartL fa-solid fa-cart-shopping"></i>
          </span>
          Cart
          <span className="topInput">{props.count}</span>
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
              <li
                onClick={() => props.handleShow(false)}
                className="sideBarListItems"
              >
                Home
              </li>
            </a>
            <a className="aTop" href="#WhyChooseUs">
              <li
                onClick={() => props.handleShow(false)}
                className="sideBarListItems"
              >
                Why Choose Us
              </li>
            </a>
            <a className="aTop" href="#OurDish">
              <li
                onClick={() => props.handleShow(false)}
                className="sideBarListItems"
              >
                Our dishes
              </li>
            </a>
            <a className="aTop" href="#AboutUs">
              <li
                onClick={() => props.handleShow(false)}
                className="sideBarListItems"
              >
                About Us
              </li>
            </a>
            <a className="aTop" href="#Testimonials">
              <li
                onClick={() => props.handleShow(false)}
                className="sideBarListItems"
              >
                Testimonials
              </li>
            </a>
          </ul>
          <button
            onClick={() => props.handleShow(true)}
            className="sideBarCartItem"
          >
            <span className="topCart">
              <i class="topBarCartL fa-solid fa-cart-shopping"></i>
            </span>
            Cart
            <span className="topInput">{props.count}</span>
          </button>
        </div>
      ) : null}
    </div>
  );
}
