import React from 'react'


import Card from 'react-bootstrap/Card';
import { NavLink, Link } from 'react-router-dom';
import './CheckoutStyle.css'
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';



export default function Checkout({cart, setCart, handleChange, setShow}) {

    const Fname = useSelector((state) => state.editShippingAddress.Fname)
    const Lname = useSelector((state) => state.editShippingAddress.Lname)
    const phone = useSelector((state) => state.editShippingAddress.phoneNumber)
    const street = useSelector((state) => state.editShippingAddress.street)
    const city = useSelector((state) => state.editShippingAddress.city)
    const country = useSelector((state) => state.editShippingAddress.country)
    const zip = useSelector((state) => state.editShippingAddress.zip)
    const name = "fatma"
    return (<>
        <div>Chechout</div>
        <div className='row'>
            <div className=' col-12 col-lg-4'>
                <Card >
                    <Card.Header className='cardHeader' >SHIPPING ADDRESS</Card.Header>
                    <Card.Body className='myCard'>
                        {/* <Card.Title>Default Shipping Address</Card.Title> */}
                        {/* <Card.Text className={(Fname === '') ? '' : "emptyShippingDetails"} >
                        
                      </Card.Text> */}
                        <Card.Text>
                            {/* You have not set a default shipping address . */}
                            {('Name')} : {Fname} {Lname}<br />
                            {('Street')} : {street}<br />
                            {('City')} : {city}<br />
                            {('Country')} : {country}<br />
                            {('Mobile Number')} : {phone}<br />
                            {('Zip/Postal Code')} : {zip}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Link className={'edit-link'} to='/useraccount/addressbook'>{('Edit Address')}</Link>

                    </Card.Footer>
                </Card>


            </div>

            <div className=' col-12 col-lg-4'>
                <Card >
                    <Card.Header className='cardHeader'>SHIPPING METHODS</Card.Header>
                    <Card.Body className='myCard'>
                        {/* <Card.Title>Default Shipping Address</Card.Title> */}
                        <Card.Text className={(Fname === '') ? '' : "emptyShippingDetails"} >

                        </Card.Text>
                        <Card.Text className={(Fname === '') ? "emptyShippingDetails" : ''}>
                            {/* You have not set a default shipping address . */}
                            {('Name')} : {Fname} {Lname}<br />
                            {('Street')} : {street}<br />
                            {('City')} : {city}<br />
                            {('Country')} : {country}<br />
                            {('Mobile Number')} : {phone}<br />
                            {('Zip/Postal Code')} : {zip}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        {/* <Link className={'edit-link'} to='/useraccount/addressbook'>{('Edit Address')}</Link> */}

                    </Card.Footer>
                </Card>
            </div>

            <div className=' col-12 col-lg-4'>
                <Card >
                    <Card.Header className='cardHeader '>ORDER SUMMARY </Card.Header>
                    <Card.Body className='myCard'>
                        {/* <Card.Title>Default Shipping Address</Card.Title> */}
                        <Card.Text >

                        </Card.Text>
                        <Card.Text>
                            {/* You have not set a default shipping address . */}
                            { cart?.map((item)=>(
                                <img  src={item.img} alt="" width={90} height={90} />


                            ))}
                        
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        {/* <Link className={'edit-link'} to='/useraccount/addressbook'>{('Edit Address')}</Link> */}

                    </Card.Footer>
                </Card>
            </div>








        </div>


    </>
    )
}
