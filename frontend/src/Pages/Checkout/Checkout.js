import React from 'react'
import "./CheckoutStyle.css"
import Card from 'react-bootstrap/Card';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Cart from './../cart/Cart';
import Table from "react-bootstrap/Table";
import  Accordion  from 'react-bootstrap/Accordion';
///////////////////////////////////////



export default function Checkout(handleChange ) {
  const Fname = useSelector((state) => state.editShippingAddress.Fname)
  const Lname = useSelector((state) => state.editShippingAddress.Lname)
  const phone = useSelector((state) => state.editShippingAddress.phoneNumber)
  const street = useSelector((state) => state.editShippingAddress.street)
  const city = useSelector((state) => state.editShippingAddress.city)
  const country = useSelector((state) => state.editShippingAddress.country)
  const zip = useSelector((state) => state.editShippingAddress.zip)
  const name = "fatma"

  ////////////////////////////////
  
  return (
    <>
      
      <div className='row'>
        <div className=' checkoutCard'>
          <div className='sectionTitle'>SHIPPING ADDRESS</div>
          <Card.Text className='shipContent'>
            {('Name')} : {Fname} {Lname}<br />
            {('Street')} : {street}<br />
            {('City')} : {city}<br />
            {('Country')} : {country}<br />
            {('Mobile Number')} : {phone}<br />
            {('Zip/Postal Code')} : {zip}
          </Card.Text>
          
{/* ////////////////////////////////////////// */}
</div>
        <div className=' checkoutCard'>
          <div className='sectionTitle'>SHIPPING METHODS</div>
</div>

{/* ////////////////////////////////////////// */}
        <div className=' checkoutCard'>
          <div className='sectionTitle'>ORDER SUMMARY</div>
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Accordion Item #1</Accordion.Header>
              <Accordion.Body >
                <div className='orderSummary'>
                  <Table>
                    <thead>
                      <tr style={{ color: "#aca7a7", fontWeight: "lighter" }}>
                        <th className="text-start">{("Product")}</th>
                        <th>{("Title")}</th>
                        <th>{("Price")}</th>
                      </tr>
                    </thead>
                    <br/>
                    <tbody>
                      <tr>
                      <td className="text-start tableData">
                        <img
                          className="imgCart "
                            src='https://m.media-amazon.com/images/I/81AuwSoF9yL.__AC_SY300_SX300_QL70_ML2_.jpg'
                          alt=""
                          width={90}
                          height={90}
                        />
                      </td>
                      
                        <td className="tableData  ">
                          <span >title title title</span>
                      </td>
                      <td className="tableData">
                        <p className="my-4 checkoutPrice">999.9 EGP</p>
                      </td>
                      </tr>
                      <tr>
                      <td className="text-start tableData">
                        <img
                          className="imgCart "
                            src='https://m.media-amazon.com/images/I/81Gphn97m9L._AC_SX679_.jpg'                          
                            alt=""
                          width={90}
                          height={90}
                        />
                      </td>
                      <td className="tableData">
                        <span >title title title</span>
                      </td>
                      <td className="tableData">
                          <p className="my-4 checkoutPrice">999.9 EGP</p>
                      </td>
                      </tr>
                      <tr>
                      <td className="text-start tableData">
                        <img
                          className="imgCart "
                            src='https://m.media-amazon.com/images/I/611jbF+FbbL._AC_SX679_.jpg'              
                            alt=""
                          width={90}
                          height={90}
                        />
                      </td>
                      <td className="tableData">
                        <span >title title title</span>
                      </td>
                      <td className="tableData">
                          <p className="my-4 checkoutPrice">999.9 EGP</p>
                      </td>
                      </tr>
                      
                    
                    
                    
                  
                    
                  
                    </tbody>
                  </Table>
                </div>
                
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <hr/>
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
                <td className="tableData">
                  <p className="my-4">999.9 EGP</p>
                </td>
              </tr>
            </Table>
          <br/>
          <tr>
            <td>
          <div className="input-group mb-3">
            <input type="text" className="form-control discInput" placeholder="Enter Discount Code"  />
            
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
