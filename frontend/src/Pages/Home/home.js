import React, { useState, useEffect } from "react";
import Amazon from "../../Components/Amazon/Amazon";
import MainSideBar from "./../../Components/MainSideBar/MainSideBar";
import Slider from "./../../Components/Slider/Slider";
import Cart from "../../Pages/cart/Cart";

import ProductDetail from "../../Pages/productDetail/ProductDetail";

import OffersSlider from "../../Components/offersSlider/OffersSlider";
import offersList from "../../offersData";
import BestSec from "../../Components/besrSellers/BestSec";
import SummaryProd from "../../Components/summary/summaryProd";
import productsaxios from "./../../axiosConfig/axiosInstance";

export default function Home({ handleClick }) {
  //  const [warning, setWarning] = useState(false);

  const [Products, setProducts] = useState([]);
  useEffect(() => {
    productsaxios
      .get("/Products")
      .then((res) => {
        // setProducts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [show, setShow] = useState(true);
  // const [cart , setCart] = useState([]);
  let [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || [] // local storge to get cart
  );
  const [warning, setWarning] = useState(false);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart)); // local storge to save cart in it

    console.log(`Saved ${cart.length} items to localstorage`);
  }, [cart]);

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });
    const tempArr = cart;

    tempArr[ind].amount += d;

    if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
    setCart([...tempArr]);
  };

  return (
    <>
      <div className="mx-5 my-5">
        <div className="row ">
          <div className="col-3 ">
            {/* Main Sidebar */}
            <MainSideBar DatatoComponent={Products} />
          </div>
          <div className="col-9">
            <Slider DatatoComponent={Products} />
          </div>
        </div>
      </div>

      <div className="container">
        <Amazon handleClick={handleClick}  />

        <BestSec handleClick={handleClick}  />

        <OffersSlider handleClick={handleClick} DatatoComponent={Products} />

        <SummaryProd />

        {warning && (
          <div className="warning">Item is already added to your cart</div>
        )}
      </div>
    </>
  );
}
