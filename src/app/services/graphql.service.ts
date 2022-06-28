import { DocumentNode } from "graphql";
import { graphQLClient } from "../graphql/client";

export const ExecuteQuery = (query: DocumentNode, variables?: any) => {
  const queryOptions = { query, variables };
  return graphQLClient.query(queryOptions);
};
