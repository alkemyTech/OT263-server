const { Members } = require("../models")
const schema = require("../util/member.joi");


const updateMember = async (req, res) => {
	const { id } = req.params
	const member = req.body
	try {
		const { error } = await schema.validateAsync(member)
		if (error) return res.status(400).json(createError.BadRequest(error.details[0].message))

		const [isUpdated] = await Members.update(member, { where: { id } })
		if (!isUpdated) return res.status(404).json(createError.NotFound())

		return res.status(200).json(member)
	} catch (error) {
		if (error.fields) return res.status(400).json(createError.BadRequest(error.original.sqlMessage))
		return res.status(500).json(createError.InternalServerError())
	}
}

module.exports = {
  updateMember
}