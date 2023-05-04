import React, { useState, useEffect } from "react";
import list from "../../data";
import Sec from "./../styleSec/style";
import Sum from "./../styleSec/bestCard";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { useTranslation } from "react-i18next";
import Prodstop from "../../axiosConfig/axiosInstance";
import ProdmobTap from "../../axiosConfig/axiosInstance";
import Prodcomplabt from "../../axiosConfig/axiosInstance";
import ProdPS from "../../axiosConfig/axiosInstance";

export default function BestSec({ handleClick }) {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const [activeTab, setActiveTab] = useState("first");

  const handleTabClick = (eventKey) => {
    setActiveTab(eventKey);
  };

  const [Productstop, setProductstop] = useState([]);
  const [ProductsMobTab, setProductsMobTab] = useState([]);
  const [ProductsCompLabt, setProductsCompLabt] = useState([]);
  const [ProductsPS, setProductsPS] = useState([]);
  //limit=12&skip=22
  //limit=12&skip=34
  //limit=12&skip=46
  //limit=12&skip=46
  useEffect(() => {
    Prodstop.get("Summaryaxios")
      .then((res) => {
        setProductstop(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    ProdmobTap.get("/Products/bylimit?limit=3&skip=12")
      .then((res) => {
        setProductsMobTab(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    Prodcomplabt.get("/Products/Categories/6450df51cac8d03f6ebcc486")
      .then((res) => {
        setProductsCompLabt(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    ProdPS.get("/Products/Categories/6450dfeccac8d03f6ebcc48a")
      .then((res) => {
        setProductsPS(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Sec header={t("Popular Product")} />
      <Row
        className="col-lg-7 mb-0"
        style={{ position: "", left: "10%", top: "110px" }}
      >
        <Nav
          variant="pills"
          className="flex-column justify-content-end align-items-end"
          activeKey={activeTab}
          onSelect={handleTabClick}
        >
          <Nav.Item>
            <Nav.Link
              eventKey="first"
              className="bg-none border-none rounded-pill text-warning px-1 text-decoration-none"
              style={{
                border: activeTab === "first" ? "1px solid #ffc107" : "",
                background: activeTab === "first" ? "none" : "",
                outline: activeTab === "first" ? "none" : "",
              }}
            >
              {t("Top 10")}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="outline-none">
            <Nav.Link
              eventKey="second"
              className="bg-none border-none rounded-pill text-warning px-1 text-decoration-none"
              style={{
                border: activeTab === "second" ? "1px solid #ffc107" : "",
                background: activeTab === "second" ? "none" : "",
                outline: activeTab === "second" ? "none" : "",
              }}
            >
              {t("Mobiles & Tablets")}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="third"
              className="bg-none border-none rounded-pill text-warning px-1 text-decoration-none"
              style={{
                border: activeTab === "third" ? "1px solid #ffc107" : "",
                background: activeTab === "third" ? "none" : "",
                outline: activeTab === "third" ? "none" : "",
              }}
            >
              {t("Computers & Labtops")}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="fourth"
              className="bg-none border-none rounded-pill text-warning px-1 text-decoration-none"
              style={{
                border: activeTab === "fourth" ? "1px solid #ffc107" : "",
                background: activeTab === "fourth" ? "none" : "",
                outline: activeTab === "fourth" ? "none" : "",
              }}
            >
              {t("Power Supply")}
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Row>

      <section className="py-4 border-top">
        <Tab.Content>
          <Tab.Pane eventKey="first">
            <div className="row">
              {Productstop.map((best) => (
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <Sum best={best} key={best.id} handleClick={handleClick} />
                </div>
              ))}
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            <div className="row">
              {ProductsMobTab.map((best) => (
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <Sum best={best} key={best.id} handleClick={handleClick} />
                </div>
              ))}
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="third">
            <div className="row">
              {ProductsCompLabt.map((best) => (
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <Sum best={best} key={best.id} handleClick={handleClick} />
                </div>
              ))}
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="fourth">
            <div className="row">
              {ProductsPS.map((best) => (
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <Sum best={best} key={best.id} handleClick={handleClick} />
                </div>
              ))}
            </div>
          </Tab.Pane>
        </Tab.Content>
      </section>
    </Tab.Container>
  );
}
