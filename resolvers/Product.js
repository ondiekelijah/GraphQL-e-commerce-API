const { categories } = require("../db");

exports.Product= {
    category: (parent, args, context) => {
      const categoryId = parent.categoryId;
      return categories.find(category => category.id === categoryId)
    }
  }