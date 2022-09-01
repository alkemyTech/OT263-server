'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class Entries extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Entries.belongsToMany(models.Categories, { through: 'category_entry' })
		}
	}
	Entries.init(
		{
			name: DataTypes.STRING,
			content: DataTypes.STRING,
			image: DataTypes.STRING,
			categoryId: DataTypes.NUMBER,
			type: DataTypes.STRING,
			deletedAt: DataTypes.DATE,
			createdAt: DataTypes.DATE,
			updatedAt: DataTypes.DATE
		},
		{
			sequelize,
			modelName: 'Entries'
		}
	)
	return Entries
}