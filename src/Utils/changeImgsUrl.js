const fs = require('fs');
const productList = require('./productList.json');

const changeImgsUrl = () => {
  const changedProductList = productList.map((product) => (
    {
    title: product.title,
    price: product.price,
    condition_id: product.condition_id,
    category_id: product.category_id,
    seller_id: product.seller_id,
    }
  ))

  fs.writeFile(__dirname + '/productList.json', JSON.stringify(changedProductList), (err) => {
    if (err) throw err;
  });
}

changeImgsUrl();