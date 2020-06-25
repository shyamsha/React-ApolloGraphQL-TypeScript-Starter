import React, { FC, useState, Fragment } from "react";
import { Formik, FormikValues } from "formik";
import * as yup from "yup";
import { Input, Button, Checkbox, message } from "antd";
import styled from "styled-components";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { useMutation } from "react-apollo";
import { Login } from "../Mutations/login";
import { ApolloError } from "apollo-boost";
import ForgetModal from "./ForgetModal";

interface Props {}

const LoginForm: FC<Props> = (props: Props) => {
  const [login, { loading }] = useMutation(Login, {
    onCompleted(data) {
      localStorage.setItem("x-session-id", data.login.jwtToken);
      localStorage.setItem("user", JSON.stringify(data.login.user));
      window.location.href = "/campaigns";
    },
    onError(error: ApolloError) {
      errorNotification(error);
    },
  });
  const errorNotification = (error: ApolloError) => {
    message.error(`${error.message}`);
  };

  const loginHandler = (values: FormikValues) => {
    login({
      variables: {
        email: values.email,
        password: values.password,
      },
    });
  };

  const [
    isForgetPasswordModalVisible,
    setIsForgetPasswordModalVisible,
  ] = useState(false);

  const setForgetVisible = () => {
    setIsForgetPasswordModalVisible(!isForgetPasswordModalVisible);
  };

  const modalCancel = () => {
    setIsForgetPasswordModalVisible(false);
  };

  return (
    <Fragment>
      <Container>
        <div className="title-text">
          Adapt
          <SmallText>by Onet.io</SmallText>
          <Welcome>Welcome back. Please login to your account</Welcome>
        </div>
        <Formik
          initialValues={{
            email: "",
            password: "",
            keepMeLoggedIn: false,
          }}
          validationSchema={yup.object().shape({
            email: yup
              .string()
              .required("Email is Required.")
              .email("Invalid Email"),
            password: yup.string().required("Password is Required."),
          })}
          onSubmit={(values) => {
            loginHandler(values);
          }}
        >
          {({
            values,
            handleChange,
            errors,
            setFieldTouched,
            touched,
            isValid,
            handleSubmit,
          }) => (
            <FormContainer onSubmit={handleSubmit}>
              <div style={{ marginBottom: "2rem" }}>
                <StyledInput
                  name="email"
                  placeholder="Email Address"
                  value={values.email}
                  onChange={handleChange("email")}
                  onBlur={() => setFieldTouched("email")}
                  prefix={
                    <MailOutlined
                      style={{ color: "#d9dae0", fontSize: "1rem" }}
                    />
                  }
                />
                {touched.email && errors.email && (
                  <div className="error-text">{errors.email}</div>
                )}
              </div>
              <div style={{ marginBottom: "2rem" }}>
                <StyledInput
                  name="password"
                  value={values.password}
                  placeholder="Password"
                  type="password"
                  onChange={handleChange("password")}
                  onBlur={() => setFieldTouched("password")}
                  prefix={
                    <LockOutlined
                      style={{ color: "#d9dae0", fontSize: "1rem" }}
                    />
                  }
                />
                {touched.password && errors.password && (
                  <div className="error-text">{errors.password}</div>
                )}
              </div>
              <div style={{ marginBottom: "3.188em", display: "flex" }}>
                <Checkbox
                  style={{ paddingRight: "0.5rem" }}
                  name="keepMeLoggedIn"
                  // checked={values.keepMeLoggedIn}
                />
                <div className="subtitle-text">Remember Me</div>
                {JSON.stringify(values.keepMeLoggedIn)}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Button
                  style={{ padding: 0 }}
                  type="link"
                  className="forgot-password-button-text"
                  onClick={setForgetVisible}
                >
                  Forgot Password?
                </Button>
                <div />
                <LoginButton loading={loading} htmlType="submit" type="primary">
                  Login Securely
                </LoginButton>
              </div>
            </FormContainer>
          )}
        </Formik>
      </Container>
      {isForgetPasswordModalVisible ? (
        <ForgetModal modalCancel={modalCancel} />
      ) : null}
    </Fragment>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  width: 100%;
  padding: 3rem;

  .title-text {
    color: #1c2d41;
    font-family: "Open Sans";
    font-size: 2rem;
  }

  .subtitle-text {
    color: #848ca3;
    font-family: "Open Sans";
    font-size: 0.875rem;
    font-weight: 400;
  }

  .error-text {
    color: #fe5331;
    font-family: "Open Sans";
    font-size: 0.75rem;
    position: absolute;
    padding-top: 0.2rem;
    padding-left: 0.5rem;
  }

  .forgot-password-button-text {
    color: #848ca3;
    font-family: "Open Sans Semi Bold";
    font-size: 0.75rem;
    font-weight: 600;
  }
`;

const FormContainer = styled.form`
  padding-top: 3rem;
  padding-bottom: 3.188em;
`;

const StyledInput = styled(Input)`
  height: 3.5rem;
  border-radius: 0.25rem;
  border: 0.063rem solid #ecedf2;
  background-color: #ffffff;
  color: #848ca3;
  font-family: "Open Sans";
  font-size: 0.875rem;
  .ant-input:not(:first-child) {
    padding-left: 0.25rem;
    font-family: "Open Sans";
    font-size: 0.875rem;
    color: #848ca3;
  }
`;

const LoginButton = styled(Button)`
  height: 3rem;
  border-radius: 0.25rem;
  background-color: #0084ff;
  border-color: unset;
  box-shadow: none;

  i {
    color: #ffffff;
    font-size: 1rem;
  }

  span {
    color: #ffffff;
    font-family: "Open Sans";
    font-size: 0.875rem;
    font-weight: 700;
  }

  &:hover,
  &:focus {
    border-color: unset;
  }
`;

const SmallText = styled.span`
  color: #848ca3;
  font-family: "Open Sans Light";
  font-size: 1rem;
  font-weight: 300;
  line-height: 3rem;
  padding-left: 0.5rem;
`;

const Welcome = styled.div`
  color: #848ca3;
  font-family: "Open Sans";
  font-size: 0.875rem;
`;

export default LoginForm;
