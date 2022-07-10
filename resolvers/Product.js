exports.Product= {
    category: ({categoryId}, args, {db}) => { // Destructure the categoryId from the parent
      // and categories from the context, the context is taken care of in the index.js file
      return db.categories.find(category => category.id === categoryId)
    },
    reviews: ({id}, args, {db}) => {
      return db.reviews.filter(review => review.productId === id)
    }

  }