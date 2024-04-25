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
    quantity: {
      type: DataTypes.INTEGER,
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
    createdAt: {
      allowNull: false,
      field: 'created_at',
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      field: 'updated_at',
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    tableName: 'products',
  });

  Product.associate = (models) => {
    Product.belongsTo(models.User, { foreignKey: 'sellerId', as: 'seller' });
    Product.belongsTo(models.Condition, { foreignKey: 'conditionId', as: 'condition' });
    Product.belongsTo(models.Category, { foreignKey: 'categoryId', as: 'category' });
    Product.hasMany(models.SaleProduct, { foreignKey: 'productId', as: 'salesProduct' });
    Product.belongsToMany(models.User, {
      through: models.Favorite,
      foreignKey: 'productId',
      as: 'favorites'
    });
    Product.belongsToMany(models.User, {
      through: models.ProductReview,
      foreignKey: 'productId',
      as: 'reviews'
    });
  };  

  return Product;
};
module.exports = buildModelProduct;