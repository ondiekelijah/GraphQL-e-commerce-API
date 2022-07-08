const { categories, products } = require("../db");


exports.Query = {
    products: (parent, args, context) => products,
    product: (parent, args, context) => {
      const {id} = args;
      return products.find(product => product.id === id)
    },
    categories: (parent, args, context) => categories,
    category: (parent, args, context) => {
      const {id} = args; // Destructure the id 
      return categories.find(category => category.id === id)
    }
  }