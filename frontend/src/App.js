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

import Home from "./Pages/Home/home";

import ProductDetail from "./Pages/productDetail/ProductDetail";
import Checkout from "./Pages/Checkout/Checkout";
import CategoryPage from "./Pages/categories/CategoryPage";
import Favourites from "./Pages/favorite/fav";
import Mobiles from "./Pages/mobiles/mobiles";
import Accessories from "./Pages/accessories/accessories";
import Supply from "./Pages/supply/supply";
import Computers from "./Pages/computers/computers";
import Protected from "./protectedRoutes";
import Games from "./Pages/games/games";

function App() {
  const [show, setShow] = useState(true);
  const [warning, setWarning] = useState(false);
  // const [cart , setCart] = useState([]);
  let [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || [] // local storge to get cart
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart)); // local storge to save cart in it
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

  /////////////////////////////////
  // let [check, setCheck] = useState(
  //   JSON.parse(localStorage.getItem("cart")) || [] // local storge to get cart
  // );

  // useEffect(() => {
  //   localStorage.setItem("checkout", JSON.stringify(check)); // local storge to save cart in it

  //   console.log(`Saved ${check.length} items to localStorage from check`);
  // }, [cart]);
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
          <Route index element={<Home handleClick={handleClick} />} />
          <Route path="/home" element={<Home handleClick={handleClick} />} />
          {/* // User account */}
          <Route path="/useraccount" element={<UserAccount />}>
            <Route index element={<MyAccount />} />
            <Route path="myaccount" element={<MyAccount />} />
            <Route path="myorders" element={<MyOrders />} />
            <Route path="fav" element={<Favourites />} />
          </Route>

          {/* <Route path="Fav" element={<Fav />} /> */}
          <Route
            path="/useraccount"
            element={
              <Protected>
                <UserAccount />{" "}
              </Protected>
            }
          >
            <Route index element={<MyAccount />} />
            <Route path="myaccount" element={<MyAccount />} />
            <Route path="myorders" element={<MyOrders />} />
            {/* <Protected></Protected> */}
            <Route path="fav" element={<Favourites />} />
            {/* <Route path="Fav" element={<Fav />} /> */}

            <Route path="addressbook" element={<AddressBook />} />
            <Route path="accountinfo" element={<AccountInformation />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          <Route
            path="/cart"
            element={
              <Protected>
                <Cart
                  cart={cart}
                  setCart={setCart}
                  handleChange={handleChange}
                  setShow={setShow}
                  path="/cart"
                />
              </Protected>
            }
          />

          <Route
            path="/fav"
            element={
              <Protected>
                {" "}
                <Favourites handleClick={handleClick} />{" "}
              </Protected>
            }
          />

          <Route
            path="/ProductDetail/:id"
            element={<ProductDetail handleClick={handleClick} />}
          />
          <Route path="Mobiles" element={<Mobiles />} />
          {/* <Route path="ProductDetail" element={<ProductDetail />} /> */}

          <Route path="computers" element={<Computers />} />
          <Route path="supply" element={<Supply />} />
          <Route path="accessories" element={<Accessories />} />
          <Route path="Games" element={<Games />} />

          <Route path="/cat" element={<CategoryPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/checkout" element={<Protected> <Checkout /> </Protected>} />
        </Routes>

        <ProjFooter />
      </div>
    </>
  );
}

export default App;
