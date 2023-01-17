import "./Get.css";

export default function Get() {
  return (
    <div className="get">
      <div className="getHeadingDiv">
        <h1 className="getHeading">Get our mobile app</h1>
        <p className="paragraphHeading">Enjoy better experience</p>
      </div>
      <div className="getBody">
        <div className="getBodyParagraph">
          <p className="getBodyP">
            With our app, you never have to settle for unhealthy, expensive
            takeaway food again. From spicy noodles to fresh salads, we'll
            deliver anywhere in your city. Get tasty meals in just 30 minutes.
            It's simple. We make it easy for you to make smart business
            decisions fast. Whether you have a busy schedule or just enjoy
            home-cooked food,
          </p>
          <button className="apple">
            <span className="logo">
              <i className="appleLogo fa-brands fa-apple"></i>
            </span>
            Download on the <br /> <span className="getIts">App Store</span>
          </button>
          <button className="playStore">
            <span className="logo">
              <i className="playLogo fa-brands fa-google-play"></i>
            </span>
            Get It in <br />
            <span className="getIt"> Google Play</span>
          </button>
        </div>
        <div className="getImage">
          <img
            src="https://www.bigoven.com/assets/images/iphone-trio.png"
            alt=""
            className="getImg"
          />
        </div>
      </div>
    </div>
  );
}
