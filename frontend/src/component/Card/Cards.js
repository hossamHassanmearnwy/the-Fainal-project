import React from 'react';
import '../Card/cards.css'

const Cards = ({item, handleClick}) => {
    const {title, desc, price, img} = item;
    // console.log(item)
  return (
    <div className="cards">
        <div className="image_box">
            <img src={img} alt="Image" />
        </div>
        <div className="details">
            <p>{title}</p>
            <p>{desc}</p>
            <p>Price - {price}</p>
            <button onClick={()=>handleClick(item)} >Add to Cart</button>
        </div>
    </div>
  )
}

export default Cards