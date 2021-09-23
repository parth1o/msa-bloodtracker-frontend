/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPatients
// ====================================================

export interface GetPatients_patients_nodes {
  __typename: "Patient";
  name: string;
  githubURL: string;
}

export interface GetPatients_patients {
  __typename: "PatientConnection";
  /**
   * A flattened list of the nodes.
   */
  nodes: GetPatients_patients_nodes[] | null;
}

export interface GetPatients {
  patients: GetPatients_patients | null;
}
