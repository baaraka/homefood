import "./Why.css";

export default function Why() {
  return (
    <div className="why" id="WhyChooseUs">
      <div className="whyTitle">
        <h1 className="whyTitleItem">Why choose us</h1>
        <p className="whyParagraphItem">
          This is what makes our product different
        </p>
      </div>
      <div className="whyTitleBody">
        <div className="whyTitleBodyItem">
          <i class="whyIcon fa-solid fa-list"></i>
          <h4 className="whyHeading">Easy to order</h4>
          <p className="whyParagraph">
            Order food at a single click and select all food to order at any
            poin in time and at ease and comfort
          </p>
        </div>
        <div className="whyTitleBodyItem">
          <i class="whyIcon fa-solid fa-motorcycle"></i>
          <h4 className="whyHeading">fast delivery</h4>
          <p className="whyParagraph">
            food delivery fast and reliable and get delivered at deliivery time
            and location any day, any time
          </p>
        </div>
        <div className="whyTitleBodyItem">
          <i class="whyIcon fa-solid fa-thumbs-up"></i>
          <h4 className="whyHeading">100% quality</h4>
          <p className="whyParagraph">
            We provide quality food for you and your loved ones for health and
            so onnnnnn and for wellness
          </p>
        </div>
      </div>
    </div>
  );
}
