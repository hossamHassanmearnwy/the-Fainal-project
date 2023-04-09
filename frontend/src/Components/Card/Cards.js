import React from 'react';
import '../Card/cards.css'
import { useTranslation } from 'react-i18next';

const Cards = ({item, handleClick}) => {
  const {t, i18n} = useTranslation();
  document.body.dir = i18n.dir();
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
            <p>{t('Price')} - {price}</p>
            <button onClick={()=>handleClick(item)} >{t('Add to Cart')}</button>
        </div>
    </div>
  )
}

export default Cards