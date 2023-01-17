import "./Home.css";

export default function Home() {
  return (
    <div className="home" id="Home">
      <div className="homeTitles">
        <div className="homeTitle">
          <h1 className="homeTitleHead">
            Enjoy <span className="homeSpan">home made meals</span> far away
            from home
          </h1>
          <p className="homeParagraph">
            Helping you enjoy comfortable and healthy food anywhere and anytime
            on the go
          </p>
          <button className="homeBtn">
            <a href="#OurDish" className="aHome">
              Order Now
            </a>
          </button>
        </div>
        <div className="homeImg">
          <img
            src="https://foodapp-by-eniola.netlify.app/static/media/FoodImage.ccbc8a18b3ce6a6bf1f5.webp"
            alt=""
            className="homeImgItem"
          />
        </div>
      </div>
      <div className="foodOrder">
        <div className="foodOrder1">
          <h3 className="heading3">500+</h3>
          <p className="paragraph3">Food partners</p>
        </div>
        <div className="foodOrder1">
          <h3 className="heading3">1k+</h3>
          <p className="paragraph3">orders delivered</p>
        </div>
        <div className="foodOrder1">
          <h3 className="heading3">12k+</h3>
          <p className="paragraph3">Clients</p>
        </div>
      </div>
    </div>
  );
}
