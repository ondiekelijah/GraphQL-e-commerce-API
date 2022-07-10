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
    const categoryIndex = db.categories.findIndex((category) => category.id === id);
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
        }; // Destructure the product and set the categoryId to null
      else return product;
    });

    return true;
  },
    deleteProduct: (parent, { id }, { db }) => {
    // Check if id is in the database, if not return false and do not delete
    const productIndex = db.products.findIndex((product) => product.id === id);
    if (productIndex === -1) return false;
    // Delete the product if it is in the database
    db.products = db.products.filter((product) => product.id !== id);
    // Cascade delete the reviews associated with the product
    db.reviews = db.reviews.filter((review) => review.productId !== id);
    return true;
  }
};
