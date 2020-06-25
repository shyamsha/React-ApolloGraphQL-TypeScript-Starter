import React, { FC } from "react";
import { Button, Col, Row, message } from "antd";
import { Formik, FormikValues } from "formik";
import * as yup from "yup";
import { useMutation } from "@apollo/react-hooks";
import { Forget } from "../Mutations/forget";
import { history } from "../../../navigator/History";
import { RouteEnums } from "../../../navigator/routeEnums";
import { ApolloError } from "apollo-boost";

interface Props {
  onNavigateToForgotPassword: (route: string, state?: any) => void;
}

const ForgotForm: FC<Props> = (props: Props) => {
  const [forgetPassword, { loading }] = useMutation(Forget, {
    onCompleted(data) {
      if (data.forgetPassword) {
      }
    },
    onError(error: ApolloError) {
      errorNotification(error);
    },
  });

  const errorNotification = (error: ApolloError) => {
    message.error(`${error.message}`);
  };

  const forgetHandle = (values: FormikValues) => {
    forgetPassword({
      variables: { email: values.registeredEmail },
    });
  };

  return (
    <div>
      <h2 className="title">Forgot Password?</h2>
      <p>
        Enter your registered email and we will share a reset password link.
      </p>
      <div>
        <Formik
          initialValues={{
            registeredEmail: "",
          }}
          validationSchema={yup.object().shape({
            registeredEmail: yup
              .string()
              .email()
              .required("Email is Required."),
          })}
          validateOnChange={true}
          validateOnBlur={true}
          onSubmit={(values) => forgetHandle(values)}
        >
          {({
            values,
            handleChange,
            errors,
            setFieldTouched,
            touched,
            isValid,
            handleSubmit,
            setFieldValue,
          }) => (
            <div>
              <div className="materialInput">
                <div className="group mb-100">
                  <input
                    className="login-screen-input"
                    type="text"
                    name="registeredEmail"
                    onBlur={() => setFieldTouched("registeredEmail")}
                    onChange={handleChange("registeredEmail")}
                    required
                  />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Registered Email</label>
                </div>
                {touched.registeredEmail && errors.registeredEmail && (
                  <div style={{ color: "red", fontSize: "0.75rem" }}>
                    {errors.registeredEmail}
                  </div>
                )}
              </div>
              <Row justify="space-between" className="pb-80">
                <Col className="text-left">
                  <Button
                    type="link"
                    onClick={() => history.push(`${RouteEnums.LOGIN}`)}
                  >
                    Cancel
                  </Button>
                </Col>
                <Col className="text-left">
                  <Button
                    className="forgot-continue-btn"
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                  >
                    Submit
                  </Button>
                </Col>
              </Row>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default ForgotForm;
