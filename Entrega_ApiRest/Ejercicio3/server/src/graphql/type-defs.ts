import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type location {
    name: String!
    url: String!
  }

  type origin {
    name: String!
    url: String!
  }

  type character {
    id: String!
    name: String!
    status: String!
    species: String!
    type: String!
    gender: String!
    image: String!
    location: location
    origin: origin
    episode: [String!]!
    url: String!
    created: String!
  }

  type Query {
    hello: String!
    characters: [character!]!
  }
`;
