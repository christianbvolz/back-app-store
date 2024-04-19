const buildModelSale = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      field: 'user_id',
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    totalPrice: {
      type: DataTypes.FLOAT,
      field: 'total_price',
      allowNull: false,
    },
    deliveryAddress: {
      type: DataTypes.STRING,
      field: 'delivery_address',
      allowNull: false,
    },
    deliveryNumber: {
      type: DataTypes.STRING,
      field: 'delivery_number',
    },
    saleDate: {
      type: DataTypes.DATE,
      field: 'sale_date',
      defaultValue: DataTypes.NOW,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    }, {
    sequelize,
    tableName: 'sales',
    timestamps: false,
  });

  Sale.associate = (models) => {   
    Sale.belongsTo(models.User, { foreignKey: 'sellerId', as: 'seller' });
    Sale.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    Sale.hasMany(models.SaleProduct, { foreignKey: 'saleId', as: 'salesProduct' });
  } 

  return Sale;
};
module.exports = buildModelSale;