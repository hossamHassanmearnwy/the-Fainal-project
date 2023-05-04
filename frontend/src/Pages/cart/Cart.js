import React, { useState } from "react";
import { useEffect } from "react";
import "./cart.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { BsXLg } from "react-icons/bs";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useTranslation } from "react-i18next";
import Nav from "react-bootstrap/Nav";
import cartaxios from "./../../axiosConfig/axiosInstance";
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart, handleChange, setShow, setCheck }) => {
  const [cartProducts, setcartProducts] = useState([]);
  useEffect(() => {
    cartaxios
      .get("/cart")
      .then((res) => {
        console.log(res.data);
        setcartProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const [price, setPrice] = useState(0);
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.Price));
    setPrice(ans);
  };

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    // handlePrice();
  };

  useEffect(() => {
    handlePrice();
  });
  ///////////////////////////

  return (
    <div className="container-fluid">
      <div className="container my-5">
        <h1 className="text-center">{t("Cart")}</h1>
        <Table className="my-5">
          <thead>
            <tr style={{ color: "#aca7a7", fontWeight: "lighter" }}>
              <th> </th>
              <th className="text-start">{t("Product")}</th>
              <th>{t("Quantity")}</th>
              <th>{t("Price")}</th>
            </tr>
          </thead>
          {cart?.map((item) => (
            <tbody>
              <tr>
                <td className="text-center">
                  <BsXLg
                    className="mt-4"
                    onClick={() => handleRemove(item.id)}
                    role="button"
                  ></BsXLg>
                </td>
                <td className="text-start">
                  <img
                    className="imgCart "
                    src={item.Images[0]}
                    alt=""
                    width={90}
                    height={90}
                  />
                  <span className="tit ms-4">{item.ItemNameEn}</span>
                </td>
                <td>
                  <div className="border border-warning rounded-pill my-4 w-50">
                    <div className="text-center fs-5">
                      <span className="amount me-lg-4">{0 + item.amount}</span>
                      <span
                        className="border-none"
                        onClick={() => handleChange(item, +1)}
                        role="button"
                      >
                        {" "}
                        +{" "}
                      </span>
                      <span
                        className="border-none"
                        onClick={() => handleChange(item, -1)}
                        role="button"
                      >
                        {" "}
                        -{" "}
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="my-4">{item.Price}</p>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>

        <div className="row my-5 pt-3 d-flex justify-content-center align-items-start">
          <div className="gBtn col-lg-6 col-md-12 d-flex align-items-center justify-content-center ">
            <Nav className="row">
              <Nav.Link href="/home">
                <Button
                  variant="dark rounded-pill py-2 px-3"
                  className="col-lg-6 col-sm-12"
                  onClick={() => setShow(true)}
                >
                  {t("Go to Home Page")}
                </Button>
              </Nav.Link>
              {/* ////////////////////////////////////////////////////////////////////////////////////////// */}
              <Link to="/checkout">
                <Button
                  className="col-lg-6 col-sm-12 checkout"
                  variant="warning rounded-pill py-2 px-4"
                  onClick={setCheck}
                >
                  {t("Proceed to Checkout")}
                </Button>
              </Link>
            </Nav>
          </div>
          <div className="inp col-lg-6 col-md-12" dir="ltr">
            <Table className="thecart">
              <thead>
                <tr>
                  <th
                    className="fs-2 border-bottom border-warning text-start"
                    colSpan={3}
                  >
                    {"Cart Total"}
                  </th>
                  {/* <th> </th>
        <th> </th> */}
                  <th className="fs-2 border-bottom border-warning"> </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={3} className="py-3 text-start">
                    {"Cart Subtotal"}
                  </td>
                  {/* <td colSpan={2}>Larry the Bird</td> */}
                  <td className="py-3">${price}</td>
                </tr>
                <tr>
                  <td className="py-3 text-start" colSpan={3}>
                    {"Shipping"}
                  </td>
                  {/* <td colSpan={2}>Larry the Bird</td> */}
                  <td className="py-3">0</td>
                </tr>
                <tr>
                  <td className="py-3 text-start" colSpan={3}>
                    {"Total"}
                  </td>
                  {/* <td>Larry the Bird</td> */}
                  <td className="py-3">${price}</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
