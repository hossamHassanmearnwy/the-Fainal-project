import logo from './logo.svg';
import './App.css';
//// F /////
import UserAccount from './pages/user-account/user-account';
import Header from './component/header/header';
import { Route, Routes } from 'react-router-dom';
import MyAccount from './component/myAccount/myAccount';
import MyOrders from './component/myOrders/myOrders';
import MyWishList from './component/myWishList/myWishList';
import AddressBook from './component/addressBook/addressBook';
import AccountInformation from './component/accountInformation/accountInformation';
//////////////////////

function App() {
  return ( <>
    
         <Header />

        <Routes>
          <Route path='/useraccount' element={<UserAccount />}>

            <Route index element={<MyAccount/>}/>
            <Route  path='myaccount' element={<MyAccount/>}/>
            <Route  path='myorders' element={<MyOrders/>}/>
            <Route  path='mywishlist' element={<MyWishList/>}/>
            <Route path='addressbook' element={<AddressBook />}/>
            <Route  path='accountinfo' element={<AccountInformation/>}/>

          </Route>
        </Routes>
</>
  );
}

export default App;
