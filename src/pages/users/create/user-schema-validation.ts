import * as yup from "yup";
import { SchemaOf } from "yup";
import { User } from "../../../app/models/users.models";

export const userSchemaValidation: SchemaOf<User> = yup.object().shape({
  _id: yup.string().notRequired(),
  name: yup.string().required(),
  email: yup.string().required(),
  age: yup.number().required(),
});
