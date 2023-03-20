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
        key:'id',
        deferrable: 'SET_DEFERRED'
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
      type: DataTypes.STRING,
      validate:{
        isIn:{
          args:['male','female'],
          msg:"gender should be either male or female"
        }

      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
      validate:{
        isEmail:{ 
          args:true,
          msg:"should be ex@[mailserverdomain].com and unique"
        },
      }
      
    },
    age:{
      type: DataTypes.STRING,
      validate:{
        isDate:true
        
      }
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