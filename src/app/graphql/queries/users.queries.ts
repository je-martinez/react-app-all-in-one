import { gql } from "@apollo/client";

export const USERS_GET_All = gql`
  query {
    users {
      _id
      name
      age
      email
    }
  }
`;

export const USERS_GET_BY_ID = gql`
  query user($id: String!) {
    user(id: $id) {
      _id
      name
      email
      age
    }
  }
`;
