//// F /////
import UserAccount from "./Pages/user-account/UserAccount";
// import Header from './component/header/header';
import { Route, Routes } from "react-router-dom";
import MyAccount from './component/myAccount/myAccount';
import MyOrders from './component/myOrders/myOrders';
import MyWishList from './component/myWishList/myWishList';
import AddressBook from './component/addressBook/addressBook';
import AccountInformation from './component/accountInformation/accountInformation';
import Login from "./Pages/Login/login";
import Register from "./Pages/Register/register";
import ForgotPassword from "./Pages/ForgotPassword/forgotPassword";
import Fav from './Pages/Favs/favs';
import NotFound from './Pages/NotFound/NotFound';
//////////////////////

function App() {
  return (
    <>
      {/* <Header /> */}

      <Routes>

        <Route path="/useraccount" element={<UserAccount />}>

          <Route index element={<MyAccount />} />
          <Route path='myaccount' element={<MyAccount />} />
          <Route path='myorders' element={<MyOrders />} />
          <Route path='mywishlist' element={<MyWishList />} />
          <Route path='addressbook' element={<AddressBook />} />
          <Route path='accountinfo' element={<AccountInformation />} />
          <Route path='Fav' element={<Fav />} />
          <Route path='*' element={<NotFound/>} />
      

        </Route>
        <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </>
  );
}

export default App;
