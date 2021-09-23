/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Bloodtests
// ====================================================

export interface Bloodtests_bloodtests_pageInfo {
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

export interface Bloodtests_bloodtests_edges {
  __typename: "BloodtestEdge";
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
}

export interface Bloodtests_bloodtests_nodes_patient {
  __typename: "Patient";
  name: string;
  githubURL: string;
}

export interface Bloodtests_bloodtests_nodes {
  __typename: "Bloodtest";
  bloodtestId: string;
  date: string;
  hb: number;
  platelets: number;
  wBC: number;
  neuts: number;
  creatinine: number;
  mg: number;
  patient: Bloodtests_bloodtests_nodes_patient;
}

export interface Bloodtests_bloodtests {
  __typename: "BloodtestConnection";
  /**
   * Information to aid in pagination.
   */
  pageInfo: Bloodtests_bloodtests_pageInfo;
  /**
   * A list of edges.
   */
  edges: Bloodtests_bloodtests_edges[] | null;
  /**
   * A flattened list of the nodes.
   */
  nodes: Bloodtests_bloodtests_nodes[] | null;
}

export interface Bloodtests {
  bloodtests: Bloodtests_bloodtests | null;
}

export interface BloodtestsVariables {
  first?: number | null;
  after?: string | null;
  last?: number | null;
  before?: string | null;
}
