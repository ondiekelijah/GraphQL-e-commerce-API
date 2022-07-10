const { v4: uuid } = require('uuid');

exports.Mutation = {
    addCategory: (parent, {input}, {db}) => {
        const { name } = input;
        const newCategory = {
            id: uuid(),
            name
        }
        db.categories.push(newCategory);
        return newCategory;
        
    },
    addProduct: (parent, {input}, {db}) => {
        const { 
            name, 
            description,
            quantity,
            price,
            image,
            onSale ,
            categoryId
        } = input;
        const newProduct = {
            id: uuid(),
            name, 
            description,
            quantity,
            price,
            image,
            onSale ,
            categoryId
        }
        db.products.push(newProduct);
        return newProduct;
    },
    addReview: (parent, {input}, {db}) => {
        const { 
            productId, 
            date,
            title,
            comment,
            rating
        } = input;
        const newReview = {
            id: uuid(),
            productId, 
            date,
            title,
            comment,
            rating
        }
        db.reviews.push(newReview);
        return newReview;
    },
    // Delete methods

    deleteCategory: (parent, {id}, {db}) => {
        db.categories.filter(category => category.id !== id);
    }

        
}
