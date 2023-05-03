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
import { useTranslation } from 'react-i18next';
///////


export default function MainSideBar() {
    const {t, i18n} = useTranslation();
    document.body.dir = i18n.dir();
    return (<>
        {/* <div>MainSideBar</div> */}
        

        <Accordion className='all' defaultActiveKey="0" flush>

            <Accordion.Item eventKey="0">
                <Accordion.Header><GiHamburgerMenu /> <div className='catTitle'>{t('All Categories')}</div></Accordion.Header>
                <Accordion.Body>
                    <ListGroup variant="flush" >
                    <NavLink className={'text-decoration-none'} to='/Mobiles'><ListGroup.Item className='mainNav'><FaMobileAlt /> {t('Mobiles & Tablets')}</ListGroup.Item></NavLink>
                    <NavLink className={'text-decoration-none'} to='/Accessories'><ListGroup.Item className='mainNav'><BiMobileAlt/> {t('Accessories')}</ListGroup.Item></NavLink>
                    <NavLink className={'text-decoration-none'} to='/Games'><ListGroup.Item className='mainNav'> <CgGames/> {t('Gaming')}</ListGroup.Item></NavLink>
                    <NavLink className={'text-decoration-none'} to='/Computers'><ListGroup.Item className='mainNav'><HiOutlineDesktopComputer /> {t('Computers')}</ListGroup.Item></NavLink>
                    <NavLink className={'text-decoration-none'} to='/Supply'><ListGroup.Item className='mainNav'>{t('Power Supply')}</ListGroup.Item></NavLink>
                    <NavLink className={'text-decoration-none'}  to='/Offers'><ListGroup.Item className='mainNav'>{t('Offers')}</ListGroup.Item></NavLink>
                    </ListGroup>
                </Accordion.Body>
          </Accordion.Item>
        </Accordion>

      
    </>
    )
}
