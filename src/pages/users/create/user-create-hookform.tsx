import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Row } from "reactstrap";
import { SchemaOf } from "yup";
import { CREATE_USER } from "../../../app/graphql/mutations/users.mutations";
import { User } from "../../../app/models/users.models";
import { UserSchemaEnum } from "./user-create-page";

interface IComponentProps {
  schema: SchemaOf<User>;
  initialValues: User;
  submitHandler: (data: User, reset: () => void) => void;
}

export const UserCreateHookForm = ({
  schema,
  initialValues,
  submitHandler,
}: IComponentProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: User) => {
    submitHandler(data, reset);
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
