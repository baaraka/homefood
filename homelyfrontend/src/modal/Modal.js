import "./Modal.css";

export default function Modal(props) {
  return props.trigger ? (
    <div className="modal">
      <div className="popupContainer">
        <div className="popupHeader">
          <div className="popupH"> {props.children}</div>
          <div className="popupHeaderBtn">
            <div className="divBtn">
              <div className="totalAmount">
                <p className="totalAmt">Total Amount</p>
              </div>
              <div className="totalAmounts">
                <p className="amtTotal">TZS 50000.00</p>
              </div>
            </div>
            <button
              onClick={() => props.setTrigger(false)}
              className="closeButton"
            >
              Close
            </button>
            <button className="orderButton">Order</button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
