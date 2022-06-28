import React from "react";
import { render } from "@testing-library/react";
import { HomePage } from "./home-page";

test("Render Component <Home>", () => {
  const { getByText } = render(<HomePage />);
  expect(getByText(/Welcome Home/i)).toBeInTheDocument();
});
