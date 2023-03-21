'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {

    static associate({User}) {
      // define association here
      Order.belongsTo(User,{
        foreignKey:{
          name: 'userId',
          allowNull:false
        },
        as:'user'
      })

    }

  }

  Order.init({
    shiping_method: {
      type:DataTypes.STRING,
      allowNull:false
    },
    payment_method: {

      type:DataTypes.STRING,
      allowNull:false
    }
  }, 
  {
    sequelize,
    modelName: 'Order',
    tableName:'orders'
  });
  return Order;
};