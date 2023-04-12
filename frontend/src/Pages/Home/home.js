import React, { useState, useEffect } from "react";
import Amazon from '../../Components/Amazon/Amazon'
import MainSideBar from './../../Components/MainSideBar/MainSideBar';
import Slider from './../../Components/Slider/Slider';
import Cart from "../../Pages/cart/Cart";

export default function Home() {
 
  return (<>

  <div className='mx-5 my-5'>
                <div className='row ' >
                    <div className='col-3 '>
                    {/* Main Sidebar */}
                  <MainSideBar/>

  
  </div>
   <div className='col-9'>
                    <Slider />
                </div>
  </div>
  </div>
  
 
    <Amazon />
  
  
  </>
  )
}
