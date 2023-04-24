
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Form from "react-bootstrap/Form";
import "./registerStyle.css";
import { Button, Col, Container, Dropdown, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import useraxios from "./../../axiosConfig/axiosInstance";
import axios from "axios";

export default function Register() {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  // const [users, setUsers] = useState([]);
  // const [password, setpassword] = useState('');
  // const [email, setEmail] = useState('');
  // const [lastName, setlastName] = useState('');
  // const [firstName, setfirstName] = useState('');


  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      password: "",
      ConfirmPassword: "",
      Gender: "",
      Date: "",
    },
  });
  const [formData, setFormData] = useState({});
  // const onSubmit = (data) => {
  //   setFormData((data)); 
  // useEffect(() => {
  //   const postData = async () => {
  //     const options = {
  //       method: 'POST',
  //       url: 'http://localhost:3001/users/register',
  //       headers: {'Content-Type': 'application/json'},
  //       data: {
  //         firstName: 'qwe',
  //         lastName: 'xqwex',
  //         email: 'yuyuyu@gmail.com',
  //         password: '$2b$10$S6I0aINTLQmtWjEcdkWTluAU7ergwhbjsENFe5w9vdGwmPdYgEhYi',
  //         isAdmin: false,
  //         isActive: true
  //       }
  //     };
  //     console.log("test");

  //     axios.request(options).then(function (response) {
  //       console.log(response.data);
  //       console.log("Done");
  //     }).catch(function (error) {
  //       console.error(error);
  //     });



  //   };
  // })

  // };

  // try {
  //   const response = await useraxios.post('/users/register', formData);
  //   console.log(response.data);
  // } catch (error) {
  //   console.error(error);
  // }
  //       useraxios.post('/users/register')
  // .then((response) => {
  //   console.log((response.data));
  //   setFormData(response.data)
  // })
  // .catch((error) => {
  //   console.log(error);
  // });
  // }, [setFormData]);

  const onSubmit = async (data) => {
    console.log(data);
    try {
      await useraxios.post('/users/register', data);
      console.log('Data posted successfully');
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };




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
                  {...register("firstName", { required: true })}
                  placeholder={t('First Name')}
                />
                <p className="text-danger">
                  <errors>
                    {errors.firstName?.type === "required" && `${t('Name Is required')}`}
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
                  {...register("lastName", {
                    required: true,
                    minLength: 2,
                    // pattern: /^\S*$/,
                  })}
                  placeholder={t('Last Name')}
                />
                <p className="text-danger">
                  <errors>
                    {errors.lastName?.type === "required" &&
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
                  {...register("phoneNumber", {
                    required: true, pattern: /^01[0125][0-9]{8}$/,
                  },

                  )}
                  placeholder={t('Mobile Number')}




                />
                <p className="text-danger">
                  <errors>
                    {errors.phoneNumber?.type === "required" &&
                      `${t('Please specify a valid mobile number')}`}
                    {errors.phoneNumber?.type === "pattern" && `${t('Please specify a valid mobile number')}`}

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
                  {...register("email", {
                    required: true,
                    pattern: /^[a-zA-Z0-9]{3,}(@)(gmail|yahoo|outlook)(.com)$/,
                  })}
                  placeholder={t('Email Address')}
                />{" "}
                <p className="text-danger">
                  <errors>
                    {errors.email?.type === "required" && `${t('Email is Required')}`}
                    {errors.email?.type === "pattern" && `${t('Please enter a valid email address.')}`}
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
                  {...register("password", {
                    required: true,
                    minLength: 2,
                    pattern:
                      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                  })}
                  placeholder={t('Password')}
                />{" "}
                <p className="text-danger">
                  <errors>
                    {errors.password?.type === "required" &&
                      `${t('Passwrod is Required')}`}
                    {errors.password?.type === "pattern" && `${t('Password Pattern')}`
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
                      if (watch("password") !== val) {
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

////////

