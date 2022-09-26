'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    Promise.all([
      await queryInterface.changeColumn('testimonials', 'updatedAt', {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }),
      await queryInterface.changeColumn('testimonials', 'content', {
        type: Sequelize.TEXT
      })
    ])
  },

  down: async (queryInterface, Sequelize) => {
    Promise.all([
      await queryInterface.changeColumn('testimonials', 'updatedAt', {
        type: Sequelize.DATE,
        allowNull: false
      }),
      await queryInterface.changeColumn('testimonials', 'content', {
        type: Sequelize.STRING
      })
    ])
  }
}
