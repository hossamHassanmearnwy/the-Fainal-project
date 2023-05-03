import { React, useState, useEffect } from "react";
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
// import productsaxios from "./../../axiosConfig/axiosInstance";

export default function OffersSlider({ handleClick }) {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const [Products, setProducts] = useState([]);
  // useEffect(() => {
  //   productsaxios
  //     .get("/Products")
  //     .then((res) => {
  //       console.log(res.data);
  //       setProducts(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [setProducts]);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  const [windowSize, setWindowSize] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
  }, []);

  if (windowSize < 600 || windowSize == 600) {
    settings.slidesToShow = 1;
  }
  if (windowSize > 600 || windowSize == 700) {
    settings.slidesToShow = 2;
  }
  if (windowSize > 700 || windowSize == 900) {
    settings.slidesToShow = 3;
  }
  if (windowSize > 900 || windowSize == 1100) {
    settings.slidesToShow = 4;
  }
  if (windowSize > 1100) {
    settings.slidesToShow = 5;
  }

  // switch (windowSize){
  //   case 500 :
  //       settings.slidesToShow=1;
  //       break;
  // case 800:
  // settings.slidesToShow =2;
  // break;
  // // case 600:
  // case 500:
  // settings.slidesToShow=1;
  // break;
  // }

  return (
    <>
      {/* <div>
//       <h2>Width: {windowSize}</h2>

//       <h2>Height: {windowSize}</h2>
  //     </div> */}
      <div className="container ">
        <Sec header={t("Deals of The Day")} />
        <hr />
        <Slider {...settings}>
          {offersList.map((item) => (
            <div className="col-3">
              <Card className="offerCard">
                <div class="badge-overlay">
                  {/* <!-- Change Badge Position, Color, Text here--> */}
                  <span class="top-left badge orange">{t("Sale")}</span>
                </div>
                <Card.Img variant="top" src={item.img} className="slide-img" />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.desc}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>
                    {t("Brand")} : {item.brand}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span className="price">
                      {t("Price")} : {item.priceOnSale} {t("EGP")}
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span className="saleValue"> {item.saleValue}</span>{" "}
                    <span className="oldPrice">
                      {" "}
                      {item.oldPrice} {t("EGP")}
                    </span>
                  </ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  {/* <Card.Link
                    className="text-decoration-none addToCart"
                    onClick={() => handleClick(item)}
                  >
                    <BsCartCheckFill className="cartIcon" />
                    {t("Add to Cart")}
                  </Card.Link> */}
                  {localStorage.getItem("token") && (
                    <Card.Link
                      className="text-decoration-none addToCart"
                      onClick={() => handleClick(item)}
                    >
                      <BsCartCheckFill className="cartIcon" />
                      {t("Add to Cart")}
                    </Card.Link>
                  )}
                </Card.Body>  
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
