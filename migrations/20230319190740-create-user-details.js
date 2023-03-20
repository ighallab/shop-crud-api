'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('userDetails', {
      
      id: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey:true,
      },
      userId:{
        type: Sequelize.INTEGER,
        allowNull:false,
        unique:true,
        references:{
          model:'users',
          key:'id',
          deferrable: Sequelize.Deferrable.SET_DEFERRED
        },
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull:false,
        
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull:false,
        
      },
      gender: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:true
      },
      age:{
        type: Sequelize.INTEGER
      },
      address:{
        type: Sequelize.STRING
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