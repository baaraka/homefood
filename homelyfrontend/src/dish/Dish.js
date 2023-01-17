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
            <img
              src="https://storage.dado.ng/wp-content/uploads/2019/06/06200804/Webp.net-resizeimage-3.png"
              alt=""
              className="dishImg"
            />
          </div>
          <div className="dishE">
            <p className="dishParagraphImg">Yam and egg sauce</p>
            <span className="dishNumber">TZS 5000.00/=</span>
            <form className="dishForm">
              <input className="dishInput" type="number" placeholder="1" />
              <button className="dishButton">+ Add</button>
            </form>
          </div>
        </div>
        <div className="dishBodyDiv">
          <div className="dishImage">
            <img
              src="https://www.preciouscore.com/wp-content/uploads/2021/12/Jollof-Rice-With-Chicken-500x500.jpg"
              alt=""
              className="dishImg"
            />
          </div>
          <div className="dishE">
            <p className="dishParagraphImg">Jollof rice and chicken</p>
            <span className="dishNumber">TZS 6000.00/=</span>
            <form className="dishForm">
              <input className="dishInput" type="number" placeholder="1" />
              <button className="dishButton">+ Add</button>
            </form>
          </div>
        </div>
        <div className="dishBodyDiv">
          <div className="dishImage">
            <img
              src="https://www.thepretendchef.com/wp-content/uploads/2017/11/nigerian-beans-porridge-1-7.jpg"
              alt=""
              className="dishImg"
            />
          </div>
          <div className="dishE">
            <p className="dishParagraphImg">Porridge beans</p>
            <span className="dishNumber">TZS 2000.00/=</span>
            <form className="dishForm">
              <input className="dishInput" type="number" placeholder="1" />
              <button className="dishButton">+ Add</button>
            </form>
          </div>
        </div>
        <div className="dishBodyDiv">
          <div className="dishImage">
            <img
              src="https://ntachiosa.com/wp-content/uploads/2020/08/ntachi-2-1110x1110-eited2-.png"
              alt=""
              className="dishImg"
            />
          </div>
          <div className="dishE">
            <p className="dishParagraphImg">Semo and egusi soup</p>
            <span className="dishNumber">TZS 4000.00/=</span>
            <form className="dishForm">
              <input className="dishInput" type="number" placeholder="1" />
              <button className="dishButton">+ Add</button>
            </form>
          </div>
        </div>
        <div className="dishBodyDiv">
          <div className="dishImage">
            <img
              src="https://pbs.twimg.com/media/Ey9RpckWQAIzcXj.jpg"
              alt=""
              className="dishImg"
            />
          </div>
          <div className="dishE">
            <p className="dishParagraphImg">Amala and ewedu soup</p>
            <span className="dishNumber">TZS 8000.00/=</span>
            <form className="dishForm">
              <input className="dishInput" type="number" placeholder="1" />
              <button className="dishButton">+ Add</button>
            </form>
          </div>
        </div>
        <div className="dishBodyDiv">
          <div className="dishImage">
            <img
              src="https://allnigerianfoods.com/wp-content/uploads/okro_soup_recipe.jpg"
              alt=""
              className="dishImg"
            />
          </div>
          <div className="dishE">
            <p className="dishParagraphImg">Eba and okra soup</p>
            <span className="dishNumber">TZS 3500.00/=</span>
            <form className="dishForm">
              <input className="dishInput" type="number" placeholder="1" />
              <button className="dishButton">+ Add</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
