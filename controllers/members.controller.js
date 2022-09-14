const { Members } = require("../models")

const getMember = async (req, res) => {
  try {
    const [member] = await Members.findAll()
    if (!member) return res.status(404).json(createError.NotFound())

    return res.status(200).json(member)
  } catch (error) {
		if (error.fields) return res.status(400).json(createError.BadRequest(error.original.sqlMessage))
		return res.status(500).json(createError.InternalServerError())
	}
}

module.exports = {
  getMember
}