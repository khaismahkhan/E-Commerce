export var categorizedProducts = (productsArr) => {
  // // var categories=[
  // {
  //   category: "watch",
  // //   products: [{},{}]
  // }
  // ]
  var categories = [];

  //  var categoryName = productsArr.category
  for (var product of productsArr) {
    var categoryName = product.category;

    var isCategoryExist = categories.some(
      (cat) => cat.category === categoryName
    );
    if (isCategoryExist) {
      categories = categories.map((cat) => {
        if (cat.category === categoryName) {
          cat.products.push(product);
          return cat;
        } else {
          return cat;
        }
      });
    } else {
      var newCategory = {
        category: product.category,
        products: [product],
      };
      categories.push(newCategory);
    }
  }
  return categories;
  // console.log(categories)
};

export var addtionOfProductInCart = (allProducts, newProducts) => {
  var exist = allProducts.some((product) => product.id === newProducts.id);
  if (!exist) {
    return [
      ...allProducts,
      {
        ...newProducts,
        quantity: 1,
      },
    ];
  } else {
    return allProducts.map((product) => {
      if (product.id === newProducts.id) {
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      } else {
        return product;
      }
    });
  }
};

export var RemovalOfProductFromCart = (allProducts, newProductId) => {
  var product = allProducts.find((product) => product.id === newProductId);
  if(product){
  if (product.quantity > 0) {
    return allProducts.map((product) => {
      if (product.id === newProductId) {
        return {
          ...product,
          quantity: product.quantity - 1,
        };
      } else {
        return product;
      }
    });
  } else {
    return allProducts.filter((product) => product.id !== newProductId);
  }
}else {
  return allProducts
}
};
