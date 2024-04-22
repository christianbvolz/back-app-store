const SaleService = require("../Services/SaleService");

const { StatusCodes } = require("http-status-codes");

const getSale = async (req, res, next) => {
  const { id: authorizedId } = req.authorized;
  const { id: saleId } = req.params;
  
  if (isNaN(+saleId)) return next({ error: StatusCodes.UNPROCESSABLE_ENTITY, message: 'Id must be a number' });
  
  const sale = await SaleService.getSaleByPk(+saleId);
  
  if (!sale) return next({ error: StatusCodes.NOT_FOUND, message: "Sale does not exist" });
  
  if (sale.userId !== authorizedId)
    return next({
      error: StatusCodes.UNAUTHORIZED,
      message: "Unauthorized user",
    });

  return res.status(StatusCodes.OK).json(sale);
};

const createSale = async (req, res, next) => {
  const { id: authorizedId } = req.authorized;

  const sale = await SaleService.createSale({
    userId: authorizedId,
    ...req.body,
  });

  if (sale.error) return next(sale);

  return res.status(StatusCodes.CREATED).json(sale);
};

const updateSale = async (req, res, next) => {
  const { id: saleId } = req.params;

  if (isNaN(+saleId)) return next({ error: StatusCodes.UNPROCESSABLE_ENTITY, message: 'Id must be a number' });

  const sale = await SaleService.getSaleByPk(+saleId);

  if (!sale) return next({ error: StatusCodes.NOT_FOUND, message: "Sale does not exist" });

  const updatedSale = await SaleService.updateSale({ saleId, ...req.body });

  return res.status(StatusCodes.OK).json(updatedSale);
};

const deleteSale = async (req, res, next) => {
  const { id: authorizedId } = req.authorized;
  const { id: saleId } = req.params;

  if (isNaN(+saleId)) return next({ error: StatusCodes.UNPROCESSABLE_ENTITY, message: 'Id must be a number' });

  const sale = await SaleService.getSaleByPk(+saleId);

  if (!sale) return next({ error: StatusCodes.NOT_FOUND, message: "Sale does not exist" });

  if (sale.saleStatusId > 1 || sale.userId !== authorizedId)
    return next({
      error: StatusCodes.UNAUTHORIZED,
      message: "Unauthorized user",
    });

  await SaleService.deleteSale(+saleId);

  return res.status(StatusCodes.OK).json({ message: 'Sale removed' });
};

module.exports = {
  getSale,
  createSale,
  updateSale,
  deleteSale,
};
