'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Category}) {
      // define association here

      Product.belongsTo(Category,{
        foreignKey:'categoryId',
        as:'category'
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
      allowNull:false
    }

  },
   {

    sequelize,
    modelName: 'Product',
    tableName:'products'
  
  });

  return Product;
};