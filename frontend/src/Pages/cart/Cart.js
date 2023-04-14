import React,{useState} from 'react';
import { useEffect } from 'react';
import "./cart.css";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { BsXLg } from "react-icons/bs";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useTranslation } from 'react-i18next';
import Nav from "react-bootstrap/Nav";
import Checkout from './../Checkout/Checkout';


const Cart = ({cart, setCart, handleChange, setShow}) => {
  //////////////////////
  let [check, setCheck] = useState(
    JSON.parse(localStorage.getItem("checkout")) || [] // local storge to get cart
  );

  useEffect(() => {
    localStorage.setItem("checkout", JSON.stringify(check)); // local storge to save cart in it

    console.log(`Saved ${check.length} items to localstorage`);
  }, [cart]);
  /////////////////////
    const [price, setPrice] = useState(0);
    const {t, i18n} = useTranslation();
    document.body.dir = i18n.dir();
    const handlePrice = ()=>{
        let ans = 0;
        cart.map((item)=>(
            ans += item.amount * item.price
        ))
        setPrice(ans);
    }

    const handleRemove = (id) =>{
        const arr = cart.filter((item)=>item.id !== id);
        setCart(arr);
        // handlePrice();
    }

    useEffect(()=>{
        handlePrice();
    })

    
  return (
    
    <div className='container-fluid'>
      <div className='container my-5'>
      <h1 className='text-center'>
        {t('Cart')}</h1>
    <Table className='my-5'>
      <thead>
        <tr style={{"color":"#aca7a7" , "fontWeight":"lighter"}}>
        <th> </th>
          <th className='text-start'>{t('Product')}</th>
          <th>{t('Quantity')}</th>
          <th>{t('Price')}</th>
          
        </tr>
      </thead>
      {
      cart?.map((item)=>(
      <tbody>
      
        <tr>
        <td className='text-center'>
          <BsXLg className='mt-4' onClick={()=>handleRemove(item.id)} role="button"></BsXLg>
          </td>
          <td className='text-start'>
          
            <img className='imgCart ' src={item.img} alt="" width={90} height={90} />
            <span className='tit ms-4'>{item.title}</span>
            </td>
          <td>
            <div className='border border-warning rounded-pill my-4 w-50'>
                <div className='text-center fs-5'>
                <span className='amount me-lg-4'>{item.amount}</span>
                <span className='border-none' onClick={()=>handleChange(item, +1)} role="button"> + </span>
                <span className='border-none' onClick={()=>handleChange(item, -1)} role="button"> - </span>
                </div>
            </div>
</td>
          <td>
          <p className='my-4'>{item.price}</p>
          </td>
          
        </tr>
        
        
      
      </tbody>
))}
    

</Table>


<div className='row my-5 pt-3 d-flex justify-content-center align-items-center'>
<div className='inp col-lg-6 col-md-12'>
    <InputGroup className='mb-4'>
      
      <Form.Control type="text" className='py-2' style={{"borderTopLeftRadius": "30px", "borderBottomLeftRadius": "30px"}}/>
      <Form.Control.Feedback>
        {t('Coupon Code')}
      </Form.Control.Feedback>
      <InputGroup.Text className='bg-dark text-light py-2'
      style={{"borderTopRightRadius": "30px", "borderBottomRightRadius": "30px"}}>
                {t('Apply Coupon')}
</InputGroup.Text>
    </InputGroup>
    </div>
    <div className='gBtn col-lg-6 col-md-12 d-flex align-items-end justify-content-end '>
    <Nav>
    <Nav.Link href="/home"><Button variant="dark rounded-pill py-2 px-3" onClick={()=>setShow(true)}>{t('Go to Home Page')}</Button></Nav.Link>
              <Nav.Link href="/checkout"><Button className='checkout' variant="warning rounded-pill py-2 px-4">{t('Proceed to Chekout')}</Button></Nav.Link>
    </Nav>
    </div>
    </div>




  <div className='row mt-4'>

    <div className='col-lg-6'></div>
    <div className='col-lg-6'>


    <Table className='bg-white'>
      <thead>
        <tr>
          <th className='fs-2 border-bottom border-warning text-start' colSpan={3}>{t('Cart Total')}</th>
          {/* <th> </th>
          <th> </th> */}
          <th className='fs-2 border-bottom border-warning'> </th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td colSpan={3} className='py-3 text-start'>{t('Cart Subtotal')}</td>
          {/* <td colSpan={2}>Larry the Bird</td> */}
          <td className='py-3'>${price}</td>
        </tr>
        <tr>
        <td className='py-3 text-start' colSpan={3}>{t('Shipping')}</td>
          {/* <td colSpan={2}>Larry the Bird</td> */}
          <td className='py-3'>0</td>
        </tr>
        <tr>
          <td className='py-3 text-start' colSpan={3}>{t('Total')}</td>
          {/* <td>Larry the Bird</td> */}
          <td className='py-3'>${price}</td>
        </tr>
      </tbody>
    </Table>


    </div>


  </div>






  </div>






  </div>

    
      )

    
    }





export default Cart ;