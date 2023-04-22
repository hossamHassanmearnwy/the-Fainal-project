
import React, { useState } from 'react';
import '../Card/cards.css';
import { Link } from 'react-router-dom';
import { BsFillCartFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from 'react-redux';
import removeFav from '../../Store/actions/remove';
import favAdd from '../../Store/actions/add';





const Cards = ({ item, handleClick }) => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const {title, desc, price, img, id} = item;
  // console.log(item)


  var [Fav, setFav] = useState([])

    let FavList = useSelector((state)=>state.add.Fav); // recieving fav list from the reducer
     

    const dispatch = useDispatch();   // useDispatch return function that calls my actions






    const addFav=(e,item)=>{
      if( e.target.className !== "bi bi-heart-fill text-danger fs-3"){  // add to fav

          e.target.className ="bi bi-heart-fill text-danger fs-3";
          Fav.push(item);
          console.log(item);
          console.log(Fav);
          setFav([...Fav]);
          dispatch(favAdd(Fav));
      }
      else { // remove from fav  //  else if ( FavList[i]==movie )
          e.target.className ="bi bi-heart text-danger fs-3"

          var index = Fav.indexOf(item);
          if (index !== -1) {
              Fav.splice(index, 1);
          }
          setFav([...Fav]);
          console.log(Fav);
          dispatch(removeFav(Fav));
      }
      
  }



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
      <Button className='me-5 text-white' variant="warning">{t('See Details')}</Button></Link> 

      </div>
      </div>
      <div className='mt-4 d-flex'>

      {/* <span className='buy border-top px-5'><FaRegHeart className='me-2 fs-3 text-danger' role='button'></FaRegHeart></span> */}
      <span className='buy border-top px-5'><i className="bi bi-heart text-danger fs-3" onClick={(e)=>{ addFav(e,item) } } role='button'></i></span>
      <span className='buy border-top px-5'><BsFillCartFill className='me-2 fs-3 text-warning'  onClick={()=>handleClick(item)} role='button'>{" "}</BsFillCartFill> </span>


    
    </div>
    </div>
  </div>
  );
};

export default Cards
