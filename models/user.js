'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    //called by models/index.js automatically to register the assotiations
    static associate({UserDetails}) {
    
      User.hasOne(UserDetails,{
        foreignKey: 'userId', 
        as: 'userDetails'
      });
    }

    toJSON(){
      return {
        ...this.get(),
        password:undefined,
        createdAt:undefined
      };
    }

  }

  
  User.init({
    username: {
      type:DataTypes.STRING,
      allowNull:false
    },
    password:{
      type:DataTypes.STRING,
      allowNull:false
    },
    token: {
      type:DataTypes.STRING
    },
    role:{
      type:DataTypes.STRING,
      allowNull:false
    },
  }, {
    sequelize,
    modelName: 'User',
    tableName:'users'
  });
  return User;
};