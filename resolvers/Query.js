exports.Query = {
    products: (parent, args, context) => products,
    product: (parent, {id}, {products}) => {
      return products.find(product => product.id === id)
    },
    categories: (parent, args, context) => categories,
    category: (parent, {id}, {categories}) => {
      return categories.find(category => category.id === id)
    }
  }