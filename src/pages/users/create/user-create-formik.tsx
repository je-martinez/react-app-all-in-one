import React from "react";
import { SchemaOf } from "yup";
import { User } from "../../../app/models/users.models";
import { Formik, Form, Field } from "formik";
import { Row } from "reactstrap";
import { UserSchemaEnum } from "./user-create-page";
interface IComponentProps {
  schema: SchemaOf<User>;
  initialValues: User;
  submitHandler: (data: User) => void;
}

export const UserCreateFormik = ({
  schema,
  initialValues,
  submitHandler,
}: IComponentProps) => {
  const onSubmitAction = (data: User) => {
    submitHandler(data);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={onSubmitAction}
      >
        {({ errors, touched }) => (
          <>
            <Row>
              <div className="form-group">
                <label htmlFor={UserSchemaEnum.name}>Name</label>
                <Field
                  type="text"
                  className="form-control"
                  id={UserSchemaEnum.name}
                  name={UserSchemaEnum.name}
                  placeholder="Name"
                />
              </div>
            </Row>
            <Row>
              <div className="form-group">
                <label htmlFor={UserSchemaEnum.email}>E-Mail</label>
                <Field
                  type="text"
                  className="form-control"
                  id={UserSchemaEnum.email}
                  name={UserSchemaEnum.email}
                  placeholder="E-Mail"
                />
              </div>
            </Row>
            <Row>
              <div className="form-group">
                <label htmlFor={UserSchemaEnum.age}>Age</label>
                <Field
                  type="number"
                  className="form-control"
                  id={UserSchemaEnum.age}
                  name={UserSchemaEnum.age}
                  placeholder="Age"
                />
              </div>
            </Row>
            <Row>
              <button type="submit" className="btn btn-primary">
                Create
              </button>
            </Row>
          </>
        )}
      </Formik>
    </>
  );
};
