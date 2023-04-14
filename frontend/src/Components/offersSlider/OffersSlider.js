import React from 'react'
import Sec from './../styleSec/style';
import "./OffersSliderStyle.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from './../Card/Cards';
import list from '../../data';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import offersList from './../../offersData';
import { Icon, Badge } from "rsuite";
import { BsCartCheckFill  } from "react-icons/bs";



export default function OffersSlider() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };
    return (<>
        <div className='container '>
            <Sec header='Deals of The Day' />
            <hr />
                <Slider {...settings}>
                    
                        {offersList.map((item)=>(
                        <div className='col-3'>
                                <Card  className='offerCard'>
                                    <div class="badge-overlay">
                                        {/* <!-- Change Badge Position, Color, Text here--> */}
                                        <span class="top-left badge orange">SALE</span>
                                    </div>
                                    
                                    <Card.Img variant="top" src={item.img} className='slide-img'/>
                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                    {/* <Badge content="NEW"></Badge> */}
                                        <Card.Text>
                                        {item.desc}
                                        </Card.Text>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item>Brand : {item.brand}</ListGroup.Item>
                                        <ListGroup.Item>Price : {item.price}</ListGroup.Item>
                                    </ListGroup>
                                    <Card.Body>
                                        <Card.Link href="cart"><BsCartCheckFill className='cartIcon' /> Add To Cart</Card.Link>
                                        
                                    </Card.Body>
                                </Card>
                            
                            </div>
                        ))}
                    </Slider>
                
        </div>
    </>
    )
}
