import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
// import { useEffect } from 'react';
// import axios from 'axios'

import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from 'react-redux';
import removeFav from '../../Store/actions/remove';
import Cards from '../../Components/Card/Cards';
import FavCards from '../../Components/favcard/FavCards';
import { useTranslation } from 'react-i18next';





const Favourites = ({handleClick}) => {
    const {t, i18n} = useTranslation();
    document.body.dir = i18n.dir();

    let FavList = useSelector((state)=>state.add.Fav);  // recieving fav list from the reducer
    var [Fav, setFav] = useState(FavList)

       // useDispatch return function that calls my actions

    

    return (
        <div>

        <h3 className='bg-warning text-capitalize text-center my-5 py-2 text-white'>{t('the wishlist')}</h3>
            <div className='container'>
        <div className='row'>

        
                {
                    Fav.map((item)=>(
                        <FavCards item={item} key={item.id} handleClick={handleClick} />
                    ))
                }


            
        </div>
        </div>
        
        </div>
    );
}

export default Favourites;
