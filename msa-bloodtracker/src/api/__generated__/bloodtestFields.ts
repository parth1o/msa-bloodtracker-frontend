/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: bloodtestFields
// ====================================================

export interface bloodtestFields_patient {
  __typename: "Patient";
  name: string;
  githubURL: string;
}

export interface bloodtestFields {
  __typename: "Bloodtest";
  bloodtestId: string;
  date: string;
  hb: number;
  platelets: number;
  wBC: number;
  neuts: number;
  creatinine: number;
  mg: number;
  patient: bloodtestFields_patient;
}
