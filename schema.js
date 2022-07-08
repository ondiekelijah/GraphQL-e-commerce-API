const { gql } = require("apollo-server");

// This is where we define the structure of our data, similar to a schema
exports.typeDefs = gql`
  type Query {
    products(filter:ProductFilterInput): [Product!]!
    product(id: ID!): Product!
    categories: [Category!]!
    category(id: ID!): Category
  }
  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String!
    onSale: Boolean!
    category: Category
    reviews: [Review!]!
  }
  type Category {
    id: ID!
    name: String!
    products(filter:ProductFilterInput): [Product!]!
  }

  type Review{
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
  }
  input ProductFilterInput {
    onSale: Boolean
    avgRating: Int
  }
`;