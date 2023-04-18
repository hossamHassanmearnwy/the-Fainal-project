
import React from 'react';
import '../Card/cards.css';
import { Link } from 'react-router-dom';
import { BsFillCartFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import { useTranslation } from "react-i18next";





const Cards = ({ item, handleClick }) => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const {title, desc, price, img, id} = item;
  // console.log(item)

  return (

    <div className="cardPro my-3 border border-warning">

    <div className="imgBox">
    <img className="mouse" src={img} alt="Image" />
    </div>
    <div className="contentBox">
      <h2 className='text-dark mt-3 fs-4 fw-bold'>{title}</h2>
      <div className='row'>
      <h5 className=" col-lg-6 col-sm-12 text-dark d-flex align-items-end">
      {t("Price")} - {price}
      </h5>
      <div className='col-lg-6 col-sm-12 mt-4' >

       <Link to={`/details/${id}`}>
      <Button className='me-5 text-white' variant="warning">Details</Button></Link> 



      {/* <span className= 'p-3 circle bg-warning'  style={{borderRadius:"50%"}} onClick={()=>handleClick(item)} role='button'>
      <BsFillCartFill className='text-warning fs-4' role='button'> </BsFillCartFill>
  </span> */}
      </div>
      </div>
      <div className='mt-4 d-flex'>

      <span className='buy border-top px-5'><FaRegHeart className='me-2 fs-3 text-danger' role='button'></FaRegHeart></span>
      <span className='buy border-top px-5'><BsFillCartFill className='me-2 fs-3 text-warning'  onClick={()=>handleClick(item)} role='button'>{" "}</BsFillCartFill> </span>


    
    </div>
    </div>
  </div>
  );
};

export default Cards
