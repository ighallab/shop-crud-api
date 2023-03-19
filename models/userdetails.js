'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {

  class UserDetails extends Model {
    
    //called by models/index.js automatically to register the assotiations
    static associate({User}) {
      UserDetails.belongsTo(User,{
        foreignKey:'userId',
        as:'user',
        onDelete:'CASCADE'
      })
    }

  }


  UserDetails.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement:true,
      allowNull: false,
      primaryKey:true,
    },
    userId:{
      type: DataTypes.INTEGER,
      allowNull:false,
      unique:true,
      references:{
        model:'users',
        key:'id'
      },
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull:false,
      
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull:false,
      
    },
    gender: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    age:{
      type: DataTypes.INTEGER
    },
    address:{
      type: DataTypes.STRING
    },
  }, 
  {
    sequelize,
    modelName: 'UserDetails',
    tableName:'userDetails'
  });


  return UserDetails;
};