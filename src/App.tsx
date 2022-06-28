import { Link, Route, Routes } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "./App.scss";
import {
  AllRoutesEnum,
  DefaultRoutesEnum,
} from "./app/constants/routes.constants";
import { HomePage } from "./pages/home/home-page";
import { UserCreatePage } from "./pages/users/create/user-create-page";
import { UserListPage } from "./pages/users/list/user-list-page";

export const App = () => {
  return (
    <>
      <Container>
        <Row>
          <Col sm={2}>
            <Row>
              <Col>
                <Link to="/">Home</Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link to="/user-create">User Create</Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link to="/user-list">User List</Link>
              </Col>
            </Row>
          </Col>
          <Col sm={10}>
            <AppRouter />
          </Col>
        </Row>
      </Container>
    </>
  );
};

const AppRouter = () => {
  return (
    <Routes>
      <Route path={DefaultRoutesEnum.MAIN} element={<HomePage />}></Route>
      <Route
        path={AllRoutesEnum.USER_CREATE}
        element={<UserCreatePage />}
      ></Route>
      <Route
        path={AllRoutesEnum.USER_EDIT}
        element={<UserCreatePage />}
      ></Route>
      <Route path={AllRoutesEnum.USER_LIST} element={<UserListPage />}></Route>
      <Route path={DefaultRoutesEnum.NOT_FOUND} element={<HomePage />} />
    </Routes>
  );
};

export default App;
