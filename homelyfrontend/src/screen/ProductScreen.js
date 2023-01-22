import "./ProductScreen.css";

export default function ProductScreen() {
  return (
    <div className="productScreen">
      <div className="productScreenLeft">
        <div className="dishImage">
          <img
            src="https://storage.dado.ng/wp-content/uploads/2019/06/06200804/Webp.net-resizeimage-3.png"
            alt=""
            className="dishImg"
          />
        </div>
        <div className="dishE">
          <p className="dishParagraphImg">Yam and egg sauce</p>

          <span className="dishNumber">TZS 5000.00/=</span>
        </div>
      </div>

      <div className="productScreenRight">
        <div className="rightInfo">
          <p>
            price
            <span>TZS 5000.00</span>
          </p>
          <p>
            status
            <span>In stock</span>
          </p>
          <p>
            Qty
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </p>
          <p>
            <button type="button">Add To Cart</button>
          </p>
        </div>
      </div>
    </div>
  );
}
