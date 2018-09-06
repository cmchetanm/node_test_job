'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      primaryKey:true,
      type:DataTypes.INTEGER
    },
    name:DataTypes.STRING,
    username:{
      type:DataTypes.STRING,
    },
    password:{
      allowNull:false,
      type:DataTypes.STRING,
      validate:{
        notEmpty:true
      }
    },
    birthdate:DataTypes.DATE
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Lock,{
      foreignKey:'userId',
      as:'locks',
    });
  };
  return User;
};
