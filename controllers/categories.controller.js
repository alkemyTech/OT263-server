const { Categories } = require("../models");
const createError = require("http-errors");

const getCategories = async (req, res,next) => {
    try {
        const categories = await Categories.findAll();
        return res.status(200).json(categories);
    } catch (err) {
        next(err);
    }
};

const createCategory = async (req, res, next) => {
	const { name, description } = req.body;
    try {
        const newCategory = await Categories.create({ name, description });
        return res.status(201).json(newCategory);
    } catch (err) {
        next(err);
    }
};

const updateCategory = async (req, res, next) => {
    const id = req.params.id;
    const { name, description } = req.body;
    try {
        const updatedCategory = await Categories.update(
            { name, description },
            { where: { id } }
        );
        if (!updatedCategory[0]) {
			throw createError.NotFound('Category not found');
		}
        return res.status(200).json(req.body);
    } catch (err) {
        next(err);
    }
};

const deleteCategory = async (req, res, next) => {
    const { id } = req.params;
    try {
        const row = await Categories.destroy({ where: { id } });
		if (!row) throw createError.NotFound('Category not found');

        return res.status(204).send();
    } catch (err) {
        next(err);
    }
};

module.exports = {
    createCategory,
    updateCategory,
    deleteCategory,
    getCategories,
};
