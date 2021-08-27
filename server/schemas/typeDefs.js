const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }
<<<<<<< HEAD
=======

>>>>>>> 785ef9d096f4f0d42f66d144bed927d40e003cb5
  type SocialUser {
    _id: ID
    username: String
    email: String
  }
<<<<<<< HEAD
=======

>>>>>>> 785ef9d096f4f0d42f66d144bed927d40e003cb5
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(id: ID!): User
<<<<<<< HEAD
=======
    socialUsers: [SocialUser]
>>>>>>> 785ef9d096f4f0d42f66d144bed927d40e003cb5
    socialUser(email: String!): SocialUser
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addSocialUser(username: String!, email: String!): Auth
  }
`;

module.exports = typeDefs;
