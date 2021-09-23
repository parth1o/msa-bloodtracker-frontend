/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Patients
// ====================================================

export interface Patients_patients_pageInfo {
  __typename: "PageInfo";
  /**
   * Indicates whether more edges exist following the set defined by the clients arguments.
   */
  hasNextPage: boolean;
  /**
   * Indicates whether more edges exist prior the set defined by the clients arguments.
   */
  hasPreviousPage: boolean;
  /**
   * When paginating backwards, the cursor to continue.
   */
  startCursor: string | null;
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
}

export interface Patients_patients_edges {
  __typename: "PatientEdge";
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
}

export interface Patients_patients_nodes {
  __typename: "Patient";
  name: string;
  githubURL: string;
}

export interface Patients_patients {
  __typename: "PatientConnection";
  /**
   * Information to aid in pagination.
   */
  pageInfo: Patients_patients_pageInfo;
  /**
   * A list of edges.
   */
  edges: Patients_patients_edges[] | null;
  /**
   * A flattened list of the nodes.
   */
  nodes: Patients_patients_nodes[] | null;
}

export interface Patients {
  patients: Patients_patients | null;
}

export interface PatientsVariables {
  first?: number | null;
  after?: string | null;
  last?: number | null;
  before?: string | null;
}
