const buildModelProductReview = (sequelize, DataTypes) => {
  const ProductReview = sequelize.define('ProductReview', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    comment: {
      type: DataTypes.STRING,
    },
    rate: {
      type: DataTypes.INTEGER,
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
    productId: {
      type: DataTypes.INTEGER,
      field: 'product_id',
      allowNull: false,
      references: {
        model: 'products',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    }, {
    sequelize,
    tableName: 'productsReviews',
    timestamps: false,
  });

  ProductReview.associate = (models) => {   
    ProductReview.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    ProductReview.belongsTo(models.Product, { foreignKey: 'productId', as: 'product' });
  } 

  return ProductReview;
};
module.exports = buildModelProductReview;