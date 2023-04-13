import React from "react";
import "./favs.css";
import Card from "react-bootstrap/Card";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorirts } from "../../Store/actions/addFav";
export default function Fav() {

  let favorites = useSelector((state) => state.favorites.fav);
  const dispatch = useDispatch();

  const handleRemoveFav = (el) => {
    dispatch(removeFavorirts(el));
  };

  const {t, i18n} = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <div className="container">


    

{favorites.map((el) => {
        return (
          <div key={el.id}>
         
      <div>
        {" "}
        <h3 className="hfav">
          {" "}
          {t('your favs')}{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="red"
            class="bi bi-heart-fill"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
            />
          </svg>{" "}
        </h3>
      </div>
      <br />
      <div className="container" id="fav">
        <Card className="col-4" id="favCard">
          <Card.Img variant="top" src="/1.jpg" className="cardImg" />
          <Card.Body>
            <Card.Title>{t('Card Title')}</Card.Title>
          </Card.Body>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="red"
            className="myHeart"
            class="bi bi-heart-fill"
            viewBox="0 0 16 16"
            onClick={() => {
              handleRemoveFav(el.id);
            }}
          >
            <path
              fill-rule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
            />
          </svg>
        </Card>
       </div> 
          </div>
        );
      })}

    </div>
  );
}
