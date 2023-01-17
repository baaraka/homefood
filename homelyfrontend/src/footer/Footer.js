import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerLeft">
        <h1 className="headingLeft">HomeBg</h1>
        <p className="paragraphLeft">
          Solution for easy and flexible getting meals for the household.You can
          trust us anywhere through this platform
        </p>
        <span className="spanLeft">©2022 Made by BarakaCodes</span>
      </div>
      <div className="footerLeft">
        <h1 className="headingLeft">About</h1>
        <p className="paragraphCenter">Our Company</p>
        <p className="paragraphCenter">Career</p>
        <p className="paragraphCenter">Investors Relations</p>
        <p className="paragraphCenter">Social Impact</p>
      </div>
      <div className="footerLeft">
        <h1 className="headingLeftR">Social</h1>
        <span className="spanRight">
          <i className="iconR fa-brands fa-instagram"></i>
          <i className="iconR fa-brands fa-facebook"></i>
          <i className="iconR fa-brands fa-twitter"></i>
          <i className="iconR fa-brands fa-linkedin"></i>
        </span>
      </div>
    </div>
  );
}
