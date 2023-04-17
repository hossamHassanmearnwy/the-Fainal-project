import { React, useState,useEffect } from "react";
import Sec from "./../styleSec/style";
import "./OffersSliderStyle.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import offersList from "./../../offersData";
import { BsCartCheckFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";


export default function OffersSlider({ handleClick }) {
  const settings={
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear"
  }

  const [windowSize, setWindowSize] = useState(
    window.innerWidth,
  );
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener('resize', handleWindowResize);
  }, []);
  
  switch (windowSize){
        case 1000:
        settings.slidesToShow=3;
        break;
        case 800:
        settings.slidesToShow =2;
        break;
        case 600:
        case 500:
        settings.slidesToShow=1;
        break;
      }
    
  return (<>
    {/* <div>
      <h2>Width: {windowSize}</h2>

      <h2>Height: {windowSize}</h2>
    </div> */}
    <div className='container ' >
      <Sec header='Deals of The Day' />
      <hr />
      <Slider {...settings}>
        {offersList.map((item) => (
          <div className='col-3'>
            <Card className='offerCard'>
              <div class="badge-overlay">
                {/* <!-- Change Badge Position, Color, Text here--> */}
                <span class="top-left badge orange">SALE</span>
              </div>

              <Card.Img variant="top" src={item.img} className='slide-img' />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  {item.desc}
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Brand : {item.brand}</ListGroup.Item>
                <ListGroup.Item>Price : {item.price}</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link onClick={() => handleClick(item)}><BsCartCheckFill className='cartIcon' /> Add To Cart</Card.Link>

              </Card.Body>
            </Card>

          </div>
        ))}
      </Slider>

    </div>
    
  </>
  
  );
}
