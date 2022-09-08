const { Activities } = require("../models");

const updateActivities = async (req, res) => {
    const {id} = req.params;
	const activity = req.body;
	try {
		const [updateActivity] = await Activities.update(activity, { where: { id } });
		if (!updateActivity) return res.status(404).json('No Activity found')

		return res.status(200).json(activity);
	} catch (error) {
		return res.status(500).json(error)
	}
}

module.exports = {
    updateActivities
}