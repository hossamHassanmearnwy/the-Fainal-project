import React from 'react'
import Card from 'react-bootstrap/Card';
import { NavLink, Link } from 'react-router-dom';
import './myAccountStyle.css'
import { useSelector } from 'react-redux';






export default function MyAccount() {
  const firstName = useSelector((state) => state.updateInformation.firstName)
  const lastName = useSelector((state) => state.updateInformation.lastName)
  //address
  const Fname = useSelector((state) => state.editShippingAddress.Fname)
  const Lname = useSelector((state) => state.editShippingAddress.Lname)
  const phone = useSelector((state) => state.editShippingAddress.phoneNumber)
  const street = useSelector((state) => state.editShippingAddress.street)
  const city = useSelector((state) => state.editShippingAddress.city)
  const country = useSelector((state) => state.editShippingAddress.country)
  const zip = useSelector((state) => state.editShippingAddress.zip)
  const name = "fatma"

  return <>

    <h4>My Account</h4>
    <h2>Account Information</h2><br />
    {/* 1 */}
    <div className='row'>
      <div className=' col-12 col-lg-5'>
        <Card >
          <Card.Header >Contact Information</Card.Header>
          <Card.Body className='myCard'>
            {/* <Card.Title>Special title treatment</Card.Title> */}
            <Card.Text> Name : {firstName} {lastName} </Card.Text>
            <Card.Text> Email : </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Link className={'edit-link'} to='/useraccount/accountinfo'>Edit </Link>
            <Link className={'password-link'}>Change Password </Link>
          </Card.Footer>
        </Card>

      </div>

      {/* 2 */}
      <div className='col-12 col-lg-5'>

        <Card >
          <Card.Header>My Wish List</Card.Header>
          <Card.Body className='myCard'>
            {/* <Card.Title>Special title treatment</Card.Title> */}
            <Card.Text>
              You have not set any Favorite items .
            </Card.Text>
          </Card.Body>
          <Card.Footer >
            <Link className={'edit-link'} to='/useraccount/mywishlist'>Edit </Link>

          </Card.Footer>
        </Card>
      </div>
    </div>


    <h2>Address Book</h2><br />
    {/* 3 */}
    <div className='row'>

      <div className='col-12 col-lg-5'>
        <Card >
          <Card.Header>My Orders</Card.Header>
          <Card.Body className='myCard' >
            {/* <Card.Title>Special title treatment</Card.Title> */}
            <Card.Text>
              You have not set any orders yet

            </Card.Text>
          </Card.Body>
          <Card.Footer >
            <Link className={'edit-link'} to='/useraccount/addressbook'>Edit orders</Link>
          </Card.Footer>
        </Card>
      </div>



      {/* 4 */}

      <div className=' col-12 col-lg-5'>
        <Card >
          <Card.Header >Default Shipping Address</Card.Header>
          <Card.Body className='myCard'>
            {/* <Card.Title>Default Shipping Address</Card.Title> */}
            <Card.Text className={(Fname === '') ? '' : "emptyShippingDetails"} >
              <div class="alert alert-warning alert-dismissible fade show" role="alert">
                You have not set any Shipping Address</div>
            </Card.Text>
            <Card.Text className={(Fname === '') ? "emptyShippingDetails" : ''}>
              {/* You have not set a default shipping address . */}
              Name : {Fname} {Lname}<br />
              Street : {street}<br />
              City : {city}<br />
              Country : {country}<br />
              Phone Number : {phone}<br />
              zip : {zip}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Link className={'edit-link'} to='/useraccount/addressbook'>Edit Address</Link>

          </Card.Footer>
        </Card>
      </div>



    </div>
    

  </>
  
}
