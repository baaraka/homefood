import Data from "../data/Data";
import "./About.css";

export default function About() {
  return (
    <div className="about" id="AboutUs">
      <div className="aboutTitle">
        <h1 className="aboutHeading">About us</h1>
        <p>
          <Data>
            I make delicious healthy meals for busy people who want to enjoy
            home made food without the hassle of cooking. Why would you cook
            when you don't have to? The Hot Plate makes it easy to eat your
            favorite home cooked food anywhere you want. You deserve to eat
            great food, whether you're at home or on the go. We'll help you find
            unique meals wherever you are. With our app, you never have to
            settle for unhealthy, expensive takeaway food again.
          </Data>
        </p>
      </div>
      <div className="aboutImage">
        <div className="aboutImage1">
          <img
            src="https://media.istockphoto.com/id/1299912714/photo/happy-retired-senior-man-cooking-in-kitchen-retirement-hobby-people-concept.jpg?s=612x612&w=0&k=20&c=HLBm0L4_dkgyXZpF2S-EIj5lsGwhrQCML5ruyvP-7EM="
            alt=""
            className="aboutImg1"
          />
        </div>
        <div className="aboutImage2">
          <img
            src="https://media.istockphoto.com/id/603906484/photo/vegetable-salad.jpg?s=612x612&w=0&k=20&c=f7BnJRCqLKaj_DEQB1SB71_eRT8y1XRP52dDyYRSxuE="
            alt=""
            className="aboutImg2"
          />
        </div>
      </div>
    </div>
  );
}
