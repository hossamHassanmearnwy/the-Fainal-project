import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
// import { useEffect } from 'react';
// import axios from 'axios'

import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from 'react-redux';
import removeFav from '../../Store/actions/remove';
import Cards from '../../Components/Card/Cards';





const Favourites = ({handleClick}) => {

    let FavList = useSelector((state)=>state.add.Fav);  // recieving fav list from the reducer
    var [Fav, setFav] = useState(FavList)

    const dispatch = useDispatch();    // useDispatch return function that calls my actions

    const remove=(item)=>{      // remove from fav

        var index = Fav.indexOf(item);
        console.log(item);
        // console.log(index);
        if (index !== -1) {
            Fav.splice(index, 1);
        }
        setFav([...Fav]);
        console.log(Fav);
        dispatch(removeFav(Fav));
    }

    return (
        <div>

            <h3>favourites:  { FavList.length } </h3>
            <div className='container'>
        <div className='row'>

        
                {
                    Fav.map((item)=>(
                        <Cards item={item} key={item.id} handleClick={handleClick} />
                    ))
                }


            
        </div>
        </div>
        
        </div>
    );
}

export default Favourites;
