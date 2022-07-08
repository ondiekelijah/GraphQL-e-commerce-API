exports.Product= {
    category: ({categoryId}, args, {categories}) => { // Destructure the categoryId from the parent
      // and categories from the context, the context is taken care of in the index.js file
      return categories.find(category => category.id === categoryId)
    }
  }