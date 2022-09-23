const { Activities } = require("../models");
const { validateActivity } = require("../util/activity.joi");
const schema = require("../util/activitie.joi");

class ActivitiesController {
    async getActivities(req, res) {
        try {
            const activities = await Activities.findAll();
            return res.status(200).json(activities);
        } catch (err) {
            return res.status(404).send({ message: err.message });
        }
    }

    createActivity = async (req, res) => {
        try {
            const value = await schema.validateAsync(req.body);
            return res.json(await Activities.create(value));
        } catch (err) {
            return res.status(400).json({ message: err.message });
        }
    };

    updateActivities = async (req, res) => {
        const { id } = req.params;
        try {
            const { error, value } = validateActivity(req.body);

            if (error) {
                let errors = [];
                error.details.forEach((element) => {
                    return errors.push(element.message);
                });
                return res.status(400).json({ message: errors });
            }

            const [updateActivity] = await Activities.update(value, {
                where: { id },
            });
            if (!updateActivity)
                return res.status(404).json("No Activity found");

            return res.status(200).json(value);
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    };

    async deleteActivity(req, res) {
        const { id } = req.params;
        try {
            const deleteActivity = await Activities.destroy({ where: { id } });
            if (!deleteActivity)
                return res.status(404).json("No Activity found");

            return res.status(200).json("Activity deleted");
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
}

module.exports = { ActivitiesController };
