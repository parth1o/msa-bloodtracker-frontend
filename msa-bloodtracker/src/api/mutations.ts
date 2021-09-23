import { gql } from "@apollo/client";
import * as fragments from "./fragments";

export const LOGIN = gql`
  mutation Login($code: String!) {
    login(input: { code: $code }) {
      patient {
        ...patientFields
      }
      jwt
    }
  }
  ${fragments.PATIENT}
`;

export const EDIT_SELF = gql`
  mutation EditSelf($name: String, $githubURL: String) {
    editSelf(input: { name: $name, githubURL: $githubURL }) {
      ...patientFields
    }
  }
  ${fragments.PATIENT}
`;


export const ADD_BLOODTEST = gql`
  mutation AddBloodtest(
    $date: String!
    $hb: Int!
    $platelets: Int!
    $wBC: Float!
    $neuts: Float!
    $creatinine: Int!
    $mg: Float!
  ) {
    addBloodtest(input: { date: $date, hb: $hb, platelets: $platelets, wBC: $wBC, neuts: $neuts, creatinine: $creatinine, mg: $mg }) {
      ...bloodtestFields
    }
  }
  ${fragments.BLOODTEST}
`;



