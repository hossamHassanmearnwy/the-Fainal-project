import React from 'react';
import MainSideBar from '../../Components/MainSideBar/MainSideBar';
import Cards from '../../Components/Card/Cards';
import list from '../../data';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

export default function CategoryPage({handleClick}) {
  return (
    <section className='container my-4'>
    <div className='row'>
    <div className='col-lg-3'>
    <MainSideBar/>
    <div className='my-5'>
    <h4 className='text-start mb-4 text-secondary'>Filter</h4>





    <Accordion>
      <Accordion.Item eventKey="0" className='border-0 border-bottom'>
        <Accordion.Header>Price</Accordion.Header>
        <Accordion.Body>
        <Form.Label>Range</Form.Label>
        <Form.Range />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className='border-0 border-bottom'>
        <Accordion.Header>Brand</Accordion.Header>
        <Accordion.Body>
        <Col sm={10}>
        <Form.Check
          type="radio"
          label="Samsung"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="Nuovo"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="Apple"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
      </Col>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className='border-0 border-bottom'>
        <Accordion.Header>Model Year</Accordion.Header>
        <Accordion.Body>
        <Col sm={10}>
        <Form.Check
          type="radio"
          label="2020"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="2021"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="2022"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
      </Col>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" className='border-0 border-bottom'>
        <Accordion.Header>Color</Accordion.Header>
        <Accordion.Body>
        <Col sm={10}>
        <Form.Check
          type="radio"
          label="Black"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="White"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="Blue"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
      </Col>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>




    </div>
    </div>
    <div className='col-lg-9'>
    <h5 className='text-start text-secondary'>Category name</h5>
    <div className='row'>
        {
            list.map((item)=>(
                <Cards item={item} key={item.id} handleClick={handleClick} />
            ))
        }
        </div>
        

    </div>
    </div>
    </section>
  )
}
