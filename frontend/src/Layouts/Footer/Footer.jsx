import React from "react";
import { Button, Row, Col, Container, Form } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import FooterLink from "../FooterLink/FooterLink";
import { useTranslation } from "react-i18next";

export default function ProjFooter() {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <div className="text-center " color="black" bgColor="light">
      <Container fluid className="p-4">
        <section className="mb-4 d-flex justify-content-center align-items-center">
          <a outline floating className="m-1" href="#!" role="button">
            <Icon.Facebook className="fs-2 text-warning m-2" />
          </a>

          <a outline floating className="m-1" href="#!" role="button">
            <Icon.Twitter className="fs-2 text-warning m-2" />
          </a>

          <a outline floating className="m-1" href="#!" role="button">
            <Icon.Google className="fs-2 text-warning m-2" />
          </a>

          <a outline floating className="m-1" href="#!" role="button">
            <Icon.Instagram className="fs-2 text-warning m-2" />
          </a>

          <a outline floating className="m-1" href="#!" role="button">
            <Icon.Linkedin className="fs-2 text-warning m-2" />
          </a>

          <a
            outline
            color="muted"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <Icon.Github className="fs-2 text-warning m-2" />
          </a>
        </section>

        <section className="d-block"></section>

        <section className="mb-4 d-block"></section>

        <section className="d-block">
          <Row>
            <FooterLink
              title={t("mobiles")}
              link1="#"
              link2="#"
              link3="#"
              link4="#"
            />

            <FooterLink
              title={t("tablets")}
              link1="#"
              link2="#"
              link3="#"
              link4="#"
            />

            <FooterLink
              title={t("labtop")}
              link1="#"
              link2="#"
              link3="#"
              link4="#"
            />

            <FooterLink
              title={t("watch")}
              link1="#"
              link2="#"
              link3="#"
              link4="#"
            />
          </Row>
        </section>
      </Container>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Copyright:
        <a className="text-warning" href="http://localhost:3000/">
          MyFire.com
        </a>
      </div>
    </div>
  );
}
/**
 *
 * 1 0
 * 11
 * 3
 * 9
 * 4
 * 1
 * 4
 * 2
 */
