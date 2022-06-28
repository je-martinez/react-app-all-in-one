import { ApolloProvider } from "@apollo/client";
import { render } from "@testing-library/react";
import { graphQLClient } from "../../../app/graphql/client";
import { UserListPage } from "./user-list-page";

test("Render Component User List Page", () => {
  const { getByText } = render(
    <ApolloProvider client={graphQLClient}>
      <UserListPage />
    </ApolloProvider>
  );
  expect(getByText(/User List Page/i)).toBeInTheDocument();
});
