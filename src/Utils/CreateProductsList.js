const fs = require('fs');

const mapProduct = (products, index) => 
  products.map((product) => ({
    title: product.title,
    condition_id: Math.floor((Math.random() * 2) + 1),
    category_id: index + 1,
    seller_id: Math.floor((Math.random() * 4) + 1),
    thumbnail: product.thumbnail,
    picture: product.thumbnail.replace('I','O'),
    price: product.price,
    quantity: Math.floor((Math.random() * 100) + 1),
  }) 
);

const getCategoriesIds = async () => {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const data =  await response.json();
  return data.reduce((acc, item) => {
    acc.push(item.id);
    return acc;
  }, []);
};

const getProducts = async (categoryId) => {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
  const data = await response.json();
  return data.results;
};

const getProductslist = async () => {
  try {
    const categoriesIds = await getCategoriesIds();
    Promise.all(
      categoriesIds.map(async (categoryId, index) => {
        const products = await getProducts(categoryId);
        return mapProduct(products, index);
      })
    )
    .then(async (values) => {
      const productsList = values.reduce((acc, arrayProducts) => {
        arrayProducts.forEach(product => acc.push(product));
        return acc;
      },[]);
      console.log('productsList.length: ', productsList.length);

      fs.writeFile(__dirname + '/productList.json', JSON.stringify(productsList), (err) => {
        if (err) throw err;
      });
    });
  } catch (error) {}
}

getProductslist();
