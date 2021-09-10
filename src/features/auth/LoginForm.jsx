import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import ModalWrapper from "../../app/common/modals/ModalWrapper";
import MyTextInput from "../../app/common/form/MyTextInput";
import { Button } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { signInUser } from "../../redux/auth/actions";
import { closeModal } from "../../redux/modal/action";

export default function LoginForm() {
  const dispatch = useDispatch();

  return (
    <ModalWrapper size="mini" header="Sign In To FourSquare">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string().required().email(),
          password: Yup.string().required(),
        })}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(signInUser(values));
          setSubmitting(false);
          dispatch(closeModal());
        }}
      >
        {({ isSubmitting, isValid, dirty }) => (
          <Form className="ui form">
            <MyTextInput name="email" placeholder="Email" />
            <MyTextInput
              name="password"
              placeholder="Password"
              type="password"
            />
            <Button
              loading={isSubmitting}
              disabled={!isValid || !dirty || isSubmitting}
              type="submit"
              fluid
              size="large"
              color="teal"
              content="Login"
            />
          </Form>
        )}
      </Formik>
    </ModalWrapper>
  );
}
