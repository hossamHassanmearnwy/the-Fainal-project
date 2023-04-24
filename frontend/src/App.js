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

import ProductDetail from './Pages/productDetail/ProductDetail';
import Checkout from './Pages/Checkout/Checkout';
import CategoryPage from "./Pages/categories/CategoryPage";
import Favourites from "./Pages/favorite/fav";


function App() {
  const [show, setShow] = useState(true);
  // const [cart , setCart] = useState([]);
  let [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || [] // local storge to get cart
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart)); // local storge to save cart in it

    console.log(`Saved ${cart.length} items to localstorage`);
  }, [cart]);

  
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

/////////////////////////////////
  let [check, setCheck] = useState(
    JSON.parse(localStorage.getItem("checkout")) || [] // local storge to get cart
  );

  useEffect(() => {
    localStorage.setItem("checkout", JSON.stringify(check)); // local storge to save cart in it

    console.log(`Saved ${check.length} items to localstorage`);
  }, [check]);
  ////////////////////////////////


  return (
    <>
      {/* <Header /> */}

      <div className="App container-fluid">
        <ProjectNav />
        <InternalNav size={cart.length} setShow={setShow} />
        

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
          <Route path="fav" element={<Favourites />} />
          {/* <Route path="Fav" element={<Fav />} /> */}
          
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
            path='/cart'
          />
        }/>
          <Route path="/fav" element={<Favourites />} />
          <Route path="product" element={<Productpage />} />
          <Route path="/details/:id" element={<ProductDetail />} />
          <Route path="/cat" element={<CategoryPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/checkout" element={
        <Checkout
        check={check}
        setCheck={setCheck}/>}/>
      
      </Routes>
      
      <ProjFooter />
      </div>
    </>
  );
}

export default App;
