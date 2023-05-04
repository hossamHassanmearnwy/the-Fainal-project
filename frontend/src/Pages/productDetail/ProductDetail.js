import React, { useState, useEffect } from "react";
import "./ProductDetail.css";
import { FaRegHeart } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import { BsFillCartFill } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import StarRating from "./../../Components/rating/StarRating";
import Cart from "../../Pages/cart/Cart";

import { useParams } from "react-router-dom";
import list from "../../data";
import productsDetailsaxios from "./../../axiosConfig/axiosInstance";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import removeFav from "../../Store/actions/remove";
import favAdd from "../../Store/actions/add";

export default function ProductDetail({ handleClick, handleChange }) {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const [ProductDetail, setProductDetail] = useState([]);
  useEffect(() => {
    productsDetailsaxios
      .get(`/Products/${id}`) //id
      .then((res) => {
        console.log(res.data);
        setProductDetail(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [product, setProduct] = useState({});
  const { id } = useParams();
  var [Fav, setFav] = useState([]);

  let FavList = useSelector((state) => state.add.Fav); // recieving fav list from the reducer

  const dispatch = useDispatch(); // useDispatch return function that calls my actions

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

  useEffect(() => {
    const selectedProduct = list.find((product) => product._id === Number(id));
    console.log(selectedProduct);
    console.log(id);

    setProduct(selectedProduct);
  }, [id]);

  // if (!product) {
  //   return <p>Loading...</p>;
  // }

  const addFav = (e, item) => {
    if (e.target.className !== "bi bi-heart-fill text-danger fs-4 me-1") {
      // add to fav

      e.target.className = "bi bi-heart-fill text-danger fs-4 me-1";
      Fav.push(item);
      console.log(item);
      console.log(Fav);
      setFav([...Fav]);
      console.log(Fav);
      dispatch(favAdd(Fav));
    } else {
      // remove from fav  //  else if ( FavList[i]==movie )
      e.target.className = "bi bi-heart text-danger fs-4 me-1";

      var index = Fav.indexOf(item);
      if (index !== -1) {
        Fav.splice(index, 1);
      }
      setFav([...Fav]);
      console.log(Fav);
      dispatch(removeFav(Fav));
    }
  };
  const currentLanguage = localStorage.getItem("i18nextLng");
  return (
    <>
      <div className="container py-3 my-5">
        <div className="row">
          <div
            className="sec1 col-lg-6 col-sm-12 p-3"
            style={{ marginBottom: "-20%" }}
          >
            <img
              src={ProductDetail.Images}
              alt="#"
              className="fluid"
              height="50%"
            />
          </div>
          <div
            className="sec2 col-lg-6 col-sm-12 p-3"
            style={{ color: "grey" }}
          >
            <h2 className="textdark text-start">
              {currentLanguage === "en"
                ? ProductDetail.ItemNameEn
                : ProductDetail.ItemNameAr}
            </h2>
            <StarRating />
            <p className="mb-2 text-start">
              {t("Availability")}:
              <span className="text-warning"> 26 in stock</span>{" "}
            </p>
            <hr />

            <p className="my-3 text-lowercase text-start">
              <i
                className="bi bi-heart text-danger fs-4 me-1"
                onClick={(e) => {
                  addFav(e, product);
                }}
                role="button"
              ></i>
              {t("add to wishlist")}{" "}
            </p>

            {/* <ul className="feat my-3 text-start">
              <li>4.5 inch HD Touch Screen (1280 x 720)</li>
              <li>Android 4.4 KitKat OS</li>
              <li>1.4 GHz Quad Core™ Processor</li>
              <li>20 MP Electro and 28 megapixel CMOS rear camera</li>
            </ul> */}

            <p className="mb-3 text-start">
              {currentLanguage === "en"
                ? ProductDetail.DescriptionEn
                : ProductDetail.DescriptionAr}
            </p>

            <h2 className="text-dark me-2 mb-2 text-start">
              $1,999.00{" "}
              <span className="text-decoration-line-through text-secondary fs-5">
                $2,299.00
              </span>
            </h2>

            <hr />

            <div className="row">
              <Form.Select className="col-lg-6 col-sm-12 bg-none border border-warning text-warning w-25 mt-5">
                <option>{t("Color")}</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>

              {localStorage.getItem("token") && (
                <Button
                  variant="warning"
                  className="col-lg-6 col-sm-12 text-white text-capitalize rounded-pill fw-bold mt-5 w-50"
                  onClick={() => handleClick(product)}
                >
                  <BsFillCartFill className="text-white fs-4 me-2"></BsFillCartFill>
                  {t("Add to Cart")}{" "}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
            
    </>
  );
}
