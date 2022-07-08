  exports.Category={
    products: ({id: categoryId}, args, {products}) => {
      const categoryProducts = products.filter(product => product.categoryId === categoryId);
      let filteredCategoryProducts = categoryProducts;

      if(args.filter){
        if(args.filter.onSale === true){
          filteredCategoryProducts = filteredCategoryProducts.filter(product=>{
            return product.onSale;
          });
        }
      }

      return filteredCategoryProducts;
    }
  }