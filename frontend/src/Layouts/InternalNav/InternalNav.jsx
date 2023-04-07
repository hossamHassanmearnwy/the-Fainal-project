import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import * as Icon from 'react-bootstrap-icons';
import './InternalNav.css'

const InternalNav = ({size, setShow}) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#" className='col-2 mr-3 d-flex justify-content-start'>
          <span className="  text-warning"> My</span> 
            Fire 
          </Navbar.Brand>
        <Navbar.Toggle className="bg-warning border-light text-light" aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='justify-content-center col-10'>
        <InputGroup className='col-lg-3 col-md-6 w-50'>
      
      <Form.Control type="text" className='py-2' style={{"borderTopLeftRadius": "30px", "borderBottomLeftRadius": "30px"}}/>
      <Form.Control.Feedback>
        Search
      </Form.Control.Feedback>
      <InputGroup.Text className='bg-white border border-warning text-warning py-2' style={{"borderTopRightRadius": "30px", "borderBottomRightRadius": "30px"}}>Search</InputGroup.Text>
    </InputGroup>

        {/* <Button className='search' variant="outline-warning">Search</Button>
      </Form> */}

        <Nav
            className="me-auto my-2  ml-lg-3"
            style={{ maxHeight: '100px' }}
            navbarScroll
            >
              <div className=' d-flex justify-content-around'>
                <Nav.Link href="#action1">            
                  <Icon.ArrowRepeat className="fs-3 text-warning m-2"  />
                </Nav.Link>
                <Nav.Link href="#action2">
                  <Icon.Heart className="fs-3 text-warning m-2"  />
                </Nav.Link>
                <Nav.Link href="#action2" className="cart" onClick={()=>setShow(false)}>
                  <Icon.Cart className="fs-3 text-warning m-2"  />
                  <span>{size}</span>
                </Nav.Link>
              </div>
            
          </Nav>

        </Navbar.Collapse>

        
          
      </Container>
    </Navbar>
  );
}

export default InternalNav;