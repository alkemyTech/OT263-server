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
			name: {
				type: DataTypes.STRING,
				validate: {
					notEmpty: true,
					len: [2, 45]
				}
			},
			content: {
				type: DataTypes.STRING,
				validate: { notEmpty: true, len: [2, 255] }
			},
			image: { type: DataTypes.STRING, validate: { isUrl: true } },
			categoryId: {
				type: DataTypes.NUMBER,
				validate: { isInt: true, min: 1 }
			},
			type: {
				type: DataTypes.STRING,
				validate: { notEmpty: true, len: [2, 255] }
			},
			deletedAt: { type: DataTypes.DATE, validate: { isDate: true } },
			createdAt: { type: DataTypes.DATE, validate: { isDate: true } },
			updatedAt: { type: DataTypes.DATE, validate: { isDate: true } }
		},
		{
			sequelize,
			modelName: 'Entries'
		}
	)
	return Entries
}
