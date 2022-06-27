import React from "react";
import { SchemaOf } from "yup";
import { User } from "../../../app/models/users.models";

interface IComponentProps {
  schema: SchemaOf<User>;
}

export const UserCreateFormik = ({ schema }: IComponentProps) => {
  return <></>;
};
