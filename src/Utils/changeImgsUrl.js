const fs = require('fs');
const productList = require('./productList.json');

const changeImgsUrl = () => {
  const changedProductList = productList.map((product) => {
    delete product.picture;
    delete product.thumbnail;
    return product;
  })

  fs.writeFile(__dirname + '/productList.json', JSON.stringify(changedProductList), (err) => {
    if (err) throw err;
  });
}

changeImgsUrl();