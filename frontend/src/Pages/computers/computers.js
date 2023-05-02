import productsaxios from "./../../axiosConfig/axiosInstance";
import React, { useEffect, useState } from "react";

export default function Computers() {
    const [Products, setProducts] = useState([]);
Products.filter(function(computer){
    return computer
})
    useEffect(() => {
        productsaxios
          .get("/Products")
          .then((res) => {
            console.log(res.data);
            setProducts(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);


  return (
    <div>computers</div>
  )
}
