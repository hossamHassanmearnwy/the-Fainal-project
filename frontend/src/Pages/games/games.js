import React from "react";
import MainSideBar from "./../../Components/MainSideBar/MainSideBar";

import { useEffect, useState } from "react";
import gamesCat from "./../../axiosConfig/axiosInstance";
import Cards from "./../../Components/Card/Cards";

export default function Games(handleClick) {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    gamesCat
      .get("/products/Categories/6450df8bcac8d03f6ebcc488")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setProducts]);
  return (
    <div>
      {" "}
      <div className="mx-5 my-5">
        <div className="row ">
          <div className="col-3 ">
            <MainSideBar />
          </div>
          <div className="col-9">
            <section className="py-5 border-top ">
              <div className="row">
                {Products.map((item) => (
                  <Cards item={item} key={item.id} handleClick={handleClick} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
