const buildModelCondition = (sequelize, DataTypes) => {
  const Condition = sequelize.define('Condition', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    conditionName: {
      type: DataTypes.STRING,
      field: 'condition_name',
      allowNull: false,
    },
  }, {
    sequelize,
    tableName: 'conditions',
    timestamps: false,
  });

  Condition.associate = (models) => {
    Condition.hasMany(models.Product, { foreignKey: 'conditionId', as: 'products' });
  } 

  return Condition;
};
module.exports = buildModelCondition;