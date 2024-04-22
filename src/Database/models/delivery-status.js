const buildModelDeliveryStatus = (sequelize, DataTypes) => {
  const DeliveryStatus = sequelize.define('DeliveryStatus', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    statusName: {
      type: DataTypes.STRING,
      field: 'status_name',
      allowNull: false,
    },
  }, {
    sequelize,
    tableName: 'deliveryStatus',
    timestamps: false,
  });
  
  return DeliveryStatus;
};

module.exports = buildModelDeliveryStatus;
