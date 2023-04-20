import React, { useState, useEffect } from 'react';
import './ProductDetail.css';
import { FaRegHeart } from "react-icons/fa";
import Form from 'react-bootstrap/Form'
import { BsFillCartFill } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import StarRating from './../../Components/rating/StarRating';
import Cart from "../../Pages/cart/Cart";

import { useParams } from "react-router-dom";
import list from '../../data';
import productsDetailsaxios from "./../../axiosConfig/axiosInstance";
import { useTranslation } from 'react-i18next';



export default function ProductDetail() {
  const {t, i18n} = useTranslation();
  document.body.dir = i18n.dir();
  const [ProductDetail, setProductDetail] = useState([]);
  useEffect(() => {
    productsDetailsaxios
      .get("/Products/${id}") //id
      .then((res) => {
        console.log(res.data);
        setProductDetail(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setProductDetail]);



  const [product, setProduct] = useState({});
  const { id } = useParams();


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
    const selectedProduct = list.find(product => product.id === Number(id));
    console.log(selectedProduct);
    console.log(id);

    setProduct(selectedProduct);
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }








  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
      // console.log(product)
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  };


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
      {show ? (

        <div className='container py-3 my-5'>
          <div className='row'>
            <div className='col-lg-6 col-sm-12 p-3' style={{ marginBottom: "-20%" }}>
              <img src={product.img} alt="#" className='fluid' height='50%' />
            </div>
            <div className='col-lg-6 col-sm-12 p-3' style={{ color: "grey" }}>
              <p className='mb-2 text-start'>{t('category name')}</p>
              <h2 className='textdark text-start'>{product.title}</h2>
              <StarRating />
              <p className='mb-2 text-start'>{t('Availability')}:<span className='text-warning'> 26 in stock</span> </p>
              <hr />

              <p className='my-3 text-lowercase text-start'><FaRegHeart className='me-1 fs-4 text-danger'></FaRegHeart>{t('add to wishlist')}  </p>

              <ul className='feat my-3 text-start'>
                <li>4.5 inch HD Touch Screen (1280 x 720)</li>
                <li>Android 4.4 KitKat OS</li>
                <li>1.4 GHz Quad Core™ Processor</li>
                <li>20 MP Electro and 28 megapixel CMOS rear camera</li>
              </ul>

              <p className='mb-3 text-start'>{product.desc}</p>

              <h2 className='text-dark me-2 mb-2 text-start'>$1,999.00 <span className='text-decoration-line-through text-secondary fs-5'>$2,299.00</span></h2>

              <hr />



              <div className='row'>

                <Form.Select className='col-lg-6 col-sm-12 bg-none border border-warning text-warning w-25 mt-5'>
                  <option>{t('Color')}</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>




                <Button variant="warning" className='col-lg-6 col-sm-12 text-white text-capitalize rounded-pill fw-bold mt-5 w-50' onClick={() => handleClick(product)}>
                  <BsFillCartFill className='text-white fs-4 me-2'></BsFillCartFill>{t('Add to Cart')} </Button>


              </div>

            </div>
          </div>
        </div>



      ) : (
        <Cart
          cart={cart}
          setCart={setCart}
          handleChange={handleChange}
          setShow={setShow}
          path='/cart'
        />
      )}
      {warning && (
        <div className="warning">Item is already added to your cart</div>
      )}

    </>

  )
}

