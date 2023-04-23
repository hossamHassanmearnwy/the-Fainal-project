import "./CheckoutStyle.css"
import Card from 'react-bootstrap/Card';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Cart from './../cart/Cart';
import Table from "react-bootstrap/Table";
import  Accordion  from 'react-bootstrap/Accordion';
import { useEffect,React,useState } from 'react';
import cartaxios from "./../../axiosConfig/axiosInstance";
///////////////////////////////////////



export default function Checkout() {
  const {t, i18n} = useTranslation();
  document.body.dir = i18n.dir();
  
  const Fname = useSelector((state) => state.editShippingAddress.Fname)
  const Lname = useSelector((state) => state.editShippingAddress.Lname)
  const phone = useSelector((state) => state.editShippingAddress.phoneNumber)
  const street = useSelector((state) => state.editShippingAddress.street)
  const city = useSelector((state) => state.editShippingAddress.city)
  const country = useSelector((state) => state.editShippingAddress.country)
  const zip = useSelector((state) => state.editShippingAddress.zip)
  const name = "fatma"

  ////////////////////////////////
  const [user, setUser] = useState({
    fname: '',
    lname: '',
    phone: phone,
    street: street,
    city: city,
    country: country,
    zip: zip
  })


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
  
  return (
    <>
      
      <div className='row'>
        <div className=' checkoutCard'>
          <div className='sectionTitle'>{t('Shipping Address')}</div>
          {/* <Card.Text className='shipContent'>
            {('Name')} : {Fname} {Lname}<br />
            {('Street')} : {street}<br />
            {('City')} : {city}<br />
            {('Country')} : {country}<br />
            {('Mobile Number')} : {phone}<br />
            {('Zip/Postal Code')} : {zip}
          </Card.Text> */}
          <div className="container">
          <form onSubmit={(evt) => { handleSubmit(evt) }} >
            {/* first name */}
            <label htmlFor='fname' className='label'>{t("First Name")}</label><br />
            <input type="text" id="fname" name="fname" placeholder={t('Enter Your') + t("First Name")} value={user.fname} onChange={(event) => { handleForm(event) }} /><br />

            {/* last name */}
            <label htmlFor='lname' className='label'>{t("Last Name")}</label><br />
            <input type="text" id="lname" name="lname" placeholder={t('Enter Your') + t("Last Name")} value={user.lname} onChange={(event) => { handleForm(event) }} /><br />
            {/* phone number */}
            <label htmlFor='phone' className='label'>{t("Mobile Number")}</label><br />
            <input type="number" id="phone" name="phone" placeholder={t('Enter Your') + t("Mobile Number")} value={user.phone} onChange={(event) => { handleForm(event) }} />

            <br />
            <br />
          

            <h2>{t('Address')}</h2>
            {/* Street */}
            <label htmlFor='street' className='label'>{t('Street Address')}</label><br />
            <input type="text" id="street" name="street" placeholder={t('Enter Your') + t("Street Address")} value={user.street} onChange={(event) => { handleForm(event) }} /><br />
            {/* City */}
            <label htmlFor='city' className='label'>{t('City')}</label><br />
            <input type="text" id="city" name="city" placeholder={t('Enter Your') + t("City")} autoComplete="address-level2" value={user.city} onChange={(event) => { handleForm(event) }} /><br />
            {/* Country */}
            <label htmlFor='country' className='label'>{t('Country')}</label><br />
            <select id="country" name="country" autoComplete='country' placeholder={t('Enter Your') + t("Country")} value={user.country} onChange={(event) => { handleForm(event) }} >
              <option></option>
              <option >{t('Egypt')}</option>

            </select><br />
            {/* ZIP */}
            <label htmlFor='zip' className='label'>{t('Zip/Postal Code')} </label><br />
            <input type="text" id="zip" name="zip" autoComplete="postal-code" value={user.zip} onChange={(event) => { handleForm(event) }} /><br />
            <br />
            <button className="submit" type='submit'>{t('Save Address')}</button>

          </form>



          </div>
          
{/* ////////////////////////////////////////// */}
</div>
        <div className=' checkoutCard'>
          <div className='sectionTitle'>{t('Shipping Methods')}</div>
          
</div>

{/* ////////////////////////////////////////// */}
        <div className=' checkoutCard'>
          <div className='sectionTitle'>{t('Order Summary')}</div>
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header> {t('Items in Cart')}</Accordion.Header>
              {/* <Accordion.Header>{check.length}  ITEMS IN CART</Accordion.Header> */}
              <Accordion.Body >
                <div className='orderSummary'>
                  <Table >
                    <thead>
                      <tr style={{ color: "#aca7a7", fontWeight: "lighter" }}>
                        <th className="text-start">{t("Product")}</th>
                        <th>{t("Title")}</th>
                        <th>{t("Price")}</th>
                      </tr>
                    </thead>
                    <br/>
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
                      {/* //////////// */}
                      {/* <tr>
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
                      
                     */}
                    
                    
                  
                    
                  
                    </tbody>
                        {/* ))} */}
                  </Table>
                </div>
                
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <hr/>
            <h3>{t('Cart Total')}</h3>
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
                <h4>{t('CART SUBTOTALl')}</h4>
                </td>
                
                <td className="tableData">
                  <p className="my-4">999.9 EGP</p>
                </td>
              </tr>
              <tr>
                <td className="text-start tableData">
                  <h4>{t('Shipping')}</h4>
                </td>
                
                <td className="tableData">
                  <p className="my-4">999.9 EGP</p>
                </td>
              </tr>
              <tr>
                <td className="text-start tableData">
                <h4> {t('ORDER TOTAL')}</h4>
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
            <input type="text" className="form-control discInput" placeholder={t("Enter discount code")}  />
            
          </div>
          </td>
          <td>
            <div className="input-group-append">
            <button className="btn btn-outline-secondary discInput" type="button">{t('Apply Discount')}</button>

            </div>


            </td>

          </tr>

          



      
</div>


      </div>
    
    
    
    
    </>
  )
}
