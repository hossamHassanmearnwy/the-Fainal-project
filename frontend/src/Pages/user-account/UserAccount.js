import React from 'react'
import "./userAccountStyle.css";
import  { NavLink, Outlet } from 'react-router-dom';//Navbar
// import { NavNavLink } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Dropdown from 'react-bootstrap/Dropdown';
// import SplitButton from 'react-bootstrap/SplitButton';



export default function UserAccount() {
    return (
        <>
            <div className="dropdown mx-5 my-5">
                <button className="dropbtn">Account Details</button>
                <div className="dropdown-content" >
                <a href="/useraccount/myaccount">My Account</a>
                <a href="/useraccount/myorders">My Orders</a>
                <a href="/useraccount/mywishlist">My Wish List</a>
                <a href="/useraccount/accountinfo">Account information</a>
                <a href="/useraccount/addressbook">Address Book</a>
                
                </div>
            </div>
                <div className='mx-5 my-5'>

                
                <div className='row ' >

                    <div className='col-3 res'>

                <ListGroup variant="flush">
                        <NavLink className={'links'} style={({ isActive }) => { if (isActive) { return { borderLeft: '3px solid #fed700' } } }}  to='/useraccount/myaccount'><ListGroup.Item className='nav'>My Account</ListGroup.Item></NavLink>
                            <NavLink className={'links'} style={({ isActive }) => { if (isActive) { return { borderLeft: '3px solid #fed700' } } }} to='/useraccount/myorders'><ListGroup.Item className='nav'>My Orders</ListGroup.Item></NavLink>
                            <NavLink className={'links'} style={({ isActive }) => { if (isActive) { return { borderLeft: '3px solid #fed700' } } }} to='/useraccount/mywishlist'><ListGroup.Item className='nav'>My Wish List</ListGroup.Item></NavLink>
                            <NavLink className={'links'} style={({ isActive }) => { if (isActive) { return { borderLeft: '3px solid #fed700' } } }} to='/useraccount/accountinfo'><ListGroup.Item className='nav'>Account information</ListGroup.Item></NavLink>
                            <NavLink className={'links'} style={({ isActive }) => { if (isActive) { return { borderLeft: '3px solid #fed700' } } }} to='/useraccount/addressbook'><ListGroup.Item className='nav'>Address Book</ListGroup.Item></NavLink>
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
