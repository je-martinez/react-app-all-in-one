import React, { useEffect, useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserResponse, User } from "../../../app/models/users.models";
import { UserCreateFormik } from "./user-create-formik";
import { UserCreateHookForm } from "./user-create-hookform";
import classnames from "classnames";
import { useMutation } from "@apollo/client";
import {
  CREATE_USER,
  UPDATE_USER,
} from "../../../app/graphql/mutations/users.mutations";
import { useParams, useNavigate } from "react-router-dom";
import { ExecuteQuery } from "../../../app/services/graphql.service";
import { USERS_GET_BY_ID } from "../../../app/graphql/queries/users.queries";

export enum UserSchemaEnum {
  name = `name`,
  email = `email`,
  age = `age`,
}

const schemaValidation: SchemaOf<User> = yup.object().shape({
  _id: yup.string().notRequired(),
  name: yup.string().required(),
  email: yup.string().required(),
  age: yup.number().required(),
});

const enum TabControlEnum {
  HOOKFORM = "HOOKFORM",
  FORMIK = "FORMIK",
}

const defaultInitialValues: User = {
  _id: "",
  name: "",
  age: 0,
  email: "",
};

export const UserCreatePage = () => {
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState<User>({
    ...defaultInitialValues,
  });
  const { _id } = initialValues || {};
  const [currentTab, setCurrentTab] = useState<TabControlEnum>(
    TabControlEnum.HOOKFORM
  );
  const [createUser] = useMutation(CREATE_USER);
  const [updateUser] = useMutation(UPDATE_USER);
  let { id } = useParams();

  useEffect(() => {
    if (id) getUserById();
    return () => {
      setInitialValues({ ...defaultInitialValues });
      setCurrentTab(TabControlEnum.HOOKFORM);
    };
  }, []);

  const changeTab = (item: TabControlEnum) => {
    setCurrentTab(item);
  };

  const createOrEditUser = async (user: User, reset?: () => any) => {
    const { _id } = user || {};
    const params = { variables: { input: user } };
    if (_id) {
      await updateUser(params);
    } else {
      delete user._id;
      await createUser(params);
    }
    navigate(`/user-list`);
    reset?.();
  };

  const getUserById = async () => {
    const { data, error } =
      (await ExecuteQuery(USERS_GET_BY_ID, {
        id: id,
      })) || {};
    if (error) return;
    const { user } = data || {};
    setInitialValues({ ...user } as User);
  };

  return (
    <>
      <h3>User Create Page</h3>
      <div>
        {/* {JSON.stringify(initialValues)} */}
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({
                active: currentTab === TabControlEnum.HOOKFORM,
              })}
              onClick={() => {
                changeTab(TabControlEnum.HOOKFORM);
              }}
            >
              Hook Form
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({
                active: currentTab === TabControlEnum.FORMIK,
              })}
              onClick={() => {
                changeTab(TabControlEnum.FORMIK);
              }}
            >
              Formik
            </NavLink>
          </NavItem>
        </Nav>
      </div>
      <div>
        <TabContent activeTab={currentTab}>
          <TabPane tabId={TabControlEnum.HOOKFORM}>
            <UserCreateHookForm
              schema={schemaValidation}
              initialValues={initialValues}
              submitHandler={createOrEditUser}
            />
          </TabPane>
          <TabPane tabId={TabControlEnum.FORMIK}>
            <UserCreateFormik
              schema={schemaValidation}
              initialValues={initialValues}
              submitHandler={createOrEditUser}
            />
          </TabPane>
        </TabContent>
      </div>
    </>
  );
};
