import React from 'react'
import { Col } from 'react-bootstrap';

function FooterLink({title , link1 , link2, link3, link4}) {
  return (
    <Col lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>{title}</h5>

            <ul className='list-unstyled mb-0'>
            <li>
                <a href={link1} className='text-black'>
                {link1}
                </a>
            </li>
            <li>
                <a href={link2} className='text-black'>
                {link2}
                </a>
            </li>
            <li>
                <a href={link3} className='text-black'>
                {link3}
                </a>
            </li>
            <li>
                <a href={link4} className='text-black'>
                {link4}
                </a>
            </li>
            </ul>
        </Col>
  )
}

export default FooterLink