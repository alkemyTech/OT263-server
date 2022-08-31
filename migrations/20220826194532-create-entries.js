'use strict'
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Entries', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			name: {
				allowNull: false,
				type: Sequelize.STRING
			},
			content: {
				allowNull: false,
				type: Sequelize.STRING
			},
			image: {
				allowNull: false,
				type: Sequelize.STRING
			},
			categoryId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'Categories',
					schema: 'schema'
				},
				key: 'id',
				allowNull: false
			},
			type: {
				allowNull: false,
				type: Sequelize.STRING
			},
			deletedAt: {
				type: Sequelize.DATE
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.NOW
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.NOW
			}
		})
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Entries')
	}
}
