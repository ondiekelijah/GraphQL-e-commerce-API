const { ApolloServer, gql } = require("apollo-server");
const { typeDefs } = require("../schema");
const { Query } = require("../resolvers/Query");
const { Product } = require("../resolvers/Product");
const { Mutation } = require("../resolvers/Mutation");
const { db } = require("../db");

describe("test product functionalities", () => {
    // create a test server to test against, using our production typeDefs,
    // resolvers, and context.

    const testServer = new ApolloServer({
        typeDefs,
        resolvers: {
            Query,
            Product,
            Mutation
        },
        context: {
            db,
        },
    });

    // Begin individual test cases

    // test fetching all products
      it("returns a list of products", async () => {
        const result = await testServer.executeOperation({
          query: `
        query{
            products {
              name
              quantity
              price
            }
          }
        `,
        });

        expect(result.errors).toBeUndefined();
        expect(result.data.products).toBeDefined();
        expect(result.data.products.length).toBe(3);
      });
    // test fetching a single product
    it("fetch a single product using an id", async () => {
        const result = await testServer.executeOperation({

            query: `
        query($productId: ID!){
            product(id: $productId) {
                name
                quantity
                price
          }
        }
        `,
            variables: {
                "productId": "53a0724c-a416-4cac-ae45-bfaedce1f147"
            },
        });
        expect (result.errors).toBeUndefined();
        expect(result.data.product).toBeDefined();
        expect(result.data.product.name).toBe('Lawn Mower',);
        expect(result.data.product.quantity).toBe(230);
        expect(result.data.product.price).toBe(42.44);

    });

    // test update product
    it("update a product", async () => {
        const result = await testServer.executeOperation({
            query:
                `
                mutation($updateProductId: ID!, $input: updateProductInput!){
                    updateProduct(id: $updateProductId, input: $input) {
                      name
                    }
                  }
            
            `,
            variables: {
                "updateProductId": "53a0724c-a416-4cac-ae45-bfaedce1f147",
                "input": { "name": "Lawn Mower 2"}
              }
        });

        expect(result.data.updateProduct.name).toBe("Lawn Mower 2");
    });
    // test delete product
    it("delete a product", async () => {
        const result = await testServer.executeOperation({
            query:
                `
                mutation($deleteProductId: ID!){
                    deleteProduct(id: $deleteProductId)
                  }
            `,
            variables: {
                "deleteProductId": "c2af9adc-d0b8-4d44-871f-cef66f86f7f6"
            }
        });
        
        expect(result.data.deleteProduct).toBe(true);
    });
});
