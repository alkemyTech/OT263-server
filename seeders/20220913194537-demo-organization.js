'use strict'

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'Organizations',
			[
				{
					name: 'Somos Más',
					image:
						'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
					phone: '54123076',
					address: 'Av. Andrés Rolón 1558, B1643BOP Béccar, Provincia de Buenos Aires',
					welcomeText: 'Hola! Bienvenidx',
					facebook: 'https://www.facebook.com/',
					linkedin: 'https://www.linkedin.com/',
					instagram: 'https://www.instagram.com/',
					createdAt: new Date(),
					updatedAt: new Date()
				}
			],
			{}
		)
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Organizations', null, {})
	}
}
