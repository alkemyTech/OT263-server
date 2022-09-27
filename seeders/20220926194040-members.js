'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Members',
      [
        {
          name: 'María Iraola',
          image:
            'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Marita Gomez',
          image:
            'https://images.unsplash.com/photo-1526080652727-5b77f74eacd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Miriam Rodriguez',
          image:
            'https://images.unsplash.com/photo-1594819043778-2382e859f56f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Cecilia Mendez',
          image:
            'https://images.unsplash.com/photo-1534180477871-5d6cc81f3920?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Mario Fuentes',
          image:
            'https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Rodrigo Fuente',
          image:
            'https://images.unsplash.com/photo-1535643302794-19c3804b874b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Maria Garcia',
          image:
            'https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=744&q=80',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Marco Fernandez',
          image:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Luca Petroroso',
          image:
            'https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Julio Rivas',
          image:
            'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=848&q=80',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Maria Dolores Paz',
          image:
            'https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Members', null, {})
  }
}
