const ProductService = require("../Services/ProductService");
const { StatusCodes } = require("http-status-codes");

const verifyProducts = async (req, _res, next) => {
  const { products: productsId } = req.body;

  Promise.all(
    productsId.map(async ({ productId }) => {
      const product = await ProductService.getProductById(productId);
      if (!product)
        return next({
          error: StatusCodes.NOT_FOUND,
          message: "Some product does not exist",
        });
      return product;
    })
  ).then(() => next());
};

module.exports = verifyProducts;
