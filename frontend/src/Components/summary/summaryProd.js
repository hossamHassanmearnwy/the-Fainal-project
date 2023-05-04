import React, { useEffect, useState } from "react";
import list from "../../data";
import Sec from "./../styleSec/style";
import Sum from "./../styleSec/sumCard";
import { useTranslation } from "react-i18next";
import summaryaxios from "./../../axiosConfig/axiosInstance";

export default function SummaryProd() {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    summaryaxios
      .get("/products/bylimit?limit=3&skip=2")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [TwoProducts, setTwoProducts] = useState([]);
  useEffect(() => {
    summaryaxios
      .get("/products/bylimit?limit=3&skip=8")
      .then((res) => {
        console.log(res.data);
        setTwoProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [TherProducts, setTherProducts] = useState([]);
  useEffect(() => {
    summaryaxios
      .get("/products/bylimit?limit=3&skip=2")
      .then((res) => {
        console.log(res.data);
        setTherProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <>
      <section className="row my-4">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <Sec head={t("Featured Product")} />
          {Products.map((props) => (
            <Sum props={props} key={props.id} />
          ))}
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <Sec head={t("Onsale Product")} />
          {TwoProducts.map((props) => (
            <Sum props={props} key={props.id} />
          ))}
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <Sec head={t("Top Rated Product")} />
          {TherProducts.map((props) => (
            <Sum props={props} key={props.id} />
          ))}
        </div>
      </section>
    </>
  );
}
