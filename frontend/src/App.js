import React, { useState, useEffect } from "react";
import "./App.css";
import ProjFooter from "./Layouts/Footer/Footer";
import InternalNav from "./Layouts/InternalNav/InternalNav";
import ProjectNav from "./Layouts/Nav/ProjectNav";
import Amazon from "./Components/Amazon/Amazon";
import Cart from "./Pages/cart/Cart";
import "./Components/Amazon/amazon.css";

//// F /////
import UserAccount from "./Pages/user-account/UserAccount";
// import Header from './Components/header/header';
import { Route, Routes } from "react-router-dom";
import MyAccount from "./Components/myAccount/myAccount";
import MyOrders from "./Components/myOrders/myOrders";
import MyWishList from "./Components/myWishList/myWishList";
import AddressBook from "./Components/addressBook/addressBook";
import AccountInformation from "./Components/accountInformation/accountInformation";
import Login from "./Pages/Login/login";
import Register from "./Pages/Register/register";
import ForgotPassword from "./Pages/ForgotPassword/forgotPassword";
import Fav from "./Pages/Favs/favs";
import NotFound from "./Pages/NotFound/NotFound";

import Product from "./Components/product/product";
import Productpage from "./Pages/Products/productpage";
import Home from './Pages/Home/home';
//////////////////////

function App() {
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

  return (
    <>
      {/* <Header /> */}

      <div className="App container-fluid bg-white">
        <ProjectNav />
        <InternalNav size={cart.length} setShow={setShow} />
{/* 
        {show ? (
          <Amazon handleClick={handleClick} />
        ) : ( */}
          {/* <Cart
            cart={cart}
            setCart={setCart}
            handleChange={handleChange}
            setShow={setShow}
            path='/cart'
          /> */}
        {/* )}
        {warning && (
          <div className="warning">Item is already added to your cart</div>
        )} */}
      </div>

      <Routes>
      {/* <Route path="/cart" element={<Cart/>}/> */}
        {/* // Home // */}
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        {/* // User account */}
        <Route path="/useraccount" element={<UserAccount />}>
          <Route index element={<MyAccount />} />
          <Route path="myaccount" element={<MyAccount />} />
          <Route path="myorders" element={<MyOrders />} />
          <Route path="Fav" element={<Fav />} />
          <Route path="addressbook" element={<AddressBook />} />
          <Route path="accountinfo" element={<AccountInformation />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/cart" element={
          <Cart
            cart={cart}
            setCart={setCart}
            handleChange={handleChange}
            setShow={setShow}
          />
        }/>
          <Route path="product" element={<Product />} />
          <Route path="Productpage" element={<Productpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="*" element={<NotFound />} />
      
      </Routes>
      
      <ProjFooter />
    </>
  );
}

export default App;
