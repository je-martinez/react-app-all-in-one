import { ApolloProvider } from "@apollo/client";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { graphQLClient } from "../../../app/graphql/client";
import { UserCreatePage } from "./user-create-page";

test("Render Tabs <User Create Page>", () => {
  const { getByText, getAllByText } = render(
    <BrowserRouter>
      <ApolloProvider client={graphQLClient}>
        <UserCreatePage />
      </ApolloProvider>
    </BrowserRouter>
  );
  expect(getByText(/User Create Page/i)).toBeInTheDocument();
  expect(getByText(/Hook Form/i)).toBeInTheDocument();
  expect(getByText(/Formik/i)).toBeInTheDocument();
});
