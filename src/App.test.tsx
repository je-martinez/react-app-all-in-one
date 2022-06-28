import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./app/store/store";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { graphQLClient } from "./app/graphql/client";

test("Sidebar Links <App>", () => {
  const LabelsLinks = ["Home", "User Create", "User List"];

  const { getByText, getAllByText } = render(
    <Provider store={store}>
      <BrowserRouter>
        <ApolloProvider client={graphQLClient}>
          <App />
        </ApolloProvider>
      </BrowserRouter>
    </Provider>
  );

  LabelsLinks.forEach((item) => {
    expect(getByText(item)).toBeInTheDocument();
  });
});
