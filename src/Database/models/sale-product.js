const buildModelSaleProduct = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('SaleProduct', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    saleId: {
      field: 'sale_id',
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'sales',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    productId: {
      field: 'product_id',
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'products',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
    }, {
    sequelize,
    tableName: 'salesProducts',
    timestamps: false,
  });

  SaleProduct.associate = (models) => {   
    SaleProduct.belongsTo(models.Sale, { foreignKey: 'saleId', as: 'sale' });
    SaleProduct.belongsTo(models.Product, { foreignKey: 'productId', as: 'product' });
  } 

  return SaleProduct;
};
module.exports = buildModelSaleProduct;