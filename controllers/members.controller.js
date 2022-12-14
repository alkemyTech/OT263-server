const { Member } = require("../models")
const schema = require("../util/member.joi");
const createError = require('http-errors')

const deleteMember = async (req, res) => {
  const {id} = req.params

  try {
    const delMember = await Member.destroy({ where: {id} })
    if (!delMember) return res.status(404).json(createError.NotFound())

    return res.status(200).json("DELETED SUCCESS")
  } catch (error) {
		if (error.fields) return res.status(400).json(createError.BadRequest(error.original.sqlMessage))
		return res.status(500).json(createError.InternalServerError())
	}
}

const updateMember = async (req, res) => {
	const { id } = req.params
	const member = req.body
  
	try {
		await schema.validateAsync(member)

		const [isUpdated] = await Member.update(member, { where: { id } })
    
		if (!isUpdated) return res.status(404).json(createError.NotFound())
    
		return res.status(200).json(member)
	} catch (error) {
		return res.status(400).json(createError.BadRequest())
	}
}

const getMembers = async (req, res) => {
  try {
    const member = await Member.findAll()
    if (!member) return res.status(404).json(createError.NotFound())

    return res.status(200).json(member)
  } catch (error) {
		if (error.fields) return res.status(400).json(createError.BadRequest(error.original.sqlMessage))
		return res.status(500).json(createError.InternalServerError())
	}
}

const createMember = async (req, res) => {
  const values = req.body
  try {
      const { error } = await schema.validateAsync(values)
      if(error){
          return res.status(400).json({message: error.details[0].message})
      }
      const member = await Member.create({
          ...values
      })
      return res.status(200).json(member);
  } catch (err) {
      return res.status(500).json({message: err.message});
  }
}

module.exports = {
  updateMember,
  getMembers,
  deleteMember,
  createMember
}