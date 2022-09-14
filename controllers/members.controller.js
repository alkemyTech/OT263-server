const { Members } = require("../models")

const deleteMember = async (req, res) => {
  const {id} = req.params

  try {
    const [delMember] = await Members.destroy({ where: {id} })
    if (!delMember) return res.status(404).json(createError.NotFound())

    return res.status(200).json("DELETED SUCCESS")
  } catch (error) {
		if (error.fields) return res.status(400).json(createError.BadRequest(error.original.sqlMessage))
		return res.status(500).json(createError.InternalServerError())
	}
}


module.exports = {
  deleteMember
}