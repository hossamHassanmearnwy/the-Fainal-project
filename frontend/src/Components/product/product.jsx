import React, { useEffect, useState } from "react";
import "./Products.css";
import { useTranslation } from "react-i18next";
import productsaxios from "./../../axiosConfig/axiosInstance";


const Product = () => { 
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    productsaxios
      .get("/Products")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setProducts]);
  const {t, i18n} = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <div className="cardPro">
      <div className="imgBox">
        <img
          src="https://www.corsair.com/corsairmedia/sys_master/productcontent/CH-9300011-NA-M65_PRO_RGB_BLK_04.png"
          alt="mouse corsair"
          className="mouse"
        />
      </div>
      <div className="contentBox">
        <h3>Mouse Corsair M65</h3>
        <h2 className="price">
          61.<small>98</small> €
        </h2>
        <a href="w" className="buy">
          {t('Start Buying')}
        </a>
      </div>
    </div>
  );
};

export default Product;
