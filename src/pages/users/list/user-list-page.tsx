import React from "react";
import { useQuery } from "@apollo/client";
import { USERS_GET_All } from "../../../app/graphql/queries/users.queries";
import { IUsersResponse } from "../../../app/models/users.models";
import { UserDetailTable } from "./user-detail-table";

export const UserListPage = () => {
  const { loading, error, data } = useQuery<IUsersResponse>(USERS_GET_All);
  const { users } = data || {};

  return (
    <>
      <h3>User List Page</h3>
      <div className="mt-4">
        <UserDetailTable users={users} />
      </div>
    </>
  );
};
