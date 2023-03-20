'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    
    static associate({Product}) {
      
      Category.hasMany(Product,{
        foreignKey:'categoryId',
        as:'products'
      })
    }

  }

  Category.init({
    title: {
      type:DataTypes.STRING,
      unique:true,
      allowNull:false,
    },
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Category',
    tableName:'categories'
  });
  
  return Category;
};