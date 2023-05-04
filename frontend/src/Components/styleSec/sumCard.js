import React from "react";
import "../Card/cards.css";
import "./style.css";
const currentLanguage = localStorage.getItem("i18nextLng");
const Sum = ({ props }) => {
  const { ItemNameEn, Price, ItemNameAr, DetailsEn, DetailsAr, Images } = props;
  // console.log(item)
  return (
    <div className="sumc">
      <div className="d-flex direction-column mt-3">
        <div className="d-flex">
          <div
            className="col-lg-4 me-3"
            style={{ width: "70px", height: "70px" }}
          >
            <img
              src={Images[0]}
              alt="#"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="col-lg-8 ms-4 text-start">
            <p className="mb-3 fw-bold text-primary">
              {" "}
              {currentLanguage === "en" ? ItemNameEn : ItemNameAr}
            </p>
            <p className="text-dark">{Price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sum;
