'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcrypt');

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
        //password:undefined
      };
    }

  }

  
  User.init({

    username: {
      type:DataTypes.STRING,
      allowNull:false,
      unique: true,
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
      //allowNull:false
    },
    
  }, 
  {
    hooks:{
      beforeCreate: async (user,option) =>{
        //before create the user do some stuff
        const salt = await bcrypt.genSalt();
        user.password = await bcrypt.hash(user.password,salt);
        user.role = 'guest';
      },
    },
    sequelize,
    modelName: 'User',
    tableName:'users'
  });
  return User;
};