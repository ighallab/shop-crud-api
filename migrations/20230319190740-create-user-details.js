'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('userDetails', {
      
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('userDetails');
  }

};