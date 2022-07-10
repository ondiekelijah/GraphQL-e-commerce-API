const { v4: uuid } = require("uuid");

exports.Mutation = {
  addCategory: (parent, { input }, { db }) => {
    const { name } = input;
    const newCategory = {
      id: uuid(),
      name,
    };
    db.categories.push(newCategory);
    return newCategory;
  },
  addProduct: (parent, { input }, { db }) => {
    const { name, description, quantity, price, image, onSale, categoryId } =
      input;
    const newProduct = {
      id: uuid(),
      name,
      description,
      quantity,
      price,
      image,
      onSale,
      categoryId,
    };
    db.products.push(newProduct);
    return newProduct;
  },
  addReview: (parent, { input }, { db }) => {
    const { productId, date, title, comment, rating } = input;
    const newReview = {
      id: uuid(),
      productId,
      date,
      title,
      comment,
      rating,
    };
    db.reviews.push(newReview);
    return newReview;
  },
  // Delete methods

  deleteCategory: (parent, { id }, { db }) => {
    // Check if id is in the database, if not return false and do not delete
    const categoryIndex = db.categories.findIndex(
      (category) => category.id === id
    );
    if (categoryIndex === -1) return false;
    // Delete the category if it is in the database
    db.categories.filter((category) => category.id !== id);
    // The above line alone would delete the category from the array, but we want to
    // also take care of the products that are associated with the category. So we proceed as follows:
    db.products = db.products.map((product) => {
      if (product.categoryId === id)
        return {
          ...product,
          categoryId: null,
        };
      // Destructure the product and set the categoryId to null
      else return product;
    });

    return true;
  },
  deleteProduct: (parent, { id }, { db }) => {
    const productIndex = db.products.findIndex((product) => product.id === id);
    if (productIndex === -1) return false;
    db.products = db.products.filter((product) => product.id !== id);
    db.reviews = db.reviews.filter((review) => review.productId !== id);
    return true;
  },
  deleteReview: (parent, { id }, { db }) => {
    const reviewIndex = db.reviews.findIndex((review) => review.id === id);
    if (reviewIndex === -1) return false;
    db.reviews = db.reviews.filter((review) => review.id !== id);
    return true;
  },
  // Update methods
  updateCategory: (parent, { id, input }, { db }) => {
    const categoryIndex = db.categories.findIndex(
      (category) => category.id === id
    ); // Find the index of the category in the database
    if (categoryIndex === -1) return false; // If the category is not in the database, return false
    db.categories[categoryIndex] = {
      // Update the category in the database
      ...db.categories[categoryIndex], // Destructure the category from the database
      ...input, // Update the category with the input
    };
    return db.categories[categoryIndex]; // Return the updated category
  },
  updateProduct: (parent, { id, input }, { db }) => {
    const productIndex = db.products.findIndex((product) => product.id === id);
    if (productIndex === -1) return false;
    db.products[productIndex] = {
      ...db.products[productIndex],
      ...input,
    };
    return db.products[productIndex];
  },
  updateReview: (parent, { id, input }, { db }) => {
    const reviewIndex = db.reviews.findIndex((review) => review.id === id);
    if (reviewIndex === -1) return false;
    db.reviews[reviewIndex] = {
      ...db.reviews[reviewIndex],
      ...input,
    };
    return db.reviews[reviewIndex];
  },
};
