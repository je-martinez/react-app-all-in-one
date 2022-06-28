import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { User } from "../../../app/models/users.models";
import { UserDetailTable } from "./user-detail-table";

test("Render List Elements", () => {
  const fakeData: User[] = [
    {
      _id: "fake_user_1",
      name: "Fake Name 1",
      email: "fake.1@mail.com",
      age: 19,
    },
    {
      _id: "fake_user_2",
      name: "Fake Name 2",
      email: "fake.2@mail.com",
      age: 20,
    },
    {
      _id: "fake_user_3",
      name: "Fake Name",
      email: "fake.3@mail.com",
      age: 21,
    },
  ];

  const { getByText, getAllByText } = render(
    <BrowserRouter>
      <UserDetailTable users={fakeData} />
    </BrowserRouter>
  );

  //Edit Panels on Table List
  const numberOfPanels = getAllByText("Edit");

  fakeData.forEach((item) => {
    expect(getByText(item?.name)).toBeInTheDocument();
    expect(getByText(item?.email)).toBeInTheDocument();
    expect(getByText(item?.age)).toBeInTheDocument();
  });

  expect(fakeData?.length).toBe(numberOfPanels?.length);
});
