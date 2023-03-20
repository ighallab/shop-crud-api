'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
  
    static associate({Category}) {
     
      Product.belongsTo(Category,{
        foreignKey:'categoryId',
        as:'category',
      });

    }
    
  }

  Product.init({

    title: {
      type:DataTypes.STRING,
      allowNull:false
    },
    description:{
      type: DataTypes.STRING,
      allowNull:false
    } ,
    image:{
      type:DataTypes.STRING
    },
    price: {
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
        isInt:{
          args:true,
          msg:"price should be integer"
        }
      }
    }

  },
   {

    sequelize,
    modelName: 'Product',
    tableName:'products'
  
  });

  return Product;
};