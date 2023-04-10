import React from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './MainSideBarStyle.css'
import Accordion from 'react-bootstrap/Accordion';
import { NavLink, Outlet } from 'react-router-dom';//Navbar
import ListGroup from 'react-bootstrap/ListGroup';
import { GiHamburgerMenu } from 'react-icons/gi'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { FaMobileAlt } from 'react-icons/fa'
import { CgGames } from 'react-icons/cg'
import { BiMobileAlt } from 'react-icons/bi'
///////


export default function MainSideBar() {
    return (<>
        {/* <div>MainSideBar</div> */}
        

        <Accordion className='allll'>

            
                <Accordion.Header><GiHamburgerMenu /> <div className='catTitle'>All Categories</div></Accordion.Header>
                <Accordion.Body>
                    <ListGroup variant="flush" >
                    <NavLink className={'links'} to='#'><ListGroup.Item className='mainNav'><FaMobileAlt /> {(' Mobiles & Tablets')}</ListGroup.Item>
                
                            </NavLink>
                    <NavLink className={'links'} to='/'><ListGroup.Item className='mainNav'><BiMobileAlt/>{(' Accessories')}</ListGroup.Item></NavLink>
                    <NavLink className={'links'} to='/'><ListGroup.Item className='mainNav'> <CgGames/>{(' Gaming')}</ListGroup.Item></NavLink>
                    <NavLink className={'links'} to='/'><ListGroup.Item className='mainNav'><HiOutlineDesktopComputer />{(' Computers')}</ListGroup.Item></NavLink>
                        <NavLink className={'links'} to='/'><ListGroup.Item className='mainNav'>{('Power Supply')}</ListGroup.Item></NavLink>
                        <NavLink className={'links'}  to='/'><ListGroup.Item className='mainNav'>{('Offers')}</ListGroup.Item></NavLink>
                    </ListGroup>
                </Accordion.Body>
          
        </Accordion>

      
    </>
    )
}
