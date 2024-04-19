const SaleService = require("../Services/SaleService");
const ProductService = require("../Services/ProductService");

const { StatusCodes } = require("http-status-codes");

const createSale = async (req, res, next) => {
  const { id: authorizedId } = req.authorized;
  const { products: productsId } = req.body;

  // Promise.all(
  //   productsId.map(async ({ productId }) => {
  //     const product = await ProductService.getProductById(productId);
  //     if (!product)
  //       return next({ error: StatusCodes.NO_CONTENT, message: 'Some product does not exist' });
  //     return product;
  //   })
  // )
  // .then((products) => {
  //   if (products.some((product) => product === null))
  //     return next({ error: StatusCodes.NO_CONTENT, message: 'Some product does not exist' });
  // });
    
  const sale = await SaleService.createSale({ userId: authorizedId, ...req.body });

  if (sale.error) return next(sale);

  return res.status(StatusCodes.CREATED).json(sale);
};

const updateSale = async (req, res, next) => {};

const deleteSale = async (req, res, next) => {
  const { id: authorizedId } = req.authorized;
  const { id: saleId } = req.params;

  const sale = await SaleService.getSaleByPk(saleId);

  // if (sale.status !== 'Aguardando pagamento')

};

module.exports = {
  createSale,
  updateSale,
  deleteSale,
};
