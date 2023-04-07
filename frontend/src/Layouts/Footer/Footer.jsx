import React from 'react';
import { Button ,Row, Col,Container, Form } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import FooterLink from '../FooterLink/FooterLink';

export default function ProjFooter() {
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
                  <strong>Sign up for our newsletter</strong>
                </p>
              </Col>

              <Col md='5' start>
                <Form.Control contrast type='email' label='Email address' className='mb-4 border-warning' />
              </Col>

              <Col size="auto">
                <Button outline type='submit'  className='mb-4 btn-warning text-white'>
                  Subscribe
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
            <FooterLink title='mobiles' link1='#' link2='#' link3='#' link4='#'/>

            <FooterLink title='tablets' link1='#' link2='#' link3='#' link4='#' />

            <FooterLink title='labtop' link1='#' link2='#' link3='#' link4='#' />

            <FooterLink title='watch' link1='#' link2='#' link3='#' link4='#'/>
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