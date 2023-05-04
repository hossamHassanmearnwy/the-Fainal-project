import React, { useState, useEffect } from "react";
// import list from "../../data";
import "../Amazon/amazon.css";
import Cards from "../Card/Cards";
import Sec from "./../styleSec/style";
// import offersList from "../../offersData";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import ProductCarddata from "../../axiosConfig/axiosInstance";
const Amazon = ({ handleClick }) => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const products = useSelector((state) => state.search.products);
  const searchTerm = useSelector((state) => state.search.searchTerm);
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    ProductCarddata.get("/products/bylimit?limit=20&skip=5")
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  // const filteredProducts = Products.filter((item) => {
  //   return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  // });

  return (
    <>
      <div className="container">
        <Sec header={t("Featured Product")} />
        <section className="py-5 border-top ">
          <div className="row">
            {Products.map((item) => (
              <Cards item={item} key={item.id} handleClick={handleClick} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Amazon;
