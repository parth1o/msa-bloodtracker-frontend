import { gql } from "@apollo/client";

export const PATIENT = gql`
    fragment patientFields on Patient {
        name
        githubURL
    }
`;

export const BLOODTEST = gql`
    fragment bloodtestFields on Bloodtest {
        bloodtestId
        date
        hb
        platelets
        wBC
        neuts
        creatinine
        mg
        patient {
            name
            githubURL
        }
    }
`;

export const PAGE_INFO = gql`
    fragment pageInfoFields on PageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
    }
`;