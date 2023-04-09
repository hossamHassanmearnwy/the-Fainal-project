import React from "react";
import "./productpage.css";

const Productpage = () => {
  return (
    <div>
      <div className="containerand">
        <div className="boxand">
          <div className="product__img">
            <img src="https://i.ibb.co/xSK7fcJ/oculus.png" alt="" />
          </div>
          <div className="product__video">
            <div className="video">
              <i className="fas fa-play" />
              <p>watch a review</p>
            </div>
          </div>
          <div className="product__disc">
            <div className="product__disc--content">
              <div className="disc__content--about">
                <h1>Oculus Rift S</h1>
                <span>get ready to step into a new world</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consequatur hic minus nihil obcaecati, ratione repellendus
                  saepe sint tenetur totam ullam. Accusantium aspernatur ducimus
                  impedit perferendis quisquam repellendus similique ullam
                  vitae!
                </p>
              </div>
              <div className="product__view--more">
                <p>view all specifications</p>
                <div className="view__more--block" />
              </div>
            </div>
          </div>
          <div className="product_buttons">
            <button className="btn wishlist">wishlist</button>
            <button className="btn buy">buy</button>
          </div>
        </div>
      </div>
      {/* ignore */}
      <a href="https://youtu.be/NBIbZIegMRY" target="_blank"></a>
    </div>
  );
};

export default Productpage;
