const {ApolloServer, gql} = require('apollo-server');


const typeDefs = gql`
type Query {
    hello: [String]
    # numberOfAnimals: Int
    # price: Float
    # isCool: Boolean
}

`
const resolvers = {
    Query: { 
        hello: () => ['Hello', 'World'],
        // numberOfAnimals: () => {
        //     return 55;

        // },
        // price: () => {
        //     return 1.99;
        // },
        // isCool: () => {
        //     return true;
        // }
    },

}

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url})=>{
    console.log(`Server ready at ${url}`)
})