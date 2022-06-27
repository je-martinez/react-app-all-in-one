import React from "react";
import { Table } from "reactstrap";
import { User } from "../../../app/models/users.models";

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
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((item, index) => (
            <tr key={`tr-${index}`}>
              <th scope="row">{index + 1}</th>
              <td>{item?.name}</td>
              <td>{item?.email}</td>
              <td>{item?.age}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
});
