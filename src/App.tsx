import { Link, Route, Routes } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "./App.scss";
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
      <Route path={"/"} element={<HomePage />}></Route>
      <Route path={"user-create"} element={<UserCreatePage />}></Route>
      <Route path={"user-edit/:id"} element={<UserCreatePage />}></Route>
      <Route path={"user-list"} element={<UserListPage />}></Route>
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};

export default App;
