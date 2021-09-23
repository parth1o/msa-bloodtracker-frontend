/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Bloodtest
// ====================================================

export interface Bloodtest_bloodtest_patient {
  __typename: "Patient";
  name: string;
  githubURL: string;
}

export interface Bloodtest_bloodtest {
  __typename: "Bloodtest";
  bloodtestId: string;
  date: string;
  hb: number;
  platelets: number;
  wBC: number;
  neuts: number;
  creatinine: number;
  mg: number;
  patient: Bloodtest_bloodtest_patient;
}

export interface Bloodtest {
  bloodtest: Bloodtest_bloodtest;
}

export interface BloodtestVariables {
  id: string;
}
