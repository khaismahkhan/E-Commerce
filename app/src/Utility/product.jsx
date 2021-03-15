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
        categories = categories.map((cat)=>{
          if(cat.category === categoryName){
            cat.products.push(product)
            return cat
          }else{
            return cat
          }
        })
        
  
      } else {
        var newCategory = {
          category: product.category,
          products: [product],
        };
        categories.push(newCategory);
      }
    }
    return categories
    // console.log(categories)
  };