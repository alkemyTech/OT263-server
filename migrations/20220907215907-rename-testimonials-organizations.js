'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.renameTable('Testimonials','Organizations');     
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameTable('Organizations','Testimonials'); 
  }
};
