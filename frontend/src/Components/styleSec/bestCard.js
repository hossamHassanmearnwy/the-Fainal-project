import React from 'react';
import { BsFillCartFill } from "react-icons/bs";
import './style.css';

const BestCard = ({best, handleClick}) => {
    const {title, price, img} = best;
    // console.log(best)
  return (


    <div className='bestc p-3 mb-3 ms-1 border-end'>
    <div className="d-flex direction-row">
    <div className="col-lg-4 me-3" style={{width:"85px" , height:"100px"}}>
    <img src={img} alt="#" style={{width:"100%" , height:"100%"}}/>
    </div>
    <div className="col-lg-8 ms-4">
    <p className="mb-3 fw-bold text-primary text-start">{title}</p>

    <p className=" text-dark text-start ">${price}</p>
    <span className= 'p-2 circle bg-warning'  style={{borderRadius:"50%"}} onClick={()=>handleClick(best)} role='button'>
    <BsFillCartFill className='text-white text-end fs-5' role='button'></BsFillCartFill>
    </span>

    </div>
    </div>
    </div>

  )
}

export default BestCard;
