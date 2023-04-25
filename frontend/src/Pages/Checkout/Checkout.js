import "./CheckoutStyle.css"
import Card from 'react-bootstrap/Card';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Cart from './../cart/Cart';
import Table from "react-bootstrap/Table";
import Accordion from 'react-bootstrap/Accordion';
import { useEffect, React, useState, createElement } from 'react';
import cartaxios from "./../../axiosConfig/axiosInstance";
///////////////////////////////////////
// import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';



export default function Checkout() {

  const Fname = useSelector((state) => state.editShippingAddress.Fname)
  const Lname = useSelector((state) => state.editShippingAddress.Lname)
  const phone = useSelector((state) => state.editShippingAddress.phoneNumber)
  const street = useSelector((state) => state.editShippingAddress.street)
  const city = useSelector((state) => state.editShippingAddress.city)
  const country = useSelector((state) => state.editShippingAddress.country)
  const zip = useSelector((state) => state.editShippingAddress.zip)
  const name = "fatma"
  ////////////////////////////////////


  ////////////////////////////////
  const [user, setUser] = useState({
    fname: '',
    lname: '',
    phone: '',
    street: '',
    city: '',
    country: '',
    zip: ''
  })

  const testFunnn = () => {
    console.log('xcccx')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleForm = (ev) => {
    switch (ev.target.name) {
      case "fname":
        setUser({ ...user, fname: ev.target.value });
        break;

      case "lname":
        setUser({ ...user, lname: ev.target.value });
        break;

      case "phone":
        setUser({ ...user, phone: ev.target.value });
        break;

      case "street":
        setUser({ ...user, street: ev.target.value });
        break;

      case "city":
        setUser({ ...user, city: ev.target.value });
        break;

      case "country":
        setUser({ ...user, country: ev.target.value });
        break;

      case "zip":
        setUser({ ...user, zip: ev.target.value });
        break;
      // default:
      //   return

    }
  }
  //////////////
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showNewAddress, setShowNewAddress] = useState();
  const addNewAddress = () => {
    setShowNewAddress(<Card.Text className={showNewAddress}>
      {/* <h1>aaaaaaaaaaaaaaaaaa</h1> */}
      <label className="card">
        <input name="plan" className="radio" type="radio" />
        <span className="plan-details">
          <Card.Text className=''>
            {('Name')} : {Fname} {Lname}<br />
            {('Street')} : {street}<br />
            {('City')} : {city}<br />
            {('Country')} : {country}<br />
            {('Mobile Number')} : {phone}<br />
            {('Zip/Postal Code')} : {zip}
          </Card.Text>
        </span>
      </label>
    </Card.Text>);
  }
  return (
    <>

      <div className='row'>
        <div className=' checkoutCard'>
          <div className='sectionTitle'>SHIPPING ADDRESS</div>
          <br />
          <div className="grid">
            <label className="card">
              <input name="plan" className="radio" type="radio" checked />

              <span className="plan-details">
                <Card.Text className=''>
                  {('Name')} : {Fname} {Lname}<br />
                  {('Street')} : {street}<br />
                  {('City')} : {city}<br />
                  {('Country')} : {country}<br />
                  {('Mobile Number')} : {phone}<br />
                  {('Zip/Postal Code')} : {zip}
                </Card.Text>
              </span>
            </label>
            <br /><br />
          {showNewAddress}

          </div>
          <br /><br />



          <button className="newAddressBtn" type='submit' onClick={handleShow}>{('+ New Address')}</button>

          <br />
          <br />




          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>SHIPPING ADDRESS</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <div className="popupForm">
                  <form onSubmit={(evt) => { handleSubmit(evt) }} >
                    {/* first name */}
                    <label htmlFor='fname' className='label'>{("First Name")}</label><br />
                    <input type="text" id="fname" name="fname" placeholder={('Enter Your') + ("First Name")} value={user.fname} onChange={(event) => { handleForm(event) }} /><br />

                    {/* last name */}
                    <label htmlFor='lname' className='label'>{("Last Name")}</label><br />
                    <input type="text" id="lname" name="lname" placeholder={('Enter Your') + ("Last Name")} value={user.lname} onChange={(event) => { handleForm(event) }} /><br />
                    {/* phone number */}
                    <label htmlFor='phone' className='label'>{("Mobile Number")}</label><br />
                    <input type="number" id="phone" name="phone" placeholder={('Enter Your') + ("Mobile Number")} value={user.phone} onChange={(event) => { handleForm(event) }} />

                    <br />
                    <br />


                    <h2>{('Address')}</h2>
                    {/* Street */}
                    <label htmlFor='street' className='label'>{('Street Address')}</label><br />
                    <input type="text" id="street" name="street" placeholder={('Enter Your') + ("Street Address")} value={user.street} onChange={(event) => { handleForm(event) }} /><br />
                    {/* City */}
                    <label htmlFor='city' className='label'>{('City')}</label><br />
                    <input type="text" id="city" name="city" placeholder={('Enter Your') + ("City")} autoComplete="address-level2" value={user.city} onChange={(event) => { handleForm(event) }} /><br />
                    {/* Country */}
                    <label htmlFor='country' className='label'>{('Country')}</label><br />
                    <select id="country" name="country" autoComplete='country' placeholder={('Enter Your') + ("Country")} value={user.country} onChange={(event) => { handleForm(event) }} >
                      <option></option>
                      <option >{('Egypt')}</option>

                    </select><br />
                    {/* ZIP */}
                    <label htmlFor='zip' className='label'>{('Zip/Postal Code')} </label><br />
                    <input type="text" id="zip" name="zip" autoComplete="postal-code" value={user.zip} onChange={(event) => { handleForm(event) }} /><br />
                    <br />
                    <button className="submit" type='submit' onClick={addNewAddress}>{('Save Address')}</button>
                  </form>
                </div>

              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>



          {/* ////////////////////////////////////////// */}
        </div>
        <div className=' checkoutCard'>
          <div className='sectionTitle'>SHIPPING METHODS</div>

          <Table >
            <thead>
              <tr style={{ color: "#aca7a7", fontWeight: "lighter" }}>
                <th className="text-start">{("Select")}</th>
                <th className="text-start">{("Method	Price")}</th>
                <th>{("Method Title")}</th>
                <th>{("	Carrier Title")}</th>
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
                    type='radio'
                    id='1'
                  />


                </td>
                <td>
                  <label htmlFor="1" >
                    <td className="text-start my-4 ">
                      <h5>	99 EGP</h5>
                    </td>
                  </label>

                </td>
                <td className="  ">
                  <span >5-8 Days - Any Question 01227872222</span>
                </td>
                <td className="">
                  <p className="my-4">MyFire Shipping</p>
                </td>
              </tr>
              {/* /////////////////////// */}
            </tbody>
          </Table>
          <h5>Delivery Comment</h5>
          <textarea rows="4" cols="50" placeholder="Enter Your Comment"></textarea>
        </div>


        {/* ////////////////////////////////////////// */}
        <div className=' checkoutCard'>
          <div className='sectionTitle'>ORDER SUMMARY</div>
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header> ITEMS IN CART</Accordion.Header>
              {/* <Accordion.Header>{check.length}  ITEMS IN CART</Accordion.Header> */}
              <Accordion.Body >
                <div className='orderSummary'>
                  <Table >
                    <thead>
                      <tr style={{ color: "#aca7a7", fontWeight: "lighter" }}>
                        <th className="text-start">{("Product")}</th>
                        <th>{("Title")}</th>
                        <th>{("Price")}</th>
                      </tr>
                    </thead>
                    <br />
                    {/* {check?.map((item)=>( */}


                    <tbody >


                      <tr>
                        <td className="text-start tableData">
                          <img
                            className="imgCart "
                            // src={item.img}
                            src='https://m.media-amazon.com/images/I/81AuwSoF9yL.__AC_SY300_SX300_QL70_ML2_.jpg'
                            alt=""
                            width={90}
                            height={90}
                          />
                        </td>

                        <td className="tableData  ">
                          <span >Title title title</span>
                        </td>
                        <td className="tableData">
                          <p className="my-4 checkoutPrice">999.9 EGP</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-start tableData">
                          <img
                            className="imgCart "
                            // src={item.img}
                            src='https://m.media-amazon.com/images/I/81AuwSoF9yL.__AC_SY300_SX300_QL70_ML2_.jpg'
                            alt=""
                            width={90}
                            height={90}
                          />
                        </td>

                        <td className="tableData  ">
                          <span >Title title title</span>
                        </td>
                        <td className="tableData">
                          <p className="my-4 checkoutPrice">999.9 EGP</p>
                        </td>
                      </tr>




                    </tbody>
                    {/* ))} */}
                  </Table>
                </div>

              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <hr />
          <h3>Cart Total</h3>
          <Table>
            {/* <thead>
                <tr style={{ color: "#aca7a7", fontWeight: "lighter" }}>
                  <th className="text-start">{("Product")}</th>
                  <th>{("Title")}</th>
                  <th>{("Price")}</th>
                </tr>
              </thead> */}
            <tr>
              <td className="text-start tableData">
                <h4>CART SUBTOTALl</h4>
              </td>

              <td className="tableData">
                <p className="my-4">999.9 EGP</p>
              </td>
            </tr>
            <tr>
              <td className="text-start tableData">
                <h4>SHIPPING</h4>
              </td>

              <td className="tableData">
                <p className="my-4">999.9 EGP</p>
              </td>
            </tr>
            <tr>
              <td className="text-start tableData">
                <h4> ORDER TOTAL</h4>
              </td>
              <td className="tableData checkoutPrice">
                <p className="my-4">999.9 EGP</p>
              </td>
            </tr>
          </Table>
          <br />
          <tr>
            <td>
              <div className="input-group mb-3">
                <input type="text" className="form-control " placeholder="Enter Discount Code" />

              </div>
            </td>
            <td>
              <div className="input-group-append">
                <button className="btn btn-outline-secondary discInput" type="button">Apply Discount</button>

              </div>


            </td>

          </tr>






        </div>


      </div>




    </>
  )
}
