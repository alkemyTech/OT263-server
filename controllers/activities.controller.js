const { Activities } = require("../models");

const updateActivities = async (req, res) => {
    const {id} = req.params;
	try {
		const updateActivity = await Activities.update(req.body, { where: { id } });
		if (!updateActivity) return res.status(404).json('No Activity found')

		return res.status(200).json(updateActivity);
	} catch (error) {
		return res.status(500).json(error)
	}
}

module.exports = {
    updateActivities
}