import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

import axiosWithAuth from "../axiosWithAuth";

const Signup = () => {
  return (
    <Form>
      <Field type="text" name="firstName" placeholder="First Name" />
      <Field type="text" name="lastName" placeholder="Last Name" />
      <Field type="email" name="email" placeholder="Email" />
      <Field
        type="phone_number"
        name="phoneNumber"
        placeholder="Phone Number"
      />
      <Field type="text" name="username" placeholder="username" />
      <Field type="password" name="password" placeholder="password" />
      <Field
        type="password"
        name="passwordVerify"
        placeholder="Verify password"
      />
      <Field as="select" name="department">
        <option value="">Choose Department</option>
        <option value="client">Client</option>
        <option value="instructor">Instructor</option>
      </Field>
      <button type="submit">Submit</button>
    </Form>
  );
};

export default Signup;
