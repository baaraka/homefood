import "./Testimonial.css";

export default function Testimonial() {
  return (
    <div className="test" id="Testimonials">
      <div className="testHead">
        <h1 className="testHeading">Testimonials</h1>
        <p className="testParagraph">This is what our client are saying</p>
      </div>
      <div className="testBody">
        <div className="testBodyList">
          <h1 className="testBodyListItem">Paul James</h1>
          <p className="testBodyParagraph">Dar es salam Region</p>
          <p className="testBodyParagraphs">
            With a Homely Eats meal, you can serve delectable, home-cooked meals
            to your family and friends in any location, anytime. anyday!
          </p>
        </div>
        <div className="testBodyList">
          <h1 className="testBodyListItem">Mercy jude</h1>
          <p className="testBodyParagraph">Dodoma Region</p>
          <p className="testBodyParagraphs">
            Be it a small gathering of friends or a large event with hundreds of
            people, you'll always be prepared. whether you're at home or on the
            go.
          </p>
        </div>
        <div className="testBodyList">
          <h1 className="testBodyListItem">Lara one</h1>
          <p className="testBodyParagraph">Arusha Region</p>
          <p className="testBodyParagraphs">
            No need to worry about any of this anymore with your app. Homely
            Eats are made with the highest quality ingredients for you and your
            family.
          </p>
        </div>
      </div>
    </div>
  );
}
