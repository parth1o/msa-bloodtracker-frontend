import { gql } from "@apollo/client";
import * as fragments from "./fragments";

export const BLOODTESTS = gql`
    query Bloodtests($first: Int, $after: String, $last: Int, $before: String) {
        bloodtests(first: $first, after: $after, last: $last, before: $before) {
            pageInfo{
                ...pageInfoFields
            }
            edges{
                cursor
            } 
            nodes { 
                ...bloodtestFields
                patient{
                    ...patientFields
                }
            }
        }
    }
    ${fragments.BLOODTEST}
    ${fragments.PAGE_INFO}
    ${fragments.PATIENT}
`

export const BLOODTEST  = gql`
    query Bloodtest($id: ID!) {
        bloodtest(id: $id) {
            ...bloodtestFields
        }
    }
    ${fragments.BLOODTEST}
`

export const PATIENTS = gql`
    query Patients($first: Int, $after: String, $last: Int, $before: String) {
        patients(first: $first, after: $after, last: $last, before: $before) {
            pageInfo{
            ...pageInfoFields
            }
            edges{
                cursor
            } 
            nodes { 
                ...patientFields
            }
        }
    }
    ${fragments.PATIENT}
    ${fragments.PAGE_INFO}
`

export const PATIENT = gql`
    query Patient($id: ID!) {
        patient(id: $id){
            ...patientFields
        }
    }
    ${fragments.PATIENT}
`

export const SELF = gql`
    query Self {
        self {
            ...patientFields
        }
    }
    ${fragments.PATIENT}
`