import { useState } from "react";

export default function Data({ children }) {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <div>
      <p className="aboutParagraph">
        {seeMore ? children : `${children.substring(0, 238)}`}
      </p>
      <button className="aboutBtn" onClick={() => setSeeMore(!seeMore)}>
        {seeMore ? "See Less" : "See More"}
      </button>
    </div>
  );
}
