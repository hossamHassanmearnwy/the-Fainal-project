import React from "react";
import "../Card/cards.css";
import { BsFillCartFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Cards = ({ item, handleClick }) => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const { title, desc, price, img } = item;
  // console.log(item)
  return (
    // <div className="cards my-4 col-lg-4 col-sm-12">
    //     <div className="image_box">
    //         <img src={img} alt="Image" />
    //     </div>
    //     <div className="details">
    //         <p>{title}</p>
    //         <p>{desc}</p>
    //         <p>Price - {price}</p>
    //         <button onClick={()=>handleClick(item)} >Add to Cart</button>
    //     </div>
    //     </div>

    <div className="cardPro my-3 border border-warning">
      <div className="imgBox">
        <img className="mouse" src={img} alt="Image" />
      </div>
      <div className="contentBox">
        <h2 className="text-dark mt-3 fs-4 fw-bold">{title}</h2>
        <div className="row">
          <h5 className=" col-lg-6 col-sm-12 text-dark d-flex align-items-end">
            {t("Price")} - {price}
          </h5>
          <div className="col-lg-6 col-sm-12 mt-4">
            <span
              className="p-3 circle bg-warning"
              style={{ borderRadius: "50%" }}
              onClick={() => handleClick(item)}
              role="button"
            >
              <BsFillCartFill className="text-white fs-4" role="button">
                {" "}
              </BsFillCartFill>
            </span>
          </div>
        </div>
        <div className="mt-4">
          <p className="buy border-top">
            <FaRegHeart className="me-3 fs-4 text-danger"></FaRegHeart>
            {t("add to wishlist")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
