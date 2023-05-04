import { Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "./SliderStyle.css";
import { useTranslation } from "react-i18next";
import productsaxios from "./../../axiosConfig/axiosInstance";
import { useEffect, useState } from "react";

function Slider() {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    productsaxios
      .get("/products/bylimit?limit=5&skip=1")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const currentLanguage = localStorage.getItem("i18nextLng");
  return (
    <Carousel variant="dark">
      {Products.map((slide) => {
        return (
          <Carousel.Item>
            <div className="d-flex justify-content-around">
              <Carousel.Caption>
                <h2 className="mb-4 text-start">
                  {currentLanguage === "en"
                    ? slide.ItemNameEn
                    : slide.ItemNameAr}
                </h2>
                <p className="mb-4 text-start">{slide.Description}</p>
                <p className="mb-0 pb-0 text-start">{t("From")}</p>
                <h1 className="text-start mt-0 ms-0.1">${slide.Price}</h1>
                <div className="text-start">
                  <Button
                    outline
                    type="submit"
                    className="mt-4 btn-warning text-white"
                  >
                    {t("Start Buying")}
                  </Button>
                </div>
              </Carousel.Caption>
              <img className="w-50" src={slide.Images[0]} alt="slidadatabase" />
            </div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default Slider;
