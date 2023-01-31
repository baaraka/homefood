import Why from "./why/Why";
import "./App.css";
import Home from "./home/Home";
import TopBar from "./topBar/TopBar";
import Dish from "./dish/Dish";
import About from "./about/About";
import Get from "./get/Get";
import Testimonial from "./testimonial/Testimonial";
import New from "./new/New";
import Footer from "./footer/Footer";
import { useState } from "react";
import Modal from "./modal/Modal";

function App() {
  const [product, setProduct] = useState([
    {
      name: "Yam and egg sauce",
      price: 5000.0,
      imageURL:
        "https://storage.dado.ng/wp-content/uploads/2019/06/06200804/Webp.net-resizeimage-3.png",
      countInStock: 50,
    },
    {
      name: "Jollof rice and chicken",
      price: 6000.0,
      imageURL:
        "https://www.preciouscore.com/wp-content/uploads/2021/12/Jollof-Rice-With-Chicken-500x500.jpg",
      countInStock: 50,
    },
    {
      name: "Porridge beans",
      price: 2000.0,
      imageURL:
        "https://www.thepretendchef.com/wp-content/uploads/2017/11/nigerian-beans-porridge-1-7.jpg",
      countInStock: 50,
    },
    {
      name: "Semo and egusi soup",
      price: 4000.0,
      imageURL:
        "https://ntachiosa.com/wp-content/uploads/2020/08/ntachi-2-1110x1110-eited2-.png",
      countInStock: 50,
    },
    {
      name: "Amala and ewedu soup",
      price: 8000.0,
      imageURL: "https://pbs.twimg.com/media/Ey9RpckWQAIzcXj.jpg",
      countInStock: 50,
    },
    {
      name: "Eba and okra soup",
      price: 3500.0,
      imageURL:
        "https://allnigerianfoods.com/wp-content/uploads/okro_soup_recipe.jpg",
      countInStock: 50,
    },
  ]);

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  console.log(cart);
  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }]);
  };

  const handleShow = (value) => {
    setShowCart(value);
  };

  return (
    <div className="App">
      <TopBar handleShow={handleShow} count={cart.length} />
      {showCart ? (
        <Modal cart={cart} />
      ) : (
        <div>
          <Home />
          <Why />
          <Dish product={product} addToCart={addToCart} />
          <About />
          <Get />
          <Testimonial />
          <New />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
