const { Activities } = require("../models");
const { validateActivity } = require("../util/activity.joi");

const updateActivities = async (req, res) => {
    const {id} = req.params;
	try {
		const { error, value } = validateActivity(req.body)

		if (error) {
			let errors= [];
			error.details.forEach(element => {
				return errors.push(element.message)
			});
			return res.status(400).json({message: errors})
		}

		const [updateActivity] = await Activities.update(value, { where: { id } });
		if (!updateActivity) return res.status(404).json('No Activity found')

		return res.status(200).json(value);
	} catch (err) {
		return res.status(500).json({message: err.message})
	}
}

module.exports = {
    updateActivities
}