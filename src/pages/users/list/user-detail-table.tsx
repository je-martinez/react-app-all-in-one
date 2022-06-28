import React from "react";
import { Button, Table } from "reactstrap";
import { User } from "../../../app/models/users.models";
import { useNavigate } from "react-router-dom";

interface IComponentsProps {
  users: User[] | undefined;
}

export const UserDetailTable = React.memo(({ users }: IComponentsProps) => {
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            {/* <th>ID</th> */}
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((item, index) => (
            <tr key={`tr-${index}`}>
              <th scope="row">{index + 1}</th>
              {/* <td>{item?._id}</td> */}
              <td>{item?.name}</td>
              <td>{item?.email}</td>
              <td>{item?.age}</td>
              <td>
                <PanelOptions user={item} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
});

interface IPanelOptionsProps {
  user: User;
}

export const PanelOptions = ({ user }: IPanelOptionsProps) => {
  const navigate = useNavigate();

  const goToEdit = () => {
    navigate(`/user-edit/${user._id}`);
  };

  return (
    <>
      <p>
        {" "}
        <Button variant="primary" size="sm" onClick={goToEdit}>
          Edit
        </Button>
      </p>
    </>
  );
};
