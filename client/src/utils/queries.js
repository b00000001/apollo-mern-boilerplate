import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
  query users {
    users {
      _id
      username
      email
    }
  }
`;

export const QUERY_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      _id
      username
      email
    }
  }
`;

export const QUERY_SOCIAL_USER = gql`
<<<<<<< HEAD
  query socialUser($email: String!) {
    socialUser(email: $email) {
=======
  query socialUsers {
    socialUsers{
>>>>>>> 785ef9d096f4f0d42f66d144bed927d40e003cb5
      _id
      username
      email
    }
  }
<<<<<<< HEAD
`;
=======
`
>>>>>>> 785ef9d096f4f0d42f66d144bed927d40e003cb5

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;
