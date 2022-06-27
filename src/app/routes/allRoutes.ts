import { HomePage } from "../../pages/home/home-page";
import { UserCreatePage } from "../../pages/users/create/user-create-page";
import { UserListPage } from "../../pages/users/list/user-list-page";

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
