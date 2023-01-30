// import "./Dish.css";
// import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";

// //Actions
// import { getProducts as listProducts } from "../redux/actions/productActions";
// import { addToCart } from "../redux/actions/cartActions";

// export default function Dish() {
//   const [qty, setQty] = useState(1);
//   const dispatch = useDispatch();

//   const getProducts = useSelector((state) => state.getProducts);
//   const { products, loading, error } = getProducts;

//   useEffect(() => {
//     dispatch(listProducts());
//   }, [dispatch]);

//   const handleAddToCart = (product) => {
//     dispatch(addToCart(product, qty));
//   };

//   return (
//     <div className="dish" id="OurDish">
//       <div className="dishHeading">
//         <h1 className="headingDish">Our daily dishes</h1>
//         <p className="paragraphDish">
//           Check out recommended dishes of your choice
//         </p>
//       </div>
//       {loading ? (
//         <div>Loading...</div>
//       ) : error ? (
//         <div>{error}</div>
//       ) : (
//         <div className="dishBody">
//           {products.map((product) => (
//             <div className="dishBodyDiv" key={product._id}>
//               <div className="dishImage">
//                 <img src={product.imageURL} alt="" className="dishImg" />
//               </div>
//               <div className="dishE">
//                 <p className="dishParagraphImg">{product.name}</p>
//                 <p className="pPrice">
//                   price: <span className="dishNumber">TZS {product.price}</span>
//                 </p>
//                 <p className="pStatus">
//                   status:{" "}
//                   <span>
//                     {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
//                   </span>
//                 </p>
//                 <div className="qtyL">
//                   <p>
//                     <select
//                       value={qty}
//                       onChange={(e) => setQty(e.target.value)}
//                     >
//                       {[...Array(product.countInStock).keys()].map((x) => (
//                         <option key={x + 1} value={x + 1}>
//                           {x + 1}
//                         </option>
//                       ))}
//                     </select>
//                   </p>
//                   <p>
//                     <button
//                       className="dishButton"
//                       type="button"
//                       onClick={() => handleAddToCart(product)}
//                       disabled={product.countInStock < 1}
//                     >
//                       Add To Cart
//                     </button>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

import "./Dish.css";

export default function Dish() {
  return (
    <div className="dish" id="OurDish">
      <div className="dishHeading">
        <h1 className="headingDish">Our daily dishes</h1>
        <p className="paragraphDish">
          Check out recommended dishes of your choice
        </p>
      </div>
      <div className="dishBody">
        <div className="dishBodyDiv">
          <div className="dishImage">
            <img src="" alt="" className="dishImg" />
          </div>
          <div className="dishE">
            <p className="dishParagraphImg"></p>
            <p className="pPrice">
              price: <span className="dishNumber">TZS /=</span>
            </p>
            <p className="pStatus">
              status: <span>In Stock</span>
            </p>
            <div className="qtyL">
              <p>
                <select>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </p>
              <p>
                <button className="dishButton" type="button">
                  Add To Cart
                </button>
              </p>
            </div>
          </div>
        </div>
        <div className="dishBodyDiv">
          <div className="dishImage">
            <img src="" alt="" className="dishImg" />
          </div>
          <div className="dishE">
            <p className="dishParagraphImg"></p>
            <p className="pPrice">
              price: <span className="dishNumber">TZS /=</span>
            </p>
            <p className="pStatus">
              status: <span>In Stock</span>
            </p>
            <div className="qtyL">
              <p>
                <select>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </p>
              <p>
                <button className="dishButton" type="button">
                  Add To Cart
                </button>
              </p>
            </div>
          </div>
        </div>
        <div className="dishBodyDiv">
          <div className="dishImage">
            <img src="" alt="" className="dishImg" />
          </div>
          <div className="dishE">
            <p className="dishParagraphImg"></p>
            <p className="pPrice">
              price: <span className="dishNumber">TZS /=</span>
            </p>
            <p className="pStatus">
              status: <span>In Stock</span>
            </p>
            <div className="qtyL">
              <p>
                <select>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </p>
              <p>
                <button className="dishButton" type="button">
                  Add To Cart
                </button>
              </p>
            </div>
          </div>
        </div>
        <div className="dishBodyDiv">
          <div className="dishImage">
            <img src="" alt="" className="dishImg" />
          </div>
          <div className="dishE">
            <p className="dishParagraphImg"></p>
            <p className="pPrice">
              price: <span className="dishNumber">TZS /=</span>
            </p>
            <p className="pStatus">
              status: <span>In Stock</span>
            </p>
            <div className="qtyL">
              <p>
                <select>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </p>
              <p>
                <button className="dishButton" type="button">
                  Add To Cart
                </button>
              </p>
            </div>
          </div>
        </div>
        <div className="dishBodyDiv">
          <div className="dishImage">
            <img src="" alt="" className="dishImg" />
          </div>
          <div className="dishE">
            <p className="dishParagraphImg"></p>
            <p className="pPrice">
              price: <span className="dishNumber">TZS /=</span>
            </p>
            <p className="pStatus">
              status: <span>In Stock</span>
            </p>
            <div className="qtyL">
              <p>
                <select>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </p>
              <p>
                <button className="dishButton" type="button">
                  Add To Cart
                </button>
              </p>
            </div>
          </div>
        </div>
        <div className="dishBodyDiv">
          <div className="dishImage">
            <img src="" alt="" className="dishImg" />
          </div>
          <div className="dishE">
            <p className="dishParagraphImg"></p>
            <p className="pPrice">
              price: <span className="dishNumber">TZS /=</span>
            </p>
            <p className="pStatus">
              status: <span>In Stock</span>
            </p>
            <div className="qtyL">
              <p>
                <select>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </p>
              <p>
                <button className="dishButton" type="button">
                  Add To Cart
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
