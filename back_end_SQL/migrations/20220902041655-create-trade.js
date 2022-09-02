'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('trades', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      entry: {
        type: Sequelize.INTEGER
      },
      exit: {
        type: Sequelize.INTEGER
      },
      shares: {
        type: Sequelize.INTEGER
      },
      positionId:{
        type:Sequelize.INTEGER,
        onDelete:'CASCADE',
        references:{
          model:'positions',
          key:'id'
        }
      },
      symbolId:{
        type:Sequelize.INTEGER,
        onDelete:'CASCADE',
        references:{
          model:'symbols',
          key:'id'
        }
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
    await queryInterface.dropTable('trades');
  }
};