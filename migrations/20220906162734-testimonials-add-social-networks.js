'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Testimonials', 
        'Facebook', 
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
      ),
      queryInterface.addColumn(
        'Testimonials',
        'Linkedin',
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
      ),
      queryInterface.addColumn(
        'Testimonials',
        'Instagram',
        {
          type: Sequelize.TEXT,
          allowNull: true,
        },
      ),
    ]);
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('Testimonials', 'Facebook'),
      queryInterface.removeColumn('Testimonials', 'Linkedin'),
      queryInterface.removeColumn('Testimonials', 'Instagram'),
    ]);
  }
};
