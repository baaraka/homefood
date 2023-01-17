import { useState } from "react";
import firebase from "firebase/compat/app";
import db from "../firebase";
import "./New.css";

export default function New() {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (input) {
      console.log(input);
      //add to firebase
      db.collection("emails").add({
        email: input,
        time: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setInput("");
      setMessage("Thank you for subscribing!!..");
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };
  return (
    <div className="new">
      <div className="newHead">
        <h1 className="newHeading">Subscribe to our Newsletter</h1>
        <p className="newParagraph">
          Enter your Email address to get daily offers and news
        </p>
        <div>
          <form onSubmit={submitHandler}>
            <input
              className="newInput"
              type="email"
              placeholder="Enter Your Email"
              onChange={inputHandler}
              value={input}
            />
            <button className="newButton">Subscribe</button>
          </form>
          {message && <p className="subscribeParagraph">{message}</p>}
        </div>
      </div>
    </div>
  );
}
