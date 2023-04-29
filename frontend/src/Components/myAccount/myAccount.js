import React from 'react'
import Card from 'react-bootstrap/Card';
import { NavLink, Link } from 'react-router-dom';
import './myAccountStyle.css'
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';






export default function MyAccount() {
  const {t, i18n} = useTranslation();
  document.body.dir = i18n.dir();
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

    <h4>{t('My Account')}</h4>
    <h2>{t('Account information')}</h2><br />
    {/* 1 */}
    <div className='row'>
      <div className=' col-12 col-lg-5'>
        <Card >
          <Card.Header >{t('Contact Information')}</Card.Header>
          <Card.Body className='myCard'>
            {/* <Card.Title>Special title treatment</Card.Title> */}
            <Card.Text> {t('Name')} : {firstName} {lastName} </Card.Text>
            <Card.Text> {t('Email Address')}  : </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Link className={'edit-link'} to='/useraccount/accountinfo'>{t('Edit')} </Link>
            <Link className={'password-link'}>{t('Edit Password')} </Link>
          </Card.Footer>
        </Card>

      </div>

      {/* 2 */}
      <div className='col-12 col-lg-5'>

        <Card >
          <Card.Header>{t('My Wish List')}</Card.Header>
          <Card.Body className='myCard'>
            {/* <Card.Title>Special title treatment</Card.Title> */}
            <Card.Text>
              {t('You have not set any Favorite items .')}
            </Card.Text>
          </Card.Body>
          <Card.Footer >
            <Link className={'edit-link'} to='/useraccount/fav'>{t('Edit')} </Link>

          </Card.Footer>
        </Card>
      </div>
    </div>


    <h2>{t('Address Book')}</h2><br />
    {/* 3 */}
    <div className='row'>

      <div className='col-12 col-lg-5'>
        <Card >
          <Card.Header>{t('My Orders')}</Card.Header>
          <Card.Body className='myCard' >
            {/* <Card.Title>Special title treatment</Card.Title> */}
            <Card.Text>
              {t('You have not set any orders yet')}
            </Card.Text>
          </Card.Body>
          <Card.Footer >
            <Link className={'edit-link'} to='/useraccount/addressbook'>{t('Edit orders')}</Link>
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
                {t('You have not set any Shipping Address')} </div>
            </Card.Text>
            <Card.Text className={(Fname === '') ? "emptyShippingDetails" : ''}>
              {/* You have not set a default shipping address . */}
              {t('Name')} : {Fname} {Lname}<br />
              {t('Street')} : {street}<br />
              {t('City')} : {city}<br />
              {t('Country')} : {country}<br />
              {t('Mobile Number')} : {phone}<br />
              {t('Zip/Postal Code')} : {zip}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Link className={'edit-link'} to='/useraccount/addressbook'>{t('Edit Address')}</Link>

          </Card.Footer>
        </Card>
      </div>



    </div>
    

  </>
  
}
