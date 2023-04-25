import React from 'react'
import "./userAccountStyle.css";
import  { NavLink, Outlet } from 'react-router-dom';//Navbar
import ListGroup from 'react-bootstrap/ListGroup';
import { useTranslation } from 'react-i18next';




export default function UserAccount() {
    const {t, i18n} = useTranslation();
  document.body.dir = i18n.dir();
    return (
        <>
            <div className="dropdown mx-5 my-5">
                <button className="dropbtn">{t('Account Details')}</button>
                <div className="dropdown-content " >
                <a href="/useraccount/myaccount">{t('My Account')}</a>
                <a href="/useraccount/myorders">{t('My Orders')}</a>
                <a href="/useraccount/mywishlist">{t('My Wish List')}</a>
                <a href="/useraccount/accountinfo">{t('Account information')}</a>
                <a href="/useraccount/addressbook">{t('Address Book')}</a>
                
                </div>
            </div>
                <div className='mx-5 my-5'>

                
                <div className='row ' >

                    <div className='col-3 res' >

                <ListGroup variant="flush" >
                            <NavLink className={'text-decoration-none links'} style={({ isActive }) => { if (isActive) { return { borderLeft: '3px solid #fed700' } } }} to='/useraccount/myaccount'><ListGroup.Item className={'nav'} >{t('Account Details')}</ListGroup.Item></NavLink>
                            <NavLink className={'text-decoration-none links'} style={({ isActive }) => { if (isActive) { return { borderLeft: '3px solid #fed700' } } }} to='/useraccount/myorders'><ListGroup.Item className='nav'>{t('My Orders')}</ListGroup.Item></NavLink>
                            <NavLink className={'text-decoration-none links'} style={({ isActive }) => { if (isActive) { return { borderLeft: '3px solid #fed700' } } }} to='/useraccount/fav'><ListGroup.Item className='nav'>{t('My Wish List')}</ListGroup.Item></NavLink>
                            <NavLink className={'text-decoration-none links'} style={({ isActive }) => { if (isActive) { return { borderLeft: '3px solid #fed700' } } }} to='/useraccount/accountinfo'><ListGroup.Item className='nav'>{t('Account information')}</ListGroup.Item></NavLink>
                            <NavLink className={'text-decoration-none links'} style={({ isActive }) => { if (isActive) { return { borderLeft: '3px solid #fed700' } } }} to='/useraccount/addressbook'><ListGroup.Item className='nav'>{t('Address Book')}</ListGroup.Item></NavLink>
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
