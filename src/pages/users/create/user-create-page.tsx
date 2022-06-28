import React, { useEffect, useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import * as yup from "yup";
import { SchemaOf } from "yup";
import { User } from "../../../app/models/users.models";
import { UserCreateFormik } from "./user-create-formik";
import { UserCreateHookForm } from "./user-create-hookform";
import classnames from "classnames";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../../app/graphql/mutations/users.mutations";

export enum UserSchemaEnum {
  name = `name`,
  email = `email`,
  age = `age`,
}

const schemaValidation: SchemaOf<User> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  age: yup.number().required(),
});

const enum TabControlEnum {
  HOOKFORM = "HOOKFORM",
  FORMIK = "FORMIK",
}

const defaultInitialValues: User = {
  name: "",
  age: 0,
  email: "",
};

export const UserCreatePage = () => {
  const [initialValues, setInitialValues] =
    useState<User>(defaultInitialValues);
  const [currentTab, setCurrentTab] = useState<TabControlEnum>(
    TabControlEnum.HOOKFORM
  );
  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);

  useEffect(() => {
    return () => {
      setInitialValues(defaultInitialValues);
      setCurrentTab(TabControlEnum.HOOKFORM);
    };
  }, []);

  const changeTab = (item: TabControlEnum) => {
    setCurrentTab(item);
  };

  const createOrEditUser = (newUser: User, reset?: () => any) => {
    createUser({ variables: { input: newUser } });
    reset?.();
  };

  return (
    <>
      <h3>User Create Page</h3>
      <div>
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
