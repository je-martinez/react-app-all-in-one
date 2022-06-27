import React from "react";
import * as yup from "yup";
import { SchemaOf } from "yup";
import { User } from "../../../app/models/users.models";
import { UserCreateFormik } from "./user-create-formik";
import { UserCreateHookForm } from "./user-create-hookform";

export enum UserSchemaEnum {
  name = `name`,
  email = `email`,
  age = `age`,
}

const schemaValidation: SchemaOf<User> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  age: yup.number().required(),
});

export const UserCreatePage = () => {
  return (
    <>
      <h3>User Create Page</h3>
      <UserCreateHookForm schema={schemaValidation} />
      {/* <UserCreateFormik schema={schemaValidation} /> */}
    </>
  );
};
