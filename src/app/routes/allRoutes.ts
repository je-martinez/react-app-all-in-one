import React from "react";
import { UserCreatePage } from "../../pages/users/user-create-page";
import { UserListPage } from "../../pages/users/user-list-page";
import { HomePage } from "../../pages/home/home-page";
import { Route, Routes } from "react-router-dom";

interface IRoute {
  path: string;
  element: any;
}

export const MainApplicationRoutes: IRoute[] = [
  {
    path: "user-create",
    element: UserCreatePage,
  },
  {
    path: "user-list",
    element: UserListPage,
  },
  {
    path: "/",
    element: HomePage,
  },
];
