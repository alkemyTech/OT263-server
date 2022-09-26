'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Activities', 'content', {
      type: Sequelize.TEXT,
      allowNull: false
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Activities', 'content', {
      type: Sequelize.STRING
    })
  }
}
