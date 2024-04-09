const buildModelProduct = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
    },
    thumbnail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sellerId: {
      type: DataTypes.INTEGER,
      field: 'seller_id',
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    categoryId: {
      type: DataTypes.INTEGER,
      field: 'category_id',
      allowNull: false,
      references: {
        model: 'categories',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    conditionId: {
      type: DataTypes.INTEGER,
      field: 'condition_id',
      allowNull: false,
      references: {
        model: 'conditions',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
  }, {
    sequelize,
    tableName: 'products',
    timestamps: false,
  });

  Product.associate = (models) => {
    Product.belongsTo(models.User, { foreignKey: 'sellerId', as: 'seller' });
    Product.belongsTo(models.Condition, { foreignKey: 'conditionId', as: 'condition' });
    Product.belongsTo(models.Category, { foreignKey: 'categoryId', as: 'category' });
    Product.hasMany(models.Favorite, { foreignKey: 'productId', as: 'favorites' });
    Product.hasMany(models.SaleProduct, { foreignKey: 'productId', as: 'salesProduct' }); 
  };  

  return Product;
};
module.exports = buildModelProduct;