const buildModelCategory = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    categoryName: {
      type: DataTypes.STRING,
      field: 'category_name',
      allowNull: false,
    },
  }, {
    sequelize,
    tableName: 'categories',
    timestamps: false,
  });

  Category.associate = (models) => {
    Category.hasMany(models.Product, { foreignKey: 'categoryId', as: 'products' });
  } 
  
  return Category;
};
module.exports = buildModelCategory;