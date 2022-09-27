const { Activities } = require('../models');
const createHttpError = require('http-errors');

class ActivitiesController {
    async getActivities(req, res, next) {
        try {
            const activities = await Activities.findAll();
            if (!activities)
                throw createHttpError(404, 'No hay ninguna actividad');

            return res.status(200).json(activities);
        } catch (err) {
            next(err);
        }
    }

    createActivity = async (req, res, next) => {
        const { name, content, image } = req.body;
        try {
            const newActivity = await Activities.create({
                name,
                content,
                image,
            });

            return res.status(201).json(newActivity);
        } catch (err) {
            next(err);
        }
    };

    updateActivities = async (req, res, next) => {
        const { id } = req.params;
        const updateActivity = req.body;
        try {
            const [row] = await Activities.update(updateActivity, {
                where: { id },
            });
            if (!row)
                throw createHttpError(404, 'No hemos encontrado la actividad');

            return res.status(200).json(value);
        } catch (err) {
            next(err);
        }
    };

    async deleteActivity(req, res, next) {
        const { id } = req.params;
        try {
            const deleteActivity = await Activities.destroy({ where: { id } });
            if (!deleteActivity)
                throw createHttpError(404, 'No hemos encontrado la actividad');

            return res.status(204).json();
        } catch (err) {
            next(err);
        }
    }
}

module.exports = { ActivitiesController };
