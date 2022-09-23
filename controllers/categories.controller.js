const { Categories } = require('../models')
const createError = require('http-errors')
const { updateCategorySchema } = require("../util/category.joi");
const Joi = require('joi')

const getCategories = async (req, res) => {
	try {
		const categories = await Categories.findAll()
		return res.status(200).json(categories)
	} catch (err) {
		return res.status(404).json(createError.NotFound(err.message))
	}
}

const createCategory = async (req, res) => {
	try {
		const { error } = validateCategory(req.body)
		if (error) return res.status(400).json(createError.BadRequest(error.details[0].message))

		const category = await Categories.create(req.body)

		return res.status(200).json(category)
	} catch (error) {
		return res.status(500).json(createError.InternalServerError(error.message))
	}
}

function validateCategory(entry) {
	const schema = Joi.object({
		name: Joi.string().required(),
		message: Joi.string().min(2).required()
	})

	return schema.validate(entry)
}

const updateCategory = async (req, res, next) => {
	try {
		const id = req.params.id;
		const { name, description } = req.body;
		await updateCategorySchema.validateAsync({name, description});
	
		const updatedCategory = await Categories.update({name, description}, {where: {id}});
		if (updatedCategory[0] === 0) {
			throw createError.NotFound("Category not found");
		}

		return res.status(200).json(req.body);
	} catch (err) {
		next(err);
	}
}


const deleteCategory = async (req, res) => {
	const { id } = req.params
	try {
		const row = await Categories.destroy({ where: { id } })
		if (!row) return res.status(404).json(createError.NotFound())

		return res.status(204).send()
	} catch (error) {
		return res.status(500).json(createError.InternalServerError())
	}
}


module.exports = {
	createCategory,
	updateCategory,
	deleteCategory,
	getCategories
}
