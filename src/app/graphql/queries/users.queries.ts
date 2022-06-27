import { gql } from "@apollo/client";

export const USERS_GET_All = gql`
  query {
    users {
      name
      age
      email
    }
  }
`;
