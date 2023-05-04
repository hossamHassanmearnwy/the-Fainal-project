import "./CheckoutStyle.css";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Table from "react-bootstrap/Table";
import Accordion from "react-bootstrap/Accordion";
import { useEffect, React, useState, createElement } from "react";
import userdata from "./../../axiosConfig/axiosInstance";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
// import user from 
import { useParams } from 'react-router-dom';


export default function Checkout(cart) {
  const [price, setPrice] = useState(0);
  useEffect(() => {
    handlePrice();
  });

  let [check, setCheck] = useState(
    JSON.parse(localStorage.getItem("cart")) || [] // local storge to get cart
  );
  const handlePrice = () => {
    let pri = 0;
    check?.map((item) => (pri += item.amount * item.price));
    setPrice(pri);
  };
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  useEffect(() => {
    localStorage.setItem("checkout", JSON.stringify(check)); // local storge to save cart in it
    console.log(`Saved ${check.length} items to localStorage from check`);
  }, [cart]);
  ///////////////////////////////////////////
  //Default address
  const Fname = useSelector((state) => state.editShippingAddress.Fname);
  const Lname = useSelector((state) => state.editShippingAddress.Lname);
  const phone = useSelector((state) => state.editShippingAddress.phoneNumber);
  const street = useSelector((state) => state.editShippingAddress.street);
  const city = useSelector((state) => state.editShippingAddress.city);
  const country = useSelector((state) => state.editShippingAddress.country);
  const zip = useSelector((state) => state.editShippingAddress.zip);

  // New address
  const newFname = useSelector((state) => state.editNewAddress.newFname);
  const newLname = useSelector((state) => state.editNewAddress.newLname);
  const newPhone = useSelector((state) => state.editNewAddress.newPhone);
  const newStreet = useSelector((state) => state.editNewAddress.newStreet);
  const newCity = useSelector((state) => state.editNewAddress.newCity);
  const newCountry = useSelector((state) => state.editNewAddress.newCountry);
  const newZip = useSelector((state) => state.editNewAddress.newZip);

  ////////////////////////////////////
  const [newAddress, setNewAddress] = useState({
    newFname: "",
    newLname: "",
    newPhone: "",
    newStreet: "",
    newCity: "",
    newCountry: "",
    newZip: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleForm = (ev) => {
    switch (ev.target.name) {
      case "newFname":
        setNewAddress({ ...newAddress, newFname: ev.target.value });
        break;

      case "newLname":
        setNewAddress({ ...newAddress, newLname: ev.target.value });
        break;

      case "newPhone":
        setNewAddress({ ...newAddress, newPhone: ev.target.value });
        break;

      case "newStreet":
        setNewAddress({ ...newAddress, newStreet: ev.target.value });
        break;

      case "newCity":
        setNewAddress({ ...newAddress, newCity: ev.target.value });
        break;

      case "newCountry":
        setNewAddress({ ...newAddress, newCountry: ev.target.value });
        break;

      case "newZip":
        setNewAddress({ ...newAddress, newZip: ev.target.value });
        break;
      // default:
      //   return
    }
  };
  //////////////
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showNewAddress, setShowNewAddress] = useState();
  const addNewAddress = () => {
    setShowNewAddress(
      <Card.Text className={showNewAddress}>
        {/* <h1>aaaaaaaaaaaaaaaaaa</h1> */}
        <label className="card">
          <input name="plan" className="radio" type="radio" />
          <span className="plan-details">
            <Card.Text className="">
              {t("Name")} : {newFname} {newLname}
              <br />
              {t("Street")} : {newStreet}
              <br />
              {t("City")} : {newCity}
              <br />
              {t("Country")} : {newCountry}
              <br />
              {t("Mobile Number")} : {newPhone}
              <br />
              {t("Zip/Postal Code")} : {newZip}
            </Card.Text>
          </span>
        </label>
      </Card.Text>
    );
  };
  const [Userdata, setDatauser] = useState([]);

  useEffect(() => {
    userdata
      .get("/users/")
      .then((res) => {
        console.log(res.data);
        setDatauser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="row">
        <div className=" checkoutCard">
          <div className="sectionTitle">{t("Shipping Address")}</div>
          {/* <button className="" type='button' onClick={addNewAddress}>{('Save Address')}</button> */}

          <br />
          <div className="grid">
            <label className="card">
              <input name="plan" className="radio" type="radio" checked />
              <span className="plan-details">
                <Card.Text className="">
                  {t("Name")} : {Fname} {Lname}
                  <br />
                  {t("Street")} : {street}
                  <br />
                  {t("City")} : {city}
                  <br />
                  {t("Country")} : {country}
                  <br />
                  {t("Mobile Number")} : {phone}
                  <br />
                  {t("Zip/Postal Code")} : {zip}
                </Card.Text>
              </span>
            </label>
            <br />
            <br />
            {showNewAddress}
          </div>
          <br />
          <br />

          {/* <button className="newAddressBtn" type="submit" onClick={handleShow}>
            {t("New Address")}+
          </button> */}

          <br />
          <br />

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{t("Shipping Address")}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <div className="popupForm">
                  <form
                    onSubmit={(evt) => {
                      handleSubmit(evt);
                    }}
                  >
                    {/* first name */}
                    <label htmlFor="fname" className="label">
                      {t("First Name")}
                    </label>
                    <br />
                    <input
                      type="text"
                      id="fname"
                      name="newFname"
                      placeholder={t("Enter Your") + t("First Name")}
                      value={newAddress.newFname}
                      onChange={(event) => {
                        handleForm(event);
                      }}
                    />
                    <br />

                    {/* last name */}
                    <label htmlFor="lname" className="label">
                      {t("Last Name")}
                    </label>
                    <br />
                    <input
                      type="text"
                      id="lname"
                      name="newLname"
                      placeholder={t("Enter Your") + t("Last Name")}
                      value={newAddress.newLname}
                      onChange={(event) => {
                        handleForm(event);
                      }}
                    />
                    <br />
                    {/* phone number */}
                    <label htmlFor="phone" className="label">
                      {t("Mobile Number")}
                    </label>
                    <br />
                    <input
                      type="number"
                      id="phone"
                      name="newPhone"
                      placeholder={t("Enter Your") + t("Mobile Number")}
                      value={newAddress.newPhone}
                      onChange={(event) => {
                        handleForm(event);
                      }}
                    />

                    <br />
                    <br />

                    <h2>{t("Address")}</h2>
                    {/* Street */}
                    <label htmlFor="street" className="label">
                      {t("Street Address")}
                    </label>
                    <br />
                    <input
                      type="text"
                      id="street"
                      name="newStreet"
                      placeholder={t("Enter Your") + t("Street Address")}
                      value={newAddress.newStreet}
                      onChange={(event) => {
                        handleForm(event);
                      }}
                    />
                    <br />
                    {/* City */}
                    <label htmlFor="city" className="label">
                      {t("City")}
                    </label>
                    <br />
                    <input
                      type="text"
                      id="city"
                      name="newCity"
                      placeholder={t("Enter Your") + t("City")}
                      autoComplete="address-level2"
                      value={newAddress.newCity}
                      onChange={(event) => {
                        handleForm(event);
                      }}
                    />
                    <br />
                    {/* Country */}
                    <label htmlFor="country" className="label">
                      {t("Country")}
                    </label>
                    <br />
                    <select
                      id="country"
                      name="newCountry"
                      autoComplete="country"
                      placeholder={t("Enter Your") + t("Country")}
                      value={newAddress.newCountry}
                      onChange={(event) => {
                        handleForm(event);
                      }}
                    >
                      <option></option>
                      <option>{"Egypt"}</option>
                    </select>
                    <br />
                    {/* ZIP */}
                    <label htmlFor="zip" className="label">
                      {t("Zip/Postal Code")}{" "}
                    </label>
                    <br />
                    <input
                      type="text"
                      id="zip"
                      name="newZip"
                      autoComplete="postal-code"
                      value={newAddress.newZip}
                      onChange={(event) => {
                        handleForm(event);
                      }}
                    />
                    <br />
                    <br />
                    <button
                      className="submit"
                      type="submit"
                      onClick={addNewAddress}
                    >
                      {t("Save Address")}
                    </button>
                  </form>
                </div>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                {t("Close")}
              </Button>
            </Modal.Footer>
          </Modal>

          {/* ////////////////////////////////////////// */}
        </div>
        <div className=" checkoutCard">
          <div className="sectionTitle">{t("Shipping Method")}</div>

          <Table>
            <thead>
              <tr style={{ color: "#aca7a7", fontWeight: "lighter" }}>
                <th className="text-start">{t("Select")}</th>
                <th className="text-start">{t("Price")}</th>
                <th>{t("Method Title")}</th>
                <th>{t("Carrier Title")}</th>
              </tr>
            </thead>
            <br />
            <tbody>
              <tr>
                <td>
                  <Form.Check
                    className=""
                    reverse
                    name=""
                    type="radio"
                    id="1"
                  />
                </td>
                <td>
                  <label htmlFor="1">
                    <td className="text-start my-4 ">
                      <h5> 99 {t("EGP")}</h5>
                    </td>
                  </label>
                </td>
                <td className="  ">
                  <span>5-8 Days - Any Question 01227872222</span>
                </td>
                <td className="">
                  <p className="my-4">MyFire Shipping</p>
                </td>
              </tr>
              {/* /////////////////////// */}
            </tbody>
          </Table>
          <h5>{t("Delivery Comment")}</h5>
          <textarea
            rows="4"
            cols="50"
            placeholder={t("Enter Your Comment")}
          ></textarea>
        </div>

        {/* ////////////////////////////////////////// */}
        <div className=" checkoutCard">
          <div className="sectionTitle">{t("Order Summary")}</div>
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              {/* <Accordion.Header> ITEMS IN CART</Accordion.Header> */}
              <Accordion.Header>
                ( {check.length} ) {t("Items in Cart")}
              </Accordion.Header>
              <Accordion.Body>
                <div className="orderSummary">
                  <Table>
                    <thead>
                      <tr style={{ color: "#aca7a7", fontWeight: "lighter" }}>
                        <th className="text-start">{t("Product")}</th>
                        <th>{t("Title")}</th>
                        <th>{t("Price")}</th>
                      </tr>
                    </thead>
                    <br />

                    {check?.map((item) => (
                      <tbody>
                        <tr>
                          <td className="text-start tableData">
                            <img
                              className="imgCart "
                              src={item.img}
                              alt=""
                              width={90}
                              height={90}
                            />
                          </td>

                          <td className="tableData  ">
                            <span>{item.title}</span>
                          </td>
                          <td className="tableData">
                            <p className="my-4 checkoutPrice">
                              {item.price} {t("EGP")}
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    ))}
                  </Table>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <hr />
          <h3>{t("Cart Total")}</h3>
          <Table>
            <tr>
              <td className="text-start tableData">
                <h4>{t("CART SUBTOTALl")}</h4>
              </td>

              <td className="tableData">
                <p className="my-4">
                  {price} {t("EGP")}
                </p>
              </td>
            </tr>
            <tr>
              <td className="text-start tableData">
                <h4>{t("Shipping")}</h4>
              </td>

              <td className="tableData">
                <p className="my-4">0 {t("EGP")}</p>
              </td>
            </tr>
            <tr>
              <td className="text-start tableData">
                <h4> {t("ORDER TOTAL")}</h4>
              </td>
              <td className="tableData checkoutPrice">
                <p className="my-4">
                  {price} {t("EGP")}
                </p>
              </td>
            </tr>
          </Table>
          <br />
          <tr>
            <td>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control "
                  placeholder={t("Enter discount code")}
                />
              </div>
            </td>
            <td>
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary discInput"
                  type="button"
                >
                  {t("Apply Discount")}
                </button>
              </div>
            </td>
          </tr>
        </div>
      </div>
    </>
  );
}
