import { render, queryByAttribute } from "@testing-library/react";
import { User } from "../../../app/models/users.models";
import { UserCreateFormik } from "./user-create-formik";
import { userSchemaValidation } from "./user-schema-validation";

test("Render Component <User Create Formik>", () => {
  const defaultInitialValues: User = {
    _id: "",
    name: "",
    age: 0,
    email: "",
  };
  const getById = queryByAttribute.bind(null, "id");
  const { getByText, getAllByText, container } = render(
    <UserCreateFormik
      schema={userSchemaValidation}
      initialValues={defaultInitialValues}
      submitHandler={() => {}}
    />
  );
  const inputName = getById(container, "name222");
  const inputAge = getById(container, "age222");
  const inputEmail = getById(container, "email2222");
});
