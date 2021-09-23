/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Login
// ====================================================

export interface Login_login_patient {
  __typename: "Patient";
  name: string;
  githubURL: string;
}

export interface Login_login {
  __typename: "LoginPayload";
  patient: Login_login_patient;
  jwt: string;
}

export interface Login {
  login: Login_login;
}

export interface LoginVariables {
  code: string;
}
