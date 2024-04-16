const fs = require('fs');
const { mkdir } = require("fs/promises");
const { Readable } = require('stream');
const { finished } = require('stream/promises');
const path = require("path");
const productList = require('./productList.json');

const downloadFile = (async (url, fileName) => {
  const res = await fetch(url);
  if (!fs.existsSync("./src/images")) await mkdir("./src/images"); //Optional if you already have downloads directory
  const destination = path.resolve("./src/images", fileName);
  const fileStream = fs.createWriteStream(destination, { flags: 'wx' });
  await finished(Readable.fromWeb(res.body).pipe(fileStream));
});


Promise.all(
  productList.map(async (product, index) => {
    const productId = index + 1;
    // if (index < 1000) await downloadFile(product.picture, productId + '-p' + '.jpg');
    // if (index >= 1000) await downloadFile(product.picture, productId + '-p' + '.jpg');
    // if (index < 1000) await downloadFile(product.picture, productId + '-t' + '.jpg');
    if (index >= 1000) await downloadFile(product.picture, productId + '-t' + '.jpg');
    return product;
  })
)
