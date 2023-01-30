import "./Modal.css";

export default function Modal(props) {
  return props.trigger ? (
    <div className="modal">
      <div className="popupContainer">
        <div className="popupHeader">
          <div className="popupH"> {props.children}</div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
