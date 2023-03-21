'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    //called by models/index.js automatically to register the assotiations
    static associate({UserDetails , Order}) {
    
      User.hasOne(UserDetails,{
        foreignKey: 'userId', 
        as: 'userDetails'
      });

      User.hasMany(Order,{
        foreignKey:'userId',
        as:'order'
      });

    }

    toJSON(){
      return {
        ...this.get(),
        password:undefined
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