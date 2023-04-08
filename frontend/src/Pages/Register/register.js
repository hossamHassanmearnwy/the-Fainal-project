import React from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.js";
import Form from "react-bootstrap/Form";
import "./registerStyle.css";
import { Button, Col, Container, Row } from "react-bootstrap";

export default function Register() {
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
      <h1>Create New Customer Account</h1>

      <Container className="my-auto">
        <Form
          onSubmit={handleSubmit(onSubmit)}
          className="d-flex justify-content-center flex-column align-items-between w-100"
        >
          <Row>
            <Col className="d-flex justify-content-center flex-column align-items-center">
              <h1>Personal Information</h1>
              <div>
                <Form.Label className="mt-3 font-weight-bold">
                  First Name
                </Form.Label>{" "}
                <br />
                <Form.Control
                  className="register-input "
                  {...register("Name", { required: true })}
                  placeholder="First Name"
                />
                <p className="text-danger">
                  <errors>
                    {errors.Name?.type === "required" && "Name Is required"}
                  </errors>
                </p>
              </div>
              <div>
                <Form.Label className="mt-3 font-weight-bold">
                  {" "}
                  Last Name
                </Form.Label>{" "}
                <br />
                <Form.Control
                  className=" register-input"
                  {...register("UserName", {
                    required: true,
                    minLength: 2,
                    pattern: /^\S*$/,
                  })}
                  placeholder="Last Name"
                />
                <p className="text-danger">
                  <errors>
                    {errors.UserName?.type === "required" &&
                      "UserName Is required"}
                    {errors.UserName?.type === "pattern" && "No Space Allowed"}
                  </errors>{" "}
                </p>
              </div>
              <div>
                <Form.Label className="mt-3 font-weight-bold">
                  {" "}
                  Date of Birth
                </Form.Label>{" "}
                <br />
                <Form.Control
                  type="date"
                  className="form-control register-input"
                />
              </div>
              <div>
                <Form.Label className="mt-3 font-weight-bold">
                  Mobile Number
                </Form.Label>{" "}
                <br />
                <Form.Control
                  className="register-input"
                  {...register("MobileNumber", { required: true })}
                  placeholder="Mobile Number"
                />
                <p className="text-danger">
                  <errors>
                    {errors.Name?.type === "required" &&
                      "Mobile Number Is required"}
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
              <h1>Sign-In Information</h1>
              <div>
                <Form.Label className="mt-3 font-weight-bold">Email</Form.Label>{" "}
                <br />
                <Form.Control
                  className="register-input border-warning "
                  {...register("Email", {
                    required: true,
                    pattern: /^[a-zA-Z]{3,30}(@)(gmail|yahoo|outlook)(.com)$/,
                  })}
                  placeholder="Email"
                />{" "}
                <p className="text-danger">
                  <errors>
                    {errors.Email?.type === "required" && "Email Is required"}
                    {errors.Email?.type === "pattern" && "Enter a Vaild Email"}
                  </errors>
                </p>
              </div>
              <div>
                <Form.Label className="mt-3 font-weight-bold">
                  Password
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
                  placeholder="Password"
                />{" "}
                <p className="text-danger">
                  <errors>
                    {errors.Password?.type === "required" &&
                      "Password Is required"}
                    {errors.Password?.type === "pattern" &&
                      "Password should Have : Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:"}
                  </errors>
                </p>
              </div>
              <div>
                <Form.Label className="mt-3 font-weight-bold">
                  Confirm Password
                </Form.Label>{" "}
                <br />
                <Form.Control
                  className="register-input"
                  type={"password"}
                  {...register("ConfirmPassword", {
                    required: true,
                    validate: (val) => {
                      if (watch("Password") !== val) {
                        return "Your passwords do no match";
                      }
                    },
                  })}
                  placeholder="Confirm Password"
                />
                <p className="text-danger">
                  <errors>
                    {errors.ConfirmPassword?.type === "required" &&
                      "this feild Is required"}
                    {errors.ConfirmPassword?.type === "validate" &&
                      "Your passwords do no match"}
                  </errors>{" "}
                </p>{" "}
              </div>
              <Button
                variant="warning"
                type="submit"
                className="register-input"
              >
                Create Account
              </Button>
              {/* <input type="submit" /> */}
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
}
