import React from "react";
import { useForm } from "react-hook-form";
import { Col, Row } from "reactstrap";
import { SchemaOf } from "yup";
import { User } from "../../../app/models/users.models";
import { UserSchemaEnum } from "./user-create-page";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../../app/graphql/mutations/users.mutations";

interface IComponentProps {
  schema: SchemaOf<User>;
}

export const UserCreateHookForm = ({ schema }: IComponentProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);

  const onSubmit = (data: User) => {
    createUser({ variables: { input: data } });
    reset();
  };

  return (
    <>
      <Row>
        <form onSubmit={handleSubmit(onSubmit as any)}>
          <Row>
            <div className="form-group">
              <label htmlFor={UserSchemaEnum.name}>Name</label>
              <input
                {...register(UserSchemaEnum.name)}
                type="text"
                className="form-control"
                id={UserSchemaEnum.name}
                placeholder="Name"
              />
            </div>
          </Row>
          <Row>
            <div className="form-group">
              <label htmlFor={UserSchemaEnum.email}>E-Mail</label>
              <input
                {...register(UserSchemaEnum.email)}
                type="text"
                className="form-control"
                id={UserSchemaEnum.email}
                placeholder="E-Mail"
              />
            </div>
          </Row>
          <Row>
            <div className="form-group">
              <label htmlFor={UserSchemaEnum.age}>Age</label>
              <input
                {...register(UserSchemaEnum.age)}
                type="number"
                className="form-control"
                id={UserSchemaEnum.age}
                placeholder="Age"
              />
            </div>
          </Row>
          <Row>
            <button type="submit" className="btn btn-primary">
              Create
            </button>
          </Row>
        </form>
      </Row>
    </>
  );
};
