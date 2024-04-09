const buildModelUser = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userName: {
      type: DataTypes.STRING,
      field: 'user_name',
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      field: 'first_name',
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      field: 'last_name',
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    tableName: 'users',
    timestamps: false,
  });

  User.associate = (models) => {
    User.hasMany(models.Sale, { foreignKey: 'userId', as: 'userSales' });
    User.hasMany(models.Sale, { foreignKey: 'sellerId', as: 'sellerSales' });
    User.hasMany(models.Product, { foreignKey: 'sellerId', as: 'products' });
    User.hasMany(models.Favorite, { foreignKey: 'userId', as: 'favorites' });
    User.hasMany(models.ProductReview, { foreignKey: 'userId', as: 'productsReviews' });
  } 

  return User;
};
module.exports = buildModelUser;