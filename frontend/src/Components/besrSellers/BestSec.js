import React, { useState, useEffect } from "react";
import list from "../../data";
import Sec from "./../styleSec/style";
import Sum from "./../styleSec/bestCard";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { useTranslation } from "react-i18next";
import ProductBestSec from "../../axiosConfig/axiosInstance";

export default function BestSec({ handleClick }) {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const [activeTab, setActiveTab] = useState("first");

  const handleTabClick = (eventKey) => {
    setActiveTab(eventKey);
  };
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    ProductBestSec.get("/products?limit=6&skip=19")
      .then((res) => {
        setProducts(res.data);
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
        style={{ position: "relative", left: "43%", top: "110px" }}
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
              {list.map((best) => (
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <Sum best={best} key={best.id} handleClick={handleClick} />
                </div>
              ))}
            </div>
            <div className="row">
              {list.map((best) => (
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <Sum best={best} key={best.id} handleClick={handleClick} />
                </div>
              ))}
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            <div className="row">
              {list.map((best) => (
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <Sum best={best} key={best.id} handleClick={handleClick} />
                </div>
              ))}
            </div>
            <div className="row">
              {list.map((best) => (
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <Sum best={best} key={best.id} handleClick={handleClick} />
                </div>
              ))}
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="third">
            <div className="row">
              {list.map((best) => (
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <Sum best={best} key={best.id} handleClick={handleClick} />
                </div>
              ))}
            </div>
            <div className="row">
              {list.map((best) => (
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <Sum best={best} key={best.id} handleClick={handleClick} />
                </div>
              ))}
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="fourth">
            <div className="row">
              {list.map((best) => (
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <Sum best={best} key={best.id} handleClick={handleClick} />
                </div>
              ))}
            </div>
            <div className="row">
              {list.map((best) => (
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
