'use strict';
module.exports = (sequelize, DataTypes) => {
  const Lock = sequelize.define('Lock', {
    userId: DataTypes.INTEGER,
    macId: DataTypes.UUID,
    name: DataTypes.STRING
  }, {});
  Lock.associate = function(models) {
    // associations can be defined here
    Lock.belongsTo(models.User,{
      foreignKey: 'userId',
      onDelete:'CASCADE',
    })
  };
  return Lock;
};
