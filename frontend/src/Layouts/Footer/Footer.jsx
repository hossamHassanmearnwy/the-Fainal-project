import React from 'react';
import { Button ,Row, Col,Container, Form } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import FooterLink from '../FooterLink/FooterLink';
import { useTranslation } from 'react-i18next';

export default function ProjFooter() {
  const [translate, i18n] = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <div className='text-center ' color='black' bgColor='light'>
      <Container fluid className='p-4'>
        <section className='mb-4 d-flex justify-content-center align-items-center'>
        <a outline  floating className='m-1' href='#!' role='button'>
          <Icon.Facebook className="fs-2 text-warning m-2"  />

        </a>

          <a outline floating className='m-1' href='#!' role='button'>
            <Icon.Twitter className="fs-2 text-warning m-2"  />

          </a>

          <a outline  floating className='m-1' href='#!' role='button'>
            <Icon.Google className="fs-2 text-warning m-2" />

          </a>

          <a outline  floating className='m-1' href='#!' role='button'>
            <Icon.Instagram className="fs-2 text-warning m-2" />

          </a>

          <a outline  floating className='m-1' href='#!' role='button'>
            <Icon.Linkedin className="fs-2 text-warning m-2" />

          </a>

          <a outline color="muted" floating className='m-1' href='#!' role='button'>
            <Icon.Github className="fs-2 text-warning m-2" />

          </a>
        </section>

        <section className='d-block'>
          <form action=''>
            <Row className='d-flex justify-content-center'>
              <Col size="auto">
                <p className='pt-2'>
                  <strong>{translate('Sign up for our newsletter')}</strong>
                </p>
              </Col>

              <Col md='5' start>
                <Form.Control contrast type='email' label='Email address' className='mb-4 border-warning' />
              </Col>

              <Col size="auto">
                <Button outline type='submit'  className='mb-4 btn-warning text-white'>
                  {translate('Subscribe')}
                </Button>
              </Col>
            </Row>
          </form>
        </section>

        <section className='mb-4 d-block'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
            voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </section>

        <section className='d-block'>
          <Row>
            <FooterLink title={translate('mobiles')} link1='#' link2='#' link3='#' link4='#'/>

            <FooterLink title={translate('tablets')}  link1='#' link2='#' link3='#' link4='#' />

            <FooterLink title={translate('labtop')}  link1='#' link2='#' link3='#' link4='#' />

            <FooterLink title={translate('watch')}  link1='#' link2='#' link3='#' link4='#'/>
          </Row>
        </section>
      </Container>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className='text-warning' href='https://myFire.com/'>
          MyFire.com
        </a>
      </div>
    </div>
  );
}