const { gql } = require("apollo-server");

module.exports = gql`
  # This is a comments in GQL

  # Each type specifies the queryable fields of it's type
  type Post {
    id: ID!
    body: String!
    createdAt: String!
    username: String!
  }
  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
  }
  input RegisterInput {
    username: String!
    password: String!
    confirmedPassword: String!
    email: String!
  }

  # Following types are special, because it sepcifies
  # All the queries a client can execute.
  # Each query is associated with a type above
  
  type Query {
    getPosts: [Post]
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
  }
`;
