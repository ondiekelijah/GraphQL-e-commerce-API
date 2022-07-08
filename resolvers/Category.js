const { products } = require("../db");

  exports.Category={
    products: (parent, args, context) => {
      const categoryId = parent.id;
      return products.filter(product => product.categoryId === categoryId)
    }
  }