import React, { useEffect, useState } from "react";
import "./productpage.css";
import { useTranslation } from "react-i18next";
import productsaxios from "../../axiosConfig/axiosInstance";

const Productpage = () => {


  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <div dir="ltr">
      <div className="containerand">
        <div className="boxand">
          <div className="product__img">
            <img src="https://i.ibb.co/xSK7fcJ/oculus.png" alt="" />
          </div>
          <div className="product__video">
            <div className="video">
              <i className="fas fa-play" />
              <p>{t("watch a review")}</p>
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
            <button className="btn btn-warning wishlist">
              {t("add to wishlist")}
            </button>
            <button className="btn btn-success buy">{t("Buy")}</button>
          </div>
        </div>
      </div>
      <div>

      </div>

      {/* <a href="www" ></a> */}
    </div>
  );
};

export default Productpage;
