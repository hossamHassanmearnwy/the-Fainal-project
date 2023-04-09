import React from 'react'
import "./userAccountStyle.css";
import  { NavLink, Outlet } from 'react-router-dom';//Navbar
import ListGroup from 'react-bootstrap/ListGroup';
import { useTranslation } from 'react-i18next';




export default function UserAccount() {
    const [translate, i18n] = useTranslation();
  document.body.dir = i18n.dir();
    return (
        <>
            <div className="dropdown mx-5 my-5">
                <button className="dropbtn">{translate('Account Details')}</button>
                <div className="dropdown-content" >
                <a href="/useraccount/myaccount">{translate('My Account')}</a>
                <a href="/useraccount/myorders">{translate('My Orders')}</a>
                <a href="/useraccount/mywishlist">{translate('My Wish List')}</a>
                <a href="/useraccount/accountinfo">{translate('Account information')}</a>
                <a href="/useraccount/addressbook">{translate('Address Book')}</a>
                
                </div>
            </div>
                <div className='mx-5 my-5'>

                
                <div className='row ' >

                    <div className='col-3 res'>

                <ListGroup variant="flush">
                        <NavLink className={'links'} style={({ isActive }) => { if (isActive) { return { borderLeft: '3px solid #fed700' } } }}  to='/useraccount/myaccount'><ListGroup.Item className='nav'>{translate('Account Details')}</ListGroup.Item></NavLink>
                            <NavLink className={'links'} style={({ isActive }) => { if (isActive) { return { borderLeft: '3px solid #fed700' } } }} to='/useraccount/myorders'><ListGroup.Item className='nav'>{translate('My Orders')}</ListGroup.Item></NavLink>
                            <NavLink className={'links'} style={({ isActive }) => { if (isActive) { return { borderLeft: '3px solid #fed700' } } }} to='/useraccount/mywishlist'><ListGroup.Item className='nav'>{translate('My Wish List')}</ListGroup.Item></NavLink>
                            <NavLink className={'links'} style={({ isActive }) => { if (isActive) { return { borderLeft: '3px solid #fed700' } } }} to='/useraccount/accountinfo'><ListGroup.Item className='nav'>{translate('Account information')}</ListGroup.Item></NavLink>
                            <NavLink className={'links'} style={({ isActive }) => { if (isActive) { return { borderLeft: '3px solid #fed700' } } }} to='/useraccount/addressbook'><ListGroup.Item className='nav'>{translate('Address Book')}</ListGroup.Item></NavLink>
                </ListGroup>
                    </div>
                    
                <div className='col-9'>
                    <Outlet />
                </div>
        </div>
            </div>
        </>
    )
}
