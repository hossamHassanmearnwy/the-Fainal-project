import React from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Form from "react-bootstrap/Form";
import "./registerStyle.css";
import { Button, Col, Container, Dropdown, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export default function Register() {
  const {t, i18n} = useTranslation();
  document.body.dir = i18n.dir();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Name: "",
      UserName: "",
      MobileNumber: "",
      Email: "",
      Password: "",
      ConfirmPassword: "",
      Gender: "",
    },
  });
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <h1>{t('Create New Customer Account')}</h1>

      <Container className="my-auto">
        <Form
          onSubmit={handleSubmit(onSubmit)}
          className="d-flex justify-content-center flex-column align-items-between w-100"
        >
          <Row>
            <Col className="d-flex justify-content-center flex-column align-items-center">
              <h1>{t('Personal Information')}</h1>
              <div>
                <Form.Label className="mt-3 font-weight-bold">
                  {t('First Name')}
                </Form.Label>{" "}
                <br />
                <Form.Control
                  className="register-input "
                  {...register("Name", { required: true })}
                  placeholder={t('First Name')}
                />
                <p className="text-danger">
                  <errors>
                    {errors.Name?.type === "required" && `${t('Name Is required')}`}
                  </errors>
                </p>
              </div>
              <div>
                <Form.Label className="mt-3 font-weight-bold">
                  {" "}
                  {t('Last Name')}
                </Form.Label>{" "}
                <br />
                <Form.Control
                  className=" register-input"
                  {...register("UserName", {
                    required: true,
                    minLength: 2,
                    // pattern: /^\S*$/,
                  })}
                  placeholder={t('Last Name')}
                />
                <p className="text-danger">
                  <errors>
                    {errors.UserName?.type === "required" &&
                      `${t('LastName Is required')}`}
                    {/* {errors.UserName?.type === "pattern" && "No Space Allowed"} */}
                  </errors>{" "}
                </p>
              </div>
              <div>
                <Form.Label className="mt-3 font-weight-bold">
                  {" "}
                  {t('Date of Birth')}
                </Form.Label>{" "}
                <br />
                <Form.Control
                  type="date"
                  className="form-control register-input"
                />
              </div>
              <div>
                <Form.Label className="mt-3 font-weight-bold">
                  {t('Mobile Number')}
                </Form.Label>{" "}
                <br />
                <Form.Control
                  className="register-input"
                  {...register("MobileNumber", { required: true })}
                  placeholder={t('Mobile Number')}


                />
                <p className="text-danger">
                  <errors>
                    {errors.MobileNumber?.type === "required" &&
                      `${t('Please specify a valid mobile number')}`}
                  </errors>
                </p>
              </div>
              {/* <div>
                <Form.Label className="mt-3 font-weight-bold">
                  Gender
                </Form.Label>
                <br />
                <Dropdown>
                  <Dropdown.Toggle className="register-input bg-warning border-warning">
                    Select Gender
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item value="Male">Male</Dropdown.Item>
                    <Dropdown.Item value="Female">Female</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
            
              </div> */}
            </Col>
            <Col className="d-flex justify-content-center flex-column align-items-center">
              <h1>{t('Sign-In Information')}</h1>
              <div>
                <Form.Label className="mt-3 font-weight-bold">{t('Email Address')}</Form.Label>{" "}
                <br />
                <Form.Control
                  className="register-input border-warning "
                  {...register("Email", {
                    required: true,
                    pattern: /^[a-zA-Z]{3,30}(@)(gmail|yahoo|outlook)(.com)$/,
                  })}
                  placeholder={t('Email Address')}
                />{" "}
                <p className="text-danger">
                  <errors>
                    {errors.Email?.type === "required" && `${t('Email is Required')}`}
                    {errors.Email?.type === "pattern" && `${t('Please enter a valid email address.')}`}
                  </errors>
                </p>
              </div>
              <div>
                <Form.Label className="mt-3 font-weight-bold">
                  {t('Password')}
                </Form.Label>{" "}
                <br />
                <Form.Control
                  className="register-input"
                  type={"password"}
                  {...register("Password", {
                    required: true,
                    minLength: 2,
                    pattern:
                      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                  })}
                  placeholder={t('Password')}
                />{" "}
                <p className="text-danger">
                  <errors>
                    {errors.Password?.type === "required" &&
                      `${t('Passwrod is Required')}`}
                    {errors.Password?.type === "pattern" && `${t('Password Pattern')}`
                  }                  </errors>
                </p>
              </div>
              <div>
                <Form.Label className="mt-3 font-weight-bold">
                  {t('Confirm Password')}
                </Form.Label>{" "}
                <br />
                <Form.Control
                  className="register-input"
                  type={"password"}
                  {...register("ConfirmPassword", {
                    required: true,
                    validate: (val) => {
                      if (watch("Password") !== val) {
                        return `${t('Please make sure your passwords match.')}`;
                      }
                    },
                  })}
                  placeholder={t('Confirm Password')}
                />
                <p className="text-danger">
                  <errors>
                    {errors.ConfirmPassword?.type === "required" &&
                      `${t('Passwrod is Required')}`}
                    {errors.ConfirmPassword?.type === "validate" &&
                      `${t('Please make sure your passwords match.')}`}
                  </errors>{" "}
                </p>{" "}
              </div>
              <Button
                variant="warning"
                type="submit"
                className="register-input"
              >
                {t('Create Account')}
              </Button>
              {/* <input type="submit" /> */}
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
}
