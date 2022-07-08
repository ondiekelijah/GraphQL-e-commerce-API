exports.Query = {
    products: (parent, args, context) => products,
    product: (parent, {id}, context) => {
      return products.find(product => product.id === id)
    },
    categories: (parent, args, context) => categories,
    category: (parent, {id}, context) => {
      return categories.find(category => category.id === id)
    }
  }