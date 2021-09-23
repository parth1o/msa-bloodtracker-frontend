/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddBloodtest
// ====================================================

export interface AddBloodtest_addBloodtest_patient {
  __typename: "Patient";
  name: string;
  githubURL: string;
}

export interface AddBloodtest_addBloodtest {
  __typename: "Bloodtest";
  bloodtestId: string;
  date: string;
  hb: number;
  platelets: number;
  wBC: number;
  neuts: number;
  creatinine: number;
  mg: number;
  patient: AddBloodtest_addBloodtest_patient;
}

export interface AddBloodtest {
  addBloodtest: AddBloodtest_addBloodtest;
}

export interface AddBloodtestVariables {
  date: string;
  hb: number;
  platelets: number;
  wBC: number;
  neuts: number;
  creatinine: number;
  mg: number;
}
