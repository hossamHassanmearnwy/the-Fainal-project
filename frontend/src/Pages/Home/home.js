import React, { useState, useEffect } from "react";
import Amazon from '../../Components/Amazon/Amazon'
import MainSideBar from './../../Components/MainSideBar/MainSideBar';
import Slider from './../../Components/Slider/Slider';
import Cart from "../../Pages/cart/Cart";
import OffersSlider from "../../Components/offersSlider/OffersSlider";
import offersList from "../../offersData";

export default function Home() {
  //  const [warning, setWarning] = useState(false);
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
  
    {/* <Cart
      cart={cart}
      setCart={setCart}
      handleChange={handleChange}
      setShow={setShow}
      path='/cart'
    />  */}
    <Amazon handleClick={handleClick} />

      {
        
          <OffersSlider handleClick={handleClick} />
        
      }

    {/* <OffersSlider/> */}

    
    {warning && (
      <div className="warning">Item is already added to your cart</div>
    )}

  
  
  </>
  )
}
