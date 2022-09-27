module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          name: 'General',
          description:
            'Acciones que no correspondan a otra categoría, o que correspondan a más de una.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Nutrición',
          description: 'Novedades referentes a las acciones de promoción de la nutrición infantil.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Talleres',
          description: 'Novedades de los talleres realizados y/o a realizar.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Educación',
          description:
            'Novedades las acciones y programas de educación inicial, primaria y secundaria.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Familia',
          description:
            'Novedades las acciones y programas que contienen, cobijan y brindan apoyo a las familias.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Eventos',
          description: 'Novedades de los eventos y acciones desarrollados por la organización.',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {})
  }
}
