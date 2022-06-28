import { Field, Formik, FormikProps, useFormikContext } from "formik";
import { useEffect, useRef } from "react";
import { Row } from "reactstrap";
import { SchemaOf } from "yup";
import { User } from "../../../app/models/users.models";
import { UserSchemaEnum } from "./user-create-page";
interface IComponentProps {
  schema: SchemaOf<User>;
  initialValues: User;
  submitHandler: (data: User, reset: () => void) => void;
}

export const UserCreateFormik = ({
  schema,
  initialValues,
  submitHandler,
}: IComponentProps) => {
  // const formikRef = useRef<FormikProps<User>>(null);
  // const { current } = formikRef || {};
  // const {} = formikRef || {};
  // useEffect(() => {
  //   current?.resetForm();
  //   console.log("Hola", formikRef);
  // }, [initialValues]);

  const onSubmitAction = (data: User, reset: () => void) => {
    submitHandler(data, reset);
  };

  return (
    <>
      <Formik
        // innerRef={formikRef}
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values, { resetForm }) => {
          onSubmitAction(values, resetForm);
        }}
      >
        {({ values, errors, touched }) => (
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
                {values?._id ? "Edit" : "Create"}
              </button>
            </Row>
          </>
        )}
      </Formik>
    </>
  );
};
