import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

import axiosWithAuth from "../axiosWithAuth";

const Login = () => {
  return (
    <Form>
      <Field type="text" name="username" placeholder="username" />
      <Field type="password" name="password" placeholder="password" />
      <Field as="select" name="department">
        <option value="">Choose Department</option>
        <option value="client">Client</option>
        <option value="instructor">Instructor</option>
      </Field>
      <button type="submit">Submit</button>
      <Link to="/signup">Click Here to Sign up</Link>
    </Form>
  );
};

const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password, department }) {
    return {
      username: username || "",
      password: password || "",
      department: department || ""
    };
  },
  //==================Validation Schema==============
  validationSchema: Yup.object().shape({
    username: Yup.string().required("username is required"),
    password: Yup.string().required("password is required"),
    department: Yup.string().required("Department is required")
  }),
  //==========End of Validation Schema=======

  handleSubmit(values, { resetForm, props }) {
    axiosWithAuth()
      .post("/login", {
        username: values.username,
        password: values.password,
        department: values.department
      })
      .then(res => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", res.data.message);

        props.history.push("/dashboard");
      })
      .catch(err => console.log(err.message));

    resetForm();
  }
})(Login);

export default FormikLoginForm;
